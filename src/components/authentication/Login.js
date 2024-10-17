import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/auth.css';
import logoImage from '../../assets/icons/logo.png';

const Login = ({ onLogin }) => {
    // State to manage user credentials and "remember me" option
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    // Handle input changes for username and password
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    };

    // Handle "Remember Me" checkbox change
    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    // Handle form submission and login logic
    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = credentials;

        // Basic validation (replace with real authentication logic)
        if (username === 'omar' && password === '123456') {
            if (rememberMe) {
                localStorage.setItem('isLoggedIn', 'true'); // Save login state if "Remember Me" is checked
            }
            onLogin(); // Trigger login action
            navigate('/'); // Navigate to the home page after login
        } else {
            console.log('Invalid login');
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
