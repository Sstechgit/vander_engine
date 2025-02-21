import React from "react";
import { Helmet } from "react-helmet";

export default function ReturnPolicy() {
  const data = [
    {
      head: "Return And Cancellation Policy",
      para1:
        "You may cancel your order at any time before receiving our order confirmation. However, once an order has been confirmed, it is immediately processed for shipping. Therefore, no orders can be canceled after receiving our electronic Order Confirmation email. Besides, all orders placed between Fridays, after 5 pm EST (2 pm PST), to Monday, 9 am EST (6 am PST); cannot be canceled, as they are processed over the weekend for shipment.",
      para2: "",
      para3: "",
    },
    {
      head: "Returns Policy",
      para1:
        "We will just acknowledge approved returns inside (I) 90 schedule days for certain Kool Vue, Replacement, Bolton Premiere, Evan Fischer, Garage Pro, StyleLine, N-Dure, Auto Trust, 4WD Pros and Item Auto items, and for every other item from the date the item was gotten by the purchaser or unique beneficiary except if generally indicated at the hour of procurement.",
      para2:
        "Every single approved return must be unused and in their unique condition, including all things and parts that were remembered for the first bundle. Things being returned must not have been dismantled, mounted, or harmed because of off base establishment or client blunder. Carparts.com won’t be liable for establishment or work costs, towing costs, extra fix costs or rental vehicle costs brought about by the utilization of off-base or deficient parts during establishment.",
      para3:
        "On the off chance that your shipment landed with a harmed or inaccurate thing, it would be ideal if you repackage the item(s) in the first transporting holder and allude to our Return Procedure, see beneath.",
      para4:
        "After accepting your request, review all bundles altogether for missing, harmed, or wrong parts. On the off chance that you get a harmed part, DO NOT acknowledge the bundle, have the shipper promptly come back to the sender. On the off chance that the shipper has left a harmed bundle in your nonappearance, quickly contact the transportation organization and have the bundle come back to the sender. Likewise, it would be ideal if you call us quickly in the event that you get missing, harmed or off base parts to keep you from being charged cargo on both receipt and return. We are not answerable for missing, harmed, or inaccurate parts after (I) 90 schedule days for certain Kool Vue, Replacement, Bolton Premiere, Evan Fischer, Garage Pro, StyleLine, N-Dure, Auto Trust, 4WD Pros and Item Auto items, and for every single other item, paying little heed to the gathering to blame. We are additionally not liable for lost or taken bundles and every single such guarantee must be handled through the transportation organization.",
    },
    {
      head: "Return Procedure",
      list1: " Call us - Call our Returns Desk at +18002131371",
      list2: " Mondays to Fridays from 9 am to 11 pm EST; (6 am to 8 pm PST)",
      list3: " Saturdays from 9 am to 8 pm EST; (6 am to 5 pm PST)",
      list4: " Sundays - Closed",
      para1:
        "In the event that you should contact us after available time, leave a message with the accompanying data so we can get back to you when we open: request number, client name on the request, telephone number; and, the best time to get back to you inside our available time.",
      para2:
        "All things for return must be bundled safely. It would be ideal if you make a point to check if there are any uncommon bundling directions to guarantee that no transportation harm happens. We won’t be liable for harmed returns coming about because of insufficient bundling.",
      para3: "",
    },
    {
      head: "Refund Processing",
      para1:
        "Discounts are regularly prepared and credited inside 24-48 business hours after our distribution center gets your parts. When the returned part/s has been assessed and handled, the discount will be credited to the installment technique you used to purchase the thing/s you requested. You will get a “credit affirmed” email the day your discount is prepared. In the event that the buy was made through a charge or Visa, it might take an extra 1-7 business days for your money related organization to mirror the credit for you.",
      para2: "",
      para3: "",
    },
  ];
  return (
    <>
     <Helmet>
        <title>
          Vander Engines | Return Policy
        </title>
      </Helmet>
      {data.map((item, index) => (
        <div className="shipping my-5" key={index}>
          <div className="container">
            <div className="shipping-head pt-3 text-center fw-bolder text-dark">
              <h2 className="fs-1 fw-bold">{item.head}</h2>
            </div>
            <div className="shipping-content pb-3">
               <p>{item.list1}</p>
               <p>{item.list2}</p>
               <p>{item.list3}</p>
               <p>{item.list4}</p>
              <p>{item.para1}</p>
              <p>{item.para2}</p>
              <p>{item.para3}</p>
              <p>{item.para4}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

