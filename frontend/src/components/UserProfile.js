import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/user')
      .then(response => {
        setUser(response.data.user);
        setAppointments(response.data.appointments);
      })
      .catch(error => console.error('Error fetching user profile:', error));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className={styles.userProfile}>
      <h2>{user.username}'s Profile</h2>
      <p>Email: {user.email}</p>
      <h3>Appointments</h3>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>{appointment.time} with Doctor ID: {appointment.doctor_id}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
