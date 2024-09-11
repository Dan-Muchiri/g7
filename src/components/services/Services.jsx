import React from 'react';
import styles from './ServicesStyles.module.css';

const Services = () => {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1>Our Services</h1>
                <ul>
                    <li>Full-Time Personnel Dedicated to Your Organization</li>
                    <li>Project-Based Personnel by the Day</li>
                    <li>Fixed Cost Project Development</li>
                    <li>Project Management / Leadership</li>
                    <li>On-site USA Based Project Leadership / Management</li>
                    <li>Big Data / Data Science Analytics</li>
                    <li>Balanced Score Card</li>
                </ul>
                <div className={styles.imageContainer}>
                    <img
                        src="/score.png" /* Adjust the path to your image */
                        alt="Balanced Score Card"
                        className={styles.balancedScoreCardImage}
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;
