import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import loginImage from '../assets/icons/logo.png';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "Omar" && password === "omar123") {
      localStorage.setItem('isLoggedIn', 'true');
      onLogin();
    } else {
      setErrorMessage("اسم المستخدم أو كلمة المرور غير صحيحة");
    }
  };

  return (
    <div className="login-page">
      <div className="login-image">
        <img src={loginImage} alt="Login Visual" />
      </div>
      <div className="login-container">
        <h1 className="login-title">تسجيل الدخول إلى راديو برو</h1>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="البريد الإلكتروني أو الهاتف"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
          <button type="submit" className="login-button">تسجيل الدخول</button>
        </form>
        <div className="login-links">
          <button className="link-button" onClick={() => console.log("استرجاع الحساب")}>هل نسيت الحساب؟</button>
          <button className="link-button" onClick={() => navigate('/signup')}>إنشاء حساب جديد</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
