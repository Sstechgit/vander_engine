import React from 'react';
import './TopPageSection.css'; // Importing updated CSS for responsive styling

const TopPageSection = () => {
  return (
    <div className="top_page_section">
      <div className="top_page_section_emails">
        <div className="top_page_section_email_item">
          <span className="top_page_section_icon">📧</span>
          <span style={{ color: '#790cac' }}>billing@vanderengines.com</span>
        </div>
        {/* <div className="top_page_section_email_item2">
          <span className="top_page_section_icon">📧</span>
          <span style={{ color: '#790cac' }} >15150 Cicero Avenue, Oak Forest, Il 60452</span>
        </div> */}
      </div>
      
      <div className="top_page_section_phone">
      <span className="top_page_section_icon3">📞</span>
        <span style={{ color: '#790cac' }}>Toll-Free Number</span>
        <span style={{ color: '#790cac' }}>+1844-893-1760</span>
      </div>
    </div>
  );
};

export default TopPageSection;
