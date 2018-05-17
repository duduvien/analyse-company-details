import React, {Component} from 'react';
import Header from '../../common/component/Header/Header';
import Tabs from '../../common/component/Tabs/Tabs';
import Footer from '../../common/component/Footer/Footer';

export default class Home extends Component {
    render() {
        return (
            <div>
              <Header/>
              <Tabs/>
              <Footer />
            </div>
        );
    }
}