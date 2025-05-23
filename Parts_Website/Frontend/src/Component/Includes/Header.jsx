import React, { useEffect, useState } from 'react';
import './Includes.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [navbarBackground, setNavbarBackground] = useState('transparent');
  const [fontSize, setFontSize] = useState('12px');
  const [checkIfTop, setCheckIfTop] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false); // State for controlling navbar collapse

  // Handle scroll to update navbar styles
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop === 0 && window.innerWidth > 600) {
        setNavbarBackground('transparent');
        setFontSize('12px');
        setCheckIfTop(true);
      } else if (scrollTop !== 0 && window.innerWidth > 600) {
        if (checkIfTop) {
          setCheckIfTop(false);
          setNavbarBackground('#242B35');
          setFontSize('15px');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on page load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [checkIfTop]);

  // Function to close the navbar after clicking a link
  const handleNavLinkClick = () => {
    if (window.innerWidth <= 991) { // Only collapse on small screens
      setIsNavOpen(false); // Close the navbar
    }
  };
  // State to control the navbar collapse
  // const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to handle the navbar toggle
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Function to close the navbar when a NavLink is clicked (for mobile view)
  const closeNavbar = () => {
    if (window.innerWidth < 992) {
      // If the screen size is mobile or smaller
      setIsNavOpen(false); // Close the navbar
    }
  };

  return (
    <div id="main">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark" style={{ paddingBottom: "0" }}>
        <div className="container-fluid align-items-end">
          <div className="navbar-brand text-white fw-bold fs-2 p-0" >
            <img src="assets/logo1.png" alt="" width={220} />
          </div>
          <div className="navbar-header ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#myNavbar"
              aria-controls="myNavbar"
              aria-expanded={isNavOpen ? 'true' : 'false'} // Dynamically control the aria-expanded attribute
              aria-label="Toggle navigation"
              style={{ background: "#fff" }}
              onClick={() => setIsNavOpen(!isNavOpen)} // Toggle navbar open/close
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className={`collapse navbar-collapse text-center mt-3 ${isNavOpen ? 'show' : ''}`} id="myNavbar">
            <ul className="navbar-nav mx-auto gap-1">
              <li className="nav-item">
                <Link to="/" smooth duration={900} className="nav-link" onClick={handleNavLinkClick}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/searchcarparts" smooth duration={900} className="nav-link" onClick={handleNavLinkClick}>
                  Search Car Parts
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/engine" smooth duration={900} className="nav-link" onClick={handleNavLinkClick}>
                 Engine
                </Link>
              </li>  */}
              {/* <li className="nav-item">
                <Link to="/transmission" smooth duration={900} className="nav-link" onClick={handleNavLinkClick}>
                  Transmission
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link to="/onlinecatalog" smooth duration={900} className="nav-link" onClick={handleNavLinkClick}>
                  Online Catalog
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link to="/brand" smooth duration={900} className="nav-link" onClick={handleNavLinkClick}>
                  Brands
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link to="/shopbymake" smooth duration={900} className="nav-link" onClick={handleNavLinkClick}>
                  Shop By Make
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link to="/customer_service" smooth duration={900} className="nav-link" onClick={handleNavLinkClick}>
                  Customer Service
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link to="/retrive_quote" smooth duration={900} className="nav-link" onClick={handleNavLinkClick}>
                  Retrieve Quote
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link to="/view_cart" smooth duration={900} className="nav-link" onClick={handleNavLinkClick}>
                  View Cart
                </Link>
              </li> */}

              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle w-100"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Policy
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/shipping"
                      activeClassName="active"
                      onClick={closeNavbar}
                    >

                      Shipping Policy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/return"
                      activeClassName="active"
                      onClick={closeNavbar}
                    >
                      Return and Cancellation Policy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/warranty"
                      activeClassName="active"
                      onClick={closeNavbar}
                    >
                      Warranty Policy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/termsofservice"
                      activeClassName="active"
                      onClick={closeNavbar}
                    >
                      Terms of Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/privacy"
                      activeClassName="active"
                      onClick={closeNavbar}
                    >
                      Privacy Policy
                    </NavLink>
                  </li>
                </ul>
              </li>
              {/* 
              <li className="nav-item">
                <Link to="/track_order" smooth duration={900} className="nav-link" onClick={handleNavLinkClick}>
                  Track Order
                </Link>
              </li>
              */}
              <li className="nav-item">
                <Link to="https://vanderengines.com/" smooth duration={900} className="nav-link" onClick={handleNavLinkClick}>
                 Shop Now
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center p-2 border rounded text-white" style={{background:"#ec2324"}}>
                <i class="fa-solid fa-phone-volume me-2"></i>
                <div>
                  Call Us{" "}
                  <Link to="tel:+18448931760" className="text-white fw-bold fs-5">
                    <span> +1-800-213-1371</span>
                  </Link>
                </div>
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
