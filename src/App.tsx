import React from 'react'
import HomePage from './screens/homepage'
import Puzzle1 from './screens/puzzle1'
import Puzzle2a from './screens/puzzle2/puzzle2a'
import Puzzle2Opener from './screens/puzzle2/opener'
import Puzzle2b from './screens/puzzle2/puzzle2b'
import Puzzle3Opener from './screens/puzzle3/opener'
import Puzzle3 from './screens/puzzle3'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ConsciousObserver from './screens/consciousobserver'
import TerribleFate from './screens/terriblefate'

const App = () => {
  const randomPicker = Math.floor(Math.random() * 100)

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/22minutes" exact component={Puzzle1} />
        <Route path="/wakeup" exact component={Puzzle2Opener} />
        <Route path="/wanderingmoon" exact component={Puzzle2a} />
        {randomPicker > 33 ? (
          <Route path="/thewanderingmoon" exact>
            <Puzzle2a />
          </Route>
        ) : (
          <Route path="/thewanderingmoon" exact>
            <Puzzle2b />
          </Route>
        )}
        <Route path="/wakeupagain" exact component={Puzzle3Opener} />
        <Route path="/finalvoyage" exact component={Puzzle3} />
        <Route path="/consciousobserver" exact component={ConsciousObserver} />
        <Route path="/terriblefate" exact component={TerribleFate} />
      </Switch>
    </Router>
  )
}

export default App
