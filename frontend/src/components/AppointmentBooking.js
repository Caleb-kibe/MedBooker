import React, { useState } from 'react';
import axios from 'axios';
import styles from './AppointmentBooking.module.css';

const AppointmentBooking = ({ doctorId }) => {
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/appointments', {
        doctor_id: doctorId,
        patient_id: /* Get this from logged in user context */
        time
      });
      console.log(response.data);
      // Optionally, handle successful appointment booking
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.appointmentBooking}>
      <h2>Book an Appointment</h2>
      <div className={styles.formField}>
        <label>Time</label>
        <input type="datetime-local" value={time} onChange={(e) => setTime(e.target.value)} required />
      </div>
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default AppointmentBooking;
