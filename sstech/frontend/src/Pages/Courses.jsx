import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Popup2 from "../Components/Popup2";
import CourseSection from "../Components/Coursesbanner";
import Future_courses from "./Future_courses";
import Offers_courses from "./offers_courses";
import Cta_courses from "./Cta_courses";
import Price_courses from "./Price_courses";
import Certificate_courses from "./Certificate_courses";

const Courses = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleShowPopup = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  // Static data for courses
  const allCourses = [
    {
      id: 1,
      title: "Digital Marketing Fundamentals",
      description:
        "What is Digital Marketing? Importance of Digital Marketing, How Digital Marketing Works?",
      price: 500,
      image: "./asset/digital.jpg",
    },
    {
      id: 2,
      title: "Website Planning Designing & Creation",
      description:
        "Architecture of Website, Difference between Dynamic and Static Website, Domain & Hosting",
      price: 250,
      image: "./asset/website.jpg",
    },
    {
      id: 3,
      title: "Search Engine Optimization",
      description:
        "The Growing Need for Search Engine Optimization: How Do Search Engines Work Effectively?",
      price: 89.99,
      image: "./asset/seo.jpg",
    },
    {
      id: 4,
      title: "Search Engine Marketing",
      description:
        "Introduction of Google AdWords, Keywords Research. Creating campaigns and ad groups.",
      price: 69.99,
      image: "./asset/smm.png",
    },
    {
      id: 5,
      title: "Social Media Marketing",
      description: "Facebook Marketing, LinkedIn Marketing, Twitter Marketing.",
      price: 200,
      image: "./asset/smm.png",
    },
    {
      id: 6,
      title: "Online Lead Generation",
      description:
        "What is Lead Generation? What is Landing Page? Website VS Landing Page.",
      price: 499.99,
      image: "./asset/leads.jpg",
    },
    {
      id: 7,
      title: "Google Analytics (GA3 & GA4)",
      description: "What is Website Analytics? How Google Analytics works?",
      price: 5999.99,
      image: "./asset/google-ads.webp",
    },
    {
      id: 8,
      title: "Blogging",
      description:
        "What is Blogging? How to Create a Blogging Website? How to make money through Blogging?",
      price: 4999.99,
      image: "./asset/blogging.webp",
    },
    {
      id: 9,
      title: "E-mail Marketing",
      description:
        "What is E-Mail Marketing and how does it work? Types of E-Mail Marketing, E-Mail Automation.",
      price: 399.99,
      image: "./asset/email-marketing.png",
    },
    {
      id: 10,
      title: "Content Marketing",
      description:
        "Introduction to Content Marketing: Understanding the Objective of Content Marketing Strategies",
      price: 299.99,
      image: "./asset/content-marketing.jpg",
    },
    {
      id: 11,
      title: "E-Commerce Promotion",
      description:
        "What is E-Commerce? E-Commerce Website Design tips and tricks.",
      price: 149.99,
      image: "./asset/promote.jpg",
    },
    {
      id: 12,
      title: "Automated SEO",
      description:
        "What is Automated SEO? Automated SEO Tools, Difference between Manual VS Automated SEO.",
      price: 59.99,
      image: "./asset/auto-seo.jpg",
    },
    {
      id: 13,
      title: "Inbound Marketing",
      description:
        "What is Landing Page? What are Engagement Magnets? Life Cycle E-Mail.",
      price: 89.99,
      image: "./asset/inbound.jpg",
    },
    {
      id: 14,
      title: "Doubt Session",
      description:
        "Join our Doubt Session for answers and enhance your understanding.",
      price: 89.99,
      image: "./asset/doubt.webp",
    },
    {
      id: 15,
      title: "Case Study Discussion",
      description:
        "We provide you case studies of Digital Marketing and learn as the trend teaches.",
      price: 89.99,
      image: "./asset/case-study.jpg",
    },
  ];

  // State to track the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Reference to scroll container to move to the top
  const containerRef = useRef(null);

  // Pagination settings
  const coursesPerPage = 8;
  const totalPages = Math.ceil(allCourses.length / coursesPerPage);

  // Calculate the courses to display for the current page
  const startIndex = (currentPage - 1) * coursesPerPage;
  const currentCourses = allCourses.slice(
    startIndex,
    startIndex + coursesPerPage
  );

  // Handle page change
  const handlePageClick = (page) => {
    setCurrentPage(page);
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style>
        {`
          .success_slider {
  margin-bottom: 50px;
  overflow: hidden;
}

.success_slide_track {
  display: flex;
  gap: 1.5em; /* Reduce the gap for a more compact look */
  animation: scroll 25s linear infinite;
}

.success_slider .success_slide_track .slide img {
  max-width: 200px; /* Adjust the width to 200px for smaller images */
  height: auto; /* Maintain aspect ratio */
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-30%);
  }
}

@media screen and (max-width: 768px) {
  .success_slide_track {
    width: 100%;
  }

  .success_slider .success_slide_track .slide img {
    max-width: 150px; /* For smaller screens, reduce the image size further */
  }
}

.stats-cards {
  margin-top: 30px;
}

.stats-cards .card {
  border-radius: 10px;
  margin-bottom: 20px; /* Space between cards */
  background-color: #f8f9fa; /* Light background color for the card */
  padding: 20px;
}

.stats-cards .card-title {
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
}

.stats-cards .card-text {
  font-size: 16px;
  color: #6c757d;
}

}
    .mt-2 {
    justify-content: center;
    align-items: center;
    text-align: center !important;
    }

    .mt-1 {
    text-align: center;
    }


        `}
      </style>

      <CourseSection />
      <Offers_courses />
      <Future_courses />
      <Cta_courses />
      <Price_courses />
      <Certificate_courses/>
      <div className="container mt-5" ref={containerRef}>
        <h3
          className="text-center fw-bold fs-1 mb-4"
          style={{ color: "#3b6cb4" }}
        >
          Digital Marketing Modules
        </h3>

        {/* Courses Grid */}
        <div className="row">
          {currentCourses.map((course) => (
            <div className="col-lg-3 col-md-3 mb-5" key={course.id}>
              <div className="card h-100">
                <img
                  src={course.image}
                  alt={course.title}
                  style={{ height: "150px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.description}</p>
                  <button
                    className="btn btn-primary w-100"
                    onClick={handleShowPopup}
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-center mt-4">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={`btn mx-1 ${
                currentPage === index + 1
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className="text-center my-5">
          <h2 className="display-4">Our Success Stories</h2>
          <p className="lead">
            1250 students have secured high paying jobs in India in the year
            2024
          </p>
        </div>

        {/* Bootstrap Carousel with Continuous Right to Left Scrolling */}
        <div className="success_slider">
          <div className="success_slide_track d-flex">
            <div className="slide">
              <img
                src="./asset/raja.jpeg"
                alt="success journey image"
                className="img-fluid"
                style={{ height: "150px" }}
              />
              <div className="mt-2 text-center">Raja</div>{" "}
              {/* Name under the image */}
              <div className="mt-1 text-muted">Digital Marketing Expert</div>
            </div>
            <div className="slide">
              <img
                src="./asset/sandeep-singh.jpeg"
                alt="success journey image"
                className="img-fluid"
                style={{ height: "150px" }}
              />
              <div className="mt-2 text-center">Sandeep Singh</div>{" "}
              {/* Name under the image */}
              <div className="mt-1 text-muted">SEO Specialist</div>
            </div>
            <div className="slide">
              <img
                src="./asset/ankur-kumar.jpeg"
                alt="success journey image"
                className="img-fluid"
                style={{ height: "150px" }}
              />
              <div className="mt-2 text-center">Ankur Kumar</div>{" "}
              {/* Name under the image */}
              <div className="mt-1 text-muted">Content Marketing Head</div>
            </div>
            <div className="slide">
              <img
                src="./asset/arvind.jpeg"
                alt="success journey image"
                className="img-fluid"
                style={{ height: "150px" }}
              />
              <div className="mt-2 text-center">Arvind</div>{" "}
              {/* Name under the image */}
              <div className="mt-1 text-muted">PPC Expert</div>
            </div>
            <div className="slide">
              <img
                src="./asset/dilawar.jpeg"
                alt="success journey image"
                className="img-fluid"
                style={{ height: "150px" }}
              />
              <div className="mt-2 text-center">Ajay Kumar</div>{" "}
              {/* Name under the image */}
              <div className="mt-1 text-muted">Web Developer</div>
            </div>
            <div className="slide">
              <img
                src="./asset/prashant.jpeg"
                alt="success journey image"
                className="img-fluid"
                style={{ height: "150px" }}
              />
              <div className="mt-2 text-center">Prashant</div>{" "}
              {/* Name under the image */}
              <div className="mt-1 text-muted">Social Media Manager</div>
            </div>
            <div className="slide">
              <img
                src="./asset/suri-thonger.jpeg"
                alt="success journey image"
                className="img-fluid"
                style={{ height: "150px" }}
              />
              <div className="mt-2 text-center">Suri Thonger</div>{" "}
              {/* Name under the image */}
              <div className="mt-1 text-muted">SEO Expert</div>
            </div>
            <div className="slide">
              <img
                src="./asset/himanshu.jpeg"
                alt="success journey image"
                className="img-fluid"
                style={{ height: "150px" }}
              />
              <div className="mt-2 text-center">Himanshu</div>{" "}
              {/* Name under the image */}
              <div className="mt-1 text-muted">Content Writer</div>
            </div>
          </div>
        </div>
      </div>
      {isPopupVisible && <Popup2 onClose={handleClosePopup} />}
    </>
  );
};

export default Courses;
