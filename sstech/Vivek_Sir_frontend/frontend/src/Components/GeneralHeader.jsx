import React from "react";
import { Link } from "react-router-dom";

export default function GeneralHeader() {
  return (
    <div className="general-header bg-white w-100">
      <div className="container h-100">
        <div className="row d-flex align-items-center h-100">
          <div className="col-lg-6 col-md-6 col-sm-6 d-flex gap-5 align-items-center">
            <Link to="mailto:abc@gmail.com" className="text-black">
              <i class="fa-solid fa-envelope"></i>
              info@sstechservices.net
            </Link>
            <Link to="tel:+18448931760" className="text-black">
              <i class="fa-solid fa-phone"></i>+16302425508
            </Link>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end social-link">
            <Link
              to="https://www.facebook.com/people/SS-TECH-Services/61561744207853/"
              className="me-3 text-reset"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </Link>
            <Link to="https://twitter.com" className="me-3 text-reset">
              <i class="fa-brands fa-twitter"></i>
            </Link>
            <Link to="https://youtube.com" className="me-3 text-reset">
              <i class="fa-brands fa-youtube"></i>
            </Link>
            <Link to="https://g.co/kgs/a8rqPoj" className="me-3 text-reset">
              <i class="fa-brands fa-google"></i>
            </Link>
            <Link
              to="https://www.instagram.com/sstech_service/"
              className="me-3 text-reset"
            >
              <i class="fa-brands fa-instagram"></i>
            </Link>
            <Link
              to="https://www.linkedin.com/company/104136889/admin/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BytFSASSwRwK1igydrXUAOA%3D%3D"
              className="me-3 text-reset"
            >
              <i class="fa-brands fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
<div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end gap-4 social-link">
  <Link to="https://facebook.com" className="me-4 text-reset">
    <img src="/socialIcon/facebook.webp" alt="" width={25} />
  </Link>
  <Link to="https://twitter.com" className="me-4 text-reset">
    <img src="/socialIcon/twitter.webp" alt="" width={25} />
  </Link>
  <Link to="https://youtube.com" className="me-4 text-reset">
    <img src="/socialIcon/youtube.webp" alt="" width={25} />
  </Link>
  <Link to="https://google.com" className="me-4 text-reset">
    <img src="/socialIcon/google.webp" alt="" width={25} />
  </Link>
  <Link to="https://instagram.com" className="me-4 text-reset">
    <img src="/socialIcon/insta.webp" alt="" width={25} />
  </Link>
  <Link to="https://linkedin.com" className="me-4 text-reset">
    <img src="/socialIcon/linkdein.webp" alt="" width={25} />
  </Link>
</div>;
