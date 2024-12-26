import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TransmissionForm.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AchievementTransmission from "../Contact/AchievementTransmission";
import FindTransmission2 from "./FindTransmission2";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function EngineForm({
  handleAddToCart,
  showproduct,
  searchParams,
  setSearchParams,
}) {
  const [phoneError, setPhoneError] = useState("");
  const [years, setYears] = useState([]);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [variants, setVariants] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedVariant, setSelectedVariant] = useState("");
  const [transmissionData, setTransmissionData] = useState({});
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const { year, make, model, variant } = useParams();
  const [isFirstSubmit, setIsFirstSubmit] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  const navigate = useNavigate();

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
    axios
      .get("https://backend.vanderengines.com/api/transmission")
      .then((response) => {
        const data = response.data;
        setTransmissionData(data);

        const uniqueYears = Object.keys(data);
        setYears(uniqueYears.filter((year) => year).sort());
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (selectedYear) {
      const yearData = transmissionData[selectedYear];
      setMakes(Object.keys(yearData || {}).filter((make) => make));
      setModels([]);
      setVariants([]);
      setSelectedMake("");
      setSelectedModel("");
      setSelectedVariant("");
    }
  }, [selectedYear, transmissionData]);

  useEffect(() => {
    if (selectedYear && selectedMake) {
      const makeData = transmissionData[selectedYear][selectedMake];
      setModels(Object.keys(makeData || {}).filter((model) => model));
      setVariants([]);
      setSelectedModel("");
      setSelectedVariant("");
    }
  }, [selectedYear, selectedMake, transmissionData]);

  useEffect(() => {
    if (selectedYear && selectedMake && selectedModel) {
      const modelData =
        transmissionData[selectedYear][selectedMake][selectedModel];
      const variantOptions = Object.keys(modelData || {}).filter(
        (variant) => variant
      );
      setVariants([...variantOptions, "Display All"]);
      setSelectedVariant("");
    }
  }, [selectedYear, selectedMake, selectedModel, transmissionData]);

  const handleSearch = (e) => {
    e.preventDefault();

    // Ensure all required fields are selected
    if (!selectedYear || !selectedMake || !selectedModel || !selectedVariant) {
      alert("Please select all fields before searching.");
      return;
    }

     // Skip phone validation if we are already on the product page (or if we are not submitting the form)
     const path = `/transmission/${selectedYear}/${selectedMake}/${selectedModel}`;
     navigate(path);
  };

  const handlePhoneSubmit = async () => {
    const error = validatePhoneNumber(phoneNumber);
    if (error) {
      alert(error); // Show the validation error directly
      return;
    }

    if (phoneNumber.trim()) {
      setShowModal(false);

      // Check if the popup has been handled in this session
      const isPopupHandled = sessionStorage.getItem("hasSeenPopup");
      if (!isPopupHandled && isFirstSubmit) {
        await submitForm(); // Submit the form only the first time in this session
        sessionStorage.setItem("hasSeenPopup", "true"); // Mark the popup as handled for this session
        setIsFirstSubmit(false); // Mark as not the first submission
      }

      performSearch(); // Perform the search
    } else {
      alert("Please enter a valid phone number");
    }
  };

  const handlePhoneInputChange = (e) => {
    let value = e.target.value;

    // Ensure '+1' is always at the start
    if (!value.startsWith("+1")) {
      value = "+1" + value.replace(/[^0-9]/g, ""); // Re-add '+1' if missing and remove invalid characters
    } else {
      value = "+1" + value.slice(2).replace(/[^0-9]/g, ""); // Ensure only digits after '+1'
    }

    setPhoneNumber(value);
    setPhoneError(validatePhoneNumber(value)); // Update phoneError state dynamically
  };

  const performSearch = () => {
    let products = [];

    if (selectedVariant === "Display All") {
      Object.entries(
        transmissionData[selectedYear][selectedMake][selectedModel] || {}
      ).forEach(([variant, product]) => {
        if (product)
          products.push({
            ...product,
            year: selectedYear,
            make: selectedMake,
            model: selectedModel,
            variant,
          });
      });
    } else {
      const selectedProduct =
        transmissionData[selectedYear][selectedMake][selectedModel][
          selectedVariant
        ];
      if (selectedProduct)
        products.push({
          ...selectedProduct,
          year: selectedYear,
          make: selectedMake,
          model: selectedModel,
          variant: selectedVariant,
        });
    }

    products = products.map((product) => ({
      name: product.name || "N/A",
      Stock: product.Stock || "N/A",
      warranty: product.warranty || "N/A",
      tested_checked: product.tested_checked || "N/A",
      pricing: product.pricing || "N/A",
      image: product.image || "assets/img/default.jpg",
      miles: product.miles || "N/A",
      description: product.description || "N/A",
      variant: product.variant || "N/A",
      year: product.year || "N/A",
      make: product.make || "N/A",
      model: product.model || "N/A",
    }));

    setDisplayedProducts(products);
  };

  const submitForm = async () => {
    const formData = {
      part: "MyformTransmission",
      year: selectedYear,
      make: selectedMake,
      model: selectedModel,
      variant: selectedVariant,
      phone: phoneNumber,
    };

    try {
      const response = await axios.post(
        "https://backend.vanderengines.com/api/leads",
        formData
      );
    } catch (error) {}
  };

  const handleYearChange = (e) => {
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

    const year = e.target.value;
    setSelectedYear(year);
    setSelectedMake("");
    setSelectedModel("");
    setSelectedVariant("");
    setMakes([]);
    setModels([]);
    setVariants([]);
  };
  //--------------------------------------------
  $(document).ready(function () {
    $("#findtransmission").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 1000, // time in ms
      autoplayHoverPause: true,
      items: 1, // number of items to display
      dots: false, // disable dots
      nav: false, // disable navigation
      animateOut: "fadeOut", // smooth transition effect
      animateIn: "fadeIn", // smooth transition effect
    });
  });
  return (
    <div>
      <div className="transmission-upper d-flex flex-column">
        <div className="transmission-hero"></div>
        <div className="transmission-form text-white container">
          <div className="row">
            <div className="col-lg-6">
              <span className="me-3">Search Your Part Here</span>
            </div>
          </div>
          <form onSubmit={handleSearch}>
            <div className="row">
              {/* Form Inputs */}
              <div className="col-md-3 col-6 mb-3">
                <select
                  className="form-select"
                  value={selectedYear}
                  onChange={handleYearChange} // Use the new handler here
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
              <div className="col-md-3 col-6 mb-3">
                <select
                  className="form-select"
                  value={selectedMake}
                  onChange={(e) => setSelectedMake(e.target.value)}
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
              <div className="col-md-3 col-6 mb-3">
                <select
                  className="form-select"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
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
              <div className="col-md-3 col-6 mb-3">
                <select
                  className="form-select"
                  value={selectedVariant}
                  onChange={(e) => setSelectedVariant(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select a variant

                  </option>
                  {variants.map((variant) => (
                    <option key={variant} value={variant}>
                      {variant}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="modal-body col-md-6 px-3">
                <p className="modal-title" style={{ color: "black" }}>
                  Enter your Phone Number
                </p>
                <input
                  type="tel"
                  className={`form-control ${phoneError ? "is-invalid" : ""}`}
                  placeholder="Enter your phone number"
                  value={phoneNumber || "+1"} // Default to '+1'
                  onChange={handlePhoneInputChange}
                  required
                  maxLength="12" // Include '+1' in the length
                  style={{
                    border: "none",
                    borderRadius: "0",
                    borderBottom: "1px solid #cccdd1",
                  }}
                />

                {phoneError && <div className="text-danger">{phoneError}</div>}
              </div>
              <div className="col-md-4">
                <button
                  type="submit"
                  className="btn btn-block transmission-btn w-100 mt-4"
                  onClick={handlePhoneSubmit}
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Product Cards */}
      {displayedProducts.length > 0 ? (
        <div className="product-card-container">
          {displayedProducts.map((product, index) => (
            <div className="col-lg-3 mb-4" key={index}>
              <div className="card product-card mx-2">
                <img
                  src={product.image}
                  alt="Product"
                  className="img-fluid"
                  style={{ height: "200px" }}
                />
                <div className="card-info">
                  <h4>
                    {product.year} {product.make} {product.model} Transmisison
                  </h4>
                  <p>
                    <strong>Variant:</strong> {product.variant}
                  </p>
                  <p>
                    <strong>Stock:</strong> {product.Stock}
                  </p>
                  <p>
                    <strong>Warranty:</strong> {product.warranty}
                  </p>
                  <p>
                    <strong>Price:</strong> {product.pricing}
                  </p>
                  <p>
                    <strong>Miles:</strong> {product.miles}
                  </p>
                  <button
                    className="btn buy-now-btn"
                    onClick={() => {
                      handleAddToCart({
                        id: product.Stock,
                        name: `${product.year} ${product.make} ${product.model} Transmission`,
                        price: product.pricing,
                        model: product.model,
                        stockNumber: product.Stock,
                        variant: product.variant,
                        imageURL: product.image,
                        quantity: 1,
                      });
                      navigate("/addtocart");
                    }}
                  >
                    Buy Now
                  </button>

                  <button
                    className="add-to-cart-btn btn theme-btn"
                    onClick={() => {
                      Swal.fire({
                        title: "Item Added to Cart!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 2000,
                      });

                      handleAddToCart({
                        id: product.Stock,
                        name: `${product.year} ${product.make} ${product.model} Engine`,
                        price: product.pricing,
                        variant: product.variant,
                        stockNumber: product.Stock,
                        imageURL: product.image,
                        quantity: 1,
                      });
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p></p>
      )}
      {/* Modal for Phone Number */}
      {showModal && (
        <div
          className="modal"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog h-100 d-flex align-items-center">
            <div className="modal-content">
              <div className="modal-header justify-content-between">
                <h5 className="modal-title">Enter your Phone Number</h5>
              </div>
              <div className="modal-body">
                <input
                  type="tel"
                  className={`form-control ${phoneError ? "is-invalid" : ""}`}
                  placeholder="Enter your phone number"
                  value={phoneNumber || "+1"} // Default to '+1'
                  onChange={handlePhoneInputChange}
                  required
                  maxLength="12" // Include '+1' in the length
                />

                {phoneError && <div className="text-danger">{phoneError}</div>}
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button
                  type="button"
                  className="btn theme-btn"
                  onClick={handlePhoneSubmit}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/*-------------------------Find Transmission------------------------*/}
      <div className="find-transmission">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center ">
              <h4 className="">
                Find Your <span>Transmission </span>
              </h4>
              <FindTransmission2 />
            </div>
            <div className="col-lg-6">
              <img
                src="/assets/trans-2.jpg"
                alt=""
                className="img-fluid"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic"
              />
              <div className="col-lg-12">
                <div className="card">
                  <a
                    href="tel:+18448931760"
                    target="_self"
                    aria-label="call us now"
                  >
                    <i class="fa-solid fa-phone"></i>
                  </a>
                  <div className="card-body">
                    <div className="card-title">
                      <h6>SPEAK WITH A SPECIALIST NOW</h6>
                      <h6 className="fs-4 text-center">+1 8448931760</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-------------------------Achievements------------------------*/}
      <AchievementTransmission />
      {/*-------------------------About used Transmission------------------------*/}
      {/* Show the introductory text first */}
      {displayedProducts.length === 0 ? (
        <div className="find-transmission-head mt-3 head1">
          <h3 className="text-center">
            About Our Used <span>Transmissions</span>{" "}
          </h3>

          <div className="find-transmission mb-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="find-transmission__content">
                    Vander Engines Transmissions provides you the high quality
                    used & remanufactured Transmissions. Vander Engines
                    Transmissions is one of the most trusted supplier of the
                    used transmissions in the United States and around the
                    world. We have wide range of second hand transmissions at
                    our yards, you can find second hand motors for every make
                    and model. Our transmissions are highly tested and inspected
                    before we deliver it to you. Vander engines transmissions
                    provide you used transmissions at an affordable price. We
                    also offer you upto 5 years warranty on our used
                    transmissions. Our range includes remanufactured
                    transmissions for brands like BMW, Ford, GMC, Nissan, Acura,
                    Audi, Dodge, Hyundai, Honda, Kia, Jeep, Bentley, and many
                    more.
                  </div>
                  <Link to="/transmission">
                    <button className="btn theme-btn my-3">
                      Discover More &#8594;
                    </button>
                  </Link>
                </div>
                <div className="col-lg-6">
                  <div
                    className="find-transmission__img owl-carousel"
                    id="findtransmission"
                  >
                    <img src="/assets/find-transmission-1.jpg" alt="" />
                    <img src="/assets/find-transmission-2.jpg" alt="" />
                    <img src="/assets/find-transmission-3.jpg" alt="" />
                    <img src="/assets/find-transmission-4.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="find-transmission mt-3">
          <h4 className="text-center">
            About Our Used {displayedProducts[0].year}{" "}
            {displayedProducts[0].make} <span> Transmission</span>
          </h4>

          <div className="find-transmission ">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="find-transmission__content">
                    <p>
                      Find high quality
                      <span className="text-black fw-bold">
                        {" "}
                        {displayedProducts[0].year} {displayedProducts[0].make}{" "}
                        {displayedProducts[0].model} Transmission{" "}
                      </span>
                      AT Vander Engines Transmissions we have top quality used{" "}
                      <span className="text-black fw-bold">
                        {" "}
                        {displayedProducts[0].make} {displayedProducts[0].model}{" "}
                        transmission for {displayedProducts[0].year} variants
                      </span>{" "}
                      All the used transmissions that we sell are highly tested
                      and inspected before we deliver it to you. At Vander
                      Engines Transmissions we also offer you 1 year warranty at
                      no extra cost. Vander Engines Transmissions team offer you
                      24x7 support. We make sure to provide you with high
                      performing transmissions for
                      <span className="text-black fw-bold">
                        {" "}
                        {displayedProducts[0].make} {displayedProducts[0].model}{" "}
                        {displayedProducts[0].year} .
                      </span>
                      We take pride in improving your online buying experience
                      at Vander Engines Transmissions.
                    </p>
                  </div>
                  <Link to="/engine">
                    <button className="btn theme-btn my-3">
                      Discover More &#8594;
                    </button>
                  </Link>
                </div>
                <div className="col-lg-6">
                  <div
                    className="find-transmission__img owl-carousel"
                    id="findtransmission"
                  >
                    <img
                      src="/assets/find-transmission-1.jpg"
                      alt=""
                      style={{ width: "80%" }}
                    />
                    <img
                      src="/assets/find-transmission-2.jpg"
                      alt=""
                      style={{ width: "80%" }}
                    />
                    <img
                      src="/assets/find-transmission-3.jpg"
                      alt=""
                      style={{ width: "80%" }}
                    />
                    <img
                      src="/assets/find-transmission-4.webp"
                      alt=""
                      style={{ width: "80%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}{" "}
    </div>
  );
}
