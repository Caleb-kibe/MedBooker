import React, { useState } from 'react';
import axios from 'axios';

function AppointmentBooking() {
    const [doctorId, setDoctorId] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [message, setMessage] = useState('');

    const handleBooking = async () => {
        try {
            const response = await axios.post('https://medbooker.onrender.com/appointments/book', {
                doctor_id: doctorId,
                appointment_time: appointmentTime
            });
            setMessage(response.data.msg);
        } catch (error) {
            console.error('Error booking appointment:', error);
            setMessage('Failed to book appointment. Please try again.');
        }
    };

    return (
        <div>
            <h1>Book Appointment</h1>
            <form onSubmit={handleBooking}>
                <label>Doctor ID:</label>
                <input type="text" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} required />
                <br />
                <label>Appointment Time:</label>
                <input type="datetime-local" value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} required />
                <br />
                <button type="submit">Book Appointment</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default AppointmentBooking;
