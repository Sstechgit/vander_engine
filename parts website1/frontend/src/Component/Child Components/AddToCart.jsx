import React, { useState } from "react";

export default function AddToCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: "$10.99",
      quantity: 2,
      imageURL: "/assets/brand/1.png", // or actual image URL
      stockNumber: 10,
    },
    {
      id: 2,
      name: "Product 2",
      price: "$20.99",
      quantity: 2,
      imageURL: "/assets/brand/2.png", // or actual image URL
      stockNumber: 20,
    },
    {
      id: 3,
      name: "Product 3",
      price: "$30.99",
      quantity: 2,
      imageURL: "/assets/brand/3.png", // or actual image URL
      stockNumber: 30,
    },
  ]);
  return (
    <>
      <div className="container my-5">
        {cartItems.map((item) => (
          <div key={item.id} className="card mb-3">
            <div className="card-body d-flex flex-column flex-md-row align-items-center justify-content-center">
              <img
                src={item.imageURL || "https://via.placeholder.com/80"}
                alt={item.name}
                className="mb-3 mb-md-0 ml-md-3"
                id="cart-img-1"
                style={{ width: "230px", height: "190px" }}
              />
              <div className="flex-grow-1 cart-detail">
                <h5 className="card-title fw-bold">{item.name}</h5>
                <p className="card-text">Stock: {item.stockNumber}</p>
                <p className="card-text">Price: {item.price}</p>
                
              </div>
              <div className=" cart-detail text-center">
              <p className="card-text">Quantity: {item.quantity}</p>
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-outline-danger mt-2"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Add To Cart
                </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
