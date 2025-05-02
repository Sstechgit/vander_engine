import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Header() {
  // State to control the navbar collapse
  const [isNavOpen, setIsNavOpen] = useState(false);

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
    <>
      <Helmet>
        {/* Google Tag Manager */}
        <script>
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NRT4R6J');
        `}
        </script>
        {/* End Google Tag Manager */}
      </Helmet>
      <header className="header d-flex justify-content-center">
        <nav className="navbar navbar-expand-xl navbar-light bg-light ">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/" onClick={closeNavbar}>
              <img src="/assets/logo.png" alt="Logo" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={isNavOpen ? "true" : "false"}
              aria-label="Toggle navigation"
              onClick={toggleNavbar} // Toggle navbar on click
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
              id="navbarNav"
            >
              <ul className="navbar-nav  m-auto">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="nav-link"
                    activeClassName="active"
                    exact
                    onClick={closeNavbar} // Close navbar when clicked
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/engine"
                    className="nav-link"
                    activeClassName="active"
                    onClick={closeNavbar}
                  >
                    Engines
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/transmission"
                    className="nav-link"
                    activeClassName="active"
                    onClick={closeNavbar}
                  >
                    Transmissions
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/search-car-parts"
                    className="nav-link"
                    activeClassName="active"
                    onClick={closeNavbar}
                  >
                    Search Car Parts
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className="nav-link"
                    activeClassName="active"
                    onClick={closeNavbar}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a
                    href="https://vanderengines.com/blog/"
                    className="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeNavbar}
                  >
                    Blogs
                  </a>
                </li>
             
              <li className="nav-item">
                <NavLink
                  to="/financing"
                  className="nav-link"
                  activeClassName="active"
                  onClick={closeNavbar}
                >
                  Financing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link"
                  activeClassName="active"
                  onClick={closeNavbar}
                >
                  Contact
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Policy
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {/* <li>
                    <NavLink
                      className="dropdown-item"
                      to="/shipping"
                      activeClassName="active"
                      onClick={closeNavbar}
                    >
                      Shipping Policy
                    </NavLink>
                  </li> */}
                  <li className="nav-item">
                    <NavLink
                      to="/Privacy_Policies"
                      className="nav-link"
                      activeClassName="active"
                      onClick={closeNavbar}
                    >
                      Our Policies
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
                  {/* <li>
                    <NavLink
                      className="dropdown-item"
                      to="/warranty"
                      activeClassName="active"
                      onClick={closeNavbar}
                    >
                      Warranty Policy
                    </NavLink>
                  </li> */}
                  {/* <li>
                    <NavLink
                      className="dropdown-item"
                      to="/termsofservice"
                      activeClassName="active"
                      onClick={closeNavbar}
                    >
                      Terms of Services
                    </NavLink>
                  </li> */}
                  {/* <li>
                    <NavLink
                      className="dropdown-item"
                      to="/privacy"
                      activeClassName="active"
                      onClick={closeNavbar}
                    >
                      Privacy Policy
                    </NavLink>
                  </li> */}
                </ul>
              </li>
              <div className="contact align-items-center">
                <a
                  href="tel:+18448931760"
                  target="_self"
                  aria-label="call us now"
                >
                  <i
                    className="fa-solid fa-phone mx-3 "
                    id="phone"
                    style={{ background: "#1eb7c6", color: "#fff" }}
                  ></i>
                </a>
                <div className="contact-info">
                  <span>FREE CONSULTATION!</span>
                  <NavLink
                    to="/search"
                    className="nav-link p-0 number"
                    onClick={closeNavbar}
                  >
                    +18448931760
                  </NavLink>
                </div>
              </div>
              <li className="nav-item">
                <NavLink
                  to="/addtocart"
                  className="nav-link ms-3"
                  onClick={closeNavbar}
                >
                  <i className="fa-solid fa-cart-shopping" id="cart"></i>
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  to="/wishlist"
                  className="nav-link ms-3"
                  onClick={closeNavbar}
                >
                  <i className="fa-regular fa-heart" id="cart"></i>
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header >
    </>
  );
}
