import React, { useState } from 'react';
import styles from './Testimonials.module.css';
import metlifeLogo from '../../../public/met-life-logo.png';
import cignaLogo from '../../../public/Cigna-Logo.wine.svg';
import nationsRentLogo from '../../../public/Nations_Rent-logo-A1B0589EDC-seeklogo.com.gif';
import selectiveInsuranceLogo from '../../../public/selective.png';

const testimonials = [
    {
        id: 'metlife',
        logo: metlifeLogo,
        text: `"GW Synergy has helped MetLife implement strategic solutions ranging from gigabytes to multi-terabytes in size, servicing up to 10,000 end users in locations all across the country. GW Synergy personnel can be counted on to provide strategic advice based on their wealth of data warehousing and Business Intelligence experience."`,
        name: 'Malka Treuhaft',
        position: 'Vice President Corporate Financial Systems, MetLife'
    },
    {
        id: 'cigna',
        logo: cignaLogo,
        text: `"GW Synergy provided a very strong level of highly technical services. Their perspectives, direction setting, advice/counsel, and ‘hands-on’ experience were on target, extremely high quality and very helpful."`,
        name: 'Raymond R. Ziegler',
        position: 'Division Information Systems Officer, Cigna'
    },
    {
        id: 'nationsRent',
        logo: nationsRentLogo,
        text: `"GW Synergy ensured not only the project’s success through iterative delivery, but went the extra mile by ensuring that my staff were fully trained to operate and enhance the information warehouse environment."`,
        name: 'Doug P. Cormany',
        position: 'Vice President & Chief Information Officer, Nations Rent'
    },
    {
        id: 'selectiveInsurance',
        logo: selectiveInsuranceLogo,
        text: `"GW Synergy worked hand in hand with our Business and Information Technology personnel to create a Proof Of Concept, which demonstrated the value we could obtain from an information warehouse. Containing 24 months of Selective production data and leveraging SQL Server and COGNOS, GW Synergy delivered over our Intranet, in less than 3 months, a set of production data that is difficult to obtain today."`,
        name: 'Richard Connell',
        position: 'Executive Vice President, Selective Insurance Group'
    }
];

const TestimonialsPage = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0].id);

    const handleNavClick = (id) => {
        setActiveTestimonial(id);
    };

    const currentTestimonial = testimonials.find(t => t.id === activeTestimonial);

    return (
        <div className={styles.testimonialsPage}>
            {/* Navigation Bar */}
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    {testimonials.map(testimonial => (
                        <li key={testimonial.id}>
                            <button
                                className={styles.navButton}
                                onClick={() => handleNavClick(testimonial.id)}
                            >
                                <img src={testimonial.logo} alt={`${testimonial.id} Logo`} className={styles.navLogo} />
                                {testimonial.id.charAt(0).toUpperCase() + testimonial.id.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <h2>{currentTestimonial.id.charAt(0).toUpperCase() + currentTestimonial.id.slice(1).replace(/([A-Z])/g, ' $1').trim()} Testimonial</h2>
            <div className={styles.testimonialItem}>
                <img src={currentTestimonial.logo} alt={`${currentTestimonial.id} Logo`} className={styles.testimonialLogo} />
                <p>{currentTestimonial.text}</p>
                <h3>{currentTestimonial.name}</h3>
                <p>{currentTestimonial.position}</p>
            </div>
        </div>
    );
};

export default TestimonialsPage;
