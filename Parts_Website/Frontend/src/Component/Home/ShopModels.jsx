import React from 'react'
import { Link } from 'react-router-dom'

export default function ShopModels() {
  const data=[
    {model:"Chevrolet Equinox Parts"},
    {model:"Chevrolet Impala Parts"},
    {model:"Chevrolet Malibu Parts"},
    {model:"Chevrolet S10 Parts"},
    {model:"Chevrolet Silverado 1500 Parts"},
    {model:"Chevrolet Silverado 2500 HD Parts"},
    {model:"Chevrolet Tahoe Parts"},
    {model:"Chrysler Town & Country Parts"},
    {model:"Dodge Dakota Parts"},
    {model:"Dodge Durango Parts"},
    {model:"Dodge Grand Caravan Parts"},
    {model:"Dodge Ram 1500 Parts"},
    {model:"Dodge Ram 2500 Parts"},
    {model:"Ford Escape Parts"},
    {model:"Ford Expedition Parts"},
    {model:"Ford Explorer Parts"},
    {model:"Ford F150 Parts"},
    {model:"Ford F250 Super Duty Parts"},
    {model:"Ford F350 Super Duty Parts"},
    {model:"Ford Ford Focus Parts"},
    {model:"Ford Fusion Parts"},
    {model:"Ford Mustang Parts"},
    {model:"Ford Ranger Parts"},
    {model:"GMC Sierra 1500 Parts"},
    {model:"Honda Accord Parts"},
    {model:"Honda CRV Parts"},
    {model:"Honda Civic Parts"},
    {model:"Honda Odyssey Parts"},
    {model:"Hyundai Elantra Parts"},
    {model:"Hyundai Sonata Parts"},
    {model:"Jeep Cherokee Parts"},
    {model:"Jeep Grand Cherokee Parts"},
    {model:"Jeep Liberty Parts"},
    {model:"Jeep Wrangler Parts"},
    {model:"Mini Cooper Parts"},
    {model:"Nissan Altima Parts"},
    {model:"Nissan Maxima Parts"},
    {model:"Nissan Sentra Parts"},
    {model:"Subaru Forester Parts"},
    {model:"Subaru Outback Parts"},
    {model:"Toyota 4Runner Parts"},
    {model:"Toyota Camry Parts"},
    {model:"Toyota Corolla Parts"},
    {model:"Toyota Pickup Parts"},
    {model:"Toyota RAV4 Parts"},
    {model:"Toyota Sienna Parts"},
    {model:"Toyota Tacoma Parts"},
    {model:"Toyota Tundra Parts"},
    {model:"Volkswagen Beetle Parts"},
    {model:"Volkswagen Jetta Parts"},
    {model:"Volkswagen Passat Parts"},


  ]
  return (
    <div className="shopmodel">
      <div className="container">
        <div className="d-flex align-items-center mb-3">
          <i className="fa-solid fa-gear fs-2 me-2 main"></i>
          <h3 className="fs-3 fw-bold">
            Shop Auto Parts for Popular Models :</h3>
        </div>
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col-lg-3 mb-4" key={index}>
                <div className="card border-0" >
                  <h6 className='pt-1 model-text text-center'>{item.model}</h6>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
