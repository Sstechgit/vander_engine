import React from "react";
import Information from "../Pages/Information";
import Form from "../Pages/Form";
import Popup from "../Pages/Popup";
import { Helmet } from "react-helmet";
import Home_form from "../Pages/Home_form";

export default function WebDevelopment() {
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
      autoplayTimeout: 2000,
      // autoplaySpeed: 1000,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 3,
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

  const tech_card = [
    {
      imgSrc: "/asset/web-card-1.jpg",
      head: "Customized Solutions",
      para: "SS Tech Services offers top web development tailored to your business needs.",
      // para: " SS Tech Services provides best web development services that meets your business requirement.",
    },
    {
      imgSrc: "/asset/web-card-2.jpg",
      head: "Expertise Across Technologies",
      para: "SS Tech dedicated team have years of expertise in HTML, CSS , Java script, PHP, MySQL, Node.js.",
    },
    {
      imgSrc: "/asset/web-card-3.jpg",
      head: "Responsive Design",
      para: " We create responsive and user friendly websites that google loves. We aim to provide you quality work.",
    },
    {
      imgSrc: "/asset/web-card-4.jpg",
      head: "Robust Security Measures",
      // para: " We provide high security to your website to make your data safe. We add SSL encryption, secure login systems.",
      para: "We secure your website with SSL encryption and safe login systems.",
    },
  ];
  const tech_service = [
    {
      imgSrc: "/asset/web-service-1.png",
      head: "User Experience (UX) Design:",
      bold_1: "Intuitive Navigation:",
      para_1:
        " Designing user-friendly interfaces that make it easy for visitors to find what they need.",
      bold_2: "Engaging Interactions: ",
      para_2:
        "Crafting interactive elements that enhance the overall user experience.",
      bold_3: "Accessibility:",
      para_3:
        " Ensuring your website is accessible to all users, including those with disabilities.",
    },

    {
      imgSrc: "/asset/web-service-2.jpg",
      head: "Website Maintenance:",
      bold_1: "Ongoing Support:",
      para_1:
        "Offering regular updates and maintenance to keep your website running smoothly and securely.",
      bold_2: "Bug Fixes:",
      para_2:
        "  Addressing any issues that arise to prevent disruptions to your site’s functionality.",
      bold_3: "Performance Monitoring: ",
      para_3:
        " Monitoring site performance and implementing improvements as needed.",
    },
    {
      imgSrc: "/asset/web-service-3.png",
      head: "Web Application Development:",
      bold_1: "Custom Applications:",
      para_1:
        "Developing web-based applications tailored to your business needs, such as CRM systems or internal tools.",
      bold_2: "Integration Solutions: ",
      para_2:
        " Integrating your applications with other systems or third-party services for enhanced functionality.",
      bold_3: "Scalable Solutions:",
      para_3:
        " Building applications that can grow with your business and adapt to changing needs.",
    },
    {
      imgSrc: "/asset/web-service-4.jpg",
      head: "E-commerce Solutions:",
      bold_1: "Online Store Development:",
      para_1:
        "Building robust e-commerce platforms thatfacilitate smooth transactions and customer interactions.",
      bold_2: "Secure Payment Integration:",
      para_2:
        " Implementing secure payment gateways to protect customer information.",
      bold_3: "Product Management:",
      para_3:
        " Creating systems for easy management of inventory, product listings, and order processing.",
    },
  ];

  const tech = [
    {
      imgSrc: "/asset/mysql.png",
      head: "",
      para: "",
    },
    { imgSrc: "/asset/php.webp", head: "", para: "" },
    { imgSrc: "/asset/html5.jfif", head: "", para: "" },
    { imgSrc: "/asset/css3.png", head: "", para: "" },
    { imgSrc: "/asset/react.png", head: "", para: "" },
    { imgSrc: "/asset/Node.js_logo.svg", head: "", para: "" },
    { imgSrc: "/asset/java.png", head: "", para: "" },
  ];
  return (
    <div>
      <Helmet>
        <title>Web Development Agency Chicago</title>
        <meta
          name="description"
          content="#1 Web Development Agency in Chicago. We offer complete responsive & attractive designs . We offer custom website development. "
        />
      </Helmet>
      <Popup />
      <div className="web">
      <div>
            <img
              src="/asset/icon_02.png"
              alt=""
              id="web"
              className=" animate__animated animate__backInDown img-fluid"
            />
          </div>
        <div className="container h-100 ">
         

          {/* <img
            src="/asset/banner_green_shape_img.jpg"
            alt=""
            id="web-1"
            className=" animate__animated animate__backInLeft"
          /> */}

          {/* <img
            src="/asset/hero-2.jpg"
            alt=""
            id="web-2"
            className=" animate__animated animate__backInUp"
          /> */}

          <div className="row h-100 align-items-center justify-content-center">
            {/* <div className="col-lg-1"></div> */}
            <div className="col-lg-6 d-flex flex-column  justify-content-center">
              <h1
                id="hii"
                className="fw-bold  animate__animated animate__backInRight hero-text"
              >
                Crafting Fully{" "}
                <span style={{ color: "#3b6cb4" }}> Responsive Websites </span>
                For Maximum Impact
              </h1>
              {/* <p className=" web-text">
                SS Tech provides complete Web Development solutions. We are top
                website development solution provider.
              </p> */}
            </div>
            <div className="col-lg-6">
             <Home_form/>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center my-4">
        <h1 className="fs-1 fw-bold mb-3">
          Your Trusted{" "}
          <span style={{ color: "#3b6cb4" }}>Web Development Partner</span>{" "}
        </h1>
        <p>
          Elevate your online presence with SS Tech, the leading web development
          company. Specializing in innovative web solutions, we craft visually
          stunning and functionally robust websites tailored to your unique
          business needs. From responsive designs to seamless user experiences,
          trust SS Tech to bring your digital vision to life.
        </p>

        <div className="row justify-content-center g-3 my-5">
          {tech_card.map((item, index) => (
            <div className="col-lg-3 col-sm-6" key={index}>
              <div className="card d-flex justify-content-center align-items-center h-100 mx-2">
                <img
                  src={item.imgSrc}
                  alt=""
                  width={100}
                  style={{ width: "100%" }}
                />
                <div className="card-body">
                  <h5 style={{ color: "#3b6cb4  " }}>{item.head}</h5>
                  <p>{item.para}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="web-services my-5 py-4">
        <div className="container text-justify">
          <h2 className="fs-1 fw-bold text-center pb-3">
            How We <span style={{ color: "#3b6cb4" }}>Serve You</span>{" "}
          </h2>
          <div className="row mt-3 ">
            {tech_service.map((item, index) => (
              <div className="col-lg-6 col-sm-6 mb-3 px-5" key={index}>
                <div className="card d-flex align-items-center web-card h-100">
                  <img
                    src={item.imgSrc}
                    alt=""
                    style={{
                      height: "40%",
                      width: "150px",
                      objectFit: "contain",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="text-center" style={{ color: "#3b6cb4  " }}>
                      {item.head}
                    </h5>
                    <p>
                      <b>{item.bold_1} </b>
                      {item.para_1}
                    </p>
                    <p>
                      <b>{item.bold_2}</b>
                      {item.para_2}
                    </p>
                    <p>
                      <b>{item.bold_3}</b>
                      {item.para_3}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="tech">
        <h5
          className="fs-1 fw-bold text-center
            mb-4 "
        >
          Technology We <span style={{ color: "#3b6cb4" }}>Work on</span>
        </h5>
        <div className="container text-center owl-carousel owl-theme">
          {tech.map((item, index) => (
            <div className="col-lg-6 " key={index}>
              <img src={item.imgSrc} alt="" />
              <div className="card-body">
                <h4>{item.head}</h4>
                <p>{item.para}</p>
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
