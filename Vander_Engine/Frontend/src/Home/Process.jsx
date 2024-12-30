import React, { useEffect } from "react";
import AOS from "aos";
export default function Process() {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);
  const card = [
    { imgSrc: "/assets/QuoteRequest.svg" },
    { imgSrc: "/assets/phone.svg" },
    { imgSrc: "/assets/icon1.svg" },
  ];
  return (
    <>
      <div className="process mt-5  text-center head1">
        <h3>Process</h3>
        <h4>How It's Work</h4>
      </div>
      <div className="process-icon mb-5 mt-5">
        <div className="container">
          <div className="row my-3 justify-content-center">
            {card.map((item, index) => (
              <div className="col-lg-3 mb-4" key={index}>
                <div className="card h-100 process-card">
                  <img src={item.imgSrc} alt="" />
                </div>
              </div>
            ))}
            <div className="col-lg-3 float-end">
              <div className="card  process-card-1">
                <img src="/assets/support.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
