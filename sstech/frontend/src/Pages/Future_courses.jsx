import React from "react";
import styles from "./Courses.module.css";

export default function Future_courses() {
  const data = [
    {
      image: "/asset/3901824.png",
      title: "Career Evolution",
    },
    {
      image:
        "/asset/money-9041920_1280.webp",
      title: "Top-Tier Salaries",
    },
    {
      image: "/asset/8745465.png",
      title: "Entrepreneurial Prospects",
    },
    {
      image: "/asset/corporate-min.webp",
      title: "Market Dominance & More!",
    },
  ];
  return (
    <div className={`${styles.future} `}>
  <div className="container">
    <h3 className="text-center fw-bold fs-1 mb-4" style={{ color: "#3b6cb4" }}>
      Unlock the Future of Digital Marketing
    </h3>
    <div className="row">
      {data.map((item, index) => (
        <div key={index} className="col-md-3 mb-3">
          <div
            className={`${styles.card} card h-100 d-flex align-items-center flex-column text-white`}
            style={{
              background: "linear-gradient(rgb(8 24 99 / 99%), rgb(5, 9, 28))", // you can still use inline style if you want
            }}
          >
            <img src={item.image} alt={item.title} width={100} />
            <div className="card-body text-center">
              <h5 className="card-title">{item.title}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}
