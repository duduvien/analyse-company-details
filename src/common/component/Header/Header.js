import React, { Component } from 'react';
import classNames from 'classnames';
import { Header as SemanticHeader } from 'semantic-ui-react';

import MenuIcon from './components/MenuIcon/MenuIcon';
import Nav from './components/Nav/Nav';
import styles from './Header.css';
import links from './links';

const IntroHeader = () => (
    <div className={styles.introContainer}>
        <div className={styles.introContainerLeft}>
            <h1 className={styles.introTitleLeft}>Flip</h1>
        </div>
        <div className={styles.introContainerRight}>
            <h1 className={styles.introTitleRight}>ped</h1>
        </div>
        <div className={styles.introText}>
            <span className={styles.introSubTitle}>Powered by Jobstreet Company Reviews</span>
        </div>
    </div>
)

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavActive: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false);
    }
    handleClick(e) {
        const userClickedOutsideOfDropdown = !this.dropdownNode.contains(
            e.target,
        );
        if (userClickedOutsideOfDropdown) {
            this.showNav(false);
        }
    }
    showNav(shouldShowNav) {
        const eventAction = shouldShowNav
            ? 'addEventListener'
            : 'removeEventListener';
        document[eventAction]('click', this.handleClick, false);
        this.setState({
            isNavActive: shouldShowNav,
        });
    }
    render() {
        const { isNavActive } = this.state;

        return (
            <div className={styles.container}>
                <button
                    key="js-nav-button"
                    className={styles.toggle}
                    onClick={() => {
                        if (!isNavActive) {
                            this.showNav(true);
                        }
                    }}
                >
                    <MenuIcon />
                </button>
                <div
                    key="js-nav"
                    className={styles.navWrapper}
                    ref={node => {
                        this.dropdownNode = node;
                    }}
                >
                    <div
                        className={classNames({
                            [styles.navContainer]: true,
                            [styles.navContainerHideOnMobile]: !isNavActive,
                        })}
                    >
                        <Nav
                            key={'navLinks'}
                            links={links.navLinks}
                        />
                    </div>
                </div>
                <IntroHeader />
            </div>
        );
    }
}
