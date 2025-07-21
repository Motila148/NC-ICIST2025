import React from 'react';
import { FaPlane, FaTrain, FaBus } from 'react-icons/fa';
import './HowToReach.css';

// Store travel information in an array for easy management
const travelOptions = [
  {
    mode: 'By Air',
    icon: <FaPlane />,
    details: 'The nearest airport is Bir Tikendrajit International Airport, Imphal (IMF), located 11 km from the University campus. The airport is well-connected to major cities across India.',
  },
  {
    mode: 'By Rail',
    icon: <FaTrain />,
    details: 'The nearest major railway station is in Dimapur, Nagaland. From Dimapur, one can hire a taxi or take a bus to reach Imphal, which takes approximately 6-7 hours.',
  },
  {
    mode: 'By Road',
    icon: <FaBus />,
    details: 'Imphal is well-connected by all-weather roads to Guwahati (498 km) and Silchar (263 km). Frequent bus and taxi services are available from these cities.',
  },
];

const HowToReach = () => {
  return (
    <section className="how-to-reach-section">
      <div className="container">
        <h2 className="section-title">How to Reach</h2>
        <p className="section-subtitle">
          Manipur University is located 7 km from the heart of Imphal city.
        </p>
        
        <div className="travel-grid">
          {travelOptions.map((option, index) => (
            <div className="travel-card" key={index}>
              <div className="travel-icon">{option.icon}</div>
              <h3 className="travel-mode">{option.mode}</h3>
              <p className="travel-details">{option.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToReach;