import React, { useState } from "react";
import Seller_parts from "../Child Components/Seller_parts";

export default function ShopModels() {
  const data = [
    { head: "Chevrolet Equinox Parts" },
    { head: "Chevrolet Impala Parts" },
    { head: "Chevrolet Malibu Parts" },
    { head: "Chevrolet S10 Parts" },
    { head: "Chevrolet Silverado 1500 Parts" },
    { head: "Chevrolet Silverado 2500 HD Parts" },
    { head: "Chevrolet Tahoe Parts" },
    { head: "Chrysler Town & Country Parts" },
    { head: "Dodge Dakota Parts" },
    { head: "Dodge Durango Parts" },
    { head: "Dodge Grand Caravan Parts" },
    { head: "Dodge Ram 1500 Parts" },
    { head: "Dodge Ram 2500 Parts" },
    { head: "Ford Escape Parts" },
    { head: "Ford Expedition Parts" },
    { head: "Ford Explorer Parts" },
    { head: "Ford F150 Parts" },
    { head: "Ford F250 Super Duty Parts" },
    { head: "Ford F350 Super Duty Parts" },
    { head: "Ford Ford Focus Parts" },
    { head: "Ford Fusion Parts" },
    { head: "Ford Mustang Parts" },
    { head: "Ford Ranger Parts" },
    { head: "GMC Sierra 1500 Parts" },
    { head: "Honda Accord Parts" },
    { head: "Honda CRV Parts" },
    { head: "Honda Civic Parts" },
    { head: "Honda Odyssey Parts" },
    { head: "Hyundai Elantra Parts" },
    { head: "Hyundai Sonata Parts" },
    { head: "Jeep Cherokee Parts" },
    { head: "Jeep Grand Cherokee Parts" },
    { head: "Jeep Liberty Parts" },
    { head: "Jeep Wrangler Parts" },
    { head: "Mini Cooper Parts" },
    { head: "Nissan Altima Parts" },
    { head: "Nissan Maxima Parts" },
    { head: "Nissan Sentra Parts" },
    { head: "Subaru Forester Parts" },
    { head: "Subaru Outback Parts" },
    { head: "Toyota 4Runner Parts" },
    { head: "Toyota Camry Parts" },
    { head: "Toyota Corolla Parts" },
    { head: "Toyota Pickup Parts" },
    { head: "Toyota RAV4 Parts" },
    { head: "Toyota Sienna Parts" },
    { head: "Toyota Tacoma Parts" },
    { head: "Toyota Tundra Parts" },
    { head: "Volkswagen Beetle Parts" },
    { head: "Volkswagen Jetta Parts" },
    { head: "Volkswagen Passat Parts" },
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
    <div className="shopmodel">
      <div className="container">
        <div className="d-flex align-items-center mb-3">
          <i className="fa-solid fa-gear fs-2 me-2 main"></i>
          <h3 className="fs-3 fw-bold">Shop Auto Parts for Popular Models :</h3>
        </div>
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col-lg-3 mb-4" key={index}>
                <div
                  className="card border-0"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out-cubic"
                >
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
