// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <header className={styles.header}>
        <h1>Welcome to MedBooker</h1>
        <p>Your one-stop solution for booking medical appointments.</p>
        <Link to="/RegisterForm" className={styles.ctaButton}>Get Started</Link>
      </header>
      <section className={styles.features}>
        <h2>Features</h2>
        <ul>
          <li>Easy appointment booking</li>
          <li>Find the best doctors</li>
          <li>Manage your appointments</li>
        </ul>
      </section>
      <footer className={styles.footer}>
        <p>&copy; 2024 MedBooker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
