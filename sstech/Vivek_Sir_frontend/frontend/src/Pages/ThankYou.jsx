import React, { useEffect } from "react";
import "./Popup.css";
export default function ThankYou() {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.innerHTML = `
      gtag('event', 'conversion', {
        'send_to': 'AW-16768226473/ALzeCO_9yeYZEKmp27s-',
       
      }); 
    `;
    
    // Append script to the head section of the document
    document.head.appendChild(script);

    // Clean up the script after component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <div>
      <div className="thankyou">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center ">
            <div className="sweet-circle d-flex align-items-center justify-content-center">
                <div className="sweet-check"></div>
            </div>
          <h1 className="fw-bold">Thank You</h1>
          <h3>The Form Was Submitted Successfully</h3>
        </div>
      </div>
    </div>
  );
}
