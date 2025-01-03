import React from "react";
import "./Financing.css";
import PayPalSection from "./Paypal/PayPalSection";
import afirm from "./images/1.webp"
import snap from "./images/2.webp"
import paytommarow from "./images/4.webp"
import logo from "./images/logo-light.png"
import Footer2 from "../Home/newfooter";

const FinanceProductCard = ({ product }) => {
  return (
    <div className="finance_card">
      <div className="finance_cardContent">
        <div className="finance_imageContainer">
          <img src={product.image} alt={product.name} />
        </div>
        <h2 className="finance_name">{product.name}</h2>
        <p className="finance_description">{product.description}</p>
        <div className="finance_priceAndButton">
          <a
            href={product.link}
            className="finance_buyButton"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Here
          </a>
        </div>
      </div>
    </div>
  );
};

const FinanceProductGrid = () => {
  const products = [
    {
      name: "AFFIRM",
      description:
        "Buy now and pay later with affirm - get approved up to $6500.00",
      image: afirm, // Replace with actual image URL
      link: "https://www.affirm.com/user/signup", // Replace with actual link
    },
    {
      name: "SNAP",
      description:
        "Buy now and pay later with SNAP - get approved up to $5000.00",
      image: snap, // Replace with actual image URL
      link: "https://customer.snapfinance.com/#/login", // Replace with actual link
    },
    {
      name: "PAY TOMORROW",
      description:
        "Buy now and pay later with PAY TOMORROW - get approved up to $6500.00",
      image: paytommarow, // Replace with actual image URL
      link: "https://example.com/pay-tomorrow-apply", // Replace with actual link
    },
  ];

  return (
    <>
    <div className="finance_container">
      <div className="heading_part">
        <h1>Vander Financing</h1>
        <p>
          Vander Engine Transmissionss offers multiple financing options to help get your vehicle back
          on the road. You can even get pre-approved over the phone by calling us at +1 8448931760.
          To ease our customers' minds, inquiries for most of our financing options do not affect your
          credit score.
        </p>
        <p>
          PLEASE NOTE: Our sales and finance team will assist you throughout the financing application
          procedure. Once your application is accepted, the financing company will make the payment to
          Vander Engine Transmissionss. If you choose to cancel the transaction after the payment has been processed
          by the financing company, a Transaction Cancellation Fee will be incurred.
        </p>
      </div>
      
      <div className="finance_grid">
        {products.map((product, index) => (
          <FinanceProductCard key={index} product={product} />
        ))}
      </div>
      <PayPalSection />
      <div className="heading_part">
      <p>
      We’re thrilled to announce that we now offer PayPal as a payment option! 
      Please note that all transactions processed through PayPal will be subject to a 
      2.9% processing fee. Feel free to give us a call for more information and details.
        </p>
    </div>
   
    <div className="price_freeze_section">
  <div className="freeze_text">
    <h2>Vander Engine Price Freez Plan</h2>
    <p>
      Introducing the Vander Engine Transmissions Freeze Plan, an exclusive opportunity for our valued customers.
      With the Vander Engine Transmissions Freeze Plan, you can secure current pricing on our premium Vander Engine Transmissions
      Products. This plan allows you to lock in the current price and make convenient payments towards 
      your selected product, whether it’s an engine, transmission, or cylinder heads.
    </p>
    <p>
      Experience the convenience and peace of mind with the Vander Engine Transmissions Freeze Plan, securing your
      desired product at a locked-in price. Embrace this opportunity to invest in top-quality products
      from Vander Engine Transmissionss with ease and confidence.
    </p>
    <button className="apply_freeze_button">Apply for Plan Vander Engine Transmissions</button>
  </div>
  <div className="freeze_logo">
    <img src={logo} alt="Vander Engines Logo" />
  </div>
</div>
<div className="heading_part">
      <p>
      If the product has NOT been shipped, a fee is $250 is assessed. 
      Fees MUST be paid via bank or wire transfer.
        </p>
        <p>
        To utilize AFFIRM financing, a processing fee of $199.99 is incurred per 
        complete order financed. If the product has NOT been shipped, a fee is $250 
        is assessed. Fees MUST be paid via bank or wire transfer.
        </p>
        <p>
        To utilize PAY TOMORROW financing, a processing fee of $199.99 is incurred per
         complete order financed. If the product has NOT been shipped, a fee of $250 is 
         assessed. Fees MUST be paid via bank or wire transfer.
        </p>
    </div>

    </div>
    <Footer2/>
    </>
    
  );
};

export default FinanceProductGrid;
