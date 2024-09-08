import React from 'react';
import styles from './AboutStyles.module.css';

const AboutPage = () => {
    return (
        <div className={styles.aboutPage}>
            {/* Overview Section */}
            <section className={styles.overview}>
                <div className={styles.overviewContent}>
                    <img 
                        src="../../../../public/g7.jpg" 
                        alt="Overview of GW Synergy" 
                        className={styles.overviewImage}
                    />
                    <div className={styles.overviewText}>
                        <h2>Overview of GW Synergy</h2>
                        <p>
                            Founded in 1996 as an Information Warehousing services provider, GW Synergy (formerly G7 Systems) has evolved into a force for sustainable development in rural Kenya through ethical outsourcing. Initially serving Fortune 500 clients in the United States, the company expanded in 2006 with the creation of GW Synergy Kenya, a BPO company providing ICT services to U.S. financial clients. Over time, GW Synergy Kenya broadened its offerings to include rural ICT infrastructure implementation, SaaS-based project management software, and ERP implementation and support.
                        </p>
                        <p>
                            With a vision for Kenya to become Africa's ICT hub, GW Synergy is committed to empowering rural youth through technology. By establishing operations in rural university science parks, such as the one at Masinde Muliro University of Science and Technology (MMUST), the company demonstrates that rural Kenyans can compete globally. GW Synergy believes in harnessing the talents of rural youth to create sustainable employment and drive Kenya’s technological future.
                        </p>
                        <p><strong>"We Can Do This. We MUST Do This. The Youth Are Our Future."</strong></p>
                        <p><strong>"Mtoto umleavyo ndivyo akuavyo. Nuru ni mwangaza. Upandacho ndicho utakacho vuna!"</strong></p>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className={styles.founder}>
                <div className={styles.founderContent}>
                    <div className={styles.founderText}>
                        <h2>The Founder</h2>
                        <p>
                            Mr. Geoff Ridden, the founder of GW Synergy, is also the CEO of G7 Systems LLC (USA) and Managing Director of GW Synergy. Since founding GW Synergy in 1996, he has transformed it from an Information Warehousing services company into a leader in sustainable development in rural Kenya through ethical outsourcing. Mr. Ridden established the New Ventures division in 2008 to provide sustainable employment for rural Kenyans without university education. Additionally, he created Shieywe Trust, a recording label supporting local Kenyan artists. Mr. Ridden holds a Bachelor's degree in Mathematics from the University of Waterloo and an MBA from Simon Fraser University. He also serves as a Director of Afretech Aid Society (Canada) and Afretech Inc (USA).
                        </p>
                    </div>
                    <img 
                        src="../../../../public/Geoff_Modified.jpeg" 
                        alt="Founder of GW Synergy" 
                        className={styles.founderImage}
                    />
                </div>
            </section>

            {/* Success Methodology Section */}
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
        </div>
    );
};

export default AboutPage;
