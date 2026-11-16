import HomePage from './screens/homepage'
import Puzzle1 from './screens/puzzle1'
import WanderingMoon from './screens/puzzle2'
import Opener from './screens/opener'
import Puzzle3 from './screens/puzzle3'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import ConsciousObserver from './screens/consciousobserver'
import TerribleFate from './screens/terriblefate'

const App = () => {
  const randomPicker = Math.floor(Math.random() * 100)

  return (
    <BrowserRouter>
      <main>
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
      </main>
    </BrowserRouter>
  )
}

export default App
