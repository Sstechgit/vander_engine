import React from 'react';
import './AboutUs.css'; 
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faTruck, faUndo } from '@fortawesome/free-solid-svg-icons';
const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="content">
        <h1 className='heading_aboutus headline-title'><span className='US'>About </span>Us</h1>
        <p className='top_section'>Vander Engines Transmissions is a leading provider of high-quality used engines and transmissions in the United States. We specialize in offering a wide range of affordable, reliable, and thoroughly tested automotive parts for various vehicle brands and models. Our engines are highly tested and inspected before we deliver it to you. We are one of the most trusted suppliers of used engines and used transmissions. At our yards you can find the perfect match for your vehicle remanufactured engines and transmissions.</p>
        <p>Whether you are looking to replace a worn-out engine or transmission in your car, truck, or SUV, Vander Engines Transmissions has got you covered. Our extensive inventory includes engines and transmissions for domestic and foreign vehicles, ensuring that you find the exact part you need, no matter the make or model.</p>
        {/* <p>At Vander Engines Transmissions, we understand the importance of performance and reliability when it comes to your vehicle. We take pride in offering high-quality parts at competitive prices, helping customers save on costly repairs while maintaining the performance and longevity of their vehicles.</p>
        <p>We commit our customers to 100% satisfaction on our products because we only provide top-notch products that offer high performance and efficiency.</p>
        <p>We also offer a seamless shopping experience, with fast shipping across the United States and dedicated customer support to assist you at every step of the way.</p>      
        <p>Explore our selection today and experience the difference of working with a company that values quality, reliability, and customer satisfaction above all else.</p> */}
            <Link to="/about">
              <button className="btn btn-primary" type='submit'>More</button>
            </Link>
      </div>
      <div className="image">
        {
           <img src="aboutus.png" alt="Aboutus"/>
        }
      </div>
    </div>
  );
};

export default AboutUs;
