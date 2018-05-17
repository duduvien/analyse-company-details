import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';
import "semantic-ui-css/semantic.css";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router>
    <App />
</Router>, document.getElementById('root'));
registerServiceWorker();
