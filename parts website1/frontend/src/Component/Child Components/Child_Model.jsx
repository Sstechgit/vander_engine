import React from "react";
import { Link } from "react-router-dom";

export default function Child_Model() {
  const data = [
    {
      imgSrc: "/assets/product/honda4.jpeg",
      head: "Honda Civic Struts",
      price: "$106.97",
    },
    {
      imgSrc: "/assets/product/honda4.jpeg",
      head: "Honda Civic Struts",
      price: "$106.97",
    },
    {
      imgSrc: "/assets/product/honda4.jpeg",
      head: "Honda Civic Struts",
      price: "$106.97",
    },
    {
      imgSrc: "/assets/product/honda4.jpeg",
      head: "Honda Civic Struts",
      price: "$106.97",
    },
    {
      imgSrc: "/assets/product/honda4.jpeg",
      head: "Honda Civic Struts",
      price: "$106.97",
    },
    {
      imgSrc: "/assets/product/honda4.jpeg",
      head: "Honda Civic Struts",
      price: "$106.97",
    },
    {
      imgSrc: "/assets/product/honda4.jpeg",
      head: "Honda Civic Struts",
      price: "$106.97",
    },
    {
      imgSrc: "/assets/product/honda4.jpeg",
      head: "Honda Civic Struts",
      price: "$106.97",
    },
  ];
  return (
    <>
      <div className="popular-products">
        <div className="container">
          <div className="d-flex align-items-center mb-3">
            <i className="fa-solid fa-gear fs-2 me-2 main"></i>
            <h3 className="fs-3 fw-bold">Shop Popular Models :</h3>
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
                    <span className="">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className="fa-solid fa-star text-warning"
                        ></i>
                      ))}
                    </span>
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
