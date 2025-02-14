import React from "react";
import { Link } from "react-router-dom";

export default function Child_Parts() {
  const data = [
    {
      imgSrc: "/assets/product/chevrolet1.jpeg",
      head: "Chevrolet Silverado 1500 Brake Pads",
      price: "$265.95",
    },
    {
      imgSrc: "/assets/product/chevrolet1.jpeg",
      head: "Chevrolet Silverado 1500 Brake Pads",
      price: "$265.95",
    },
    {
      imgSrc: "/assets/product/chevrolet1.jpeg",
      head: "Chevrolet Silverado 1500 Brake Pads",
      price: "$265.95",
    },
    {
      imgSrc: "/assets/product/chevrolet1.jpeg",
      head: "Chevrolet Silverado 1500 Brake Pads",
      price: "$265.95",
    },
    {
      imgSrc: "/assets/product/chevrolet1.jpeg",
      head: "Chevrolet Silverado 1500 Brake Pads",
      price: "$265.95",
    },
    {
      imgSrc: "/assets/product/chevrolet1.jpeg",
      head: "Chevrolet Silverado 1500 Brake Pads",
      price: "$265.95",
    },
    {
      imgSrc: "/assets/product/chevrolet1.jpeg",
      head: "Chevrolet Silverado 1500 Brake Pads",
      price: "$265.95",
    },
    {
      imgSrc: "/assets/product/chevrolet1.jpeg",
      head: "Chevrolet Silverado 1500 Brake Pads",
      price: "$265.95",
    },
  ];
  return (
    <>
      <div className="popular-products my-5">
        <div className="container">
          <div className="d-flex align-items-center mb-3">
            <i className="fa-solid fa-gear fs-2 me-2 main"></i>
            <h3 className="fs-3 fw-bold">
              Related Body Mechanical & Trim Parts :
            </h3>
          </div>
          <div className="row">
            {data.map((item, index) => {
              return (
                <div className="col-lg-3 mb-4" key={index}>
                  <div
                    className="card align-items-center h-100"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out-cubic"
                  >
                    <img
                      src={item.imgSrc}
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                    />
                    <h6 className="pt-1 text-center">
                      <Link to="/sellerParts" className="model-text">
                        {item.head}
                      </Link>
                    </h6>
                    <p className="parts-text text-center">{item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
