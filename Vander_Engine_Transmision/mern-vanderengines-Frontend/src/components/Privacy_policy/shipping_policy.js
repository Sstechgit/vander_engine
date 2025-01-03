import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './privacy_policy.css'; // You will add your styles here
import Footer from "../Home/newfooter";

const shipping_policy = () => {
  return (
    <>
    <ParallaxProvider>
      <div className="privacy-policy-container">
        <section className="privacy-section">
          <Parallax className="parallax-effect" y={[-20, 20]}>
            <h2>Shipping Policy</h2>
          </Parallax>
          <p>
            Delivery charges (unique and return) are non-refundable for tires,
            post-retail wheels, and tire and secondary selling wheel bundles.
            "Business Days" for shipment or delivery time refer to Monday through
            Friday only. Saturdays, Sundays, and holidays (even those that fall on weekdays)
            are excluded from calculation of business days.
          </p>
          <p>
            Model #1: The order is estimated to be processed within 3 to 5 business days. If the
            tracking number shows that the request left our distribution center on a Monday, you
            can start tracking from the next business day (Tuesday) and can expect your package
            to be delivered on Thursday, Friday, or the following Monday.
          </p>
          <p>Model #1: The order is estimated to be processed within 3 to 5 business days. If
            the tracking number shows that the request left our distribution center on a Monday,
            you can start tracking from the next business day (Tuesday) and can expect your package
            to be delivered on Thursday, Friday, or the following Monday.</p>
        </section>

        <section className="privacy-section">
          <Parallax className="parallax-effect" y={[-20, 20]}>
            <h2>Conveyance Timeframe</h2>
          </Parallax>
          <p>
            Most requests are handled for shipment or leave our stockroom inside 24 – 48
            hours from the date of affirmation of your request; except if generally determined.
            Conveyance or travel times will fluctuate contingent upon the size of the bundle and
            the conveyance area. Little and medium-sized bundles are for the most part conveyed
            inside 3-5 business days (barring ends of the week and occasions) from the date the
            bundles leave our distribution center/s. Requests containing guards, entryways, hoods,
            or other huge parts may, in any case, fit the bill with the expectation of complimentary
            transportation, nonetheless, these things require extraordinary dealing with and are
            generally dispatched by means of Truck Freight where conveyance or travel times may
            take somewhat more (see Truck Delivery data underneath). Additionally, there might
            be occurrences in which orders with various parts/things will have different following
            numbers relying upon the distribution center where the parts/things will originate from.
            If you don’t mind note that we disavow all obligation for orders which don’t meet foreseen
            conveyance dates.
          </p>
        </section>

        <section className="privacy-section">
          <Parallax className="parallax-effect" y={[-20, 20]}>
            <h2>Execution and Accessory Part Orders</h2>
          </Parallax>
          <p>
            All exhibition and embellishment parts are shipped via Ground Service only.
            Most orders are processed and shipped from our warehouse within 24 to 48
            hours from order confirmation, unless otherwise specified. Shipping times
            will vary depending on the size of the package and the delivery location.
            Smaller and medium-sized packages are typically delivered within 3 to 5 business
            days (excluding weekends and holidays) from shipment. Orders containing larger
            items such as brush watches, running boards, and other bulky products may need
            special handling and are typically dispatched via Truck Freight (see Truck Freight
            info above), which may result in longer delivery times. We are happy to serve
            customers in Alaska, Hawaii, and other locations outside the continental United
            States. However, shipping charges will apply, and delivery times may be extended.
            Orders for exhibition and decorative parts are not eligible for 2-day or overnight
            shipment.
          </p>
        </section>

        <section className="privacy-section">
          <Parallax className="parallax-effect" y={[-20, 20]}>
            <h2>Damaged Shipments</h2>
          </Parallax>
          <p>
            After accepting your request, assess all transportation bundle/s and things
            completely for indications of harmed, missing, or erroneous parts. Our stockrooms
            apply all endeavors to avoid shipping harm, be that as it may, it occurs at times.
            On the off chance that you happen to get a harmed part DO NOT acknowledge the bundle,
            have the shipper promptly Return-To-Sender (RTS). On the off chance that the shipper
            has left an harmed bundle in your nonappearance, quickly contact the transportation
            organization and have the bundle come back to the sender. Likewise, you should call
            us promptly if any of the above has struck keep you from being charged cargo on the
            two different ways. We are not answerable for harmed, missing, or off base parts following
            30 business days, paying little heed to which gathering is to blame. We are likewise not
            answerable for lost or taken bundles and all cases from such episodes must be accounted
            for and prepared through the delivery organization; see Risk Of Loss, underneath, for
            extra data.
          </p>
        </section>
        <section className="privacy-section">
          <Parallax className="parallax-effect" y={[-20, 20]}>
            <h2>Danger of Loss</h2>
          </Parallax>
          <p>
            All things for return must be bundled safely. It would be ideal if you make
            a point to All things acquired from our site are made under our transportation
            terms, which are F.O.B. shipping point. This implies the danger of misfortune and title of anything is passed to you at the transportation point, which is the point at which the transporter acknowledges the products for transport. We are not straightforwardly liable for lost or taken bundles, yet we will be glad to help you in documenting a case with the transportation organization. You should contact us immediately if the entire shipment has not been received within two (2) full days following the carrier's estimated delivery date. All claims must be submitted within twenty-one (21) days from the date of shipment to be considered for resolution.
          </p>
        </section>
      </div>
    </ParallaxProvider>
    <Footer/>
    </>
  );
};

export default shipping_policy;
