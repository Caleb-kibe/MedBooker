// import React from 'react';
// import { Link } from 'react-router-dom';
// import styles from './Header.module.css';

// const Header = ({ isLoggedIn }) => {
//   return (
//     <header className={styles.header}>
//       <h1>MedBooker</h1>
//       <nav className={styles.nav}>
//         <ul className={styles.navList}>
//           <li className={styles.navItem}>
//             <Link to="/home" className={styles.navLink}>Home</Link>
//           </li>
//           <li className={styles.navItem}>
//             <Link to="/about" className={styles.navLink}>About</Link>
//           </li>
//           <li className={styles.navItem}>
//             <Link to="/register_doctor" className={styles.navLink}>Doctor</Link>
//           </li>
//           {isLoggedIn && (
//             <>
//               <li className={styles.navItem}>
//                 <Link to="/userprofile" className={styles.navLink}>Profile</Link>
//               </li>
//               <li className={styles.navItem}>
//                 <Link to="/doctorlist" className={styles.navLink}>Doctors</Link>
//               </li>
//               {/* Add more links for other authenticated components */}
//             </>
//           )}
//         </ul>
//         <div className={styles.authList}>
//           {!isLoggedIn && (
//             <>
//               <Link to="/register" className={styles.navLink}>Register</Link>
//               <span className={styles.separator}>|</span>
//               <Link to="/login" className={styles.navLink}>Login</Link>
//             </>
//           )}
//           {isLoggedIn && (
//             <Link to="/logout" className={styles.navLink}>Logout</Link>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <h1>MedBooker</h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}></Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/home" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/about" className={styles.navLink}>About</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/register_doctor" className={styles.navLink}>Doctor</Link>
          </li>
          {isLoggedIn && (
            <>
              <li className={styles.navItem}>
                <Link to="/Profile" className={styles.navLink}>Profile</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/DoctorList" className={styles.navLink}>Doctors</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/dashboard" className={styles.navLink}>Dashboard</Link>
              </li>
              <li className={styles.navItem}>
                <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
              </li>
            </>
          )}
        </ul>
        {!isLoggedIn && (
          <div className={styles.authList}>
            <Link to="/register" id={styles.navLink}>Register</Link>
            <span className={styles.separator}>|</span>
            <Link to="/login" id={styles.navLink}>Login</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
