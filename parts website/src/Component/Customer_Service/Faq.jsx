import React, { useState } from "react";

export default function Faq() {
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
    {
      sr: "6",
      ques: "How do I cancel my subscription?",
      ans: "Canceling your subscription with [Product/Service Name] is easy. To cancel, simply log into your account, go to the 'Account Settings' section, and select 'Cancel Subscription.' You will be prompted to confirm the cancellation. Alternatively, you can contact our customer support team, who will be happy to assist you with the cancellation process. Please note that cancellations will take effect at the end of your current billing cycle. We hope you’ll consider coming back in the future!",
    },
    {
      sr: "7",
      ques: "Are my payment details secure?",
      ans: "Absolutely! Your security is our top priority. We use industry-leading encryption methods, including [SSL/TLS], to ensure that your payment information is securely processed. Our payment gateway is compliant with PCI-DSS standards, which means that your financial data is handled with the highest level of security. We do not store your payment details on our servers, ensuring that your information is always protected from unauthorized access.",
    },
    {
      sr: "8",
      ques: "Can I update my account information?",
      ans: "Yes, you can easily update your account information at any time. To update your profile, simply log in to your account and navigate to the 'Account Settings' section. Here, you can update your personal details, billing information, password, and notification preferences. If you encounter any issues while updating your information, feel free to reach out to our support team for assistance.",
    },
    {
      sr: "9",
      ques: "What happens if I forget my password?",
      ans: "If you've forgotten your password, don’t worry—resetting it is simple. On the login page, click the 'Forgot Password' link. You’ll be prompted to enter the email address associated with your account. We will send you a password reset link to that email. Simply follow the instructions in the email to reset your password. If you don’t receive the email within a few minutes, please check your spam/junk folder or contact our support team for assistance.",
    },
    {
      sr: "10",
      ques: "Do you offer refunds?",
      ans: "Yes, we offer a [refund policy, e.g., 30-day money-back guarantee] to ensure that you're satisfied with your purchase. If you’re not happy with our product or service, you can request a refund within [specified time period, e.g., 30 days] of your purchase. Simply contact our customer support team, and they will guide you through the process. Please note that refunds are subject to our [specific refund terms] outlined in the Terms of Service.",
    },
  ];
  return (
    <div className="faq mb-5">
      <div className="container">
      <div className="d-flex mb-3">
          <i className="fa-solid fa-gear fs-2 me-2 main"></i>
          <h3 className="fs-3 fw-bold">Frequently Asked Questions :</h3>
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
