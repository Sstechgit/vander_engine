import React from "react";
import Information from "../Pages/Information";
import Form from "../Pages/Form";
import Popup from "../Pages/Popup";
import Home_form from "../Pages/Home_form";

export default function Graphic() {
  const graphic_card = [
    {
      imgSrc:
        "https://templates.hibootstrap.com/vconn/default/assets/images/home-two/home-two-img1.jpg",
      head: "Expertise Across Technologies",
      para: "SS Tech dedicated team have years of expertise in photoshop, Canva, Illustrator , Adobe Premiere Pro, CorelDRAW",
    },
    {
      imgSrc:
        "https://templates.hibootstrap.com/vconn/default/assets/images/home-two/home-two-img3.jpg",
      head: "Responsive Design",
      para: "We create responsive and user friendly websites that google loves. We aim to provide you quality work.",
    },
    {
      imgSrc:
        "https://templates.hibootstrap.com/vconn/default/assets/images/services/services-large1.jpg",
      head: "Branding & Identity",
      para: "Branding is the invisible thread that connects every aspect of your business. It allows for growth and adaptation through different designs while maintaining a consistent identity. This cohesion fosters recognition and trust. ",
    },
    // ensuring your brand resonateswith customers. no matter how it evolves.
    {
      imgSrc:
        "https://templates.hibootstrap.com/vconn/default/assets/images/contact-bg.jpg",
      head: "Print & Layout Design",
      para: "our expert graphic design services create visually stunning print products that leave a lasting impression. Trust us to bridge the gap between the digital and tangible, bringing your brand to life with beautifully crafted designs.",
    },
  ];
  const carousel = [
    { imgSrc: "/asset/graphic-1.webp" },
    { imgSrc: "/asset/graphic-2.webp" },
    { imgSrc: "/asset/graphic-3.webp" },
    { imgSrc: "/asset/graphic-4.webp" },
    { imgSrc: "/asset/graphic-1.webp" },
    { imgSrc: "/asset/graphic-2.webp" },
    { imgSrc: "/asset/graphic-3.webp" },
    { imgSrc: "/asset/graphic-4.webp" },
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
          items: 3,
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
      {/* <Popup /> */}
      <div className="graphic-hero py-4">
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-lg-6">
              <h1 className="fw-bold text-center hero-text mb-3">
                {" "}
                Graphic Design With{" "}
                <span style={{ color: "#3b6cb4" }}>A Trusted Agency </span>
              </h1>
            </div>
            <div className="col-lg-6">
              <Home_form/>
              {/* <img src="/asset/hero-5.jpg" alt="" className="img-fluid" /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="graphic overflow-hidden mb-5">
        <div class="image-overlay"></div>
        <div
          className="container h-100 d-flex align-items-center justify-content-center"
          style={{ zIndex: "2", position: "relative" }}
        >
          <div className="text-white">
            <h1 id="graphic-head" className="fw-bold text-center">
              {" "}
              Graphic Design With A Trusted Agency in Noida
            </h1>
            <p id="graphic-para">
              {" "}
              SS Tech provides complete Graphic Design solutions. We are top
              graphic design solution provider.
            </p>
          </div>
        </div>
      </div> */}

      <div className="graphic-company">
        <div className="container mt-3">
          <h3 className="fs-2 fw-bold text-center mb-4">
            Innovative{" "}
            <span style={{ color: "#3b6cb4" }}> Graphic Design Solutions:</span>{" "}
            Where Creativity{" "}
            <span style={{ color: "#3b6cb4" }}>Meets Strategy</span>{" "}
          </h3>
          <p>
            Enhance your brand’s identity with SS Tech, the premier graphic
            design company. Specializing in creative visual solutions, we
            produce eye-catching and impactful designs tailored to your specific
            business goals. From logos to marketing materials, trust SS Tech to
            transform your ideas into stunning visuals that captivate and engage
            your audience.
          </p>
        </div>

        <div className="graphic-card">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="row justify-content-center mt-4">
                  {graphic_card.map((item, index) => (
                    <div className="col-lg-6 col-sm-6 mb-5" key={index}>
                      <div
                        className="card h-100 d-flex justify-content-center align-items-center text-center p-1"
                        style={{ background: "none", margin: " 0px 30px" }}
                      >
                        <div className="card-head">
                          <img
                            src={item.imgSrc}
                            alt=""
                            style={{ width: "100%" }}
                          />
                        </div>

                        <div className="card-body">
                          <h6 style={{ color: "#3b6cb4  " }}>{item.head}</h6>
                          <p style={{ textAlign: "justify" }}>{item.para}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="img-section">
                  <img
                    src="https://templates.hibootstrap.com/vconn/default/assets/images/work-img/work-img2.jpg"
                    alt=""
                    id="graphic-img-1"
                    className=" overflow-x-hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="graphic-service my-5">
        <div className="container my-4 py-4 ">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* <img src="https://templates.hibootstrap.com/vconn/default/assets/images/services/service-bg.jpg" alt="" width={600} /> */}
            </div>
            <div className="col-lg-6 graph-cont">
              <h3 className="text-center " style={{ color: "#3b6cb4  " }}>
                Services That We Cater To Maximize Your Business Presence
              </h3>
              <p style={{ lineHeight: "30px" }}>
                At SS Tech, we pour our heart into every graphic design project,
                transforming ideas into captivating visuals. Our team
                specializes in delivering powerful designs that leave a lasting
                impression, ensuring every element serves a purpose. Each day,
                we start with a commitment to creativity, crafting unique
                branding solutions that resonate with your audience. From
                eye-catching logos to engaging marketing materials, our designs
                are meticulously tailored to meet your business goals. Let SS
                Tech bring your vision to life and make the ordinary
                extraordinary through our exceptional graphic design services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h3 className="fs-1 fw-bold text-center">
          Technology We <span style={{ color: "#3b6cb4" }}> Work on</span>{" "}
        </h3>
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
      <Form />
      <Information />
    </div>
  );
}
