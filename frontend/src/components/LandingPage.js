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
      <section className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.serviceCard}>
          <h3>General Consultation</h3>
          <p>Book a consultation with a general practitioner for your health needs.</p>
        </div>
        <div className={styles.serviceCard}>
          <h3>Specialist Consultation</h3>
          <p>Find and book appointments with specialists across various fields.</p>
        </div>
        <div className={styles.serviceCard}>
          <h3>Emergency Services</h3>
          <p>Get quick access to emergency services and care.</p>
        </div>
      </section>
      <section className={styles.testimonials}>
        <h2>What Our Patients Say</h2>
        <div className={styles.testimonial}>
          <p>"MedBooker made booking a doctor's appointment so easy and convenient!"</p>
          <h4>- Jane Doe</h4>
        </div>
        <div className={styles.testimonial}>
          <p>"I found the best specialists in my area thanks to MedBooker."</p>
          <h4>- John Smith</h4>
        </div>
        <div className={styles.testimonial}>
          <p>"Managing my appointments has never been this simple."</p>
          <h4>- Mary Johnson</h4>
        </div>
      </section>
      <section className={styles.callToAction}>
        <h2>Ready to Book an Appointment?</h2>
        <Link to="/RegisterForm" className={styles.ctaButton}>Sign Up Now</Link>
      </section>
    </div>
  );
};

export default LandingPage;
