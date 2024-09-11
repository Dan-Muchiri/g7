import React from 'react';
import styles from './WhyStyles.module.css';

const WhyGWSynergy = () => {
    return (
        <section className={styles.whyGW}>
            <div className={styles.imageContainer}>
                <img
                    src="/why.jpg" /* Adjust path to your image */
                    alt="Why GW Synergy"
                    className={styles.backgroundImage}
                />
            </div>
            <div className={styles.content}>
                <h1>Why GW Synergy?</h1>
                <ul>
                    <li>Reduce Your IT Personnel Costs by 50%</li>
                    <li>Proven Results – We’ve Done This for Fortune 100</li>
                    <li>Success Methodology / Modern Design Thinking</li>
                    <li>USA Accountability through our USA Parent</li>
                    <li>Rigorous Training on USA Standards of IT Excellence</li>
                    <li>Excellence – Only Hire Top 5% from University</li>
                    <li>Fluent English Speaking, 90% Female Staff</li>
                </ul>
            </div>
        </section>
    );
};

export default WhyGWSynergy;
