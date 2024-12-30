import React from "react";
import styles from "./Courses.module.css";
export default function Offers_courses() {
  return (
    <div className={styles.offers_courses}>
      <div className="container mt-5">
        <h3
          className="text-center fw-bold fs-1 mb-4"
          style={{ color: "#3b6cb4" }}
        >
          Our Unique Offerings
        </h3>
        <div className={`${styles.card} mb-3`}>
          <div className="row w-100">
            <div className="col-md-6">
              <ul className="h-100 d-flex flex-column justify-content-center gap-3 fw-bold">
                <li>✔️ Real-Time Webinars with Industry Leaders</li>
                <li>✔️ Hands-On Projects & Over 20 Case Studies</li>
                <li>✔️ Real-World Industry Projects</li>
                <li>✔️ Digital Marketing Program with Job Placement</li>
                <li>✔️ Career Preparation & More!</li>
              </ul>
            </div>
            <div className="col-md-6">
              <img
                src="/asset/GIRLYM.png"
                alt=""
                className="img-fluid "
                width={220}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
