import React from "react";
import HomePage from "src/screens/homepage";
import Puzzle1 from "src/screens/puzzle1";
import Puzzle2a from "src/screens/puzzle2/puzzle2a";
import Puzzle2b from "src/screens/puzzle2/puzzle2b";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  const randomPicker = Math.floor(Math.random() * 100);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/22minutes" exact component={Puzzle1}></Route>
        {randomPicker > 40 ? (
          <Route path="/wanderingmoon" exact component={Puzzle2a}></Route>
        ) : (
          <Route path="/wanderingmoon" exact component={Puzzle2b}></Route>
        )}
      </Switch>
    </Router>
  );
};

export default App;
