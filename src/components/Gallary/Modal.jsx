import React, { useState } from 'react';
import './Modal.css'; // We will create this new CSS file

const Modal = ({ location, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? location.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === location.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        
        <div className="modal-slider">
          <button className="slider-arrow left" onClick={goToPrevious}>&#10094;</button>
          <img src={location.images[currentIndex]} alt={`${location.name} - slide ${currentIndex + 1}`} className="modal-image" />
          <button className="slider-arrow right" onClick={goToNext}>&#10095;</button>
        </div>

        <div className="modal-info">
          <h3 className="modal-title">{location.name}</h3>
          <p className="modal-description">{location.description}</p>
        </div>

        <div className="slider-dots">
            {location.images.map((_, index) => (
                <span 
                    key={index} 
                    className={`dot ${currentIndex === index ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                ></span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;