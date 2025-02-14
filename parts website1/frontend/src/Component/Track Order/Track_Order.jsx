import React from "react";
import LowerHeader from "../Includes/LowerHeader";
import OrderStatus_Form from "../Customer_Service/OrderStatus_Form";
import About_Us from "../Customer_Service/About_Us";
import Faq from "../Customer_Service/Faq";
import Copyright from "../Customer_Service/Copyright";

export default function Track_Order() {
  return (
    <>
      <div className="home text-white mb-3">
        <LowerHeader />
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <p>
            Call To Order :<span className="main ms-2">+1844-893-1760</span>
          </p>
        </div>
      </div>
      <OrderStatus_Form/>
      <About_Us />
      <Faq />

      <Copyright />
    </>
  );
}
