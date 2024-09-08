import React from 'react';
import styles from './HomeStyles.module.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h1>Welcome to GW Synergy</h1>
                <p>Your partner in innovative solutions and impactful initiatives for sustainable development of rural Kenya.</p>
                <div className={styles.ctaButtons}>
                    <Link to="/services" className={styles.ctaButton}>Our Services <FaArrowRight /></Link>
                    <Link to="/testimonials" className={styles.ctaButton}>View Testimonials <FaArrowRight /></Link>
                    <Link to="/impact" className={styles.ctaButton}>Our Impact <FaArrowRight /></Link>
                    <Link to="/about" className={styles.ctaButton}>About Us <FaArrowRight /></Link>
                    <Link to="/contact" className={styles.ctaButton}>Contact Us <FaArrowRight /></Link>
                </div>
            </section>

        </div>
    );
};

export default HomePage;
