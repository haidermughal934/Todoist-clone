import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function MiddelSection() {
  return (
    <>
      {/* youtube video */}
      <div className="container-fluid pt-5" style={{ marginBottom: "196px" }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-6 text-md-start text-center ps-5 pe-5">
            <div className="ratio ratio-16x9">
              <iframe
                width="896"
                height="503"
                src="https://www.youtube.com/embed/2oc6BLEFoww?start=37"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-12 col-md-5 text-start ms-5">
            <h2>
              Smart features that
              <br /> feel magical
            </h2>
            <p className=" fs-5">
              See how Todoist Assist works
              <br /> intelligently behind the scenes to
              <br />
              transform scattered tasks into clear
              <br /> action plans.
            </p>
            <a
              className=" text-decoration-none"
              href="https://www.todoist.com/todoist-assist"
            >
              <p
                className="text-primary border-0 rounded fw-semibold hover-bttn ps-1"
                style={{ fontSize: "0.8rem", maxWidth: "17rem" }}
              >
                Learn about our thoughtful approach to AI
                <i className="fa-solid fa-greater-than fw-light"></i>
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row justify-content-center align-items-center p-5">
          <div className="col-12 col-md-6 text-md-start text-center ps-5">
            {/* Text */}
            <p className=" text-danger fw-semibold">In it for the long haul</p>
            <h2 className=" fw-bold">
              A task manager you can
              <br />
              trust for life
            </h2>
            <p className=" text-secondary fw-normal">
              We’ve been building Todoist for 18 years and 190
              <br /> days. Rest assured that we’ll never sell out to the
              <br /> highest bidder.
            </p>
            <button className=" border-0 text-primary">
              <i className="fa-solid fa-book-open"></i>Read about our long-term
              mission
            </button>
          </div>

          {/* img */}
          <div className="col-12 col-md-6 text-center">
            <div className="marquee-container position-relative">
              <div className="marquee-content d-flex">
                {[...Array(4)].map((_, i) => (
                  <React.Fragment key={i}>
                    {/* img 1 */}
                    <img
                      src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fwww.todoist.com%2Fstatic%2Fhome-teams%2Fstats%2Fstat-box-1.png"
                      className="img-fluid me-4"
                      alt="pic 1"
                      style={{
                        width: "144px",
                        height: "142px",
                      }}
                    />
                    {/* img 2 */}
                    <img
                      src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fwww.todoist.com%2Fstatic%2Fhome-teams%2Fstats%2Fstat-box-2.png"
                      className="img-fluid me-4"
                      alt="pic 2"
                      style={{
                        width: "144px",
                        height: "142px",
                      }}
                    />
                    {/* img 3 */}
                    <img
                      src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fwww.todoist.com%2Fstatic%2Fhome-teams%2Fstats%2Fstat-box-3.png"
                      className="img-fluid me-4"
                      alt="pic 3"
                      style={{
                        width: "144px",
                        height: "142px",
                      }}
                    />
                    {/* img 4 */}
                    <img
                      src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fwww.todoist.com%2Fstatic%2Fhome-teams%2Fstats%2Fstat-box-4.png"
                      className="img-fluid me-4"
                      alt="pic 4"
                      style={{
                        width: "144px",
                        height: "142px",
                      }}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#fff6f0" }}
      >
        <h1
          className="text-center fs-1 fw-bold py-5"
          style={{ marginBottom: 0 }}
        >
          Gain calmness and clarity with the
          <br />
          world’s most beloved productivity app
        </h1>
        <p className="text-center  text-secondary fw-semibold fs-5">
          374000+ ★★★★★ reviews on Google Play and App Store
        </p>
        <center className="py-4">
          <a href="https://app.todoist.com/auth/signup?locale=en">
            <button type="button" className="btn btn-danger px-4 py-3 ">
              Start for free
            </button>
          </a>
          <p className="mt-3">
            <a
              href="https://www.todoist.com/downloads"
              className="text-secondary fw-semibold text-decoration-none me-1 p-2 rounded hover-btn"
            >
              <i className="fa-solid fa-download"></i>Download app
            </a>
          </p>
        </center>
        <hr className="m-0 p-0" />
      </div>
    </>
  );
}

export default MiddelSection;
