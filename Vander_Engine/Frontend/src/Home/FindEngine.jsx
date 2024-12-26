import React from "react";
import { Link } from "react-router-dom";

export default function FindEngine() {
  $(document).ready(function () {
    $("#findengine").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 1000, // time in ms
      autoplayHoverPause: true,
      items: 1, // number of items to display
      dots: false, // disable dots
      nav: false, // disable navigation
      animateOut: "fadeOut", // smooth transition effect
      animateIn: "fadeIn", // smooth transition effect
    });
  });
  return (
    <>
      <div className="find-engine">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="find-engine__content">
              Vander Engines Transmissions provides you the high quality used &
                       remanufactured Engines. Vander Engines Transmissions is one of the 
                       most trusted supplier of the used engines in the United States and
                       around the world. We have wide range of second hand engines at our
                        yards, you can find second hand motors for every make and model. 
                        Our engines are highly tested and inspected before we deliver it to you.
                         Vander engines transmissions provide you used engines at an affordable 
                         price. We also offer you upto 5 years warranty on our used engines. 
                         Our range includes remanufactured engines for brands like BMW, Ford, 
                         GMC, Nissan, Acura, Audi, Dodge, Hyundai, Honda, Kia, Jeep, Bentley, 
                         and many more.
              </div>
              <Link to="/engine">
                <button className="btn theme-btn my-3">
                  Discover More &#8594;
                </button>
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="find-engine__img owl-carousel" id="findengine">
                <img src="/assets/find-engine-1.jpg" alt="" />
                <img src="/assets/find-engine-2.jpg" alt="" />
                <img src="/assets/find-engine-3.jpg" alt="" />
                <img src="/assets/find-engine-4.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
