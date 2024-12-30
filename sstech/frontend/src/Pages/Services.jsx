import React, { useEffect } from "react";
import AOS from "aos";

export default function Services() {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);
  const service_card = [
    {
      imgSrc: "/asset/service-2.webp",
      head: "Search Engine Optimization",
      para: "SS Tech Services is a leading digital marketing agency that helps your business to rank on SERP and generate more business. We have completed 300+ SEO Projects.",
    },
    {
      imgSrc: "/asset/service-1.png",
      head: "Social Media Marketing",
      para: "Meta has around 2.9 billion active users and that is the perfect platform for you to grow your business.We generate hundreds of quality leads regularly, tailored to each business’s needs.",
    },
    {
      imgSrc: "/asset/service-3.webp",
      head: "Content Writing",
      para: "SS Tech provides you high quality content for your website. Our team of experts creates content that is optimized for search engines like Google, helping to boost customer engagement.",
    },
    {
      imgSrc: "/asset/service-4.png",
      head: "Web Development",
      para: "Having a great UX and responsive website is very important to grow business.Our developers, with their in-depth knowledge and expertise, create perfectly optimized websites tailored to your needs.",
    },
    {
      imgSrc: "/asset/service-5.webp",
      head: "Google Ads",
      para: "We handled over 100+ projects of google ads and generates a handsome ROI for our clients. Our experts makes the perfect Google ads strategy according to your business need.",
    },
    {
      imgSrc: "/asset/service-6.png",
      head: "Meta Ads",
      para: "Meta has around 2.9 billion active users and that is the perfect platform for you to grow your business. We generate 100 of quality leading regular for each business.",
    },
  ];
  return (
    <div className="service">
      <div className="container my-4">
        <h3 className="text-center fs-1 fw-bold ">
          Our Digital{" "}
          <span style={{ color: "#3b6cb4" }}> Marketing Services</span>
        </h3>
        <div className="row my-4">
          {service_card.map((item, index) => (
            <div className="col-lg-4 col-md-6 text-center mb-3" key={index}>
              <div
                className="card service-card p-2 h-100"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic"
              >
                <img
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  width={120}
                  style={{
                    height: "50%",
                    objectFit: "contain",
                    filter: "hue-rotate(45deg)",
                  }}
                />
                <div className="card-title my-3">
                  <h5 className="text-center">{item.head}</h5>
                  <p>{item.para}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
