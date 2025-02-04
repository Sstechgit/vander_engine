import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Home_form from "./Home_form";

const Contact = () => {
  return (
    <section
      className="position-relative py-5"
      style={{
        backgroundImage:
          "url(/asset/contactus-banner.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      ></div>
      <div className="container position-relative z-index-3">
        <div className="text-center mb-5">
          <h2 className="text-white fw-bold mb-4">Contact Us</h2>
          <p className="text-white">
            Our team is here to provide exceptional support and assistance, and
            we are always ready to help you. Whether you have questions about
            our products or services, need guidance on specific issues, or
            simply want to share your thoughts and feedback, we encourage you to
            reach out to us.{" "}
          </p>
        </div>

        <div className="row">
          {/* Contact Info */}
          <div className="col-md-6">
            <div className="contact-info">
              <div className="contact-info-item mb-4 d-flex">
                <div
                  className="contact-info-icon d-flex justify-content-center align-items-center rounded-circle bg-white"
                  style={{ width: "70px", height: "70px" }}
                >
                  <FaHome size={30} />
                </div>
                <div className="contact-info-content ms-3">
                  <h4 className="text-info fs-5 mb-1">Address</h4>

                  <p className="text-white">
                    15150 Cicero Avenue,
                    <br /> Oak Forest, <br />
                    IL 60452
                  </p>
                </div>
              </div>

              <div className="contact-info-item mb-4 d-flex">
                <div
                  className="contact-info-icon d-flex justify-content-center align-items-center rounded-circle bg-white"
                  style={{ width: "70px", height: "70px" }}
                >
                  <FaPhoneAlt size={30} />
                </div>
                <div className="contact-info-content ms-3">
                  <h4 className="text-info fs-5 mb-1">Phone</h4>
                  <p className="text-white">+16302425508</p>
                </div>
              </div>

              <div className="contact-info-item d-flex mb-4">
                <div
                  className="contact-info-icon d-flex justify-content-center align-items-center rounded-circle bg-white"
                  style={{ width: "70px", height: "70px" }}
                >
                  <FaEnvelope size={30} />
                </div>
                <div className="contact-info-content ms-3">
                  <h4 className="text-info fs-5 mb-1">Email</h4>
                  <p className="text-white">info@sstechservices.net</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <Home_form/>
            {/* <div className="contact-form bg-white p-4">
              <h2 className="fw-bold fs-2 mb-3">Send Message</h2>
              <form action="" id="contact-form">
                <div className="mb-3 position-relative">
                  <input type="text" required className="form-control border-0 border-bottom py-2" />
                  <span className="position-absolute start-0 top-0 text-muted" style={{ padding: '5px 0', fontSize: '16px', transition: '0.5s' }}>Full Name</span>
                </div>
                <div className="mb-3 position-relative">
                  <input type="email" required className="form-control border-0 border-bottom py-2" />
                  <span className="position-absolute start-0 top-0 text-muted" style={{ padding: '5px 0', fontSize: '16px', transition: '0.5s' }}>Email</span>
                </div>
                <div className="mb-3 position-relative">
                  <textarea required className="form-control border-0 border-bottom py-2" rows="4"></textarea>
                  <span className="position-absolute start-0 top-0 text-muted" style={{ padding: '5px 0', fontSize: '16px', transition: '0.5s' }}>Type your Message...</span>
                </div>
                <div className="mb-3">
                  <input type="submit" value="Send" className="btn btn-info w-100 text-white" />
                </div>
              </form>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
