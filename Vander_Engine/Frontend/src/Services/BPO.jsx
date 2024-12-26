import React from "react";

export default function BPO() {
  const bpo_card = [
    {
      imgSrc: "/assets/technology.webp",
      head: "Customized BPO Solutions",
      para: "SS Tech Services provides best BPO Solutions services that meets your business requirement.",
    },
    {
      imgSrc: "/assets/experience.webp",
      head: "Communication and Collaboration Tools",
      para: "SS Tech dedicated team have years of expertise in VoIP, Unified Communications (UC) Platforms, Collaboration Tools, Salesforce, HubSpot, Zendesk.",
    },
    {
      imgSrc: "/assets/responsive-design.webp",
      head: "Data Analytics and Business Intelligence",
      para: "SS Tech Analyzes data to derive actionable insights for decision-making and process optimization.",
    },
    {
      imgSrc: "/assets/cyber-security.webp",
      head: "Automation and Workflow Management",
      para: "Automates repetitive tasks and processes, reducing manual effort and improving accuracy. Streamlines task management and process flows for improved efficiency.",
    },
  ];
  const carousel = [
    { imgSrc: "/assets/company-1.webp" },
    { imgSrc: "/assets/company-2.webp" },
    { imgSrc: "/assets/company-3.webp" },
    { imgSrc: "/assets/company-4.webp" },
    { imgSrc: "/assets/company-5.webp" },
    { imgSrc: "/assets/company-1.webp" },
    { imgSrc: "/assets/company-2.webp" },
    { imgSrc: "/assets/company-3.webp" },
    { imgSrc: "/assets/company-4.webp" },
    { imgSrc: "/assets/company-5.webp" },
  ];
  $(function () {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 4,
      loop: true,
      nav: true,
      dots: true,
      rewind: true,
      autoplay: true,
      autoplayTimeout: 1000,
      // autoplaySpeed: 1000,
      autoplayHoverPause: true,
    });
  });

  return (
    <div>
      <div className="bpo">
        <div className="container h-100">
          <div className="col-lg-6 d-flex flex-column justify-content-center h-100 text-center ">
            <h1 id="bpo-head" className="fw-bold"></h1>
            <p>
              SS Tech delivers comprehensive BPO solutions. We are the premier
              provider of tailored business process outsourcing services.
            </p>
          </div>
        </div>
      </div>

      <div className="bpo-company mt-3">
        <div className="container">
          <h3 className="fs-1 fw-bold text-center">BPO Solutions Company</h3>
          <p>
            SS Tech Services is one of the best BPO companies in Delhi NCR.
            Through our outstanding outsourcing services that have been tested
            over time at SS Tech Services we are able to help your company like
            yours improve efficiency and productivity. At SS Tech Services, we
            provide excellent BPO solutions so businesses can succeed. With a
            specific focus on strategy, our business stands out from among
            others. When you need an outsourcing partner in Delhi NCR choose SS
            Tech Services as your number one option. You take care of other
            things but let us do the tasks that matter most; you concentrate on
            growing your business and attaining great heights of success instead
            of wasting your time trying to do everything by yourself.
          </p>
        </div>

        <div className="bpo-card">
          <div className="container">
            <div className="row justify-content-center g-3 my-5">
              {bpo_card.map((item, index) => (
                <div className="col-lg-3 col-sm-6" key={index}>
                  <div className="card border-0 d-flex justify-content-center align-items-center text-center">
                    <img src={item.imgSrc} alt="" width={100} />
                    <div className="card-body">
                      <h6>{item.head}</h6>
                      <p>{item.para}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bpo-service">
          <div className="container my-4 py-4 ">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h3 className="text-center">Services We provide for you</h3>
                <p>
                  SS Tech Services excels in delivering tailored BPO solutions
                  that enhance operational efficiency across diverse domains.
                  Our customer service integrates advanced CRM systems like
                  Salesforce and Zendesk with VoIP and UC platforms for seamless
                  connectivity and personalized assistance. In IT support, we
                  employ proactive RMM tools, robust help desk software, and
                  secure VPN access for remote IT system management. Our
                  technical support leverages specialized IT helpdesk services
                  and collaboration tools like Microsoft Teams and Slack,
                  complemented by robotic process automation. Furthermore, our
                  virtual assistant services utilize AI-powered chatbots with
                  NLP for enhanced customer interaction. At SS Tech Services,
                  we’re dedicated to optimizing business processes and achieving
                  exceptional client outcomes.
                </p>
              </div>
              <div className="col-lg-6">
                <img src="/assets/b-removebg-preview.png" alt="" width={600} />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h3 className="fs-1 fw-bold text-center">Companies We Work for</h3>
          <div className="row owl-carousel owl-theme">
            {carousel.map((item, index) => (
              <div className="col-lg-8" key={index}>
                <div className="card border-0">
                  <img src={item.imgSrc} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
