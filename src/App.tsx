import React from 'react';
import './App.css';
import HomePage from 'src/screens/homepage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
