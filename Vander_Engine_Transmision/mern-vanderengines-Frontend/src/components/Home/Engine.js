import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Engine.css';

function EngineSection() {
  return (
    <section className="engine-section">
      <Container>
        <Row className="align-items-center ">
          {/* Left Side: Text Content */}
          <Col md={7} sm={12} className="engine-text content">
            <h2>Engines</h2>
            <p>
            At Vander Engines Transmissions , We have high quality used engines these engines are sourced from the most trusted supplier. The remanufactured engines that we sell are highly tested and inspected, they give you high performance and efficiency. We sell second hand engines across the United states, catering to a wide variety of makes and models. 
            </p>
            <p>Our used engines are carefully selected, rigorously tested, and inspected to ensure that they meet the highest performance standards. No matter whether you're looking for used   engines for cars, trucks, or SUVs, we provide reliable, affordable solutions that help extend the life of your vehicle while saving you money.
            </p>
            <Link to="/engines">
              <button className="btn btn-primary" type='submit'>More</button>
            </Link>
            {/* <p>Our inventory includes engines for all major brands, such as Ford, Chevrolet, Dodge, Toyota, Honda, and more. Each engine is cleaned, tested, and backed by our quality assurance process, giving you the peace of mind that you're purchasing a part that will perform reliably. At Vander Engines, we understand that a vehicle's engine is its heart, and that’s why we prioritize durability and quality above all else.</p>
            <p>We also make the process easy with fast nationwide shipping and customer support to help you find the exact engine you need. Whether you're a mechanic, dealership, or vehicle owner, Vander Engines is committed to providing top-notch service and dependable engines at competitive prices.</p>
            <p>Explore our wide selection of used engines today and let Vander Engines be your trusted partner for all your engine replacement needs in the United States.</p> */}
            {/* More text content */}
          </Col>
          {/* Right Side: GIF Image */}
          <Col md={5} sm={12} className="engine-image">
            <img src="engine.png" alt="Engine" className="img-fluid engine-gif" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default EngineSection;



