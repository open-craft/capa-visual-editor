import React from 'react';
import logo from './logo.svg';
import './assets/scss/app.scss';
// import './assets/scss/_global.scss';
// import './assets/scss/_theme.scss';
// import './assets/scss/styles.scss';
import {UnitEditorWidget} from './components/UnitEditorWidget/UnitEditorWidget';

function App() {

  return (
    <div className="unit-wrapper">
        <div className="unit-content-bar">
            <UnitEditorWidget />
        </div>
        <div />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
