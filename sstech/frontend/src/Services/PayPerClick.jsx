import React from "react";
import Form from "../Pages/Form";
import Information from "../Pages/Information";
import Popup from "../Pages/Popup";
import { Helmet } from "react-helmet";
import Home_form from "../Pages/Home_form";
export default function PayPerClick() {
  const why_card = [
    {
      imgSrc: "/asset/why-ppc-1.jpg",
      head: "Flexible Budgeting:",
      para: "Google Ads offers flexible budgeting options, allowing businesses of all sizes to run ads within their budget constraints. Whether you have a modest budget or a large one, you can set daily or monthly spending limits and adjust your budget as needed to optimize performance and achieve your advertising goals.",
    },
    {
      imgSrc: "/asset/why-ppc-2.webp",
      head: "Measurable Results:",
      para: "Unlike traditional advertising methods, Google Ads provides detailed insights and analytics into the performance of your campaigns in real-time. You can track metrics such as clicks, impressions, conversions, and ROI, allowing you to measure the effectiveness of your advertising efforts and make data-driven decisions to optimize performance.",
    },
  ];
  const why_card_1 = [
    {
      imgSrc: "/asset/why-ppc-3.jfif",
      head: "Competitive Advantage:",
      para: "In today’s competitive digital landscape, having a strong presence on Google can give your business a significant competitive advantage. By leveraging Google Ads, you can outshine competitors, capture market share, and stay top of mind with potential customers searching for products or services in your industry.",
    },
    {
      imgSrc: "/asset/why-ppc-4.jpg",
      head: "Enhanced Brand Awareness:",
      para: " Google Ads not only drives immediate traffic and leads but also enhances brand awareness and recognition over time. Even if users don’t click on your ads immediately, seeing your brand at the top of search results repeatedly can increase brand recall and influence purchase decisions down the line.",
    },
  ];
  const ppc_card = [
    {
      imgSrc: "/asset/ppc-card-1.png",
      head: "Thorough Research",
      para: "We begin by conducting thorough research to understand your business, target audience, and industry landscape. This includes identifying relevant keywords, analyzing competitor strategies, and assessing market trends to develop a comprehensive understanding of your advertising needs.",
    },
    {
      imgSrc: "/asset/ppc-card-2.avif",
      head: "Strategic Campaign Setup",
      para: "Based on our research, we develop a tailored Google Ads strategy designed to maximize lead generation. This includes setting up targeted campaigns, ad groups, and keywords to ensure that your ads are displayed to users actively searching for products or services like yours.",
    },
    {
      imgSrc: "/asset/ppc-card-3.png",
      head: "Compelling Ad Copy",
      para: "We create compelling ad copy that highlights your unique selling propositions, benefits, and offers to attract potential customers. Our ad copy is designed to stand out from the competition, grab attention, and compel users to click through to your website or landing page.",
    },
    {
      imgSrc: "/asset/ppc-card-4.png",
      head: "Landing Page Optimization",
      para: "We optimize your landing pages to ensure a seamless user experience and maximize conversion rates. This includes optimizing page load times, improving mobile responsiveness, and aligning the messaging and design with your ad campaigns to encourage users to take action",
    },
    {
      imgSrc: "/asset/ppc-card-5.jfif",
      head: "Tracking and Reporting",
      para: "We implement conversion tracking to measure the effectiveness of your Google Ads campaigns in generating leads and conversions. Our detailed reporting provides insights into key metrics such as click-through rates, conversion rates, and cost per lead, allowing you to track the ROI of your advertising investment.",
    },
    {
      imgSrc: "/asset/ppc-card-6.jpg",
      head: "Bid Management",
      para: "Our bid management strategy involves strategically adjusting bids based on performance data and campaign objectives. We optimize bids to maximize ad visibility, click-through rates, and conversions while maintaining cost efficiency. By continuously monitoring bid levels and adjusting them as needed, we ensure that your ads remain competitive in the auction and drive the best possible results.",
    },
  ];
  return (
    <div>
      <Helmet>
        <title>PPC Company Chicago</title>
        <meta
          name="description"
          content="Find best PPC Company in Chicago. 100+ campaigns management experience. We are #1 google Ads marketing agency Chicago."
        />
      </Helmet>
      {/* <Popup /> */}
      <div className="ppc py-4">
        <div className="container h-100 ">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6 d-flex flex-column align-items-center px-3  mb-3">
              <h2 id="ppc-head" className="fw-bold text-center hero-text">
                Google <span style={{ color: "#3b6cb4" }}> Ads Services </span>:
                Unlock Quality Leads With SS Tech
              </h2>
              {/* <p className="" style={{ fontSize: "14px" }}>
                SS Tech Services is a leading Google Ads agency in India,
                delivering high-quality leads and boosting ROI. Our expert team,
                with years of experience, manages Google Ads for businesses in
                India and globally. We create result-driven strategies tailored
                to your business, with deep expertise in keyword optimization,
                bidding, and audience targeting. SS Tech has consistently
                generated hundreds of high-quality leads daily for our clients
              </p> */}
            </div>
            <div className="col-lg-6">
           <Home_form/>
              {/* <img
                src="/asset/hero-4.png"
                alt=""
                className="ppc-img animate__animated animate__backInDown img-fluid "
              /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="ppc-manage my-5">
        <div className="container text-center">
          <h4 className="fs-1 fw-bold">
            Google Ads{" "}
            <span style={{ color: "#3b6cb4" }}>Management Service</span>{" "}
          </h4>
          <p>
            SS Tech Services is your trusted partner for expert Google Ads
            management services. With a focus on driving results and maximizing
            ROI, we specialize in creating and optimizing Google Ads campaigns
            tailored to your business goals and target audience. Our experienced
            team of digital marketing professionals meticulously crafts
            strategic campaigns, manages budgets effectively, and monitors
            performance closely to ensure your ads reach the right audience at
            the right time. From keyword research to ad copywriting and ongoing
            optimization, we handle every aspect of your Google Ads campaign to
            deliver tangible results and help your business thrive online.
            Partner with SS Tech Services and let us take your Google Ads
            strategy to the next level
          </p>
        </div>
      </div>

      <div className="why-ppc my-3 py-2">
        <div className="container">
          <h4 className="fs-1 fw-bold text-center">
            {" "}
            Key Reasons You Need Google{" "}
            <span style={{ color: "#3b6cb4" }}> Ads Management</span> to Elevate
            Brand
          </h4>

          <div className="row align-items-center why-ppc">
            <div className="col-lg-4">
              <img
                src="/asset/google-ads.webp"
                alt=""
                width={400}
                style={{ marginLeft: "0px" }}
                className="why-ppc-img-1 img-fluid"
              />
            </div>
            <div className="col-lg-8">
              <div className="row my-3 g-4">
                {why_card.map((item, index) => (
                  <div className="col-lg-6 col-sm-6" key={index}>
                    <div
                      className="card border-0 h-100 mx-4"
                      style={{ boxShadow: "0 0 10px" }}
                    >
                      <img src={item.imgSrc} alt="" className=" rounded" />
                      <div className="card-body">
                        <h6
                          className="text-center"
                          style={{ color: "#3b6cb4  " }}
                        >
                          {item.head}
                        </h6>
                        <p style={{ fontSize: "14px" }}>{item.para}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row align-items-center my-5">
            <div className="col-lg-8 ppc-one">
              <div className="row my-3 g-4">
                {why_card_1.map((item, index) => (
                  <div className="col-lg-6 col-sm-6" key={index}>
                    <div
                      className="card border-0 h-100 mx-4"
                      style={{ boxShadow: "0 0 10px" }}
                    >
                      <img src={item.imgSrc} alt="" className=" rounded" />
                      <div className="card-body">
                        <h6
                          className="text-center"
                          style={{ color: "#3b6cb4  " }}
                        >
                          {item.head}
                        </h6>
                        <p style={{ fontSize: "14px" }}>{item.para}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4 ppc-two">
              <img
                src="/asset/google-ads-scaled.jpeg"
                alt=""
                width={500}
                className="why-ppc-img-2 img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="ppc-work">
        <div className="container text-center">
          <h4 className="fs-1 fw-bold ">
            How We Transform{" "}
            <span style={{ color: "#3b6cb4" }}>Ideas into Results</span>{" "}
          </h4>
          <p>
            At SS Tech, we employ a strategic approach to Google Ads management
            aimed at generating high-quality leads for our clients. Here’s how
            we work on Google Ads to achieve this
          </p>

          <div className="row g-3">
            {ppc_card.map((item, index) => (
              <div className="col-lg-4 col-sm-6" key={index}>
                <div className="card h-100 border-0">
                  <img
                    src={item.imgSrc}
                    alt=""
                    height={100}
                    className=" object-fit-contain"
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
      </div>
      <Form />
      <Information />
    </div>
  );
}
