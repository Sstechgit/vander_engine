import React, { useRef, useEffect } from 'react';
import './CustomerTestimonials.css';

const WhatOurCustomersSay = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    // Mouse wheel scroll handler for horizontal scrolling
    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault(); // Prevent vertical scroll
        carousel.scrollLeft += e.deltaY; // Scroll horizontally
      }
    };

    // Touch scrolling variables
    let isDragging = false;
    let startX;
    let scrollLeft;

    // Mouse and touch event handlers
    const handleMouseDown = (e) => {
      isDragging = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2; // Increase scrolling speed
      carousel.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
      isDragging = false;
    };

    // Add event listeners for mouse and touch
    carousel.addEventListener('wheel', handleWheel);
    carousel.addEventListener('mousedown', handleMouseDown);
    carousel.addEventListener('mousemove', handleMouseMove);
    carousel.addEventListener('mouseup', handleMouseUpOrLeave);
    carousel.addEventListener('mouseleave', handleMouseUpOrLeave);

    // Cleanup listeners on component unmount
    return () => {
      carousel.removeEventListener('wheel', handleWheel);
      carousel.removeEventListener('mousedown', handleMouseDown);
      carousel.removeEventListener('mousemove', handleMouseMove);
      carousel.removeEventListener('mouseup', handleMouseUpOrLeave);
      carousel.removeEventListener('mouseleave', handleMouseUpOrLeave);
    };
  }, []);

  // Static data for now, you can replace it with dynamic data later
  const testimonials = [
    { name: 'Shamika Walton', feedback: 'I order a motor for a 2000 Chevy.Monte carlo When the motor arrives, it look  brand spank New, you could not tell it came out of another monte carlo .', image: 'https://randomuser.me/api/portraits/men/1.jpg', rating: 5 },
    { name: 'Bo Sturgill', feedback: 'I got to say they were very nice to work with. David Williams was incredibly helpful with each step. I received my transmission way quicker than I ever expected.', image: 'https://randomuser.me/api/portraits/women/1.jpg', rating: 5 },
    { name: 'Matthew grove', feedback: 'With researching for a replacement engine for my daughters car I was not sure what site to go-to. I found Vander and the response time to see how they could help and to make sure they had all the info to find a match was amazing.', image: 'https://randomuser.me/api/portraits/men/5.jpg', rating: 5 },
    { name: 'Mitchell Bacon', feedback: 'I purchased a engine with 60 k miles on it but some how they shipped me one with 30k miles on it so even better first engine had a 3 year warranty but the one they shipped me has a 5 year warranty', image: 'https://randomuser.me/api/portraits/men/2.jpg', rating: 4 },
    { name: 'Brandon Simmons', feedback: 'I purchased an engine for my Jeep Wrangler and this was my first time working with Vander Engines.  Larry was great to work with and I received the engine about 5  days after I ordered it. ', image: 'https://randomuser.me/api/portraits/women/3.jpg', rating: 5 },
    { name: 'Knee Sea', feedback: 'I was contacted after some web inquiries. They were very informative and communication was quick. I purchased an engine for a decent price. It shipped fast and I have no complaints about the engine.', image: 'https://randomuser.me/api/portraits/women/6.jpg', rating: 5 },
    { name: 'Shyam kumar ', feedback: 'My review about Vander Engines .I am from Houston (Texas) , last week we have big hurricane my car was damaged .So I was searching online for used engine for my 2015 Honda civic LX .', image: 'https://randomuser.me/api/portraits/men/8.jpg', rating: 4 },
    { name: 'Balbir Kapany', feedback: ' They provide me with Vin number the transmission came for. Received the transmission that replaced a 2001 740iL with 148K miles with a transmission with 38K miles. I have the car for a week and the transmission is working exceeding well. It was Larry at the company , he was diligent and answering the phone and adequately answering the question.', image: 'https://randomuser.me/api/portraits/men/9.jpg', rating: 5 },
    { name: 'Bricke Charga', feedback: 'Zac kept me informed regarding my engine purchase, shipping and wanted to make sure I was completely satisfied. He was thorough in the communication process. I really appreciate that. I hope my engine lasts a long time.', image: 'https://randomuser.me/api/portraits/men/10.jpg', rating: 5 },
    { name: 'Melanie Carnahan', feedback: 'I am happy with the delivery of the engine I ordered. Delivery was professional and kept me updated. My mechanic has not installed the engine yet. Hopefully that will go smoothly. Also Sarah was very helpful over the phone.', image: 'https://randomuser.me/api/portraits/men/11.jpg', rating: 5 },
    { name: 'Ernesto Bonilla', feedback: 'Bought a Transmission for my Toyota RAV4, got a very competitive price and 4-year warranty on parts and labor. So far it feels good on the car and the feedback I got from the mechanic was that it looked good.', image: 'https://randomuser.me/api/portraits/men/12.jpg', rating: 4 },
    { name: 'Marian Henderson', feedback: 'A GREAT BIG SHOUT OUT TO VANDER ENGINES! Ordered an engine from them. It arrived exactly on the date promised. Pulled oil drain plug and found metal shavings, then opened up the motor and found it to be no good.', image: 'https://randomuser.me/api/portraits/men/13.jpg', rating: 5 },
    { name: 'Miriam', feedback: 'Needed an engine for my Subaru ascent , Zac was very understanding and work with me since I was on a budget , very helpful communication was very good . Order my engine 4th of July weekend . Received a week later shipping was a breeze not bad at all . Thank you for your help !', image: 'https://randomuser.me/api/portraits/women/14.jpg', rating: 5 }
  ];

  // Function to generate star rating
  const renderStars = (rating) => {
    const totalStars = 5;
    return (
      <div className="stars">
        {Array.from({ length: totalStars }, (_, index) => (
          <span key={index} className={index < rating ? 'star filled' : 'star'}>★</span>
        ))}
      </div>
    );
  };

  // Duplicate testimonials for smooth scrolling
  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="testimonials-section">
      <h2>How We Help People</h2>
      <p>With serious savings, a seamless online application, and unique community benefits, our members have a lot to say about our loans!</p>
      <div className="testimonials-carousel" ref={carouselRef}>
        <div className="testimonials-track">
          {scrollingTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="feedback">{testimonial.feedback}</p>
              <div className="customer-info">
                <img src={testimonial.image} alt={testimonial.name} className="customer-image" />
                <div>
                  <p className="customer-name">{testimonial.name}</p>
                  {renderStars(testimonial.rating)} {/* Display star rating */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatOurCustomersSay;
