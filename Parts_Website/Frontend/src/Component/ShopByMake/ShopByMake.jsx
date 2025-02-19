import React from "react";
import HomeHeader from "../Home/HomeHeader";
import ShopMake from "../Home/ShopMake";
import Speciality from "../Home/Speciality";

export default function ShopByMake() {
  return (
    <>
      <div className="shop">
        <HomeHeader />
      </div>
      <Speciality />
      <ShopMake />
      <style>
        {`
        .shop{
        background:url(https://wallpaperaccess.com/full/2947998.jpg)!important;
        position:relative;
        z-index:1;
        background-size:cover;
        }
        .shop:after{
          content:"";
          position:absolute;
          background:#000;
          top:0;
          left:0;
          width:100%;
          height:100%;
          opacity:0.8;
          z-index:-1;
        }
        `}
      </style>
    </>
  );
}
