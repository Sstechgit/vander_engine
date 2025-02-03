import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Footer() {


var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/672e984c4304e3196adf7e51/1ic705qrg';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();


  // useEffect(() => {
  //   const s1 = document.createElement('script');
  //   s1.async = true;
  //   s1.src = 'https://embed.tawk.to/644bc9704247f20fefee4dfe/1gv40locm';
  //   s1.charset = 'UTF-8';
  //   s1.setAttribute('crossorigin', '*');
  //   document.body.appendChild(s1);

  //   // Cleanup function to remove the script if the component is unmounted
  //   return () => {
  //     document.body.removeChild(s1);
  //   };
  // }, []);
  return (
    <>
      <footer className=" text-lg-start full-footer">
        <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span className="fw-bold">
              Get connected with us on social networks:
            </span>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end social-link">
            <Link
              to="https://www.facebook.com/people/SS-TECH-Services/61561744207853/"
              className="me-3 text-reset"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </Link>
            <Link to="https://twitter.com" className="me-3 text-reset">
              <i class="fa-brands fa-twitter"></i>
            </Link>
            <Link to="https://youtube.com" className="me-3 text-reset">
              <i class="fa-brands fa-youtube"></i>
            </Link>
            <Link to="https://g.co/kgs/a8rqPoj" className="me-3 text-reset">
              <i class="fa-brands fa-google"></i>
            </Link>
            <Link
              to="https://www.instagram.com/sstech_service/"
              className="me-3 text-reset"
            >
              <i class="fa-brands fa-instagram"></i>
            </Link>
            <Link
              to="https://www.linkedin.com/company/104136889/admin/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BytFSASSwRwK1igydrXUAOA%3D%3D"
              className="me-3 text-reset"
            >
              <i class="fa-brands fa-linkedin"></i>
            </Link>
          </div>
        </section>

        <section className="footer pt-1">
          <div className="container  text-md-start">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <span>&#128924;</span>
                  SSTECHSERVICES
                </h6>
                <p>
                  SS Tech Services is a leading Digital Marketing Services
                  provider. We provide SEO, SMO, Google Ads, Meta Ads, and Web
                  Development services.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 footer-link">
                  Section
                </h6>
                <p>
                  <Link to="/" className="text-reset">
                    Home
                  </Link>
                </p>
                <p>
                  <Link to="/about" className="text-reset">
                    About Us
                  </Link>
                </p>
                <p>
                  <Link to="/contact" className="text-reset">
                    Contact Us
                  </Link>
                </p>
                <p>
                  <Link to="/blog" className="text-reset">
                    Blog
                  </Link>
                </p>
                <p>
                  <Link to="/career" className="text-reset">
                    Career
                  </Link>
                </p>
                <p>
                  <Link to="/portfolio" className="text-reset">
                    Portfolio
                  </Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 footer-link">
                  Our Services
                </h6>
                <p>
                  <Link
                    to="/social-media-marketing-agency-chicago"
                    className="text-reset"
                  >
                    SMO
                  </Link>
                </p>
                <p>
                  <Link
                    to="/web-development-agency-chicago"
                    className="text-reset"
                  >
                    Web Development
                  </Link>
                </p>
                <p>
                  <Link
                    to="/content-writing-agency-chicago"
                    className="text-reset"
                  >
                    Content Writing
                  </Link>
                </p>
                <p>
                  <Link to="/ppc-company-chicago" className="text-reset">
                    Pay Per Click
                  </Link>
                </p>
                <p>
                  <Link to="/graphic" className="text-reset">
                    Graphic Design
                  </Link>
                </p>
                <p>
                  <Link to="/bpo" className="text-reset">
                    BPO Solutions
                  </Link>
                </p>
                <p>
                  <Link to="/seo-agency-chicago" className="text-reset">
                    SEO
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-4 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p class="social-link">
                  <i class="fa-solid fa-location-pin me-1"></i>
                  15150 Cicero Avenue, Oak Forest, IL 60452
                  <br />
                  <i class="fa-solid fa-location-pin me-1"></i>
                  Office No. 2510, Building The Iconic Corenthum, Block A,
                  Industrial Area, Sector 62, Noida, Uttar Pradesh 201301
                </p>
                <p className="social-link">
                  <i class="fa-solid fa-envelope me-1"></i>
                  info@sstechservices.net
                </p>
                <p className="social-link">
                  <i class="fa-solid fa-phone me-1"></i>+16302425508, +91 8810374145
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <Link
            className="text-reset fw-bold"
            to="https://mdbootstrap.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Copyright © 2024 | Powered by{" "}
            <span style={{ color: "#3b6cb4" }}>[SS Tech Services]</span>
          </Link>
        </div>
      </footer>
    </>
  );
}
