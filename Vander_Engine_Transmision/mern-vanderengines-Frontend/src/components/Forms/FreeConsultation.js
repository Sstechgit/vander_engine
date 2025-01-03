import React from "react";
import "./FreeConsultation.css"; // You can place your CSS here
import handyman from './images/pngegg.png'
import { Link } from 'react-router-dom';
const FreeConsultation = () => {
  return (
    <div className="consultation-container">
      <div className="text-section">
        <p className="call-text">CALL US</p>
        <h1>FOR A FREE CONSULTATION TODAY!</h1>
        <div className="button-container">
        <a href="tel:+1844-893-1760">
          <button className="call-button">+1844-893-1760</button>
        </a>

          <Link to="/contact">
          <button className="request-button">Request a call back</button>
          </Link>
          
        </div>
      </div>
      <div className="image-section">
      <img src={handyman} alt="Handyman" className="consultation-image" />
      </div>
    </div>
  );
};

export default FreeConsultation;
