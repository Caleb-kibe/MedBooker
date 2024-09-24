import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Profile.module.css';

const Profile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://0.0.0.0:10000/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          setUser(response.data);
        } else {
          setError('Failed to fetch profile');
        }
      } catch (err) {
        setError('Failed to fetch profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  return (
    <div className={styles.profileContainer}>
      <h2>Profile</h2>
      <div className={styles.profileField}>
        <label>Name:</label>
        <span>{user.name}</span>
      </div>
      <div className={styles.profileField}>
        <label>Email:</label>
        <span>{user.email}</span>
      </div>
      {/* Add more fields as needed */}
    </div>
  );
};

export default Profile;
