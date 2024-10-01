import React, { useRef } from 'react';
import ServiceCard from './ServiceCard';
import './ServiceList.css';

const ServiceList = () => {
  const services = [
    { title: 'Service 1', description: 'Description of Service 1' },
    { title: 'Service 2', description: 'Description of Service 2' },
    { title: 'Service 3', description: 'Description of Service 3' },
    { title: 'Service 4', description: 'Description of Service 4' },
  ];

  const serviceContainerRef = useRef(null);

  const scrollLeft = () => {
    if (serviceContainerRef.current) {
      serviceContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  // Scroll right
  const scrollRight = () => {
    if (serviceContainerRef.current) {
      serviceContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="service">
      <div className="service-container-wrapper">
        <button className="scroll-button left" onClick={scrollLeft}>
          {'<'} {/* سهم يمثل السكرول لليسار */}
        </button>
        <div className="service-container" ref={serviceContainerRef}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          {'>'} {/* سهم يمثل السكرول لليمين */}
        </button>
      </div>
    </div>
  );
};

export default ServiceList;
