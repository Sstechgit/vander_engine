import React from 'react';

export default function Speciality() {
    const data = [
        { icon: "fa-car", para: "Buy with Trust", desc: "Trusted for quality auto parts service since 2008" },
        { icon: "fa-sync-alt", para: "Return within 30 Days", desc: "Received the wrong part? Rest easy with hassle-free returns." },
        { icon: "fa-phone-alt", para: "Order by Phone", desc: "Call us toll-free at +1-800-213-1371 if you need help with your order." },
        { icon: "fa-truck", para: "Fast Delivery", desc: "Receive the parts and accessories you need, right when you need them." },
        { icon: "fa-cogs", para: "Wide Variety", desc: "Extensive range of OEM, replacement, and aftermarket accessories" },
        { icon: "fa-tags", para: "Affordable Pricing", desc: "Find all the parts you need, priced to save you money." }
    ];

    return (
        <div className="speciality w-100 my-5">
            <div className="container-fluid">
                <div className="row">
                    {data.map((item, index) => (
                        <div className="col-lg-2 mb-3" key={index}>
                            <div className="speciality-item">
                                <div className="icon fs-2 main text-center mb-2" >
                                    <i className={`fas ${item.icon}`} />
                                </div>
                                <h6 className="para fw-bold">{item.para}</h6>
                                <div className="desc">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
