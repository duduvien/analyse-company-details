import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import CompanyReview from './pages/CompanyReview/CompanyReview';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route path="/" exact component={Home}/>
          <Route path="/review" component={CompanyReview}/>
      </div>
    );
  }
}

export default App;
