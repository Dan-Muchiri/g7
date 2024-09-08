import React, { useState } from 'react';
import styles from './ServicesStyles.module.css';
import ethicalOutsourcingImage from '../../../public/ethical-out.jpg'; // Update the path
import ruralICTImage from '../../../public/ruralict.jpg'; // Update the path


const Services = () => {
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
                            Ethical Outsourcing
                        </button>
                    </li>
                    <li>
                        <button
                            className={styles.navButton}
                            onClick={() => handleServiceClick('ruralICT')}
                        >
                            Rural ICT Infrastructure
                        </button>
                    </li>
                    <li>
                        <button
                            className={styles.navButton}
                            onClick={() => handleServiceClick('projectManagement')}
                        >
                            Project Management Software
                        </button>
                    </li>
                    <li>
                        <button
                            className={styles.navButton}
                            onClick={() => handleServiceClick('erp')}
                        >
                            ERP Solution Systems
                        </button>
                    </li>
                    <li>
                        <button
                            className={styles.navButton}
                            onClick={() => handleServiceClick('infoEnv')}
                        >
                            Information Environment
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Conditionally Render Services */}
{activeService === 'ethicalOutsourcing' && (
    <section className={styles.serviceSection}>
        <h2>Ethical Outsourcing</h2>
        <div className={styles.serviceContent}>
            <img src={ethicalOutsourcingImage} alt="Ethical Outsourcing" className={styles.serviceImage} />
            <p>
                At G7, we are committed to bringing socio-economic benefits to rural Kenya by reinvesting 100% of our profits into rural areas. Despite 80% of Kenyans living in rural areas, most NGOs and government organizations spend their budgets in Nairobi, unintentionally favoring urban areas. Recent advancements in communications technology, such as fiber optics, 3G, and WiMAX, allow us to provide high-quality ICT services from rural locations at competitive rates. By leveraging technology, we aim to balance benefits between rural and metropolitan areas, supported by initiatives like the Rockefeller Foundation’s subsidies for BPO solutions.
            </p>
        </div>
    </section>
)}

{activeService === 'ruralICT' && (
    <section className={styles.serviceSection}>
        <h2>Rural ICT Infrastructure</h2>
        <div className={styles.serviceContent}>
            <img src={ruralICTImage} alt="Rural ICT Infrastructure" className={styles.serviceImage} />
            <p>
                Through our 10 years of CSR [www.afretech.org] experience implementing computer labs in less fortunate schools in Rural Africa, and our experience with implementing the communications technology for G7 Systems in Rural Kenya, G7 is uniquely qualified to assist NGOs, Government Departments, and Private Companies with implementing ICT infrastructure in Rural Kenya. Our clients enjoy service levels of 99% and above. With the landing of the fibre-optic cable in Mombasa, and its proliferation throughout the country, combined with 3G and WiMAX solutions, NGOs, Government Departments, and Private Companies, now have the capability to leverage the public network combined with encrypted VPN [Virtual Private Network] technology using IP tunneling, to connect even the most remote satellite organization or employee.
            </p>
        </div>
    </section>
)}


            {activeService === 'projectManagement' && (
                <section className={styles.serviceSection}>
                    <h2>Project Management Software</h2>
                    <p>
                        G7 offers reliable hosting with 99% uptime, surpassing typical self-hosting reliability at a lower cost. Our partnership with Metafuse provides the complete Project Insight solution, including:
                    </p>
                    <ul>
                        <li>Web-based access, compatible with MAC and PC browsers</li>
                        <li>Intelligent project scheduling with one-click import/export of Microsoft Project files</li>
                        <li>Advanced resource management and allocation</li>
                        <li>Portfolio and project management dashboard reports</li>
                        <li>Project prioritization with Scorecard</li>
                        <li>Project templates and methodologies</li>
                        <li>Workflow and approvals</li>
                        <li>Robust security and permissions</li>
                        <li>Complete time and expense tracking</li>
                        <li>Project budgeting and costing</li>
                        <li>Microsoft Outlook and Office integration</li>
                    </ul>
                </section>
            )}

{activeService === 'erp' && (
    <section className={styles.serviceSection}>
        <h2>ERP Solution Systems</h2>
        <p>
            Enterprise Resource Planning (ERP) integrates an organization's data and processes into a unified system. ERP projects typically span 14 months and involve both business and ICT teams. Customization can be complex and risky; it's usually preferable to adapt business processes to the ERP rather than customizing the ERP itself. Due to the extensive effort and resource requirements, many organizations engage consulting firms for implementation but must remain actively involved and prepare a clear exit strategy for the consultants.
        </p>
        <p>
            Key considerations include:
        </p>
        <ul>
            <li>Prioritizing modules based on business benefit and ease of implementation</li>
            <li>Ensuring thorough data migration and reporting strategies</li>
            <li>Steps for data migration include identifying data, scheduling migration, creating templates, and deciding on archiving strategies</li>
        </ul>
        <p>
            G7 offers comprehensive ERP services including program/project management, customization, and implementation. We work with the following ERP packages:
        </p>
        <ul>
            <li><a href="http://www.focussoftnet.com" target="_blank" rel="noopener noreferrer">Focus Softnet</a></li>
            <li><a href="http://www.visionca.com" target="_blank" rel="noopener noreferrer">Vision CA</a></li>
        </ul>
    </section>
)}

{activeService === 'infoEnv' && (
    <section className={styles.serviceSection}>
        <h2>Information Environment</h2>
        <p>
            The Information Environment focuses on creating a high-performance, accessible copy of operational data for quick retrieval and analysis. It combines advanced technology with Business Intelligence (BI) tools to provide decision-makers with actionable insights. Despite advancements, challenges persist in managing and utilizing data effectively due to legacy systems, incompatible platforms, and fragmented information sources.
        </p>
        <p>
            Key features of an effective Information Environment include:
        </p>
        <ul>
            <li>Enhanced data accuracy and accessibility</li>
            <li>Integration of data from diverse sources</li>
            <li>Efficient report generation and market simulation</li>
            <li>Resolution of data silos and legacy system issues</li>
        </ul>
        <p>
            In the Information Age, leveraging data effectively is crucial for organizational growth. Address common roadblocks such as disconnected source files, inaccessible legacy systems, and lack of centralized data repositories to maximize the value of your information.
        </p>
    </section>
)}
        </div>
    );

    
};

export default Services;
