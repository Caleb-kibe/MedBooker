// src/components/About.js
import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>About MedBooker</h1>
      <p className={styles.description}>
        Welcome to MedBooker, your reliable and efficient medical appointment booking platform. At MedBooker, we understand the importance of accessible and timely healthcare. Our mission is to bridge the gap between patients and healthcare providers, ensuring that you get the medical attention you need when you need it.
      </p>
      <h2 className={styles.title}>Our Mission</h2>
      <p className={styles.description}>
        Our mission is to simplify the process of booking medical appointments. By leveraging technology, we aim to make healthcare more accessible and efficient for everyone. Whether you are a patient seeking an appointment or a healthcare provider managing your schedule, MedBooker is here to streamline the process.
      </p>
      <h2 className={styles.title}>Our Services</h2>
      <ul className={styles.points}>
        <li>Easy and quick appointment booking</li>
        <li>Comprehensive directory of healthcare providers</li>
        <li>Secure and private patient data management</li>
        <li>24/7 access to your medical appointment history</li>
      </ul>
      <h2 className={styles.title}>Why Choose MedBooker?</h2>
      <p className={styles.description}>
        We prioritize your convenience and peace of mind. With MedBooker, you can:
      </p>
      <ul className={styles.points}>
        <li>Find and book appointments with trusted healthcare professionals</li>
        <li>Manage your appointments effortlessly</li>
        <li>Receive timely reminders for your upcoming appointments</li>
        <li>Access your medical history anytime, anywhere</li>
      </ul>
      <h2 className={styles.title}>Contact Us</h2>
      <p className={styles.description}>
        Have questions or need assistance? Our dedicated support team is here to help. Contact us at <a href="mailto:support@medbooker.com">support@medbooker.com</a>.
      </p>
    </div>
  );
};

export default About;
