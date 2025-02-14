import React from "react";
import LowerHeader from "../Includes/LowerHeader";

export default function Retrive_Quote() {
  return (
    <>
      <div className="home text-white mb-3">
        <LowerHeader />
      </div>
      <div className="container my-5">
        <div className="d-flex mb-3">
          <i className="fa-solid fa-gear fs-2 me-2 main"></i>
          <h3 className="fs-3 fw-bold">Request Your Quote :</h3>
        </div>
        <form action="" className="border p-3 mb-5">
          <h4 className="mb-4">Provide Your Quote ID Below</h4>
          <input
            type="text"
            id="email-info"
            className="form-control mb-3"
            placeholder="Enter your Quote ID"
          />
          <p className="text-secondary">
            (All quotes expire after 30 days. Quotes older than 30 days are
            invalid.)
          </p>
          <button className="btn btn-primary mt-3">Get Quote</button>
          <span className="ms-5 text-secondary">
           ( Any items that are out of stock between the quote's creation and
            retrieval will not be added to your cart.)
          </span>
        </form>
      </div>
    </>
  );
}
