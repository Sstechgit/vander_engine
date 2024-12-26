import React, { useState } from "react";
import Box from "./Box";
import Popup2 from "./Popup2";
import PricingBanner from "./Banner";
import "./PricingBox.css";
  const PricingBox = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const handleShowPopup = () => {
      setPopupVisible(true);
    };
  
    const handleClosePopup = () => {
      setPopupVisible(false);
    };
  const featureBox1 = [
    "Upto 5 Pages",
    "Logo",
    "Slider",
    "Dynamic Website",
    "1 Contact Form",
    "Testimonials",
    "Gallery Section",
    "Chat Feature",
    "Content - 10 Cent per word",
    "Social Profile Link",
    "Click to Call/Email",
    "Mobile Responsive",
    "Login Details Will Be Given",
    "Delivery in 7 Days",
    "Support – 24*7",
  ];
  const featureBox2 = [
   "Keyword Research",
"On-Page SEO ",
"Technical SEO Audit",
"Mobile Optimization",
"Content Optimization ",
"Backlink Building ",
"Local SEO",
"SEO Reporting ",
"SEO for E-Commerce",
"Competitor Analysis",
"Voice Search Optimization",
"Schema Markup",
"Video SEO",
"SEO Copywriting ",
"Content Strategy",
  ];
  const featureBox3 = [
   "Google Ads Campaign Setup",
"Facebook Ads Campaign Setup",
"Instagram Ads Management",
"LinkedIn Ads Management",
"Ad Copywriting ",
"Keyword Research for Ads",
"Ad Budget Management",
"Ad Performance Reporting ",
"Conversion Tracking Setup",
"Landing Page Optimization",
"Video Ads Creation",
"Campaign Monitoring ",
"Google Shopping Ads Setup",
"Call/Email/Chat Support",
  ];
  return (
    <>
      <PricingBanner />
      <div className="pricing-box-container">
        <Box
          price="$400-$500"
          title="Web Development"
          btnClass="btn-outline-primary"
          btnTitle="Get Started"
          feature={featureBox1}
          onButtonClick={handleShowPopup} // Pass handler to show popup
        />
        <Box
          feature={featureBox2}
          price="$500-$600"
          title="SEO Services"
          btnClass="btn-primary"
          btnTitle="Get started"
          onButtonClick={handleShowPopup} // Pass handler to show popup
        />
        <Box
          feature={featureBox3}
          price="$500-$600"
          title="Ads Management"
          btnClass="btn-primary"
          btnTitle="Get Started"
          onButtonClick={handleShowPopup} // Pass handler to show popup
        />
      </div>

      {/* Render Popup */}
      {isPopupVisible && <Popup2 onClose={handleClosePopup} />}


    </>
  );
};

export default PricingBox;
