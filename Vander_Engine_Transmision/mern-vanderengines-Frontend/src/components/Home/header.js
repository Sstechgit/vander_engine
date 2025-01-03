import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './header.css';

function Header() {
  return (
    <Navbar bg="dark" expand="lg" className="header-navbar nav">
      <Container>
        <Navbar.Brand href="#home">
          <img src="venderingen.png" alt="Brand Logo" width="120" className='venderingen_logo'/>
        </Navbar.Brand>
        <div className="ml-auto header-contact">
          <a href="tel:+1234567890" className="btn btn-primary call-button">
            <FontAwesomeIcon icon={faPhone} /> Click to Call
          </a>
          <a href="https://wa.me/1234567890" className="btn btn-success whatsapp-button">
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;