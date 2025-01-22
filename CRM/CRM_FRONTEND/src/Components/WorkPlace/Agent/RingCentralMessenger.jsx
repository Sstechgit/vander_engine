import React from "react";
import { Button } from 'antd'; 
const RingCentralMessenger = ({ record, onOpenIframe }) => {
  const handleSendMessage = () => {
    const phoneNumber = record.phone; // Adjust as needed
    const messageContent = "Your message here"; // Customize your message

    // Call the function to open the iframe in the CRM
    onOpenIframe(phoneNumber, messageContent);
  };

  return (
    <Button  type="primary" onClick={handleSendMessage} style={{ padding: "5px 10px" }}>
      <i className="fa-solid fa-comment"></i> {/* Your SMS icon */}
    </Button>
  );
};

export default RingCentralMessenger;
