import React, { useState } from "react";

import "./JobDetailPage.css"; // Custom CSS for styling

const JobForm = ({ title }) => {
  const [formData, setFormData] = useState({
    title: title,
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    city: "",
    state: "",
    country: "",
    experience: "",
    relevantExperience: "",
    currentSalary: "",
    expectedSalary: "",
    noticePeriod: "",
    resume: null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSubmit = new FormData();
    for (const key in formData) {
      formDataToSubmit.append(key, formData[key]);
    }

    try {
      const response = await fetch(
        "https://newbackend.sstechservices.net/api/users",
        {
          method: "POST",
          body: formDataToSubmit,
        }
      );
      console.log(formData);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);
      alert("Form submitted successfully!");
      setFormData({
        title: title,
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        city: "",
        state: "",
        country: "",
        experience: "",
        relevantExperience: "",
        currentSalary: "",
        expectedSalary: "",
        noticePeriod: "",
        resume: null,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="responsive-form" onSubmit={handleSubmit}>
      <h2>Application Form</h2>
      {loading && <div className="loader">Submitting...</div>}{" "}
      {/* Loader component */}
      <div className="form-group">
        <label>
          Title: <span>*</span>{" "}
        </label>
        <input type="text" name="title" required value={title} />
      </div>
      <div className="form-group">
        <label>
          First Name: <span>*</span>{" "}
        </label>
        <input
          type="text"
          name="firstName"
          required
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>
          Last Name: <span>*</span>{" "}
        </label>
        <input
          type="text"
          name="lastName"
          required
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>
          Email: <span>*</span>{" "}
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>
          Mobile No: <span>*</span>{" "}
        </label>
        <input
          type="tel"
          name="mobile"
          required
          value={formData.mobile}
          onChange={handleChange}
        />
      </div>
      <h3>Address Information</h3>
      <div className="form-group">
        <label>
          City: <span>*</span>{" "}
        </label>
        <input
          type="text"
          name="city"
          required
          value={formData.city}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>
          State: <span>*</span>{" "}
        </label>
        <input
          type="text"
          name="state"
          required
          value={formData.state}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>
          Country: <span>*</span>{" "}
        </label>
        <input
          type="text"
          name="country"
          required
          value={formData.country}
          onChange={handleChange}
        />
      </div>
      <h3>Professional Details</h3>
      <div className="form-group">
        <label>
          Experience (Years): <span>*</span>{" "}
        </label>
        <input
          type="number"
          name="experience"
          required
          value={formData.experience}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>
          Relevant Experience: <span>*</span>{" "}
        </label>
        <input
          type="number"
          name="relevantExperience"
          required
          value={formData.relevantExperience}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>
          Current Salary: <span>*</span>{" "}
        </label>
        <input
          type="number"
          name="currentSalary"
          required
          value={formData.currentSalary}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>
          Expected Salary: <span>*</span>{" "}
        </label>
        <input
          type="number"
          name="expectedSalary"
          required
          value={formData.expectedSalary}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>
          Notice Period: <span>*</span>{" "}
        </label>
        <input
          type="text"
          name="noticePeriod"
          required
          value={formData.noticePeriod}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>
          Attach Resume: <span>*</span>{" "}
        </label>
        <input type="file" name="resume" required onChange={handleChange} />
      </div>
      <button type="submit" className="job-btn">
        {loading ? (
          <span>
            <i className="fa fa-spinner fa-spin"></i> Submitting...
          </span>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default JobForm;
