import React from "react";

export default function Copyright() {
  const data = [
    {
      head: "Copyright Notice",
      para: "© 2024 [Your Company Name]. All rights reserved. The contents of this website, including text, images, and logos, are protected by copyright law and may not be used without permission.",
    },
    {
      head: "Legal Disclaimer",
      para: "© 2024 [Your Company Name]. All rights reserved. This site and its content are protected by copyright. Unauthorized use of materials from this website is prohibited.",
    },
    {
      head: "Copyright & Ownership",
      para: "All content on this website, including but not limited to text, graphics, logos, and images, is the property of [Your Company Name] and is protected by copyright laws.",
    },
    {
      head: "Content Protection",
      para: "© 2024 [Your Company Name]. All rights reserved. Reproduction or distribution of any content from this website without prior written permission is strictly prohibited.",
    },
    {
      head: "Usage Rights",
      para: "By using this website, you agree to abide by the copyright policies and terms of service outlined. Unauthorized copying, modification, or distribution of any content is prohibited.",
    },
    {
      head: "Reproduction Rights",
      para: "Any reproduction of the content from this website requires prior written consent from [Your Company Name]. All rights to the content are owned exclusively by [Your Company Name].",
    },
    {
      head: "Trademarks",
      para: "[Your Company Name] and other associated logos are trademarks of [Your Company Name]. All trademarks are protected under applicable laws and may not be used without permission.",
    },
    {
      head: "Contact Us",
      para: "For any copyright-related inquiries or permissions, please contact us at [Your Company Contact Information]. We are happy to assist with any concerns regarding the use of our content.",
    },
  ];

  return (
    <div className="copyright mb-5">
      <div className="container">
        <div className="d-flex mb-3">
          <i className="fa-solid fa-gear fs-2 me-2 main"></i>
          <h3 className="fs-3 fw-bold">Copyright Information :</h3>
        </div>
        <hr />
        <div className="row">
          {data.map((item, index) => (
            <div key={index} className="col-md-12">
              <h5>{item.head}</h5>
              <p>{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
