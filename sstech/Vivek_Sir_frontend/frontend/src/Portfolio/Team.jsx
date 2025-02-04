import React from "react";

const teamMembers = [
  {
    imgSrc: "/asset/derrik.jpg",
    head: "Derrik Jones",
    tile: "CEO",
    para: "With 15 years of experience in digital marketing, Shobhit has led SS Tech Services to become a leader in the digital space, crafting innovative strategies that consistently yield results.",
  },
  {
    imgSrc: "/asset/vivek_sir.jpg",
    head: "Vivek Shadev",
    tile: "Manager",
    para: "Vivek brings 7 years of experience in both digital marketing and web development, ensuring that every project aligns with industry trends and client needs.",
  },
  {
    imgSrc: "/asset/sumit_sir.jpg",
    head: "Sumit Mishra",
    tile: "Core PHP Web Developer",
    para: "A core PHP expert, Sumit has 5 years of experience and has successfully completed numerous projects for clients worldwide, delivering top-notch functionality and user experience.",
  },
  {
    imgSrc: "/asset/gopal_sir.jpg",
    head: "Peter John",
    tile: "Management Head & Business Development",
    para: "With 5 years of experience, Gopal excels in managing operations and building client relationships, ensuring that SS Tech Services is always at the forefront of business development.",
  },
];

const Team = () => {
  return (
    <section className="team">
      <div className="container-fluid ">
        <h2 className="h1 text-center">
          Meet Our <span style={{ color: "#3b6cb4" }}>Team </span>{" "}
        </h2>
        <div className="row my-5">
          {teamMembers.map((item, index) => (
            <div
              className="col-lg-3 team-img d-flex flex-column justify-content-center align-items-center mb-3"
              key={index}
            >
              <img
                src={item.imgSrc}
                alt=""
                className=""
                style={{ width: "280px", height: "350px", objectFit: "cover" }}
              />
              <h4 className="text-center fw-bold">{item.head}</h4>
              <h6 className="text-center">{item.tile}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
