import React from 'react';
import DoctorList from './DoctorList';
import styles from './Dashboard.module.css';
import BookAppointment from './BookAppointment';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to your Dashboard</h1>
      <p>Here you can see your appointments and other relevant information.</p>
      {/* Add more content as needed */}
      < DoctorList/>
      < BookAppointment />
    </div>
  );
};

export default Dashboard;
