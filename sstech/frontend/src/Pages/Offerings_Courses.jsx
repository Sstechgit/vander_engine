import React from 'react';
import './Offerings_Courses.css'; // Custom styles for 3D effects

const Offerings_Courses = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center text-success mb-4">
        Step Into The Future Of Digital Marketing
      </h2>
      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-md-3 col-sm-6">
          <div className="card custom-card text-center">
            <div className="card-body">
              <img
                src="../../public/asset/1.svg"
                alt="Career Transition"
                className="mb-3 card-img"
              />
              <h5 className="card-title">Career Transition</h5>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-3 col-sm-6">
          <div className="card custom-card text-center">
            <div className="card-body">
              <img
                src="../../public/asset/2.svg"
                alt="Highly Paid Salaries"
                className="mb-3 card-img"
              />
              <h5 className="card-title">Highly Paid Salaries</h5>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-md-3 col-sm-6">
          <div className="card custom-card text-center">
            <div className="card-body">
              <img
                src="../../public/asset/3.svg"
                alt="Entrepreneurship Opportunities"
                className="mb-3 card-img"
              />
              <h5 className="card-title">Entrepreneurship Opportunities</h5>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="col-md-3 col-sm-6">
          <div className="card custom-card text-center">
            <div className="card-body">
              <img
                src="../../public/asset/4.svg"
                alt="Market Leadership"
                className="mb-3 card-img"
              />
              <h5 className="card-title">Market Leadership & More!</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings_Courses;
