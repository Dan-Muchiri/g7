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
                <Link to="/" className={styles.linkHome} onClick={toggleMenu}>Home</Link>
                <Link to="/why-gw-synergy" className={styles.linkWhyGW}>Why GW?</Link>
                <Link to="/services" className={styles.linkServices}>Services</Link>
                <Link to="/success-methodology" className={styles.linkMethodology}>Methodology</Link>
                <Link to="/testimonials" className={styles.linkTestimonials}>Testimonials</Link>
                <Link to="/csr" className={styles.linkCSR}>CSR</Link>
                <Link to="/leadership" className={styles.linkLeadership}>Leadership</Link>
                <Link to="/contact" className={styles.linkContact}>Contact</Link>
            </nav>
        </header>
    );
};

export default Header;
