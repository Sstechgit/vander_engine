import React from "react";
import Information from "../Pages/Information";
import Form from "../Pages/Form";

export default function ContentWriting() {
  const card_data = [
    {
      imgSrc: "/assets/c-card-1.jpg",
      head: "Communicates Value",
      para: "Well-crafted content communicates the value proposition of a product or service to potential customers. It educates them about the benefits, features, and unique selling points, helping to influence their purchasing decisions.",
    },
    {
      imgSrc: "/assets/c-card-2.webp",
      head: "Drives Traffic",
      para: "Quality content attracts organic traffic to a website through search engines and social media platforms. By incorporating relevant keywords and providing valuable information, content increases visibility and draws in interested visitors.",
    },
    {
      imgSrc: "/assets/c-card-3.webp",
      head: "Builds Credibility and Trust",
      para: "Informative and authoritative content establishes a brand as a credible source of information within its industry. By consistently delivering valuable content, businesses can build trust with their audience, fostering long-term relationships and loyalty.",
    },
    {
      imgSrc: "/assets/c-card-4.jfif",
      head: "Supports SEO Efforts",
      para: "Content is a cornerstone of search engine optimization (SEO). Regularly updated and optimized content helps improve a website's search engine rankings, making it more visible to potential customers searching for relevant keywords.",
    },
    {
      imgSrc: "/assets/c-card-5.webp",
      head: "Engages and Retains Audience",
      para: "Compelling content captivates the audience's attention and encourages engagement. Whether it's through blog posts, videos, or social media updates, engaging content keeps visitors on a website longer and encourages them to return for more.",
    },
    {
      imgSrc: "/assets/c-card-6.jpg",
      head: "Drives Conversions",
      para: "Content tailored to different stages of the buyer's journey can guide prospects through the sales funnel, from awareness to consideration and ultimately to conversion. By providing valuable information and addressing customer concerns, content can facilitate the decision-making process and drive conversions.",
    },
  ];

  const offer_content = [
    {
      imgSrc: "",
      head: "Blog Posts",
      para: "Engaging and informative blog posts on topics relevant to your industry, audience interests, and marketing objectives. Our blog posts are designed to attract organic traffic, establish thought leadership, and drive engagement.",
    },
    {
      imgSrc: "",
      head: "Articles and Features",
      para: "Compelling and persuasive website copy that effectively communicates your brand's message, value proposition, and offerings. From homepage content to product/service pages and About Us sections, we ensure that your website content is optimized for both users and search engines.",
    },
    {
      imgSrc: "",
      head: "Website Content",
      para: "In-depth articles and features that provide valuable insights, analysis, and commentary on industry trends, news, and topics of interest to your audience. Our articles are designed to position your brand as a thought leader and authority within your niche.",
    },
    {
      imgSrc: "",
      head: "Social Media Content",
      para: "Engaging and shareable content tailored for social media platforms such as Facebook, Twitter, Instagram, LinkedIn, and Pinterest. From short-form updates to eye-catching graphics and videos, we create content that sparks conversations, drives engagement, and builds brand awareness.",
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
      <div className="content-write d-flex align-items-center justify-content-center">
        <h3 className="fs-1 fw-bold text-light content-text">
          Content Writing
        </h3>
      </div>

      <div className="best-content py-2 my-3">
        <div className="container my-3 ">
          <h1 className="fw-bold  text-center ">
            Best Content Writing Services!
          </h1>

          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6">
              <img
                src="assets/content-writing-2.png"
                alt=""
                width={500}
              />
            </div>
            <div className="col-lg-6 col-md-6" style={{ textAlign: "justify" }}>
              <p>
                SS Tech Services provides best content writing services for your
                business need. We are one of the best content writing agency in
                India. We provide content writing services for your business
                need like content for website, article content, News content and
                other. It is one of the best content writing company. Our SS
                Tech Services have provided content services to 100+ businesses
                and all over India. We have a dedicated team of content writers
                who have deep knowledge of content writing and make the best
                strategy for your business websites son that you can rank in
                SERP.
              </p>
              <p>
                SS Tech Services is a leading content writing agency in India.
                We are one of the best content writing service providers in
                India and around the world. We understand the nature of your
                business and make a plan accordingly that help you to rank in
                Top results. SS Tech delivers Seo content writing services for
                every type of businesses. We aim to increase your brand
                awareness with the help of content writing, we target your right
                audience. Our team of content writing experts have a deep
                knowledge of content writing in various industries and market,
                which makes us easy to create a compelling content that help you
                to engage your right audience.
              </p>
            </div>
          </div>

          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6" style={{ textAlign: "justify" }}>
              <p>
                At SS Tech Services we have the right solutions for all your
                business need whether it is a website content, blog posts,
                articles, social media content or any other form of written
                content. We promise you to deliver quality content that drives
                results. That’s why SS Tech Services is best content writing
                companies.
              </p>
              <p>
                At SS Tech Services, we believe that content is king, content
                plays an important role in your business strategies. We offer
                you the best content that is only designed by human but not AI.
                Our team of dedicated content writes understand the nature of
                your business and the goal of your business and design the best
                content for you that engage your right audience. With the right
                content and right audience, you can grow your brand awareness
                and reach your targeted audience.
              </p>
              <p>
                What sets us apart is our commitment to excellence and attention
                to detail. From catchy headlines to engaging storytelling and
                flawless grammar, we take pride in delivering content that
                captivates and converts
              </p>
            </div>
            <div className="col-lg-6 col-md-6">
              <img
                src="assets/writing-1.png"
                alt=""
                width={500}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="my-3">
        <div className="container text-center">
          <h3 className=" fs-1 fw-bold">Why Need Content Writer</h3>
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
              <div className="col-lg-4 col-sm-6 px-4" key={index}>
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
                    <h5>{item.head}</h5>
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
              <img src="/assets/content-writing.gif" alt="" id="gif-img" />
            </div>
            <div className="col-lg-6 text-center">
              <h3 className=" fw-bold fs-1">Content Services We Offers</h3>
              <p>
                We tailor our content offerings to meet your specific goals,
                target audience, and industry requirements, ensuring that every
                piece of content we produce delivers maximum impact and value.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 px-3">
            <div className="row g-4">
              {offer_content.map((item, index) => (
                <div className="col-lg-6 col-sm-6" key={index}>
                  <div className="card h-100 border-0">
                    <img src={item.imgSrc} alt={item.imgAlt} />
                    <h5 className="text-center">{item.head}</h5>
                    <p>{item.para}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5 d-flex justify-content-center">
            <img
              src="/assets/01-4.png"
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
          <h3 className="fs-1 fw-bold ">Why Choose Us</h3>
          <p>
            Choosing SS Tech Services for content writing ensures that you have
            a dedicated partner who combines expertise, versatility, attention
            to detail, and transparent communication to deliver high-quality
            content that drives results for your business.
          </p>

          <div className="row g-4">
            {why_card.map((item, index) => (
              <div className="col-lg-4 px-3" key={index}>
                <h5>{item.head}</h5>
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
