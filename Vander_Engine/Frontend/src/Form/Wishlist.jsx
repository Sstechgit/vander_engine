import React from "react";

export default function Wishlist({
  wishlistItems,
  handleRemoveFromWishlist,
  handleMoveToCart,

}) {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1>
          YOUR <span style={{ color: "#1eb7c6" }}>WISHLIST</span>
        </h1>
        <div
          className="d-inline-block rounded-pill my-3 heading-divider"
          style={{ height: "10px", width: "90px", border: "2px solid #1eb7c6" }}
        ></div>
      </div>
      <div className="row">
        {wishlistItems.length === 0 ? (
          <div className="text-center">
            <h2>Your Wishlist is empty.</h2>
            <p>Save items from your cart to add them here.</p>
          </div>
        ) : (
          wishlistItems.map((item) => (
            <div key={item.id} className="col-lg-3 mb-4">
              <div className="card d-flex flex-column align-items-center justify-content-center">
                <img
                  src={item.imageURL || "https://via.placeholder.com/80"}
                  alt={item.name}
                  className="img-fluid"
                  style={{ height: "190px", width: "100%" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{item.name}</h5>
                  <p className="card-text">Price: {item.price}</p>
                  <p className="card-text">Stock Number: {item.stockNumber}</p>
                  <p className="card-text">Variant: {item.variant}</p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleRemoveFromWishlist(item.id)} // Remove from wishlist
                    >
                      Remove
                    </button>
                    <button
                      className="btn btn-outline-success"
                      onClick={() => handleMoveToCart(item)} // Move to cart
                    >
                      Move to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
