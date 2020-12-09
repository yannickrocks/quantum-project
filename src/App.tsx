import React from "react";
import HomePage from "src/screens/homepage";
import Puzzle1 from "src/screens/puzzle1";
import Puzzle2a from "src/screens/puzzle2/puzzle2a";
import Puzzle2Opener from "src/screens/puzzle2/opener";
import Puzzle2b from "src/screens/puzzle2/puzzle2b";
import Puzzle3Opener from "src/screens/puzzle3/opener";
import Puzzle3 from "src/screens/puzzle3";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Congratulations from "./screens/congratulations";
import Failure from "./screens/failure";
import Credits from "./screens/credits";

const App = () => {
  const randomPicker = Math.floor(Math.random() * 100);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/22minutes" exact component={Puzzle1} />
        <Route path="/wakeup" exact component={Puzzle2Opener} />
        {randomPicker > 15 ? (
          <Route path="/wanderingmoon" exact>
            <Puzzle2a />
          </Route>
        ) : (
          <Route path="/wanderingmoon" exact>
            <Puzzle2b />
          </Route>
        )}
        <Route path="/wakeupagain" exact component={Puzzle3Opener} />
        <Route path="/finalvoyage" exact component={Puzzle3} />
        <Route path="/congratulations" exact component={Congratulations} />
        <Route path="/failure" exact component={Failure} />
        <Route path="/credits" exact component={Credits} />
      </Switch>
    </Router>
  );
};

export default App;
