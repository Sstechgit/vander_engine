import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Seller_parts({ part, closeModal }) {
  const [year, setYear] = useState([]);
  const [make, setMake] = useState([]);
  const [model, setModel] = useState([]);
  const [modaldata, setModalData] = useState([]);
  const [years, setYears] = useState([]);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [phone, setPhone] = useState([]);
  const [selectedPart, setSelectedPart] = useState(part?.head || "");
  const [partList, setPartList] = useState([]);
  const [errors, setErrors] = useState({
    year: "",
    make: "",
    model: "",
    phone: "",
  });
  // Fetch part data (if not already available)
  useEffect(() => {
    const fetchPartList = async () => {
      try {
        const response = await axios.get("http://localhost:6010/api/carpart");
        setPartList(response.data); // Assuming response.data is an array of parts
      } catch (error) {
        console.error("Error fetching parts:", error);
      }
    };
    fetchPartList(); // Fetch only if partList is empty
  }, []);

  const handlePartChange = (e) => {
    setSelectedPart(e.target.value);
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
  useEffect(() => {
    const fetchmodalpart = async () => {
      try {
        const response = await axios.get("http://localhost:6010/api/carpart");
        setPartList(response.data); // Assuming 'data' is the correct key in your response
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };
    fetchmodalpart();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};
    // Validate the form fields
    if (!year || !make || !model || !phone)
      formErrors.modaldata = "all fields are required";
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      const emailContent = {
        year,
        make,
        model,
        part: selectedPart, // Send custom part if "Enter Part" is selected
        phone,
      };

      console.log("Part selected:", emailContent); //

      try {
        const response = await fetch(
          "http://localhost:6010/api/send-parts-email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(emailContent),
          }
        );

        if (response.ok) {
       closeModal();
        } else {
          alert("Something went wrong, please try again later.");
        }
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
  };

  return (
    <>
      <div>
        <h4>Selected Part: <span className="text-success fw-bold text-decoration-underline">{selectedPart}</span></h4>
        <p>Save up to 30% off product list price</p>
        <form onSubmit={handleSubmit}>
          {errors.modaldata && (
            <small className="text-danger">{errors.modaldata}</small>
          )}
          <div className="form-group">
            <select
              id="part"
              className="form-select text-success fw-bold"
              name="part"
              value={selectedPart}
              onChange={handlePartChange}
               
            >
              <option value="">{selectedPart}</option>
              {partList.map((partItem) => (
                <option key={partItem.id} value={partItem.part}>
                  {partItem.part}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <select
              id="year"
              className="form-select"
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            >
              <option>Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
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
            </select>
          </div>

          <div className="form-group">
            <select
              id="model"
              className="form-select"
              name="model"
              required
              value={model}
              onChange={(e) => setModel(e.target.value)}
            >
              <option>Select Model</option>
              {models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <input
              type="tel"
              id="no"
              className="form-control"
              name="no"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              pattern="^[0-9]{10}$"
              placeholder="Enter Your Number"
              title="Please enter a valid mobile number (e.g., +1234567890)"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
