import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/authentication/Login';
import SignUp from '../components/authentication/SignUp';
import ForgotPassword from '../components/authentication/ForgotPassword';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Notification from '../components/common/Notification';
import ServiceList from '../components/Service';
import Posts from '../components/Posts';
import '../styles/App.css';

const App = () => {
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');

  useEffect(() => {
    const savedLoginStatus = localStorage.getItem('isLoggedIn') === 'true';
    const savedUserName = localStorage.getItem('userName') || '';
    setIsLoggedIn(savedLoginStatus);
    setLoggedInUser(savedUserName);
  }, []);

  useEffect(() => {
    if (notificationMessage) {
      const timer = setTimeout(() => setNotificationMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notificationMessage]);

  const handleLogin = (userName) => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', userName);
    setIsLoggedIn(true);
    setLoggedInUser(userName);
  };

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
    setLoggedInUser('');
  };

  return (
    <div className="page-layout">
      {isLoggedIn && <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
      <div className="main-container">
        {isLoggedIn && <aside className="sidebar">Most Engaging Topics</aside>}
        <main>
          <Routes>
            <Route
              path="/"
              element={
                isLoggedIn ? (
                  <Posts 
                    userName={loggedInUser} 
                    onPostAdded={() => setNotificationMessage('New post added!')} 
                  />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </main>
        {isLoggedIn && <ServiceList />}
      </div>
      {isLoggedIn && <Footer />}
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
