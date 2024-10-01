import React, { useState } from 'react';
import './SignUp.css';
import signupImage from '../assets/icons/logo.png';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleUsernameBlur = () => {
    if (username.trim() === '') {
      setErrorMessages((prev) => ({
        ...prev,
        username: 'اسم المستخدم يجب أن لا يكون فارغاً',
      }));
    } else {
      setErrorMessages((prev) => ({ ...prev, username: '' }));
    }
  };

  const handleEmailBlur = () => {
    if (!validateEmail(email)) {
      setErrorMessages((prev) => ({
        ...prev,
        email: 'البريد الإلكتروني فارغ أو غير صحيح',
      }));
    } else {
      setErrorMessages((prev) => ({ ...prev, email: '' }));
    }
  };

  const handlePasswordBlur = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessages((prev) => ({
        ...prev,
        password: 'يجب أن تتكون كلمة المرور من 8 أحرف وتتضمن أحرف وأرقام',
      }));
    } else {
      setErrorMessages((prev) => ({ ...prev, password: '' }));
    }

    if (password !== confirmPassword) {
      setErrorMessages((prev) => ({
        ...prev,
        confirmPassword: 'كلمة المرور غير متطابقة',
      }));
    } else {
      setErrorMessages((prev) => ({ ...prev, confirmPassword: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUsernameBlur();
    handleEmailBlur();
    handlePasswordBlur();

    if (errorMessages.username || errorMessages.email || errorMessages.password || errorMessages.confirmPassword) {
      return;
    }

    alert('تم إنشاء الحساب بنجاح!');
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrorMessages({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="signup-page">
      <div className="signup-image">
        <img src={signupImage} alt="Sign Up Visual" />
      </div>
      <div className="signup-container">
        <h1 className="signup-title">إنشاء حساب جديد</h1>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            placeholder="اسم المستخدم"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setErrorMessages((prev) => ({ ...prev, username: '' }));
            }}
            onBlur={handleUsernameBlur}
            className="signup-input"
            required
          />
          {errorMessages.username && <div className="error-message">{errorMessages.username}</div>}

          <input
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorMessages((prev) => ({ ...prev, email: '' }));
            }}
            onBlur={handleEmailBlur}
            className="signup-input"
            required
          />
          {errorMessages.email && <div className="error-message">{errorMessages.email}</div>}

          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorMessages((prev) => ({ ...prev, password: '' }));
            }}
            onBlur={handlePasswordBlur}
            className="signup-input"
            required
          />
          {errorMessages.password && <div className="error-message">{errorMessages.password}</div>}

          <input
            type="password"
            placeholder="تأكيد كلمة المرور"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setErrorMessages((prev) => ({ ...prev, confirmPassword: '' }));
            }}
            onBlur={handlePasswordBlur}
            className="signup-input"
            required
          />
          {errorMessages.confirmPassword && <div className="error-message">{errorMessages.confirmPassword}</div>}

          <button type="submit" className="signup-button">إنشاء حساب</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
