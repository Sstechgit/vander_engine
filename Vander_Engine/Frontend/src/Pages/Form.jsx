import React from "react";

export default function Form() {
  return (
    <div className="form my-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 p-4">
            <h3>Our Innovative Approach in Digital Marketing</h3>
            <p>
              At SS Tech Service, we pride ourselves to be a leading digital
              marketing, our innovative digital marketing approach, Our
              uniqueness sets us apart in a competitive agency. we serve clients
              not only locally but also around the world, delivering customized
              digital marketing solutions that drive success and growth.
            </p>
            <p>
              Our professionals begins by analyzing our client’s businesses, we
              understand their business goal and make the best and result
              oriented strategies for them. We find the perfect audience for
              your business that helps in generating high quality leads. This
              foundational knowledge allows us to craft strategies that are both
              creative and effective. That makes SS Tech Services one of the
              best digital marketing services. We have worked with 100s of
              clients in India as well as around the world.
            </p>
          </div>
          <div className="col-lg-6">
            <form>
              <h3 className="text-center">Get a Free Consultation</h3>
              <div class="mb-2">
                <label for="exampleInputname1" class="form-label">
                  Name <span className="text-danger fw-bold fs-5">*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  aria-describedby="namelHelp"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="exampleInputno1" class="form-label">
                  Number <span className="text-danger fw-bold fs-5">*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="no"
                  aria-describedby="nolHelp"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="exampleInputEmail1" class="form-label">
                  Email address{" "}
                  <span className="text-danger fw-bold fs-5">*</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.{" "}
                </div>
              </div>
              <div class="mb-2">
                <label for="exampleInputmessage1" class="form-label">
                  Comment or Message{" "}
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  id="message"
                  aria-describedby="messagelHelp"
                />
              </div>

              <div class="mb-2 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
