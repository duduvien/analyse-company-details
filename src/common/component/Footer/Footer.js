import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.css';

const Footer = () => (
    <footer className={styles.root}>
        <Link to="/review">Login to your hirer account</Link> &nbsp;to see a personalized dashboard.
    </footer>
);

export default Footer;