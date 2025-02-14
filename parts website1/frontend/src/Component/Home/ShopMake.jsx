import React, { useState } from "react";
import Seller_parts from "../Child Components/Seller_parts";

export default function () {
  const data = [
    { imgSrc: "/assets/brand/15.png", head: "Acura Parts" },
    { imgSrc: "/assets/brand/alfa_romeo.jpeg", head: "Alfa Romeo Parts" },
    { imgSrc: "/assets/brand/12.png", head: "Audi Parts" },
    { imgSrc: "/assets/brand/austin.jpeg", head: "Austin Parts" },
    { imgSrc: "/assets/brand/13.png", head: "BMW Parts" },
    { imgSrc: "/assets/brand/Buick-logo.png", head: "Buick Parts" },
    { imgSrc: "/assets/brand/cad.png", head: "Cadillac Parts" },
    { imgSrc: "/assets/brand/chevrolet.jpeg", head: "Chevrolet Parts" },
    { imgSrc: "/assets/brand/chrysler.png", head: "Chrysler Parts" },
    { imgSrc: "/assets/brand/daewoo.jpeg", head: "Daewoo Parts" },
    { imgSrc: "/assets/brand/daihatsu.jpeg", head: "Daihatsu Parts" },
    { imgSrc: "/assets/brand/dodge.png", head: "Dodge Parts" },
    { imgSrc: "/assets/brand/eagle.jpeg", head: "Eagle Parts" },
    { imgSrc: "/assets/brand/ferrari.jpeg", head: "Ferrari Parts" },
    { imgSrc: "/assets/brand/fiat.jpg", head: "Fiat Parts" },
    { imgSrc: "/assets/brand/ford.png", head: "Ford Parts" },
    { imgSrc: "/assets/brand/geo.jpeg", head: "Geo Parts" },
    { imgSrc: "/assets/brand/gmc.png", head: "GMC Parts" },
    { imgSrc: "/assets/brand/16.png", head: "Honda Parts" },
    { imgSrc: "/assets/brand/hummer.png", head: "Hummer Parts" },
    { imgSrc: "/assets/brand/8.png", head: "Hyundai Parts" },
    { imgSrc: "/assets/brand/18.png", head: "Infiniti Parts" },
    { imgSrc: "/assets/brand/isuzu.png", head: "Isuzu Parts" },
    { imgSrc: "/assets/brand/17.png", head: "Jaguar Parts" },
    { imgSrc: "/assets/brand/jeep.png", head: "Jeep Parts" },
    { imgSrc: "/assets/brand/7.png", head: "Kia Parts" },
    { imgSrc: "/assets/brand/6.png", head: "Land Rover Parts" },
    { imgSrc: "/assets/brand/20.png", head: "Lexus Parts" },
    { imgSrc: "/assets/brand/lin.png", head: "Lincoln Parts" },
    { imgSrc: "/assets/brand/21.png", head: "Mazda Parts" },
    { imgSrc: "/assets/brand/5.png", head: "Mercedes Parts" },
    { imgSrc: "/assets/brand/Mercury.png", head: "Mercury Parts" },
    { imgSrc: "/assets/brand/merkur.jpeg", head: "Merkur Parts" },
    { imgSrc: "/assets/brand/mg.jpeg", head: "MG Parts" },
    { imgSrc: "/assets/brand/4.png", head: "Mini Parts" },
    { imgSrc: "/assets/brand/3.png", head: "Mitsubishi Parts" },
    { imgSrc: "/assets/brand/2.png", head: "Nissan Parts" },
    { imgSrc: "/assets/brand/olds.png", head: "Oldsmobile Parts" },
    { imgSrc: "/assets/brand/peugeot.jpeg", head: "Peugeot Parts" },
    { imgSrc: "/assets/brand/ply.png", head: "Plymouth Parts" },
    { imgSrc: "/assets/brand/pontiac.png", head: "Pontiac Parts" },
    { imgSrc: "/assets/brand/1.png", head: "Porsche Parts" },
    { imgSrc: "/assets/brand/ram.jpeg", head: "Ram Parts" },
    { imgSrc: "/assets/brand/renault.jpeg", head: "Renault Parts" },
    { imgSrc: "/assets/brand/rolls.jpeg", head: "Rolls Royce Parts" },
    { imgSrc: "/assets/brand/saab.png", head: "Saab Parts" },
    { imgSrc: "/assets/brand/27.png", head: "Saturn Parts" },
    { imgSrc: "/assets/brand/26.png", head: "Scion Parts" },
    { imgSrc: "/assets/brand/sterling.jpeg", head: "Sterling Parts" },
    { imgSrc: "/assets/brand/25.png", head: "Subaru Parts" },
    { imgSrc: "/assets/brand/24.png", head: "Suzuki Parts" },
    { imgSrc: "/assets/brand/23.png", head: "Toyota Parts" },
    { imgSrc: "/assets/brand/triumph.jpeg", head: "Triumph Parts" },
    { imgSrc: "/assets/brand/volks.png", head: "Volkswagen Parts" },
    { imgSrc: "/assets/brand/22.png", head: "Volvo Parts" },
  ];

  // Modal state to control whether to show the SellerParts modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPart, setSelectedPart] = useState(null);

  // Open modal function
  const openModal = (part) => {
    setSelectedPart(part);
    setModalOpen(true);
  };

  // Close modal function
  const closeModal = () => {
    setModalOpen(false);
    setSelectedPart(null);
  };
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
              <div className="col-lg-2 mb-4 col-6"  key={index}>
                <div
                  className="card border-0 d-flex align-items-center"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out-cubic"
                >
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
                    <h6 className="text-center" style={{ margin: "0" }}>
                      <button
                        className="parts-text btn"
                        onClick={() => openModal(item)}
                      >
                        {item.head}
                      </button>
                    </h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={closeModal} className="close-btn">
              X
            </button>
            <Seller_parts part={selectedPart} closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
}
