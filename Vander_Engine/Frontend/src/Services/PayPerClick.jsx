import React from "react";
import Form from "../Pages/Form";
import Information from "../Pages/Information";

export default function PayPerClick() {
  const why_card = [
    {
      imgSrc:
        "https://fundsnetservices.com/wp-content/uploads/fixed-budget-vs-variable-budget-700x467.jpg",
      head: "Flexible Budgeting:",
      para: "Google Ads offers flexible budgeting options, allowing businesses of all sizes to run ads within their budget constraints. Whether you have a modest budget or a large one, you can set daily or monthly spending limits and adjust your budget as needed to optimize performance and achieve your advertising goals.",
    },
    {
      imgSrc:
        "https://priyank.singhvionline.in/wp-content/uploads/2023/10/corporate-management-strategy-solution-branding-concept-1.webp",
      head: "Measurable Results:",
      para: "Unlike traditional advertising methods, Google Ads provides detailed insights and analytics into the performance of your campaigns in real-time. You can track metrics such as clicks, impressions, conversions, and ROI, allowing you to measure the effectiveness of your advertising efforts and make data-driven decisions to optimize performance.",
    },
  ];
  const why_card_1 = [
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhk1nJGNAccVLKmg8Y4mCySm54J9A8w-xBV9KM5r1j7mwlfZbt-WO3Twe2boS2I9u6TBg&usqp=CAU",
      head: "Competitive Advantage:",
      para: "In today’s competitive digital landscape, having a strong presence on Google can give your business a significant competitive advantage. By leveraging Google Ads, you can outshine competitors, capture market share, and stay top of mind with potential customers searching for products or services in your industry.",
    },
    {
      imgSrc:
        "https://fifthstory.com/wp-content/uploads/Creating-positive-brand-awareness-with-lifestyle-content.jpg",
      head: "Enhanced Brand Awareness:",
      para: " Google Ads not only drives immediate traffic and leads but also enhances brand awareness and recognition over time. Even if users don’t click on your ads immediately, seeing your brand at the top of search results repeatedly can increase brand recall and influence purchase decisions down the line.",
    },
  ];
  const ppc_card = [
    {
      imgSrc:
        "https://icons.veryicon.com/png/o/system/security-help-api/web-vulnerability-distribution-multidimensional.png",
      head: "Thorough Research",
      para: "We begin by conducting thorough research to understand your business, target audience, and industry landscape. This includes identifying relevant keywords, analyzing competitor strategies, and assessing market trends to develop a comprehensive understanding of your advertising needs.",
    },
    {
      imgSrc:
        "https://img.freepik.com/premium-photo/pie-chart-3d-icon-blue-icon-isolated-white-background-3d-illustration_394271-2411.jpg?w=360",
      head: "Strategic Campaign Setup",
      para: "Based on our research, we develop a tailored Google Ads strategy designed to maximize lead generation. This includes setting up targeted campaigns, ad groups, and keywords to ensure that your ads are displayed to users actively searching for products or services like yours.",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MypiCmztlnKAi0UQFjI7YNJSMU1xg8PPFZFiAYQcYjeaYZs3GS6-Nswjm1KKChyEhbQ&usqp=CAU",
      head: "Compelling Ad Copy",
      para: "We create compelling ad copy that highlights your unique selling propositions, benefits, and offers to attract potential customers. Our ad copy is designed to stand out from the competition, grab attention, and compel users to click through to your website or landing page.",
    },
    {
      imgSrc: "https://cdn-icons-png.flaticon.com/512/11397/11397699.png",
      head: "Landing Page Optimization",
      para: "We optimize your landing pages to ensure a seamless user experience and maximize conversion rates. This includes optimizing page load times, improving mobile responsiveness, and aligning the messaging and design with your ad campaigns to encourage users to take action",
    },
    {
      imgSrc:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR4raEpw2FVsqU5HJ2HW1jlw8EsWQdEoI1vpfbg7PmVsctBxz9P",
      head: "Tracking and Reporting",
      para: "We implement conversion tracking to measure the effectiveness of your Google Ads campaigns in generating leads and conversions. Our detailed reporting provides insights into key metrics such as click-through rates, conversion rates, and cost per lead, allowing you to track the ROI of your advertising investment.",
    },
    {
      imgSrc:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/8a/21/15/8a2115bd-1814-ddd8-62d5-ff6127c55522/AppIcon-0-1x_U007emarketing-0-7-0-85-220-0.png/512x512bb.jpg",
      head: "Bid Management",
      para: "Our bid management strategy involves strategically adjusting bids based on performance data and campaign objectives. We optimize bids to maximize ad visibility, click-through rates, and conversions while maintaining cost efficiency. By continuously monitoring bid levels and adjusting them as needed, we ensure that your ads remain competitive in the auction and drive the best possible results.",
    },
  ];
  return (
    <div>
      <div className="ppc">
        <div className="container-fluid h-100 ">
            <div className="col-lg-6 d-flex flex-column align-items-center px-3">
              <img src="assets/ppc.png" alt="" className="ppc-img" />
              <h1 id="ppc-head" className="fw-bold text-center"></h1>
              <p className="text-white" style={{fontSize:"14px"}}>
                SS Tech Services is one of the best Google ads service provider.
                We provide high quality leads for your business and increase
                ROI. SS Tech Services is one of the best google ads agency in
                India. Our dedicated team of google ads experts have years of
                experience in managing google ads. We manage ads for different
                business in India and around the world. AT SS Tech we understand
                the nature of your business and make strategies that is result
                oriented. Our team have good knowledge of keyword optimization,
                bidding, to choose right audience. We have generated 100s of
                high quality leads per day for our customers.
              </p>
            </div>
        </div>
      </div>

      <div className="ppc-manage">
        <div className="container text-center">
          <h4 className="fs-1 fw-bold">Google Ads Management Service</h4>
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
            Why You Need Google Ads Management
          </h4>

          <div className="row align-items-center why-ppc">
            <div className="col-lg-5">
              <img
                src="/assets/ppc-row.png"
                alt=""
                width={400}
                style={{ marginLeft: "0px" }}
              />
            </div>
            <div className="col-lg-7">
              <div className="row my-3 g-4">
                {why_card.map((item, index) => (
                  <div className="col-lg-6 col-sm-6" key={index}>
                    <div
                      className="card border-0 h-100"
                      style={{ boxShadow: "0 0 10px" }}
                    >
                      <img src={item.imgSrc} alt="" className=" rounded" />
                      <div className="card-body">
                        <h6 className="text-center">{item.head}</h6>
                        <p style={{ fontSize: "14px" }}>{item.para}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="row my-3 g-4">
                {why_card_1.map((item, index) => (
                  <div className="col-lg-6 col-sm-6" key={index}>
                    <div
                      className="card border-0 h-100"
                      style={{ boxShadow: "0 0 10px" }}
                    >
                      <img src={item.imgSrc} alt="" className=" rounded" />
                      <div className="card-body">
                        <h6 className="text-center">{item.head}</h6>
                        <p style={{ fontSize: "14px" }}>{item.para}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-5">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigg62-Au63h8YWQV24uM15ToQmv_15usSc9x8hBSB1A1lqPaxmaDb_MbkAsViqv__Uk67BfGTVypEGXhaxcuvCKNq-Ui4tqbtYhlDYg1p5_9KgQFhV7aLzkJJBzHoo9Z2ZOzpXsSfe7U93vKjfvez1wrDMmxhEyBUR2sBJII8tgT4_g3FlXfEuABKw/s469/tutorial%20google%20ads.jpg"
                alt=""
                width={500}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="ppc-work">
        <div className="container text-center">
          <h4 className="fs-1 fw-bold ">How We Works</h4>
          <p>
            At SS Tech, we employ a strategic approach to Google Ads management
            aimed at generating high-quality leads for our clients. Here’s how
            we work on Google Ads to achieve this
          </p>

          <div className="row g-3">
            {ppc_card.map((item, index) => (
              <div className="col-lg-4 col-sm-6" key={index}>
                <div
                  className="card h-100 border-0"
                  // style={{background:"none "}}
                >
                  <img
                    src={item.imgSrc}
                    alt=""
                    height={200}
                    className=" object-fit-contain"
                  />
                  <div className="card-body">
                    <h5>{item.head}</h5>
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
