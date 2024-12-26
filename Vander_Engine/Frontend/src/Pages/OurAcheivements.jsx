import React from "react";
export default function OurAcheivements() {
  const Acheive_card = [
    { imgSrc: "/assets/card-1.webp", head: "471+ Projects", para: "" },
    {
      imgSrc: "/assets/card-2.webp",
      head: "250+ Satisfied Customers",
      para: "",
    },
    { imgSrc: "/assets/card-3.webp", head: "5+ years in Business", para: "" },
  ];
  return (
    <div>
      <h1 className="fw-bolder text-center acheived">Our Achievements</h1>
      <div className="container my-4">
        <div className="row justify-content-around">
          {Acheive_card.map((item, index) => (
            <div className="col-lg-3 col-md-4 col-sm-12 mb-4" key={index}>
              <div className="card text-center acheived-card">
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
