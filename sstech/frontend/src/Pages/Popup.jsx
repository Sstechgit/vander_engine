import React, { useEffect, useState } from "react";
import "./Popup.css";


export default function Popup() {
  const [visible, setVisible] = useState(false);
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

  // Show the popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    },5000); // 5 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);
  const handleClose = () => {
    setVisible(false);
  };

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
      const response = await fetch("http://localhost:3000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Use JSON header
        },
        body: JSON.stringify(popupData), // Send data as JSON
      });
  
      if (!response.ok) {
        throw new Error("Failed to send email.");
      }
  
      const result = await response.json();
      if (result.status === "success") {
        setOtpReceived(true);
      } else {
        throw new Error(result.message);
      }
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
  

  if (!visible) {
    return null;
  }

  return (
    <div className="Main-pop animate__animated animate__zoomIn">
      <div className="popup">
        <i
          className="fa-solid fa-xmark float-end cross"
          id="close-pop"
          onClick={handleClose}
        ></i>
        <div className="container">
          <div className="row">
            <div className="col-lg-5"></div>
            <div className="col-lg-7">
              <div className="popup-form">
                <form onSubmit={handleSubmit}>
                  <h3 className="title text-center fw-bold fs-2">Get Free <span style={{color:"#3b6cb4"}}>Site Audit</span> </h3>
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
                  <button
                    type="submit"
                    className="btn btn-success"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>

                  {otpReceived && (
                    <div className="otp-message text-success" name="otpmessage">
                      OTP has been sent to your email!
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
