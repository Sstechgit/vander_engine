import React from "react";
export default function AboutUs() {
  return (
    <div className="my-2 about-sec p-2">
      <div className="container text-center">
        <h2 className="fw-bold mb-4 fs-1 text About">About SS Tech</h2>
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 text-center p-3 mb-5 mt-4">
            <h3 style={{ color: "#0f5a6c" }}> Digital Marketing Agency</h3>
            <p className="text- text-secondary mt-4">
              SS tech Services stands out in the field of digital marketing that
              provides best digital marketing services. It stands as a beacon of
              innovation and excellence in the realm of digital marketing. We
              are serving as a digital marketing company since 2018. As a
              pioneering marketing agency, we are specialized in crafting
              tailored digital marketing solutions that helps your business to
              achieve new heights of success. SS tech services is one of the
              trusted online marketing agency. We are one of the advertising
              company that focus on the client’s business goal. Our dedicated
              team help our clients to generate high quality converting leads
              and improve their ROI. At SS Tech Services, we understand that
              every client is unique, with distinct goals and aspirations. With
              this in mind, our team of seasoned experts harnesses the power of
              cutting-edge strategies and technologies to deliver results that
              surpass expectations. Whether it’s enhancing brand visibility,
              driving targeted traffic, or maximizing conversions, we deploy a
              comprehensive suite of services to achieve unparalleled outcomes.
            </p>
          </div>

          <div className="col-lg-6">
            <img
              src="/assets/about_us.webp"
              alt=""
              id="about_img"
              width={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
