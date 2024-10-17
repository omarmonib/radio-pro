import React, { useRef } from 'react';
import '../styles/service.css';

// ServiceCard component to display service details
const ServiceCard = ({ title, description }) => (
  <div className="service-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <button>More Details</button>
  </div>
);

// ServiceList component to display all services
const ServiceList = () => {
  // List of services
  const services = [
    { title: 'Service 1', description: 'Description of Service 1' },
    { title: 'Service 2', description: 'Description of Service 2' },
    { title: 'Service 3', description: 'Description of Service 3' },
    { title: 'Service 4', description: 'Description of Service 4' },
  ];

  const serviceContainerRef = useRef(null); // Reference for the container

  return (
    <div className="service">
      <div className="service-container" ref={serviceContainerRef}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
