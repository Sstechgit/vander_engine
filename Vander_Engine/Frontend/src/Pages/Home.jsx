import React from "react";
import OurAcheivements from "./OurAcheivements";
import Counter from "./Counter";
import AboutUs from "./AboutUs";
import Services from "./Services";
import WhyChoose from "./WhyChoose";
import Form from "./Form";
import Information from "./Information";
export default function Home() {
  return (
    <div className="home">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="assets/carousel-1.webp" class="d-block w-100" alt="..." />
            <div class=" carousel-content text-dark col-5">
              <h3 className="animate__animated animate__fadeInDown fw-bold">
                Grow Your Business
              </h3>
              <h1 className="animate__animated animate__fadeInLeft main fw-bold">
                A <span>Leading Digital Marketing</span> <br />
                Agency{" "}
              </h1>

              <button className="btn btn-outline-dark text-center my-2 fw-bold get">
                Get A Proposal
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <img src="assets/carousel-2.jpeg" class="d-block w-100" alt="..." />
            <div class=" carousel-content text-dark col-6">
              <h1 className="animate__animated animate__fadeInLeft main fw-bold">
                We Can<span>Design</span>
                <h5>and</h5>
                <span>Develop</span>The Best Website <br />
              </h1>
              <button className="btn btn-outline-dark text-center my-2 fw-bold get">
                Get A Proposal
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <img src="assets/carousel-3.jpg" class="d-block w-100" alt="..." />
            <div class=" carousel-content text-dark col-5">
              <h3 className="animate__animated animate__fadeInDown fw-bold">
                Grow Your Business
              </h3>
              <h1 className="animate__animated animate__fadeInLeft main fw-bold">
                With <span>BPO Solutions Company</span> <br />
              </h1>

              <button className="btn btn-outline-dark text-center my-2 fw-bold get">
                Get A Proposal
              </button>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <Counter />
      <OurAcheivements />
      <AboutUs />
      <Services />
      <WhyChoose />
      <Form />
      <Information />
    </div>
  );
}
