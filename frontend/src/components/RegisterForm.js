import React, { useState } from 'react';
import axios from 'axios';
import styles from './RegisterForm.module.css';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Log form data
    console.log('Form Data:', { username, email, password, role });

    try {
      const response = await axios.post('http://127.0.0.1:5000/auth/register', {
        username,
        email,
        password,
        role
      });
      if (response.status === 201) {
        console.log('Registration successful!');
        setIsRegistered(true);
      } else {
        console.error('Registration failed:', response);
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('Registration error. Please try again. :)');
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
          <label>Confirm Password</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        <div className={styles.formField}>
          <label>Role</label>
          <input type="text" value={role} onChange={(e) => setRole(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </form>
      {isRegistered && <p className={styles.successMessage}>Registration Successful!</p>}
    </div>
  );
}

export default RegisterForm;
