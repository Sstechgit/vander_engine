import React, { useEffect } from "react";
import TransmissionList from "../Includes/TransmissionList";
import { useSearchParams, useParams } from "react-router-dom";
import axios from "axios"; // Add this import
import "./transmission.css";
import Transmissionform from "./Transmissionform";
import ReadMore from "./ReadMore";
import AOS from "aos";
import { Helmet } from "react-helmet";

export default function Transmission({ handleAddToCart, showproduct }) {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const { year, make, model, variant } = useParams();

  useEffect(() => {
    // Fetch data using the URL parameters
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://backend.vanderengines.com/api/transmission/${year}/${make}/${model}`
        );
        console.log("Transmission Data:", response.data);
      } catch (error) {
        console.error("Error fetching engine data:", error);
      }
    };

    if (year && make && model) {
      fetchData();
    }
  }, [year, make, model]);

  const content1 =
    "Looking for a top-notch car transmission without breaking the bank? You've come to the right place. The transmission is crucial—second only to the engine itself— and with our reliable options, you can avoid the hassle and expense of a brand-new one. A brand-new transmission might be expensive, but we have cost-effective alternative: high-quality used transmissions from trusted dealers across the country.";
  const content2 =
    "At Vander Engines, we make it easy for you to find the perfect transmission with our custom inventory. As a leading online resource for used transmissions, Vander Engines is dedicated to providing you with top-quality products at unbeatable prices. Trust us to help you keep your vehicle running smoothly without overspending.";
  const content3 =
    "At Vander Engines, finding the perfect used transmission has been easier with our mechanical team. Simply provide details about your vehicle—such as the brand, model, and year—and let our tool do the rest. Whether you’re looking for a transmission for a BMW, Honda, Chevy, or any other vehicle, Vander Engines has you covered. We offer both standard and automatic transmissions, ensuring you find the best deals on high-grade parts. With our user-friendly search tool, finding a reliable, affordable transmission takes just minutes.";
  const content4 =
    "Here’s how it works: Enter Your Vehicle Details: Fill out the fields with your car’s information and hit the search button. Get Results: Receive a curated list of high-quality transmission options from Vander Engines. Order with Ease: Select the transmission that fits your needs and budget, then provide your contact details. Our dealers will reach out to you within 24 hours to finalize your purchase.";

  return (
    <>
    <Helmet>
      <title>Vander Engines | Quality Used & Remanufactured Transmissions</title>
    </Helmet>
      {/*-------------------------Transmission- Hero-----------------------*/}
      {/* <div className="transmission-hero "></div> */}
      <div className="d-flex flex-column h-100 justify-content-end ">
        <Transmissionform
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          handleAddToCart={handleAddToCart}
          showproduct={showproduct}
        />
      </div>

      {/*-------------------------Content of Transmission------------------------*/}
      <div className="transmission-content">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h5>
            Discover Affordable, High-Quality Car Transmissions with Vander
            Engines
          </h5>
        </div>
      </div>
      <div className="transmission-para mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <div className="card p-3">
                <ReadMore text={content1} />
              </div>
            </div>
            <div className="col-lg-3 mb-3">
              <div className="card p-3">
                <ReadMore text={content2} />
              </div>
            </div>
            <div className="col-lg-3 mb-3">
              <div className="card p-3">
                <ReadMore text={content3} />
              </div>
            </div>
            <div className="col-lg-3 mb-3">
              <div className="card p-3">
                <ReadMore text={content4} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-------------------------Search Transmission------------------------*/}
      <div className="search-transmission my-4 head1">
        <h3 className="text-center mb-3">
          Search Your <span>Transmission</span>
        </h3>
        <TransmissionList />
      </div>
    </>
  );
}
