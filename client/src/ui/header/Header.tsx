import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Link to='/' className={styles.button}>Home</Link>
            <Link to='/dashboard' className={styles.button}>Dashboard</Link>
            <Link to='/about' className={styles.button} >About</Link>
        </header>
    );
};

export default Header;
