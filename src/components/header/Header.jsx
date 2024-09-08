import React, { useState } from 'react';
import styles from './HeaderStyles.module.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/logo.jpeg" alt="logo" />
            </div>
            <div className={styles.companyName}>
               <h1>GW Synergy</h1>
            </div>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>
            <nav className={`${styles.navbar} ${isMenuOpen ? styles.showMenu : ''}`}>
                <Link to="/" onClick={toggleMenu}>Home</Link>
                <Link to="/services" onClick={toggleMenu}>Our Services</Link>
                <Link to="/impact" onClick={toggleMenu}>Impact & Initiatives</Link>
                <Link to="/about" onClick={toggleMenu}>About Us</Link>
                <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
            </nav>
        </header>
    );
};

export default Header;
