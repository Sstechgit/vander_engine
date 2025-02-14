import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import './viewcart.css';
export default function Basket() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: "$10.99",
      quantity: 2,
      imageURL: "/assets/brand/1.png", // or actual image URL
      stockNumber: 10,
    },
  ]);

  const handleStartShopping = () => {
    navigate("/");
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(/[$,]/g, ""));
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = parsePrice(item.price);
    return total + itemPrice * item.quantity;
  }, 0);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const tax = totalPrice * 0.06;
  const totalAmount = totalPrice + tax;

  return (
    <div className="basket">
      <div className="container">
        <div className="d-flex mb-3 mt-5">
          <i className="fa-solid fa-gear fs-2 me-2 main"></i>
          <h3 className="fs-3 fw-bold">Your Cart Items :</h3>
        </div>
        <div className="text-center mb-4">
          <h1>
            WELCOME TO <span style={{ color: "#ec2324" }}>YOUR CART</span>
          </h1>
          <div
            className="d-inline-block rounded-pill my-3 heading-divider"
            style={{
              height: "10px",
              width: "90px",
              border: "2px solid #ec2324",
            }}
          ></div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-7">
            {cartItems.length === 0 ? (
              <div className="basket-item d-flex flex-column align-items-center justify-content-center my-5">
                <h4>
                  Your shopping cart is empty . Start adding items to begin
                  shopping.
                </h4>
                <Link to="/">Click Here</Link>
                <Button
                  className="btn btn-primary my-5"
                  onClick={handleStartShopping}
                >
                  Start Shopping
                </Button>
              </div>
            ) : (
              cartItems.map((item) => (
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
                      <p className="card-text">Quantity: {item.quantity}</p>
                      <div className="d-flex justify-content-between">
                        <button
                          className="btn btn-outline-danger mt-2"
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="col-lg-4 col-md-5">
            <div className="border p-3 bg-white rounded">
              <h3 className="text-center">Your Items Detail</h3>
              <div className="my-3">
                <div
                  className="mb-3"
                  style={{ height: "1px", borderBottom: "1px solid #ec2324  " }}
                ></div>
                <div className="d-flex justify-content-between">
                  <p>Products</p>
                  <p>{totalQuantity}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>SubTotal</p>
                  <p>$ {totalPrice.toFixed(2)}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Tax (6%)</p>
                  <p>$ {tax.toFixed(2)}</p>
                </div>
                <div className="d-flex justify-content-between border-top border-danger pt-3">
                  <p>Total Amount</p>
                  <p>$ {totalAmount.toFixed(2)}</p>
                </div>
                <PayPalScriptProvider>
                  <PayPalButtons></PayPalButtons>
                </PayPalScriptProvider>
                {/* <Elements></Elements> */}
              </div>
            </div>

            <p className="mt-3 m-auto text-center mb-4">
              <img
                src="https://img.freepik.com/premium-vector/check-mark-tick-shield-icon-vector-template_917138-240.jpg"
                alt=""
                width={40}
              />{" "}
              Safe and Secure Payments . Easy returns. 100% Authentic products.
            </p>
          </div>
        </div>
      </div>
    
    </div>
  );
}
