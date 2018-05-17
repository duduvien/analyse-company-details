import React from 'react';
import styles from './Header.css';

class Header extends React.Component{
    render() {
        return(
            <div className={styles.AppTitle}>Hello world</div>
        );
    }
}

export default Header;