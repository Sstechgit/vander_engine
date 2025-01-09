import React, { useState, useRef } from "react";
import axios from "axios";

export default function Update_Product() {
    // Define the initial form data
    const initialFormData = {
        part: "",
        year: "",
        make: "",
        model: "",
        variant: "",
        name: "",
        pricing: "",
        miles: "",
        tested_checked: "",
        warranty: "",
        shipping: "",
        image: null,
        Stock: "",
        description: "",
        product_id: "",
    };

    const [formData, setFormData] = useState(initialFormData);
    const [loading, setLoading] = useState(false);

    // Create a ref for the file input and form
    const fileInputRef = useRef(null);
    const formRef = useRef(null);  // Reference to the form element

    // Handle input change
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "file" ? files[0] : value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formDataToSubmit = new FormData();
        for (const key in formData) {
            if (formData[key] !== null) {
                formDataToSubmit.append(key, formData[key]);
            }
        }

        try {
            const response = await axios.post(
                `https://backend.vanderengines.com/api/products/add?Stock=${formData.Stock}`,
                formDataToSubmit,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            if (response.status === 200) {
                alert("Product updated successfully!");

                // Reset the form fields using the reset method and manually reset state
                setFormData(initialFormData); // Reset the state

                // Manually reset the file input field
                if (fileInputRef.current) {
                    fileInputRef.current.value = ''; // Reset file input value
                }

                // Optionally, you can also reset the form element itself:
                if (formRef.current) {
                    formRef.current.reset(); // This resets the DOM fields
                }
            }
        } catch (error) {
            console.error("Error inserting product:", error);
            alert("There was an error inserting the product. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="update_product py-3 mb-3" style={{ background: "rgb(238, 238, 238)" }}>
            <div className="container">
                <h1 className="text-center mb-4 fw-bold" style={{ color: "#1eb7c6" }}>Update Product</h1>
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-7 mb-4">
                        <form
                            ref={formRef} // Assign the form reference here
                            className="border p-4 border-info bg-white"
                            onSubmit={handleSubmit}
                        >
                            {/* Part, Year, Make, and Model Fields */}
                            <div className="row">
                                <div className="col-6">
                                    <div className="mb-3">
                                        <select
                                            className="form-select"
                                            name="part"
                                            value={formData.part}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select Part</option>
                                            <option value="Engine">Engine</option>
                                            <option value="Transmission">Transmission</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="year"
                                            value={formData.year}
                                            onChange={handleChange}
                                            placeholder="Enter Year"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="make"
                                            value={formData.make}
                                            onChange={handleChange}
                                            placeholder="Enter Make"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="model"
                                            value={formData.model}
                                            onChange={handleChange}
                                            placeholder="Enter Model"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Other Fields */}
                            <div className="row">
                                <div className="col-6">
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="variant"
                                            value={formData.variant}
                                            onChange={handleChange}
                                            placeholder="Enter Variant"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter Name"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Other fields */}
                            <div className="row">
                                <div className="col-6">
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="pricing"
                                            value={formData.pricing}
                                            onChange={handleChange}
                                            placeholder="Enter Price"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="miles"
                                            value={formData.miles}
                                            onChange={handleChange}
                                            placeholder="Enter Miles"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Other Fields */}
                            <div className="row">
                                <div className="col-6">
                                    <div className="mb-3">
                                        <select
                                            className="form-select"
                                            name="tested_checked"
                                            value={formData.tested_checked}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Tested & Checked</option>
                                            <option value="tested">100% tested & checked</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <select
                                            className="form-select"
                                            name="warranty"
                                            value={formData.warranty}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select Warranty</option>
                                            <option value="1 Year">Up To 1 Year Warranty</option>
                                            <option value="2 to 3 Years">Up To 2 to 3 Years Warranty</option>
                                            <option value="3 to 4 Years">Up To 3 to 4 Years Warranty</option>
                                            <option value="4 to 5 Years">Up To 4 to 5 Years Warranty</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <div className="mb-3">
                                        <select
                                            className="form-select"
                                            name="shipping"
                                            value={formData.shipping}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Shipping</option>
                                            <option value="shipping">Free Shipping</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <input
                                            type="file"
                                            name="image"
                                            onChange={handleChange}
                                            className="form-control"
                                            ref={fileInputRef} // Attach ref for file input
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="Stock"
                                            value={formData.Stock}
                                            onChange={handleChange}
                                            placeholder="Enter Stock No."
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="product_id"
                                            value={formData.product_id}
                                            onChange={handleChange}
                                            placeholder="Enter Product ID"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="btn btn-block" disabled={loading}>
                                    {loading ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-5 d-contents">
                        <img src="/assets/add2.svg" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
            <style>
                {`
                    .update_product .form-control, .update_product .form-select  {
                        border: none;
                        border-bottom: 1px solid #1eb7c6;
                        border-radius: 0;
                    }
                    input:-internal-autofill-selected{
                        background:none !important;
                    }
              `  }
            </style>
        </div>
    );
}
