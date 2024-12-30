import React, { useState } from "react";
import "./Includes.css";
import { Link } from "react-router-dom";

export default function LowerHeader() {
  const [modalopen, setmodalopen] = useState(false);
  const openmodal = () => {
    setmodalopen(true);
  };
  const closeModal = () => {
    setmodalopen(false);
  };
  return (
    <>
      <div className="lowernav text-white pt-3">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <div className="row w-100 align-items-center">
              <div className="col-lg-1 mb-2">
                <span>Search</span>
              </div>
              <div className="col-lg-5 mb-2">
                <form
                  className="d-flex align-items-center  justify-content-between border rounded px-2"
                  style={{ border: "1px solid #000" }}
                >
                  <i className="fas fa-search me-2"></i>
                  <input
                    type="search"
                    placeholder="Keyword or Part"
                    className="border-0 w-100 text-white"
                    style={{ boxShadow: "none", background: "none" }}
                  />
                  <button
                    className="btn btn-secondary h-100"
                    style={{ marginRight: "-8px", borderRadius: "0 5px 5px 0" }}
                  >
                    Go
                  </button>
                </form>
              </div>
              <div className="col-lg-6">
                <div className="float-end">
                  <span className="me-3">Search</span>
                  <span>
                    <Link to="" className="links" onClick={openmodal}>
                      Make{" "}
                    </Link>
                    /
                    <Link to="" className="links" onClick={openmodal}>
                      {" "}
                      Model
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            {/* Modal */}
            {modalopen && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <button onClick={closeModal} className="close-btn">
                    X
                  </button>
                  <h2 className="text-dark">Select Vehicle</h2>
                  <p className="text-dark">
                    Save up to 30% off product list price
                  </p>
                  <form>
                    <div className="form-group ">
                      <select id="year" className="form-select">
                        <option>Select Year</option>
                        <option>2024</option>
                        <option>2023</option>
                        <option>2022</option>
                        {/* Add more years as needed */}
                      </select>
                    </div>
                    <div className="form-group">
                      <select id="make" className="form-select">
                        <option>Select Make</option>
                        <option>Toyota</option>
                        <option>Ford</option>
                        <option>BMW</option>
                        {/* Add more makes as needed */}
                      </select>
                    </div>
                    <div className="form-group">
                      <select id="model" className="form-select">
                        <option>Select Model</option>
                        <option>Corolla</option>
                        <option>Mustang</option>
                        <option>3 Series</option>
                        {/* Add more models as needed */}
                      </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
      <style>
        {`
            a{
            text-decoration:none;
            }

  @media (max-width: 576px) {
    .col-lg-1 {
      display: none;
    }
  }
    /* Style the overlay to cover the entire page */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Make sure the modal is on top */
}

/* Style for the modal content */
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  text-align: center;
  position: relative;
}

/* Close button style */
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

/* Form styles */
.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}

.modal-content .btn {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}

/* Blur the page content behind the modal */
body.modal-open {
  filter: blur(5px);
}

    `}
      </style>
    </>
  );
}
