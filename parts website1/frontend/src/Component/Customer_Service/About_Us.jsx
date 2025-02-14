import React from "react";

export default function About_Us() {
  return (
    <>
      <div className="about_us mb-5">
        <div className="container">
          <div className="d-flex mb-3">
            <i className="fa-solid fa-gear fs-2 me-2 main"></i>
            <h3 className="fs-3 fw-bold">Discover Vander Engines :</h3>
          </div>
          <div className="row align-items-center justify-content-evenly">
            <div className="col-lg-6">
              Vander Engines has been a trusted online marketplace for
              automotive parts, accessories, and supplies since 2008. Our
              corporate office is located in Doylestown, PA 18902. Please note:
              We do not offer walk-in service at this location, and returns are
              not accepted here. We are committed to providing excellent
              customer service and ensuring a smooth shopping experience for all
              our customers.
            </div>
            <div className="col-lg-2">
              Parts Geek, LLC Doylestown, PA 18902 Mon-Fri: 8am-10pm EST
              Sat-Sun: 8am-8pm EST
            </div>
            <div className="col-lg-2" style={{display:"contents"}}>
              <img
                src="https://st4.depositphotos.com/2518853/29572/v/450/depositphotos_295726372-stock-illustration-vector-wheel-with-car-spares.jpg"
                alt=""
                className="img-fluid float-lg-end"
                width={200}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
