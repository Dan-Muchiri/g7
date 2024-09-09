import React, { useState } from 'react';
import styles from './AboutStyles.module.css';

const AboutPage = () => {
    const [activeSection, setActiveSection] = useState('overview');

    const handleNavClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div className={styles.aboutPage}>
            {/* Navigation Bar */}
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li>
                        <button
                            className={styles.navButton}
                            onClick={() => handleNavClick('overview')}
                        >
                            Overview
                        </button>
                    </li>
                    <li>
                        <button
                            className={styles.navButton}
                            onClick={() => handleNavClick('founder')}
                        >
                            The Founder & CEO
                        </button>
                    </li>
                    <li>
                        <button
                            className={styles.navButton}
                            onClick={() => handleNavClick('methodology')}
                        >
                            Our Success Methodology
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Conditionally Render Sections */}
            {activeSection === 'overview' && (
                <section className={styles.overview}>
                    <div className={styles.overviewContent}>
                        <img
                            src="/g7.jpg"
                            alt="Overview of GW Synergy"
                            className={styles.overviewImage}
                        />
                        <div className={styles.overviewText}>
                            <h2>Overview of GW Synergy</h2>
                            <p>
                                Since its inception in 1996 as G7 Systems, GW Synergy has grown into a key player in ethical outsourcing and sustainable development in rural Kenya. Initially catering to Fortune 500 clients in the U.S., the company expanded to establish GW Synergy Kenya in 2006, offering ICT services and infrastructure solutions.
                            </p>
                            <p>
                                Committed to transforming Kenya into Africa's ICT hub, GW Synergy empowers rural youth through technology. By operating in rural university science parks like Masinde Muliro University of Science and Technology (MMUST), the company showcases the global competitiveness of rural Kenyans and drives sustainable employment and technological advancement.
                            </p>
                            <p><strong>"We Can Do This. We MUST Do This. The Youth Are Our Future."</strong></p>
                            <p><strong>"Mtoto umleavyo ndivyo akuavyo. Nuru ni mwangaza. Upandacho ndicho utakacho vuna!"</strong></p>
                        </div>
                    </div>
                </section>
            )}

            {activeSection === 'founder' && (
                <section className={styles.founder}>
                    <div className={styles.founderContent}>
                        <img
                            src="/Untitled.png"
                            alt="Founder of GW Synergy"
                            className={styles.founderImage}
                        />
                        <div className={styles.founderText}>
                            <h2>The Founder & CEO</h2>
                            <p>
                                Mr. Geoff Ridden, the founder of GW Synergy, is also the CEO of G7 Systems LLC (USA) and Managing Director of GW Synergy. Since founding GW Synergy in 1996, he has transformed it from an Information Warehousing services company into a leader in sustainable development in rural Kenya through ethical outsourcing. Mr. Ridden established the New Ventures division in 2008 to provide sustainable employment for rural Kenyans without university education. Additionally, he created Shieywe Trust, a recording label supporting local Kenyan artists. Mr. Ridden holds a Bachelor's degree in Mathematics from the University of Waterloo and an MBA from Simon Fraser University. He also serves as a Director of Afretech Aid Society (Canada) and Afretech Inc (USA).
                            </p>
                        </div>
                    </div>
                </section>
            )}

            {activeSection === 'methodology' && (
                <section className={styles.methodology}>
                    <h2>Our Success Methodology</h2>
                    <p>
                        At GW Synergy, we implement customized Standard Operating Procedures (SOPs) tailored to your specific needs. These SOPs streamline specification and development processes, maximizing code reusability and ensuring consistency. Our programmers follow strict checklists, and our Quality Assurance Manager reviews all code and testing before delivery, ensuring that your standards are always met.
                    </p>
                    <p>
                        We utilize a unique project planning approach called "Iterfall," which combines Iterative and Waterfall methodologies. This hybrid method allows flexibility for refinements through iterations while ensuring timely and budget-conscious project delivery through Waterfall planning.
                    </p>
                    <p>
                        Our weekly "One Minute Manager" reports provide concise updates to help you address key issues and monitor project performance effectively. Additionally, our team is not only composed of university graduates but also professionals who undergo extensive real-world training and on-the-job supervision, ensuring they are fully equipped to meet your project requirements.
                    </p>
                </section>
            )}
        </div>
    );
};

export default AboutPage;
