import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductPage({ productItems, handleAddToCart }) {
  const navigate = useNavigate();
  // Function to handle adding item to cart (now passed as prop)
  const onAddToCart = (item) => {
    handleAddToCart(item); // Use handleAddToCart from props to add the item to the cart
    navigate("/addtocart"); // Optionally navigate to cart page after adding
  };
  return (
    <div className="product-page my-5">
      <div className="container">
        {productItems.map((item) => (
          <div className="card border-0" key={item.id}>
            <div className="row align-items-center">
              <div className="col-lg-5">
                <img
                  src={item.imageURL || "https://via.placeholder.com/80"}
                  alt={item.name}
                  className="img-fluid mb-4"
                  width={350}
                />
              </div>
              <div className="col-lg-7">
                <div
                  className="p-3 px-4 rounded"
                  style={{ boxShadow: "0 0 5px" }}
                >
                  <h3 style={{ color: "#1eb7c6" }}>
                    {item.year} {item.make} {item.name}
                  </h3>
                  <div className="d-flex justify-content-between">
                    <h2>{item.model}</h2>
                    <h3>{item.price}</h3>
                  </div>
                  <p>
                    At vanderengines you will get the best quality{" "}
                    <span style={{ color: "#000" }} className="fw-bold">
                      {item.name}
                    </span>
                    . Before buying the remanufactured{" "}
                    <span style={{ color: "#000" }} className="fw-bold">
                      {item.name}
                    </span>
                    , check the vehicle fitment. All the engines are highly
                    inspected and tested before delivery and exceed our quality
                    assurance standards. At vanderengines we also offer a 1-year
                    warranty at no extra cost. We also provide up to 5 years
                    extended warranty options. Our dedicated technical team is
                    always ready to assist you. We take pride in improving your
                    online buying experience.
                  </p>
                  <p>
                    <span style={{ color: "#1eb7c6" }} className="fw-bold">
                      VARIANT -{" "}
                    </span>
                    {item.variant}
                  </p>
                  <button
                    className="btn theme-btn"
                    onClick={() => onAddToCart(item)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
