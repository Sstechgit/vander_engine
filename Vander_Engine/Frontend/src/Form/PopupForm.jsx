import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./popup.css";
export default function PopupForm() {
  const [visible, setVisible] = useState(false);
  const [popupData, setPopupData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [otpReceived, setOtpReceived] = useState(false);
  const [error, setError] = useState(null);

  // Show the popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000); // 5 seconds delay

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
      const response = await fetch(
        "https://sstechservices.net/send_popup_data.php",
        {
          // Update with your PHP file
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded", // Set the correct header
          },
          body: new URLSearchParams(popupData), // Use URLSearchParams to format the data
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send email.");
      }

      const result = await response.json();
      if (result.status === "success") {
        setOtpReceived(true);
        navigate("/thankyou");
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
        message: "",
        otpmessage: "",
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
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img
                src="/assets/sale.png"
                alt=""
                className="img-fluid"
                width={200}
              />
              <div className="alltext text-warning text-center">
                <h3 className="mb-3">Get Discount Up to</h3>
                <h4 className="mb-3 fs-1">50 % OFF</h4>
                <h5 className="mb-3">ON CAR PARTS</h5>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="popup-form">
                <form onSubmit={handleSubmit}>
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
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Type here Model/Part/Make/Year/VIN etc."
                      value={popupData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn"
                    disabled={loading}
                    style={{ background: "#1eb7c6" , color:"#fff"}}
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
