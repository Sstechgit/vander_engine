import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function HomeForm() {
    const [phoneError, setPhoneError] = useState(""); // Error message for phone
    const [years, setYears] = useState([]);
    const [makes, setMakes] = useState([]);
    const [models, setModels] = useState([]);
    const [variants, setVariants] = useState([]);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false); // Added loading state
    const [submissionMessage, setSubmissionMessage] = useState(""); // State for submission message
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        part: "",
        make: "",
        model: "",
        year: "",
        variant: "",
        name: "",
        phone: "+1",
        email: "",
        message: "",
        agreed: "",
    });
    // Fetch data based on selected part
    useEffect(() => {
        if (formData.part) {
            const apiURL =
                formData.part === "Engine"
                    ? "https://partswebsitebackend.offdiary.org/api/engines"
                    : "https://partswebsitebackend.offdiary.org/api/transmission";

            axios
                .get(apiURL)
                .then((response) => {
                    setData(response.data);

                    // Fetch makes independently of year
                    const allMakes = new Set();
                    Object.keys(response.data).forEach((year) => {
                        Object.keys(response.data[year]).forEach((make) => {
                            allMakes.add(make);
                        });
                    });

                    setMakes([...allMakes]); // Set unique makes
                    setYears(Object.keys(response.data)); // Retain years if needed
                })
                .catch((error) => console.error("Error fetching data:", error));
        }
    }, [formData.part]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === "phone") {
            let updatedValue = value;

            // Ensure '+1' is always present
            if (!updatedValue.startsWith("+1")) {
                updatedValue = "+1" + updatedValue.replace(/[^0-9]/g, ""); // Re-add '+1' if missing and remove invalid characters
            }

            // Validate the phone number
            const error = validatePhoneNumber(updatedValue);
            setPhoneError(error); // Set the error message

            setFormData((prev) => ({
                ...prev,
                phone: updatedValue, // Update with the corrected value
            }));

            return; // Exit here to avoid further processing for phone
        }

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });

        // Update dropdowns based on selections
        if (name === "make" && data) {
            // Fetch models for the selected make, independent of year
            const allModels = new Set();
            Object.keys(data).forEach((year) => {
                if (data[year][value]) {
                    Object.keys(data[year][value]).forEach((model) => {
                        allModels.add(model);
                    });
                }
            });
            setModels([...allModels]);
            setVariants([]);
        } else if (name === "model" && data) {
            // Fetch variants based on the selected model and make
            const allVariants = new Set();
            Object.keys(data).forEach((year) => {
                if (data[year][formData.make] && data[year][formData.make][value]) {
                    Object.keys(data[year][formData.make][value]).forEach((variant) => {
                        allVariants.add(variant);
                    });
                }
            });
            setVariants([...allVariants]);
        }
    };


    // Phone number validation function
    const validatePhoneNumber = (number) => {
        // Ensure the number always starts with '+1'
        if (!number.startsWith("+1")) {
            return "Phone number must start with +1.";
        }

        const numberWithoutPrefix = number.slice(2); // Remove '+1'

        const isValidLength = numberWithoutPrefix.length === 10; // Check for exactly 10 digits
        const isDigitsOnly = /^[0-9]+$/.test(numberWithoutPrefix); // Ensure only digits
        const noRepeatedDigits = /^(?!.*(\d)\1{6}).*$/; // Prevent more than 2 repeated digits
        const dummyNumbers = [
            "1234567890",
            "9876543210",
            "1111111111",
            "2222222222",
        ];

        if (!isValidLength) {
            return "Phone number must be exactly 10 digits after +1.";
        }
        if (!isDigitsOnly) {
            return "Phone number can only contain digits.";
        }
        if (dummyNumbers.includes(numberWithoutPrefix)) {
            return "Phone number cannot be a common dummy number.";
        }
        if (!noRepeatedDigits.test(numberWithoutPrefix)) {
            return "Phone number cannot have more than 6 consecutive repeated digits.";
        }

        return ""; // Valid number
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check for phone validation before submitting
        if (phoneError || !formData.phone) {
            alert("Invalid Number");
            return;
        }
        if (phoneError || formData.phone.trim() === "+1" || !formData.phone) {
            alert("Please enter a valid phone number.");
            return;
        }
        setLoading(true); // Start loading
        try {
            const response = await axios.post(
                "https://partswebsitebackend.offdiary.org/api/leads",
                formData
            );
            console.log(response.data);
            navigate("/thankyou")
            // setSubmissionMessage(
            //     "Thank you! Your message has been sent successfully."
            // );
            setFormData({
                part: "",
                make: "",
                model: "",
                year: "",
                variant: "",
                name: "",
                phone: "",
                email: "",
                message: "",
                agreed: "",
            });
        } catch (error) {
            console.error("There was an error submitting the form!", error);
            setSubmissionMessage("There was an error submitting the form.");
            alert("There was an error submitting the form!");
        } finally {
            setLoading(false); // Stop loading
        }
    };

    const Homeform1 = () => {
        setFormData({ ...formData, agreed: "Homepage1" });
    };
    return (
        <>
        <div className="container-fluid">
        <div className="row align-items-center my-4">
                <div className="col-lg-6 form-area">
                    <div className="main-form p-3 pb-5 my-4">
                        <form onSubmit={handleSubmit}>
                      
                            <div className="row mb-3">
                                <div className="col-6">
                                    <select
                                        className="form-select"
                                        name="part"
                                        value={formData.part}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>
                                            Select part
                                        </option>
                                        <option value="Engine">Engine</option>
                                        <option value="Transmission">Transmission</option>
                                        <option value="Engine">Remanufactured Engines</option>
                                        <option value="Transmission">
                                            Remanufactured Transmission
                                        </option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <select
                                        className="form-select"
                                        name="year"
                                        value={formData.year}
                                        onChange={handleChange}
                                        // disabled={!years.length}
                                        required
                                    >
                                        <option value="" disabled>
                                            Select year
                                        </option>
                                        {years.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6">
                                    <select
                                        className="form-select"
                                        name="make"
                                        value={formData.make}
                                        onChange={handleChange}
                                        // disabled={!makes.length}
                                        required
                                    >
                                        <option value="" disabled>
                                            Select make
                                        </option>
                                        {makes.map((make) => (
                                            <option key={make} value={make}>
                                                {make}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-6">
                                    <select
                                        className="form-select"
                                        name="model"
                                        value={formData.model}
                                        onChange={handleChange}
                                        // disabled={!models.length}
                                        required
                                    >
                                        <option value="" disabled>
                                            Select a model
                                        </option>
                                        {models.map((model) => (
                                            <option key={model} value={model}>
                                                {model}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter Name"
                                        required
                                    />
                                </div>
                                <div className="col-6">
                                    <input
                                        type="tel"
                                        className={`form-control ${phoneError ? "is-invalid" : ""
                                            }`}
                                        id="mobile"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter Mobile"
                                        maxLength="12"
                                        required
                                    />
                                    {phoneError && (
                                        <div className="text-danger">{phoneError}</div>
                                    )}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-12">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter Email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="d-grid">
                                <button
                                    type="submit"
                                    className="btn btn-block btn-warning"
                                    disabled={loading}
                                    onClick={Homeform1}
                                >
                                    {loading ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                            {submissionMessage && (
                                <div
                                    className={` ${submissionMessage.includes("successfully")
                                        ? "text-success fw-bold mt-2 "
                                        : "text-danger"
                                        }`}
                                    role="alert"
                                >
                                    {submissionMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                <div className="col-lg-6 car-area" >
                    <img
                        src="https://www.pngkey.com/png/full/373-3732697_transmission-gear-for-replace-in-car-engine-transmission.png"
                        alt=""
                        className="img-fluid "
                    />
                </div>
            </div>
        </div>
          

            {/* <form action="" method="post" className='w-100 my-4 bg-light border rounded home-form'>
                    <div className="row justify-content-center">
                       
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

                     
                        <div className="col-lg-2 mb-2">
                            <select className="form-select p-2" name="make" required>
                                <option value="" disabled selected>Select Make</option>
                                <option value="Toyota">Toyota</option>
                                <option value="Ford">Ford</option>
                                <option value="Honda">Honda</option>
                                <option value="Chevrolet">Chevrolet</option>
                            </select>
                        </div>

                      
                        <div className="col-lg-2 mb-2">
                            <select className="form-select p-2" name="model" required>
                                <option value="" disabled selected>Select Model</option>
                                <option value="Corolla">Corolla</option>
                                <option value="Civic">Civic</option>
                                <option value="F-150">F-150</option>
                                <option value="Tahoe">Tahoe</option>
                            </select>
                        </div>

                       
                        <div className="col-lg-2 mb-2">
                            <select className="form-select p-2" name="part" required>
                                <option value="" disabled selected>Select Part</option>
                                <option value="Engine">Engine</option>
                                <option value="Brake Pads">Brake Pads</option>
                                <option value="Headlights">Headlights</option>
                                <option value="Exhaust">Exhaust</option>
                            </select>
                        </div>

                   
                        <div className="col-lg-2 mb-2">
                            <button type="submit" className="btn btn-warning w-100 p-2 ">Search</button>
                        </div>
                    </div>
                </form> */}



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
