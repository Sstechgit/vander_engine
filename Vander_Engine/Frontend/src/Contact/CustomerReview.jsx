import React from "react";

export default function CustomerReview() {
  const review = [
    {
      imgSrc: "/assets/image.jfif",
      name: "John Doe",
      review:
        "Vander Engines provided me with exactly what I needed. Excellent customer service!",
    },
    {
      imgSrc: "/assets/image-2.jfif",
      name: "Jane Smith",
      review:
        "I got a high-quality engine replacement, and the entire process was smooth.",
    },
    {
      imgSrc: "/assets/image-3.png",
      name: "David Johnson",
      review:
        "Highly recommend Vander Engines. Quick service and reliable products!",
    },
  ];
  return (
    <div className="customer-review text-center mt-5 head1">
      <h3>
        What Our <span>Customers </span> Say
      </h3>
      <div className="container mt-3">
        <div className="row">
          {review.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={item.imgSrc}
                  alt=""
                  width={100}
                  style={{ borderRadius: "50%" }}
                  className="mx-auto"
                />
                <div className="card-body">
                  <h5>{item.name}</h5>
                  <p>{item.review}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
