import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/auth.css'; // Import the shared authentication styles
import logoImage from '../../assets/icons/logo.png'; // Import the logo image

const ForgotPassword = () => {
    const [email, setEmail] = useState(''); // State to track the entered email
    const [message, setMessage] = useState(''); // State to track the success message
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you can add logic to send a password reset email (e.g., API call)
        
        // Temporarily showing a success message
        setMessage('Instructions to reset your password have been sent to your email!');
        setEmail(''); // Clear the input field after submission
    };

    return (
        <div className="auth-page">
            <div className="auth-image">
                <img src={logoImage} alt="Forgot Password Visual" /> {/* Display logo or visual */}
            </div>
            <div className="auth-container">
                <h1 className="auth-title">Forgot Password</h1>
                {/* Display success message if available */}
                {message && <div className="success-message">{message}</div>}
                
                {/* Forgot password form */}
                <form onSubmit={handleSubmit} className="auth-form">
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Update email state on change
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
