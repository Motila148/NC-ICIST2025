import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CollegeLogo from "../../assets/CollegeLogo.jpg"; // Replace with your image path
import "./Banner.css";

const bannerImages = [
  {
    src: CollegeLogo,
    alt: "College Logo",
    title: "NORTH EAST INTERNATIONAL CONFERENCE ON",
    subtitle: "Innovation in Science and Technology (NE-ICIST 2025)",
    date: "9th - 11th December 2025"
  },
];

const Banner = () => {
  return (
    <div className="banner-carousel-wrapper">
      <Carousel
        showArrows
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
      >
        {bannerImages.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image.src} alt={image.alt} />
            <div className="banner-overlay">
              <div className="conference-title-wrapper">
                <h1 className="conference-main-title">{image.title}</h1>
                <h2 className="conference-subtitle">{image.subtitle}</h2>
                <h3 className="conference-duration">{image.date}</h3>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
