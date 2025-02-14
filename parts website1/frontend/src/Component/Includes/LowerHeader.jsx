import React, { useEffect, useState } from "react";
import "./Includes.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function LowerHeader() {
  const [year, setYear] = useState([]);
  const [make, setMake] = useState([]);
  const [model, setModel] = useState([]);
  const [modaldata, setModalData] = useState([]);
  const [years, setYears] = useState([]);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);

  const [modalopen, setmodalopen] = useState(false);
  const openmodal = () => {
    setmodalopen(true);
  };
  const closeModal = () => {
    setmodalopen(false);
  };

  useEffect(() => {
    const fetchmodaldata = async () => {
      try {
        const response = await axios.get("http://localhost:6010/api/cardata");
        setModalData(response.data); // Assuming 'data' is the correct key in your response
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };
    fetchmodaldata();
  }, []);
  useEffect(() => {
    const fetchyears = [...new Set(modaldata.map((item) => item.year))];
    setYears(fetchyears);
  }, [modaldata]);
  useEffect(() => {
    const fetchmakes = [
      ...new Set(
        modaldata.filter((item) => item.year === year).map((item) => item.make)
      ),
    ];
    setMakes(fetchmakes);
    setMake("");
    setModel("");
  }, [year, modaldata]);
  useEffect(() => {
    const fetchmodels = [
      ...new Set(
        modaldata
          .filter((item) => item.year === year && item.make === make)
          .map((item) => item.model)
      ),
    ];
    setModels(fetchmodels);
    setModel("");
  }, [year, make, modaldata]);

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
                      <select
                        id="year"
                        className="form-select"
                        name="year"
                        required
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                      >
                        <option>Select Year</option>
                        {years.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                        {/* Add more years as needed */}
                      </select>
                    </div>
                    <div className="form-group">
                      <select
                        id="make"
                        className="form-select"
                        name="make"
                        required
                        value={make}
                        onChange={(e) => setMake(e.target.value)}
                      >
                        <option>Select Make</option>
                        {makes.map((make) => (
                          <option key={make} value={make}>
                            {make}
                          </option>
                        ))}
                        {/* Add more makes as needed */}
                      </select>
                    </div>
                    <div className="form-group">
                      <select id="model" className="form-select" name="model" required value={model} onChange={(e) => setModel(e.target.value)}>
                        <option>Select Model</option>
                        {models.map((model) => (
                          <option key={model} value={model}>
                            {model}
                          </option>
                        ))}
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
    </>
  );
}
