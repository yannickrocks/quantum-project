import { lazy, Suspense, type ComponentType } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'

const reloadKey = 'chunk-reload-attempted'

const readFlag = () => {
  try {
    return sessionStorage.getItem(reloadKey) !== null
  } catch {
    return true
  }
}

const writeFlag = (hasReloaded: boolean) => {
  try {
    if (hasReloaded) sessionStorage.setItem(reloadKey, '1')
    else sessionStorage.removeItem(reloadKey)
  } catch {
    return
  }
}

const lazyScreen = <T extends ComponentType<any>>(
  load: () => Promise<{ default: T }>,
) =>
  lazy(() =>
    load().then(
      (module) => {
        writeFlag(false)
        return module
      },
      (error) => {
        if (readFlag()) throw error
        writeFlag(true)
        window.location.reload()
        return new Promise<never>(() => {})
      },
    ),
  )

const HomePage = lazyScreen(() => import('./screens/homepage'))
const Puzzle1 = lazyScreen(() => import('./screens/puzzle1'))
const WanderingMoon = lazyScreen(() => import('./screens/puzzle2'))
const Opener = lazyScreen(() => import('./screens/opener'))
const Puzzle3 = lazyScreen(() => import('./screens/puzzle3'))
const ConsciousObserver = lazyScreen(
  () => import('./screens/consciousobserver'),
)
const TerribleFate = lazyScreen(() => import('./screens/terriblefate'))

const App = () => {
  const randomPicker = Math.floor(Math.random() * 100)

  return (
    <BrowserRouter>
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/22minutes" element={<Puzzle1 />} />
            <Route
              path="/wakeup"
              element={<Opener href="/wanderingmoon" alt="Mask Puzzle 2" />}
            />
            <Route path="/wanderingmoon" element={<WanderingMoon />} />
            <Route
              path="/thewanderingmoon"
              element={<WanderingMoon isMoonFound={randomPicker <= 33} />}
            />
            <Route
              path="/wakeupagain"
              element={<Opener href="/finalvoyage" alt="Mask Puzzle 3" />}
            />
            <Route path="/finalvoyage" element={<Puzzle3 />} />
            <Route path="/consciousobserver" element={<ConsciousObserver />} />
            <Route path="/terriblefate" element={<TerribleFate />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  )
}

export default App
