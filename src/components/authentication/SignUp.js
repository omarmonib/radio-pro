import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/auth.css';
import logoImage from '../../assets/icons/logo.png';

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errorMessages, setErrorMessages] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    // Email validation function
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Password validation function (at least 8 chars, letters, numbers, and special characters)
    const validatePassword = (password) => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!-/:-@[-`{-~]).{8,}$/.test(password);

    // Validate fields on blur (when input loses focus)
    const handleBlur = (field) => {
        let message = '';

        switch (field) {
            case 'username':
                message = formData.username.trim() === '' ? 'The username must not be empty.' : '';
                break;
            case 'email':
                message = !validateEmail(formData.email) ? 'The email is empty or invalid.' : '';
                break;
            case 'password':
                message = !validatePassword(formData.password) ? 
                    'Password: at least 8 characters, letters, numbers, and special characters.' : '';
                break;
            case 'confirmPassword':
                message = formData.password !== formData.confirmPassword ? 'The password does not match.' : '';
                break;
            default:
                break;
        }

        setErrorMessages((prev) => ({ ...prev, [field]: message }));
    };

    // Update form data when user types
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrorMessages((prev) => ({ ...prev, [name]: '' })); // Clear error message on change
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate all fields on submit
        Object.keys(formData).forEach(handleBlur);

        // If there are any errors, prevent submission
        if (Object.values(errorMessages).some((msg) => msg)) return;

        // Success case: Clear the form
        alert('Account created successfully!');
        setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
        setErrorMessages({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    };

    return (
        <div className="auth-page">
            <div className="auth-image">
                <img src={logoImage} alt="Sign Up Visual" />
            </div>
            <div className="auth-container">
                <h1 className="auth-title">Create New Account</h1>
                <form onSubmit={handleSubmit} className="auth-form">
                    {['username', 'email', 'password', 'confirmPassword'].map((field, index) => (
                        <div key={index}>
                            <input
                                type={field.includes('password') ? 'password' : 'text'}
                                name={field}
                                placeholder={field.charAt(0).toUpperCase() + field.slice(1)} // Capitalize first letter
                                value={formData[field]}
                                onChange={handleChange}
                                onBlur={() => handleBlur(field)}
                                className="auth-input"
                                required
                            />
                            {errorMessages[field] && <div className="error-message">{errorMessages[field]}</div>}
                        </div>
                    ))}
                    <button type="submit" className="auth-button">Create Account</button>
                    <button className="link-button" onClick={() => navigate('/login')}>Back to Login</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
