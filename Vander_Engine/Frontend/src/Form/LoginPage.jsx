import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    // Toggle password visibility
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  return (
    <div
      className="login text-white"
      style={{
        background:
          "url(/assets/login.jpg)",
      }}
    >
      <div className="container mb-5">
        <div className="row justify-content-center">
          {/* Left Column (Login Form) */}
          <div className="col-md-6 mb-5">
            <div className="d-flex flex-column ms-5">
              <div className="text-center">
                <img
                  src="/assets/logo.png"
                  alt="logo"
                  style={{ width: "185px" }}
                />
              </div>

              <p>Please login to your account</p>

              {/* Email input */}
              <div className="mb-4">
                <label htmlFor="form1" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" id="form1" required/>
              </div>

              {/* Password input with eye icon */}
              <div className="mb-4 position-relative">
                <label htmlFor="form2" className="form-label">
                  Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  id="form2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i
                  onClick={togglePasswordVisibility}
                  className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} position-absolute top-50 end-0 translate-middle-y me-3 mt-3`}
                  style={{ cursor: 'pointer',  color:"#000"}}
                ></i>
              </div>

              {/* Sign-in Button */}
              <div className="text-center pt-1 mb-5 pb-1">
                <button className="btn btn-primary w-100 mb-4">Sign in</button>
                <Link to="/forgot" className="" style={{ color: "#1eb7c6" }}>
                  Forgot password?
                </Link>
              </div>

              {/* Don't have an account? */}
              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Don't have an account?</p>
                <Link to="/signup">
                  <button className="btn btn-outline-danger mx-2">
                    Create New
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
