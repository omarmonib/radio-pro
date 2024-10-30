import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/auth.css'
import logoImage from '../../assets/icons/logo.png';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Temporarily showing a success message
        setMessage('Instructions to reset your password have been sent to your email!');
        setEmail('');
    };

    return (
        <div className="auth-page">
            <div className="auth-image">
                <img src={logoImage} alt="Forgot Password Visual" />
            </div>
            <div className="auth-container">
                <h1 className="auth-title">Forgot Password</h1>
                {message && <div className="success-message">{message}</div>}
                
                {/* Forgot password form */}
                <form onSubmit={handleSubmit} className="auth-form">
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="auth-input"
                        required
                    />
                    <button type="submit" className="auth-button">Send</button>
                </form>
                
                {/* Button to navigate back to login */}
                <button className="link-button" onClick={() => navigate('/login')}>
                    Back to Login
                </button>
            </div>
        </div>
    );
};

export default ForgotPassword;
