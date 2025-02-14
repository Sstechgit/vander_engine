import React from 'react'
import HomeHeader from "../Home/HomeHeader";
import Speciality from "../Home/Speciality";
import CustomerReview from "../Home/CustomerReview";
import Child_make from "./child_make";
import Child_Model from "./Child_Model";
import Child_Faq from "./Child_Faq";
import Child_Parts from "./Child_Parts";
import AddToCart from "./AddToCart";
import Child_Img from "./Child_Img";
export default function Sell() {
  return (
    <>
    <div className="seller-part">
      <HomeHeader />
    </div>
    <Speciality />
    <Child_Img />
    <Child_make />
    <AddToCart />
    <Child_Parts />
    <Child_Faq />
    <Child_Model />
    <CustomerReview />
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
  )
}
