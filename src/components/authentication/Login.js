import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/auth.css';
import logoImage from '../../assets/icons/logo.png';

const Login = ({ onLogin }) => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    };

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = credentials;

        if (username === 'omar' && password === '123456') {
            if (rememberMe) {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userName', username);
            }
            onLogin(username);
            navigate('/');
        } else {
            alert('Invalid login');
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-image">
                <img src={logoImage} alt="Login Visual" />
            </div>
            <div className="auth-container">
                <h1 className="auth-title">Login</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={credentials.username}
                        onChange={handleChange}
                        className="auth-input"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                        className="auth-input"
                        required
                    />
                    <div className="remember-me">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={handleRememberMeChange}
                        />
                        <label htmlFor="rememberMe">Remember Me</label>
                    </div>
                    <button type="submit" className="auth-button">Login</button>
                </form>
                <button className="link-button" onClick={() => navigate('/forgot-password')}>
                    Forgot Password?
                </button>
                <button className="link-button" onClick={() => navigate('/signup')}>
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Login;
