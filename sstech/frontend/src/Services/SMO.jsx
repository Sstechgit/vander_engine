import React, { useEffect } from "react";
import Information from "../Pages/Information";
import Form from "../Pages/Form";
import WhyChooseService from "./WhyChooseService";
import SmoServices from "./SmoServices";
import Popup from "../Pages/Popup";
import { Helmet } from "react-helmet";
import AOS from "aos";
import Home_form from "../Pages/Home_form";

export default function SMO() {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);
  const why_card = [
    {
      sr: "1",
      bold: "Increased Visibility: ",
      para: "SMO helps businesses increase their online visibility by optimizing their social media profiles and content. This ensures that they reach a wider audience and attract potential customers.",
    },
    {
      sr: "2",
      bold: "Brand Awareness: ",
      para: "By actively engaging on social media platforms, businesses can enhance their brand awareness. Regular updates, interactions, and sharing valuable content help in establishing a strong brand presence in the digital space.",
    },
    {
      sr: "3",
      bold: "Customer Engagement: ",
      para: " SMO facilitates direct communication with customers. Businesses can interact with their audience, address their queries, and gather feedback in real-time. This engagement fosters stronger relationships and builds customer loyalty.",
    },
    {
      sr: "4",
      bold: "Drive Traffic:",
      para: " Social media platforms serve as effective channels for driving traffic to a business’s website or other online assets. By sharing links to relevant content, promotions, or products, businesses can redirect users to their desired destination.",
    },
    {
      sr: "5",
      bold: "Targeted Advertising: ",
      para: "  Social media platforms offer sophisticated targeting options for advertising. SMO enables businesses to reach their target audience based on demographics, interests, behaviors, and more. This ensures that promotional efforts are directed towards those most likely to convert.",
    },
    {
      sr: "6",
      bold: "Cost-Effective Marketing:",
      para: " Compared to traditional advertising methods, SMO is relatively cost-effective. Many social media platforms offer both organic and paid advertising options, allowing businesses to allocate their budget efficiently and achieve measurable results.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Social Media Marketing Agency Chicago</title>
        <meta
          name="description"
          content="Best Social Media Management Agency in Chicago. find best Social Media Strategy Expert in Chicago . Top SMO of service provider in Chicago."
        />
      </Helmet>
      <Popup />
      <div className="smo py-3">
        <div className="container pt-2 h-100">
          <div className="row align-items-center justify-content-center h-100">
            {/* <div className="col-lg-1 smo-2"></div> */}
            <div className="col-lg-6 col-md-6  smo-1 mb-3">
              <div id="wrapper hero-main-text ">
                <h1
                  id="hi"
                  className="fw-bold hero-text"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out-cubic"
                >
                  Boost Your{" "}
                  <span style={{ color: "#3b6cb4" }}> Digital Presence </span>
                  With Expert{" "}
                  <span style={{ color: "#3b6cb4" }}>SMO Services!</span>{" "}
                </h1>
              </div>
              {/* <p>
                SS Tech Services is one of the best Social media SMO service
                provider. We help you to increase your brand awareness and
                increase ROI.
              </p> */}
            </div>

            <div className="col-lg-6 col-md-6 d-flex justify-content-center smo-3 h-100 mb-4">
           <Home_form/>
              {/* <img
                src="/asset/smo-1.png"
                alt=""
                className="smo-img img-fluid"
                
              /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="smo-about text-center my-4">
        <div className="container py-4">
          <h2
            className="fw-bold fs-2 mb-5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-out-cubic"
          >
            Your Partner For The{" "}
            <span style={{ color: "#3b6cb4" }}> Best SMO Services</span> –
            Elevate Your <span style={{ color: "#3b6cb4" }}>Brand</span>, Engage
            Your <span style={{ color: "#3b6cb4" }}>Audience!</span>
          </h2>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="/asset/smo-2.jpg"
                alt=""
                style={{ width: "75%" }}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic"
              />
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-out-cubic"
            >
              <p>
                At SS Tech Services, we specialize in providing top-notch Social
                Media Optimization (SMO) services tailored to enhance your
                brand’s online presence. As a leading SMO services provider, we
                focus on creating and managing impactful social media campaigns
                that drive engagement and traffic.
              </p>
              <p>
                Our SMO services include profile optimization, strategic content
                creation, audience engagement, and performance analysis. We
                understand the unique needs of businesses and customize our
                strategies to meet your specific goals. By leveraging the latest
                SMO techniques, we ensure that your brand stands out in the
                competitive digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="smo-important text-center">
        <h3
          className="fw-bold fs-1"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-out-cubic"
        >
          Why SMO Matters for{" "}
          <span style={{ color: "#3b6cb4" }}>Your Brand</span>
        </h3>
        <div className="container py-3">
          <p>
            Social Media Optimization (SMO) is crucial for businesses for
            several reasons. Social Media Optimization plays a crucial role in
            enhancing brand visibility, fostering customer relationships,
            driving traffic, and staying competitive in the digital marketplace.
          </p>
          <div className="row mt-5 justify-content-between">
            {why_card.map((item, index) => (
              <div className="col-lg-4 col-sm-6 text-center mb-4" key={index}>
                <div
                  className="card- ms-2 smo-col"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out-cubic"
                >
                  <p className="text-center p-4 ">
                    <b>{item.bold} </b>
                    <br />
                    {item.para}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SmoServices />
      <WhyChooseService />
      <Form />
      <Information />
    </>
  );
}
