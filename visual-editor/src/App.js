import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './global/styles';
import {UnitEditorWidget} from './components/UnitEditorWidget/UnitEditorWidget';

function App() {
  return (
    <div className={styles.unitWrapper}>
        <div className={styles.unitContentBar}>
            <UnitEditorWidget />
        </div>
        <div className={styles.unitSideBar} />
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
