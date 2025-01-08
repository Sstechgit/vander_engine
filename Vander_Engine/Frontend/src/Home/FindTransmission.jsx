import React from "react";
import { Link } from "react-router-dom";
export default function FindTransmission() {
  $(document).ready(function () {
    $("#findtransmission").owlCarousel({
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
      <div className="find-transmission mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="find-transmission__content">
              Vander Engines Transmissions provides you the high quality used & 
                  remanufactured Transmissions. Vander Engines Transmissions is one of
                   the most trusted supplier of the used transmissions in the United States
                    and around the world. We have wide range of second hand transmissions at 
                    our yards, you can find second hand motors for every make and model.
                     Our transmissions are highly tested and inspected before we deliver it 
                     to you. Vander engines transmissions provide you used transmissions at 
                     an affordable price. We also offer you upto 5 years warranty on 
                     our used transmissions. Our range includes remanufactured transmissions for 
                     brands like BMW, Ford, GMC, Nissan, Acura, Audi, Dodge, Hyundai,
                      Honda, Kia, Jeep, Bentley, and many more.
              </div>
              <Link to="/transmission">
                <button className="btn theme-btn my-3">
                  Discover More &#8594;
                </button>
              </Link>
            </div>
            <div className="col-lg-6">
              <div
                className="find-transmission__img owl-carousel"
                id="findtransmission"
              >
                <img src="/assets/find-transmission-1.png" alt="" />
                <img src="/assets/find-transmission-2.jpg" alt="" />
                <img src="/assets/find-transmission-3.jpg" alt="" />
                <img src="/assets/find-transmission-4.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
