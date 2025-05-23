import React from "react";
import LowerHeader from "../Includes/LowerHeader";
import HomeForm from "./HomeForm";
import Discount_home from "./Discount_home";
import { Link } from "react-router-dom";
// import Speciality from './Speciality'

export default function HomeHeader() {
  return (
    <>
      <div className=" text-white">
        <LowerHeader />
        <div className="container d-flex flex-column align-items-center justify-content-center pb-4">
          {/* <div className="lowernav2 d-flex flex-column align-items-center pt-4">
            <p>
              Call To Order :
              <Link to="tel:+18448931760" className="">
                <span className="main ms-2"> +18002131371</span>
              </Link>
            </p>
            <h1 className="mb-3">Explore Over 10 Million Auto Parts</h1>
            <h4 className="main">Select Your Parts:</h4>
          </div> */}

          <HomeForm />
          <Discount_home />
        </div>
      </div>
      <style>
        {`
@media (max-width: 576px) {
.lowernav2 {
display : none !important;
}
}
`}

      </style>
    </>
  );
}
