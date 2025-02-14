import React from "react";

export default function Child_Img() {
  const data = [{ imgSrc: "/assets/parts/air_filter.jpg" }];
  return (
    <>
      <div className="child-img my-5">
        <div className="container">
          {data.map((item, index) => (
            <div key={index} className="img-container border">
              <img
                src={item.imgSrc}
                alt=""
                style={{ width: "100%", height: "200px", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
