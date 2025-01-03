import React from 'react';
import './Brands.css'; // Make sure to import the CSS file
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import { Link } from 'react-router-dom';
import Porsche from './images/1.png'
import Nissan from './images/2.png'
import Mitsubishi from './images/3.png'
import Mini from './images/4.png'
import Mercedes from './images/5.png'
import Land_Rover from './images/6.png'
import Kia from './images/7.png'
import Hyundai from './images/8.png'
import Geo from './images/9.png'
import Datsun from './images/10.png'
import Audi from './images/12.png'
import Bmw from './images/13.png'
import Acura from './images/15.png'
import Jaguar from './images/17.png'
import Honda from './images/16.png'
import Infiniti from './images/18.png'
import Lexus from './images/20.png'
import Volvo from './images/22.png'
import Toyota from './images/23.png'
import Suzuki from './images/24.png'
import Subaru from './images/25.png'
import Scion from './images/26.png'
import Saturn from './images/27.png'
import Buick from './images/Buick-logo.png'
import Cadillac from './images/cad.png'
import Chevy from './images/chevy.png'
import Ford from './images/ford.png'
import GMC from './images/gmc.png'
import Hummer from './images/hummer.png'
import ISUZU from './images/isuzu.png'
import Jeep from './images/jeep.png'
import Lincoln from './images/lin.png'
import Mercury from './images/Mercury.png'
import Oldsmobile from './images/olds.png'
import Volkswagen from './images/volks.png'
import Saab from './images/saab.png'
import Plymouth from './images/ply.png'
import Mazda from './images/21.png'





const brands = [
  { name: 'Porsche Engines', logo: Porsche},
  { name: 'Nissan Engines', logo: Nissan},
  { name: 'Mitsubishi Engines', logo: Mitsubishi},
  { name: 'Mini Engines', logo: Mini},
  { name: 'Land Rover Engines', logo: Land_Rover},
  { name: 'Kia Engines', logo: Kia},
  { name: 'Hyundai Engines', logo: Hyundai},
  { name: 'Geo Engines', logo: Geo},
  { name: 'Datsun Engines', logo: Datsun},
  { name: 'Audi Engines', logo: Audi},
  { name: 'Bmw Engines', logo: Bmw},
  { name: 'Acura Engines', logo: Acura},
  { name: 'Jaguar Engines', logo: Jaguar},
  { name: 'Honda Engines', logo: Honda },
{ name: 'Infiniti Engines', logo: Infiniti },
{ name: 'Lexus Engines', logo: Lexus },
{ name: 'Volvo Engines', logo: Volvo },
{ name: 'Toyota Engines', logo: Toyota },
{ name: 'Suzuki Engines', logo: Suzuki },
{ name: 'Subaru Engines', logo: Subaru },
{ name: 'Scion Engines', logo: Scion },
{ name: 'Saturn Engines', logo: Saturn },
{ name: 'Buick Engines', logo: Buick },
{ name: 'Cadillac Engines', logo: Cadillac },
{ name: 'Chevy Engines', logo: Chevy },
{ name: 'Ford Engines', logo: Ford },
{ name: 'GMC Engines', logo: GMC },
{ name: 'Hummer Engines', logo: Hummer },
{ name: 'ISUZU Engines', logo: ISUZU },
{ name: 'Jeep Engines', logo: Jeep },
{ name: 'Lincoln Engines', logo: Lincoln },
{ name: 'Mercury Engines', logo: Mercury },
{ name: 'Oldsmobile Engines', logo: Oldsmobile },
{ name: 'Volkswagen Engines', logo: Volkswagen },
{ name: 'Saab Engines', logo: Saab },
{ name: 'Plymouth Engines', logo: Plymouth },
{ name: 'Mazda Engines', logo: Mazda },




  // Add more brands here...
];

const Brands = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook to get current location

  const handleNavigation = () => {
    if (location.pathname === '/engines') {
      // If already on the Contact Us page, scroll to the form
      window.scrollTo({
        top: 0, // Adjust this value to scroll to the form's position
        behavior: 'smooth', // Smooth scrolling
      });
    } else {
      // If not on the Contact Us page, navigate to it
      navigate('/engines', { replace: true });
    }
  };

  return (
    <div className="brands-container">
      <h2 className="brands-title">
        POPULAR <span style={{ color: '#790cac' }}>BRANDS</span>
      </h2>
      <p className="brands-description">
        We provide quality used engines and transmissions of nearly all the popular brands. 
        So, if you need a low-mileage, replacement used engine or transmission, click on the 
        icon below to explore your options.
      </p>
      <div className="brands-slider">
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div className="brand-card" key={index} onClick={handleNavigation}>
              <img src={brand.logo} alt={brand.name} className="brand-logo" />
              <span>{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;


