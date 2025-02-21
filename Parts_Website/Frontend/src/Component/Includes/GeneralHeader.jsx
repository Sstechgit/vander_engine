import React from "react";
import "./Includes.css";
import { Link } from "react-router-dom";
export default function GeneralHeader() {
  return (
    <>
      <div className="generalheader bg-dark text-white ">
        <div class="container ">
          <div className="row">
            <div className="col-lg-6 py-2">
              <div className="row">
                <div className="col-lg-7 ">
                  <div className="d-flex align-items-center">
                    <i class="fa-solid fa-phone-volume me-2"></i>
                    <div>
                      Talk to the experts.{" "}
                      <Link to="tel:+18448931760" className="">
                        <span> +1-800-213-1371</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="d-flex align-items-center">
                    <i class="fa-regular fa-clock me-2"></i>
                    <div>Sun - Fri (08AM - 10PM)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 header-clip ">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6">
                  <span className="text-warning">
                    <i class="fa-solid fa-star me-1 "></i>
                    <i class="fa-solid fa-star me-1"></i>
                    <i class="fa-solid fa-star me-1"></i>
                    <i class="fa-solid fa-star me-1"></i>
                    <i class="fa-solid fa-star me-3"></i>
                  </span>
                  <span>4.9 Google Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
