import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/header.css';
import logo from '../../assets/icons/logo1.png';

const Header = ({ isLoggedIn, onLogout }) => {
  // Handle logout by removing login state from local storage and invoking parent handler
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    onLogout();
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo Section */}
        <div className="logo-container">
          <img src={logo} alt="Site Logo" className="logo" />
        </div>

        {/* Search Bar Section */}
        <div className="search-bar-container">
          <input type="text" placeholder="Search..." className="search-bar" />
          <i className="fas fa-search search-icon"></i> {/* Search Icon inside input */}
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/about">About</NavLink>

          {/* Show additional links only if the user is logged in */}
          {isLoggedIn && (
            <>
              <NavLink to="/">Home</NavLink>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
