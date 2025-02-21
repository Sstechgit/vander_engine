import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  useEffect(() => {
    // Add Google Ads conversion script dynamically
    const script = document.createElement("script");
    script.innerHTML = `
      gtag('event', 'conversion', {'send_to': 'AW-16768226473/QjBrCODzmpkaEKmp27s-'});
    `;
    document.head.appendChild(script);


    // Text animation logic
    const text = "Thank You";
    const container = document.querySelector(".thank-you-text");

    if (container) {
      container.innerHTML = text
        .split("")
        .map((char) => `<span>${char}</span>`)
        .join("");

      const letters = container.querySelectorAll("span");
      letters.forEach((letter, index) => {
        setTimeout(() => {
          letter.style.animation = `fadeIn 2s linear infinite ${index * 0.1}s`;
        }, 0);
      });
    }

    // Cleanup script when component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="thankyou">
      <div className="container d-flex flex-column align-items-center h-100">
        <img
          src="https://bhavikmachinery.com/images/enquiry.png"
          alt="Enquiry"
          className="img-fluid"
          width={200}
        />
        <h1>
          <span className="thank-you-text text-white"></span>
        </h1>
        <h2 className="text-white">We Will Get Back To You Soon</h2>
        <Link to="/">
          <button className="btn btn-success">Home</button>
        </Link>
      </div>
    </div>
  );
}
