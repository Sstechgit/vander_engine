import React from "react";

export default function OrderStatus_Form() {
  const status = [
    { status: "Order and Payment Status", icon: "fas fa-credit-card" },
    { status: "View Order Status", icon: "fas fa-search" },
    { status: "Return for Replacement", icon: "fas fa-exchange-alt" },
    { status: "Generate RMA Number", icon: "fas fa-clipboard-list" },
  ];
  return (
    <div className="order-form">
      <div className="container">
        <div className="d-flex mb-3">
          <i className="fa-solid fa-gear fs-2 me-2 main"></i>
          <h3 className="fs-3 fw-bold">Order Progress and Return Process :</h3>
        </div>
        <form action="" className="border p-3 mb-5">
          <h4>Create Support Request</h4>
          <div className="row mt-4">
            {status.map((item, index) => {
              return (
                <div className="col-lg-3 col-md-4 mb-3" key={index}>
                  <div className="d-flex">
                    <i className={item.icon + " me-2"}></i>{" "}
                    {/* Font Awesome icon */}
                    <h6>{item.status}</h6>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="form-group">
            <label htmlFor="email-info" className="mb-2">
              {" "}
              <i className="fa fa-envelope ms-2"></i> Email Information:
            </label>
            <input
              type="email"
              id="email-info"
              className="form-control mb-3"
              placeholder="Enter your email"
            />
            <label htmlFor="order-reference" className="mb-2">
              {" "}
              <i className="fa fa-file-alt ms-2"></i> Order Reference Code:
            </label>
            <input
              type="text"
              id="order-reference"
              className="form-control mb-3"
              placeholder="Enter your order reference code"
            />
            <button className="btn btn-primary mt-3">Track My Order</button>
          </div>
        </form>
        <form action="" className="border p-3 mb-5">
          <h4 className="mb-4">Get My Order Reference</h4>
          <i class="fa-solid fa-question me-2 bg-dark text-white p-1 border rounded"></i>
          <span>
            Forgot your order number? Enter your email below to get a list of
            your recent orders.
          </span>
          <div className="form-group mt-4">
            <label htmlFor="email-info" className="mb-2">
              {" "}
              <i className="fa fa-envelope ms-2"></i> Email Information:
            </label>
            <input
              type="email"
              id="email-info"
              className="form-control mb-3"
              placeholder="Enter your email"
            />
            <p className="text-secondary">(An email will be sent to you shortly.)</p>
            <button className="btn btn-primary mt-3">View Order History</button>
          </div>
        </form>
      </div>
    </div>
  );
}
