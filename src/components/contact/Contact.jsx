import React from 'react';
import styles from './ContactStyles.module.css';

const ContactUs = () => {
    return (
        <div className={styles.contactUs}>
            <h2>Contact Us</h2>
            <div className={styles.contactInfo}>
                {/* Kenya Office */}
                <div className={styles.office}>
                    <h3>
                        <img src="https://flagcdn.com/ke.svg" alt="Kenya Flag" className={styles.flag} /> Kenya Office
                    </h3>
                    <p>P.O Box 22380 - 00100 Nairobi</p>
                    <p><strong>Tel:</strong> +254 706 136 472 [International]</p>
                </div>
            </div>
            <div className={styles.otherInfo}>
                <p><strong>Email:</strong> <a href="mailto:info@gwsynergy.com">info@gwsynergy.com</a></p>
            </div>
        </div>
    );
};

export default ContactUs;
