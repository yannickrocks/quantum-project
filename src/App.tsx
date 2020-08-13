import React from 'react';
import './App.css';
import OuterWildsLogo from 'src/assets/Outerwilds-Logo_web.png';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={OuterWildsLogo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
