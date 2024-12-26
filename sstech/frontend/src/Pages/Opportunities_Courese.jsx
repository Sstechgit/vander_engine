import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CustomCard.module.css"; // Import CSS module

const CustomCard = () => {
  const cardData = [
    {
      id: 1,
      image: "path/to/image1.png", // Replace with your image path
      value: "200+",
      description: "Hiring partners",
    },
    {
      id: 2,
      image: "path/to/image2.png", // Replace with your image path
      value: "1000+",
      description: "Career Transitions",
    },
    {
      id: 3,
      image: "path/to/image3.png", // Replace with your image path
      value: "10 LPA",
      description: "Highest Package",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center text-success mb-4">Best Opportunities On The Way</h2>
      <div className="row g-4">
        {cardData.map((card) => (
          <div key={card.id} className="col-md-4">
            <div className={styles.customCard}>
              <img
                src={card.image}
                alt={card.description}
                className={styles.cardImage}
              />
              <h3 className="mt-3">{card.value}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCard;
