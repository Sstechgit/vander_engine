import React from "react";
import Home from "../Home/Home";
import HomeHeader from "../Home/HomeHeader";
import ShopModels from "../Home/ShopModels";
import CustomerReview from "../Home/CustomerReview";
import ShopParts from "./ShopParts";
import Speciality from "../Home/Speciality";

export default function OnlineCatalog() {
  return (
    <>
      <div className="onlineCatalog">
        <HomeHeader />
      </div>
      <Speciality/>
      <ShopModels />
      <ShopParts />
      <CustomerReview />
      <style>
        {`
        .onlineCatalog{
        background:url(/assets/h4_bg1.jpg)!important;
        position:relative;
        z-index:1;
        }
        .onlineCatalog:after{
          content:"";
          position:absolute;
          background:#000;
          top:0;
          left:0;
          width:100%;
          height:100%;
          opacity:0.6;
          z-index:-1;
        }
        `}
      </style>
    </>
  );
}
