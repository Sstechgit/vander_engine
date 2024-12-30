import React from "react";
import HomeHeader from "../Home/HomeHeader";
import ShopByMake_child from "./ShopByMake_child";
import Speciality from "../Home/Speciality";
import CustomerReview from "../Home/CustomerReview";

export default function Seller_parts() {
  return (
    <>
      <div className="seller-part">
        <HomeHeader />
      </div>
      <Speciality />
      <ShopByMake_child />
      <CustomerReview/>
      <style>
        {`
        .seller-part{
        background:url(https://www.boscoandsons.com/wp-content/uploads/2024/05/Cars_Sales_and_Spare_Parts.jpg)!important;
        position:relative;
        z-index:1;
        background-size:cover;
        }
        .seller-part:after{
          content:"";
          position:absolute;
          background:#000;
          top:0;
          left:0;
          width:100%;
          height:100%;
          opacity:0.7;
          z-index:-1;
        }
        `}
      </style>
    </>
  );
}
