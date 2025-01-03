import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Transmission.css';

function TransmissionSection() {
  return (
    <section className="transmission-section">
      <Container>
        <Row className="align-items-center">
          {/* Left Side: GIF Image */}
          <Col md={5} sm={12} className="transmission-image">
            <img src="transmission.gif" alt="Transmission" className="img-fluid transmission-gif space_image" />
          </Col>
          {/* Right Side: Text Content */}
          <Col md={7} sm={12} className="transmission-text">
            <h2>Transmissions</h2>
            <p>
            Vander Engines Transmissions is a leading provider of high-quality used engines and transmissions in the United States. We specialize in offering a wide range of affordable, reliable, and thoroughly tested automotive parts for various vehicle brands and models. Our engines are highly tested and inspected before we deliver it to you. We are one of the most trusted suppliers of used engines and used transmissions. At our yards you can find the perfect match for your vehicle remanufactured engines and transmissions.
            </p>
            <p>
            Whether you are looking to replace a worn-out engine or transmission in your car, truck, or SUV, Vander Engines Transmissions has got you covered. Our extensive inventory includes engines and transmissions for domestic and foreign vehicles, ensuring that you find the exact part you need, no matter the make or model.
            </p>
            <Link to="/transmission">
              <button className="btn btn-primary" type='submit'>More</button>
            </Link>
            {/*
            <p>
            We commit our customers to 100% satisfaction on our products because we only provide top-notch products that offer high performance and efficiency.
            </p>
            <p>
            We also offer a seamless shopping experience, with fast shipping across the United States and dedicated customer support to assist you at every step of the way.
            </p>
            <p>
            Explore our selection today and experience the difference of working with a company that values quality, reliability, and customer satisfaction above all else.
            </p> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TransmissionSection;