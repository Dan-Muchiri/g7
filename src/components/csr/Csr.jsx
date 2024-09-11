import React from 'react';
import styles from './CsrStyles.module.css'; // Adjust the path as needed

const CSR = () => {
    return (
        <section className={styles.csrSection}>
            
            <div className={styles.topMidImageContainer}>
                <img
                    src="/mid.png" /* Adjust the path to your image */
                    alt="Top Mid Image"
                    className={styles.topLeftImage}
                />
            </div>
            <div className={styles.content}>
                <h1>Social Responsibility</h1>
                <h2>Sanitary Pads for Schoolgirls</h2>
                <ul>
                    <li>Provides Equality of Opportunity for Schoolgirls [70% Youth]</li>
                    <li>Fundamental Human Right Guaranteed By the Constitution</li>
                    <li>High School Education for Girls Sorts Other Gender Issues</li>
                    <li>Reduces Gender Based Violence</li>
                    <li>Reduces Domestic Violence</li>
                    <li>Reduces Child Marriage</li>
                    <li>Reduces Child Prostitution</li>
                </ul>
            </div>
            <div className={styles.imageContainer}>
                <img
                    src="/ladies.png" /* Adjust the path to your image */
                    alt="Sanitary Pads for Schoolgirls"
                    className={styles.csrImage}
                />
            </div>
        </section>
    );
};

export default CSR;
