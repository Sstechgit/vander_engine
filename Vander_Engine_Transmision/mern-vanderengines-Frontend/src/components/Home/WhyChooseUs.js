import React from 'react';
import './WhyChooseUs.css'; 
import logo1 from './images/whychooseus_logo/logo (1).png'; // Import the CSS file for styling
import logo2 from './images/whychooseus_logo/logo (2).png'; 
import logo3 from './images/whychooseus_logo/logo (3).png'; 
import logo4 from './images/whychooseus_logo/logo (4).png'; 
import logo5 from './images/whychooseus_logo/logo (5).png'; 
import logo6 from './images/whychooseus_logo/logo (6).png'; 
const WhyChooseUs = () => {
    const reasons = [
        { id: 1, title: 'Extensive Inventory', text: 'We offer a vast selection of used engines and transmissions for virtually all vehicle makes and models.', imgSrc: logo6 },
        { id: 2, title: 'Thoroughly Tested and Inspected', text: 'Quality is our priority. Each engine and transmission undergoes rigorous testing.', imgSrc:logo5  },
        { id: 3, title: 'Affordability', text: 'Offering premium quality at competitive prices. We help you save on repairs without compromising quality.', imgSrc: logo4 },
        { id: 4, title: 'Fast Nationwide Shipping', text: 'Fast, reliable shipping across the U.S., delivering your engine or transmission to your doorstep.', imgSrc: logo3 },
        { id: 5, title: 'Dedicated Customer Support', text: 'Our team is here to help every step of the way with technical questions or support.', imgSrc: logo2 },
        { id: 6, title: 'Satisfaction Guarantee', text: 'Committed to customer satisfaction, backed by industry expertise.', imgSrc: logo1 }
    ];

    return (
        <section className="why-choose-us">
            <h2>Why <span style={{ color: '#790cac' }}>Choose </span>Us?</h2>
            <p className='whychooseus_pera'>Choose us for our extensive inventory of thoroughly tested and inspected engines and transmissions. We offer premium quality at affordable prices with fast nationwide shipping. Our dedicated customer support ensures a smooth experience, and we stand behind our satisfaction guarantee  </p>
            {/* <p className='whychooseus_pera'> thoroughly tested and inspected  </p>
            <p className='whychooseus_pera'> engines and transmissions.  </p> */}

            <p></p>
            <div className="grid-container">
                {reasons.map((reason) => (
                    <div key={reason.id} className="grid-item">
                        <div className="logo-title">
                            <img src={reason.imgSrc} alt={reason.title} className="logo" />
                            <h3>{reason.title}</h3>
                        </div>
                        <div className="content-container">
                            <p>{reason.text}</p>
                        </div>
                        <span className="item-number">{reason.id}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
