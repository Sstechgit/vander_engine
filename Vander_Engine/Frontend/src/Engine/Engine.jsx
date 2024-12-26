import React, { useEffect } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import axios from "axios"; // Add this import
import EngineList from "../Includes/EngineList";
import "../Transmission/transmission.css";
import "./Engine.css";
import Achievement from "../Contact/achievement";
import ReadMore from "../Transmission/ReadMore";
import AOS from "aos";
import EngineForm from "./EngineForm";
import { Helmet } from "react-helmet";

export default function Engine({ handleAddToCart, showproduct }) {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const { year, make, model } = useParams();

  useEffect(() => {
    // Fetch data using the URL parameters
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://backend.vanderengines.com/api/engines/${year}/${make}/${model}`
        );
        console.log("Engine Data:", response.data);
      } catch (error) {
        console.error("Error fetching engine data:", error);
      }
    };

    if (year && make && model) {
      fetchData();
    }
  }, [year, make, model]);

  const content1 =
    "Vander Engines offers top-quality used engines across the United States. We collaborate with junkyards and salvage yards nationwide to ensure a wide selection of parts. When a customer requests an engine, our mechanical team carefully inspects all available options to find the perfect match, delivering the best deals, highest warranties, affordable prices, and quality engines. Vander Engines also frequently provides free shipping, helping you save between $100 and $250 on each part you need.";
  const content2 =
    "Our system also reviews post-delivery terms and conditions to ensure that if any part is defective or damaged, you have the option for returns and refunds. At Vander Engines, we ensure that you find the best-used engine with just a click, taking advantage of the best available offers. Don’t delay—fill out the form and receive a quote in your email instantly.";
  const content3 =
    "The engine is the core of your vehicle and essential for its longevity. Proper maintenance is crucial to keep it running smoothly. While high-quality engines can be costly, we offer a solution through our online support in the USA. At Vander Engines, you can explore a wide range of premium engines to suit any budget.";
  const content4 =
    "Rather than spending a fortune on a new engine, you can save both time and money by purchasing a used engine online. Vander Engines is a leading online seller of used engines, providing customized products at some of the most competitive prices in the industry.";

  return (
    <>
      <Helmet>
        <title>Vander Engines | Quality Used & Remanufactured Engines </title>
        {/* <meta name="description" content="This is a description of my page." /> */}
      </Helmet>
      {/*-------------------------Engine Hero Section-----------------------*/}

      <div className=" d-flex flex-column h-100 justify-content-end">
        <EngineForm
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          handleAddToCart={handleAddToCart}
          showproduct={showproduct}
          origin="Engine"
        />
      </div>

      {/*-------------------------Content of Engine-----------------------*/}
      <div className="transmission-content mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h5>
            Used Engines for Sale: Your Go-To Source for Quality Auto Parts
          </h5>
        </div>
      </div>
      <div className="transmission-para my-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <div className="card p-3 h-100">
                <ReadMore text={content1} />
              </div>
            </div>
            <div className="col-lg-3 mb-3">
              <div className="card p-3 h-100">
                <ReadMore text={content2} />
              </div>
            </div>
            <div className="col-lg-3 mb-3">
              <div className="card p-3 h-100">
                <ReadMore text={content3} />
              </div>
            </div>
            <div className="col-lg-3 mb-3">
              <div className="card p-3 h-100">
                <ReadMore text={content4} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*-------------------------Search Engine------------------------*/}
      <div className="search-transmission my-5 head1">
        <h3 className="text-center mb-3">
          Search Your <span>Engine</span>
        </h3>
        <EngineList />
      </div>
    </>
  );
}
