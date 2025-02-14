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
    {
      head: "Warranty Summary for Used Engines",
      para1:
        "This warranty is strictly limited to manufacturing defects in used engines. It does not cover accidents, misuse, improper handling, or related components, including the cooling system, fuel system, electrical system, engine control system, ignition components, belts, hoses, and filters.",
      para2:
        "Key Terms and Conditions:\nInstallation and Labor: Vander Engines & Services does not cover costs associated with the installation or removal of engines. Customers are responsible for ensuring proper installation by qualified professionals. Installation must be performed by a certified mechanic; failure to do so will void the warranty. Improper installation, including failure to follow manufacturer guidelines or use of incorrect tools and methods, will void the warranty. Any damage resulting from installation errors, such as misalignment, improper torque application, or incorrect fluid levels, is not covered. Labor charges incurred for repairs, diagnostics, or additional services related to the engine are the responsibility of the customer. Vander Engines & Services will provide labor cost reimbursement for eligible warranty claims up to 6 hours at a rate of $50.00 per hour, subject to approval. If professional installation is required for warranty activation, documentation proving qualified installation may be requested.",
      para3:
        "Coverage\nThe warranty is strictly limited to manufacturing defects in used engines.",
      para4:
        "Exclusions\nThe warranty does not cover the following:\n- Accidents, misuse, or improper handling\n- Related components including:\n    - Cooling system\n    - Fuel system\n    - Electrical system\n    - Engine control system\n    - Ignition components\n    - Belts, hoses, filters",
      para5:
        "Returns and Cancellations\nCancellation Policy: Orders can be canceled within 24 hours without penalty. Cancellations after 24 hours are subject to a 35% restocking fee plus additional shipping charges.",
      para6:
        "Exchanges: Exchanges or replacements are available within 24 hours of receipt for eligible issues.",
      para7:
        "Misordered or Misdiagnosed Parts\nIncorrect Orders: If a part is ordered incorrectly or diagnosed improperly, it is subject to a 35% processing fee and shipping charges both to and from the customer.",
      para8:
        "Returns for Incorrect Parts: Returns due to misordered or misdiagnosed parts will not be accepted unless the part is in its original, unused condition and has prior written authorization from Vander Engines & Services.",
      para9:
        "Customer Responsibility: Customers are responsible for ensuring compatibility before placing an order. We recommend consulting with a certified mechanic to confirm part requirements.",
      para10:
        "Towing, Shipping, and Transportation Costs\nVander Engines & Services is not responsible for any costs associated with towing, shipping, transportation, or car rentals. These expenses are the sole responsibility of the customer.",
    },
    {
      head: "Warranty Activation",
      para1:
        "Extended Warranty Activation\nThe extended warranty becomes effective only after the customer notifies Vander Engines & Services of proper installation of the purchased part by a certified mechanic.",
      para2:
        "Activation Timeline: The customer must notify Vander Engines & Services within 7 business days of delivery to confirm installation.",
      para3:
        "Required Documentation: Proof of professional installation (e.g., an invoice or certification from the installation service provider) may be required to activate the warranty.",
      para4:
        "Failure to Activate: Failure to activate the extended warranty within the specified period or providing falsified information will result in voiding of the warranty.",
      para5:
        "Warranty Activation Process\nWarranty activation is valid only when the purchased engine or part is installed in a vehicle.",
      para6:
        "Activation must occur within 7 business days of delivery by notifying Vander Engines & Services with proof of professional installation.",
      para7:
        "Documentation Required: Receipt or certification from the installation service may be requested as proof of installation.",
      para8:
        "Consequences of Failure to Activate: Failure to activate within the stipulated period or providing false installation information will void the warranty.",
    },
    {
      head: "Delivery and Inspection",
      para1:
        "Inspection Upon Delivery\nThoroughly inspect all parts before signing for delivery. If any part is found to be damaged, notify the shipper immediately and do not accept the delivery.",
      para2:
        "Refuse Damaged Delivery: If damage is detected, return the shipment to the shipper or refuse delivery entirely. Accepting damaged goods without reporting to the shipper may void warranty claims.",
      para3:
        "Inspection Advice: Vander Engines & Services strongly advises customers to inspect parts thoroughly before accepting delivery to avoid complications.",
      para4:
        "Shipping Timeframes\nShipping Timeframes: The shipping time provided by Vander Engines & Services is an estimate based on standard carrier services. Actual delivery times may vary based on the carrier's availability, weather conditions, and other factors beyond our control.",
      para5:
        "Delays: Vander Engines & Services is not liable for any shipping delays caused by the carrier, weather, or other external factors.",
    },
    {
      head: "Contact Us",
      para1:
        "For inquiries or claims related to warranties, please contact us at:\nEmail: support@vanderengines.com\nPhone: +1-800-555-1234\nWebsite: www.vanderengines.com",
      para2: "",
    },
    {
      "head": "Warranty & Return Policy",
      "para1": "At Vander Engines & Services, we strive to deliver the best quality products and services. Our goal is to ensure that every customer receives the right engine and transmission parts backed by reliable support. Please read our terms and conditions carefully to understand our warranty and policies.",
      "para2": "Vander Engines & Services does not cover costs associated with the installation or removal of transmissions. Customers are responsible for ensuring proper installation by qualified professionals. Installation must be performed by a certified mechanic; failure to do so will void the warranty. Improper installation, including failure to follow manufacturer guidelines or use of incorrect tools and methods, will void the warranty. Any damage resulting from installation errors, such as misalignment, improper torque application, or incorrect fluid levels, is not covered. Labor charges incurred for repairs, diagnostics, or additional services related to the transmission are the responsibility of the customer.",
      "para3": "Vander Engines & Services will provide labor cost reimbursement for eligible warranty claims up to 6 hours at a rate of $50.00 per hour, subject to approval. If professional installation is required for warranty activation, documentation proving qualified installation may be requested.",
      "coverage": "Strictly limited to manufacturing defects in used transmissions.",
      "return_policy": {
        "header": "Return Policy (Non-Defective Transmissions)",
        "details": [
          "Orders can be cancelled within 24 hours of placement without penalty. If cancellation occurs after 24 hours, a 35% restocking fee and additional shipping charges will apply.",
          "Exchanges or replacements are available within 24 hours of receipt for eligible issues.",
          "If a part is ordered incorrectly or diagnosed improperly, it is subject to a 35% processing fee and freight charges for shipping both to and from the customer. Customers are responsible for ensuring compatibility and accuracy before placing an order.",
          "Vander Engines & Services recommends consulting with a certified mechanic or professional to confirm part requirements.",
          "Returns due to misordered or misdiagnosed parts will not be accepted unless the part is in its original, unused condition and accompanied by prior written authorization from Vander Engines & Services.",
          "Exchanges or replacements will be issued if the transmission is defective or damaged upon delivery and falls under the warranty coverage."
        ]
      },
      "towing_shipping": {
        "header": "Towing, Shipping, and Transportation Costs",
        "details": [
          "Vander Engines & Services does not assume any responsibility for costs associated with towing, shipping, transportation, or car rentals. These expenses, whether incurred due to warranty claims, part replacement, or other reasons, are the sole responsibility of the customer.",
          "Freight charges for misordered or misdiagnosed parts are non-refundable and must be prepaid by the customer.",
          "Any additional shipping arrangements for returning goods must comply with Vander Engines & Services' return policies."
        ]
      },
      "extended_warranty": {
        "header": "Extended Warranty Activation",
        "details": [
          "The extended warranty becomes effective only upon notification of proper installation of the purchased part.",
          "To activate the extended warranty, the customer must notify Vander Engines & Services within 7 business days of delivery, confirming that the part has been installed by a certified mechanic.",
          "Documentation, such as an invoice or certification from the installation service provider, may be required to verify the professional installation.",
          "Failure to activate the extended warranty within the stipulated timeframe or falsifying information related to installation will result in the voiding of the warranty."
        ]
      },
      "inspection_delivery": {
        "header": "Inspection Upon Delivery",
        "details": [
          "Thoroughly inspect all parts before signing for delivery. If any part is found to be damaged, notify the shipper immediately and do not accept the delivery.",
          "If damage is detected, return the shipment to the shipper or refuse the delivery entirely. Accepting damaged goods without reporting to the shipper may void warranty claims related to the damaged part."
        ]
      },
      "shipping_timeframes": {
        "header": "Shipping Timeframes",
        "details": [
          "Shipping timeframes provided by Vander Engines & Services represent the time taken to dispatch the part from our facility.",
          "Vander Engines & Services does not guarantee delivery timeframes. While most shipments are completed within standard transit periods, delays may occur depending on the destination, carrier logistics, or unforeseen circumstances.",
          "Shipments to remote locations, including Alaska and Hawaii, may take up to 30 days or more to arrive. Customers should plan accordingly and account for potential delays in these areas.",
          "Once shipped, Vander Engines & Services is not liable for delays caused by carriers or external factors outside our control."
        ]
      },
      "mileage_appearance": {
        "header": "Mileage and Appearance",
        "details": [
          "Mileage is provided based on available records to the best of our knowledge; however, accuracy cannot be independently verified. Customers are advised that mileage figures reflect prior records, which may not always be accurate or conclusive.",
          "The physical appearance of parts is influenced by prior use and may not meet expectations for 'like-new' or pristine condition. Vander Engines & Services does not make representations regarding the aesthetic condition of any parts."
        ]
      },
      "oem_standards": {
        "header": "OEM Standards",
        "details": [
          "Vander Engines & Services ensures that parts sold are designed to meet Original Equipment Manufacturer (OEM) standards for compatibility with specified vehicles.",
          "Many OEM auto parts are engineered to be interchangeable across multiple years, makes, and models. This ensures flexibility but may require specific adjustments or accessory use during installation."
        ]
      },
      "understanding_terms": {
        "header": "Customer Understanding of Terms",
        "details": [
          "I understand this purchase is for USED PARTS. I understand that if for any reason I REFUSE this shipment, the FREIGHT CHARGES will be charged to the credit card.",
          "I understand that any TAMPERING, DISASSEMBLY, or MODIFICATION to this part without written authorization from SELLER will void ALL WARRANTIES.",
          "All parts returned must be returned complete as shipped and are subject to a 35% STOCKING FEE. If a return is necessary, please contact your salesperson with your INVOICE NUMBER for return authorization."
        ]
      },
      "company_liability": {
        "header": "Company Liability",
        "details": [
          "Vander Engines & Services is not liable for any expenses or issues resulting from the use of accessories from an older transmission, including incompatibility, improper installation, or the need for additional parts or modifications."
        ]
      },
      "deposits": {
        "header": "Deposits",
        "details": [
          "All deposits made to Vander Engines & Services are strictly non-refundable under any circumstances. Customers should ensure their commitment to the purchase before placing a deposit.",
          "Deposits are utilized to secure the requested engine or part, initiating preparation, inspection, and shipment processes.",
          "The deposit confirms the customer’s intent to purchase and enables Vander Engines & Services to allocate the requested item exclusively for the customer.",
          "Orders canceled after the deposit has been made are still subject to the non-refundable clause."
        ]
      },
      "return_policy_engine": {
        "header": "Transmission Return Policy",
        "details": [
          "Customers must obtain prior written authorization from Vander Engines & Services to initiate an engine return. Unauthorized returns will not be accepted.",
          "Returned engines must be in their original, assembled condition. Any modifications, tampering, or partial disassembly of the engine will void the warranty and render the engine ineligible for return.",
          "All authorized returns are subject to a 35% restocking fee. This fee covers inspection, administrative costs, and reallocation of the returned item.",
          "The customer is responsible for all freight and shipping costs associated with the return, including both the initial shipping and the return shipping fees."
        ]
      },
      "inspection_approval": {
        "header": "Inspection and Approval",
        "details": [
          "Upon return, the transmission will undergo a thorough inspection by Vander Engines & Services to verify its condition. Any signs of damage, misuse, or tampering may lead to rejection of the return or additional charges.",
          "Customers must provide all necessary documentation, including the original invoice, proof of purchase, and a detailed explanation for the return request. Lack of proper documentation may delay processing or result in rejection of the return."
        ]
      },
      "testing_inspection": {
        "header": "Testing and Inspection",
        "details": [
          "All transmissions undergo a rigorous process before shipment. This includes functional testing to ensure operational reliability, thorough visual inspection to check for external damage or defects, and comprehensive cleaning to prepare the engine for installation."
        ]
      },
      "warranty_conditions": {
        "header": "Conditions That Void the Warranty",
        "details": [
          "The warranty is void if the transmission is installed incorrectly or without following proper installation procedures.",
          "Installation by Non-Certified Mechanics: transmission must be installed by a certified mechanic. Failure to adhere to this requirement will render the warranty null and void.",
          "Non-Standard Usage: The transmission is not warranted for use in racing, off-road competitions, or any nonstandard applications.",
          "Lack of Lubrication or Cooling: Operating the transmission without adequate lubrication or proper cooling systems will void the warranty, irrespective of the cause."
        ]
      },
      "customer_acknowledgement": {
        "header": "Customer Acknowledgement of Terms",
        "details": [
          "By placing an order, the customer authorizes Vander Engines & Services to process payment and acknowledges understanding of these terms, including: Purchases are for used parts. Refusal of shipments may result in freight charges being billed to the customer. Unauthorized tampering, disassembly, or modification of the part voids all warranties. Returned parts must be in the complete, original condition and are subject to a 35% stocking fee."
        ]
      },
      "contact_info": {
        "email": "billing@vanderengines.com",
        "phone": "844-893-1760",
        "return_address": "Vander Engines & Services, 15150 Cicero Ave, Oak Forest, IL 60452"
      },
      "final_note": "These terms and conditions are designed to ensure transparency, fairness, and mutual understanding between Vander Engines & Services and its valued customers. Thank you for your cooperation and understanding."
    }
    
  ];

  return (
    <>
      <Helmet>
        <title>Warranty Policy | Vander Engines</title>
      </Helmet>
      <div className="warranty-policy p-5" style={{background:"#dbdbdb"}}>
        {data.map((section, index) => (
          <section key={index}>
            <h2>{section.head}</h2>
            {section.para1 && <p>{section.para1}</p>}
            {section.para2 && <p>{section.para2}</p>}
            {section.para3 && <p>{section.para3}</p>}
            {section.para4 && <p>{section.para4}</p>}
            {section.para5 && <p>{section.para5}</p>}
            {section.para6 && <p>{section.para6}</p>}
            {section.para7 && <p>{section.para7}</p>}
            {section.para8 && <p>{section.para8}</p>}
            {section.para9 && <p>{section.para9}</p>}
            {section.para10 && <p>{section.para10}</p>}
  
            {/* Render sections with additional content like tables or lists */}
            {section.return_policy && (
              <>
                <h3>{section.return_policy.header}</h3>
                {section.return_policy.details.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </>
            )}
            {section.towing_shipping && (
              <>
                <h3>{section.towing_shipping.header}</h3>
                {section.towing_shipping.details.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </>
            )}
            {section.extended_warranty && (
              <>
                <h3>{section.extended_warranty.header}</h3>
                {section.extended_warranty.details.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </>
            )}
            {section.inspection_delivery && (
              <>
                <h3>{section.inspection_delivery.header}</h3>
                {section.inspection_delivery.details.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </>
            )}
            {section.shipping_timeframes && (
              <>
                <h3>{section.shipping_timeframes.header}</h3>
                {section.shipping_timeframes.details.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </>
            )}
            {section.mileage_appearance && (
              <>
                <h3>{section.mileage_appearance.header}</h3>
                {section.mileage_appearance.details.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </>
            )}
            {section.oem_standards && (
              <>
                <h3>{section.oem_standards.header}</h3>
                {section.oem_standards.details.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </>
            )}
            {section.understanding_terms && (
              <>
                <h3>{section.understanding_terms.header}</h3>
                {section.understanding_terms.details.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </>
            )}
            {section.company_liability && (
              <>
                <h3>{section.company_liability.header}</h3>
                {section.company_liability.details.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </>
            )}
            {section.deposits && (
              <>
                <h3>{section.deposits.header}</h3>
                {section.deposits.details.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </>
            )}
            {section.return_policy_engine && (
              <>
                <h3>{section.return_policy_engine.header}</h3>
                {section.return_policy_engine.details.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </>
            )}
            {section.inspection_approval && (
              <>
                <h3>{section.inspection_approval.header}</h3>
                {section.inspection_approval.details.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </>
            )}
            {section.testing_inspection && (
              <>
                <h3>{section.testing_inspection.header}</h3>
                {section.testing_inspection.details.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </>
            )}
            {section.warranty_conditions && (
              <>
                <h3>{section.warranty_conditions.header}</h3>
                {section.warranty_conditions.details.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </>
            )}
            {section.customer_acknowledgement && (
              <>
                <h3>{section.customer_acknowledgement.header}</h3>
                {section.customer_acknowledgement.details.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </>
            )}
            {section.contact_info && (
              <div>
                <h3>Contact Information</h3>
                <p>Email: {section.contact_info.email}</p>
                <p>Phone: {section.contact_info.phone}</p>
                <p>Return Address: {section.contact_info.return_address}</p>
              </div>
            )}
            {section.final_note && <p>{section.final_note}</p>}
          </section>
        ))}
      </div>
      <style>
        {`
        h3,h2{
        color:#212529;
           text-align: center;
        }
        `}
      </style>
    </>
  );
  
}
