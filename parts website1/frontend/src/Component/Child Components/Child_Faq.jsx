import React, { useState } from "react";

export default function Child_Faq() {
  const data = [
    {
      sr: "1",
      ques: "What is [Product/Service Name]?",
      ans: "[Product/Service Name] is a comprehensive solution designed to [solve a specific problem]. It is designed to help [target audience] by [key benefit or purpose]. Our product/service offers [unique features], ensuring that you can [accomplish specific tasks] with ease. Whether you're looking to [achieve specific goal] or streamline your [process], [Product/Service Name] is your ideal choice.",
    },
    {
      sr: "2",
      ques: "How do I get started?",
      ans: "Getting started with [Product/Service Name] is quick and easy! Simply follow these steps: First, [create an account/sign up] on our website. Next, you'll receive a [welcome email/setup instructions]. Once you're registered, you can [begin using the product/service right away, download the app, or access a dashboard]. If you need assistance, our customer support is available to guide you through the setup process.",
    },
    {
      sr: "3",
      ques: "What are the system requirements for [Product/Service Name]?",
      ans: "Our product/service is compatible with a variety of devices and platforms. To use [Product/Service Name], you will need [list of supported platforms, e.g., Windows, macOS, Android, iOS]. The minimum system requirements include [specific OS version], [processor type], and [RAM size]. For the best experience, we recommend using [specific hardware or software], which will ensure optimal performance and access to all features.",
    },
    {
      sr: "4",
      ques: "How do I contact customer support?",
      ans: "We are here to help! If you need assistance, you can reach our customer support team through multiple channels: You can email us at [support email], call our helpline at [phone number], or chat with us directly on our website using the live chat feature. Our support team is available [support hours], and we strive to resolve your issues as quickly as possible. You can also visit our Help Center for helpful articles and guides.",
    },
    {
      sr: "5",
      ques: "Is there a free trial available?",
      ans: "Yes, we offer a free trial so you can experience all the features of [Product/Service Name] without any commitment. Our free trial lasts for [length of the trial, e.g., 7 days, 30 days], during which you will have access to [list key features available during the trial]. This is the perfect opportunity for you to explore how [Product/Service Name] can benefit you. If you decide to continue, simply upgrade to a paid plan at any time before your trial ends.",
    },
  ];
  return (
    <div className="faq mb-5">
      <div className="container">
        <div className="d-flex mb-3">
          <i className="fa-solid fa-gear fs-2 me-2 main"></i>
          <h3 className="fs-3 fw-bold">INFORMATION :</h3>
        </div>
        <div className="row">
          <div className="faq-list">
            {data.map((item, index) => (
              <div key={item.sr} className="faq-item">
                <div
                  className="faq-question"
                  style={{
                    cursor: "pointer",
                    marginBottom: "10px",
                    fontWeight: "bold",
                  }}
                >
                  {item.sr}. {item.ques}
                </div>
                <div
                  className="faq-answer"
                  style={{ marginBottom: "15px", paddingLeft: "20px" }}
                >
                  {item.ans}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
