import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css';

function LoginForm({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://0.0.0.0:10000/auth/login', {
        email,
        password
      });

      if (response.status === 200) {
        console.log('Login successful!');
        localStorage.setItem('token', response.data.access_token);
        setIsLoggedIn(true);
        navigate('/dashboard');
      } else {
        console.error('Login failed:', response);
        setError('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login error. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.formField}>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className={styles.formField}>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
