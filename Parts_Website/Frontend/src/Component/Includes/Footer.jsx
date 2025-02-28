import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import { useEffect } from "react";
export default function Footer() {
  var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
  (function () {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/672e984c4304e3196adf7e51/1ic705qrg";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  })();

  return (
    <>
      {/* <ScrollText /> */}
      {/* <a
        href="tel:+18448931760"
        className="float"
        target="_self"
        aria-label="call us now"
      >
        <i className="fa-sharp fa-solid fa-phone my-float mx-2 fs-5"></i>
        Call For Price
      </a> */}
      <footer className="text-center text-lg-start text-white bg-dark">
        <section
          className="d-flex justify-content-center justify-content-lg-between p-4 first-section"
          style={{ borderTop: "2px solid #000" }}
        >
          <div className="me-5 d-none d-lg-block fw-bold">
            <span>Get connected with us on social networks:</span>
          </div>

          <div id="icon-section" className="d-flex">
            <a
              href="https://www.facebook.com/vanderengines/"
              className="me-3 text-reset"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://x.com/i/flow/login?redirect_after_login=%2FVanderengines"
              className="me-3 text-reset"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.vanderengines.com/"
              className="me-3 text-reset"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              href="https://www.instagram.com/vanderengines/"
              className="me-3 text-reset"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/vanderengines/"
              className="me-3 text-reset"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/" className="me-3 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="footer text-white pt-3">
          <div className="container text-center text-md-start">
            <div className="row">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  {/* <img src="/assets/logo.png" alt="" /> */}
                </h6>
                <p>
                  We are offering free quote from suppliers across US on Quality
                  Used and Rebuilt Engines that are tested thoroughly before
                  delivered.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
                <p>
                  <Link to="/" className="text-reset">
                    Home
                  </Link>
                </p>
                <p>
                  <Link to="/searchcarparts" className="text-reset">
                    Search Car Parts
                  </Link>
                </p>  <p>
                  <Link to="/brand" className="text-reset">
                    Brands
                  </Link>
                </p>

                {/* <p>
                  <Link to="/engine" className="text-reset">
                    Engine
                  </Link>
                </p>
                <p>
                  <Link to="/transmission" className="text-reset">
                    Transmission
                  </Link>
                </p>
                <p>
                  <Link to="/onlinecatalog" className="text-reset">
                    Online Catalog
                  </Link>
                </p>
                <p>
                  <Link to="/brand" className="text-reset">
                    Brands
                  </Link>
                </p>

                <p>
                  <Link to="/shopbymake" className="text-reset">
                    Shop By Make
                  </Link>
                </p> */}


              </div>

              <div className="col-md-3 col-lg-2 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>

                <p>
                  <Link to="/shipping" className="text-reset">
                    Shipping Policy
                  </Link>
                </p> <p>
                  <Link to="/return" className="text-reset">
                    Return and Cancellation Policy
                  </Link>
                </p> <p>
                  <Link to="/warranty" className="text-reset">
                    Warranty Policy
                  </Link>
                </p> <p>
                  <Link to="/termsofservice" className="text-reset">
                    Terms of Services
                  </Link>
                </p> <p>
                  <Link to="/privacy" className="text-reset">
                    Privacy Policy
                  </Link>
                </p>
                {/*
                <p>
                  <Link to="/track_order" className="text-reset">
                    Track Order
                  </Link>
                </p>
                <p>
                  <Link to="/view_cart" className="text-reset">
                    View Cart
                  </Link>
                </p> */}
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                {/* <p>
                  <i className="fas fa-home me-2"></i>
                  15150 Cicero Avenue, Oak Forest, Il 60452
                </p> */}
                <p>
                  <i className="fas fa-envelope me-3"></i>{" "}
                  {/* billing@vanderengines.com */}
                  info@autoparts-leads.us
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +1-800-213-1371
                </p>
                <p>
                  <img
                    src="/assets/cardList.webp"
                    alt=""
                    width={350}
                    className="img-fluid"
                  />
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4 fw-bold text-white">
          © 2024 Copyright:
          <a className="text-danger fw-bold" href="https://mdbootstrap.com/">
            {" "}
            Part Vendors
          </a>
        </div>
      </footer>
    </>
  );
}
