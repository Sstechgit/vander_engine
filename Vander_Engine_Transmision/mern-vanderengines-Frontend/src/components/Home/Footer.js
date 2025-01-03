import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  // Adding the Tawk.to script
  useEffect(() => {
    const s1 = document.createElement('script');
    s1.async = true;
    s1.src = 'https://embed.tawk.to/644bc9704247f20fefee4dfe/1gv40locm';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    document.body.appendChild(s1);

    // Cleanup function to remove the script if the component is unmounted
    return () => {
      document.body.removeChild(s1);
    };
  }, []);

  return (
    <footer className="footer">
      {/* Waving background SVG */}
      <div className="wave-background">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="100%"
          viewBox="0 0 1600 900"
        >
          <defs>
            <linearGradient id="bg" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#790cac' }} />
              <stop offset="100%" style={{ stopColor: 'rgba(121, 12, 172, 0.06)' }} />
            </linearGradient>
            <path
              id="wave"
              fill="url(#bg)"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
              s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
          </defs>
          <g>
            <use xlinkHref="#wave" opacity=".3">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="8s"
                calcMode="spline"
                values="270 230; -334 180; 270 230"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".6">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="6s"
                calcMode="spline"
                values="-270 230;243 220;-270 230"
                keyTimes="0; .6; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".9">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="4s"
                calcMode="spline"
                values="0 230;-140 200;0 230"
                keyTimes="0; .4; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
          </g>
        </svg>
      </div>

      <Container className="text-center footer-content">
        <div className="footer-contact mb-3">
          <p>
            Contact us: <a href="tel:+1844-893-1760">+1844-893-1760</a> |{' '}
            <a href="mailto:billing@vanderengines.com">billing@vanderengines.com</a>
          </p>
        </div>
        <div className="footer-social mb-3">
          <a href="#facebook" className="social-icon mx-2">
            <FaFacebookF />
          </a>
          <a href="#instagram" className="social-icon mx-2">
            <FaInstagram />
          </a>
          <a href="#linkedin" className="social-icon mx-2">
            <FaLinkedinIn />
          </a>
        </div>
        <div className="footer-links mb-3">
          <a href="#privacy-policy" className="mx-2">Privacy Policy</a>
          <a href="#terms" className="mx-2">Terms & Conditions</a>
        </div>
        <div className="footer-note mt-2">
          <p>&copy; {new Date().getFullYear()} Vander Engines. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

