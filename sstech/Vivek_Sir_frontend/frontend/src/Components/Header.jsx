import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(true);

  const handleLinkClick = () => {
    // Collapse the navbar on mobile after clicking a link
    setNavbarCollapsed(true); // Set the navbar to be collapsed
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-header">
        <div className="container-fluid d-flex header-content">
          <Link className="navbar-brand" to="/">
            <img src="/asset/logo.png" alt="" width={250} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setNavbarCollapsed(!isNavbarCollapsed)} // Toggle the collapse state
            aria-controls="navbarSupportedContent"
            aria-expanded={!isNavbarCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${isNavbarCollapsed ? '' : 'show'}`} // Add 'show' class if the navbar is expanded
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 gap-3">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/social-media-marketing-agency-chicago"
                      onClick={handleLinkClick}
                    >
                      SMO Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/web-development-agency-chicago"
                      onClick={handleLinkClick}
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/content-writing-agency-chicago"
                      onClick={handleLinkClick}
                    >
                      Content Writing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/ppc-company-chicago"
                      onClick={handleLinkClick}
                    >
                      PPC Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/graphic-design-services-chicago"
                      onClick={handleLinkClick}
                    >
                      Graphic Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/bpo-services-chicago"
                      onClick={handleLinkClick}
                    >
                      BPO Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/seo-agency-chicago"
                      onClick={handleLinkClick}
                    >
                      SEO Services
                    </Link>
                  </li>
                </ul>
              </li> */}

              <li className="nav-item">
                <a className="nav-link" href="/blog" onClick={handleLinkClick}>
                  Blog
                </a>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/career"
                  onClick={handleLinkClick}
                >
                  Career
                </Link>
              </li> */}

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/courses"
                  onClick={handleLinkClick}
                >
                  Courses
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/PricingBox"
                  onClick={handleLinkClick}
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/portfolio"
                  onClick={handleLinkClick}
                >
                  Portfolio
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  onClick={handleLinkClick}
                >
                 About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                  onClick={handleLinkClick}
                >
                  Contact Us
                </Link>
              </li>
              
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/Privacy"
                  onClick={handleLinkClick}
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
