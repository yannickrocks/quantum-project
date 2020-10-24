import React, { useState } from "react";
import HomePage from "src/screens/homepage";
import Puzzle1 from "src/screens/puzzle1";
import Puzzle2a from "src/screens/puzzle2/puzzle2a";
import Puzzle2Opener from "src/screens/puzzle2/opener";
import Puzzle2b from "src/screens/puzzle2/puzzle2b";
import Puzzle3Opener from "src/screens/puzzle3/opener";
import Puzzle3 from "src/screens/puzzle3";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  const randomPicker = Math.floor(Math.random() * 100);
  const [counter, setCounter] = useState(0);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/22minutes" exact component={Puzzle1} />
        <Route path="/WakeUp" exact component={Puzzle2Opener} />
        {counter < 1 ? (
          <Route path="/wanderingmoon" exact>
            <Puzzle2a
              increaseCounter={() => {
                var newCounter = counter + 1;
                return setCounter(newCounter);
              }}
              counter={counter}
            />
          </Route>
        ) : randomPicker > 25 ? (
          <Route path="/wanderingmoon" exact>
            <Puzzle2a
              increaseCounter={() => {
                var newCounter = counter + 1;
                return setCounter(newCounter);
              }}
              counter={counter}
            />
          </Route>
        ) : (
          <Route path="/wanderingmoon" exact>
            <Puzzle2b
              increaseCounter={() => {
                var newCounter = counter + 1;
                return setCounter(newCounter);
              }}
            />
          </Route>
        )}
        <Route path="/WakeUpAgain" exact component={Puzzle3Opener} />
        <Route path="/finalvoyage" exact component={Puzzle3}></Route>
      </Switch>
    </Router>
  );
};

export default App;
