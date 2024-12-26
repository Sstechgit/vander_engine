import React from "react";

function SignUpForm() {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any additional validation here if needed
    alert('Form submitted successfully!');
  };

  return (
    <div className="signup mb-5 text-white" style={{ background: "#1eb7c6" }}>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-sm-6">
            <div className="d-flex flex-row ps-5 pt-3 justify-content-center">
              <span className="h1 fw-bold mb-0">
                <img src="/assets/logo.png" alt="" width={200} />
              </span>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
                <div className="mb-4 mx-5 w-100">
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">
                      <i
                        className="fas fa-user "
                        style={{ color: "#1eb7c6" }}
                      ></i>
                    </span>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="name"
                      placeholder="Enter your name"
                      aria-label="Enter your name"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4 mx-5 w-100">
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon2">
                      <i
                        className="fas fa-envelope "
                        style={{ color: "#1eb7c6" }}
                      ></i>
                    </span>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      placeholder="Enter your email"
                      aria-label="Enter your email"
                      aria-describedby="basic-addon2"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4 mx-5 w-100">
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon3">
                      <i
                        className="fas fa-phone"
                        style={{ color: "#1eb7c6" }}
                      ></i>
                    </span>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="mobile"
                      placeholder="Enter your mobile no."
                      aria-label="Enter your mobile no."
                      aria-describedby="basic-addon3"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4 mx-5 w-100">
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon4">
                      <i
                        className="fas fa-id-card"
                        style={{ color: "#1eb7c6" }}
                      ></i>
                    </span>
                    <select
                      className="form-select form-select-lg"
                      id="idProof"
                      aria-label="Select ID proof"
                      required
                    >
                      <option value="">Select ID proof</option>
                      <option value="passport">Passport</option>
                      <option value="drivers_license">Driver's License</option>
                      <option value="aadhaar">Aadhaar Card</option>
                      <option value="voter_id">Voter ID</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4 mx-5 w-100">
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon5">
                      <i
                        className="fas fa-address-card"
                        style={{ color: "#1eb7c6" }}
                      ></i>
                    </span>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="proofId"
                      placeholder="Enter proof ID"
                      aria-label="Enter proof ID"
                      aria-describedby="basic-addon5"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4 mx-5 w-100">
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon6">
                      <i
                        className="fas fa-map-marker-alt"
                        style={{ color: "#1eb7c6" }}
                      ></i>
                    </span>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="address"
                      placeholder="Enter your address"
                      aria-label="Enter your address"
                      aria-describedby="basic-addon6"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4 mx-5 w-100">
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon7">
                      <i className="fas fa-lock" style={{ color: "#1eb7c6" }}></i>
                    </span>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="password"
                      placeholder="Enter your password"
                      aria-label="Enter your password"
                      aria-describedby="basic-addon7"
                      required
                    />
                  </div>
                </div>

                <button
                  className="btn btn-info mb-4 px-5 mx-5 w-100"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="col-sm-6 d-none d-sm-block px-0">
            <img
              src="/assets/sign-up.jpg"
              alt="Signup image"
              className="w-100"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
