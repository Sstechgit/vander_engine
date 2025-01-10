import React, { useEffect, useState } from "react";
import TransmissionList from "../Includes/TransmissionList";
import { useSearchParams, useParams } from "react-router-dom";
import axios from "axios"; // Add this import
import "./transmission.css";
import Transmissionform from "./Transmissionform";
import ReadMore from "./ReadMore";
import AOS from "aos";
import { Helmet } from "react-helmet";

export default function Transmission({ handleAddToCart, showproduct }) {
  const [phoneError, setPhoneError] = useState(""); // Error message for phone
  const [years, setYears] = useState([]);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [variants, setVariants] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); // Added loading state
  // Phone number validation function
  const validatePhoneNumber = (number) => {
    // Ensure the number always starts with '+1'
    if (!number.startsWith("+1")) {
      return "Phone number must start with +1.";
    }

    const numberWithoutPrefix = number.slice(2); // Remove '+1'

    const isValidLength = numberWithoutPrefix.length === 10; // Check for exactly 10 digits
    const isDigitsOnly = /^[0-9]+$/.test(numberWithoutPrefix); // Ensure only digits
    const noRepeatedDigits = /^(?!.*(\d)\1{6}).*$/; // Prevent more than 2 repeated digits
    const dummyNumbers = [
      "1234567890",
      "9876543210",
      "1111111111",
      "2222222222",
    ];

    if (!isValidLength) {
      return "Phone number must be exactly 10 digits after +1.";
    }
    if (!isDigitsOnly) {
      return "Phone number can only contain digits.";
    }
    if (dummyNumbers.includes(numberWithoutPrefix)) {
      return "Phone number cannot be a common dummy number.";
    }
    if (!noRepeatedDigits.test(numberWithoutPrefix)) {
      return "Phone number cannot have more than 6 consecutive repeated digits.";
    }

    return ""; // Valid number
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);
  const [formData, setFormData] = useState({
    part: "",
    make: "",
    model: "",
    year: "",
    variant: "",
    name: "",
    phone: "+1",
    email: "",
    message: "",
    agreed: "",
  });
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

          // Fetch makes independently of year
          const allMakes = new Set();
          Object.keys(response.data).forEach((year) => {
            Object.keys(response.data[year]).forEach((make) => {
              allMakes.add(make);
            });
          });

          setMakes([...allMakes]); // Set unique makes
          setYears(Object.keys(response.data)); // Retain years if needed
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [formData.part]);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "phone") {
      let updatedValue = value;

      // Ensure '+1' is always present
      if (!updatedValue.startsWith("+1")) {
        updatedValue = "+1" + updatedValue.replace(/[^0-9]/g, ""); // Re-add '+1' if missing and remove invalid characters
      }

      // Validate the phone number
      const error = validatePhoneNumber(updatedValue);
      setPhoneError(error); // Set the error message

      setFormData((prev) => ({
        ...prev,
        phone: updatedValue, // Update with the corrected value
      }));

      return; // Exit here to avoid further processing for phone
    }

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Update dropdowns based on selections
    if (name === "make" && data) {
      // Fetch models for the selected make, independent of year
      const allModels = new Set();
      Object.keys(data).forEach((year) => {
        if (data[year][value]) {
          Object.keys(data[year][value]).forEach((model) => {
            allModels.add(model);
          });
        }
      });
      setModels([...allModels]);
      setVariants([]);
    } else if (name === "model" && data) {
      // Fetch variants based on the selected model and make
      const allVariants = new Set();
      Object.keys(data).forEach((year) => {
        if (data[year][formData.make] && data[year][formData.make][value]) {
          Object.keys(data[year][formData.make][value]).forEach((variant) => {
            allVariants.add(variant);
          });
        }
      });
      setVariants([...allVariants]);
    }
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const [submissionMessage2, setSubmissionMessage2] = useState(""); // State for submission message

  const { year, make, model, variant } = useParams();

  useEffect(() => {
    // Fetch data using the URL parameters
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://backend.vanderengines.com/api/transmission/${year}/${make}/${model}`
        );
        console.log("Transmission Data:", response.data);
      } catch (error) {
        console.error("Error fetching engine data:", error);
      }
    };

    if (year && make && model) {
      fetchData();
    }
  }, [year, make, model]);
  // Handle form submission
  const handleSubmite = async (e) => {
    e.preventDefault();

    // Check for phone validation before submitting
    if (phoneError || !formData.phone) {
      alert("Invalid Number");
      return;
    }
    if (phoneError || formData.phone.trim() === "+1" || !formData.phone) {
      alert("Please enter a valid phone number.");
      return;
    }

    setLoading(true); // Start loading
    try {
      const response = await axios.post(
        "https://backend.vanderengines.com/api/leads",
        formData
      );
      console.log(response.data);

      setSubmissionMessage2("Form submitted successfully! Thank you.");
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
  const Homeform1 = () => {
    setFormData({ ...formData, agreed: "Homepage1" });
  };
  const content1 =
    "Looking for a top-notch car transmission without breaking the bank? You've come to the right place. The transmission is crucial—second only to the engine itself— and with our reliable options, you can avoid the hassle and expense of a brand-new one. A brand-new transmission might be expensive, but we have cost-effective alternative: high-quality used transmissions from trusted dealers across the country.";
  const content2 =
    "At Vander Engines, we make it easy for you to find the perfect transmission with our custom inventory. As a leading online resource for used transmissions, Vander Engines is dedicated to providing you with top-quality products at unbeatable prices. Trust us to help you keep your vehicle running smoothly without overspending.";
  const content3 =
    "At Vander Engines, finding the perfect used transmission has been easier with our mechanical team. Simply provide details about your vehicle—such as the brand, model, and year—and let our tool do the rest. Whether you’re looking for a transmission for a BMW, Honda, Chevy, or any other vehicle, Vander Engines has you covered. We offer both standard and automatic transmissions, ensuring you find the best deals on high-grade parts. With our user-friendly search tool, finding a reliable, affordable transmission takes just minutes.";
  const content4 =
    "Here’s how it works: Enter Your Vehicle Details: Fill out the fields with your car’s information and hit the search button. Get Results: Receive a curated list of high-quality transmission options from Vander Engines. Order with Ease: Select the transmission that fits your needs and budget, then provide your contact details. Our dealers will reach out to you within 24 hours to finalize your purchase.";

  return (
    <>
      <Helmet>
        <title>
          Vander Engines | Quality Used & Remanufactured Transmissions
        </title>
      </Helmet>
      {/*-------------------------Transmission- Hero-----------------------*/}
      {/* <div className="transmission-hero "></div> */}
      <div className="d-flex flex-column h-100 justify-content-end ">
        <Transmissionform
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          handleAddToCart={handleAddToCart}
          showproduct={showproduct}
        />
      </div>
      {/*---------------------------------contact-form-2----------------------------------*/}
      <div className="contact-form-2 my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 p-3">
              <div
                className="row align-items-center justify-content-between p-3"
                style={{ border: "1px solid #1eb7c6" }}
              >
                <div className="col-lg-3  text-center">
                  <div className="phone">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <p>Phone</p>
                    <p>+18448931760</p>
                  </div>
                  <div className="email">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <p>Email</p>
                    <p>billing@vanderengines.com</p>
                  </div>
                </div>
                <div className="col-lg-9">
                  <form className="form-start" onSubmit={handleSubmite}>
                    <div class="row mb-3">
                      <div class="col-6">
                        <label for="part" class="form-label">
                          <i class="fa-regular fa-handshake me-3"></i> Part
                        </label>

                        <select
                          className="form-select"
                          name="part"
                          value={formData.part}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>
                            Select part
                          </option>
                          <option value="Engine">Engine</option>
                          <option value="Transmission">Transmission</option>
                        </select>
                      </div>
                      <div class="col-6">
                        <label for="year" class="form-label">
                          <i class="fa-regular fa-calendar-days me-3"></i>
                          Year
                        </label>
                        <select
                          className="form-select"
                          name="year"
                          value={formData.year}
                          onChange={handleChange}
                          disabled={!years.length}
                          required
                        >
                          <option value="" disabled>
                            Select year
                          </option>
                          {years.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-6">
                        <label for="make" class="form-label">
                          <i class="fa-brands fa-magento me-3"></i>
                          Make
                        </label>
                        <select
                          className="form-select"
                          name="make"
                          value={formData.make}
                          onChange={handleChange}
                          disabled={!makes.length}
                          required
                        >
                          <option value="" disabled>
                            Select make
                          </option>
                          {makes.map((make) => (
                            <option key={make} value={make}>
                              {make}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div class="col-6">
                        <label for="modal" class="form-label">
                          <i class="fa-brands fa-bandcamp me-3"></i>
                          Modal
                        </label>
                        <select
                          className="form-select"
                          name="model"
                          value={formData.model}
                          onChange={handleChange}
                          disabled={!models.length}
                          required
                        >
                          <option value="" disabled>
                            Select model
                          </option>
                          {models.map((model) => (
                            <option key={model} value={model}>
                              {model}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-6">
                        <label for="name" class="form-label">
                          <i class="fa-regular fa-user me-3"></i>
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
                      <div class="col-6">
                        <label for="mobile" class="form-label">
                          <i class="fa-solid fa-phone-volume me-3"></i>
                          Mobile
                        </label>
                        <input
                          type="tel"
                          className={`form-control ${
                            phoneError ? "is-invalid" : ""
                          }`}
                          id="mobile"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter Mobile"
                          maxLength="12"
                          required
                        />
                        {phoneError && (
                          <div className="text-danger">{phoneError}</div>
                        )}
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-12">
                        <label for="email" class="form-label">
                          <i class="fa-solid fa-envelope-open-text me-3"></i>
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
                      <button
                        type="submit"
                        class="btn btn-block "
                        onClick={Homeform1}
                      >
                        Submit
                      </button>
                    </div>
                    <div>
                      {submissionMessage2 && (
                        <p className="text-success">{submissionMessage2}</p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*---------------------------------contact-form-2----------------------------------*/}

      {/*-------------------------Content of Transmission------------------------*/}
      <div className="transmission-content">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h5>
            Discover Affordable, High-Quality Car Transmissions with Vander
            Engines
          </h5>
        </div>
      </div>
      <div className="transmission-para mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <div className="card p-3">
                <ReadMore text={content1} />
              </div>
            </div>
            <div className="col-lg-3 mb-3">
              <div className="card p-3">
                <ReadMore text={content2} />
              </div>
            </div>
            <div className="col-lg-3 mb-3">
              <div className="card p-3">
                <ReadMore text={content3} />
              </div>
            </div>
            <div className="col-lg-3 mb-3">
              <div className="card p-3">
                <ReadMore text={content4} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-------------------------Search Transmission------------------------*/}
      <div className="search-transmission my-4 head1">
        <h3 className="text-center mb-3">
          Search Your <span>Transmission</span>
        </h3>
        <TransmissionList />
      </div>
    </>
  );
}
