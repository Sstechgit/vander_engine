import React from "react";
import "./search.css";

export default function Shipping() {
  const shipping = [
    { imgSrc: "/assets/shipping-1.webp", head: "40,000+ Satisfied Customers" },
    { imgSrc: "/assets/shipping-2.webp", head: "Over 40 Million Used OEM Parts" },
    { imgSrc: "/assets/shipping-3.webp", head: "2000+ Inventory Yards" },
  ];
  return (
    <>
      <div className="shipping mb-5 text-white">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <p className="mb-0">40k Engines Sale</p>
            </div>
            <div className="col-lg-9 bg-black">
              <div className="row">
                {shipping.map((item, index) => (
                  <div
                    className="col-lg-4 text-center shipping-col"
                    key={index}
                    style={{ borderLeft: "1px solid #fff" }}>
                    <img src={item.imgSrc} alt="" width={50} />
                    <h6>{item.head}</h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
