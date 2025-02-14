import React from "react";
import LowerHeader from "../Includes/LowerHeader";
import OrderStatus_Form from "./OrderStatus_Form";
import About_Us from "./About_Us";
import Faq from "./Faq";
import Copyright from "./Copyright";

export default function Customer_Service() {
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
      <OrderStatus_Form />
      <About_Us/>
      <Faq/>
      
      <Copyright/>
    </>
  );
}
