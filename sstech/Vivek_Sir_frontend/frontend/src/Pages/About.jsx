import React from "react";
import Form from "./Form";

const About = () => {
  return (
    <>
      <div
        className="about d-flex align-items-center justify-content-center fs-1 text-white"
        style={{
          background: "url(/asset/About-Us-1920x715-1.jpg)",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      >
        <h2>About Us</h2>
      </div>
      <section className="about-section pt-4">
        <div className="container">
          <div className="row align-items-center">
            {/* Content Column */}
            <div className="col-md-6 col-sm-12">
              <div className="inner-column">
                <div className="sec-title mb-4">
                  <div className="title fw-bold text-center fs-1">About Us</div>
                  <h2>
                    Digital Marketing <br />
                    Agency
                  </h2>
                </div>
                <div className="text text-muted mb-4">
                  Future Skills Academy is a leading digital marketing agency,
                  providing innovative solutions since 2018. We specialize in
                  crafting tailored digital strategies to help businesses
                  achieve success. Trusted by clients across the US, we focus on
                  driving high-quality leads, improving ROI, and meeting
                  business goals. Our experienced team uses cutting-edge
                  strategies and technologies to boost brand visibility, drive
                  targeted traffic, and maximize conversions, delivering results
                  that exceed expectations.
                </div>
                <div className="email mb-5 fw-medium">
                  Request Quote:{" "}
                  <span className="theme_color">info@futureskillsacademy.in</span>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="col-md-6 col-sm-12">
              <div
                className="inner-column position-relative"
                style={{ padding: "40px 40px 0px 0px", marginLeft: "50px" }}
              >
                <div className="image position-relative">
                  <img
                    src="/asset/about-image.png"
                    alt="About Us"
                    className="img-fluid"
                  />
                  <div
                    className="overlay-box position-absolute"
                    style={{ left: "40px", bottom: "48px" }}
                  >
                    <div
                      className="year-box position-relative"
                      style={{
                        color: "#252525",
                        fontSize: "24px",
                        fontWeight: "700",
                        lineHeight: "1.4em",
                        paddingLeft: "125px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Form />
      <style>
        {`
            .about {
        height: 320px;
    }
    @media screen and (max-width: 576px) {
        .about {
            height: 200px;
        }
    }
        `}
      </style>
    </>
  );
};

export default About;
