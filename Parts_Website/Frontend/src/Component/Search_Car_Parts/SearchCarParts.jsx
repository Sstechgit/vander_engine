import React, { useEffect, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import axios from "axios"; // Add this import
import EngineList from "../Includes/EngineList";
import "../Transmission/transmission.css";
import "../Engine/Engine.css";
import ReadMore from "../Transmission/ReadMore";
import EngineForm from "../Engine//EngineForm";
import { Helmet } from "react-helmet";
import HomeForm from "../Home/HomeForm";
import Achievement from "../Contact/achievement";
import FindTransmission2 from "../Transmission/FindTransmission2";
import ShopMake from "../Home/ShopMake";
export default function SearchCarParts({ handleAddToCart, showproduct }) {

  const [data, setData] = useState(null);


  // Phone number validation function
  const validatePhoneNumber = (number) => {
    // Ensure the number always starts with '+1'
    if (!number.startsWith("+1")) {
      return "Phone number must start with +1.";
    }

    const numberWithoutPrefix = number.slice(2); // Remove '+1'

    const isValidLength = numberWithoutPrefix.length === 10; // Check for exactly 10 digits
    const isDigitsOnly = /^[0-9]+$/.test(numberWithoutPrefix); // Ensure only digits
    const noRepeatedDigits = /^(?!.*(\d)\1{6}).*$/; // Prevent more than 2 repeated digits
    const dummyNumbers = [
      "1234567890",
      "9876543210",
      "1111111111",
      "2222222222",
    ];

    if (!isValidLength) {
      return "Phone number must be exactly 10 digits after +1.";
    }
    if (!isDigitsOnly) {
      return "Phone number can only contain digits.";
    }
    if (dummyNumbers.includes(numberWithoutPrefix)) {
      return "Phone number cannot be a common dummy number.";
    }
    if (!noRepeatedDigits.test(numberWithoutPrefix)) {
      return "Phone number cannot have more than 6 consecutive repeated digits.";
    }

    return ""; // Valid number
  };

  const [formData, setFormData] = useState({
    part: "",
    make: "",
    model: "",
    year: "",
    variant: "",
    name: "",
    phone: "+1",
    email: "",
    message: "",
    agreed: "",
  });
  useEffect(() => {
    if (formData.part) {
      const apiURL =
        formData.part === "Engine"
          ? "https://backend.vanderengines.com/api/engines"
          : "https://backend.vanderengines.com/api/transmission";

      axios
        .get(apiURL)
        .then((response) => {
          setData(response.data);

          // Fetch makes independently of year
          const allMakes = new Set();
          Object.keys(response.data).forEach((year) => {
            Object.keys(response.data[year]).forEach((make) => {
              allMakes.add(make);
            });
          });

          setMakes([...allMakes]); // Set unique makes
          setYears(Object.keys(response.data)); // Retain years if needed
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [formData.part]);


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

  // Handle form submission

  const content1 =
    "Auto Parts Leads offers top-quality used engines across the United States. We collaborate with junkyards and salvage yards nationwide to ensure a wide selection of parts. When a customer requests an engine, our mechanical team carefully inspects all available options to find the perfect match, delivering the best deals, highest warranties, affordable prices, and quality engines. Auto Parts Leads also frequently provides free shipping, helping you save between $100 and $250 on each part you need.";
  const content2 =
    "Our system also reviews post-delivery terms and conditions to ensure that if any part is defective or damaged, you have the option for returns and refunds. At Auto Parts Leads, we ensure that you find the best-used engine with just a click, taking advantage of the best available offers. Don’t delay—fill out the form and receive a quote in your email instantly.";
  const content3 =
    "The engine is the core of your vehicle and essential for its longevity. Proper maintenance is crucial to keep it running smoothly. While high-quality engines can be costly, we offer a solution through our online support in the USA. At Auto Parts Leads, you can explore a wide range of premium engines to suit any budget.";
  const content4 =
    "Rather than spending a fortune on a new engine, you can save both time and money by purchasing a used engine online. Auto Parts Leads is a leading online seller of used engines, providing customized products at some of the most competitive prices in the industry.";

  return (
    <>
      <Helmet>
        <title>Auto Parts Leads | Quality Used & Remanufactured Engines </title>
        {/* <meta name="description" content="This is a description of my page." /> */}
      </Helmet>
      <div className="engine-upper d-flex flex-column">
        <div className="engine-hero "></div>

      </div>
      <div className="container">
        <HomeForm />
      </div>

      <Achievement />
      <div className="find-transmission">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center">
              {/* <h4 className="">
                      Find Your <span>Engine </span>
                    </h4> */}
              <FindTransmission2 />
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <img
                src="/assets/engine-page-2.jpg"
                alt=""
                className=" mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic"
                style={{ objectFit: "contain" }}
                width={400}
                height={230}
              />
              <div className="col-lg-12">
                <div className="card">
                  <a
                    href="tel:+18448931760"
                    target="_self"
                    aria-label="call us now"
                  >
                    <i class="fa-solid fa-phone"></i>
                  </a>
                  <div className="card-body">
                    <div className="card-title">
                      <h6>SPEAK WITH A SPECIALIST NOW</h6>

                      <h6 className="fs-4 text-center">+1-800-213-1371</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShopMake />
      {/*-------------------------Engine Hero Section-----------------------*/}
      {/* 
      <div className=" d-flex flex-column h-100 justify-content-end">
        <EngineForm
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          handleAddToCart={handleAddToCart}
          showproduct={showproduct}
          origin="Engine"
        />
      </div> */}



      {/*-------------------------Content of Engine-----------------------*/}
      {/* <div className="transmission-content mt-5">
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
      </div> */}

      {/*-------------------------Search Engine------------------------*/}
      {/* <div className="search-transmission my-5 head1">
        <h3 className="text-center mb-3">
          Search Your <span>Engine</span>
        </h3>
        <EngineList />
      </div> */}
    </>
  );
}
