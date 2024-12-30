import React from "react";

export default function Mentors_courses() {
  const data = [
    {
      image: "https://salvemusic.com.ua/wp-content/uploads/2021/02/georges-bizet2.jpg",
      name: "John Doe",
      description: "Expert in Digital Marketing",
    },
    {
      image: "https://salvemusic.com.ua/wp-content/uploads/2021/02/georges-bizet2.jpg",
      name: "Jane Smith",
      description: "SEO Specialist",
    },
    {
      image: "https://salvemusic.com.ua/wp-content/uploads/2021/02/georges-bizet2.jpg",
      name: "Robert Brown",
      description: "Content Marketing Expert",
    },
   
  ];

  return (
    <div className="mentors my-5">
      <div className="container">
      <h3
          className="text-center fw-bold fs-1 mb-4"
          style={{ color: "#3b6cb4" }}
        >
          Meet Our Mentors
        </h3>
        <div className="row">
          {data.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100">
                <img src={item.image} alt="" style={{height:"200px" , objectFit:"cover" , width:"100%"}} />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
