import React from "react";

const clients = [
  {
    imgSrc: "/asset/us-auto-logo.webp",
    head: "usaauto-parts.com",
    para: "",
  },
  {
    imgSrc: "/asset/USA-Auto-Parts-logo.png",
    head: "usaautopartsllc.com",
    para: "",
  },

  {
    imgSrc: "/asset/vander-logo.png",
    head: "vanderengines.com",
    para: "",
  },
  {
    imgSrc: "/asset/net-logo.svg",
    head: "netforchoice.com",
    para: "",
  },

  {
    imgSrc: "/asset/fwa-logo.webp",
    head: "fitnessworldacademy.com",
    para: "",
  },
];
const Clients = () => {
  return (
    <section className="clients mt-5">
      <div className="container text-center">
        <h2 className="h1">
          Our <span style={{ color: "#3b6cb4" }}>Clients </span>
        </h2>
        <p className="mb-5">
          We have had the pleasure of working with a diverse range of clients
          across the globe, delivering tailored digital marketing solutions that
          drive success. Our clients include:
        </p>
      </div>
      <div className="container">
        <div className="row my-4">
          <div className="col-lg-6 d-flex">
            <img
              src="/asset/port-why-1.jpg"
              alt=""
              style={{
                width: "40%",
                marginRight: "30px",
                height: "250px",
                objectFit: "contain",
              }}
              id="client01"
              className="mb-4"
            />
            <img
              src="/asset/port-why-2.jpg"
              alt=""
              style={{ width: "55%", height: "300px", objectFit: "contain" }}
              id="client02"
            />
          </div>
          <div className="col-lg-6">
            <div className="row">
              {clients.map((item, index) => (
                <div className="col-lg-6 mb-4 client-card" key={index}>
                  <div
                    className="card border-0"
                    style={{ boxShadow: "0 0 2px 2px #e9ecef" }}
                  >
                    <img src={item.imgSrc} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
