import React from "react";
import Header from "../Portfolio/Header";
import Services from '../Portfolio/Services'
import Expertise from '../Portfolio/Expertise'
import Team from '../Portfolio/Team'
import Clients from "../Portfolio/Clients";
import WhyChooseSS from '../Portfolio/WhyChooseSS'
import '../Portfolio/Portfolio.css'
import Popup from "./Popup";
export default function Portfolio() {
  return (
    <div>
      <Popup/>
      <Header />
      <Services />
      <Expertise />
      <Team />
      <Clients />
      <WhyChooseSS />
    </div>
  );
}
