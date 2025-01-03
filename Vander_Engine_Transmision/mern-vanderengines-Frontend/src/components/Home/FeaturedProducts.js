import React from 'react';
import './FeaturedProducts.css'; // Include the CSS file for styling
import { Link } from 'react-router-dom';
import tshirt1 from './images/Engines/Engine_for_featured (1).png'; 
import tshirt2 from './images/Engines/Engine_for_featured (2).png'; 
import tshirt3 from './images/Engines/Engine_for_featured (3).png'; 
import tshirt4 from './images/Engines/Engine_for_featured (4).png'; 
import tshirt5 from './images/Engines/Engine_for_featured (5).png'; 
import tshirt6 from './images/Engines/Engine_for_featured (6).png'; 
import tshirt7 from './images/Engines/Engine_for_featured (7).png'; 
import tshirt8 from './images/Engines/Engine_for_featured (8).png'; 
import tshirt9 from './images/Engines/Engine_for_featured (9).png'; 
const Card = () => {
  // Array of product names and images
  const products = [
    { name: "2015 Infiniti Q-50 Engine",specifications:"Variant: 3.7LAWDSport",price:"$30", imgSrc: tshirt1},
    { name: "2003 Mitsubishi Outlander Engine",specifications:"Variant: 2.4L-G-8th-digit",price:"$950", imgSrc: tshirt2 },
    { name: "2006 Chrysler 300 Engine",specifications:"Variant: 2.7L-Vin-R",price:"$2,000", imgSrc: tshirt3 },
    { name: "1995 Dodge Avenger Engine",specifications:"Variant: 2.0-Y-vin",price:"$1,164", imgSrc: tshirt4 },
    { name: "1994 Ford Ranger Engine",specifications:"Variant: 3.0LV6-4x2",price:"$850", imgSrc: tshirt5 },
    { name: "2013 Dodge Avenger Engine",specifications:"Variant: 2.4-Federal",price:"$1600", imgSrc: tshirt6 },
    { name: "2003 Bmw X5 Engine",specifications:"Variant: 4.6is",price:"$3,700", imgSrc: tshirt7 },
    { name: "2011 Mitsubishi Outlander Transmission",specifications:"Variant: 2.4-l-AWD",price:"$2,200", imgSrc: tshirt8 },
    { name: "2007 Jeep Compass Transmission",specifications:"Variant: 2.4-cvt-fwd",price:"$1,250", imgSrc: tshirt9 },
  ];

  const cardData = products.map((product, index) => ({
    id: index + 1,
    name: product.name,
    specifications: product.specifications,
    price: product.price,
    imgSrc: product.imgSrc, // Local image reference
  }));


  return (
    <>
    <div className="card-scroller">
      <div className="scroll-wrapper">
        {/* Display the list of cards twice to make the scrolling continuous */}
        {cardData.concat(cardData).map((card, index) => (
          <div key={index} className="card small-card">
            <div className="card-header">
              <img src={card.imgSrc} alt={card.name} className="card-image" />
            </div>
            <div className="card-body">
              <h2>{card.name}</h2>
              <p>{card.specifications}</p>
            </div>
            <p className="price">{card.price}</p>
            <Link to="/contact">
            <button className="add-to-cart">Buy Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Card;
