import React from "react";
import { Link } from "react-router-dom";

export default function () {
  const data = [
    { imgSrc: "/assets/brand/15.png", partname: "Acura Parts" },
    { imgSrc: "/assets/brand/alfa_romeo.jpeg", partname: "Alfa Romeo Parts" },
    { imgSrc: "/assets/brand/12.png", partname: "Audi Parts" },
    { imgSrc: "/assets/brand/austin.jpeg", partname: "Austin Parts" },
    { imgSrc: "/assets/brand/13.png", partname: "BMW Parts" },
    { imgSrc: "/assets/brand/Buick-logo.png", partname: "Buick Parts" },
    { imgSrc: "/assets/brand/cad.png", partname: "Cadillac Parts" },
    { imgSrc: "/assets/brand/chevrolet.jpeg", partname: "Chevrolet Parts" },
    { imgSrc: "/assets/brand/chrysler.png", partname: "Chrysler Parts" },
    { imgSrc: "/assets/brand/daewoo.jpeg", partname: "Daewoo Parts" },
    { imgSrc: "/assets/brand/daihatsu.jpeg", partname: "Daihatsu Parts" },
    { imgSrc: "/assets/brand/dodge.png", partname: "Dodge Parts" },
    { imgSrc: "/assets/brand/eagle.jpeg", partname: "Eagle Parts" },
    { imgSrc: "/assets/brand/ferrari.jpeg", partname: "Ferrari Parts" },
    { imgSrc: "/assets/brand/fiat.jpg", partname: "Fiat Parts" },
    { imgSrc: "/assets/brand/ford.png", partname: "Ford Parts" },
    { imgSrc: "/assets/brand/geo.jpeg", partname: "Geo Parts" },
    { imgSrc: "/assets/brand/gmc.png", partname: "GMC Parts" },
    { imgSrc: "/assets/brand/16.png", partname: "Honda Parts" },
    { imgSrc: "/assets/brand/hummer.png", partname: "Hummer Parts" },
    { imgSrc: "/assets/brand/8.png", partname: "Hyundai Parts" },
    { imgSrc: "/assets/brand/18.png", partname: "Infiniti Parts" },
    { imgSrc: "/assets/brand/isuzu.png", partname: "Isuzu Parts" },
    { imgSrc: "/assets/brand/17.png", partname: "Jaguar Parts" },
    { imgSrc: "/assets/brand/jeep.png", partname: "Jeep Parts" },
    { imgSrc: "/assets/brand/7.png", partname: "Kia Parts" },
    { imgSrc: "/assets/brand/6.png", partname: "Land Rover Parts" },
    { imgSrc: "/assets/brand/20.png", partname: "Lexus Parts" },
    { imgSrc: "/assets/brand/lin.png", partname: "Lincoln Parts" },
    { imgSrc: "/assets/brand/21.png", partname: "Mazda Parts" },
    { imgSrc: "/assets/brand/5.png", partname: "Mercedes Parts" },
    { imgSrc: "/assets/brand/Mercury.png", partname: "Mercury Parts" },
    { imgSrc: "/assets/brand/merkur.jpeg", partname: "Merkur Parts" },
    { imgSrc: "/assets/brand/mg.jpeg", partname: "MG Parts" },
    { imgSrc: "/assets/brand/4.png", partname: "Mini Parts" },
    { imgSrc: "/assets/brand/3.png", partname: "Mitsubishi Parts" },
    { imgSrc: "/assets/brand/2.png", partname: "Nissan Parts" },
    { imgSrc: "/assets/brand/olds.png", partname: "Oldsmobile Parts" },
    { imgSrc: "/assets/brand/peugeot.jpeg", partname: "Peugeot Parts" },
    { imgSrc: "/assets/brand/ply.png", partname: "Plymouth Parts" },
    { imgSrc: "/assets/brand/pontiac.png", partname: "Pontiac Parts" },
    { imgSrc: "/assets/brand/1.png", partname: "Porsche Parts" },
    { imgSrc: "/assets/brand/ram.jpeg", partname: "Ram Parts" },
    { imgSrc: "/assets/brand/renault.jpeg", partname: "Renault Parts" },
    { imgSrc: "/assets/brand/rolls.jpeg", partname: "Rolls Royce Parts" },
    { imgSrc: "/assets/brand/saab.png", partname: "Saab Parts" },
    { imgSrc: "/assets/brand/27.png", partname: "Saturn Parts" },
    { imgSrc: "/assets/brand/26.png", partname: "Scion Parts" },
    { imgSrc: "/assets/brand/sterling.jpeg", partname: "Sterling Parts" },
    { imgSrc: "/assets/brand/25.png", partname: "Subaru Parts" },
    { imgSrc: "/assets/brand/24.png", partname: "Suzuki Parts" },
    { imgSrc: "/assets/brand/23.png", partname: "Toyota Parts" },
    { imgSrc: "/assets/brand/triumph.jpeg", partname: "Triumph Parts" },
    { imgSrc: "/assets/brand/volks.png", partname: "Volkswagen Parts" },
    { imgSrc: "/assets/brand/22.png", partname: "Volvo Parts" },
  ];
  return (
    <div className="shopbymake">
      <div className="container">
        <div className="d-flex align-items-center mb-3">
          <i className="fa-solid fa-gear fs-2 me-2 main"></i>
          <h3 className="fs-3 fw-bold">Shop Auto Parts by Make :</h3>
        </div>
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col-lg-2 mb-4">
                <div className="card border-0 d-flex align-items-center">
                  <div className="d-flex flex-column align-items-center justify-content-center p-3">
                    <img
                      src={item.imgSrc}
                      alt=""
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "contain",
                      }}
                    />
                    <h6 className="text-center parts-text">
                      <Link to="/sellerParts" className="parts-text">
                        {" "}
                        {item.partname}
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
