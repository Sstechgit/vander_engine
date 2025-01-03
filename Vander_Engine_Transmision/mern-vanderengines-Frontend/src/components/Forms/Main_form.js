import React from "react";
import "./Main_form.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCar, faCalendarAlt, faEnvelope, faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
const Main_QuoteForm = () => {
  return (
    <>
      <Container className="main_container_all">
        <Row className="main_form_row">
          <Col md={6} sm={12} className="main_form_column">
            <Row>
              <div className="main_quote-container">
                <h2>Fill Up The Form</h2>
                <h1>Get Your Free Quote</h1>
              </div>
              <Col md={6} sm={6} xs={6} className="main_form_left side">
                <div className="main_form-group">
                  <div className="main_input-icon-wrapper">
                    <FontAwesomeIcon icon={faCogs} className="main_input-icon" />
                    <select className="main_custom-dropdown">
                      <option>Main</option>
                    </select>
                  </div>
                </div>
                <div className="main_form-group">
                  <div className="main_input-icon-wrapper">
                    <FontAwesomeIcon icon={faCar} className="main_input-icon" />
                    <select className="main_custom-dropdown">
                      <option>Camry</option>
                    </select>
                  </div>
                </div>
                <div className="main_form-group">
                  <div className="main_input-icon-wrapper">
                    <FontAwesomeIcon icon={faCogs} className="main_input-icon" />
                    <input type="text" placeholder="2.4L, VIN B (5th digit)" />
                  </div>
                </div>
                <div className="main_form-group">
                  <div className="main_input-icon-wrapper">
                    <FontAwesomeIcon icon={faEnvelope} className="main_input-icon" />
                    <input type="email" placeholder="Enter your email ID" />
                  </div>
                </div>
              </Col>
              <Col md={6} sm={6} xs={6} className="main_form_right side">
                <div className="main_form-group">
                  <div className="main_input-icon-wrapper">
                    <FontAwesomeIcon icon={faCar} className="main_input-icon" />
                    <select className="main_custom-dropdown">
                      <option>Toyota</option>
                    </select>
                  </div>
                </div>
                <div className="main_form-group">
                  <div className="main_input-icon-wrapper">
                    <FontAwesomeIcon icon={faCalendarAlt} className="main_input-icon" />
                    <select className="main_custom-dropdown">
                      <option>2009</option>
                    </select>
                  </div>
                </div>
                <div className="main_form-group">
                  <div className="main_input-icon-wrapper">
                    <FontAwesomeIcon icon={faUser} className="main_input-icon" />
                    <input type="text" placeholder="Enter Your Name" />
                  </div>
                </div>
                <div className="main_form-group">
                  <div className="main_input-icon-wrapper">
                    <FontAwesomeIcon icon={faPhone} className="main_input-icon" />
                    <input type="text" placeholder="Enter Phone Number" />
                  </div>
                </div>
              </Col>
              <div className="main_form-group main_checkbox">
                <input type="checkbox" />
                <label>
                  By checking this box, you agree to receive recurring messages from Used Engines Inc...
                </label>
              </div>
              <button type="submit" className="main_submit-btn">
                Submit
              </button>
            </Row>
          </Col>
          <Col md={6} sm={12} className="main_form_column_right">
            <div>
              {/* <img src={engine} alt="engine" className="img-fluid main" /> */}
            </div>
            <div className="main_image_text">
              <h1>Used Transmissions</h1>
              <h1>for Sale with a Warranty</h1>
              <h2>Low Cost & Free Shipping 1800-518-9776</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main_QuoteForm;
