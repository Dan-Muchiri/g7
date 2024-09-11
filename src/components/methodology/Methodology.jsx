import React from 'react';
import styles from './MethodologyStyles.module.css';

const Methodology = () => {
    return (
        <section className={styles.methodologySection}>
            <div className={styles.imageContainer}>
                <img src="/meth.png" alt="Methodology" className={styles.methodologyImage} />
            </div>
            <div className={styles.content}>
                <h1>Our Methodology</h1>
                <ul>
                    <li>Empathy Drives Understanding</li>
                    <li>The 7 Whys – Finds the Real Issue</li>
                    <li>Ideating Innovates Order of Magnitude Improvements</li>
                    <li>Prototyping Creates Understanding and Refinement</li>
                    <li>Testing Creates Solutions Which Exceed Client Needs</li>
                    <li>Iteration Makes the Process Effective and Efficient</li>
                    <li>One Minute Manager Keeps Executives Efficiently Updated and Engaged</li>
                    <li>The 7th Element Guarantees That Own Retain Skills and Knowledge</li>
                </ul>
            </div>
        </section>
    );
};

export default Methodology;
