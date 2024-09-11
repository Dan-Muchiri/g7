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
                <h1>GW Synergy LLP</h1>
            </div>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>
            <nav className={`${styles.navbar} ${isMenuOpen ? styles.showMenu : ''}`}>
                <Link to="/" className={styles.linkHome} onClick={toggleMenu}>Home</Link>
                <Link to="/why-gw-synergy" className={styles.linkWhyGW} onClick={toggleMenu}>Why GW?</Link>
                <Link to="/services" className={styles.linkServices} onClick={toggleMenu}>Services</Link>
                <Link to="/success-methodology" className={styles.linkMethodology} onClick={toggleMenu}>Methodology</Link>
                <Link to="/testimonials" className={styles.linkTestimonials} onClick={toggleMenu}>Testimonials</Link>
                <Link to="/csr" className={styles.linkCSR} onClick={toggleMenu}>Social Responsibility</Link>
                <Link to="/leadership" className={styles.linkLeadership} onClick={toggleMenu}>Leadership</Link>
                <Link to="/contact" className={styles.linkContact} onClick={toggleMenu}>Contact</Link>
            </nav>
        </header>
    );
};

export default Header;
