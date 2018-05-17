import React, { Component } from 'react';
import Header from './common/component/Header/Header';
import Tabs from './common/component/tabs/Tabs';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Tabs/>
      </div>
    );
  }
}

export default App;
