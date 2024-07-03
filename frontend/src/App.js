import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import LandingPage from './components/LandingPage';
import DoctorList from './components/DoctorList';
import DoctorDetails from './components/DoctorDetails';
import AppointmentBooking from './components/AppointmentBooking';
import UserProfile from './components/UserProfile';
import DoctorAvailability from './components/DoctorAvailability';
import AppointmentList from './components/AppointmentList';

function App() {
  const [isLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path='/RegisterForm' element={<RegisterForm />} />
            <Route path='/LoginForm' element={<LoginForm />} />
            {isLoggedIn && (
              <>
                <Route path='/UserProfile' element={<UserProfile />} />
                <Route path='/DoctorList' element={<DoctorList />} />
                <Route path='/AppointmentBooking' element={<AppointmentBooking />} />
                <Route path='/DoctorDetails/:id' element={<DoctorDetails />} />
                <Route path='/DoctorAvailability' element={<DoctorAvailability />} />
                <Route path='/AppointmentList' element={<AppointmentList />} />
              </>
            )}
          </Routes>
        </div>
        <footer className="footer">
          <p>&copy; 2024 MedBooker. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
