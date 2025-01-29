import React from 'react'
import { Helmet } from 'react-helmet'

export default function Policies() {
    const data = [
        {
          head: "Shipping Policy",
          para1:
            "Delivery charges (unique and return) are non-refundable for tires, post-retail wheels, and tire and secondary selling wheel bundles. 'Business Days' for shipment or delivery time refer to Monday through Friday only. Saturdays, Sundays, and holidays (even those that fall on weekdays) are excluded from calculation of business days.",
          para2:
            "Model #1: The order is estimated to be processed within 3 to 5 business days. If the tracking number shows that the request left our distribution center on a Monday, you can start tracking from the next business day (Tuesday) and can expect your package to be delivered on Thursday, Friday, or the following Monday.",
          para3:
            "Model #2: If the tracking number shows that the package left our distribution center on a Friday, start your tracking from the following Monday, which is the next business day. You can expect your package to arrive by Friday. Please note, we do not process or deliver packages on Saturdays, Sundays, or holidays.",
        },
        {
          head: "Conveyance Timeframe",
          para1:
            "Most requests are handled for shipment or leave our stockroom inside 24 – 48 hours from the date of affirmation of your request; except if generally determined. Conveyance or travel times will fluctuate contingent upon the size of the bundle and the conveyance area. Little and medium-sized bundles are for the most part conveyed inside 3-5 business days (barring ends of the week and occasions) from the date the bundles leave our distribution center/s. Requests containing guards, entryways, hoods, or other huge parts may, in any case, fit the bill with the expectation of complimentary transportation, nonetheless, these things require extraordinary dealing with and are generally dispatched by means of Truck Freight where conveyance or travel times may take somewhat more (see Truck Delivery data underneath). Additionally, there might be occurrences in which orders with various parts/things will have different following numbers relying upon the distribution center where the parts/things will originate from. If you don’t mind note that we disavow all obligation for orders which don’t meet foreseen conveyance dates.",
          para2: "",
          para3: "",
        },
        {
          head: "Execution and Accessory Part Orders",
          para1:
            "All exhibition and embellishment parts are shipped via Ground Service only. Most orders are processed and shipped from our warehouse within 24 to 48 hours from order confirmation, unless otherwise specified. Shipping times will vary depending on the size of the package and the delivery location. Smaller and medium-sized packages are typically delivered within 3 to 5 business days (excluding weekends and holidays) from shipment. Orders containing larger items such as brush watches, running boards, and other bulky products may need special handling and are typically dispatched via Truck Freight (see Truck Freight info above), which may result in longer delivery times. We are happy to serve customers in Alaska, Hawaii, and other locations outside the continental United States. However, shipping charges will apply, and delivery times may be extended. Orders for exhibition and decorative parts are not eligible for 2-day or overnight shipment.",
          para2: "",
          para3: "",
        },
        {
          head: "Damaged Shipments",
          para1:
            "After accepting your request, assess all transportation bundle/s and things completely for indications of harmed, missing, or erroneous parts. Our stockrooms apply all endeavors to avoid shipping harm, be that as it may, it occurs at times. On the off chance that you happen to get a harmed part DO NOT acknowledge the bundle, have the shipper promptly Return-To-Sender (RTS). On the off chance that the shipper has left an harmed bundle in your nonappearance, quickly contact the transportation organization and have the bundle come back to the sender. Likewise, you should call us promptly if any of the above has struck keep you from being charged cargo on the two different ways. We are not answerable for harmed, missing, or off base parts following 30 business days, paying little heed to which gathering is to blame. We are likewise not answerable for lost or taken bundles and all cases from such episodes must be accounted for and prepared through the delivery organization; see Risk Of Loss, underneath, for extra data.",
          para2: "",
          para3: "",
        },
        {
          head: "Danger of Loss",
          para1:
            "All things for return must be bundled safely. It would be ideal if you make a point to All things acquired from our site are made under our transportation terms, which are F.O.B. shipping point. This implies the danger of misfortune and title of anything is passed to you at the transportation point, which is the point at which the transporter acknowledges the products for transport. We are not straightforwardly liable for lost or taken bundles, yet we will be glad to help you in documenting a case with the transportation organization. You should contact us immediately if the entire shipment has not been received within two (2) full days following the carrier's estimated delivery date. All claims must be submitted within twenty-one (21) days from the date of shipment to be considered for resolution.",
          para2: "",
          para3: "",
        },
        //return-------------------------------------------------------------------------
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
            list1: " Call us - Call our Returns Desk at +1 844-893-1760",
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
          //warranty-----------------------------------------------------



          //Terms of services------------------------------------------------
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
          //Privacy Policy--------------------------------------------------
          {
            head: "Privacy Policy",
            para1:
              "The Privacy Policy depicts our works on concerning the data gathered by U.S. Car Parts Network, Inc. (“we or “us”) using vanderengines.com (the “Site”). We perceive the significance of keeping up your protection. We esteem our association with you and we value the trust you appear in giving data to us. Clarifying how we gather, utilize and ensure client data is, in this way, of most extreme significance to us.",
            para2:
              "This Privacy Policy is intended to disclose to you how we gather and utilize individual data (as characterized beneath) so you can settle on an educated choice about utilizing the Sites. If you don’t mind read this announcement before utilizing the Sites or presenting any close to home data to us. We claim all authority to change the arrangements of this Privacy Policy whenever. We will advise you of these progressions by posting a reconsidered Privacy Policy on the Sites and showing on the Privacy Policy the date it was last refreshed. Your utilization of the Sites following the posting of such changes or overhauled articulation will comprise your agreement to any such changes. We urge you to survey our Privacy Policy at whatever point you visit our Sites to decide whether any progressions have been made and to ensure that you see how any close to home data you give will be utilized. For a portrayal of the latest changes to this Privacy Policy, allude to the area entitled “Changes to this Privacy Policy” beneath.",
            para3:
              "Kindly Read This Privacy Policy Carefully. By Using This Sites, You Agree To Be Bound By This Privacy Policy Described Herein, And All Updates Thereto And All Additional Terms, Guidelines, And Disclosures Incorporated By Reference. You Accept This Privacy Policy By Actually Using The Sites Or Its Services. In This Case, You Understand And Agree That We Will Treat Your Use Of The Sites As Acceptance Of This Privacy Policy From That Point Onwards.",
            para4:
              "This Privacy Policy applies to the entirety of the product, items, and administrations offered by us or any of our auxiliaries or partnered organizations through the Sites. On the off chance that you have any inquiries concerning this Privacy Policy, or to quit getting any messages or advancements from us, it would be ideal if you don’t hesitate to reach us through the Sites or keep in touch with us at:",
            para5:
              "Vander Engines Protection Policy vanderengines.com 430, E 162nd St, South Holland, IL,60473",
            para6:
              "Our comprehensive Terms & Conditions include covering labor costs for up to six hours, which can be utilized once, and mandate no order cancellations with a 25% restocking fee applicable. Damages to engines or transmissions must be documented upon delivery to qualify for refunds, and once sold, all transactions are final, with warranty void if items are disassembled. Defective units must be returned within 15 days for warranty validation, and while mileage certification is not provided, customers acknowledge a binding agreement without rights to dispute credit card charges. Transmissions are guaranteed operational upon purchase, no returns are accepted for incorrect parts, and installations of engines or transmissions must occur within two weeks, with a 30-day window for replacements. Electrical parts are sold without warranty, installations require certified mechanics, and adherence to manufacturer's guidelines is mandatory for fluid changes, seal replacements, filter installations, and belt and hose replacements.",
          },
          {
            head: "Privacy of Children",
            para1:
              "WE DO NOT PUBLISH CONTENT THAT IS TARGETED TO CHILDREN. In the event that YOU ARE UNDER THIRTEEN YEARS OF AGE, YOU ARE NOT PERMITTED TO ACCESS THE SITES FOR ANY REASON. In the event that we discover that we have gathered individual data from a youngster under age 13, we will erase that data as fast as would be prudent. We emphatically prescribe that minors 13 years old or more seasoned approach their folks for authorization before sending any data about themselves to anybody over the web and we urge guardians to encourage their youngsters about safe web use rehearses.",
            para2: "",
            para3: "",
          },
          {
            head: "Information Collected and “Cookies”",
            para1:
              "This area of our Privacy Policy applies to all data gathered by or submitted to the Sites. The data that we gather from you causes us to customize and consistently enhance your shopping experience. You have the choice not to give certain data; in any case, retaining data may keep you from having the option to exploit a portion of our Sites’ highlights.",
            para2:
              "At the point when you visit our Sites, we consequently get and store any data you enter on our Sites. For instance, you give data when you: look for an item; submit a request; place a thing in your shopping basket; peruse our Sites; give data in your record; speak with us by telephone, talk, or email; total a poll; or participate in different communications with us. Because of those activities, you may supply us with so much data as your: name, address, email address, telephone numbers, budgetary data, (for example, charge card or comparable installment data), value-based data (in view of your exercises on the Sites and substance you produce or that identifies with your record), shipping data, charging data (and other data you give to buy or ship a thing), network exchanges, talks, contest goals, correspondence through the Sites, and correspondence sent to us. We utilize this data straightforwardly or by implication through our colleagues to advertise items to you on the Sites and through mail and email, do an inner inquiry on your inclinations, and to assist us with bettering comprehend and serve you.",
            para3:
              "We likewise store particular kinds of data when you communicate with us on our Sites. For instance, we use “treats” and can get certain data from your internet browser. By moving these alphanumeric identifiers or “treats” that your program makes at our solicitation is an endorsed and institutionalized spot on your PC, we dole out you a one of a kind client code and records data about your movement on our Sites. At the point when you visit or come back to our Sites, we read the treat to recognize you as one of our clients and assist you with reviewing requests or inclinations you have chosen. The treat additionally empowers us to review your past exercises, post your record information, send email to you, and tailor the Sites’ components and data in an unequivocal manner, be that as it may, we might have the option to distinguish you utilizing data acquired from outsiders. We utilize this data to break down patterns, oversee the Sites, track clients’ developments around the Sites, accumulate statistic data about our client base, and direct our promoting efforts. Most internet browsers acknowledge treats as a matter of course yet enable clients to dismiss treats by changing the program inclinations. On the off chance that you have set up your program to dismiss treats, a few parts of our Sites, including our Shopping Cart, won’t work appropriately. This Privacy Policy covers the utilization of treats by us just and doesn’t cover the utilization of treats by any outsiders. To quit having non-individual data or treats utilized by outsider specialist co-ops.",
            para4:
              "At whatever point you collaborate with us and our Sites, we gather, store, and examine a few information about you, which may incorporate the full Uniform Resource Locator (URL) clickstream to, through and from our Sites, including date and time; treat number; items you saw or scanned for or set in your shopping basket; and the telephone number you used to call our 800 number. Your IP address is utilized for inner utilize just and encourages us to determine issues to have our server and direct our Sites. We additionally consequently track certain data about your exercises on our Sites. These may incorporate program type and form, working framework and stage, measurements on online visits, traffic to and from the Sites, advertisement information, standard web log data, and buy history. We utilize this data to showcase items to you on the Sites and through mail and email, do interior research on your inclinations, and to assist us with bettering comprehend and serve you. We may interface this consequently gathered information to you by and by recognizable data. We may gather and gauge session data, including page reaction times, download mistakes, length of visits to specific pages, page collaboration data, (for example, looking over, snaps, and mouse-overs), and strategies used to peruse away from the page.",
            para5:
              "At the point when you buy items from us you are required to furnish us with your email address and your conveyance address. We utilize your email address to keep you refreshed on the status of your request. We utilize this to send you your request affirmation, following numbers and other appropriate data about your request, for example, warnings on delivery delays. You may likewise get item refreshes, suggestions, exceptional declarations just as limits from our Sites through mail or email. You can generally stop these showcasing exercises on the withdraw connect found on each email we send you or by contacting us through this connection. We regard your security and will never lease or sell your email address to different advertisers. We may likewise get data about you from different sources and add it to our record data. Instances of these include: internet based life pages (for example Facebook); refreshed conveyance and address data from our bearers or other outsiders (which we use to address our records and convey your next buy or correspondence all the more effectively); site hit data from certain shippers with which we work for co-marked organizations or for which we give specialized, satisfaction, promoting, or different administrations; search term and output data including paid postings, Supplemental Information got from outsiders may incorporate financial record data from credit authorities and outsider Visa extortion discovery administrations, which we use to help counteract and distinguish misrepresentation. Likewise, if the data you give can’t be checked, we may request that you send us extra data, (for example, your driver’s permit, financial record, as well as an ongoing service bill or other data affirming your location), or to respond to extra addresses online to help confirm your data.",
          },
          {
            head: "Outsider Advertisers",
            para1:
              "We utilize outsider publicizing organizations to email or serve promotions for our sake. We may likewise serve advertisements or send an email which joins outsider treats or activity labels. These treats or activity labels may follow your reaction to email or ads and measure their viability or grant motivations or focuses to their individuals who react to their ads. We have no entrance to or command over these treats or activity labels. By utilizing these activity labels we don’t access any of your data gathered by these promoters nor do we share any of your by and by recognizable data, for example, your name, phone number or address with these organizations except if we or the publicist generally tell you. If it’s not too much trouble click here so as to get familiar with the data assortment practices of a portion of the outsider.",
            para2: "",
            para3: "",
          },
          {
            head: "Retargeting",
            para1:
              "We are a piece of the Google AdWords Remarketing program. Google Remarketing may dole out a treat to follow guests coming and leaving pages or zones of a site. This data is then used to create a Remarketing List of guests that left the Sites from that specific territory or page and might be utilized to tailor and serve advertisement content on the Google Display Network that objectives these gatherings of clients.",
            para2:
              "We have no entrance to or power over these outsider treats and don’t access any of your data gathered by Google nor does it share any of your actually recognizable data, for example, your name, phone number, email, and personal residence with the Google Display Network of destinations except if we or the site generally inform you. In the event that you decide to tweak your advertisements inclinations or inside and out anticipate Google’s utilization of treats during your perusing sessions, you may do as such by visiting the Google Advertising Opt-out page. Then again, you may likewise decide to quit getting treats from other outsider advertisement servers at the same time through the Network Advertising Initiative (NAI) Opt-out Tool.",
            para3: "",
          },
          {
            head: "Use of Information",
            para1:
              "We pay attention to your security very. We don’t sell or lease your contact data to different advertisers. Notwithstanding, we may share your data, including your by and by recognizable data, to outsiders as set out in this Privacy Policy.",
            para2:
              "Offshoots. We may unveil the data we gather from you to our controlled associates or backups and these substances may utilize the data for advertising purposes; be that as it may, in the event that we do as such, the utilization and revelation of such data will be dependent upon this Privacy Policy.",
            para3:
              "Specialist organizations. We may likewise make certain individual data about you accessible to organizations that perform work for us to give items and administrations to you for our benefit. These organizations may assist us with handling data, satisfy client arranges, convey or advertise our items to you, oversee and upgrade client information, or give client care. In such a circumstance, these organizations are denied from utilizing your own data for any unapproved purposes and are additionally committed to secure your data as per our arrangements, with the exception of in the event that we advise you generally at the hour of assortment. Without such data being made accessible, it would be hard for you to buy items, have items conveyed to you, gets client support, or access certain administrations, offers, and substance on our site. For instance, as a piece of the ordinary procedure of finishing your buy, we may give your own information to an outsider installment processor, contingent upon your picked strategy for installment. We additionally share data with outsiders, for example, the U.S. Postal Service, Federal Express, and United Parcel Service to send items and guarantee item conveyance.",
          },
          {
            head: "Secure Encryption",
            para1:
              "We utilize Secure Socket Layer (SSL) or TLS innovation, which is bolstered by most by fa from present-day Internet programs. These work best when you are utilizing the most recent encryption rendition of Internet programs. SSL and TLS innovation speaks to the most significant level of security accessible on the Internet. It consequently scrambles data going over the Internet, checks the character of the executing servers through testaments and computerized marks, and affirms that the trustworthiness of message content is kept up all through the transmission.",
            para2:
              "Our base prerequisite is SHA-256 piece SSL exchange encryption for Internet programs. It would be ideal if you allude to your program’s documentation for data on its security highlights. We transmit the scrambled Mastercard number to the suitable end installment processor during request handling, yet we uncover just the last four digits of your charge card numbers while affirming a request in consistence with Payment Card Industry Data Security Standard.",
            para3: "",
          },
          {
            head: "Credit Card Security",
            para1:
              "Our servers utilize Secure Sockets Layer (SSL), an encryption innovation that works all industry-standard programs. This guarantees no one but we can peruse your own data. Charge card numbers are additionally encoded utilizing Public Keys and Private Key calculations when transmitting by means of SSL giving an additional layer of assurance onto SSL. We uncover just the last four digits of your charge card numbers while affirming a request. We will be that as it may, transmit the whole Mastercard number to the fitting end installment processor during request handling utilizing current PCI prerequisites for Transport-level encryption. We have likewise acquired a computerized authentication from Comodo Group, Inc, the main supplier of Internet trust administrations. At the point when you enter a verified segment of our Sites, a picture of a shut lock or a strong key ought to show up in the base bar of your program window. On the off chance that you click on this picture, a little popup window showing Site-security data will show up. This authentication ensures that your own data is being transmitted in a protected (encoded) structure to our Web server, not to an obscure or unapproved server.",
            para2:
              "Our Sites are consistently tried and ensured to pass industry-driving outsider security appraisal administration testing. This industry-standard outsider security appraisal administration testing shields you from data fraud and charge card misrepresentation. Eventually, your own data is secured by the secret key you made when you enlisted for a record at our Sites on the “Sign In/Quick Checkout” page. If it’s not too much trouble keep this secret word classified. None of our agents will ever approach you for your secret phrase. The secrecy of your secret key is yours to ensure.",
            para3: "",
          },
          {
            head: "Information Security",
            para1:
              "As per Section 1798.83 of the AL Civil Code, occupants of AL reserve the option to demand from a business, with whom the AL inhabitant has a set up business relationship, certain data concerning the kinds of individual data the business imparts to outsiders for direct advertising purposes by such outsider and the characters of the outsiders with whom the business has shared such data during the quickly going before schedule year. To demand a duplicate of the data divulgence gave by us under Section 1798.83 of the AL Civil Code, it would be ideal if you keep in touch with us at:",
            para2:
              "Vander Engines Protection Policy vanderengines.com 1430, E 162nd St, South Holland, IL,60473 USA",
            para3: "",
          },
          {
            head: "Changes to this Privacy Policy",
            para1:
              "This Privacy Policy was keeping going altered on June 7, 2019. These progressions explain that you may get promoting materials from us through both mails or potentially email by the details of this Privacy Policy, just as explain how we may utilize treats and activity labels to advertise our items to you. It would be ideal if you note that this Privacy Policy may change whenever. We maintain all authority to change this Privacy Policy whenever, so please audit it much of the time. We will post any Privacy Policy changes on this page.",
            para2: "",
            para3: "",
          },
      ];
  return (
    <>
    <Helmet>
        <title>
          Vander Engines |Privacy Policies
        </title>
      </Helmet>
      {data.map((item, index) => (
        <div className="shipping my-4" key={index}>
          <div className="container">
            <div className="shipping-head pt-2 text-center fw-bolder text-white">
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
  )
}
