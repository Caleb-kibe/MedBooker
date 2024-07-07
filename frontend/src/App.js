
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import RegisterDoctor from './components/RegisterDoctor';
// import LoginForm from './components/LoginForm';
// import About from './components/About'
// import Dashboard from './components/DashBoard';
// import LandingPage from './components/LandingPage';
// import RegisterForm from './components/RegisterForm';
// import Profile from './components/Profile';
// // import other components...

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <Router>
//       <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//       <Routes>
//         <Route path='/home' element={<LandingPage/>} />
//         <Route path='/about' element={<About />} />
//         <Route path="/register_doctor" element={<RegisterDoctor />} />
//         <Route path='/register' element={<RegisterForm />} />
//         <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
//         <Route path='/profile' element={<Profile />} />
//         <Route path='/dashboard' element={<Dashboard />} />
//         {/* Add other routes here */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import './App.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import RegisterDoctor from './components/RegisterDoctor';
import LoginForm from './components/LoginForm';
import About from './components/About'
import Dashboard from './components/DashBoard';
import LandingPage from './components/LandingPage';
import RegisterForm from './components/RegisterForm';
import Profile from './components/Profile';
import Footer from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  return (
    <Router>
      <div className="app-container">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <div className="main-content">
          <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/home' element={<LandingPage/>} />
          <Route path='/about' element={<About />} />
          <Route path="/register_doctor" element={<RegisterDoctor />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/dashboard' element={<Dashboard />} />
         {/* Add other routes here */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
