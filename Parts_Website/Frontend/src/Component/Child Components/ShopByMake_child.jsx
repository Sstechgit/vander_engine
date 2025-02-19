import React, { useState } from 'react'

export default function () {
  const data=[
    {imgSrc:"/assets/brand/15.png",partname:"Acura"},
    {imgSrc:"/assets/brand/alfa_romeo.jpeg",partname:"Alfa Romeo"},
    {imgSrc:"/assets/brand/12.png",partname:"Audi"},
    {imgSrc:"/assets/brand/austin.jpeg",partname:"Austin"},
    {imgSrc:"/assets/brand/13.png",partname:"BMW"},
    {imgSrc:"/assets/brand/Buick-logo.png",partname:"Buick"},
    {imgSrc:"/assets/brand/cad.png",partname:"Cadillac"},
    {imgSrc:"/assets/brand/chevrolet.jpeg",partname:"Chevrolet"},
    {imgSrc:"/assets/brand/chrysler.png",partname:"Chrysler"},
    {imgSrc:"/assets/brand/daewoo.jpeg",partname:"Daewoo"},
    {imgSrc:"/assets/brand/daihatsu.jpeg",partname:"Daihatsu"},
    {imgSrc:"/assets/brand/dodge.png",partname:"Dodge"},
    {imgSrc:"/assets/brand/eagle.jpeg",partname:"Eagle"},
    {imgSrc:"/assets/brand/ferrari.jpeg",partname:"Ferrari"},
    {imgSrc:"/assets/brand/fiat.jpg",partname:"Fiat"},
    {imgSrc:"/assets/brand/ford.png",partname:"Ford"},
    {imgSrc:"/assets/brand/geo.jpeg",partname:"Geo"},
    {imgSrc:"/assets/brand/gmc.png",partname:"GMC"},
    {imgSrc:"/assets/brand/16.png",partname:"Honda"},
    {imgSrc:"/assets/brand/hummer.png",partname:"Hummer"},
    {imgSrc:"/assets/brand/8.png",partname:"Hyundai"},
    {imgSrc:"/assets/brand/18.png",partname:"Infiniti"},
    {imgSrc:"/assets/brand/isuzu.png",partname:"Isuzu"},
    {imgSrc:"/assets/brand/17.png",partname:"Jaguar"},
    {imgSrc:"/assets/brand/jeep.png",partname:"Jeep"},
    {imgSrc:"/assets/brand/7.png",partname:"Kia"},
    {imgSrc:"/assets/brand/6.png",partname:"Land Rover"},
    {imgSrc:"/assets/brand/20.png",partname:"Lexus"},
    {imgSrc:"/assets/brand/lin.png",partname:"Lincoln"},
    {imgSrc:"/assets/brand/21.png",partname:"Mazda"},
    {imgSrc:"/assets/brand/5.png",partname:"Mercedes"},
    {imgSrc:"/assets/brand/Mercury.png",partname:"Mercury"},
    {imgSrc:"/assets/brand/merkur.jpeg",partname:"Merkur"},
    {imgSrc:"/assets/brand/mg.jpeg",partname:"MG"},
    {imgSrc:"/assets/brand/4.png",partname:"Mini"},
    {imgSrc:"/assets/brand/3.png",partname:"Mitsubishi"},
    {imgSrc:"/assets/brand/2.png",partname:"Nissan"},
    {imgSrc:"/assets/brand/olds.png",partname:"Oldsmobile"},
    {imgSrc:"/assets/brand/peugeot.jpeg",partname:"Peugeot"},
    {imgSrc:"/assets/brand/ply.png",partname:"Plymouth"},
    {imgSrc:"/assets/brand/pontiac.png",partname:"Pontiac"},
    {imgSrc:"/assets/brand/1.png",partname:"Porsche"},
    {imgSrc:"/assets/brand/ram.jpeg",partname:"Ram"},
    {imgSrc:"/assets/brand/renault.jpeg",partname:"Renault"},
    {imgSrc:"/assets/brand/rolls.jpeg",partname:"Rolls Royce"},
    {imgSrc:"/assets/brand/saab.png",partname:"Saab"},
    {imgSrc:"/assets/brand/27.png",partname:"Saturn"},
    {imgSrc:"/assets/brand/26.png",partname:"Scion"},
    {imgSrc:"/assets/brand/sterling.jpeg",partname:"Sterling"},
    {imgSrc:"/assets/brand/25.png",partname:"Subaru"},
    {imgSrc:"/assets/brand/24.png",partname:"Suzuki"},
    {imgSrc:"/assets/brand/23.png",partname:"Toyota"},
    {imgSrc:"/assets/brand/triumph.jpeg",partname:"Triumph"},
    {imgSrc:"/assets/brand/volks.png",partname:"Volkswagen"},
    {imgSrc:"/assets/brand/22.png",partname:"Volvo"},
  ]
   // State to track whether to show more or less
   const [showAll, setShowAll] = useState(false);

   // Toggle between showing more or less
   const toggleShow = () => {
     setShowAll(!showAll);
   };
 
   // Get the data to show
   const itemsToShow = showAll ? data : data.slice(0, 12); // Show all if showAll is true, else show first 10 items
 
  return (
    <div className="shopbymake">
      <div className="container">
        <div className="d-flex align-items-center mb-3">
          <i className="fa-solid fa-gear fs-2 me-2 main"></i>
          <h3 className="fs-3 fw-bold">Shop Auto Parts by Make :</h3>
        </div>
        <div className="row">
        {itemsToShow.map((item,index)=>{
          return(
            <div className="col-lg-2 mb-4">
              <div className="card border-0 d-flex align-items-center">
                <div className='d-flex flex-column align-items-center justify-content-center p-3' >
                <img src={item.imgSrc} alt="" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                <h6 className='text-center parts-text'>{item.partname}</h6>
                </div>
              </div>
            </div>
          )
        })}
        </div>
        <div className="text-center mt-3 mb-5">
          <button onClick={toggleShow} className="btn btn-primary">
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  )
}





