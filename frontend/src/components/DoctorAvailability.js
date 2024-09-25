import React, { useState } from 'react';
import axios from 'axios';
import styles from './DoctorAvailability.module.css';

const DoctorAvailability = () => {
  const [availableTime, setAvailableTime] = useState('');
  const [doctorId, setDoctorId] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://medbooker.onrender.com/api/doctor/availability', {
        doctor_id: doctorId,
        available_time: availableTime
      });
      console.log(response.data);
      // Optionally, handle successful availability update
    } catch (error) {
      console.error('Error updating availability:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.doctorAvailability}>
      <h2>Set Availability</h2>
      <div className={styles.formField}>
        <label>Doctor ID</label>
        <input type="text" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} required />
      </div>
      <div className={styles.formField}>
        <label>Available Time</label>
        <input type="datetime-local" value={availableTime} onChange={(e) => setAvailableTime(e.target.value)} required />
      </div>
      <button type="submit">Set Availability</button>
    </form>
  );
};

export default DoctorAvailability;
