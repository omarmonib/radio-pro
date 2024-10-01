import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, description }) => {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>More Details</button>
    </div>
  );
};

export default ServiceCard;
