import React, { useState } from "react";

export default function Hero_form() {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [website, setWebsite] = useState(""); // New state for website URL
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("number", number);
    formData.append("website", website); // Append website URL
    formData.append("message", message);

    // Make API request to Node.js endpoint
    fetch("https://sstechservices.net/send_email.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // Reset fields after successful submission
        setName("");
        setEmail("");
        setNumber("");
        setWebsite(""); // Reset website URL field
        setMessage("");
       
      })
      .catch((error) => {
        console.error(error);
        alert("There was an error submitting your form. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      {" "}
      <div className="" >
        <form onSubmit={handleSubmit} className="main-form text-warning" style={{border:"10px solid rgb(201 195 195)", boxShadow:"none" , borderRadius:"0"}}>
          <h3 className="text-center">Get a Free Consultation</h3>
          <div className="row">
          <div className="mb-3 col-6">
            <label htmlFor="name" className="form-label">
              Name <span className="text-danger fw-bold fs-5">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="number" className="form-label">
              Number <span className="text-danger fw-bold fs-5">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="number"
              value={number}
              onChange={(event) => setNumber(event.target.value)}
              required
            />
          </div>
          </div>
        <div className="row">
        <div className="mb-3 col-6">
            <label htmlFor="email" className="form-label">
              Email address <span className="text-danger fw-bold fs-5">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className=" col-6">
            <label htmlFor="website" className="form-label">
              Website URL
            </label>
            <input
              type="url"
              className="form-control"
              id="website"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
            />
          </div>
        </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Comment or Message
            </label>
            <textarea
              className="form-control"
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
          <div className="mb-2 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              required
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            {loading ? (
              <span>
                <i className="fa fa-spinner fa-spin"></i> Submitting...
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
