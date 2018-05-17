import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import Header from './common/component/header/Header';
import Tabs from './common/component/tabs/Tabs';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Tabs/>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <h1 className={styles.AppTitle}>Welcome to React</h1>
        </header>
        <p className={styles.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
