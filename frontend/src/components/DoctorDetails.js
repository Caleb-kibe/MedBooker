import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './DoctorDetails.module.css';

const DoctorDetails = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/doctors/${id}`)
      .then(response => setDoctor(response.data))
      .catch(error => console.error('Error fetching doctor details:', error));
  }, [id]);

  if (!doctor) return <div>Loading...</div>;

  return (
    <div className={styles.doctorDetails}>
      <h2>{doctor.name}</h2>
      <p>Speciality: {doctor.speciality}</p>
      <p>User ID: {doctor.user_id}</p>
      {/* Add more details and functionality as needed */}
    </div>
  );
};

export default DoctorDetails;
