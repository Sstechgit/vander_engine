import React from "react";
import { Helmet } from "react-helmet";

export default function TermsOfServices() {
  const data = [
    {
      head: "Term Of Services",
      head2: "1. Terms",
      para1:
        "By getting to the site at https://www.vanderengines.com/, you are consenting to be bound by these terms of administration, every single relevant law, and guidelines, and concur that you are answerable for consistence with any pertinent neighborhood laws. In the event that you don’t concur with any of these terms, you are precluded from utilizing or getting to this site. The materials contained in this site are ensured by appropriate copyright and trademark law.",
      para2: "",
    },
    {
      head: "2. Use License",
      para1:
        "Consent is conceded to incidentally download one duplicate of the materials (data or programming) on Vander Engines Quality Used Engines’ site for individual, non-business transient review as it were. This is the award of a permit, not an exchange of title, and under this permit, you may not: change or duplicate the materials; utilize the materials for any business reason, or for any open showcase (business or non-business); endeavor to decompile or figure out any product contained on Vander Engines Quality Used Engines’ site; expel any copyright or other exclusive documentations from the materials; or move the materials to someone else or “reflect” the materials on some other server.",
      para2:
        "his permit will consequently end on the off chance that you disregard any of these limitations and might be ended by Vander Engines Quality Used Engines whenever. After ending your survey of these materials or upon the end of this permit, you should annihilate any downloaded materials in your ownership whether in electronic or printed position.",
    },
    {
      head: "3. Disclaimers",
      para1:
        "The materials on Vander Engines Quality Used Engines’ site are given on an ‘as is’ premise. Vander Engines Quality Used Engines makes no guarantees, communicated or suggested, and thus repudiates and refutes every single other guarantee including, without restriction, inferred guarantees or states of merchantability, qualification for a specific reason, or non-encroachment of licensed innovation or other infringement of rights. Further, Vander Engines Quality Used Engines doesn’t warrant or make any portrayals concerning the precision, likely outcomes, or dependability of the utilization of the materials on its site or generally identifying with such materials or on any destinations connected to this site.",
      para2: "",
    },
    {
      head: "4. Limitations",
      para1:
        "In the event that you should contact us after available time, leave a message with tIn no occasion will Vander Engines Quality Used Engines or its providers be at risk for any harms (counting, without impediment, harms for loss of information or benefit, or because of business interference) emerging out of the utilization or failure to utilize the materials on Vander Engines Quality Used Engines’ site, regardless of whether Vander Engines Quality Used Engines or an Vander Engines Quality Used Engines approved agent has been advised orally or recorded as a hard copy of the plausibility of such harm. Since certain locales don’t permit impediments on inferred guarantees, or confinements of obligation for weighty or coincidental harms, these restrictions may not concern you.",
      para2: "",
    },
    {
      head: "5. Accuracy of materials",
      para1:
        "The materials showing up on Vander Engines Quality Used Engines’ site could incorporate specialized, typographical, or photographic blunders. Vander Engines Quality Used Engines doesn’t warrant that any of the materials on its site are exact, finished or current. Vander Engines Quality Used Engines may make changes to the materials contained on its site whenever without take note. Nonetheless, Vander Engines Quality Used Engines doesn’t make any duty to refresh the materials.",
      para2: "",
    },
    {
      head: "6. Links",
      para1:
        "Vander Engines Quality Used Engines has not checked on the entirety of the locales connected to its site and isn’t liable for the substance of any such connected site. The consideration of any connection doesn’t suggest underwriting by Vander Engines Quality Used Engines of the site. Utilization of any such connected site is at the client’s own hazard.",
      para2: "",
    },

    {
      head: "7. Modifications",
      para1:
        "Vander Engines Quality Used Engines may change these terms of administration for its site whenever without take note. By utilizing this site you are consenting to be bound by the then present form of these terms of administration.",
      para2: "",
    },
    {
      head: "8. Governing Law",
      para1:
        "These terms and conditions are represented by and translated as per the laws of Birmingham and you permanently submit to the selective purview of the courts in that State or area.",
      para2: "",
    },
  ];
  return (
    <>
     <Helmet>
        <title>
          Vander Engines | Terms Of Services
        </title>
      </Helmet>
      {data.map((item, index) => (
        <div className="shipping my-5" key={index}>
          <div className="container">
            <div className="shipping-head pt-3 text-center fw-bolder text-dark">
              <h2 className="fs-1 fw-bold">{item.head}</h2>
              <h3>{item.head2}</h3>
            </div>
            <div className="shipping-content pb-3">
              <p>{item.para1}</p>
              <p>{item.para2}</p>
              <p>{item.para3}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
