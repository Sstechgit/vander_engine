import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./newheader.css";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [pageTitle, setPageTitle] = useState(""); // State to hold the active page title
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const toggleDropdown = () => setDropdown(!dropdown);

  // Update page title based on the active route
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setPageTitle("Home");
        break;
      case "/engines":
        setPageTitle("Engines");
        break;
      case "/transmission":
        setPageTitle("Transmissions");
        break;
      case "/about":
        setPageTitle("About");
        break;
      case "/Contact":
        setPageTitle("Contact Us");
        break;
      case "/Financing":
        setPageTitle("Financing");
        break;
      case "/shipping_policy":
        setPageTitle("Shipping Policy");
        break;
      case "/Return_And_Cancellation_Policy":
        setPageTitle("Return And Cancellation");
        break;
      case "/warrenty_poilicy":
        setPageTitle("Warranty Policy");
        break;
      case "/Term_Of_Services":
        setPageTitle("Terms of Service");
        break;
      case "/PrivacyPolicy":
        setPageTitle("Privacy Policy");
        break;
      default:
        setPageTitle("");
    }
  }, [location.pathname]);
  

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="venderingen.png" alt="Brand Logo" width="120" className='venderingen_logo'/>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/engines"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Engines
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/transmission"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Transmissions
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Financing"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Financing
                </NavLink>
              </li>
              <li className="nav-item dropdown">
              <NavLink
                to="#"
                className="nav-links"
                onClick={toggleDropdown}
              >
                Our Policy {dropdown ? <FaChevronUp /> : <FaChevronDown />}
              </NavLink>
              {dropdown && (
                <div className="dropdown-content">
                  <Link to="/shipping_policy" onClick={closeMobileMenu}>Shipping Policy</Link>
                  <Link to="/Return_And_Cancellation_Policy" onClick={closeMobileMenu}>Return And Cancellation</Link>
                  <Link to="/warrenty_poilicy" onClick={closeMobileMenu}>Warranty Policy</Link>
                  <Link to="/Term_Of_Services" onClick={closeMobileMenu}>Term Of Services</Link>
                  <Link to="/PrivacyPolicy" onClick={closeMobileMenu}>Privacy Policy</Link>
                  
                </div>
              )}
            </li>
              
              
              <li>
              
          <a href="tel:+1844-893-1760" className="btn btn-primary call-button">
            <FontAwesomeIcon icon={faPhone} /> Click to Call
          </a>
          </li>
          {/* <li>
          <a href="https://wa.me/1234567890" className="btn btn-success whatsapp-button">
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </a>
        
              </li> */}
            </ul>

          </div>
          
        </nav>
        
      </IconContext.Provider>
        {/* Display active page title */}
        {pageTitle && (
            <div className="active-page-title">
              {pageTitle}
            </div>
          )}
    </>
  );
}

export default Navbar;
