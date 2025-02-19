import React from "react";
import HomeHeader from "../Home/HomeHeader";
import Speciality from "../Home/Speciality";
import { Link } from "react-router-dom";

export default function Brands() {
  const data = [
    { imgSrc: "/assets/New_brands/A1Cardone.jpeg", head: "A1 Cardone" },
    { imgSrc: "/assets/New_brands/Aburun.jpeg", head: "Aburun Gear" },
    { imgSrc: "/assets/New_brands/Accel.jpeg", head: "Accel" },
    { imgSrc: "/assets/New_brands/access.jpeg", head: "Access" },
    { imgSrc: "/assets/New_brands/Act.jpeg", head: "ACT" },
    { imgSrc: "/assets/New_brands/aem.jpeg", head: "AEM" },
    { imgSrc: "/assets/New_brands/afe.jpeg", head: "AFE" },
    { imgSrc: "/assets/New_brands/ags.jpeg", head: "AGS" },
    { imgSrc: "/assets/New_brands/Aired.jpeg", head: "Airaid" },
    { imgSrc: "/assets/New_brands/Airlift.jpeg", head: "Air Lift" },
    { imgSrc: "/assets/New_brands/Airtex.jpeg", head: "Airtex" },
    { imgSrc: "/assets/New_brands/AMI.jpeg", head: "AMI" },
    { imgSrc: "/assets/New_brands/Amp.jpeg", head: "AMP Research" },
    { imgSrc: "/assets/New_brands/anco.jpeg", head: "Anco" },
    { imgSrc: "/assets/New_brands/anzo.jpeg", head: "Anzo" },
    { imgSrc: "/assets/New_brands/Arb.jpeg", head: "ARB" },
    { imgSrc: "/assets/New_brands/auto_ventshade.gif", head: "Auto Ventshade" },
    { imgSrc: "/assets/New_brands/autolite.jpeg", head: "Autolight" },
    { imgSrc: "/assets/New_brands/Autometer.jpeg", head: "Auto Meter" },
    { imgSrc: "/assets/New_brands/Backrack.jpeg", head: "Backrack" },
    { imgSrc: "/assets/New_brands/Bak.jpeg", head: "BAK Industries" },
    { imgSrc: "/assets/New_brands/BM.jpeg", head: "B&M" },
    { imgSrc: "/assets/New_brands/bank.jpeg", head: "Banks Power" },
    { imgSrc: "/assets/New_brands/bbk.jpeg", head: "BBK" },
    { imgSrc: "/assets/New_brands/bd.jpeg", head: "BD Diesel" },
    { imgSrc: "/assets/New_brands/Bedrug.png", head: "Bedrug" },
    { imgSrc: "/assets/New_brands/Beltech.png", head: "Beltech" },
    { imgSrc: "/assets/New_brands/Bilstein.png", head: "Bilstein" },
    { imgSrc: "/assets/New_brands/blueox.png", head: "Blue Ox" },
    { imgSrc: "/assets/New_brands/body_armor.gif", head: "Body Armor" },
    { imgSrc: "/assets/New_brands/borla.png", head: "Borla" },
    { imgSrc: "/assets/New_brands/bosch.jpg", head: "Bosch" },
    { imgSrc: "/assets/New_brands/buschbaker.png", head: "Buschwacker" },
    { imgSrc: "/assets/New_brands/carr.jpg", head: "Carr" },
    { imgSrc: "/assets/New_brands/carter.gif", head: "Carter" },
    { imgSrc: "/assets/New_brands/cipa.gif", head: "CIPA" },
    { imgSrc: "/assets/New_brands/cloyes.gif", head: "Cloyes" },
    { imgSrc: "/assets/New_brands/comp.png", head: "Competition Cams" },
    { imgSrc: "/assets/New_brands/corsa.png", head: "Corsa" },
    { imgSrc: "/assets/New_brands/covercraft.png", head: "Covercraft" },
    { imgSrc: "/assets/New_brands/crown.png", head: "Crown Automotive" },
    { imgSrc: "/assets/New_brands/csi.png", head: "CSI" },
    { imgSrc: "/assets/New_brands/dayco.png", head: "Dayco" },
    { imgSrc: "/assets/New_brands/daystar.gif", head: "Daystar" },
    { imgSrc: "/assets/New_brands/diablo.png", head: "DiabloSport" },
    { imgSrc: "/assets/New_brands/dorman.jpg", head: "Dorman" },
    { imgSrc: "/assets/New_brands/draw.png", head: "Draw-Tite" },
    { imgSrc: "/assets/New_brands/dynomax.png", head: "Dynomax" },
    { imgSrc: "/assets/New_brands/eaton.png", head: "Eaton" },
    { imgSrc: "/assets/New_brands/ebc.png", head: "EBC" },
    { imgSrc: "/assets/New_brands/edelbrock.png", head: "Edelbrock" },
    { imgSrc: "/assets/New_brands/edge_products.gif", head: "Edge Products" },
    { imgSrc: "/assets/New_brands/egr.jpg", head: "EGR" },
    { imgSrc: "/assets/New_brands/energy.png", head: "Energy Suspension" },
    { imgSrc: "/assets/New_brands/exedy.png", head: "Exedy" },
    { imgSrc: "/assets/New_brands/extang.png", head: "Extang" },
    { imgSrc: "/assets/New_brands/fab_fours.jpg", head: "Fab Fours" },
    { imgSrc: "/assets/New_brands/felpro.png", head: "Felpro" },
    { imgSrc: "/assets/New_brands/fia.png", head: "Fia" },
    { imgSrc: "/assets/New_brands/flaming.jpg", head: "Flaming River" },
    { imgSrc: "/assets/New_brands/flex.png", head: "Flex-A-Lite" },
    { imgSrc: "/assets/New_brands/flowmaster.png", head: "Flowmaster" },
    { imgSrc: "/assets/New_brands/ford.png", head: "Ford Racing" },
    { imgSrc: "/assets/New_brands/four_seasons.gif", head: "Four Seasons" },
    { imgSrc: "/assets/New_brands/fox_shox.gif", head: "Fox Shox" },
    { imgSrc: "/assets/New_brands/fram.gif", head: "Fram" },
    { imgSrc: "/assets/New_brands/firestone.png", head: "Firestone Ride-Rite" },
    { imgSrc: "/assets/New_brands/gibson.gif", head: "Gibson" },
    { imgSrc: "/assets/New_brands/go_industries.gif", head: "Go Industries" },
    { imgSrc: "/assets/New_brands/go_rhino.gif", head: "Go Rhino" },
    { imgSrc: "/assets/New_brands/green_filters.gif", head: "Green Filters" },
    { imgSrc: "/assets/New_brands/ground_force.gif", head: "Ground Force" },
    { imgSrc: "/assets/New_brands/gt_styling.gif", head: "GT Styling" },
    { imgSrc: "/assets/New_brands/hawk.gif", head: "Hawk" },
    { imgSrc: "/assets/New_brands/hayes.gif", head: "Hayes" },
    { imgSrc: "/assets/New_brands/hays.gif", head: "Hays" },
    { imgSrc: "/assets/New_brands/hedman_hedders.gif", head: "Hedman Hedders" },
    { imgSrc: "/assets/New_brands/hella.gif", head: "Hella" },
    { imgSrc: "/assets/New_brands/hellwig.gif", head: "Hellwig" },
    { imgSrc: "/assets/New_brands/holley.gif", head: "Holley" },
    { imgSrc: "/assets/New_brands/hopkins.gif", head: "Hopkins" },
    { imgSrc: "/assets/New_brands/hurst.gif", head: "Hurst" },
    { imgSrc: "/assets/New_brands/husky_liner.gif", head: "Husky Liner" },
    { imgSrc: "/assets/New_brands/hypertech.gif", head: "Hypertech" },
    { imgSrc: "/assets/New_brands/injen.gif", head: "Injen" },
    { imgSrc: "/assets/New_brands/jba_exhaust.gif", head: "JBA Exhaust" },
    { imgSrc: "/assets/New_brands/jet_chips.gif", head: "Jet Chips" },
    { imgSrc: "/assets/New_brands/k-ar-n.gif", head: "K&N" },
    { imgSrc: "/assets/New_brands/kooks.gif", head: "Kooks" },
    { imgSrc: "/assets/New_brands/kyb.gif", head: "KYB" },
    { imgSrc: "/assets/New_brands/lakewood.gif", head: "Lakewood" },
    { imgSrc: "/assets/New_brands/lokar.gif", head: "Lokar" },
    { imgSrc: "/assets/New_brands/lund.gif", head: "Lund" },
    { imgSrc: "/assets/New_brands/magnaflow.gif", head: "Magnaflow" },
    { imgSrc: "/assets/New_brands/mallory.gif", head: "Mallory" },
    { imgSrc: "/assets/New_brands/mbrp.gif", head: "MBRP" },
    { imgSrc: "/assets/New_brands/metra.gif", head: "Metra" },
    { imgSrc: "/assets/New_brands/mile_marker.gif", head: "Mile Marker" },
    { imgSrc: "/assets/New_brands/monroe.gif", head: "Monroe" },
    { imgSrc: "/assets/New_brands/moog.gif", head: "Moog" },
    { imgSrc: "/assets/New_brands/motive_gear.gif", head: "Motive Gear" },
    { imgSrc: "/assets/New_brands/mr_gasket.gif", head: "Mr Gasket" },
    { imgSrc: "/assets/New_brands/msd.gif", head: "MSD" },
    { imgSrc: "/assets/New_brands/n_fab.gif", head: "N -Fab" },
    { imgSrc: "/assets/New_brands/ngk.gif", head: " NGK" },
    { imgSrc: "/assets/New_brands/old_man_emu.gif", head: " Old Man Emu" },
    { imgSrc: "/assets/New_brands/omega.gif", head: " Omega" },
    { imgSrc: "/assets/New_brands/pace_edwards.gif", head: "Pace Edwards" },
    { imgSrc: "/assets/New_brands/pacesetter.gif", head: "Pacesetter" },
    {
      imgSrc: "/assets/New_brands/painless_performance.gif",
      head: "Painless Performance",
    },
    {
      imgSrc: "/assets/New_brands/patriot_exhaust.gif",
      head: " Patriot Exhaust",
    },
    { imgSrc: "/assets/New_brands/pavement_ends.gif", head: " Pavement Ends" },
    { imgSrc: "/assets/New_brands/penda.gif", head: " Penda" },
    { imgSrc: "/assets/New_brands/pertronix.gif", head: " Pertronix" },
    { imgSrc: "/assets/New_brands/piaa.gif", head: " PIAA" },
    { imgSrc: "/assets/New_brands/pilot.gif", head: " Pilot" },
    { imgSrc: "/assets/New_brands/pop_-ar-_lock.gif", head: " Pop & Lock" },
    { imgSrc: "/assets/New_brands/power_stop.gif", head: " Power Stop" },
    { imgSrc: "/assets/New_brands/powermaster.gif", head: " Powermaster" },
    { imgSrc: "/assets/New_brands/putco.gif", head: " Putco" },
    { imgSrc: "/assets/New_brands/ram_clutches.gif", head: " Ram Clutches" },
    { imgSrc: "/assets/New_brands/rampage.gif", head: " Rampage" },
    { imgSrc: "/assets/New_brands/rancho.gif", head: " Rancho" },
    { imgSrc: "/assets/New_brands/raybestos.gif", head: " Raybestos" },
    { imgSrc: "/assets/New_brands/rbp.gif", head: " RBP" },
    { imgSrc: "/assets/New_brands/remflex.gif", head: " Remflex" },
    { imgSrc: "/assets/New_brands/retrax.gif", head: " Retrax" },
    { imgSrc: "/assets/New_brands/richmond_gear.gif", head: " Richmond Gear" },
    {
      imgSrc: "/assets/New_brands/rigid_industries.gif",
      head: " Rigid Industries",
    },
    { imgSrc: "/assets/New_brands/romik.gif", head: " Romik" },
    { imgSrc: "/assets/New_brands/roush.gif", head: " Roush" },
    { imgSrc: "/assets/New_brands/rugged_ridge.gif", head: " Rugged Ridge" },
    { imgSrc: "/assets/New_brands/russell.gif", head: " Russell Performance" },
    { imgSrc: "/assets/New_brands/sealed_power.gif", head: " Sealed Power" },
    { imgSrc: "/assets/New_brands/skunk2.gif", head: " Skunk2" },
    { imgSrc: "/assets/New_brands/skyjacker.gif", head: " Skyjacker" },
    {
      imgSrc: "/assets/New_brands/spectre_performance.gif",
      head: " Spectre Performance",
    },
    {
      imgSrc: "/assets/New_brands/ssbc_performance_brakes.gif",
      head: " SSBC Performance Brakes",
    },
    { imgSrc: "/assets/New_brands/street_scene.gif", head: " Street Scene" },
    { imgSrc: "/assets/New_brands/superchips.gif", head: " Superchips" },
    { imgSrc: "/assets/New_brands/superlift.gif", head: " Superlift" },
    { imgSrc: "/assets/New_brands/supersprings.gif", head: " Supersprings" },
    { imgSrc: "/assets/New_brands/t-rex.gif", head: " T-Rex" },
    { imgSrc: "/assets/New_brands/taylor.gif", head: " Taylor" },
    { imgSrc: "/assets/New_brands/thule.gif", head: " Thule" },
    { imgSrc: "/assets/New_brands/timbren.gif", head: " Timbren" },
    { imgSrc: "/assets/New_brands/titan.gif", head: " Titan" },
    { imgSrc: "/assets/New_brands/tracrac.gif", head: " Tracrac" },
    { imgSrc: "/assets/New_brands/trans_dapt.gif", head: " Trans Dapt" },
    { imgSrc: "/assets/New_brands/truxedo.gif", head: " Truxedo" },
    { imgSrc: "/assets/New_brands/tuff_country.gif", head: " Tuff Country" },
    { imgSrc: "/assets/New_brands/undercover.gif", head: " Undercover" },
    { imgSrc: "/assets/New_brands/volant.gif", head: " Volant" },
    { imgSrc: "/assets/New_brands/warn.gif", head: " Warn" },
    { imgSrc: "/assets/New_brands/weathertech.gif", head: " Weathertech" },
    { imgSrc: "/assets/New_brands/westin.gif", head: " Westin" },
    { imgSrc: "/assets/New_brands/wix.gif", head: " Wix" },
    { imgSrc: "/assets/New_brands/wilwood.gif", head: " Wilwood" },
    { imgSrc: "/assets/New_brands/walbro.gif", head: " Walbro" },
    { imgSrc: "/assets/New_brands/wagner.gif", head: " Wagner" },
    { imgSrc: "/assets/New_brands/weiand.gif", head: " Weiand" },
    { imgSrc: "/assets/New_brands/willmore.gif", head: " Willmore" },
  ];
  return (
    <>
      <div className="brand">
        <HomeHeader />
      </div>
      <Speciality/>
      <div className="brands">
        <div className="container">
          <div className="d-flex align-items-center mb-3">
            <i className="fa-solid fa-gear fs-2 me-2 main"></i>
            <h3 className="fs-3 fw-bold">Shop By Brands :</h3>
          </div>
          <div className="row justify-content-center">
            {data.map((item, index) => {
              return (
                <div className="col-lg-2 mb-5 mx-2" key={index}>
                  <div className="card d-flex flex-column align-items-center border-0 parts-card">
                    <img
                      src={item.imgSrc}
                      alt=""
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                      }}
                    />
                    <h6 className=" text-center mt-2">
                      <Link to="/sellerParts" className="parts-text">
                        {item.head}
                      </Link>
                    </h6>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style>
        {`
        .brand{
        background:url(https://wallpaperaccess.com/full/2138208.jpg)!important;
        position:relative;
        z-index:1;
        }
        .brand:after{
          content:"";
          position:absolute;
          background:#000;
          top:0;
          left:0;
          width:100%;
          height:100%;
          opacity:0.4;
          z-index:-1;
        }
        `}
      </style>
    </>
  );
}
