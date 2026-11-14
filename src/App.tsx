import HomePage from './screens/homepage'
import Puzzle1 from './screens/puzzle1'
import Puzzle2a from './screens/puzzle2/puzzle2a'
import Opener from './screens/opener'
import Puzzle2b from './screens/puzzle2/puzzle2b'
import Puzzle3 from './screens/puzzle3'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import ConsciousObserver from './screens/consciousobserver'
import TerribleFate from './screens/terriblefate'

const App = () => {
  const randomPicker = Math.floor(Math.random() * 100)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/22minutes" element={<Puzzle1 />} />
        <Route
          path="/wakeup"
          element={<Opener href="/wanderingmoon" alt="Mask Puzzle 2" />}
        />
        <Route path="/wanderingmoon" element={<Puzzle2a />} />
        <Route
          path="/thewanderingmoon"
          element={randomPicker > 33 ? <Puzzle2a /> : <Puzzle2b />}
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
    </BrowserRouter>
  )
}

export default App
