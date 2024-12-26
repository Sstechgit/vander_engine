import React from "react";

function Forgot() {
  return (
    <div
      className="forgot bg-dark"
    >
      <div className="container-fluid px-5 mb-5 h-custom">
        <div className="row align-items-center ">
          {/* Left Column with image */}
          <div className="col-12 col-md-6 forgot1">
            <img
              src="/assets/forgot.png"
              className="img-fluid"
              alt="Sample image"
            />
          </div>

          <div className="col-12 col-md-6 forgot2">
            {/* Email Input with Icon */}
            <div className="mb-4 input-group">
              <span className="input-group-text" id="basic-addon1">
                <i className="fas fa-envelope" style={{ color: "#1eb7c6" }}></i>
              </span>
              <input
                type="email"
                className="form-control form-control-lg"
                id="formControlLg"
                placeholder="Email address"
                aria-label="Email address"
                aria-describedby="basic-addon1"
              />
            </div>

            {/* Login button */}
            <div className="text-center text-md-start mt-4 pt-2">
              <button className="btn btn-primary btn-lg mb-0 px-5">
                Send Otp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
