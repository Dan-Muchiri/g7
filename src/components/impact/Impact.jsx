import React, { useState } from 'react';
import styles from './ImpactStyles.module.css';
import ethicalOutsourcingImage from '../../../public/youth-entre.jpg'; // Update the path
import ruralICTImage from '../../../public/shieywe.jpg'; // Update the path


const Impacts = () => {
    const [activeService, setActiveService] = useState('ethicalOutsourcing');

    const handleServiceClick = (service) => {
        setActiveService(service);
    };

    return (
        <div className={styles.servicesPage}>
            {/* Navigation Bar */}
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li>
                        <button
                            className={styles.navButton}
                            onClick={() => handleServiceClick('ethicalOutsourcing')}
                        >
                            Youth Entrepreneurship
                        </button>
                    </li>
                    <li>
                        <button
                            className={styles.navButton}
                            onClick={() => handleServiceClick('ruralICT')}
                        >
                            Shieywe Trust
                        </button>
                    </li>
                    <li>
                        <button
                            className={styles.navButton}
                            onClick={() => handleServiceClick('projectManagement')}
                        >
                            CSR Afretech
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Conditionally Render Services */}
{activeService === 'ethicalOutsourcing' && (
    <section className={styles.serviceSection}>
        <h2>Youth Entrepreneurship</h2>
        <div className={styles.serviceContent}>
            <img src={ethicalOutsourcingImage} alt="Ethical Outsourcing" className={styles.serviceImage} />
            <p>
            In 2008 G7 created the New Ventures division to encourage Youth Entrepreneurship and to bring sustainable employment to rural youth who haven't had the opportunity of a University education.  To that end, we brought BRyan Polson on board to drive this division, leveraging his experience with training youth on entrepreneurship and micro-finance through the Junior Achievement program that he spearheaded in 15 schools throughout Western Kenya during 2007. Our first business, "Serenity Salon" was opened in September 2009.
            </p>
        </div>
    </section>
)}

{activeService === 'ruralICT' && (
    <section className={styles.serviceSection}>
        <h2>Shieywe Trust</h2>
        <div className={styles.serviceContent}>
            <img src={ruralICTImage} alt="Rural ICT Infrastructure" className={styles.serviceImage} />
            <p>
            In 2008, Geoff Ridden, the trumpet-playing founder of G7, discovered Kenyan music legend John Nzenze performing at a club in Khayega. Their mutual respect and friendship grew, and Nzenze revealed his struggles—despite his long career, he had little to show for it due to piracy and unethical management, a plight shared by many Kenyan musicians. In response, Geoff founded "Shieywe Trust" in June 2009, a recording label aimed at offering fair opportunities and contracts to Kenyan artists. Operating from a studio in Kakamega, Shieywe Trust's first CD is a collaboration between Nzenze and Geoff titled "A New Twiste."
            </p>
        </div>
    </section>
)}


            {activeService === 'projectManagement' && (
                <section className={styles.serviceSection}>
                    <h2>CSR Afretech</h2>
                    <p>
                    AFRETECH began in 1992 when Canadian teachers Bonnie and Don Sutherland visited a school in Zimbabwe and were struck by the lack of resources. Inspired by the students' eagerness to learn, they sent a shipment of supplies to the school. In 1994, Bonnie met Geoff Ridden, CEO of G7 Systems, during her Executive MBA program at Simon Fraser University. Their friendship led to a joint effort to install a computer lab in rural Zimbabwe in 1999. Realizing the potential impact, they formalized AFRETECH as an official charity, ensuring that all donations went directly to projects. AFRETECH, now a registered Canadian charity and 501(c)3 in the U.S., has since built computer facilities and clinics in Kenya, including a new clinic near Imbale school in Kakamega, aiming to improve education and healthcare in rural communities.
                    </p>
                </section>
            )}



        </div>
    );

    
};

export default Impacts;
