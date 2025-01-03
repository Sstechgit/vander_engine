import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './SearchInventory.css';

const SearchBar = () => {
  const dummyBrands = ['Chevrolet', 'Ford', 'Honda'];
  const dummyModels = ['Malibu', 'Impala', 'Mustang', 'Explorer', 'Civic', 'Accord'];
  const dummyYearRanges = ['2020', '2021', '2022'];
  const dummyVariants = ['Base', 'Sport', 'Luxury'];

  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [yearRanges, setYearRanges] = useState([]);
  const [variants, setVariants] = useState([]);

  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYearRange, setSelectedYearRange] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    setBrands(dummyBrands);
    setModels(dummyModels);
    setYearRanges(dummyYearRanges);
    setVariants(dummyVariants);
  }, []);

  const handleSearch = () => {
    setShowModal(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page

    // Check if all required fields are filled
    if (!selectedBrand || !selectedModel || !selectedYearRange || !selectedVariant || !formData.name || !formData.email || !formData.phone) {
        alert("Please fill in all required fields.");
        return;
    }

    const payload = {
        part: '', // Setting part to an empty string
        make: selectedBrand,
        model: selectedModel,
        year: selectedYearRange,
        variant: selectedVariant, // Include variant in the payload
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        Message: '', // Setting Message to an empty string
        agreed: false // Setting agreed to false
    };

    // Log the payload to verify
    console.log("Payload:", payload);

    try {
        const response = await fetch('http://vanderenginestransmissions.com/api/leads', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            const data = await response.json();
            alert(data.message); // Alert success message
        } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.message || 'Unknown error'}`);
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        alert("Error submitting form");
    }

    // Close the modal and reset form data
    setShowModal(false);
    setFormData({
        name: '',
        email: '',
        phone: ''
    });
    setSelectedBrand('');
    setSelectedModel('');
    setSelectedYearRange('');
    setSelectedVariant('');
  };

  return (
    <div className="search-bar">
      <select onChange={e => setSelectedBrand(e.target.value)} value={selectedBrand}>
        <option value="">Select Brand</option>
        {brands.map(brand => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>

      <select onChange={e => setSelectedModel(e.target.value)} value={selectedModel}>
        <option value="">Select Model</option>
        {models.map(model => (
          <option key={model} value={model}>
            {model}
          </option>
        ))}
      </select>

      <select onChange={e => setSelectedYearRange(e.target.value)} value={selectedYearRange}>
        <option value="">Select Year Range</option>
        {yearRanges.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <select onChange={e => setSelectedVariant(e.target.value)} value={selectedVariant}>
        <option value="">Select Variant</option>
        {variants.map(variant => (
          <option key={variant} value={variant}>
            {variant}
          </option>
        ))}
      </select>

      <button onClick={handleSearch}>Search</button>

      <Modal show={showModal} onHide={() => setShowModal(false)} className="Search_section-modal">
        <Modal.Header closeButton className="Search_section-modal-header">
          <Modal.Title className="Search_section-modal-title">Enter Your Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="Search_section-modal-body">
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formName" className="Search_section-form-group">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="Search_section-form-control"
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="Search_section-form-group">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="Search_section-form-control"
                required
              />
            </Form.Group>

            <Form.Group controlId="formPhone" className="Search_section-form-group">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="Search_section-form-control"
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className="Search_section-modal-footer">
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SearchBar;
