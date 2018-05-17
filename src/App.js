import React, { Component } from 'react';
import styles from './App.css';
import Header from './common/component/Header/Header';
import Tabs from './common/component/Tabs/Tabs';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Tabs/>
        <header className={styles.AppHeader}>
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
