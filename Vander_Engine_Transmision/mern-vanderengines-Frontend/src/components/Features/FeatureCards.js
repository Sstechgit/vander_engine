import React from 'react';
import './FeatureCards.css';

const FeatureCards = () => {
  return (
    <div className="our-features-container">
      <div className="our-features-card">
        <div className="our-features-icon">🛡️</div>
        <div className="our-features-text">Lifetime Support</div>
      </div>
      <div className="our-features-card">
        <div className="our-features-icon">🚚</div>
        <div className="our-features-text">Free Shipping</div>
      </div>
      <div className="our-features-card">
        <div className="our-features-icon">💲</div>
        <div className="our-features-text">6 Months Return & Replacement Guarantee</div>
      </div>
    </div>
  );
};

export default FeatureCards;
