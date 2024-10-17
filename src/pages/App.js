import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/authentication/Login';
import SignUp from '../components/authentication/SignUp';
import ForgotPassword from '../components/authentication/ForgotPassword';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Notification from '../components/common/Notification';
import ServiceList from '../components/ServiceList';
import Posts from '../components/Posts';
import '../styles/App.css';

const App = () => {
  const [notificationMessage, setNotificationMessage] = useState(null); // Notification state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state

  // Check login status on load
  useEffect(() => {
    const savedLoginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(savedLoginStatus);
  }, []);

  // Hide notifications after 3 seconds
  useEffect(() => {
    if (notificationMessage) {
      const timer = setTimeout(() => setNotificationMessage(null), 3000);
      return () => clearTimeout(timer); // Clear the timer
    }
  }, [notificationMessage]);

  // Handle login
  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true'); // Save login status
    setIsLoggedIn(true); // Set login state to true
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false'); // Remove login status
    setIsLoggedIn(false); // Set login state to false
  };

  return (
    <div className="page-layout">
      {/* Show header if logged in */}
      {isLoggedIn && <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />}

      <main>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                // Show content if logged in
                <>
                  <ServiceList />
                  <Posts onPostAdded={() => setNotificationMessage('New post added!')} />
                </>
              ) : (
                // Show login if not logged in
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </main>

      {/* Show footer if logged in */}
      {isLoggedIn && <Footer />}

      {/* Show notification if message exists */}
      {notificationMessage && (
        <Notification
          message={notificationMessage}
          onClose={() => setNotificationMessage(null)}
        />
      )}
    </div>
  );
};

export default App;
