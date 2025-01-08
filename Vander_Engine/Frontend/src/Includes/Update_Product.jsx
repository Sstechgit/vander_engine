import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Update_Product() {
  const [formData, setFormData] = useState({
    part: "",
    year: "",
    make: "",
    model: "",
    variant: "",
    name: "",
    pricing: "",
    miles: "",
    tested_checked: "",
    warranty: "",
    shipping: "",
    image: null,
    stock: "",
    description: "",
    product_id: "",
  });

  const [years, setYears] = useState([]);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [variants, setVariants] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Ref for file input
  const fileInputRef = useRef(null);

  // Fetch data based on selected part
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
          const allMakes = new Set();
          Object.keys(response.data).forEach((year) => {
            Object.keys(response.data[year]).forEach((make) => {
              allMakes.add(make);
            });
          });

          setMakes([...allMakes]);
          setYears(Object.keys(response.data));
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [formData.part]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Update dropdowns based on selections
    if (name === "make" && data) {
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Log formData to check its values
    console.log("Form Data to Submit:", formData);

    // Validate required fields
    if (
      !formData.year ||
      !formData.make ||
      !formData.model ||
      !formData.variant
    ) {
      alert("Year, Make, Model, and Variant are required.");
      setLoading(false);
      return;
    }

    // Validate other fields
    if (!formData.name || !formData.pricing || !formData.stock) {
      alert("Name, Pricing, and Stock are required.");
      setLoading(false);
      return;
    }

    // Ensure pricing and stock are valid numbers
    if (isNaN(formData.pricing) || isNaN(formData.stock)) {
      alert("Pricing and Stock should be numeric values.");
      setLoading(false);
      return;
    }

    // Ensure the image is uploaded if required
    if (!formData.image) {
      alert("Please upload an image.");
      setLoading(false);
      return;
    }

    const form = new FormData();
    for (const key in formData) {
      if (formData[key]) {
        form.append(key, formData[key]);
      }
    }

    const apiURL =
      formData.part === "Engine"
        ? "https://backend.vanderengines.com/api/engines"
        : "https://backend.vanderengines.com/api/transmission";

    console.log("Form Data being sent:", form); // Log FormData to verify it's correct

    try {
      const response = await axios.post(apiURL, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Response from API:", response.data);

      if (response.status === 200) {
        // Reset form data to clear all fields
        setFormData({
          part: "",
          year: "",
          make: "",
          model: "",
          variant: "",
          name: "",
          pricing: "",
          miles: "",
          tested_checked: "",
          warranty: "",
          shipping: "",
          image: null,
          stock: "",
          description: "",
          product_id: "",
        });

        // Reset the file input manually
        fileInputRef.current.value = null;
      } else {
        console.error("Unexpected API response:", response);
        alert("There was an issue submitting the form.");
      }
    } catch (error) {
      console.error(
        "Error details:",
        error.response ? error.response.data : error.message
      );
      alert("There was an error submitting the form!");
    } finally {
      setLoading(false); // Ensure loading state is cleared regardless of outcome
    }
  };

  return (
    <div
      className="update_product py-3 mb-3"
      style={{ background: "rgb(238, 238, 238)" }}
    >
      <div className="container">
        <h1 className="text-center mb-4 fw-bold" style={{ color: "#1eb7c6" }}>
          Update Product
        </h1>
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-7 mb-4">
            <form
              className="border p-4 border-info bg-white"
              onSubmit={handleSubmit}
            >
              {/* Part, Year, Make, and Model Fields */}
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <select
                      className="form-select"
                      name="part"
                      value={formData.part}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Part</option>
                      <option value="Engine">Engine</option>
                      <option value="Transmission">Transmission</option>
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <select
                      className="form-select"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Year</option>
                      {years.map((year, index) => (
                        <option key={index} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <select
                      className="form-select"
                      name="make"
                      value={formData.make}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Make</option>
                      {makes.map((make, index) => (
                        <option key={index} value={make}>
                          {make}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <select
                      className="form-select"
                      name="model"
                      value={formData.model}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Model</option>
                      {models.map((model, index) => (
                        <option key={index} value={model}>
                          {model}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Variant, Name, Pricing, Miles, and other Fields */}
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      name="variant"
                      value={formData.variant}
                      onChange={handleChange}
                      placeholder="Enter Variant"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Name"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      name="pricing"
                      value={formData.pricing}
                      onChange={handleChange}
                      placeholder="Enter Price"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      name="miles"
                      value={formData.miles}
                      onChange={handleChange}
                      placeholder="Enter Miles"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              {/* Other Fields like tested_checked, warranty, shipping, image, stock */}
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <select
                      className="form-select"
                      name="tested_checked"
                      value={formData.tested_checked}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Tested & Checked</option>
                      <option value="tested">100% tested & checked</option>
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <select
                      className="form-select"
                      name="warranty"
                      value={formData.warranty}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Warranty</option>
                      <option value="1 Year">Up To 1 Year Warranty</option>
                      <option value="2 to 3 Years">
                        Up To 2 to 3 Years Warranty
                      </option>
                      <option value="3 to 4 Years">
                        Up To 3 to 4 Years Warranty
                      </option>
                      <option value="4 to 5 Years">
                        Up To 4 to 5 Years Warranty
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <select
                      className="form-select"
                      name="shipping"
                      value={formData.shipping}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Shipping</option>
                      <option value="shipping">Free Shipping</option>
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="file"
                      name="image"
                      ref={fileInputRef}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      name="stock"
                      value={formData.stock}
                      onChange={handleChange}
                      placeholder="Enter Stock No."
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      name="product_id"
                      value={formData.product_id}
                      onChange={handleChange}
                      placeholder="Enter product_id"
                      className="form-control"
                    />
                  </div>
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
          <div className="col-lg-5 d-contents">
            <img src="/assets/add2.svg" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <style>
        {`
          .update_product .form-control, .update_product .form-select {
              border: none;
              border-bottom: 1px solid #1eb7c6;
              border-radius: 0;
          }
          input:-internal-autofill-selected{
              background:none !important;
          }
        `}
      </style>
    </div>
  );
}
