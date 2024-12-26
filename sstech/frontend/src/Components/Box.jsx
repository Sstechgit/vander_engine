import React from "react";
import styles from "./Box.module.css"; // Renamed to Box.module.css for consistency
import "@fortawesome/fontawesome-free/css/all.css"; // Import Font Awesome styles

const Box = ({ title, btnClass, btnTitle, price, feature, onButtonClick }) => {
  return (
    <div className={styles.pricingCard}>
      {/* Card Header */}
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p>Package</p>
        <h1 className={styles.price}>
          {price} <span className={styles.priceDuration}>/ mo</span>
        </h1>
      </div>

      {/* Card Body */}
      <div className={styles.cardBody}>
        {/* Features List */}
        <ul className={styles.featuresList}>
          {feature.map((item, index) => (
            <li key={index} className={styles.featureItem}>
              <i aria-hidden="true" className="fas fa-check-circle"></i>
              {item}
            </li>
          ))}
        </ul>

        {/* Call-to-Action Button */}
        <button
          className={`${styles.button1} btn ${btnClass}`} // Scoped button class
          type="button"
          onClick={onButtonClick}
        >
          {btnTitle}
        </button>
      </div>
    </div>
  );
};

export default Box;
