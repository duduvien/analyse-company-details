import React from 'react';
import styles from './Footer.css';

const Footer = () => (
    <footer className={styles.root}>
        <span>
            <a
                href="http://localhost:8050/show_graph?company=PETRONAS%20Carigali%20Sdn.%20Bhd."
                target="_blank"
                rel="noopener noreferrer"
            >
                Login to your hirer account
            </a>&nbsp;to see a personalized dashboard.
        </span>
    </footer>
);

export default Footer;
