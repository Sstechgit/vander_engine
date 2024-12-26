import React from "react";
export default function WebDevelopment() {
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
      autoplayTimeout: 2000,
      // autoplaySpeed: 1000,
      autoplayHoverPause: true,
    });
  });

  const tech_card = [
    {
      imgSrc: "/assets/technology.webp",
      head: "Customized Solutions",
      para: " SS Tech Services provides best web development services that meets your business requirement.",
    },
    {
      imgSrc: "/assets/experience.webp",
      head: "Expertise Across Technologies",
      para: "SS Tech dedicated team have years of expertise in HTML, CSS , Java script, PHP, MySQL, Node.js.",
    },
    {
      imgSrc: "/assets/responsive-design.webp",
      head: "Responsive Design",
      para: " We create responsive and user friendly websites that google loves. We aim to provide you quality work.",
    },
    {
      imgSrc: "/assets/cyber-security.webp",
      head: "Robust Security Measures",
      para: " We provide high security to your website to make your data safe. We add SSL encryption, secure login systems.",
    },
  ];

  return (
    <div>
      <div className="web overflow-hidden">

        <div className="container d-flex justify-content-center align-items-center h-100 ">
          <div className="col-lg-6 text-center text-light">
            {/* <h1 id="hii" className="fw-bold" style={{ fontSize: "4rem" }}></h1>
            <p>
              SS Tech provides complete Web Development solutions. We are top
              website development solution provider.
            </p> */}
          </div>
        </div>
        {/* <div className="web-bottom ">
        <img src="https://wphix.com/wp/cetalog/wp-content/uploads/2023/03/cta-shape.png" alt="" />
      </div> */}

      </div>
      

      <div className="container text-center my-4">
        <h1 className="fs-1 fw-bold mb-3">Web Development Company</h1>
        <p>
          Elevate your online presence with SS Tech, the leading web development
          company. Specializing in innovative web solutions, we craft visually
          stunning and functionally robust websites tailored to your unique
          business needs. From responsive designs to seamless user experiences,
          trust SS Tech to bring your digital vision to life.
        </p>

        <div className="row justify-content-center g-3 my-5">
          {tech_card.map((item, index) => (
            <div className="col-lg-3 col-sm-6" key={index}>
              <div className="card border-0 d-flex justify-content-center align-items-center">
                <img src={item.imgSrc} alt="" width={100} />
                <div className="card-body">
                  <h5>{item.head}</h5>
                  <p>{item.para}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="web-services my-5 py-4">
        <div className="container text-justify">
          <h2 className="fs-1 fw-bold text-center pb-3">
            Services We provide for you
          </h2>
          <div className="row">
            <div className="col-lg-6 col-sm-6 px-4">
              <div className="card d-flex align-items-center web-card">
                <i class="fa-solid fa-users-viewfinder fs-1"></i>
                <div className="card-body">
                  <h5 className="text-center">User Experience (UX) Design:</h5>
                  <p>
                    <b>Intuitive Navigation: </b>
                    Designing user-friendly interfaces that make it easy for
                    visitors to find what they need.
                  </p>
                  <p>
                    <b>Engaging Interactions: </b>
                    Crafting interactive elements that enhance the overall user
                    experience.
                  </p>
                  <p>
                    <b>Accessibility: </b>
                    Ensuring your website is accessible to all users, including
                    those with disabilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6 px-4">
              <div className="card d-flex align-items-center web-card">
                <i class="fa-solid fa-dumpster"></i>
                <div className="card-body">
                  <h5 className="text-center">E-commerce Solutions:</h5>
                  <p>
                    <b>Online Store Development:</b>
                    Building robust e-commerce platforms thatfacilitate smooth
                    transactions and customer interactions.
                  </p>
                  <p>
                    <b>Secure Payment Integration: </b>
                    Implementing secure payment gateways to protect customer
                    information.
                  </p>
                  <p>
                    <b>Product Management: </b>
                    Creating systems for easy management of inventory, product
                    listings, and order processing.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6 px-4">
              <div className="card d-flex align-items-center web-card">
                <i class="fa-solid fa-screwdriver-wrench"></i>
                <div className="card-body">
                  <h5 className="text-center">Website Maintenance:</h5>
                  <p>
                    <b>Ongoing Support: </b>
                    Offering regular updates and maintenance to keep your
                    website running smoothly and securely.
                  </p>
                  <p>
                    <b>Bug Fixes: </b>
                    Addressing any issues that arise to prevent disruptions to
                    your site’s functionality.
                  </p>
                  <p>
                    <b>Performance Monitoring: </b>
                    Monitoring site performance and implementing improvements as
                    needed.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6 px-4">
              <div className="card d-flex align-items-center web-card">
                <i class="fa-regular fa-window-maximize"></i>
                <div className="card-body">
                  <h5 className="text-center">Web Application Development:</h5>
                  <p>
                    <b>Custom Applications: </b>
                    Developing web-based applications tailored to your business
                    needs, such as CRM systems or internal tools.
                  </p>
                  <p>
                    <b>Integration Solutions: </b>
                    Integrating your applications with other systems or
                    third-party services for enhanced functionality.
                  </p>
                  <p>
                    <b>Scalable Solutions: </b>
                    Building applications that can grow with your business and
                    adapt to changing needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tech">
        <h5
          className="fs-1 fw-bold text-center
            mb-4 "
        >
          Technology We Work on
        </h5>
        <div className="container text-center owl-carousel owl-theme">
          <div className="col-4">
            <img src="/assets/mysql-150x150.webp" alt="" />
          </div>
          <div className="col-4">
            <img src="/assets/php-150x150.webp" alt="" />
          </div>
          <div className="col-4">
            <img src="/assets/html-150x150.webp" alt="" />
          </div>
          <div className="col-4">
            <img src="/assets/css-150x150.webp" alt="" />
          </div>
          <div className="col-4">
            <img src="/assets/java-150x150.webp" alt="" />
          </div>
          <div className="col-4">
            <img src="/assets/nodejs-150x150.webp" alt="" />
          </div>
          <div className="col-4">
            <img src="/assets/mysql-150x150.webp" alt="" />
          </div>
          <div className="col-4">
            <img src="/assets/php-150x150.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

