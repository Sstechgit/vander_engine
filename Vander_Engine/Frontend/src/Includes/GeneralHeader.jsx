import React from "react";
import { Link } from "react-router-dom";

export default function GeneralHeader() {
  return (
    <>
      <div className="general-header">
        <div className="container">
          <div className="row justify-content-between  ">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6">
                  <div className="email-sectiond-flex ">
                    <a
                      href="mailto:billing@vanderengines.com"
                      target="_self"
                      aria-label="email us now"
                      className="text-decoration-none text-white"
                    >
                      <i class="fa-solid fa-envelope me-2"></i>
                      <span>billing@vanderengines.com</span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="time-section">
                    <i class="fa-solid fa-business-time me-2"></i>
                    <span>24*7 Live Inventory Available</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 second-gen">
              <div className="row">
                <div className="col-lg-12">
                  <div className="social-icon float-end">
                    <a href="https://www.facebook.com/vanderengines/">
                      <i class="fa-brands fa-facebook-f me-2"></i>
                    </a>
                    <a href="https://www.instagram.com/vanderengines/">
                      <i class="fa-brands fa-instagram me-2"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/vanderengines/">
                      <i class="fa-brands fa-linkedin-in me-2"></i>
                    </a>
                    <a href="https://www.youtube.com/c/VanderEngines">
                      <i class="fa-brands fa-youtube me-2"></i>
                    </a>
                  </div>
                </div>
                {/* <div className="col-lg-6">
                  <div className="sign-log-section float-end">
                    <span>
                      <Link to="/signup" className="me-3">
                        Sign Up
                      </Link>
                      <span className="me-3">|</span>
                      <Link to="/login">Log In</Link>
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
