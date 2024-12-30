import React, { useEffect } from "react";
import AOS from "aos";

export default function OurAcheivements() {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);
  const Acheive_card = [
    {
      imgSrc: "/asset/acheive-01.jpg",
      head: "471+ Projects",
      para: "",
    },
    {
      imgSrc: "/asset/acheive-02.png",
      head: "250+ Satisfied Customers",
      para: "",
    },
    {
      imgSrc: "/asset/acheive-03.webp",
      head: "5+ years in Business",
      para: "",
    },
  ];
  return (
    <div>
      <h1 className="fw-bolder text-center acheived">
        Our <span style={{ color: "#3b6cb4" }}>Achievements</span>
      </h1>
      <div className="container my-4">
        <div className="row justify-content-around">
          {Acheive_card.map((item, index) => (
            <div className="col-lg-3 col-md-4 col-sm-12 mb-4" key={index}>
              <div
                className="card text-center acheived-card h-100"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic"
              >
                <img
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  width={100}
                  class="card-img-top"
                />
                <div className="card-body my-3">
                  <h5 className="card-title">{item.head}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
