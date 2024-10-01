import React from 'react';
import './Notification.css';

const Notification = ({ message, onClose }) => {
  return (
    <div className="notification">
      <span>{message}</span>
      <button onClick={onClose} className="close-button">×</button>
    </div>
  );
};

export default Notification;
