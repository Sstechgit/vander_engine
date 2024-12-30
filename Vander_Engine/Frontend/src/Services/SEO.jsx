import React from "react";

import Information from "../Pages/Information";
import Form from "../Pages/Form";

export default function SEO() {
  const card_data = [
    {
      imgSrc: "/assets/icon_v1.png",
      head: "Website Audit",
      para: "we audit your website before starting seo and analyze the behavior of your site.",
    },
    {
      imgSrc: "/assets/iconv2.png",
      head: "Competitors Analysis",
      para: "When it comes to SEO keeping an eye on competitors is very important.",
    },
    {
      imgSrc: "/assets/icon_v3.png",
      head: "Business Analysis",
      para: "We understand the nature of your business and make strategies.",
    },
    {
      imgSrc: "/assets/iconv3.png",
      head: "Keywords Research",
      para: "Choosing the right keywords is very important to rank your website.",
    },
    {
      imgSrc: "public/assets/icon_v4.png",
      head: "Weekly Reporting",
      para: "We aim to keep clear transparency and provide you weekly reporting.",
    },
    {
      imgSrc: "public/assets/iconv5.png",
      head: "Link Building",
      para: "Link building plays an important role to increase the online presence.",
    },
  ];
  const card_data_1 = [
    {
      imgSrc: "",
      head: "Expertise",
      para: "We are a team of dedicated search engine optimization professionals with years of experience. SS Tech’s approach is result oriented. We focus to increase the traffic of your website by using our best SEO strategies. With the help of SEO we focus to increase your brand online presence.",
    },
    {
      imgSrc: "",
      head: "Tailored Solutions",
      para: "We understand that every business is unique. So, our team of experts understand the nature of your business and makes the perfect strategies to meet your business specific goals and objectives. We aim to increase your business brand awareness and generate more leads to your business.",
    },
    {
      imgSrc: "",
      head: "Innovative Approach",
      para: "In the fast-paced world of digital marketing, innovation is key. At SS Tech Services, we're always exploring new technologies and strategies to stay ahead of the curve. From AI-driven analytics to cutting-edge content creation, we'll help you stand out in a crowded digital landscape. ",
    },
    {
      imgSrc: "",
      head: "Proven Results",
      para: "Don't just take our word for it – our track record speaks for itself. With our result proven strategies, we have helped 100+ business to grow and achieve their business goals. We have helped driving tangible results and measurable ROI. SS Tech is one of the best digital marketing agency. When you choose SS Tech Services, you're choosing success.",
    },
  ];
  return (
    <>
      <div id="seo-img">
        <div className="container h-100">
          <div className="row d-flex align-items-center h-100">
            <div className="col-lg-4 col-sm-4 col-4">
              <h2
                id="SEO"
                className="fw-bold"
              ></h2>
            </div>
            <div className="co-lg-8 col-sm-8">
              <img
                src="/assets/876f8-monitor.png"
                alt=""
                id="seo-img-1"
                className=" animate__animated animate__backInDown"
              />
              <img
                src="/assets/a85a2-speaker.png"
                alt=""
                id="seo-img-2"
                className=" animate__animated animate__backInRight"
              />
              <img
                src="/assets/03353-search.png"
                alt=""
                id="seo-img-3"
                className=" animate__animated animate__backInLeft"
              />
              <img
                src="/assets/0f8eb-paper.png"
                alt=""
                id="seo-img-4"
                className=" animate__animated animate__backInUp"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="seo-service my-3">
        <div className="container ">
          <h3 className="fs-1 fw-bold text-center">SS Tech SEO Services</h3>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <img src="/assets/info-1.png" alt="" />
            </div>
            <div className="col-lg-6 col-md-6">
              <ul type="circle">
                <li>
                  SS Tech Services is a leading digital marketing service
                  provider. We are renowned for our exceptional SEO services,
                  that are designed to elevate your businesses’ online presence
                  and rank your websites prominently in search engine results
                  pages (SERPs). We are one of the leading Seo company.
                </li>
                <li>
                  Our SEO service is meticulously crafted to cater to the unique
                  needs of each client, employing a strategic approach that
                  combines technical expertise, creative content, and
                  data-driven insights.
                </li>
                <li>
                  At SS Tech Services, we understand that achieving high
                  rankings in SERPs is crucial for driving organic traffic,
                  increasing brand visibility, and ultimately, boosting
                  conversions. That’s why our team of SEO experts works
                  tirelessly to implement proven strategies that propel our
                  clients’ websites to the top of search engine rankings.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="our-seo-services">
        <div className="container text-center">
          <h3 className="fs-1 fw-bold py-3">Our SEO Services</h3>
          <div className="row g-4">
            {card_data.map((item, index) => (
              <div className="col-lg-4 col-sm-6" key={index}>
                <div className="card h-100 d-flex align-items-center seo-card py-2">
                  <img
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    width={100}
                    height={100}
                  />
                  <div className="card-body ">
                    <h5>{item.head}</h5>
                    <p>{item.para}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="why-choose-seo my-4">
        <div className="container text-justify">
          <div className="row align-items-center ">
            <div className="col-lg-3 col-md-3">
              <h4 className="fs-2 fw-bold text-center">
                Why Choose <br /> US ?
              </h4>
              <p>
                SS Tech Services is one of the best agency for marketing. Where
                we provide the solutions for your complete business need. our
                dedicated SEO team help your website to rank in SERP. SS Tech
                Services is one of the best search engine optimization company.
                Get best search engine marketing services from SS Tech Services
                and grow your business.
              </p>
            </div>
            <div className="col-lg-9 col-md-9">
              <div className="row pt-3">
                {card_data_1.map((item, index) => (
                  <div className="col-lg-6 col-md-6 col-sm-6" key={index}>
                    <div className="card h-100 d-flex align-items-center seo-card_1">
                      <img src={item.imgSrc} alt={item.imgAlt} width={100} />
                      <div className="card-body">
                        <h5 className="text-center">{item.head}</h5>
                        <p>{item.para}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Form />
      <Information />
    </>
  );
}
