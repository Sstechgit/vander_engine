import React from 'react'
import { Link } from 'react-router-dom'

export default function AllPArts() {
  const data = [
    { imgSrc: "/assets/parts/air_filter.jpg", head: "Air Filter" },
    { imgSrc: "/assets/parts/alternator.jpg", head: "Alternator" },
    { imgSrc: "/assets/parts/Axle.jpg", head: "Axle" },
    { imgSrc: "/assets/parts/ball_joint.jpg", head: "Ball Joint" },
    { imgSrc: "/assets/parts/brake_pads.jpg", head: "Brake Pads" },
    { imgSrc: "/assets/parts/brakerotors.jpg", head: "Brake Motors" },
    { imgSrc: "/assets/parts/Cabin filter.jpg", head: "Cabin Filter" },
    { imgSrc: "/assets/parts/Cargo_liner.jpg", head: "Cargo Liner" },
    { imgSrc: "/assets/parts/catalytic_converter.jpg", head: "Catalytic Converter" },
    { imgSrc: "/assets/parts/clutch.jpg", head: "Clutch" },
    { imgSrc: "/assets/parts/Cold_Air_Intake.jpg", head: "Cold Air Intake" },
    { imgSrc: "/assets/parts/control_arm.jpg", head: "Control Arm" },
    { imgSrc: "/assets/parts/door_handle.jpg", head: "Door Handle" },
    { imgSrc: "/assets/parts/engine_mount.jpg", head: "Engine Mount" },
    { imgSrc: "/assets/parts/exhaust_manifold.jpg", head: "Exhaust Manifold" },
    { imgSrc: "/assets/parts/exhaust_system.jpg", head: "Exhaust System" },
    { imgSrc: "/assets/parts/expansion_tank.jpg", head: "Expansion Tank" },
    { imgSrc: "/assets/parts/fender_flares.jpg", head: "Fender Flares" },
    { imgSrc: "/assets/parts/floor_mats.jpg", head: "Floor Mats" },
    { imgSrc: "/assets/parts/fog_light.jpg", head: "Fog Light" },
    { imgSrc: "/assets/parts/fuel_pump.jpg", head: "Fuel Pump" },
    { imgSrc: "/assets/parts/grille.jpg", head: "Grille" },
    { imgSrc: "/assets/parts/head_gasket.jpg", head: "Head Gasket" },
    { imgSrc: "/assets/parts/headlight.jpg", head: "Headlight" },
    { imgSrc: "/assets/parts/ignition_coil.jpg", head: "Ignition" },
    { imgSrc: "/assets/parts/mirror.jpg", head: "Mirror" },
    { imgSrc: "/assets/parts/muffler.jpg", head: "Muffler" },
    { imgSrc: "/assets/parts/oil_filter.jpg", head: "Oil Filter" },
    { imgSrc: "/assets/parts/oil_pan.jpg", head: "Oil Pan" },
    { imgSrc: "/assets/parts/oxygen_sensor.jpg", head: "Oxygen Sensor" },
    { imgSrc: "/assets/parts/radiator_fan.jpg", head: "Radiator Fan" },
    { imgSrc: "/assets/parts/radiator.jpg", head: "Radiator" },
    { imgSrc: "/assets/parts/repair_manual.jpg", head: "Repair Manual" },
    { imgSrc: "/assets/parts/shocks.jpg", head: "Shocks" },
    { imgSrc: "/assets/parts/spark_plug_wires.jpg", head: "Spark Plugs Wires" },
    { imgSrc: "/assets/parts/spark_plugs.jpg", head: "Spark Plugs" },
    { imgSrc: "/assets/parts/starter.jpg", head: "Starter" },
    { imgSrc: "/assets/parts/streeing_pump.jpg", head: "Streeing Pump" },
    { imgSrc: "/assets/parts/tail_light.jpg", head: "Tail Light" },
    { imgSrc: "/assets/parts/tie_road.jpg", head: "Tie Road" },
    { imgSrc: "/assets/parts/timing_belt.jpg", head: "Timing Belt" },
    { imgSrc: "/assets/parts/turn_signal.jpg", head: "Turn Signal" },
    { imgSrc: "/assets/parts/water_pump.jpg", head: "Water Pump" },
    { imgSrc: "/assets/parts/wheel_hub.jpg", head: "Wheel Hub" },
    { imgSrc: "/assets/parts/wheel.jpg", head: "Wheel" },
    { imgSrc: "/assets/parts/window_motor.jpg", head: "Window Motor" },
    { imgSrc: "/assets/parts/window_regulator.jpg", head: "Window Regulator" },
    { imgSrc: "/assets/parts/window_switch.jpg", head: "Window Switch" },
    { imgSrc: "/assets/parts/windshield_wiper_motor.jpg", head: "Windshield Wiper Motor" },
    { imgSrc: "/assets/parts/wiper_blade.jpg", head: "Wiper Blade" },
  ]
  return (
    <div className="allparts">
      <div className="container">
      <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-gear fs-2 me-2 main"></i>
                    <h3 className="fs-3 fw-bold">Best Sellers :</h3>
                </div>
        <div className="row justify-content-center">
          {data.map((item, index) => {
            return (
              <div className="col-lg-2 mb-5 mx-2" key={index}>
                <div className="card d-flex flex-column align-items-center border-0 parts-card">
                  <img src={item.imgSrc} alt="" style={{ width: "100px", height: "100px", objectFit: "contain" }} />
                  <h6 className='text-center mt-2 parts-text'>{item.head}</h6>
                </div>
              </div>
            )
          })
          }
        </div>
        <p>Our comprehensive, alphabetized list of new car and truck parts is organized by part type, making it easy for you to find exactly what you're looking for. If you can’t find your part among our best sellers, you’re sure to discover it here. For a more customized search, select your vehicle above or complete your offering by browsing additional options.
        </p>
      </div>
    </div>
  )
}