// https://soluticwp.websitelayout.net/
import React from "react";

const Header = () => {
  $(document).ready(function () {
    $("#main-slide").owlCarousel({
      items: 1,
      navigation: true,
      slideSpeed: 3000,
      paginationSpeed: 4000,
      mouseDrag: true,
      singleItem: true,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      responsiveClass: true,
      loop: true, // Infinite loop enabled
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
    });
  });
  return (
    
    <header className="port-head">
      <div id="main-slide" className="owl-carousel owl-theme">
        <div className="item">
          <div
            className="slide-img"
            style={{
              backgroundImage:
                "url(/asset/port-slide-01.jpg)",
            }}
          >
            <div className="container h-100">
              <div className="row h-100 d-flex align-items-center justify-content-center">
                <div className="col-lg-5"></div>
                <div className="col-lg-7 d-flex flex-column justify-content-center fs-1 fw-bold animate__animated animate__bounceInUp  ">
                  <h1 className="hero-text fw-bold" >SS Tech Services</h1>
                  <p >Elevating Your Digital Presence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div
            className="slide-img"
            style={{
              backgroundImage:
                "url(/asset/port-slide-02.jpg)",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-5"></div>
                <div className="col-lg-7 d-flex flex-column justify-content-center fs-1 fw-bold animate__animated animate__bounceInUp">
                  <h1>SS Tech Services</h1>
                  <p>Elevating Your Digital Presence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div
            className="slide-img"
            style={{
              backgroundImage:
                "url('/asset/port-slide-03.jpg')",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-5"></div>
                <div className="col-lg-7 d-flex flex-column justify-content-center fs-1 fw-bold animate__animated animate__bounceInUp">
                  <h1>SS Tech Services</h1>
                  <p>Elevating Your Digital Presence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
