import React from "react";

const Expertise = () => {
  const Expertise = [
    {
      imgsrc: "/asset/port-expert-01.jpg",
      head: "Proven SEO Success",
      para: "Achieved top rankings for client websites in as little as two months.",
    },
    {
      imgsrc: "/asset/port-expert-02.jpg",
      head: "Powerful Ad Campaigns",
      para: "Our team manages high-budget campaigns, ensuring strong returns on investment and optimized ad performance.",
    },
    {
      imgsrc: "/asset/port-expert-03.jpg",
      head: "Social Media Strategies",
      para: "We take the time to analyze your business and create a strategy that will resonate with your target audience.",
    },
    {
      imgsrc: "/asset/port-expert-04.jpg",
      head: "Expert Content & Visuals",
      para: "Our graphic designers and content creators are dedicated to turning your vision into a reality, with engaging visuals and persuasive copy.",
    },
  ];
  return (
    <>
      <div className="expertise-02 my-5">
        <div className="container">
          <h2 className="h1 text-center mb-5">
            Our <span style={{ color: "#3b6cb4" }}>Expertise</span>{" "}
          </h2>
          <div className="row justify-content-center">
            {Expertise.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card card-style01">
                  <img
                    src={item.imgsrc}
                    alt="expertise"
                    className="img-fluid"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.head}</h5>
                    <i class="fas fa-arrow-right"></i>
                  </div>
                  <div className="overlay text-center">
                    <div>
                      <h3 className="text-white h4 mb-3">
                        <a
                          href="https://soluticwp.websitelayout.net/?page_id=2887"
                          className="text-white text-primary-hover fw-bolder"
                        >
                          {item.head}
                        </a>
                      </h3>

                      <p className="mb-0 text-white">{item.para}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
