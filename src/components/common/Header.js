import React from 'react';
import './Header.css';
import logo from '../../assets/icons/logo1.png';

const Header = ({ isLoggedIn, onLogout }) => {
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    onLogout();
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="search-bar-container">
          <input type="text" placeholder="بحث..." className="search-bar" />
          <i className="fas fa-search search-icon"></i>
        </div>
        <nav className="nav-links">
          <a href="/contact">اتصل بنا</a>
          <a href="/about">حول</a>

          {isLoggedIn && <a href="/">الرئيسية</a>}

          {isLoggedIn && (
            <button onClick={handleLogout} className="logout-link">
              خروج
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
