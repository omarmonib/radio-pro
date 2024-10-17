import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Notification from '../components/common/Notification';
import ServiceList from '../components/ServiceList';
import Posts from '../components/Posts';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import './App.css';

const App = () => {
  const [notification, setNotification] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handlePostAdded = () => {
    setNotification('تم إضافة منشور جديد!');
  };

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
  };

  return (
    <div className="page-layout">
      {isLoggedIn && <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
      <main>
        <Routes>
          <Route path="/" element={isLoggedIn ? (
            <>
              <ServiceList />
              <Posts onPostAdded={handlePostAdded} />
            </>
          ) : (
            <Login onLogin={handleLogin} />
          )} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </main>
      {isLoggedIn && <Footer />}
      {notification && <Notification message={notification} onClose={() => setNotification(null)} />}
    </div>
  );
};

export default App;