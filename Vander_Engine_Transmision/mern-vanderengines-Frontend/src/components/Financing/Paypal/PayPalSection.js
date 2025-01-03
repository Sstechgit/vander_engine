import React from "react";
import "./PayPalSection.css";

const PayPalSection = () => {
  return (
    <div className="paypal_section">
      <div className="paypal_logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal Logo" />
      </div>
      <div className="paypal_credit_text">
        <h2>PAY PAL CREDIT</h2>
        <p>Pay at your own pace with your PAY PAL account</p>
        <button className="paypal_button">Click Here</button>
      </div>
    </div>
  );
};

export default PayPalSection;
