import React from "react";

export default function SmoServices() {
  const smo_service_card = [
    {
      imgSrc: "asset/smo-card-1.png",
      head: "Profile Optimization",
      para: "We optimize your social media profiles across various platforms to ensure they reflect your brand identity, are visually appealing, and contain relevant information to attract and engage your audience.",
    },
    {
      imgSrc: "asset/smo-card-2.png",
      head: "Audience Engagement",
      para: "We actively engage with your audience through responding to comments, messages, and inquiries promptly. By fostering meaningful interactions, we strengthen relationships with your followers and build a loyal community around your brand.",
    },
    {
      imgSrc: "asset/smo-card-3.webp",
      head: "Social Media Advertising",
      para: "We design and manage targeted advertising campaigns across various social media platforms to reach your specific audience segments. From ad creative to audience targeting and optimization, we ensure your ads deliver maximum ROI.",
    },
    {
      imgSrc: "asset/smo-card-4.png",
      head: "Content Creation and Curation",
      para: "Our team of experienced content creators develops engaging and shareable content tailored to your target audience. From eye-catching graphics to compelling copy, we ensure your social media posts effectively convey your message and drive engagement.",
    },
    {
      imgSrc: "asset/smo-card-5.png",
      head: "Strategic Hashtag Usage",
      para: "We strategically incorporate relevant hashtags into your social media posts to increase their visibility and reach a wider audience. Our hashtag research ensures that your content is discoverable by users interested in topics related to your business.",
    },
    {
      imgSrc: "asset/smo-card-6.png",
      head: "Analytics and Reporting",
      para: "We provide detailed analytics and regular reports on the performance of your social media campaigns. Our insights help you track key metrics, understand audience behavior, and make data-driven decisions to optimize your SMO efforts further.",
    },
  ];
  return (
    <div className="SmoServices mt-4 py-3">
      <div className="container text-center ">
        <h3 className="fw-bold fs-1 mb-4">
          SMO Services <span style={{ color: "#3b6cb4" }}>We Offers</span>
        </h3>
        <p>
          At SS Tech SMO Services Provider, we offer a range of Social Media
          Optimization (SMO) services tailored to enhance your online presence
          and maximize your social media impact. Here are the SMO services we
          provide
        </p>
        <p>
          With our comprehensive SMO services, we empower your business to
          harness the full potential of social media to increase brand
          awareness, drive engagement, and achieve your marketing goals.
        </p>

        <div className="row mt-1">
          {smo_service_card.map((item, index) => (
            <div className="col-lg-4 " key={index}>
              <div
                className="card h-100 p-3 d-flex align-items-center "
                data-aos="flip-right"
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic"
              >
                <img
                  src={item.imgSrc}
                  alt=""
                  width={100}
                  style={{ width: "20%" }}
                />
                <h5 className="mt-2">{item.head}</h5>
                <p>{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
