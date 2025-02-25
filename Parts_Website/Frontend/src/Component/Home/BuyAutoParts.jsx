import React from 'react';

export default function BuyAutoParts() {
    const data = [
        { head: "Bulk Auto Parts Pricing", para: "Find over 10 million OEM and aftermarket auto parts at Auto Parts Leads—quality, variety, and affordability in one place!" },

        { head: "Unmatched Variety", para: "We have over 10 million vehicle parts and accessories, including OEM and aftermarket choices, so you can locate exactly what you need." },

        { head: "Grade A Quality", para: "Grade A Quality Parts - All The Engines Will Be Inspected By Certified Mechanics Before Shipped Out." },
        
        
        { head: "Rare Auto Parts", para: "Are you looking for parts for a vintage or discontinued vehicle? We've got you covered with parts for models from 1940 and before." },

        { head: "User-Friendly Online Catalog", para: "Explore our extensive variety of automobile components, which are grouped for simple browsing. For the most accurate results, search by year, make, and model." },

        { head: "Quick Delivery", para: "We process and dispatch orders rapidly, ensuring prompt delivery wherever you are. Track your package online and receive real-time updates. At Auto Parts Leads, we value speed." },
    ];

    return (
        <div className="buyAutoParts my-5">
            <div className="container">
                <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-gear fs-2 me-2 main"></i>
                    <h3 className="fs-3 fw-bold">Order Auto Parts Online :</h3>
                </div>
                <p className="ms-3">
                Since 2008, Auto Parts Leads has been your go-to online marketplace for high-quality auto parts at unbelievable costs. We provide millions of OEM, aftermarket, refurbished, and rebuilt parts from reputable manufacturers. With a wide supplier network across the United States, we offer quick access to even the most difficult-to-find parts—at a fraction of store costs. Shop once, and you'll keep coming back for dependable, low-cost auto parts!
                </p>
                <p className='ms-3'>
                Shop auto parts online with Auto Parts Leads for unrivaled convenience and savings over traditional retailers. Key advantages include: 

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
