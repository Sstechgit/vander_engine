import React from "react";
export default function Services() {
  const service_card = [
    {
      imgSrc: "/assets/service-1.webp",
      head: "Search Engine Optimization",
      para: "SS Tech Services is a leading digital marketing agency that helps your business to rank on SERP and generate more business. We have completed 300+ SEO Projects.",
    },
    {
      imgSrc: "/assets/service-2.webp",
      head: "Social Media Marketing",
      para: "One of the top digital marketing services for your digital marketing need. We have dedicated team to grow your social media presence and increase you ROI.",
    },
    {
      imgSrc: "/assets/service-3.webp",
      head: "Content Writing",
      para: "SS Tech provides you high quality content for your website. Our team of experts write high quality content that google likes and increase your customers interaction.",
    },
    {
      imgSrc: "/assets/service-4.webp",
      head: "Web Development",
      para: "Having a good UX and responsive website is very important to grow business. our developers who have deep knowledge and experience makes perfect websites for you.",
    },
    {
      imgSrc: "/assets/service-5.webp",
      head: "Google Ads",
      para: "We handled over 100+ projects of google ads and generates a handsome ROI for our clients. Our experts makes the perfect Google ads strategy according to your business need.",
    },
    {
      imgSrc: "/assets/service-6.webp",
      head: "Meta Ads",
      para: "Meta has around 2.9 billion active users and that is the perfect platform for you to grow your business. We generate 100 of quality leading regular for each business.",
    },
  ];
  return (
    <div className="service">
      <div className="container my-4">
        <h3 className="text-center fs-1 fw-bold ">
          Our Digital Marketing Services
        </h3>
        <div className="row my-4">
          {service_card.map((item, index) => (
            <div className="col-lg-4 col-md-6 text-center" key={index}>
              <div className="card service-card p-2">
                <img src={item.imgSrc} alt={item.imgAlt} width={100} />
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
