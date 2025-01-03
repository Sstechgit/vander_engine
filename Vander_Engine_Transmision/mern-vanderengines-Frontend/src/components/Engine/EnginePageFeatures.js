import React from 'react';
import './EnginePageFeatures.css';
import carImage from './images/car.png';  // Add the image to your project directory

const EnginePageFeatures = () => {
  return (
    <section className="engine-page-features">
      <div className="container">
        <div className="engine-page-features-content">
          <h1>FEATURES</h1>
          <p>Given below is the list of some of our best features:</p>
          <div className="engine-page-features-list">
            <ul>
              <li>🚩 High-Quality & Low-Mileage import motors near me</li>
              <li>🚩 Guaranteed Compression/Noise/Smoke/Visual Test</li>
              <li>🚩 Shipping to residential as well as business address</li>
              <li>🚩 Extended Warranty on all parts</li>
              <li>🚩 Economical Cost</li>
            </ul>
            <ul>
              <li>🚩 Access to more than 2000 Inventory Yards</li>
              <li>🚩 Fast & free shipping</li>
              <li>🚩 Dedicated & Experienced Customer Service Team</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Adding the car image */}
      <img src={carImage} alt="Car" className="car-image" />
    </section>
  );
};

export default EnginePageFeatures;
