import React from 'react';
import styles from './ContactStyles.module.css';

const ContactUs = () => {
    return (
        <div className={styles.contactUs}>
            <h2>Contact Us</h2>
            <div className={styles.contactInfo}>
                {/* USA Office */}
                <div className={styles.office}>
                    <h3>
                        <img src="https://flagcdn.com/us.svg" alt="USA Flag" className={styles.flag} /> USA Office
                    </h3>
                    <p>10608 Chambers Drive,<br />FL, 33626, USA</p>
                    <p><strong>Tel:</strong> 813-854-4763</p>
                    <p><strong>Fax:</strong> 813-854-4764</p>
                </div>
                {/* Kenya Office */}
                <div className={styles.office}>
                    <h3>
                        <img src="https://flagcdn.com/ke.svg" alt="Kenya Flag" className={styles.flag} /> Kenya Office
                    </h3>
                    <p>MMUST EPZ Science & Technology Park,<br />Kakamega, 687-50100, Kenya</p>
                    <p><strong>Tel:</strong> 254-56-31738 [International]</p>
                    <p><strong>Tel:</strong> 0723-686-472 [Mobile]</p>
                </div>
            </div>
            <div className={styles.otherInfo}>
                <p><strong>Email:</strong> <a href="mailto:info@gwsynergy.com">info@gwsynergy.com</a></p>
                <p><strong>Website:</strong> <a href="http://www.gwsynergy.com" target="_blank" rel="noopener noreferrer">www.gwsynergy.com</a></p>
            </div>
        </div>
    );
};

export default ContactUs;
