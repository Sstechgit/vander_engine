import React, { useEffect, useState } from "react";

const RingCentralMessengerScript = ({ record }) => {
  const [rcLoaded, setRcLoaded] = useState(false);

  useEffect(() => {
    const loadRingCentralScript = () => {
      const script = document.createElement("script");
      script.src = "https://apps.ringcentral.com/integration/ringcentral-embeddable/latest/adapter.js";
      script.onload = () => setRcLoaded(true);
      document.body.appendChild(script);
    };

    loadRingCentralScript();

    // Clean up function to remove script if the component unmounts
    return () => {
      const scriptElements = document.querySelectorAll('script[src="https://apps.ringcentral.com/integration/ringcentral-embeddable/latest/adapter.js"]');
      scriptElements.forEach(script => script.remove());
    };
  }, []);

  const handleSendMessage = () => {
    if (!rcLoaded) {
      console.error("RingCentral SDK not loaded yet.");
      return;
    }

    const phoneNumber = record.phone; // Adjust as needed
    const messageContent = "Your message here"; // Customize your message

    // Assuming RingCentral SDK is now available in the global scope
    if (window.RingCentral) {
      window.RingCentral.sendSMS(phoneNumber, messageContent)
        .then(response => {
          // console.log("Message sent successfully", response);
        })
        .catch(error => {
          console.error("Error sending message", error);
        });
    }
  };

  return (
    <button onClick={handleSendMessage} style={{ padding: "5px 10px" }}>
     
    
    </button>
  );
};

export default RingCentralMessengerScript;
