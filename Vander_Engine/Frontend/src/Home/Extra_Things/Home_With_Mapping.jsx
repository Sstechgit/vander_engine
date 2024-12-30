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
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home({ handleAddToCart, showproduct }) {
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
    agreed: "",
  });

  const [years, setYears] = useState([]);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [variants, setVariants] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); // Added loading state
  const navigate = useNavigate();

  useEffect(() => {
    if (formData.part) {
      const apiURL =
        formData.part === "Engine"
          ? "https://backend.vanderengines.com/api/engines"
          : "https://backend.vanderengines.com/api/transmission";

      axios
        .get(apiURL)
        .then((response) => {
          setData(response.data);
          setYears(Object.keys(response.data));
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [formData.part]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Update dependent options
    if (name === "year" && data) {
      setMakes(Object.keys(data[value] || {}));
      setModels([]);
      setVariants([]);
    } else if (name === "make" && data) {
      setModels(Object.keys(data[formData.year][value] || {}));
      setVariants([]);
    } else if (name === "model" && data) {
      setVariants(Object.keys(data[formData.year][formData.make][value] || {}));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const response = await axios.post(
        "http://localhost:4000/api/leads",
        formData
      );
      console.log(response.data);
      navigate("/thankyou")
      setFormData({
        part: "",
        make: "",
        model: "",
        year: "",
        variant: "",
        name: "",
        phone: "",
        email: "",
        message: "",
        agreed: "",
      });
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      alert("There was an error submitting the form!");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <div className="home py-4">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 form-area">
              <div className="main-form p-3 py-5">
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-6">
                      <select
                        className="form-select"
                        name="part"
                        value={formData.part}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select a part
                        </option>
                        <option value="Engine">Engine</option>
                        <option value="Transmission">Transmission</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <select
                        className="form-select"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        disabled={!years.length}
                        required
                      >
                        <option value="" disabled>
                          Select a year
                        </option>
                        {years.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <select
                        className="form-select"
                        name="make"
                        value={formData.make}
                        onChange={handleChange}
                        disabled={!makes.length}
                        required
                      >
                        <option value="" disabled>
                          Select a make
                        </option>
                        {makes.map((make) => (
                          <option key={make} value={make}>
                            {make}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-6">
                      <select
                        className="form-select"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        disabled={!models.length}
                        required
                      >
                        <option value="" disabled>
                          Select a model
                        </option>
                        {models.map((model) => (
                          <option key={model} value={model}>
                            {model}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
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
                    <div className="col-6">
                      <input
                        type="tel"
                        className="form-control"
                        id="mobile"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter Mobile"
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-12">
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
                    <button
                      type="submit"
                      className="btn btn-block"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit"}
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
      <Cardsection1 handleAddToCart={handleAddToCart} showproduct={showproduct} />

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