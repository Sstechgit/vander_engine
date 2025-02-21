import React from 'react'

export default function HomeCards() {
    const data= [
        {image:"https://static1.topspeedimages.com/wordpress/wp-content/uploads/jpg/202004/the-10-best-chevy-cr-9.jpg", title:"Chevy Engines",description:""},
        {image:"https://cloudfront-us-east-1.images.arcpublishing.com/crain/MZJAEERPLRH3THBBKI7DVNAYXY.jpg", title:"Mazda Engines",description:""},
        {image:"https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2021/08/Audi-Turbocharged-25-Liter-Inline-5-Via-YouTube.jpg", title:"Audi Engines",description:""},

    ]
    return (
        <>
            <div className="home-cards my-3">
                <div className="container">
                    <div className="row">
                        {data.map((item, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div className="card h-100">
                                    <img src={item.image} alt="Card image cap" />
                                    <div className="card-body">
                                        <h4 className="card-title text-center">{item.title}</h4>
                                        <p className="card-text">{item.description}</p>
                                 
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
<style>
{`
.home-cards .card{
box-shadow:0 0 10px;
}
`}

</style>
        </>
    )
}
