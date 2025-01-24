import React from "react";
import Information from "../Pages/Information";
import Form from "../Pages/Form";
import Popup from "../Pages/Popup";
import { Helmet } from "react-helmet";
import Home_form from "../Pages/Home_form";

export default function ContentWriting() {
  const card_data = [
    {
      imgSrc: "/asset/c-card-1.jpg",
      head: "Communicates Value",
      para: "Well-crafted content highlights a product's value, educating customers on its benefits and features to influence purchasing decisions.",
    },
    {
      imgSrc: "/asset/c-card-2.webp",
      head: "Drives Traffic",
      para: "Quality content boosts website traffic by using relevant keywords, offering valuable information, and increasing visibility on search engines and social media.",
    },
    {
      imgSrc: "/asset/c-card-3.webp",
      head: "Builds Credibility and Trust",
      para: "Authoritative content builds brand credibility, fosters trust, and strengthens long-term relationships with audiences through consistent, valuable information.",
    },
    {
      imgSrc: "/asset/c-card-4.jfif",
      head: "Supports SEO Efforts",
      para: "Optimized, regularly updated content improves SEO, boosting search engine rankings and increasing visibility to potential customers using relevant keywords.",
    },
    {
      imgSrc: "/asset/c-card-5.webp",
      head: "Engages and Retains Audience",
      para: "Compelling content engages the audience, increasing website retention and encouraging repeat visits through blog posts, videos, and social media.",
    },
    {
      imgSrc: "/asset/c-card-6.jpg",
      head: "Drives Conversions",
      para: "Tailored content guides prospects through the buyer’s journey, addressing concerns and providing value to drive conversions and decision-making.",
    },
  ];

  const offer_content = [
    {
      imgSrc: "",
      head: "Blog Posts",
      para: "Engaging blog posts attract organic traffic, establish thought leadership, and drive engagement by addressing industry topics and audience interests.",
    },
    {
      imgSrc: "",
      head: "Articles and Features",
      para: "Persuasive website copy communicates your brand's value, optimizes user experience, and boosts search engine rankings across all pages.",
    },
    {
      imgSrc: "",
      head: "Website Content",
      para: "In-depth articles provide insights on industry trends, positioning your brand as a thought leader and authority in your niche.",
    },
    {
      imgSrc: "",
      head: "Social Media Content",
      para: "Engaging social media content for platforms like Facebook, Instagram, and LinkedIn, designed to spark conversations, drive engagement, and boost brand awareness.",
    },
  ];
  const why_card = [
    {
      imgSrc: "",
      head: "Expertise:",
      para: " SS Tech Services boasts a team of experienced and skilled content writers who specialize in crafting high-quality and engaging content across various industries and niches. ",
    },
    {
      imgSrc: "",
      head: "Customized Solutions: ",
      para: "We understand that every business is unique, which is why we offer customized content writing solutions to meet your individual needs and objectives.",
    },
    {
      imgSrc: "",
      head: "Versatility:",
      para: "Our team is proficient in creating content for a wide range of formats and platforms, including articles, blog posts, website copy, social media posts, infographics, and more. ",
    },
    {
      imgSrc: "",
      head: "SEO Optimization:",
      para: " We incorporate SEO best practices into our content writing process to help improve your website’s search engine rankings and increase organic traffic. ",
    },
    {
      imgSrc: "",
      head: "Timely Delivery:",
      para: "We understand the importance of timely delivery in the fast-paced digital world. Our team works efficiently to deliver high-quality content within the agreed-upon deadlines, ensuring that your content marketing strategy stays on track and meets your business objectives.",
    },
    {
      imgSrc: "",
      head: "Transparent Communication",
      para: "We believe in transparent communication and collaboration throughout the content writing process. Our team keeps you informed about the progress of your projects, welcomes your input and feedback, and is readily available to address any questions or concerns you may have",
    },
  ];
  return (
    <div>
      <Helmet>
        <title>Content Writing Agency Chicago</title>
        <meta
          name="description"
          content="#1 Content Writing Agency in Chicago. We create unique content that increase engagement & drive traffic for your business.  "
        />
      </Helmet>
      {/* <Popup /> */}
      <div className="content-write py-4">
        <div className="container h-100">
          <div className="row h-100 align-items-center ">
            <div className="col-lg-6 mb-2" id="cont-1">
              <h1 className=" fw-bold content-text animate__animated animate__backInUp hero-text">
                Content That Connects:{" "}
                <span style={{ color: "#3b6cb4" }}>Tailored Writing</span>{" "}
                Services By <span style={{ color: "#3b6cb4" }}> SS Tech </span>{" "}
                
              </h1>
            </div>
            <div className="col-lg-6 mb-2" id="cont-2">
              <Home_form/>
              {/* <img src="/asset/hero-3.png" alt="" className="img-fluid" /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="best-content py-2 my-3">
        <div className="container my-3 ">
          <h1 className="fw-bold  text-center ">
            Your Premier Content{" "}
            <span style={{ color: "#3b6cb4" }}> Writing Services</span>
          </h1>

          <div className="row justify-content-between align-items-center mt-4">
            <div className="col-lg-6 col-md-6">
              <img src="/asset/cont-img-1.png" alt="" className="cont-img" />
            </div>
            <div className="col-lg-6 col-md-6" style={{ textAlign: "justify" }}>
              <p>
                SS Tech Services is a leading content writing agency in India,
                offering high-quality content solutions for businesses
                worldwide. We specialize in creating SEO-optimized content for
                websites, articles, news, and more, helping businesses improve
                their online presence and rank higher in search results. With
                over 100 clients across India, our team of expert writers crafts
                tailored content strategies to suit your business needs and
                target the right audience.
              </p>
              <p>
                {" "}
                We understand the unique nature of your business and work to
                enhance brand awareness through engaging, industry-specific
                content. Whether you're a small startup or a large enterprise,
                our content services are designed to boost your online
                visibility and drive meaningful engagement. Let SS Tech Services
                help you create compelling content that delivers results.
              </p>
            </div>
          </div>

          <div className="row justify-content-around align-items-center mt-4">
            <div
              className="col-lg-6 col-md-6 second-text"
              style={{ textAlign: "justify" }}
            >
              <p>
                At SS Tech Services, we provide top-notch content solutions for
                all your business needs, including website content, blog posts,
                articles, social media content, and more. Our focus is on
                delivering high-quality, results-driven content tailored to your
                business goals. We believe content is key to success, and all
                our work is crafted by skilled human writers—not AI—to ensure
                originality and relevance.
              </p>
              <p>
                Our dedicated team understands your industry and target
                audience, creating content that engages and drives brand
                awareness. What sets us apart is our commitment to excellence,
                attention to detail, and passion for storytelling. From catchy
                headlines to flawless grammar, we deliver content that not only
                captivates but also converts. Choose SS Tech Services for
                content that helps your business grow and connect with the right
                audience.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 second-img">
              <img
                src="/asset/cont-img-2.png"
                alt=""
                width={350}
                className=" float-end cont-img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="my-3">
        <div className="container text-center">
          <h3 className=" fs-1 fw-bold mb-4">
            Why Every Business Needs{" "}
            <span style={{ color: "#3b6cb4" }}> A Content Writer</span>
          </h3>
          <p>
            Content writing is essential for businesses looking to establish
            their online presence, attract and engage their target audience, and
            drive meaningful interactions and conversions. By investing in
            quality content, businesses can differentiate themselves from
            competitors, build trust with their audience, and ultimately achieve
            their marketing goals.
          </p>
          <div className="row g-4 mt-2 px-3">
            {card_data.map((item, index) => (
              <div className="col-lg-4 col-sm-6 px-4 mb-5" key={index}>
                <div
                  className="card h-100 border-0"
                  style={{ boxShadow: "2px 2px 5px" }}
                >
                  <img
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    className="object-fit-cover border rounded"
                    height={180}
                  />
                  <div className="card-body">
                    <h5 style={{ color: "#3b6cb4  " }}>{item.head}</h5>
                    <p style={{ fontSize: "14px" }}>{item.para}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="offer-content-services my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="/asset/cont-img-3.jpg"
                alt=""
                id="gif-img"
                width={500}
                style={{
                  borderRadius: "100%",
                  width: "-webkit-fill-available",
                }}
              />
            </div>
            <div className="col-lg-6 text-center">
              <h3 className=" fw-bold fs-1">
                Content Services{" "}
                <span style={{ color: "#3b6cb4" }}>We Offers</span>*
              </h3>
              <p>
                We tailor our content offerings to meet your specific goals,
                target audience, and industry requirements, ensuring that every
                piece of content we produce delivers maximum impact and value.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row align-items-center ">
          <div className="col-lg-7 px-3">
            <div className="row g-4">
              {offer_content.map((item, index) => (
                <div className="col-lg-6 col-sm-6" key={index}>
                  <div className="card h-100 border-0">
                    <img src={item.imgSrc} alt={item.imgAlt} />
                    <h5 className="text-center" style={{ color: "#3b6cb4  " }}>
                      {item.head}
                    </h5>
                    <p>{item.para}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5 d-flex justify-content-center">
            <img
              src="/asset/cont-img-4.jpg"
              alt=""
              style={{
                height: "350px",
                backgroundSize: "contain",
                backgroundPosition: "center",
                width: "-webkit-fill-available",
              }}
            />
          </div>
        </div>
      </div>

      <div className="why-choose-content my-3 py-3">
        <div className="container text-center">
          <h3 className="fs-1 fw-bold ">
            Why Choose <span style={{ color: "#3b6cb4" }}>US ?</span>
          </h3>
          <p>
            Choosing SS Tech Services for content writing ensures that you have
            a dedicated partner who combines expertise, versatility, attention
            to detail, and transparent communication to deliver high-quality
            content that drives results for your business.
          </p>

          <div className="row g-4">
            {why_card.map((item, index) => (
              <div className="col-lg-4 px-3" key={index}>
                <h5 style={{ color: "#3b6cb4  " }} className="fw-bold">
                  {item.head}
                </h5>
                <p>{item.para}</p>
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
