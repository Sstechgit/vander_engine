import React, { useEffect, useState } from "react";
import axios from "axios";
export default function HomeForm() {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [part, setPart] = useState("");
  const [vehicles, setVehicles] = useState([]);
  const [years, setYears] = useState([]);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [parts, setParts] = useState([]);
  const [customPart, setCustomPart] = useState(""); // To handle custom part input
  // Modal States
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get("http://localhost:6010/api/cardata");
        setVehicles(response.data); // Assuming 'data' is the correct key in your response
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };
    fetchVehicles();
  }, []);

  useEffect(() => {
    const fetchYears = [...new Set(vehicles.map((vehicle) => vehicle.year))];
    setYears(fetchYears);
  }, [vehicles]);
  useEffect(() => {
    const fetchMakes = [
      ...new Set(
        vehicles
          .filter((vehicle) => vehicle.year === year)
          .map((vehicle) => vehicle.make)
      ),
    ];
    setMakes(fetchMakes);
    setMake(""); // Reset make
    setModel(""); // Reset model
  }, [year, vehicles]);

  useEffect(() => {
    const fetchModels = [
      ...new Set(
        vehicles
          .filter((vehicle) => vehicle.year === year && vehicle.make === make)
          .map((vehicle) => vehicle.model)
      ),
    ];
    setModels(fetchModels);
    setModel("");
    setPart("");
  }, [year, make, vehicles]);

  useEffect(() => {
    const fetchParts = async () => {
      try {
        const response = await axios.get("http://localhost:6010/api/carpart");
        setParts(response.data); // Assuming 'data' is the correct key in your response
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };
    fetchParts();
  }, []);

  const handlePartChange = (e) => {
    const selectedPart = e.target.value;
    setPart(selectedPart);
    if (selectedPart === "Enter Part") {
      setCustomPart(""); // Reset custom part input
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone } = formData;
    let formErrors = {};
    // Basic validation
    if (!name) formErrors.name = "Name is required";
    if (!email) formErrors.email = "Email is required";
    if (!phone) formErrors.phone = "Phone number is required";

    setErrors(formErrors);

    // If there are no errors, submit the form (or show a success message)
    if (Object.keys(formErrors).length === 0) {
      const emailContent = {
        year,
        make,
        model,
        part: part === "Enter Part" ? customPart : part, // Send custom part if "Enter Part" is selected
        ...formData,
      };
      console.log("Part selected:", emailContent.part); //
      try {
        const response = await fetch("http://localhost:6010/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailContent),
        });
        if (response.ok) {
          alert("Your message has been sent!");
          setShowModal(false); // Close modal on successful submission
          setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
          setErrors({
            name: "",
            email: "",
            phone: "",
          }); // Reset errors
        } else {
          alert("Something went wrong, please try again later.");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Error sending email. Please try again.");
      }
    }
  };
  // Show the modal when the submit button is clicked
  const openModal = () => {
    if (year && make && model && part) {
      setShowModal(true); // Open modal if all options are selected
    } else {
      alert("Please fill all vehicle fields before submitting.");
    }
  };
  return (
    <>
      <form
        action=""
        method="post"
        className="w-100 my-4 bg-light border rounded home-form"
      >
        <div className="row justify-content-center">
          {/* <!-- Year Dropdown --> */}
          <div className="col-lg-2 mb-2">
            <select
              className="form-select p-2"
              name="year"
              required
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="" disabled selected>
                Select Year
              </option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* <!-- Make Dropdown --> */}
          <div className="col-lg-2 mb-2">
            <select
              className="form-select p-2"
              name="make"
              required
              value={make}
              onChange={(e) => setMake(e.target.value)}
            >
              <option value="" disabled selected>
                Select Make
              </option>
              {makes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>

          {/* <!-- Model Dropdown --> */}
          <div className="col-lg-2 mb-2">
            <select
              className="form-select p-2"
              name="model"
              required
              value={model}
              onChange={(e) => setModel(e.target.value)}
            >
              <option value="" disabled selected>
                Select Model
              </option>
              {models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>

          {/* <!-- Part Dropdown --> */}

          <div className="col-lg-2 mb-2">
            <select
              className="form-select p-2"
              name="part"
              required
              value={part}
              onChange={handlePartChange}
              disabled={!year || !make || !model} // Disable until year, make, and model are selected
            >
              <option value="" disabled selected>
                Select Part
              </option>
              <option value="Enter Part">Enter Your Part</option>
              {parts.length > 0 ? (
                parts.map((part) => (
                  <option key={part.id} value={part.part}>
                    {part.part}
                  </option>
                ))
              ) : (
                <option value="" disabled>
                  No parts available
                </option>
              )}
            </select>
            {/* Show input field for "Enter Part" if selected */}
            {part === "Enter Part" && (
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Enter custom part"
                value={customPart}
                onChange={(e) => setCustomPart(e.target.value)}
              />
            )}
          </div>

          {/* <!-- Submit Button --> */}
          <div className="col-lg-2 mb-2">
            <button
              type="button"
              className="btn btn-warning w-100 p-2 "
              onClick={openModal}
            >
              Search
            </button>
          </div>
        </div>
      </form>
      {/* Modal */}
      {showModal && (
        <div
          className="modal show"
          style={{ display: "block" }}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content text-black">
              <div
                className="modal-header"
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  borderRadius: "0",
                }}
              >
                <h5 className="modal-title" id="exampleModalLabel">
                  Enter Your Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <div className="row">
                      <div className="col-lg-6 mb-2">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder=" Enter your name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          style={{
                            border: "none",
                            borderBottom: "1px solid #676161",
                            borderRadius: "0",
                          }}
                        />
                        {errors.name && (
                          <div className="text-danger">{errors.name}</div>
                        )}
                      </div>
                      <div className="col-lg-6 mb-2">
                        <input
                          type="email"
                          className="form-control"
                          placeholder=" Enter your email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          style={{
                            border: "none",
                            borderBottom: "1px solid #676161",
                            borderRadius: "0",
                          }}
                        />
                        {errors.email && (
                          <div className="text-danger">{errors.email}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="row">
                      <div className="col-lg-6 mb-2">
                        <input
                          type="text"
                          className="form-control  "
                          placeholder=" Enter your phone number"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          style={{
                            border: "none",
                            borderBottom: "1px solid #676161",
                            borderRadius: "0",
                          }}
                        />
                        {errors.phone && (
                          <div className="text-danger">{errors.phone}</div>
                        )}
                      </div>
                      <div className="col-lg-6 mb-2">
                        <textarea
                          className="form-control"
                          placeholder=" Enter your message"
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          style={{
                            border: "none",
                            borderBottom: "1px solid #676161",
                            borderRadius: "0",
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <style>
        {`
                .home-form{
                padding:30px 0px;
                }
                  @media (max-width: 576px) {
                .home-form{
                 padding:10px 0px;
                }
                }
                `}
      </style>
    </>
  );
}
