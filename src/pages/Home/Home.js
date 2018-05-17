import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Header from '../../common/component/Header/Header';
import Tabs from '../../common/component/Tabs/Tabs';

export default class Home extends Component {
    render() {
        return (
            <div>
              <Header/>
              <Tabs/>
              <Link to="/review">Your personal review.</Link>
            </div>
        );
    }
}