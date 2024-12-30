import React, { useState } from "react";
// import img from '../assets/QA-img.webp';

export default function Information() {
  const [activeIndex, setActiveIndex] = useState(null);

  function toggleContent(index) {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  return (
    <>
      <div className="information my-5">
        <div
          className="text-content d-flex flex-column justify-content-center align-items-center text-white"
          style={{ height: "100%" }}
        >
          <h4 style={{ color: "#0f5a6c" }}>FAQ</h4>
          <h3 className="fs-1">Find Out Answers Here</h3>
        </div>
      </div>
      <div className="container information-container">
        <div className="d-grid">
          <button
            className={`btn btn-block d-flex justify-content-between align-items-center border-0 ${
              activeIndex === 0 ? "bg-active" : ""
            }`}
            onClick={() => toggleContent(0)}
          >
            <h5>What is Digital Marketing?</h5>
            <i
              className={`fa-solid ${
                activeIndex === 0 ? "fa-minus" : "fa-plus"
              }`}
            ></i>
          </button>

          {activeIndex === 0 && (
            <div className="content">
              <p>
                Digital marketing refers to the use of digital channels,
                platforms, and technologies to promote products, services, or
                brands to a targeted audience. It encompasses a wide range of
                tactics and strategies aimed at reaching and engaging consumers
                online. Some key components of digital marketing include:
              </p>
              <ol type="1">
                <li>
                  <b>Search Engine Optimization (SEO): </b>Optimizing websites
                  and content to improve their visibility in search engine
                  results pages (SERPs) and attract organic (unpaid) traffic.
                </li>
                <li>
                  <b>Search Engine Marketing (SEM):</b> Using paid advertising
                  on search engines like Google to display ads to users
                  searching for specific keywords or phrases. This includes
                  pay-per-click (PPC) advertising and display ads.
                </li>
                <li>
                  <b>Social Media Marketing:</b>Leveraging social media
                  platforms like Facebook, Instagram, Twitter, LinkedIn, and
                  others to build brand awareness, engage with audiences, and
                  drive website traffic or conversions.
                </li>
                <li>
                  <b>Content Marketing:</b>Creating and distributing valuable,
                  relevant, and consistent content to attract and retain a
                  targeted audience. Content marketing can take various forms,
                  including blog posts, articles, videos, infographics,
                  podcasts, and more.
                </li>
                <li>
                  <b>Email Marketing:</b>Sending targeted emails to prospects
                  and customers to nurture leads, promote products or services,
                  and build relationships. Email marketing is an effective way
                  to communicate directly with your audience and drive
                  conversions
                </li>
              </ol>
            </div>
          )}
        </div>

        <div className="d-grid">
          <button
            className={`btn btn-block d-flex justify-content-between align-items-center border-0 ${
              activeIndex === 1 ? "bg-active" : ""
            }`}
            onClick={() => toggleContent(1)}
          >
            <h5>How Does Digital Marketing Help Business to Grow?</h5>
            <i
              className={`fa-solid ${
                activeIndex === 1 ? "fa-minus" : "fa-plus"
              }`}
            ></i>
          </button>

          {activeIndex === 1 && (
            <div className="content">
              <p>Digital marketing helps businesses grow in several ways:</p>
              <ol type="1">
                <li>
                  <b>Increased Reach:</b>Digital marketing allows businesses to
                  reach a wider audience by leveraging online channels such as
                  search engines, social media platforms, and websites. This
                  expanded reach enables businesses to connect with potential
                  customers who may not have been reached through traditional
                  marketing methods.
                </li>
                <li>
                  <b>Targeted Advertising:</b>Digital marketing enables
                  businesses to target specific demographics, interests,
                  behaviors, and geographic locations with precision. By
                  delivering targeted messages to the right audience, businesses
                  can increase the effectiveness of their marketing efforts and
                  generate higher-quality leads.
                </li>
                <li>
                  <b>Improved Brand Awareness:</b>Through digital marketing
                  channels like social media, content marketing, and display
                  advertising, businesses can increase brand visibility and
                  awareness among their target audience. Consistent and engaging
                  digital marketing efforts help businesses stay top-of-mind
                  with customers and differentiate themselves from competitors.
                </li>
                <li>
                  <b>Enhanced Customer Engagement:</b>Digital marketing fosters
                  meaningful interactions and engagement with customers through
                  social media engagement, email marketing campaigns, and
                  interactive content. Building relationships with customers
                  through digital channels can lead to increased loyalty, repeat
                  purchases, and positive word-of-mouth referrals.
                </li>
                <li>
                  <b>Measurable Results:</b>Unlike traditional marketing
                  methods, digital marketing allows businesses to track and
                  measure the performance of their campaigns in real-time. By
                  analyzing key metrics such as website traffic, conversion
                  rates, and return on investment (ROI), businesses can gain
                  valuable insights into the effectiveness of their marketing
                  efforts and make data-driven decisions to optimize future
                  campaigns.
                </li>
              </ol>
            </div>
          )}
        </div>

        <div className="d-grid">
          <button
            className={`btn btn-block d-flex justify-content-between align-items-center border-0 ${
              activeIndex === 2 ? "bg-active" : ""
            }`}
            onClick={() => toggleContent(2)}
          >
            <h5>Best Digital Marketing Company?</h5>
            <i
              className={`fa-solid ${
                activeIndex === 2 ? "fa-minus" : "fa-plus"
              }`}
            ></i>
          </button>

          {activeIndex === 2 && (
            <div className="content">
              <p>
                SS Tech is a dynamic digital marketing company offering a wide
                array of services tailored to meet the diverse needs of
                businesses seeking to establish a strong online presence and
                drive growth in the digital realm. With a focus on innovation,
                creativity, and results-driven strategies, SS Tech provides
                comprehensive solutions across various digital marketing
                channels.
              </p>
              <p>
                At SS Tech, we specialize in leveraging the power of platforms
                like Google Ads and Facebook Ads to help businesses reach their
                target audience effectively and maximize their ROI. Our expert
                team of digital marketers crafts and manages compelling ad
                campaigns that drive traffic, generate leads, and increase
                conversions.
              </p>
              <p>
                In addition to advertising services, SS Tech excels in web
                development, creating visually stunning and user-friendly
                websites that leave a lasting impression on visitors. From
                responsive design to seamless navigation, we ensure that every
                website we build is optimized for performance and functionality
                across all devices.
              </p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .bg-active {
          background-color: #0f5a6c; /* Change this color as needed */
          color: white;
        }
        .content {
          margin-top: 1rem;
          padding: 1rem;
        }
        .hidden {
          display: none;
        }
        .show {
          display: block;
        }
      `}</style>
    </>
  );
}
