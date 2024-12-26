import React from "react";
export default function WhyChooseService() {
  return (
    <div className=" py-2">
      <div className="container  px-5 pb-5">
        <h3 className="text-center fs-1 fw-bold ">
          Why Choose <span style={{ color: "#3b6cb4" }}> Us</span>{" "}
        </h3>

        <div className=" text-center">
          choosing SS Tech Services for social media marketing ensures that you
          have a dedicated partner who combines expertise, local understanding,
          comprehensive services, and a commitment to excellence to help you
          achieve your marketing goals effectively.
        </div>

        <div className="row WhyChoose-card-row my-4 ">
          <div className="col-lg-4 text-center mb-3">
            <div
              className="card WhyChoose-card p-2 "
              style={{ backgroundColor: "#fdf8e3" }}
            >
             <img src="/asset/whysmo_1.png" alt="" style={{width:"100px" ,filter: "hue-rotate(20deg)"}} />
              <div className="card-title my-3">
                <h5>Expertise</h5>
                <p>
                  SS Tech Services boasts a team of experienced professionals
                  who specialize in social media marketing. Their expertise
                  ensures that your social media campaigns are executed
                  effectively, delivering tangible results.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center mb-3">
            {" "}
            <div
              className="card WhyChoose-card p-2"
              style={{ backgroundColor: "#f0f3fa" }}
            >
              <img src="/asset/whysmo_2.png" alt="" style={{width:"100px" ,filter: "hue-rotate(10deg)" }} />
              <div className="card-title my-3">
                <h5>Customized Strategies</h5>
                <p>
                  SS Tech Services understands that every business is unique.
                  They tailor their social media marketing strategies to align
                  with your specific goals, target audience, and industry,
                  maximizing the impact of your campaigns.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center mb-3">
            {" "}
            <div
              className="card WhyChoose-card p-2 h-100"
              style={{ backgroundColor: "#feeff0" }}
            >
              <img src="/asset/whysmo_3.png" alt="" style={{width:"100px" ,filter: "hue-rotate(35deg)"}} />
              <div className="card-title my-3">
                <h5>Local Understanding</h5>
                <p>
                  Being based, SS Tech Services has a deep understanding of the
                  local market dynamics and consumer behavior. This local
                  insight enables them to craft strategies that resonate with
                  your target audience and surrounding areas.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center mb-3">
            {" "}
            <div
              className="card WhyChoose-card p-2"
              style={{ backgroundColor: "#f0f3fa" }}
            >
              <img src="/asset/whysmo_4.png" alt="" style={{width:"100px" ,filter: "hue-rotate(45deg)"}} />
              <div className="card-title my-3">
                <h5>Comprehensive Services</h5>
                <p>
                  SS Tech Services offers a comprehensive range of social media
                  marketing services, including profile optimization, content
                  creation, ad management, and analytics. This ensures that all
                  aspects of your social media presence are covered under one
                  roof.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 text-center mb-3">
            {" "}
            <div
              className="card WhyChoose-card p-2"
              style={{ backgroundColor: "#feeff0" }}
            >
              <img src="/asset/whysmo_5.png" alt="" style={{width:"100px" ,filter: "hue-rotate(30deg)"}} />
              <div className="card-title my-3">
                <h5>Proven Track Record</h5>
                <p>
                  SS Tech Services has a proven track record of delivering
                  successful social media marketing campaigns for businesses.
                  Their portfolio of satisfied clients and case studies
                  demonstrates their ability to drive tangible results and ROI.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 text-center mb-3">
            {" "}
            <div
              className="card WhyChoose-card p-2 h-100"
              style={{ backgroundColor: "#fdf8e3" }}
            >
              <img src="asset/whysmo_6.png" alt="" style={{width:"100px" ,filter: "hue-rotate(20deg)"}} />
              <div className="card-title my-3">
                <h5>Transparent Communication</h5>
                <p>
                  SS Tech Services believes in transparent communication and
                  collaboration. They keep you informed about the progress of
                  your campaigns, provide regular reports, and are readily
                  available to address any questions or concerns you may have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
