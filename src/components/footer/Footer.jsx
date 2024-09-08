import React from 'react'
import styles from "./FooterStyles.module.css"
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

function Footer() {
  return (
    <section className={styles.callToAction}>
    <h2>Ready to Make an Impact?</h2>
    <p>Explore our solutions and see how we can help you achieve your goals.</p>
    <Link to="/contact" className={styles.ctaButton}>Get in Touch <FaArrowRight /></Link>
</section>
  )
}

export default Footer