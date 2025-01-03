// Footer.js
import React, { useState, useEffect } from "react";
import './newfooter.css';
import logo from "./images/venderingen.png"
import cards_img from "./images/cardList.webp"
import best from "./images/best.png"
import { Link, NavLink, useLocation } from "react-router-dom";
function Footer() {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [pageTitle, setPageTitle] = useState(""); // State to hold the active page title
    const location = useLocation();
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    useEffect(() => {
      // Tawk.to Script Integration
      var Tawk_API = Tawk_API || {};
      var Tawk_LoadStart = new Date();
      (function () {
        const s1 = document.createElement("script");
        const s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/672e984c4304e3196adf7e51/1ic705qrg';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
      })();
    }, []);    
    
  return (
    
    <footer className="footer">

      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-logo">
          <img src={logo} alt="Vander Engines Logo" />
          <p>
            We are offering free quotes from suppliers across the US on Quality
            Used and Rebuilt Engines that are tested thoroughly before delivered.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
            <Link to="/" onClick={closeMobileMenu}>Home</Link>
                </li>
            <li>
            <Link to="/about" onClick={closeMobileMenu}>About</Link>
                </li>
            <li>
            <Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link>
            </li>
            <li>Search Car Parts</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><Link to="/Return_And_Cancellation_Policy" onClick={closeMobileMenu}>Return And Cancellation</Link></li>
            <li><Link to="/warrenty_poilicy" onClick={closeMobileMenu}>Warranty Policy</Link></li>
            <li><Link to="/Term_Of_Services" onClick={closeMobileMenu}>Term Of Services</Link></li>
            <li><Link to="/PrivacyPolicy" onClick={closeMobileMenu}>Privacy Policy</Link></li>
            <li><Link to="/shipping_policy" onClick={closeMobileMenu}>Shipping Policy</Link></li>
          </ul>
        </div>

        

        {/* Contact Information */}
        <div className="footer-contact">
        <h4>Contact Us</h4>
          <p><i className="fas fa-phone-alt"></i> +1844-893-1760</p>
          <p><i className="fas fa-envelope"></i> billing@vanderengines.com</p>
          <p><i className="fas fa-map-marker-alt"></i> 15150 Cicero Avenue, Oak Forest, IL 60452</p>
          <div className="footer-payment">
            <img src={cards_img} alt="PayPal" />
          </div>
        </div>

        <div className="footer-logo">
          <img src={best} alt="Vander Engines Logo" />
        </div>


      </div>
      

      {/* Copyright and Social Icons */}
      <div className="footer-bottom">
        <p>&copy; Copyright 2024 Vander Engines. All Rights Reserved.</p>
        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="wave-background">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="100%"
          viewBox="0 0 1600 900"
        >
          <defs>
            <linearGradient id="bg" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#790cac' }} />
              <stop offset="100%" style={{ stopColor: 'rgba(121, 12, 172, 0.06)' }} />
            </linearGradient>
            <path
              id="wave"
              fill="url(#bg)"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
              s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
          </defs>
          <g>
            <use xlinkHref="#wave" opacity=".3">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="8s"
                calcMode="spline"
                values="270 230; -334 180; 270 230"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".6">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="6s"
                calcMode="spline"
                values="-270 230;243 220;-270 230"
                keyTimes="0; .6; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".9">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="4s"
                calcMode="spline"
                values="0 230;-140 200;0 230"
                keyTimes="0; .4; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
          </g>
        </svg>
      </div>
    </footer>
  );
}

export default Footer;
