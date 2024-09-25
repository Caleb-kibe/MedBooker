import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './AppointmentList.module.css';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('https://medbooker.onrender.com/api/appointments')
      .then(response => setAppointments(response.data))
      .catch(error => console.error('Error fetching appointments:', error));
  }, []);

  return (
    <div className={styles.appointmentList}>
      <h2>Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>{appointment.time} with Doctor ID: {appointment.doctor_id}</li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
