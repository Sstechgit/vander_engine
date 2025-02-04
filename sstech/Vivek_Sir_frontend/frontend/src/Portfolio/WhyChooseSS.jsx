import React from "react";

export default function WhyChooseSS() {
  const whychoose = [
    {
      imgSrc:
        "/asset/service-details-1.jpg",
      head: "Results-Oriented",
      para: "We focus on delivering measurable results through precise strategies and implementation.",
    },
    {
      imgSrc:
        "/asset/service-details-2.jpg",
      head: "Experienced Team",
      para: "Our team has extensive experience across various domains of digital marketing, ensuring that you get the best results.",
    },
    {
      imgSrc:
        "/asset/service-details-3.webp",
      head: "End-to-End Solutions",
      para: " From SEO to web development, we offer complete solutions for your digital marketing needs.",
    },
  ];

  return (
    <>
      <section className="whychoose02 my-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6" style={{ paddingRight: 0 }}>
              <img
                src="/asset/why-choose-01.jpg"
                alt="Why Choose SS"
                id="client03"
                style={{ paddingTop: "50px", height: "500px", width: "100%" }}
              />
            </div>
            <div
              className="col-lg-6 d-flex flex-column justify-content-center"
              style={{ background: "#3b6cb4" }}
            >
              <div className="sec-2">
                <div class="container">
                  <div class="section-title left mb-4 white">
                    <span class="sm-title">Why choose us</span>
                    <h2 class="h1 mb-0 text-white">
                      Why Choose SS Tech Services?
                    </h2>
                  </div>{" "}
                </div>
              </div>
              <div class="text-editor">
                <div class="container">
                  <p class="text-white ">
                    Tremendous involvement with power departure, land master
                    curement, liaisoning and working with state. An ideal mix of
                    worldwide experience and skill to additional our attention
                    on innovation.
                  </p>{" "}
                </div>
              </div>

              <div class="container">
                <div class="row">
                  {whychoose.map((item, index) => (
                    <div className="col-lg-4 mt-4" key={index}>
                      <div class="why-choose-icon">
                        <img
                          src={item.imgSrc}
                          alt=""
                          className=" mb-2 rounded-circle"
                          width={100}
                          height={100}
                          style={{ objectFit: "cover" }}
                        />
                        <h5 class="mb-0 display-28 text-white">{item.head}</h5>
                        <p className="text-white">{item.para}</p>
                      </div>
                    </div>
                  ))}
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
