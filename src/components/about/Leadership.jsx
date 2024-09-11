import React from 'react';
import styles from './LeadershipStyles.module.css';

const Leadership = () => {
    return (
        <div className={styles.aboutPage}>
            {/* Combined Content */}
            <section className={styles.leadership}>
                {/* Winnie Ridden */}
                <div className={styles.leadershipContent}>
                    <img
                        src="/winnie.jpg"
                        alt="Winnie Ridden"
                        className={styles.leadershipImage}
                    />
                    <div className={styles.leadershipText}>
                        <h2>Winnie Ridden – Managing Partner and CEO</h2>
                        <p>
                            Ms. Ridden brings an extensive background in legal and human resources management focused on coaching Kenyan personnel to exceed USA Standards, and fiscal management. Ms. Ridden is responsible for Legal / Contracts, Finance, and Human Resources.
                        </p>
                    </div>
                </div>

                {/* Geoffrey Ridden */}
                <div className={styles.leadershipContent}>
                    <img
                        src="/Untitled.png"
                        alt="Geoffrey Ridden"
                        className={styles.leadershipImage}
                    />
                    <div className={styles.leadershipText}>
                        <h2>Geoffrey Ridden – Partner, President, and CTO</h2>
                        <p>
                            Mr. Ridden brings a wealth of experience delivering technology solutions for Fortune 100 Financial Services. Mr. Ridden is responsible for Client Management, Technology, and Project Delivery.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Leadership;
