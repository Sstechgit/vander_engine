import React from "react";

export default function Price_courses() {
  return (
    <div>
      <div className="price my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row  m-3 border">
                <div
                  className="col-lg-4"
                  style={{ background: "rgb(5, 9, 28)" }}
                >
                  <div className="box bg-white p-5 m-3">
                    <h4>TOTAL PROGRAM FEE</h4>
                    <h3 style={{color:"#3b6cb4"}} className="fw-bold fs-1">₹60,000</h3>
                  </div>
                </div>
                <div className="col-lg-8 d-flex flex-column justify-content-center">
                  <h4 style={{color:"#3b6cb4"}} className="fw-bold fs-2">At a Reasonable Cost</h4>
                  <p>
                    Advancing your career shouldn't be expensive, which is why
                    we’ve designed this exceptional program to be affordable for
                    you.
                  </p>
                  <h4 style={{color:"#3b6cb4"}} className="fw-bold fs-2">Duration: 6 Months</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
