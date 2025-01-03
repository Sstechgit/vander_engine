import { useState } from "react";
import React from "react";
import styles from "./Transmission_page.module.css";
import Footer from "../Home/Footer";
import tranmission from './images/Transmission.png';
import Brands from "./Brands/Brands";
import ThankYouPopup from "../ThankYou/thankyou";
import { Container, Row, Col } from "react-bootstrap";
import LoadingSpinner from "../Loader/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import Footer2 from "../Home/newfooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faCar,
  faCalendarAlt,
  faEnvelope,
  faUser,
  faPhone,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import FeaturedProducts from "../Home/FeaturedProducts";
const QuoteForm_Transmission = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [formData, setFormData] = useState({
    part: "Transmission",
    make: "",
    model: "",
    year: "",
    name: "",
    phone: "",
    email: "",
    Message: "",
    agreed: false
  });
 
  const [isLoading, setIsLoading] = useState(false); // State to manage loading


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true); // Start loading
    e.preventDefault();

    console.log('Submitting form data:', formData);

    try {
      const response = await fetch('https://offdiary.org/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        navigate('/thank-you'); // Show the thank you popup
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
    finally {
      setIsLoading(false); // Stop loading
    }
  };


  const makeModelMapping = {
    Toyota: [
        "camry", "Avalon", "4runner", "corolla", "gt86", 
        "land cruiser-70", "land cruiser-300", "land cruiser-j70", 
        "land cruiser-prado", "corona", "crown", "crown signia", 
        "crown sport", "echo", "sienna", "highlander", "cressida", 
        "c-hr", "Stout", "Starlet", "Supra", "Tacoma", 
        "Venza", "Yaris", "Van Wagon", "Tercel", "Tundra", 
        "Solara", "Sequoia", "T100", "Yaris IA", "MR2", 
        "Corona Mark II", "allion", "mirai", "prius", "celica", 
        "pickup", "previa", "RAV4", "paseo", "matrix", 
        "carina", "FJ Cruiser"
    ],
    Volvo: [
        "XC90", "XC60", "XC40", "V90", "V60", "V50", 
        "S90", "S80", "960", "940", "90", "850", 
        "120", "140", "164", "1800", "260", "240", 
        "30", "70", "780", "S60", "40"
    ],
    Acura: [
        "TLX", "MDX", "RDX", "ZDX", "Legend", "NSX", 
        "Vigor", "RL", "SLX", "TL", "CL", "EL", 
        "RSX", "TSX", "CSX", "ILX", "RLX", "CDX", 
        "GSX"
    ],
    Alfa_Romeo: [
        "MILANO", "GIULIA", "Alfetta", "1600", "164", 
        "4C", "2000"
    ],
    Audi: [
        "100", "200", "4000", "5000", "80", "90", 
        "A3", "A4", "A5", "A6", "A7", "A8", 
        "Allroad", "couple gt", "coupe quottro", "fox", 
        "Q3", "Q5", "Q7", "R8", "RS3", "RS4", 
        "RS5", "RS6", "RS7", "S3", "S4", "S5", 
        "S6", "S7", "SQ8", "SQ5", "TT", "V8"
    ],
    BMW: [
        "128i", "135", "850i", "ACTIVE HYBRID 5", "230i", 
        "ACTIVE HYBRID 7", "318i", "320i", "323i", "325e", 
        "325i", "328i", "328i GT", "330e", "330i", 
        "330i GT", "340i", "340i GT", "428i", "430i", 
        "435i", "440i", "524TD", "525i", "528e", 
        "528i", "530e", "530i", "535i", "535i GT", 
        "540i", "545i", "550i", "550i GT", "630CSi", 
        "633CSi", "635CSi", "640i", "335i", "335i GT", 
        "645i", "650i", "733i", "735i", "740e", 
        "740i", "BMW", "745i", "750i", "760i"
    ],
    Eagle: [
        "Summit", "Talon", "Vision"
    ],
    Ford: [
        "Aerostar", "Aspire", "Bobcat", "Bronco", "Bronco II", 
        "C-Max", "Capri", "Comet", "Contour", "Corsair", 
        "Cortina", "Courier", "Crown Victoria", "E-100 Van", 
        "E-150 Van", "E-200 Van", "E-250 Van", "E-300 Van", 
        "E-350 Van", "E-450 Super Duty Van", "E-450 Van", 
        "E-550 Van", "EXP", "Ecosport", "Edge", "escape", 
        "escort", "excursion", "Expedition", "Explorer", 
        "f-100_pickup", "F-150", "F-150 Raptor", "F-250", 
        "F-250 Super Duty", "F-350 Pickup", "F-350 Super Duty", 
        "F-450 Pickup", "F-450 Super Duty", "f-500", "f-550_super_duty", 
        "f59", "F600", "F600 LPO", "F650", "F700", 
        "F750", "F800", "FT800", "Fairlane", "Fairmont", 
        "Falcon", "Festiva", "Fiesta", "Five Hundred", 
        "Flex", "Focus", "Focus RS", "Forward Control", 
        "Freestar", "Freestyle", "Fusion", "GT", 
        "Granada", "L800", "LN600", "LN700", "LN800", 
        "LNT800", "LT800", "LTD", "LTD II", "Maverick", 
        "Mustang", "P-350", "P-400", "P-500", "P-600", 
        "Passenger Van", "Pinto", "Probe", "Ranger", 
        "Taurus", "Taurus X", "Tempo", "Thunderbird", 
        "Topaz", "Torino", "Transit 150", "Transit 250", 
        "Transit 350", "Transit Connect", "Windstar"
    ],
    Yugo: [
        "GV"
    ],
    Workhorse_Custom_Chassis: [
        "P32", "P42", "R26", "W18", "W22", 
        "W24", "W42", "W52", "W62", "W72", 
        "FasTrack FT1061", "FasTrack FT1260", "FasTrack FT1261", 
        "FasTrack FT1460", "FasTrack FT1461", "FasTrack FT1600", 
        "FasTrack FT1601", "FasTrack FT1800", "FasTrack FT1801", 
        "FasTrack FT1802", "FasTrack FT931", "LF72", "P30", 
        "P32", "P42", "R26", "W16", "W18", 
        "W20", "W21", "W22", "W24", "W25", 
        "W42", "W62"
    ],
    Volkswagen: [
        "411/412", "Atlas", "Beetle", "CC", "Cabriolet Convertible", 
        "Corrado", "Dasher", "EOS", "Eurovan", "Fox", 
        "Golf", "Golf GTI", "jetta", "Jetta GLI", "karmann Gia", 
        "Passat", "Phaeton", "Quantum", "Rabbit", "Routan", 
        "Scirocco", "Tiguan", "Touareg", "Transporter", 
        "Vanagon"
    ],
    VPG: [
        "MV-1"
    ],
    Suzuki: [
        "Aerio", "Equator", "Esteem", "Forenza", "Forsa", 
        "Kizashi", "Reno", "SX4", "Samurai", "Sidekick", 
        "Swift", "Verona", "Vitara", "X90"
    ],
    Subaru: [
        "Ascent", "BRZ", "Baja", "Brat", "Forester", 
        "Impreza", "Justy", "Legacy", "Loyale", 
        "passenger Van", "SVX", "Tribeca", "WRX"
    ],
    Chrysler: [
        "200", "2000 GTX", "300", "300M", "5TH Avenue", 
        "ALL", "Acclaim", "Aries", "Arrow Paas", "Arrow Truck", 
        "Aspen", "Barracuda", "Caravelle", "Challenger/Sapporo", 
        "Champ", "Cirrus", "Colt", "Concorde", "Conquest", 
        "Cordoba", "Crossfire", "D-50", "E-CLASS", "Imperial", 
        "LHS", "Le baron", "New Yorker (FWD)", "Newport", 
        "PT Cruiser", "Pacifica", "Premier", "Sebring", 
        "TC", "Town & Country", "Valiant", "Voyager"
    ],
    Scion: [
        "FR-S", "IA", "IQ", "Scion IM", "TC", 
        "XA", "XB", "XD"
    ],
    Saturn: [
        "Astra", "Ion", "Outlook", "Sky", "Vue"
    ],
    Lincoln: [
        "MKT", "MKX", "Navigator", "Aviator", "MKZ", 
        "Continental", "MKS", "LS"
    ],
    Lamborghini: [
        "Aventador", "Gallardo", "Huracán", "Urus"
    ],
    Land_Rover: [
        "Defender", "Discovery", "Range Rover", "Freelander", 
        "Evoque"
    ],
    Hyundai: [
        "Accent", "Elantra", "Sonata", "Tucson", "Santa Fe", 
        "Kona", "Veloster", "Ioniq", "Santa Cruz", 
        "Genesis", "Kona Electric", "Sonata Hybrid", 
        "Tucson Hybrid", "Ioniq Hybrid"
    ],
    Honda: [
        "Accord", "Civic", "CR-V", "Fit", "HR-V", 
        "Insight", "Odyssey", "Passport", "Pilot", 
        "Ridgeline", "S2000"
    ],
    Mercedes_Benz: [
        "A-Class", "C-Class", "E-Class", "S-Class", 
        "G-Class", "GLA", "GLC", "GLE", "GLS", 
        "AMG", "B-Class", "M-Class"
    ],
    Nissan: [
        "Altima", "Maxima", "Sentra", "Rogue", "Murano", 
        "Pathfinder", "Armada", "Versa", "Leaf", 
        "Frontier", "Titan", "370Z", "GT-R"
    ],
    Infiniti: [
        "Q50", "Q60", "Q70", "QX50", "QX60", 
        "QX80", "M37", "M56", "FX35", "FX37", 
        "QX4", "QX56", "I30", "I35", "G35", 
        "G37", "QX30"
    ],
    Mitsubishi: [
        "Eclipse", "Galant", "Outlander", "RVR", 
        "Mirage", "Lancer", "Mighty Max", "Montero", 
        "Outlander Sport"
    ],
    Jaguar: [
        "F-PACE", "E-PACE", "XE", "XF", "XJ", 
        "F-TYPE"
    ],
    Cadillac: [
        "Escalade", "XT5", "CT6", "XTS", "CTS", 
        "SRX", "STS", "DTS", "ELR", "ATS"
    ],
    Maserati: [
        "Ghibli", "Levante", "Quattroporte", "GranTurismo"
    ],
    Pontiac: [
        "Aztek", "Grand Am", "Grand Prix", "GTO", 
        "Solstice", "Trans Sport", "Firebird", "Vibe"
    ],
    Tesla: [
        "Model S", "Model 3", "Model X", "Model Y"
    ],
    Hummer: [
        "H1", "H2", "H3"
    ],
    Fisker: [
        "Karma"
    ],
    Polestar: [
        "1", "2", "3"
    ]
  };
  return (
    <>
    {isLoading && <LoadingSpinner />} {/* Display the loading spinner when loading */}

      <div className={styles["quoteform-transmission-wrapper"]}>
        {/* <Header /> */}
        <Container className={styles["tranmission_conatiner_all"]}>
          <Row className={styles["tranmission_form_row"]}>
            <Col md={6} sm={12} className={styles["tranmission_form_column_right"]}>
              <div>
                <img src={tranmission} alt="transmission" className={styles["img-fluid transmission"]} />
              </div>
              <div className={styles["image_text"]}>
                <h1>Used Transmissions</h1>
                <h1>for Sale with a Warranty</h1>
                <h2>Low Cost & Free Shipping +1 8448931760
                </h2>
              </div>
            </Col>
            <Col md={6} sm={12} className={styles["tranmission_form_column"]}>
              <form onSubmit={handleSubmit}>
                <Row>
                  <div className={styles["tranmission_quote-container"]}>
                    <h1>Search Your Transmission</h1>
                  </div>
                  <Col md={6} sm={6} xs={6} className={styles["tranmission_form_left"]}>
                    <div className={styles["tranmission_form-group"]}>
                      <div className={styles["input-icon-wrapper"]}>
                        <FontAwesomeIcon icon={faCogs} className={styles["input-icon"]} />
                        <select
                          className={styles["custom-dropdown"]}
                          name="part"
                          value={formData.part}
                          onChange={handleChange}
                        >
                          <option value="Transmission">Transmission</option>
                        </select>
                      </div>
                    </div>
                    <div className={styles["tranmission_form-group"]}>
                      <div className={styles["input-icon-wrapper"]}>
                        <FontAwesomeIcon icon={faCar} className={styles["input-icon"]} />
                        <select
                      className={styles["custom-dropdown"]}
                      name="make"
                      value={formData.make}
                      onChange={handleChange}
                      required
                      disabled={!formData.part}
                    >
                      <option value="">Select Make</option>
                      {Object.keys(makeModelMapping).map((make, index) => (
                        <option key={index} value={make}>
                          {make}
                        </option>
                      ))}
                    </select>
                      </div>
                    </div>
                    <div className={styles["tranmission_form-group"]}>
                      <div className={styles["input-icon-wrapper"]}>
                        <FontAwesomeIcon icon={faUser} className={styles["input-icon"]} />
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    
                    
                  </Col>
                  <Col md={6} sm={6} xs={6} className={styles["form_right side"]}>
                  <div className={styles["tranmission_form-group"]}>
                      <div className={styles["input-icon-wrapper"]}>
                        <FontAwesomeIcon icon={faCalendarAlt} className={styles["input-icon"]} />
                        <select
                          className={styles["custom-dropdown"]}
                          name="year"
                          value={formData.year}
                          onChange={handleChange}
                          required
                          disabled={!formData.part}
                        >
                          <option value="">Select Year</option>
                          <option value="1990">1990</option>
                          <option value="1991">1991</option>
                          <option value="1992">1992</option>
                          <option value="1993">1993</option>
                          <option value="1994">1994</option>
                          <option value="1995">1995</option>
                          <option value="1996">1996</option>
                          <option value="1997">1997</option>
                          <option value="1998">1998</option>
                          <option value="1999">1999</option>
                          <option value="2000">2000</option>
                          <option value="2001">2001</option>
                          <option value="2002">2002</option>
                          <option value="2003">2003</option>
                          <option value="2004">2004</option>
                          <option value="2005">2005</option>
                          <option value="2006">2006</option>
                          <option value="2007">2007</option>
                          <option value="2008">2008</option>
                          <option value="2009">2009</option>
                          <option value="2010">2010</option>
                          <option value="2011">2011</option>
                          <option value="2012">2012</option>
                          <option value="2013">2013</option>
                          <option value="2014">2014</option>
                          <option value="2015">2015</option>
                          <option value="2016">2016</option>
                          <option value="2017">2017</option>
                          <option value="2018">2018</option>
                          <option value="2019">2019</option>
                          <option value="2020">2020</option>
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                        </select>
                      </div>
                    </div>
                    <div className={styles["tranmission_form-group"]}>
                      <div className={styles["input-icon-wrapper"]}>
                        <FontAwesomeIcon icon={faCar} className={styles["input-icon"]} />
                        <select
                      className={styles["custom-dropdown"]}
                      name="model"
                      value={formData.model}
                      onChange={handleChange}
                      required
                      disabled={!formData.make}
                    >
                      <option value="">Select Model</option>
                      {formData.make && makeModelMapping[formData.make]?.map((model, index) => (
                        <option key={index} value={model}>
                          {model}
                        </option>
                      ))}
                    </select>
                      </div>
                    </div>
                    
                    <div className={styles["tranmission_form-group"]}>
                      <div className={styles["input-icon-wrapper"]}>
                        <FontAwesomeIcon icon={faPhone} className={styles["input-icon"]} />
                        <input
                          type="text"
                          name="phone"
                          placeholder="Enter Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    {/* <div className="tranmission_form-group">
                      <div className="input-icon-wrapper">
                        <FontAwesomeIcon icon={faComment} className="input-icon" />
                        <input
                          type="text"
                          name="Message"
                          placeholder="Any Message"
                          value={formData.Message}
                          onChange={handleChange}
                        />
                      </div>
                    </div> */}
                  </Col>
                  {/* <div className="tranmission_form-group checkbox">
                    <input
                      type="checkbox"
                      name="agreed"
                      checked={formData.agreed}
                      onChange={handleChange}
                      required
                    />
                    <label>
                    By clicking this, you agree to receive calls and SMS from VanderEngines.
                    </label>
                  </div> */}
                  
                    <div className={styles["tranmission_form-group"]}>
                      <div className={styles["input-icon-wrapper"]}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles["input-icon"]} />
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email ID"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  <button type="submit" className={styles["submit-btn"]}>
                    Search
                  </button>
                </Row>
              </form>
            </Col>
          </Row>
          {/* Thank You Popup */}
        </Container>
        <Row className={styles["Transmission_page_content"]}>
          <Col md={12} sm={12}>
            <div>
              <h1>About Our <span style={{ color: '#790cac' }}>Transmissions</span></h1>
              <p>Vander Engines Transmissions is a leading provider of high-quality used
                engines and transmissions in the United States. We specialize in offering a
                wide range of affordable, reliable, and thoroughly tested automotive parts for
                various vehicle brands and models. Our engines are highly tested and inspected
                before we deliver it to you. We are one of the most trusted suppliers of used
                engines and used transmissions. At our yards you can find the perfect match for
                your vehicle remanufactured engines and transmissions.
              </p>
              <span style={{ color: '#790cac' }}>
                <p>Whether you are looking to replace a worn-out engine or transmission in your
                  car, truck, or SUV, Vander Engines Transmissions has got you covered. Our
                  extensive inventory includes engines and transmissions for domestic and foreign
                  vehicles, ensuring that you find the exact part you need, no matter the make or
                  model.</p>
              </span>
              <p>
                At Vander Engines Transmissions, we understand the importance of performance
                and reliability when it comes to your vehicle. We take pride in offering
                high-quality parts at competitive prices, helping customers save on costly
                repairs while maintaining the performance and longevity of their vehicles.
              </p>
            </div>
          </Col>
        </Row>
        <FeaturedProducts />
        <Brands />
        <Footer2 />
      </div>
    </>
  );

};

export default QuoteForm_Transmission;
