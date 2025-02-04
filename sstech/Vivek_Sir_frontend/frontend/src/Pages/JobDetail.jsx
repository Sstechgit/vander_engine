import React, { useEffect, useState } from "react";
import "./JobDetailPage.css"; // Custom CSS for styling
import JobForm from "./JobForm";

const JobDetail = ({ jobData, onClose }) => {
  const [job, setJob] = useState(null);
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  };
  const handleCloseForm = () => {
    setShowComponent(false);
  };
  useEffect(() => {
    setJob(jobData);
  }, [jobData]);

  if (!job) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <div className="job-detail-overlay">
        <div className="job-detail-card ">
          <div className="div">
            <div className="job-detail-header">
              <h1>{job.title || "Job Title Not Available"}</h1>
              <button className="close-button" onClick={onClose}>
                &times; {/* Close icon */}
              </button>
            </div>

            <div
              className="job-header d-flex flex-column align-items-center justify-content-center"
              style={{
                background:
                  "url(/asset/job-detail-img.webp)",
                backgroundPosition: "top",
                backgroundSize: "cover",
              }}
            >
            
                <h1>{job.title || "Job Title Not Available"}</h1>
                <div>
                  <button
                    className="btn btn-success mt-3"
                    onClick={handleClick}
                  >
                    Apply Here
                  </button>


                {/* {showComponent && <JobForm />} */}
              </div>
            </div>

            <div className="row ">
              <div className="col-lg-7 job-form-desc">
                {job.company && <h2>Company: {job.company}</h2>}
                {job.location && (
                  <p>
                    <strong>Location:</strong> {job.location}
                  </p>
                )}
                {job.experience && (
                  <p>
                    <strong>Experience:</strong> {job.experience}
                  </p>
                )}
                {job.skills && job.skills.length > 0 && (
                  <p>
                    <strong>Skills:</strong> {job.skills.join(", ")}
                  </p>
                )}
                {job.shift && (
                  <p>
                    <strong>Shift:</strong> {job.shift}
                  </p>
                )}
                {job.salary && (
                  <p>
                    <strong>Salary:</strong> {job.salary.monthlyCTC || "N/A"} |{" "}
                    <strong>Incentives:</strong>{" "}
                    {job.salary.incentive?.max || "N/A"} (Avg:{" "}
                    {job.salary.incentive?.average || "N/A"})
                  </p>
                )}
                {job.workingDays && (
                  <p>
                    <strong>Working Days:</strong> {job.workingDays}
                  </p>
                )}
                {job.process && (
                  <p>
                    <strong>Process:</strong> {job.process}
                  </p>
                )}
                {job.rolesAndResponsibilities &&
                  job.rolesAndResponsibilities.length > 0 && (
                    <>
                      <h3>Roles & Responsibilities:</h3>
                      <ul>
                        {job.rolesAndResponsibilities.map(
                          (responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                          )
                        )}
                      </ul>
                    </>
                  )}
                {job.requiredCandidateProfile && (
                  <>
                    <h3>Required Candidate Profile:</h3>
                    {job.requiredCandidateProfile.education && (
                      <p>
                        <strong>Education:</strong>{" "}
                        {job.requiredCandidateProfile.education}
                      </p>
                    )}
                    {job.requiredCandidateProfile.workEnvironment && (
                      <p>
                        <strong>Work Environment:</strong>{" "}
                        {job.requiredCandidateProfile.workEnvironment}
                      </p>
                    )}
                    {job.requiredCandidateProfile.communicationSkills && (
                      <p>
                        <strong>Communication Skills:</strong>{" "}
                        {job.requiredCandidateProfile.communicationSkills}
                      </p>
                    )}
                    {job.requiredCandidateProfile.additionalExperience && (
                      <p>
                        <strong>Additional Experience:</strong>{" "}
                        {job.requiredCandidateProfile.additionalExperience}
                      </p>
                    )}
                  </>
                )}
                {/* You can add more details here as needed */}
              </div>
              <div className="col-lg-5 job-form-col">
                {showComponent && (
                  <div className="form-overlay">
                    <div className="job-detail-header">
                      <h1></h1>
                      <button
                        className="close-button-2"
                        onClick={handleCloseForm}
                      >
                        &times; {/* Close icon */}
                      </button>
                    </div>
                    <div className="form-card">
                      <JobForm title={job.title}/>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetail;
