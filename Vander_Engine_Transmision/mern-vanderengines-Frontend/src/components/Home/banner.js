// Banner.js
import React from 'react';
import './Banner.css'; // Importing the CSS file

const Banner = () => {
  const phoneNumber = "+1844-893-1760";

  return (
    <div className="banner-container">
      {/* Left side for messages */}
      <div className="banner-left">
        <div className="banner-text">Limited Time Offer!</div>
        <div className="discount-text">Get 50% off on all items!</div>
      </div>

      {/* Right side for Call to Action */}
      <div className="banner-right">
        <a href="tel:+1844-893-1760" className="call-to-action">
          Call Now: {phoneNumber}
        </a>
        <div className="timer">⏳ Offer ends in 2 days!</div>
      </div>
    </div>
  );
};

export default Banner;
