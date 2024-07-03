// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ isLoggedIn }) => {
  return (
    <header className={styles.header}>
      <h1>MedBooker</h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/About" className={styles.navLink}>About</Link>
          </li>
          {isLoggedIn && (
            <>
              <li className={styles.navItem}>
                <Link to="/UserProfile" className={styles.navLink}>Profile</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/DoctorList" className={styles.navLink}>Doctors</Link>
              </li>
              {/* Add more links for other authenticated components */}
            </>
          )}
        </ul>
        <div className={styles.authList}>
          <Link to="/RegisterForm" id={styles.navLink}>register</Link>
          <span className={styles.separator}>|</span>
          <Link to="/LoginForm" id={styles.navLink}>login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
