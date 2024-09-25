import React, { useState } from 'react';
import axios from 'axios';
import styles from './RegisterDoctor.module.css';

function RegisterDoctor() {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://medbooker.onrender.com/api/register_doctor', {
        name,
        specialty,
      });

      if (response.status === 201) {
        setSuccessMessage('Doctor registered successfully!');
        setErrorMessage('');
        setName('');
        setSpecialty('');
      } else {
        setErrorMessage('Registration failed. Please try again.');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('Registration error. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <h2>Register Doctor</h2>
        <div className={styles.formField}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formField}>
          <label>Specialty</label>
          <input
            type="text"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      </form>
    </div>
  );
}

export default RegisterDoctor;
