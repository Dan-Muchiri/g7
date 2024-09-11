import React from 'react';
import styles from './HomeStyles.module.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
    // URL for the English flag from FlagCDN
    const englishFlagUrl = 'https://flagcdn.com/w320/gb.png';

    return (
        <div className={styles.homePage}>
            {/* Small Image Positioned Absolutely */}
            <img 
                src="../../../public/hands.png" 
                alt="Small Decorative" 
                className={styles.topImage} 
            />

            {/* Hero Section */}
            <section className={styles.hero}>
                {/* Ethical IT Outsourcing in center with fine-line box */}
                <div className={styles.ethicalBox}>
                    Ethical IT Outsourcing
                </div>

                {/* English Speaking and University Info */}
                <div className={styles.infoSection}>
                    <p className={styles.englishSpeaking}>
                        {/* English Flag Image */}
                        <img 
                            src={englishFlagUrl} 
                            alt="English Flag" 
                            className={styles.flagIcon} 
                        />
                        <span className={styles.englishText}>English Speaking</span> – 
                        <span className={styles.universityText}> Top 5% University</span> – 
                        <span className={styles.costText}> 50% of Loaded Cost</span>
                    </p>

                    {/* Astute | Creative | Honest | Loyal | Prompt */}
                    <p className={styles.qualifications}>
                        Astute | Creative | Honest | Loyal | Prompt
                    </p>
                </div>

                {/* Links Section following logo color order */}
                <div className={styles.ctaButtons}>
                    <Link to="/why-gw-synergy" className={`${styles.ctaButton} ${styles.buttonWhyGW}`}>
                        Why GW Synergy? <FaArrowRight className={styles.arrowIcon} />
                    </Link>
                    <Link to="/services" className={`${styles.ctaButton} ${styles.buttonServices}`}>
                        Services <FaArrowRight className={styles.arrowIcon} />
                    </Link>
                    <Link to="/success-methodology" className={`${styles.ctaButton} ${styles.buttonSuccess}`}>
                        Success Methodology <FaArrowRight className={styles.arrowIcon} />
                    </Link>
                    <Link to="/testimonials" className={`${styles.ctaButton} ${styles.buttonTestimonials}`}>
                        Client Testimonials <FaArrowRight className={styles.arrowIcon} />
                    </Link>
                    <Link to="/csr" className={`${styles.ctaButton} ${styles.buttonCSR}`}>
                        Social Responsibility <FaArrowRight className={styles.arrowIcon} />
                    </Link>
                    <Link to="/leadership" className={`${styles.ctaButton} ${styles.buttonLeadership}`}>
                        Leadership <FaArrowRight className={styles.arrowIcon} />
                    </Link>
                    <Link to="/contact" className={`${styles.ctaButton} ${styles.buttonContact}`}>
                        Contact Us <FaArrowRight className={styles.arrowIcon} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
