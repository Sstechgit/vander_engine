import React, { useEffect, useState } from "react";
import "./home.css";
import Shipping from "./Shipping";
import Cardsection1 from "./Cardsection1";
import AboutUs from "./AboutUs";
import EngineList from "../Includes/EngineList";
import EngineTransmission from "./EngineTransmission";
import FindEngine from "./FindEngine";
import FindTransmission from "./FindTransmission";
import TransmissionList from "../Includes/TransmissionList";
import Process from "./Process";
import WhyChoose from "./WhyChoose";
import Faq from "./Faq";
import Brands from "../Includes/Brands";
import Sale from "./Sale";
import ComponentName from "../Engine/ecom";

export default function Home() {
  const [makeOptions, setMakeOptions] = useState([]);
  const [modelOptions, setModelOptions] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [makeModelData, setMakeModelData] = useState({});
  const [formData, setFormData] = useState({
    part: "",
    make: "",
    model: "",
    year: "",
    variant: "",
    name: "",
    phone: "",
    email: "",
    message: "",
    agreed: false,
  });

  useEffect(() => {
    async function fetchMakeModelData() {
      try {
        const response = await fetch("http://localhost:4000/api/makes-models");
        if (response.ok) {
          const data = await response.json();
          setMakeOptions(Object.keys(data));
          setMakeModelData(data);
        } else {
          console.error("Failed to fetch make and model data");
        }
      } catch (error) {
        console.error("Error fetching make and model data:", error);
      }
    }
    fetchMakeModelData();
  }, []);

  const handleMakeChange = (e) => {
    const make = e.target.value;
    setSelectedMake(make);
    setFormData({ ...formData, make });
    setModelOptions(make ? makeModelData[make] || [] : []);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        console.error("Error submitting form data");
      }
    } catch (error) {
      console.error("Error in form submission:", error);
    }
  };

  return (
    <>
      <div className="home">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 form-area">
              <div className="main-form p-3">
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="part" className="form-label">
                        Part
                      </label>
                      <select
                        className="form-select"
                        id="part"
                        name="part"
                        value={formData.part}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select a part
                        </option>
                        <option value="part1">Part 1</option>
                        <option value="part2">Part 2</option>
                        <option value="part3">Part 3</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="year" className="form-label">
                        Year
                      </label>
                      <select
                        className="form-select"
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select a year
                        </option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="make" className="form-label">
                        Make
                      </label>
                      <select
                        className="form-select"
                        id="make"
                        name="make"
                        value={selectedMake}
                        onChange={handleMakeChange}
                        required
                      >
                        <option value="" disabled>
                          Select a make
                        </option>
                        {makeOptions.map((make) => (
                          <option key={make} value={make}>
                            {make}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="model" className="form-label">
                        Model
                      </label>
                      <select
                        className="form-select"
                        id="model"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select a model
                        </option>
                        {modelOptions.length > 0 ? (
                          modelOptions.map((model) => (
                            <option key={model} value={model}>
                              {model}
                            </option>
                          ))
                        ) : (
                          <option disabled>No models available</option>
                        )}
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">
                        Mobile
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter Mobile"
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-12">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-block">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-8 car-area">
              <img
                src="https://autoart.beplusthemes.com/wp-content/uploads/2024/04/car-hero-min.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <Shipping />
      <Cardsection1 />
      <AboutUs />
      <EngineTransmission />
      <div>
        <div className="find-engine-head head1">
          <h3 className="text-center">
            Find Your <span>Engine</span>{" "}
          </h3>
        </div>
        <FindEngine />
      </div>

      <EngineList />

      <div>
        <div className="find-transmission-head mt-5 head1">
          <h3 className="text-center">
            Find Your <span>Transmission</span>{" "}
          </h3>
        </div>
        <FindTransmission />
      </div>

      <TransmissionList />
      <Process />
      <WhyChoose />
      <Faq />
      <Brands />
      <Sale />
    </>
  );
}
