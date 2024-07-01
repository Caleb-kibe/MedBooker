import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './DoctorList.module.css';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/doctors')
      .then(response => setDoctors(response.data))
      .catch(error => console.error('Error fetching doctors:', error));
  }, []);

  return (
    <div className={styles.doctorList}>
      <h2>Doctors</h2>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor.id}>
            <Link to={`/doctors/${doctor.id}`}>{doctor.name} - {doctor.speciality}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;
