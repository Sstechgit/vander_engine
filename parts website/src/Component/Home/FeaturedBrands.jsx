import React from 'react'
import { Link } from 'react-router-dom'

export default function FeaturedBrands() {
  const data=[
    {brands:"A1 Cardone"},
    {brands:"Airtex"},
    {brands:"Anzo"},
    {brands:"Auto Ventshade"},
    {brands:"Bilstein"},
    {brands:"Bosch"},
    {brands:"Bushwacker"},
    {brands:"Carter"},
    {brands:"Cloyes"},
    {brands:"Crown Automative"},
    {brands:"Dayco"},
    {brands:"Dorman"},
    {brands:"Draw-Tite"},
    {brands:"EBC"},
    {brands:"Energy Suspension"},
    {brands:"Exedy"},
    {brands:"Felpro"},
    {brands:"Flowmaster"},
    {brands:"Four Seasons"},
    {brands:"Hella"},
    {brands:"Husky Liner"},
    {brands:"K&N"},
    {brands:"KYC"},
    {brands:"Monroe"},
    {brands:"Moog"},
    {brands:"NGK"},
    {brands:"Raybestos"},
    {brands:"Wagner"},
    {brands:"Weathertech"},
    {brands:"Westin"},
  ]
  return (
    <div className="featured-brand">
      <div className="container">
        <div className="d-flex align-items-center mb-3">
          <i className="fa-solid fa-gear fs-2 me-2 main"></i>
          <h3 className="fs-3 fw-bold">
            Shop Featured Auto Parts Brands :</h3>
        </div>
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col-lg-3 mb-4" key={index}>
                <div className="card border-0" >
                  <h6 className='pt-1 model-text text-center'>{item.brands}</h6>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
