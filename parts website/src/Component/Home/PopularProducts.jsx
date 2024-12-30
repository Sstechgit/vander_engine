import React from 'react'
import { Link } from 'react-router-dom'

export default function PopularProducts() {
  const data = [
    { imgSrc: "/assets/product/chevrolet1.jpeg", head: "Chevrolet Silverado 1500 Brake Pads", price: "$265.95" },
    { imgSrc: "/assets/product/chevrolet.jpeg", head: "Chevrolet Silverado 1500 Brake Rotors", price: "$265.95" },
    { imgSrc: "/assets/product/chevrolet2.jpeg", head: "Chevrolet Silverado 1500 Brakes", price: "$265.95" },
    { imgSrc: "/assets/product/chevrolet3.jpeg", head: "Chevrolet Silverado 1500 Control Arm", price: "$134.95" },
    { imgSrc: "/assets/product/chevrolet4.jpeg", head: "Chevrolet Silverado 1500 Wheel Hub", price: "$173.97" },
    { imgSrc: "/assets/product/chevrolet5.jpeg", head: "Chevrolet Silverado 2500 HD Mirror", price: "$179.95" },
    { imgSrc: "/assets/product/dodge.jpeg", head: "Dodge Ram 1500 Control Arm", price: "$135.95" },
    { imgSrc: "/assets/product/ford1.jpeg", head: "Ford F150 AC Compressor", price: "$152.97" },
    { imgSrc: "/assets/product/ford2.jpeg", head: "Ford F150 Brake Pads", price: "$146.97" },
    { imgSrc: "/assets/product/ford3.jpeg", head: "Ford F150 Brake Rotors", price: "$146.97" },
    { imgSrc: "/assets/product/ford4.jpeg", head: "Ford F150 Brakes", price: "$146.97" },
    { imgSrc: "/assets/product/ford5.jpeg", head: "Ford F150 Control Arm", price: "$109.95" },
    { imgSrc: "/assets/product/ford6.jpeg", head: "Ford F150 Ignition Coil", price: "$16.95" },
    { imgSrc: "/assets/product/ford7.jpeg", head: "Ford F150 Mirror", price: "$73.95" },
    { imgSrc: "/assets/product/ford8.jpeg", head: "Ford F150 Struts", price: "$85.97" },
    { imgSrc: "/assets/product/ford9.jpeg", head: "Ford F150 Tail Light", price: "$27.95" },
    { imgSrc: "/assets/product/ford10.jpeg", head: "Ford 150 Wheel Hub", price: "$199.97" },
    { imgSrc: "/assets/product/ford11.jpeg", head: "Ford F250 Super Duty Mirror", price: "$89.95" },
    { imgSrc: "/assets/product/ford12.webp", head: "Ford F250 Super Duty Wheel Hub", price: "$328.97" },
    { imgSrc: "/assets/product/ford13.jpeg", head: "Ford F350 Super Duty Mirror", price: "$89.95" },
    { imgSrc: "/assets/product/ford14.jpeg", head: "Ford Focus Clutch", price: "$530.97" },
    { imgSrc: "/assets/product/honda1.jpeg", head: "Honda Accord Brakes", price: "$27.97" },
    { imgSrc: "/assets/product/honda2.jpeg", head: "Honda Accord Struts", price: "$70.97" },
    { imgSrc: "/assets/product/honda3.jpeg", head: "Honda CRV Struts", price: "$110.97" },
    { imgSrc: "/assets/product/honda4.jpeg", head: "Honda Civic Struts", price: "$106.97" },
    { imgSrc: "/assets/product/nissan1.jpeg", head: "Nissan Altima Struts", price: "$86.97" },
    { imgSrc: "/assets/product/nissan2.jpeg", head: "Nissan Maxima Struts", price: "$171.98" },
    { imgSrc: "/assets/product/toyota1.jpeg", head: "Toyota Camry Brakes", price: "$35.97" },
    { imgSrc: "/assets/product/toyota2.jpeg", head: "Toyota Camry Struts", price: "$76.97" },
    { imgSrc: "/assets/product/toyota3.jpeg", head: "Toyota Corolla Struts ", price: "$41.97" },
  ]
  return (
    <div className="popular-products">
      <div className="container">
        <div className="d-flex align-items-center mb-3">
          <i className="fa-solid fa-gear fs-2 me-2 main"></i>
          <h3 className="fs-3 fw-bold">
            Shop Popular Auto Parts :</h3>
        </div>
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col-lg-3 mb-4" key={index}>
                <div className="card align-items-center h-100" >
                  <img src={item.imgSrc} alt="" style={{ width: "100px", height: "100px" }} />
                  <h6 className='pt-1 text-center'><Link to="/sellerParts" className='model-text'>{item.head}</Link></h6>
                  <p className='parts-text text-center'>{item.price}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
