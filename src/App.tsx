import React from 'react';
import './App.css';
import HomePage from 'src/screens/homepage';
import Puzzle1 from 'src/screens/puzzle1';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/puzzle1" exact component={Puzzle1}></Route>
      </Switch>
    </Router>
  );
}

export default App;
