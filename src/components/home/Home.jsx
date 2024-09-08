import React from 'react';
import styles from './HomeStyles.module.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// Import logos
import metlifeLogo from '../../../public/met-life-logo.png';
import cignaLogo from '../../../public/Cigna-Logo.wine.svg';
import nationsRentLogo from '../../../public/Nations_Rent-logo-A1B0589EDC-seeklogo.com.gif';
import selectiveInsuranceLogo from '../../../public/selective.png';

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h1>Welcome to GW Synergy</h1>
                <p>Your partner in innovative solutions and impactful initiatives for sustainable development of rural Kenya.</p>
                <div className={styles.ctaButtons}>
                    <Link to="/services" className={styles.ctaButton}>Our Services <FaArrowRight /></Link>
                    <Link to="/impact" className={styles.ctaButton}>Our Impact <FaArrowRight /></Link>
                    <Link to="/about" className={styles.ctaButton}>About Us <FaArrowRight /></Link>
                    <Link to="/contact" className={styles.ctaButton}>Contact Us <FaArrowRight /></Link>
                </div>
            </section>

            {/* Benefits Section */}
            <section className={styles.benefits}>
                <h2>Why Choose Us?</h2>
                <div className={styles.benefitList}>
                    <div className={styles.benefitItem}>
                        <h3>Cost Savings</h3>
                        <p>Save 66% compared to USA</p>
                        <p>Save 30% compared to India</p>
                    </div>
                    <div className={styles.benefitItem}>
                        <h3>Quality Personnel</h3>
                        <p>Experienced and university educated</p>
                    </div>
                    <div className={styles.benefitItem}>
                        <h3>Reliable and Secure</h3>
                        <p>English-speaking and in your time zone</p>
                    </div>
                    <div className={styles.benefitItem}>
                        <h3>Proven Methodology</h3>
                        <p>SOPs and One Minute Manager approach</p>
                        <p>Serving clients for over 12 years</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className={styles.testimonials}>
                <h2>What Our Clients Say</h2>
                <div className={styles.testimonialList}>
                    <div className={styles.testimonialItem}>
                        <img src={metlifeLogo} alt="MetLife Logo" className={styles.testimonialLogo} />
                        <p>"GW Synergy has helped MetLife implement strategic solutions ranging from gigabytes to multi-terabytes in size, servicing up to 10,000 end users in locations all across the country. GW Synergy personnel can be counted on to provide strategic advice based on their wealth of data warehousing and Business Intelligence experience."</p>
                        <h3>Malka Treuhaft</h3>
                        <p>Vice President Corporate Financial Systems, MetLife</p>
                    </div>
                    <div className={styles.testimonialItem}>
                        <img src={cignaLogo} alt="Cigna Logo" className={styles.testimonialLogo} />
                        <p>"GW Synergy provided a very strong level of highly technical services. Their perspectives, direction setting, advice/counsel, and ‘hands-on’ experience were on target, extremely high quality and very helpful."</p>
                        <h3>Raymond R. Ziegler</h3>
                        <p>Division Information Systems Officer, Cigna</p>
                    </div>
                    <div className={styles.testimonialItem}>
                        <img src={nationsRentLogo} alt="Nations Rent Logo" className={styles.testimonialLogo} />
                        <p>"GW Synergy ensured not only the project’s success through iterative delivery, but went the extra mile by ensuring that my staff were fully trained to operate and enhance the information warehouse environment."</p>
                        <h3>Doug P. Cormany</h3>
                        <p>Vice President & Chief Information Officer, Nations Rent</p>
                    </div>
                    <div className={styles.testimonialItem}>
                        <img src={selectiveInsuranceLogo} alt="Selective Insurance Group Logo" className={styles.testimonialLogo} />
                        <p>"GW Synergy worked hand in hand with our Business and Information Technology personnel to create a Proof Of Concept, which demonstrated the value we could obtain from an information warehouse. Containing 24 months of Selective production data and leveraging SQL Server and COGNOS, GW Synergy delivered over our Intranet, in less than 3 months, a set of production data that is difficult to obtain today."</p>
                        <h3>Richard Connell</h3>
                        <p>Executive Vice President, Selective Insurance Group</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
