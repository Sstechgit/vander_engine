import React, { useEffect } from "react";
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

export default function Home() {
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
      <div className="home py-4">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 hero-main-text mb-3 txt-section">
              <h3 className="animate__animated animate__fadeInDown fw-bold ">
                Target Right Audience
              </h3>
              <h1 className="animate__animated animate__fadeInLeft fw-bold hero-text ">
                Choose Right <span> Digital Marketing </span>
                Agency{" "}
              </h1>

              <button className="btn text-center my-2  get fw-medium">
                <a href="#MainForm">Get Free Site Audit</a>
              </button>
            </div>
            <div className="col-lg-6 form-section">
              <Home_form/>
              {/* <img
                src="/asset/hero-1.jpg"
                alt=""
                className="img-fluid"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <Counter />
      <OurAcheivements />
      <AboutUs />
      <Services />
      <WhyChoose />
      <Form />
      <Information />
    </>
  );
}
