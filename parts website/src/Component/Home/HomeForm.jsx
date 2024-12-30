import React from 'react'

export default function HomeForm() {
    return (
        <>
            <form action="" method="post" className='w-100 my-4 bg-light border rounded home-form'>
                <div className="row justify-content-center">
                    {/* <!-- Year Dropdown --> */}
                    <div className="col-lg-2 mb-2">
                        <select className="form-select p-2" name="year" required>
                            <option value="" disabled selected>Select Year</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                        </select>
                    </div>

                    {/* <!-- Make Dropdown --> */}
                    <div className="col-lg-2 mb-2">
                        <select className="form-select p-2" name="make" required>
                            <option value="" disabled selected>Select Make</option>
                            <option value="Toyota">Toyota</option>
                            <option value="Ford">Ford</option>
                            <option value="Honda">Honda</option>
                            <option value="Chevrolet">Chevrolet</option>
                        </select>
                    </div>

                    {/* <!-- Model Dropdown --> */}
                    <div className="col-lg-2 mb-2">
                        <select className="form-select p-2" name="model" required>
                            <option value="" disabled selected>Select Model</option>
                            <option value="Corolla">Corolla</option>
                            <option value="Civic">Civic</option>
                            <option value="F-150">F-150</option>
                            <option value="Tahoe">Tahoe</option>
                        </select>
                    </div>

                    {/* <!-- Part Dropdown --> */}
                    <div className="col-lg-2 mb-2">
                        <select className="form-select p-2" name="part" required>
                            <option value="" disabled selected>Select Part</option>
                            <option value="Engine">Engine</option>
                            <option value="Brake Pads">Brake Pads</option>
                            <option value="Headlights">Headlights</option>
                            <option value="Exhaust">Exhaust</option>
                        </select>
                    </div>

                    {/* <!-- Submit Button --> */}
                    <div className="col-lg-2 mb-2">
                        <button type="submit" className="btn btn-warning w-100 p-2 ">Search</button>
                    </div>
                </div>
            </form>
            <style>
                {`
                .home-form{
                padding:30px 0px;
                }
                  @media (max-width: 576px) {
                .home-form{
                 padding:10px 0px;
                }
                }
                `}
            </style>

        </>
    )
}
