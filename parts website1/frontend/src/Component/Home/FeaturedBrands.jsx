import React, { useState } from "react";
import Seller_parts from "../Child Components/Seller_parts";

export default function FeaturedBrands() {
  const data = [
    { head: "A1 Cardone" },
    { head: "Airtex" },
    { head: "Anzo" },
    { head: "Auto Ventshade" },
    { head: "Bilstein" },
    { head: "Bosch" },
    { head: "Bushwacker" },
    { head: "Carter" },
    { head: "Cloyes" },
    { head: "Crown Automative" },
    { head: "Dayco" },
    { head: "Dorman" },
    { head: "Draw-Tite" },
    { head: "EBC" },
    { head: "Energy Suspension" },
    { head: "Exedy" },
    { head: "Felpro" },
    { head: "Flowmaster" },
    { head: "Four Seasons" },
    { head: "Hella" },
    { head: "Husky Liner" },
    { head: "K&N" },
    { head: "KYC" },
    { head: "Monroe" },
    { head: "Moog" },
    { head: "NGK" },
    { head: "Raybestos" },
    { head: "Wagner" },
    { head: "Weathertech" },
    { head: "Westin" },
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
    <div className="featured-brand">
      <div className="container">
        <div className="d-flex align-items-center mb-3">
          <i className="fa-solid fa-gear fs-2 me-2 main"></i>
          <h3 className="fs-3 fw-bold">Shop Featured Auto Parts Brands :</h3>
        </div>
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col-lg-3 mb-4 col-6" key={index}>
                <div className="card border-0">
                  <h6 className="text-center" style={{ margin: "0" }}>
                    <button
                      className="model-text btn"
                      onClick={() => openModal(item)}
                    >
                      {item.head}
                    </button>
                  </h6>
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
