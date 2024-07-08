import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './DoctorList.module.css';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/doctors');
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Available Doctors</h2>
      <ul className={styles.doctorList}>
        {doctors.map((doctor) => (
          <li key={doctor.id} className={styles.doctorItem}>
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;
