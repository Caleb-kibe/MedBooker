import React, { useState } from 'react';
import axios from 'axios';
import styles from './RegisterForm.module.css';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  // Added state variable to track registration status
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', {
        username,
        email,
        password,
        role
      });
      if (response.status === 200) {
        console.log('Registration successful!');
        // Set state to true to display success message
        setIsRegistered(true);
      } else {
        console.error('Registration failed:', response);
        // Handle unsuccessful registration (e.g., display error message)
      }
    } catch (error) {
      console.error('Registration error:', error);
      // Handle registration error (e.g., display error message)
    }
  };

  return (
    <div className={styles.everything}>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <div className={styles.formField}>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className={styles.formField}>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className={styles.formField}>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className={styles.formField}>
          <label>Role</label>
          <input type="text" value={role} onChange={(e) => setRole(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
      </form>
      {/* Conditionally render success message */}
      {isRegistered && <p className={styles.successMessage}>Registration Successful!</p>}
    </div>
  );
}

export default RegisterForm;
