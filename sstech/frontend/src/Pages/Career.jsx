// src/Career.jsx
import React, { useEffect, useState } from "react";
import "./JobPage.css"; // Custom CSS for styling
import JobDetail from "./JobDetail";
import Popup from "./Popup";

const Career = () => {
  const [jobsData, setJobsData] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null); // State for the selected job
  const [visibleJobs, setVisibleJobs] = useState(3); // Start with showing 3 jobs
  const [showAll, setShowAll] = useState(false); // State to toggle view

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/Career.json"); // Make sure this path is correct
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setJobsData(data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchJobs();
  }, []);

  const handleViewDetails = (job) => {
    setSelectedJob(job); // Set the selected job
  };

  const handleCloseDetails = () => {
    setSelectedJob(null); // Clear the selected job
  };

  const handleToggleView = () => {
    setShowAll((prev) => !prev); // Toggle between showing all jobs and a limited number
    setVisibleJobs((prev) => (showAll ? 3 : jobsData.length)); // Adjust visible jobs based on toggle
  };

  return (
    <>
      <Popup />

      {/* Hero Section */}
      <div className="job-hero py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="wow animate__animated animate__bounceInUp hero-text fw-bold">
                Join Our <span style={{ color: "#3b6cb4" }}>Dynamic Team </span>
                Your Journey Begins Here!
              </h1>
              <p></p>
            </div>
            <div className="col-lg-6">
              <img
                src="/asset/hero-8.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="hero-banner d-flex flex-column align-items-end justify-content-center">
          
          
        </div> */}
      {/*----------------------------------------About Company--------------------------------------------- */}
      <div className="job-page  ">
        <div className="about-company my-3">
          <h2>
            About Our <span style={{ color: "#3b6cb4" }}>Company </span>
          </h2>
          <div className="container">
            <div className="row my-3 align-items-center">
              <div className="col-lg-6">
                <div className="company-text ">
                  Established in 2015 in Sector 62, Noida, SS Technology Pvt Ltd
                  specializes in tele-sales for the USA and UK markets,
                  delivering exceptional solutions with a focus on customer
                  satisfaction and long-term relationships. Our expertise in
                  engine and transmission technology allows us to enhance the
                  performance and efficiency of 4-wheelers. Additionally, we
                  offer BPO services and comprehensive digital marketing
                  solutions. We seek dynamic and results-oriented Digital
                  Marketer to join our team.
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  src="/asset/about-career.avif"
                  alt=""
                  className="img-fluid rounded-3 mt-4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="job-listings">
          <h2>
            Open <span style={{ color: "#3b6cb4" }}>Positions </span>
          </h2>
          <div className="container">
            <div className="row mt-4">
              {jobsData.slice(0, visibleJobs).map((job) => (
                <div className="col-lg-4 mb-4" key={job.id}>
                  <div className="job-card h-100">
                    <h3>{job.title}</h3>
                    <p>{job.experience}</p>
                    <button
                      onClick={() => handleViewDetails(job)}
                      className="view-details-button "
                    >
                      View Job Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View More Jobs Button */}
        <div className="view-more">
          <button className="view-more-button mb-5" onClick={handleToggleView}>
            {showAll ? "View Less Jobs" : "View More Jobs"}
          </button>
        </div>

        {/* Show Job Detail if a job is selected */}
        {selectedJob && (
          <JobDetail jobData={selectedJob} onClose={handleCloseDetails} />
        )}
      </div>
    </>
  );
};

export default Career;
