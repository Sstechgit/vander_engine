import React, { useState } from "react";
import "./SearchInventory.css";
import LoadingSpinner from "../Loader/LoadingSpinner";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ThankYouPopup from "../ThankYou/thankyou";
import { useNavigate } from "react-router-dom";
import engine_image1 from "./images/Engines/engine_main_1.png";
import engine_image2 from "./images/Engines/engine_main_2.png";
import engine_image3 from "./images/Transmission/Transmission.png";
import { faCogs, faCar, faCalendarAlt, faEnvelope, faUser, faPhone, faComment } from '@fortawesome/free-solid-svg-icons';
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
const HeadlineQuoteForm = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [formData, setFormData] = useState({
    part: "",
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
      const response = await fetch('https://backend.vanderenginestransmissions.com/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        navigate('/thank-you');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }finally {
      setIsLoading(false); // Stop loading
    }

  };


  return (
    <>
    {isLoading && <LoadingSpinner />} {/* Display the loading spinner when loading */}
    <Container className="search_conatiner_all">
      <Row className="search_form_row">
        <Col md={12} sm={12} className="main_form_column">
          <form onSubmit={handleSubmit}>
            <Row>
              <div className="quote-container">
                <h1>Search Your Product</h1>
                <h2>Fill Up The Form</h2>
              </div>
              <Col md={6} sm={6} xs={6} className="main_form_left side">
                <div className="search_headline-form-group">
                  <div className="search_input-icon-wrapper">
                    <FontAwesomeIcon icon={faCogs} className="input-icon" />
                    <select
                      className="Search_custom-dropdown"
                      name="part"
                      value={formData.part}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Part</option>
                      <option value="Engine">Engine</option>
                      <option value="Transmission">Transmission</option>
                    </select>
                  </div>
                </div>
                <div className="search_headline-form-group">
                  <div className="search_input-icon-wrapper">
                    <FontAwesomeIcon icon={faCar} className="input-icon" />
                    <select
                      className="Search_custom-dropdown"
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
                <div className="search_headline-form-group">
                  <div className="search_input-icon-wrapper">
                    <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
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
                <div className="search_headline-form-group">
                  <div className="search_input-icon-wrapper">
                    <FontAwesomeIcon icon={faPhone} className="input-icon" />
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
              </Col>
              <Col md={6} sm={6} xs={6} className="form_right side">
                <div className="search_headline-form-group">
                  <div className="search_input-icon-wrapper">
                    <FontAwesomeIcon icon={faCar} className="input-icon" />
                    <select
                      className="Search_custom-dropdown"
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
                <div className="search_headline-form-group">
                  <div className="search_input-icon-wrapper">
                    <FontAwesomeIcon icon={faCalendarAlt} className="input-icon" />
                    <select
                      className="Search_custom-dropdown"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      required
                      disabled={!formData.model}
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
                <div className="search_headline-form-group">
                  <div className="search_input-icon-wrapper">
                    <FontAwesomeIcon icon={faUser} className="input-icon" />
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
                <div className="search_headline-form-group">
                  <div className="search_input-icon-wrapper">
                    <FontAwesomeIcon icon={faComment} className="input-icon" />
                    <input
                      type="text"
                      name="Message"
                      placeholder="Any Message"
                      value={formData.Message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </Col>
              <div className="main_headline-form-group checkbox mb-2">
                  <input
                    type="checkbox"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleChange}
                    required
                  />
                  <span className="ms-2 fs-5">I have read and Agree to the Privacy Policy and Terms & Conditions.</span>
                  <br />

                </div>
                <label className="">
                  By submitting the contact form and signing up for texts, you consent to receive
                  _text messages from
                  <span className="fw-bold mx-2" style={{ color: "#790cac" }}>     Vander Engines      </span>
                  the number provided. Consent is not a condition of purchase. Message frequency varies. Message and data rates may apply. You can unsubscribe at any time by replying STOP. Text HELP to get help.
                </label>
              <button type="submit" className="submit-btn">
                Search
              </button>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default HeadlineQuoteForm;
