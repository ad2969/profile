import React from "react";
import logo from "./assets/logo.svg";
import styles from "./App.module.scss";

const App = () => {
    return (
        <div className={styles.app}>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className={`${styles.link} button button--darken`}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;
