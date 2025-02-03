import React from "react";
import CourseSection from "../Components/Coursesbanner";

export default function Cta_courses() {
  return (
   
    <div className="cta">
      <div className="container">
        <h3
          className="text-center fw-bold fs-1 mb-4"
          style={{ color: "#3b6cb4" }}
        >
          Looking to Learn Digital Marketing ?
        </h3>
        <div className="row ">
          <div className="col-md-12">
            <div
              className="row align-items-center justify-content-center p-3 m-3 newcta"
              style={{
                background:
                  " linear-gradient(rgb(8 24 99 / 99%), rgb(5, 9, 28))",
                borderRadius: "10px",
                boxShadow: "10px 0 10px ",
                border: "2px solid #41B294",
              }}
            >
              <div className="col-md-6 text-white">
                <h4 className="fs-1">Get in Touch for Free Consultation!</h4>
              </div>
              <div className="col-md-3">
                <button className="btn btn-warning fw-medium btn-lg">
                  {" "}
                  <a href="#coursebanner">Call Us Now</a>
                  
                </button>
              </div>
              <div className="col-md-3">
                <img
                  src="/asset/morning-img-01.png"
                  alt=""
                  width={150}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
        .newcta:hover {
            transform:scaleY(1.05)
        }
        `}
      </style>
    </div>
  );
}
