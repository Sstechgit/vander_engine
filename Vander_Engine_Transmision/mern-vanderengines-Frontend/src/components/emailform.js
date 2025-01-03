import React, { useState } from "react";


const EmailForm = () => {
  const [popupData, setPopupData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    website: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [otpReceived, setOtpReceived] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPopupData({ ...popupData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (Object.values(popupData).some((field) => !field)) {
      alert("All fields are required!");
      return;
    }

    setLoading(true);
    setError(null); // Reset error state

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(popupData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email.");
      }

      setOtpReceived(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      // Clear form fields
      setPopupData({
        name: "",
        email: "",
        phone: "",
        service: "",
        website: "",
        message: "",
      });
    }
  };

  return (
    <div className="popup-form">
      <form onSubmit={handleSubmit}>
        <h3 className="title text-center">Popup Form</h3>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Name"
            value={popupData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={popupData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            className="form-control"
            placeholder="Enter Phone"
            value={popupData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="service"
            className="form-control"
            placeholder="Enter Service"
            value={popupData.service}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="url"
            name="website"
            className="form-control"
            placeholder="Enter Website Url"
            value={popupData.website}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            className="form-control"
            placeholder="Messages/Description"
            value={popupData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>

        {otpReceived && (
          <div className="otp-message text-white">
            OTP has been sent to your email!
          </div>
        )}
      </form>
    </div>
  );
};

export default EmailForm;
