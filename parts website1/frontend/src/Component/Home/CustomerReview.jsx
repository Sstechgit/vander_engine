import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";  // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick-theme styles

export default function CustomerReview() {
  const review = [
    {
      imgSrc: "/assets/image.jfif",
      name: "Fantastic Service!",
      review:
        "I've been using this service for months now. I am always impressed by how efficient and reliable it is. Customer support is top-notch, and the team really goes the extra mile to runs smoothly.",
    },
    {
      imgSrc: "/assets/image-2.jfif",
      name: "Great Product Quality!",
      review:
        "I recently purchased [Product Name], and I am beyond satisfied. The quality is exceptional, and it was delivered quickly. This will definitely not be my last purchase!",
    },
    {
      imgSrc: "/assets/image-3.png",
      name: "Highly Recommended!",
      review:
        "I had an issue with my order, but their customer service team was incredibly responsive and resolved it quickly. It's rare to find a company that genuinely cares about its customers. I'll be back for sure!",
    },
    {
      imgSrc: "/assets/image-3.png",
      name: "Amazing Experience!",
      review:
        "The whole shopping process was seamless. The website is user-friendly, and the delivery was right on time. I appreciate the attention to detail and how easy it was to track my order.",
    },
    {
      imgSrc: "/assets/image-3.png",
      name: "A+ Customer Support!",
      review:
        "From the moment I contacted customer support, I felt valued. They were patient, kind, and helped me with everything I needed. It’s so refreshing to experience such great service these days!",
    },
    {
      imgSrc: "/assets/image-3.png",
      name: "Great Value for Money",
      review:
        "Not only are the products of high quality, but the prices are also incredibly reasonable. You get great value for your money here, and the entire experience was smooth and enjoyable.",
    },
    {
      imgSrc: "/assets/image-3.png",
      name: "Will Be Returning!",
      review:
        "I was a little hesitant at first, but I am so happy I decided to give this a try. Fast shipping, excellent quality, and everything arrived just as described. I'll definitely be coming back for more.",
    },
  ];

  // Slider settings for react-slick
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="customer-review text-center mt-5 head1 mb-5" style={{overflowX:"hidden"}}>
      <div className="container mt-3">
        <div className="d-flex align-items-center mb-3">
          <i className="fa-solid fa-gear fs-2 me-2 main"></i>
          <h3 className="fs-3 fw-bold">Customer Reviews :</h3>
        </div>
        <Slider {...settings}>
          {review.map((item, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card h-100 py-2 mx-3">
                {/* <img
                  src={item.imgSrc}
                  alt={`Review from ${item.name}`}
                  className="review-image mx-auto"
                /> */}
                <div className="card-body">
                  <h5 className="mb-3 ">{item.name}</h5>
                  <span className="">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star text-warning"></i>
                    ))}
                  </span>
                  <p className="mt-3">{item.review}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
