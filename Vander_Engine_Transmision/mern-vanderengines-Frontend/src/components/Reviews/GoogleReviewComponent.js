import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import './GoogleReviewComponent.css';

const GoogleReviewComponent = ({ reviews, averageRating, reviewCount }) => {
  return (
    <div className="google-review-container">
      <div className="google-review-header">
        <h3>What our customers say</h3>
        <div className="google-review-summary">
          <FaGoogle size={30} />
          <div>
            <h4>Google Reviews</h4>
            <div className="rating">
              <span>{averageRating}</span>
              <span className="stars">⭐{averageRating}</span>
              <span>({reviewCount})</span>
            </div>
          </div>
          <button className="review-button">Review us on Google</button>
        </div>
      </div>
      <div className="google-review-list">
        {reviews.map((review, index) => (
          <div key={index} className="google-review-card">
            <div className="review-header">
              <div className="review-author">{review.author}</div>
              <div className="review-date">{review.date}</div>
            </div>
            <div className="review-rating">⭐{review.rating}</div>
            <div className="review-text">{review.text}</div>
            <div className="review-footer">
              <FaGoogle />
              <span>Posted on Google</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleReviewComponent;
