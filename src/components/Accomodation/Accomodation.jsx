import React from 'react';
import './Accomodation.css';

// Import all your images from the assets folder
import classicGrande1 from '../../assets/classic-grande-1.avif';
import classicGrande2 from '../../assets/classic-grande-2.avif';
import hotelImphal1 from '../../assets/hotel-imphal-1.avif';
import hotelImphal2 from '../../assets/hotel-imphal-2.avif';
import sangaiContinental1 from '../../assets/sangai-continental-1.avif';
import sangaiContinental2 from '../../assets/sangai-continental-2.avif';
import hotelMillenium1 from '../../assets/hotel-millenium-1.avif';
import hotelMillenium2 from '../../assets/hotel-millenium-2.avif';
import hotelImolesh1 from '../../assets/hotel-imolesh-1.avif';
import hotelImolesh2 from '../../assets/hotel-imolesh-2.avif';
import sangaiHotel1 from '../../assets/sangai-hotel-1.avif';
import sangaiHotel2 from '../../assets/sangai-hotel-2.avif';
import guestHouseImg from '../../assets/guest-house.jpg';

// Use the imported variables in your data array
const hotelData = [
  {
    name: 'Classic Grande',
    distance: '10.9 km from venue',
    img1: classicGrande1,
    img2: classicGrande2,
  },
  {
    name: 'Hotel Imphal',
    distance: '9.5 km from venue',
    img1: hotelImphal1,
    img2: hotelImphal2,
  },
  {
    name: 'Sangai Continental',
    distance: '8.9 km from venue',
    img1: sangaiContinental1,
    img2: sangaiContinental2,
  },
    {
    name: 'Hotel Millenium',
    distance: '8.3 km from venue',
    img1: hotelMillenium1,
    img2: hotelMillenium2,
  },
  {
    name: 'Hotel Imolesh',
    distance: '6.8 km from venue',
    img1: hotelImolesh1,
    img2: hotelImolesh2,
  },
  {
    name: 'Sangai Hotel',
    distance: '8.9 km from venue',
    img1: sangaiHotel1,
    img2: sangaiHotel2,
  },
];

const Accommodations = () => {
  return (
    <section className="accommodations-section">
      <div className="container">
        <h2 className="section-title">Accommodations</h2>
        <h3 className="section-subtitle">
            Here are some nearby Hotels
        </h3>

        
        {/* Grid for hotel cards */}
        <div className="hotels-grid">
          {hotelData.map((hotel, index) => (
            <div className="hotel-card" key={index}>
              <div className="image-container">
                <img src={hotel.img1} alt={`${hotel.name} exterior view`} className="image-bottom" />
                <img src={hotel.img2} alt={`${hotel.name} interior view`} className="image-top" />
              </div>
              <div className="card-content">
                <h3 className="hotel-title">{hotel.name}</h3>
                <p className="hotel-distance">{hotel.distance}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Guest House & Additional Information Section */}
        <div className="guesthouse-section">
          <div className="guesthouse-info">
            <h3 className="guesthouse-title">University Guest House & Booking Information</h3>
            <p>
              A limited number of rooms are available in the University Guest House. Accommodation will be provided on a first-come, first-served basis at University rates.
            </p>
           
            <p className="booking-advice">
              <strong>It is highly advisable to confirm your accommodation at the earliest.</strong>
            </p>
          </div>
          <div className="guesthouse-image-container">
            <img src={guestHouseImg} alt="University Guest House" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Accommodations;