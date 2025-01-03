// src/components/ThankYou/ThankYouPage.js
import React, { useEffect } from 'react';
import Footer from '../Home/Footer';
import Footer2 from '../Home/newfooter';
import './thankyou.css';

const ThankYouPage = () => {
  useEffect(() => {
    // Fire the conversion event for the thank-you page
    window. gtag('event', 'conversion', {'send_to': 'AW-16768226473/ALzeCO_9yeYZEKmp27s-'});
  }, []);

  return (
    <div className="Search_section_popup-overlay">
      <div className="Search_section_popup-content">
        <div className="Search_section_icon-container">
          <div className="Search_section_pour-icon"></div>
          <div className="Search_section_checkmark-icon"></div>
        </div>
        <div className="Search_section_heading">THANK YOU.</div>
        <div className="Search_section_message">
          Your message has been received, and we will be contacting you shortly to follow up.
          If you would like to speak to someone immediately, feel free to call.
        </div>
        <button className="Search_section_contact-btn">+1844-893-1760</button>
        <div className="Search_section_social-icons">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-linkedin"></i>
          <i className="fa fa-vimeo"></i>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYouPage;
