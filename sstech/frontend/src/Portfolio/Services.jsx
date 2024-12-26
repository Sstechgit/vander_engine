import React from "react";

const services = [
  {
    imgSrc: "/asset/port-service-01.jpg",
    head: "Search Engine Optimization (SEO)",
    para: "In 2 months, we've consistently secured milestone rankings for clients by optimizing their websites for better visibility, traffic, and conversions.",
  },
  {
    imgSrc: "/asset/port-service-02.jpg",
    head: "Social Media Optimization (SMO)",
    para: "Our expert team crafts data-driven social media strategies designed to engage your audience and grow your brand across all major platforms.",
  },
  {
    imgSrc: "/asset/port-service-03.jpg",
    head: "Content Writing",
    para: "Compelling content is at the heart of every successful marketing campaign. Our skilled writers produce engaging and SEO-friendly content that resonates with your audience.",
  },
  {
    imgSrc: "/asset/port-service-04.jpg",
    head: "Email Marketing",
    para: "We create highly targeted and personalized email campaigns that significantly increase engagement and deliver outstanding results, driving conversions and fostering strong customer relationships.",
  },
  {
    imgSrc: "/asset/port-service-05.jpg",

    head: " Graphics & Video Design",
    para: "From conceptualization to seamless creation, our talented designers skillfully and expertly transform your unique ideas into visually stunning graphics and videos that truly captivate your audience.",
  },
  {
    imgSrc: "/asset/port-service-06.jpg",
    head: "Google & Facebook Ads Management",
    para: "With an $80,000 annual spend for two clients,our ads team drives impressive returns through targeted Google & Facebook campaigns that max ROI.",
  },
  {
    imgSrc: "/asset/port-service-07.jpg",
    head: "Web Development",
    para: "Our highly experienced web development team builds fast, secure, and responsive websites that effectively drive business growth, offering a comprehensive full suite of development services.",
  },
];

const Services = () => {
  $(document).ready(function () {
    $("#service-carousel").owlCarousel({
      items: 3,
      navigation: true,
      slideSpeed: 3000,
      paginationSpeed: 4000,
      mouseDrag: true,
      singleItem: true,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      responsiveClass: true,
      loop: true, // Infinite loop enabled
      margin: 30,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: true,
          loop: false,
        },
      },
    });
  });
  return (
    <>
      <div className="section-title mb-1-9 mb-md-6 text-center">
        <span className="sm-title">What We Do</span>
        <h2 className="h1">
          {" "}
          Our <span style={{ color: "#3b6cb4" }}>Services </span>
        </h2>
      </div>

      <section className="services ">
        <div className="container">
          <p className="text-center my-4">
            At SS Tech Services, we provide comprehensive digital marketing
            solutions tailored to help businesses thrive in the online world.
            With over a decade of experience, we are your trusted partner for
            innovative strategies that drive measurable success.
          </p>
          <div
            className="row mt-5 owl-carousel owl-theme"
            id="service-carousel"
          >
            {services.map((item, index) => (
              <div
                className=" mt-1-9 wow fadeIn h-100"
                data-wow-delay="200ms"
                style={{
                  visibility: "visible",
                  animationDelay: "200ms",
                  animationName: "fadeIn",
                }}
                key={index}
              >
                <div
                  class="card card-style05 h-100"
                  style={{ boxShadow: "0 0 5px 1px", margin: "15px" }}
                >
                  <div class="card-img" style={{ height: "150px" }}>
                    <img
                      decoding="async"
                      src={item.imgSrc}
                      alt="Image"
                      style={{ height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div class="card-body p-1-6 p-xxl-1-9">
                    <div class="d-flex">
                      <div class="flex-shrink-0 me-4 w-50px">
                        {/* <img decoding="async" src={item.imgSrc_2} alt="Image" /> */}
                      </div>
                      <div class="flex-grow-1">
                        <h3 class="h5">
                          <a href="" style={{ color: "#3b6cb4" }}>
                            {item.head}
                          </a>
                        </h3>
                        <p> {item.para}</p>
                        {/* <a href="#main">
                          Read More{" "}
                          <i class="fa-solid fa-arrow-right ps-2 display-30 text-primary"></i>
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
