import React from "react";

const CsTemplate = () => {
  return (
    <>
      {/* Personal Template */}
      <div className="container d-flex justify-content-center gap-3 pt-5 pb-4">
        <div className="row justify-content-center" style={{maxWidth:"50rem"}}>
          <div className="col">
            {/* card 1 */}
            <div className="card">
              <div className="pic" style={{ backgroundColor: "#F4FBF7" }}>
                <img
                  src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F6Mmwrq3T5KTpouAJhsQG6F%2Ff762fa077b0d65f087309123e216da12%2Fhelp-center.png%3Fw%3D270"
                  className="card-img-top mx-auto d-block"
                  alt="..."
                  style={{
                    width: "7rem",
                    height: "7rem",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Feature Requests</h5>
                <p className="card-text">
                  Monitor the valuable feedback that your Support team receives.
                </p>
                <a href="#" className="btn-primary text-decoration-none">
                  <i className="fa-solid fa-book"></i>
                  List
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            {/* card 2 */}
            <div className="card">
              <div className="pic" style={{ backgroundColor: "#F6FAEB" }}>
                <img
                  src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F6Mmwrq3T5KTpouAJhsQG6F%2Ff762fa077b0d65f087309123e216da12%2Fhelp-center.png%3Fw%3D270"
                  className="card-img-top  mx-auto d-block"
                  alt="..."
                  style={{
                    width: "7rem",
                    height: "7rem",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Help Center Article</h5>
                <p className="card-text">
                  Follow this template to take a help center article from idea
                  to published.
                </p>
                <a href="#" className="btn-primary text-decoration-none">
                  <i className="fa-solid fa-book"></i>
                  List
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            {/* card 3 */}
            <div className="card">
              <div className="pic" style={{ backgroundColor: "#FFF9EB" }}>
                <img
                  src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F1T9OecJHEAy7PUAQ3l1wP3%2Fc2faf0d0771cb99db88f732c11d077ee%2Fissue-tracking.png%3Fw%3D270"
                  className="card-img-top  mx-auto d-block"
                  alt="..."
                  style={{
                    width: "7rem",
                    height: "7rem",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title"> Issue Tracking</h5>
                <p className="card-text">
                  Stay on top of the bugs and issues in your software using issue Tracking.
                </p>
                <a href="#" className="btn-primary text-decoration-none">
                  <i className="fa-solid fa-book"></i>
                  List
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All template */}
      <div className="conatiner-fluid ">
        <center>
          <a
            className=" text-decoration-none"
            href="https://www.todoist.com/templates/category/support"
          >
            <p
              className="text-primary border-0 rounded fw-semibold hover-bttn text-center"
              style={{ fontSize: "0.8rem", maxWidth: "8.5rem" }}
            >
              Show All Templates
              <i className="fa-solid fa-greater-than fw-light"></i>
            </p>
          </a>
        </center>
      </div>
    </>
  );
};

export default CsTemplate;
