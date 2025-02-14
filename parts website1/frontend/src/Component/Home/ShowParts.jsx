import React, { useState } from "react";
import Seller_parts from "../Child Components/Seller_parts";

export default function ShowParts() {
  const data = [
    { head: "ABS Speed Sensor" },
    { head: "AC Compressor" },
    { head: "AC Condenser" },
    { head: "AC Evaporator" },
    { head: "AC Expansion Valve" },
    { head: "AC Heater Control" },
    { head: "AC Hose" },
    { head: "AC Receiver Drier" },
    { head: "Accelerator Pedal Sensor" },
    { head: "Accessory Belt Idler Pulley" },
    { head: "Air Bag Clockspring" },
    { head: "Air Compressor" },
    { head: "Air Fuel Ratio Sensor" },
    { head: "Air Intake Hose" },
    { head: "Air Mass Meter" },
    { head: "Air Mass Meter Boot" },
    { head: "Air Mass Sensor" },
    { head: "Air Pump" },
    { head: "Air Spring" },
    { head: "Antenna" },
    { head: "Antenna Mast" },
    { head: "Automatic Trans Solenoid" },
    { head: "Auto Trans Speed Sensor" },
    { head: "Back Up Light" },
    { head: "Battery Cable" },
    { head: "Belts" },
    { head: "Blower Motor" },
    { head: "Blower Motor Resistor" },
    { head: "Body Lowering Kit" },
    { head: "Brake Booster" },
    { head: "Brake Caliper" },
    { head: "Brake Drum" },
    { head: "Brake Hose" },
    { head: "Brake Hydraulic Line Kit" },
    { head: "Brake Pad Sensor" },
    { head: "Brake Shoes" },
    { head: "Brakes" },
    { head: "Breather Hose" },
    { head: "Bug Shield" },
    { head: "Bumper Absorber" },
    { head: "Bumper Bracket" },
    { head: "Bumper Cover" },
    { head: "Bumper End" },
    { head: "Bumper Face Bar" },
    { head: "Bumper Grille" },
    { head: "Bumper Impact Strip" },
    { head: "Bumper Reinforcement" },
    { head: "Camshaft" },
    { head: "Camshaft Position Sensor" },
    { head: "Car Bra" },
    { head: "Car Cover" },
    { head: "Carbon Canister" },
    { head: "Carburetor" },
    { head: "Clutch Cable" },
    { head: "Clutch Disc" },
    { head: "Clutch Master Cylinder" },
    { head: "Coil Spring" },
    { head: "Coil Spring Conversion Kit" },
    { head: "Cold Start Valve" },
    { head: "Performance Programmer" },
    { head: "Console Lid" },
    { head: "Control Arm Bushing" },
    { head: "Cornering Light" },
    { head: "Crank Position Sensor" },
    { head: "Crankcase Vent Valve" },
    { head: "Crankshaft Pulley" },
    { head: "Cruise Control Module" },
    { head: "Crusive Control Switch" },
    { head: "CV Boot" },
    { head: "CV Joint" },
    { head: "Distributor" },
    { head: "Distributor Cap" },
    { head: "Distributor Rotor" },
    { head: "Door Latch Assembly" },
    { head: "Door Lock Actuator" },
    { head: "Door Mirror Glass" },
    { head: "Driveshaft" },
    { head: "Driveshaft Bearing" },
    { head: "Driveshaft Support" },
    { head: "EGR VAlve" },
    { head: "Electronic Control Unit" },
    { head: "Emblem" },
    { head: "Engine Vibration Damper" },
    { head: "Engine Wiring Harness" },
    { head: "Exhaust Headers" },
    { head: "Exhaust Manifold Gasket" },
    { head: "Exhaust Pipe" },
    { head: "Fan Blade" },
    { head: "Fan Clutch" },
    { head: "Fan Shroud" },
    { head: "Fender" },
    { head: "Flex Joint" },
    { head: "Flex Plate" },
    { head: "Flywheel" },
    { head: "Fog Light Bezel" },
    { head: "Fuel Distributor" },
    { head: "Fuel Filler Neck" },
    { head: "Fuel Filter" },
    { head: "Fuel Injectors" },
    { head: "Fuel Level Sending Unit" },
    { head: "Fuel Pressure Regulator" },
    { head: "Fuel Pump Relay" },
    { head: "Fuel Tank" },
    { head: "Fuel Tank Cap" },
    { head: "Glow Plugs" },
    { head: "Grille Moulding" },
    { head: "Harmonic Balancer" },
    { head: "Hatch Strut" },
    { head: "Hazard Flasher Switch" },
    { head: "Head Bolt" },
    { head: "Header Pipe" },
    { head: "Headlight Bulb" },
    { head: "Headlight Covers" },
    { head: "Headlight Dimmer Switch" },
    { head: "Headlight Mounting Panel" },
    { head: "Headlight Switch" },
    { head: "Heater Core" },
    { head: "Heater Hose" },
    { head: "Heater Valve" },
    { head: "Hood" },
    { head: "Hood Hinge" },
    { head: "Hood Pad" },
    { head: "Hood Release Cable" },
    { head: "Hood Release Handle" },
    { head: "Hood Strut" },
    { head: "Hub Cap" },
    { head: "HVAC Control Module" },
    { head: "Idle Control Valve" },
    { head: "Idler Arm" },
    { head: "Igniter" },
    { head: "Ignition Cassette" },
    { head: "Ignition Control Unit" },
    { head: "Ignition Lock Assembly" },
    { head: "Ignition Lock Cylinder" },
    { head: "Ignition Lock Housing" },
    { head: "Ignition Module" },
    { head: "Ignition Switch" },
    { head: "Impluse Sender" },
    { head: "Inner Fender Well" },
    { head: "Intake Manifold" },
    { head: "Intake Manifold Gasket" },
    { head: "Intake Manifold Runner Valve" },
    { head: "Intercooler" },
    { head: "Intermediate Pipe" },
    { head: "Knock Sensor" },
    { head: "Leaf Spring" },
    { head: "License Plate Bracket" },
    { head: "Locking Hub" },
    { head: "MAP Sensor" },
    { head: "Master Cylinder" },
    { head: "Mud Flaps" },
    { head: "Neutral Safety Switch" },
    { head: "Oil Cooler" },
    { head: "Oil Pump" },
    { head: "Overdrive Relay" },
    { head: "Overdrive Switch" },
    { head: "Park Assist Camera" },
    { head: "Parking Brake Cable" },
    { head: "Parking Light" },
    { head: "Piston Ring Set" },
    { head: "Pitman Arm" },
    { head: "Power Steering Hose" },
    { head: "Preglow Time Relay" },
    { head: "Pressure Plate" },
    { head: "Purge Valve" },
    { head: "Radiator Hose" },
    { head: "Radiator Shutter Assembly" },
    { head: "Radiator Support" },
    { head: "Reference Sensor" },
    { head: "Release Bearing" },
    { head: "Reset Tool" },
    { head: "Rocker Arm" },
    { head: "Seat Cover" },
    { head: "Shifter Bushing" },
    { head: "Shock Absorber" },
    { head: "Shock Mount" },
    { head: "Side Marker" },
    { head: "Skid Plate" },
    { head: "Slave Cylinder" },
    { head: "Soft Top" },
    { head: "Spare Tire Hoist" },
    { head: "Steering Damper" },
    { head: "Steering Gearbox" },
    { head: "Steering Knuckle" },
    { head: "Steering Linkage Assembly" },
    { head: "Steering Rack" },
    { head: "Step Bumper" },
    { head: "Strut Bellows" },
    { head: "Strut Mount" },
    { head: "Struts" },
    { head: "Sunroof Handle" },
    { head: "Sunroof Motor" },
    { head: "Sunroof Seal" },
    { head: "Suspension Kit" },
    { head: "Sway Bar Bushing" },
    { head: "Sway Bar Link" },
    { head: "Tail Light Covers" },
    { head: "Tail Lights Guards" },
    { head: "Tailgate" },
    { head: "Tailgate Handle" },
    { head: "Tailgate Net" },
    { head: "Tailgate Strut" },
    { head: "Thermostat" },
    { head: "Thermostat Housing" },
    { head: "Third Brake Light" },
    { head: "Throttle Body" },
    { head: "Throttle Body Spacer" },
    { head: "Throttle Position Sensor" },
    { head: "Timing Belt Tensioner" },
    { head: "Timing Chain" },
    { head: "Timing Chain Tensioner" },
    { head: "Timing Cover" },
    { head: "TPMS Sensor" },
    { head: "Trailer Hitch" },
    { head: "Trailing Arm" },
    { head: "Transfer Case Motor" },
    { head: "Transmission Filter" },
    { head: "Transmission Mount" },
    { head: "Trunk Seal" },
    { head: "Trunk Strut" },
    { head: "Turbocharger" },
    { head: "Turn Signal Switch" },
    { head: "Vacuum Pump" },
    { head: "Valance Panel" },
    { head: "Valve Cover" },
    { head: "VAlve Cover Gasket" },
    { head: "Vapor Canister Vent Solenoid" },
    { head: "Variable Timing Solenoid" },
    { head: "Washer Pump" },
    { head: "Washer Reservior" },
    { head: "Wheel Bearing" },
    { head: "Wheel Cover" },
    { head: "Wheel Cylinder" },
    { head: "Wheelhouse Molding" },
    { head: "Window Vent Visors" },
    { head: "Windshield Wiper Arm" },
    { head: "Windshield Wiper Switch" },
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
    <>
      <div className="showparts">
        <div className="container">
          <div className="d-flex align-items-center mb-3">
            <i className="fa-solid fa-gear fs-2 me-2 main"></i>
            <h3 className="fs-3 fw-bold">Shop More Parts :</h3>
          </div>
          <div className="row">
            {data.map((item, index) => {
              return (
                <div className="col-lg-3 mb-4 col-6" key={index}>
                  <div className="card shop-card" >
                    <h6 className="text-center" style={{margin:"0"}}>
                      <button
                        className="parts-text btn"
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
    </>
  );
}
