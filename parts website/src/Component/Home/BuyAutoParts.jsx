import React from 'react';

export default function BuyAutoParts() {
    const data = [
        { head: "Bulk Auto Parts Pricing", para: "We offer an extensive selection of over 10 million auto parts and accessories from a wide range of brands and part types. Our inventory includes both OEM and aftermarket parts, so whether you're looking for cost-effective aftermarket options or original parts directly from the OEM manufacturer, you'll find everything you need at Auto Parts Leads." },
        { head: "Unmatched Variety", para: "We offer an extensive selection of over 10 million auto parts and accessories from a wide range of brands and part types. Our inventory includes both OEM and aftermarket parts, so whether you're looking for cost-effective aftermarket options or original parts directly from the OEM manufacturer, you'll find everything you need at Auto Parts Leads." },
        { head: "Easy 30-Day Returns", para: "Did you receive the wrong part or are you dissatisfied with your purchase? Returning your item is simple and stress-free. Just submit a return request within 30 days of your purchase, and we'll send you Return Merchandise Authorization (RMA) instructions via email. The RMA email will include detailed instructions on how to return your item." },
        { head: "Rare Auto Parts", para: "Do you own a vintage car or truck? We understand the dedication of vintage and discontinued vehicle owners, and we know these classic rides require special care. That's why we provide parts for a wide range of discontinued models, from those made in 1940 all the way to today's vehicles." },
        { head: "User-Friendly Online Catalog", para: "While our selection is extensive, we've made sure to organize our products in multiple ways to help you find the automotive parts you need with ease. Check out some of our popular product categories below, and feel free to contact us if you have any questions. For the best results, try searching by year, make, and model above." },
        { head: "Quick Delivery", para: "Every order is processed and shipped as swiftly as possible, no matter where you are located. You can easily track your package online to stay updated on its journey and know exactly when it will arrive. At Auto Parts Leads, we understand that time is crucial when it comes to auto parts, which is why we make every effort to get you back on the road without delay." },
    ];

    return (
        <div className="buyAutoParts my-5">
            <div className="container">
                <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-gear fs-2 me-2 main"></i>
                    <h3 className="fs-3 fw-bold">Order Auto Parts Online :</h3>
                </div>
                <p className="ms-3">
                    Since 2008, Auto Parts Leads has been a leading online auto parts marketplace, offering the best deals on both domestic and imported car parts and accessories. With millions of high-quality options available — including genuine OEM parts, aftermarket, refurbished, and rebuilt components — we work with trusted manufacturers and suppliers to ensure you get the parts you need at the best prices. Thanks to our network of suppliers across the United States, we can quickly provide access to hard-to-find car parts. You’ll find the same top-brand products available in local stores, but at a fraction of the cost. Browse our extensive catalog once, and we’re confident you’ll return whenever you need reliable, top-notch auto parts.
                </p>
                <p className='ms-3'>
                    Shopping for auto parts online with Auto Parts Leads offers numerous benefits, including unmatched convenience and cost savings compared to traditional brick-and-mortar stores. Here are some of the key advantages of shopping with us:
                </p>
                <div className="row">
                    {data.map((item, index) => {
                        return (
                            <div className="col-lg-4 mb-4 mt-4" key={index}>
                                <div className="card p-3 h-100 text-center text-card">
                                    <h5 className='heading fs-4'>{item.head}</h5>
                                    <p className='paragraph'>{item.para}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
