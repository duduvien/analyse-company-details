import React, { Component } from 'react';
import Header from './common/component/Header/Header';
import Tabs from './common/component/Tabs/Tabs';
import ExcitedIcon from './common/component/ExcitedIcon/ExcitedIcon';
import HappyIcon from './common/component/HappyIcon/HappyIcon';
import SadIcon from './common/component/SadIcon/SadIcon';
import BoredIcon from './common/component/BoredIcon/BoredIcon';
import AngryIcon from './common/component/AngryIcon/AngryIcon';
import FearIcon from './common/component/FearIcon/FearIcon';
import SarcasmIcon from './common/component/SarcasmIcon/SarcasmIcon';
import styles from './App.css';
import CompanyReview from './pages/CompanyReview/CompanyReview';

class App extends Component {
  render() {
    return (
    <div className="App">
        <Header/>
        <Tabs/>
        <div style={{backgroundColor: 'red', height: '100px'}}>
            <ExcitedIcon className={styles.icon} svgClassName={styles.iconSvg}/>
            <HappyIcon className={styles.icon} svgClassName={styles.iconSvg}/>
            <SadIcon className={styles.icon} svgClassName={styles.iconSvg}/>
            <BoredIcon className={styles.icon} svgClassName={styles.iconSvg}/>
            <AngryIcon className={styles.icon} svgClassName={styles.iconSvg}/>
            <FearIcon className={styles.icon} svgClassName={styles.iconSvg}/>
            <SarcasmIcon className={styles.icon} svgClassName={styles.iconSvg}/>
        </div>
    </div>
    );
  }
}

export default App;
