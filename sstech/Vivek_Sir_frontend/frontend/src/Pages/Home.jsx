import React, { useEffect, useState } from "react";
import OurAcheivements from "./OurAcheivements";
import Counter from "./Counter";
import AboutUs from "./AboutUs";
import Services from "./Services";
import WhyChoose from "./WhyChoose";
import Form from "./Form";
import Information from "./Information";
import Popup from "./Popup";
import { Helmet } from "react-helmet";
import AOS from "aos";
import Home_form from "./Home_form";
import Specialization from "./Specialization";
import HomeModules from "./HomeModules";
import HomeJoine_us from "./HomeJoine_us";
import HomeCourse_Benefits from "./HomeCourse_Benefits";
import Expert from "./Expert";

export default function Home() {
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

  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);

  return (
    <>
      <Helmet>
        <title>Digital Marketing Agency In USA</title>
        <meta
          name="description"
          content="SS TECH Services is one of the best digital marketing agency in USA. We offer complete digital marketing solutions in United States."
        />
      </Helmet>

      {/* <Popup /> */}
      <section
      className="position-relative "
      style={{
        backgroundImage:
          "url(assets/bg-1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
       <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgb(67 60 57 / 97%)" }}
      ></div>
      

      <div className="home py-4 position-relative z-index-3">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 hero-main-text mb-3 txt-section">
              <h3 className="animate__animated animate__fadeInDown fw-bold text-white">
                {/* Target Right Audience */}
              </h3>
              <p>Boost Your Career With <span style={{color:"#ff9c00"}}> Future Skills Academy </span> </p>
                <h1 className="animate__animated animate__fadeInLeft hero-text  ">
                  100% Placement <span> Guranteed </span>
                  {" "}
                </h1>
                <div className="row justify-content-center bg-white border rounded mx-1 py-3" style={{boxShadow:"0 0 3px"}}>
                  <div className="col-6">
                    <div className="card card-1 d-flex flex-row align-items-center " style={{background:"none", border :"none"}}>
                      <img src="/asset/course-5.png" width={40} height={40} className=" border rounded-circle" />
                      <div className=" ">
                        <h6 style={{color:"#ff9c00"}}>
                          10.5 LPA
                        </h6>
                        <p> Highest Package </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                  <div className="card card-1 d-flex flex-row align-items-center " style={{background:"none", border :"none"}}>
                  <img src="/asset/course-4.webp" width={40} height={40} className="border rounded-circle"/>

                      <div className="">
                        <h6 style={{color:"#ff9c00"}}>
                          4.5 LPA
                        </h6>
                        <p> Average Package </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                  <div className="card card-1 d-flex flex-row align-items-center " style={{background:"none", border :"none"}}>
                  <img src="/asset/course-1.png" width={40} height={40} className="border rounded-circle"/>

                      <div className="">
                        <h6 style={{color:"#ff9c00"}}>
                          93%
                        </h6>
                        <p> Placement Rate </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                  <div className="card card-1 d-flex flex-row align-items-center " style={{background:"none", border :"none"}}>
                  <img src="/asset/course-3.webp" width={40} height={40} className="border rounded-circle"/>

                      <div className="">
                        <h6 style={{color:"#ff9c00"}}>
                          54%
                        </h6>
                        <p> Average Salary Increase </p>
                      </div>
                    </div>
                  </div>
                 <p className="text-black text-center"> Placement stats as per the internal 2025 report </p>
                </div>
            </div>
            <div className="col-lg-6 form-section">
              <Home_form />
            </div>
          </div>
        </div>
        {showModal && (
          <div className="modal-overlay" style={{ background: 'rgba(0, 0, 0, 0.8)' }}>
            <div className="modal-content">
              {/* Close icon at the top-right corner */}

              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                
              </button>

              <h3 className="text-black">Enter Your Details</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  name="fullName"
                  required
                  className="form-control mb-4 py-2"
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  name="email"
                  required
                  className="form-control mb-4 py-2"
                />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  name="phone"
                  required
                  className="form-control mb-4 py-2"
                />
                {/* <input
                  type="tel"
                  value={formData.confirmPhone}
                  onChange={handleChange}
                  placeholder="Confirm your phone number"
                  name="confirmPhone"
                  required
                  className="form-control mb-4 py-2"
                /> */}
                <input
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  name="address"
                  required
                  className="form-control mb-4 py-2"
                />
                {/* <div className="mb-2 form-check">
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
                    className="form-check-label text-secondary mb-2"
                    htmlFor="formConsent"
                  >
                    I agree to the terms and conditions
                  </label>
                </div> */}
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
        <style>
          {`
      .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8); /* Semi-transparent background */
  z-index: 9999; /* Ensure it's on top */
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  width: 50%;
  max-width: 500px;
  z-index: 10000; /* Ensure it's above the overlay */
  position: relative;
}      
      `}
        </style>
      </div>
      </section>
      <Counter />
      <AboutUs />
   
      <Specialization />
      <HomeModules />
      <HomeJoine_us />
      <HomeCourse_Benefits />
      
      <Services />
      <WhyChoose />
      <Expert/>
      <Form />
      <OurAcheivements />
      <Information />

    </>
  );
}
