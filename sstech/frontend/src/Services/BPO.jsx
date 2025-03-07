import React from "react";
import Popup from "../Pages/Popup";

import Home_form from "../Pages/Home_form";

export default function BPO() {
  const bpo_card = [
    {
      imgSrc: "/asset/bpo-card-1.jpg",
      head: "Tailored Customized BPO Solutions",
      summary: "",
      para: "SS Tech Services provides best BPO Solutions services that meets your business requirement.",
    },
    {
      imgSrc: "/asset/bpo-card-2.jpg",
      head: "Communication and Collaboration Tools",
      para: "SS Tech dedicated team have years of expertise in VoIP, Unified Communications (UC), Salesforce.",
    },
    //Collaboration Tools , HubSpot, and Zendesk.
    {
      imgSrc: "/asset/bpo-card-3.jpg",
      head: "Data Analytics and Business Intelligence",
      para: "SS Tech Analyzes data to derive actionable insights for decision-making and process optimization.",
    },
    {
      imgSrc: "/asset/bpo-card-4.jpg",
      head: "Automation and Workflow Management",
      para: "Automates repetitive tasks and processes, reducing manual effort and improving accuracy. ",
    },
    // Streamlines task management and process flows for improved efficiency.
  ];
  const carousel = [
    { imgSrc: "/asset/company-1.webp" },
    { imgSrc: "/asset/company-2.webp" },
    { imgSrc: "/asset/company-3.webp" },
    { imgSrc: "/asset/company-4.webp" },
    { imgSrc: "/asset/company-5.webp" },
    { imgSrc: "/asset/company-1.webp" },
    { imgSrc: "/asset/company-2.webp" },
    { imgSrc: "/asset/company-3.webp" },
    { imgSrc: "/asset/company-4.webp" },
    { imgSrc: "/asset/company-5.webp" },
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
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
          nav: true,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 4,
          nav: true,
          loop: false,
        },
      },
    });
  });

  return (
    <div>
      {/* <Popup/> */}
      <div className="bpo py-4">
        <div className="container">
          <div className="row align-items-center justify-align-center">
            <div className="col-lg-6">
              <div className=" mb-3 hero-main-text">
                <h1
                  id=""
                  className="fw-bold animate__animated animate__fadeInLeft hero-text"
                >
                  Empower<span style={{ color: "#3b6cb4" }}> Your Business</span>  With Cutting - Edge <span style={{ color: "#3b6cb4" }}> BPO Solutions</span>
                </h1>
                {/* <p>
                  SS Tech delivers comprehensive BPO solutions. We are the
                  premier provider of tailored business process outsourcing
                  services.
                </p> */}
              </div>
            </div>
            <div class="col-lg-6">
              <div class="banner-img animate__animated animate__fadeInDown">
                <div class="banner-img-box">
               <Home_form/>
                  {/* <img
                    src="/asset/hero-6.jpg"
                    alt="Banner Images"
                    className="img-fluid"
                  /> */}
                </div>
                {/* <div class="circle1"></div>
                <div class="circle2"></div> */}
                {/* <div class="banner-img-shape">
                  <img src="/asset/bpo-2.png" alt="Images" />
                  <img src="/asset/bpo-3.png" alt="Images" />
                  <img src="/asset/bpo-4.png" alt="Images" />
                  <img src="/asset/bpo-5.png" alt="Images" />
                  <img src="/asset/bpo-6.png" alt="Images" />
                  <img src="/asset/bpo-7.png" alt="Images" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bpo-company mt-3">
        <div className="container">
          <h3 className="fs-1 fw-bold text-center mb-4">
            BPO Solutions <span style={{ color: "#3b6cb4" }}> Company </span>  
          </h3>
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
                  <div className="card d-flex justify-content-center align-items-center text-center h-100">
                    <img src={item.imgSrc} alt="" width={100} />
                    <div className="card-body">
                      <h6 style={{color:"#3b6cb4  "}}>{item.head}</h6>
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
                <h3 className="text-center">Services <span style={{ color: "#3b6cb4" }}> We Provide</span>   for you</h3>
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
                <div className="workImage">
                  <img src="/asset/work-img-1.png" alt="" />
                  <div class="line">
                    <img src="/asset/work-line.png" alt="Work Images" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h3 className="fs-1 fw-bold text-center">Companies We <span style={{ color: "#3b6cb4" }}> Work For</span> </h3>
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
