import React from "react";
import { Helmet } from "react-helmet";

export default function WarrantyPolicy() {
  const data = [
    {
      head: "Warranty Policy",
      para1:
        "Our warranty approach covers damaged parts and adornments sent by us. We offer a service agreement at pretty much every vehicle part. Our warranty framework doesn’t cover any type of Labor cost. In a condition where it is discovered that a section is inadequate, first we attempt to supplant it and on the off chance that a substitution is beyond the realm of imagination, at that point we will produce a discount for the aggregate sum that has been charged against your buy. In the event a reorder is made before the arrival of the underlying part we will require forthright installment for the subsequent part and discount.",
      para2:
        "While raising return solicitations to Vander Engines Yard, if it’s not too much trouble give a definite explanation concerning why the part is being returned. In the event, a section is returned which doesn’t coordinate the arrival determination of the part in this warranty strategy, Used Parts Yard will charge a 25% restocking expense from the complete paid sum. Utilized Parts Yard won’t be at risk if the client will not claim the item at the given location gave during the hour of procurement.",
      para3:
        "Before requesting please confirm it with a specialist or a body master for requesting the correct part. We won’t start any discount and won’t acknowledge any profits if the request made by the client is mistakenly requested. What’s more, the item ought to be returned in 30 days from the date it was conveyed.",
      para4:
        "Coming up next are the couple of extraordinary cases that will either void a warranty or are exceptions to our 30 days merchandise exchange.",
      para5:
        "Motors are amassed totally comprising manifolds, oil skillet, timing covers and belts, fuel infusion or the carburetor, we ensure just for the long square, not for the manifolds, gaskets, seals, hoses, oil container, timing covers, and belts, fuel infusion or the carburetor.",
      para6:
        "In the event that parts bought independently, they will go under warranty.",
      para7:
        "Different things, for example, water siphon, wholesaler top, flash fittings and wires that might be required to supplant are high-wear parts, Used Parts Yard won’t be subject to them.",
      para8:
        "Electrical things for instance Engine Computers and Body Control Modules, transmission modules, move case modules are not for testing purposes, and just ensured to have the correct producer part number. Every single electrical thing goes under the substitution warranty as it were. We will send up to one substitution request to correct a non-working module. A module may require to be reset through the vendor. For this situation, a section can’t be returned until the seller checks that the part has been improved appropriately. Also, if there should be an occurrence of the electrical part whenever changed in any capacity won’t acknowledge as an arrival.",
      para9:
        "On account of swaggers, sold in working condition will just go under warranty. The genuine ride nature of the stuns or springs doesn’t go under warranty, yet we warranty that the springs and swagger pinnacle will be in working condition. However, stuns may be changed to upgrade ride quality. Control arms are a warranty to be unique and straight. The warranty doesn’t cover any elastic bushings or non-metal parts added to control arms.",
      para10:
        "Portions of Bushings and Ball Joints are not shrouded in the warranty.",
    },
    {
      head: "Transmissions",
      para1:
        "We warranty that it will move appropriately, riggings and course would work easily. Altogether need to clean every segment of the transmission including oil dish before gathering. Supplant oil and channel in each programmed transmission. You have to supplant each seal and gasket before establishment. Flush and stream test cooler and lines. Completely connected with a torque converter in a front siphon. In the manual transmission, you ought to introduce another grip, pressure plate, and slave chamber. You likewise need to have your flywheel turned before establishment. Fill and warranty liquid to warranty legitimate levels. There is no assurance of Seals in turbo to be great. The seals may be changed in a warranty time allotment. warranty just covers entryway shell, not the frill, for example, windows, window controllers, handles, pivots, or inside boards. Other body parts for instance hoods, bumpers, guards, quarter boards, and header boards are not ensured to join pivots, hood decorations, locks, trim, headlights, or grilles. In the event that there is a confound of shading on mentioning a particular shade of the body part it won’t be shrouded in warranty and won’t be considered as an explanation of return, however, we will repaint the body part to coordinate your vehicle.",
      para2: "",
      para3: "",
    },
  ];
  return (
    <>
     <Helmet>
        <title>
          Vander Engines | Warranty Policy
        </title>
      </Helmet>
      {data.map((item, index) => (
        <div className="shipping my-5" key={index}>
          <div className="container">
            <div className="shipping-head pt-3 text-center fw-bolder text-white">
              <h2 className="fs-1 fw-bold">{item.head}</h2>
            </div>
            <div className="shipping-content pb-3 ">
              <p>{item.para1}</p>
              <p>{item.para2}</p>
              <p>{item.para3}</p>
              <p>{item.para4}</p>
              <p>{item.para5}</p>
              <p>{item.para6}</p>
              <p>{item.para7}</p>
              <p>{item.para8}</p>
              <p>{item.para9}</p>
              <p>{item.para10}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
