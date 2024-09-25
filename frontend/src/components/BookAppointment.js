import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './BookAppointment.module.css';

function BookAppointment() {
  const [doctors, setDoctors] = useState([]);
  const [doctorId, setDoctorId] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch available doctors
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('https://medbooker.onrender.com/api/doctors');
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('https://medbooker.onrender.com/appointments/book', {
        doctor_id: doctorId,
        appointment_time: appointmentTime,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 201) {
        setMessage('Appointment booked successfully!');
      } else {
        setMessage('Failed to book appointment. Please try again.');
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      setMessage('Error booking appointment. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formField}>
          <label>Doctor</label>
          <select value={doctorId} onChange={(e) => setDoctorId(e.target.value)} required>
            <option value="">Select a doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name} ({doctor.specialty})
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formField}>
          <label>Appointment Time</label>
          <input
            type="datetime-local"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book Appointment</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}

export default BookAppointment;
