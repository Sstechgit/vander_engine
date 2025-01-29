import React, { useEffect, useState } from "react";
import styles from "./Coursesbanner.module.css";

const CourseSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    confirmPhone: "",
    address: "",
    consent: false,
  });

  const [formStatus, setFormStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Download PDF Logic
  const handleDownloadPdf = () => {
    const link = document.createElement("a");
    link.href = "/asset/Brochure.pdf";
    link.download = "Brochure.pdf";
    link.click();
  };

  // Prevent page scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission (for both modal and form)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate phone numbers match
    if (formData.phone !== formData.confirmPhone) {
      setFormStatus("Phone numbers do not match!");
      setIsLoading(false);
      return;
    }

    try {
      // Send data to backend API
      const response = await fetch("https://newbackend.sstechservices.net/api/Course_Form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus("Form submitted successfully!");

        // Reset form after successful submission
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          confirmPhone: "",
          address: "",
          consent: false,
        });

        // Close modal after successful submission
        if (showModal) {
          setShowModal(false);
        }

        // Trigger PDF download after successful submission
        handleDownloadPdf();
      } else {
        setFormStatus(result.message || "An error occurred!");
      }
    } catch (error) {
      setFormStatus("Failed to submit form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`container-fluid ${styles.courseSection}`}
      id="coursebanner"
    >
      <div>
        <button
          className="btn float-end btn-lg mt-3 text-white"
          onClick={() => setShowModal(true)}
          style={{background:"#ff9c00"}}
        >
          Download Brochure
        </button>
      </div>
      <div className={`${styles.row} row d-flex align-items-center w-100 justify-content-center`}>
        {/* Left Side - Content */}
        <div className="col-md-5 d-flex flex-column justify-content-center align-items-center">
          <h1 className={styles.title}>Advanced Digital Marketing Course</h1>
          {/* <img
            src="../asset/cousres.png"
            alt="Amazon"
            className={styles.brandLogo}
          /> */}
          <p className={styles.subTitle}>
            5+ Capstone Projects | 6 Months Training | 100% Job Placement
            Guarantee
          </p>
          <p className={styles.description}>
            India's first and only Digital Marketing Institute to provide Amazon
            ATES training to students.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="col-md-6">
          <div className={styles.topform}>
            <div className={styles.form}>
              <h3 className={styles.formHeading}>Get 100% Job Guarantee Now</h3>
              <p className={styles.formSubtext}>
                Limited Time Offer. Apply Now!
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="formName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formName"
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    name="fullName"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="formEmail" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="formEmail"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="formPhone" className="form-label">
                    Mobile Number
                  </label>
                  <div className="d-flex">
                    <select
                      className="form-select me-2"
                      style={{ maxWidth: "80px" }}
                      value={formData.phone}
                      onChange={handleChange}
                      name="phone"
                      required
                    >
                      <option>+91</option>
                      <option>+1</option>
                      <option>+44</option>
                    </select>
                    <input
                      type="tel"
                      className="form-control"
                      id="formPhone"
                      placeholder="Enter your number"
                      value={formData.phone}
                      onChange={handleChange}
                      name="phone"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="formConfirmPhone" className="form-label">
                    Confirm Mobile Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="formConfirmPhone"
                    placeholder="Confirm your number"
                    value={formData.confirmPhone}
                    onChange={handleChange}
                    name="confirmPhone"
                    required
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="formConsent"
                    checked={formData.consent}
                    onChange={handleChange}
                    name="consent"
                    required
                  />
                  <label
                    className="form-check-label text-secondary"
                    htmlFor="formConsent"
                  >
                    I authorize SsTech and its representatives to contact me via
                    Call, SMS, Email or WhatsApp.
                  </label>
                </div>
                <button
                  type="submit"
                  className={`btn w-100 ${styles.submitButton}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div
                      className="spinner-border text-light spinner-border-sm"
                      role="status"
                    ></div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
              {formStatus && <p className={styles.formStatus}>{formStatus}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Download Brochure */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            {/* Close icon at the top-right corner */}

            <button
              type="button"
              className="btn-close"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              X
            </button>

            <h3 className="">Enter Your Details</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                name="fullName"
                required
                className="form-control mb-3"
              />
              <input
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                name="email"
                required
                className="form-control mb-3"
              />
              <input
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                name="phone"
                required
                className="form-control mb-3"
              />
              <input
                type="tel"
                value={formData.confirmPhone}
                onChange={handleChange}
                placeholder="Confirm your phone number"
                name="confirmPhone"
                required
                className="form-control mb-3"
              />
              <input
                type="text"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                name="address"
                required
                className="form-control mb-2"
              />
              <div className="mb-2 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="formConsent"
                  checked={formData.consent}
                  onChange={handleChange}
                  name="consent"
                  required
                />
                <label
                  className="form-check-label text-secondary"
                  htmlFor="formConsent"
                >
                  I agree to the terms and conditions
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-warning w-100"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div
                    className="spinner-border text-light spinner-border-sm"
                    role="status"
                  ></div>
                ) : (
                  "Submit & Download"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseSection;
