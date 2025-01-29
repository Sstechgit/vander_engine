import React from "react";
import styles from "./Courses.module.css";
export default function Offers_courses() {
  return (
    <div className={styles.offers_courses}>
      <div className="container mt-5 ">
        <h3
          className="text-center fw-bold fs-1 mb-4"
          style={{ color: "#ff9c00" }}
        >
          Our Unique Offerings
        </h3>
        <div className={`${styles.card} mb-3`}>
          <div className="row w-100">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img
                src="/asset/GIRLYM.png"
                alt=""
                className="img-fluid "
                width={400}
              />
            </div>
            <div className="col-md-6 fw-bold text-center">
              <div className={`row align-items-center justify-content-center h-100 py-4 ${styles.unique}`} >
                <div className="col-lg-4 mb-3">
                  <div className={`${styles.card1}`}>
                    <img src="/asset/course-1.png" alt="img" width={60} />
                    <p>
                      Real-Time Webinars with Industry Leaders
                      </p>
                   
                  </div>
                </div>
                <div className="col-lg-4 mb-3">
                  <div className={`${styles.card1}`} >
                    <img src="/asset/course-2.png" alt="" width={60} />
                      <p>Hands-On Projects & Over 20 Case Studies</p>
                  </div>
                </div>
                <div className="col-lg-4 mb-3">
                  <div className={`${styles.card1}`}>
                  <img src="/asset/course-3.webp" alt="" width={60} />
                  <p>Digital Marketing Program with Job Placement</p>                   
                  </div>
                </div>
                <div className="col-lg-4 mb-3">
                  <div className={`${styles.card1}`}>
                  <img src="/asset/course-4.webp" alt="" width={60} />
                  <p>Real-World Industry Projects</p>
                  </div>
                </div>                
                <div className="col-lg-4 mb-3">
                  <div className={`${styles.card1}`}>
                  <img src="/asset/course-5.png" alt="" width={60} />
                  <p>Career Preparation & More!</p>                                        
                  </div>
                </div>
               
              </div>
              {/* <ul className="h-100 d-flex flex-column justify-content-center gap-3 fw-bold">
                <li>✔️ Real-Time Webinars with Industry Leaders</li>
                <li>✔️ Hands-On Projects & Over 20 Case Studies</li>
                <li>✔️ Real-World Industry Projects</li>
                <li>✔️ Digital Marketing Program with Job Placement</li>
                <li>✔️ Career Preparation & More!</li>
              </ul> */}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
