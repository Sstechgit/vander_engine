import React from "react";

export default function Graphic() {
  const graphic_card = [
    {
      imgSrc: "/assets/graph-1.png",
      head: "Expertise Across Technologies",
      para: "SS Tech dedicated team have years of expertise in photoshop, Canva, Illustrator , Adobe Premiere Pro, CorelDRAW",
    },
    {
      imgSrc: "/assets/graph-2.png",
      head: "Responsive Design",
      para: "We create responsive and user friendly websites that google loves. We aim to provide you quality work.",
    },
    {
      imgSrc: "/assets/graph-3.png",
      head: "Branding & Identity",
      para: "Branding is the invisible thread that connects every aspect of your business. It allows for growth and adaptation through different designs while maintaining a consistent identity. This cohesion fosters recognition and trust. ensuring your brand resonateswith customers. no matter how it evolves.",
    },
    {
      imgSrc: "/assets/graph-4.png",
      head: "Print & Layout Design",
      para: "our expert graphic design services create visually stunning print products that leave a lasting impression. Trust us to bridge the gap between the digital and tangible, bringing your brand to life with beautifully crafted designs.",
    },
  ];
  const carousel = [
    { imgSrc: "/assets/graphic-1.webp" },
    { imgSrc: "/assets/graphic-2.webp" },
    { imgSrc: "/assets/graphic-3.webp" },
    { imgSrc: "/assets/graphic-4.webp" },
    { imgSrc: "/assets/graphic-1.webp" },
    { imgSrc: "/assets/graphic-2.webp" },
    { imgSrc: "/assets/graphic-3.webp" },
    { imgSrc: "/assets/graphic-4.webp" },
  ];
  $(function () {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 4,
      loop: true,
      nav: true,
      dots: true,
      rewind: true,
      autoplay: true,
      autoplayTimeout: 1000,
      // autoplaySpeed: 1000,
      autoplayHoverPause: true,
    });
  });

  return (
    <div>
      <div className="graphic overflow-hidden">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6 ">
              <h1 id="graphic-head" className="fw-bold text-center">
                {" "}
                Graphic Design
              </h1>
              <p id="graphic-para">
                {" "}
                SS Tech provides complete Graphic Design solutions. We are top
                graphic design solution provider.
              </p>
            </div>
            <div className="col-lg-6">
              <img src="/assets/graphic-img.png" alt="" id="graphic-img" />
            </div>
          </div>
        </div>
      </div>

      <div className="graphic-company">
        <div className="container mt-3">
          <h3 className="fs-1 fw-bold text-center">Graphic Design Company</h3>
          <p>
            Enhance your brand’s identity with SS Tech, the premier graphic
            design company. Specializing in creative visual solutions, we
            produce eye-catching and impactful designs tailored to your specific
            business goals. From logos to marketing materials, trust SS Tech to
            transform your ideas into stunning visuals that captivate and engage
            your audience.
          </p>
        </div>

        <div className="graphic-card">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 px-3" style={{ marginLeft: "-50px" }}>
                <img src="/assets/g-1.png" alt="" />
              </div>
              <div className="col-lg-9 px-5">
                <div className="row justify-content-center g-3 px-5">
                  {graphic_card.map((item, index) => (
                    <div className="col-lg-6 col-sm-6" key={index}>
                      <div
                        className="card border-0 d-flex justify-content-center align-items-center text-center"
                        style={{ background: "none" }}
                      >
                        <div className="card-head" style={{ height: "100px" }}>
                          <img src={item.imgSrc} alt="" width={150} />
                        </div>

                        <div className="card-body">
                          <h6>{item.head}</h6>
                          <p style={{ textAlign: "justify" }}>{item.para}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="graphic-service">
        <div className="container my-4 py-4 ">
          <div className="row align-items-center">
            <div className="col-lg-6 text-white">
              <h3 className="text-center ">Services We provide for you</h3>
              <p style={{ lineHeight: "30px" }}>
                At SS Tech, we pour our heart into every graphic design project,
                transforming ideas into captivating visuals. Our team
                specializes in delivering powerful designs that leave a lasting
                impression, ensuring every element serves a purpose. Each day,
                we start with a commitment to creativity, crafting unique
                branding solutions that resonate with your audience. From
                eye-catching logos to engaging marketing materials, our designs
                are meticulously tailored to meet your business goals. Let SS
                Tech bring your vision to life and make the ordinary
                extraordinary through our exceptional graphic design services.
              </p>
            </div>
            <div className="col-lg-6">
              <img src="/assets/g-removebg-preview.png" alt="" width={600} />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h3 className="fs-1 fw-bold text-center">Technology We Work on</h3>
        <div className="row owl-carousel owl-theme">
          {carousel.map((item, index) => (
            <div className="col-lg-8" key={index}>
              <div className="card border-0">
                <img src={item.imgSrc} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
