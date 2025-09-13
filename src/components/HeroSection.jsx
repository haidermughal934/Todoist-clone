import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="container-fluid mt-5 mb-4 px-4 overflow-x-hidden">
        <div className="row justify-content-center align-items-center g-5 pt-5">
          {/* Text*/}
          <div className="col-12 col-md-4 text-md-start text-center ps-5">
            <h1 className="fw-bold" style={{ fontSize: "2.5rem" }}>
              Work, without the chaos
            </h1>
            <p className="mt-4" style={{ fontSize: "1.25rem" }}>
              Keep your team in sync without adding another complicated tool to
              your stack.
            </p>

            {/* Review */}
            <div
              className="d-inline-flex align-items-center border px-3 gap-2 mt-3 rounded-2"
              style={{ border: "1px solid #ccc" }}
            >
              <i className="fab fa-apple text-secondary"></i>
              <div className="vr" style={{ height: "2rem" }}></div>
              <i className="fab fa-android text-secondary"></i>
              <div className="vr" style={{ height: "2rem" }}></div>
              <div className="d-flex align-items-center gap-1">
                <span>374K+</span>
                <span className="text-muted">★★★★★</span>
                <span className="text-muted">reviews</span>
              </div>
            </div>

            {/* Button */}
            <div className="mt-4">
              <a href="https://app.todoist.com/auth/signup?locale=en">
                <button type="button" className="btn btn-danger px-4 py-3">
                  Start for free
                </button>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="col-12 col-md-8 text-center pe-0">
            <img
              src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_1312/https%3A%2F%2Fwww.todoist.com%2Fstatic%2Fhome-teams%2Fintro%2Fwide%2Fheaderui.en.png"
              alt="Todoist Header UI"
              className="img-fluid"
              style={{
                backgroundColor: "#fef6f3",
                borderRadius: "0.8rem",
                width: "100%",
                maxWidth: "700px",
              }}
            />
          </div>
        </div>
      </div>

      {/* second part */}

      <div className="position-relative d-inline-block my-5 py-3">
        {/* Background Image (hidden on small screens) */}
        <div
          className="overflow-hidden d-none d-md-block"
          style={{ width: "100%", height: "350px" }}
        >
          <img
            src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_2624/https%3A%2F%2Fwww.todoist.com%2Fstatic%2Fhome%2Fcustomer-logos-bg%402x.png"
            className="img-fluid"
            alt="Zoomed Image"
            style={{
              transform: "scale(1.1)",
              transformOrigin: "center",
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        {/* Testimonials for desktop */}
        <div className="position-absolute top-50 start-50 translate-middle text-white p-3 rounded d-none d-md-flex w-75">
          {/* Testimonial 1 */}
          <div className="d-flex flex-column align-items-center text-center ps-5 pe-4 mt-3">
            <blockquote className="fs-5 fw-semibold fst-italic text-secondary">
              “Simple, straightforward,
              <br />
              and super powerful”
            </blockquote>
            <img
              src="https://res.cloudinary.com/imagist/image/upload/h_114,e_colorize,o_48,co_rgb:17150f7a/v1715868560/the-verge_gdh1dw.png"
              alt="the-verge logo"
              width="92"
              height="16"
              loading="lazy"
            />
          </div>

          {/* Vertical Line */}
          <div
            className="vr"
            style={{ height: "9rem", width: "0.1rem", color: "black" }}
          ></div>

          {/* Testimonial 2 */}
          <div className="d-flex flex-column align-items-center text-center mb-4 px-5 mt-3">
            <blockquote className="fs-5 fw-semibold fst-italic text-secondary">
              “The best to-do list app
              <br />
              on the market”
            </blockquote>
            <img
              src="https://res.cloudinary.com/imagist/image/upload/h_114,e_colorize,o_48,co_rgb:17150f7a/v1715868560/pc-mag_ak9mna.png"
              alt="pc-mag logo"
              width="50"
              height="50"
              loading="lazy"
            />
          </div>

          {/* Vertical Line */}
          <div
            className="vr"
            style={{ height: "9rem", width: "0.1rem", color: "black" }}
          ></div>

          {/* Testimonial 3 */}
          <div className="d-flex flex-column align-items-center text-center px-4 mt-4">
            <blockquote className="fs-5 fw-semibold fst-italic text-secondary">
              “Nothing short of stellar”
            </blockquote>
            <img
              src="https://res.cloudinary.com/imagist/image/upload/h_114,e_colorize,o_48,co_rgb:17150f7a/v1715868560/techradar_qt0nt6.png"
              alt="techradar logo"
              width="92"
              height="16"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mobile marquee version */}
        <div className="col-md-10 overflow-x-hidden">
        <div className="d-block d-md-none marquee-container bg-white text-dark py-3">
          <div className="marquee-content d-flex gap-5">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {/* Testimonial 1 */}
                <div className="d-flex flex-column align-items-center text-center">
                  <blockquote className="fs-6 fw-semibold fst-italic text-secondary mb-1">
                    “Simple, straightforward,
                    <br />
                    and super powerful”
                  </blockquote>
                  <img
                    src="https://res.cloudinary.com/imagist/image/upload/h_114,e_colorize,o_48,co_rgb:17150f7a/v1715868560/the-verge_gdh1dw.png"
                    alt="the-verge logo"
                    width="92"
                    height="16"
                    loading="lazy"
                  />
                </div>

                {/* Vertical Line */}
                <div
                  className="vr"
                  style={{ height: "7rem", width: "0.1rem", color: "black" }}
                ></div>

                {/* Testimonial 2 */}
                <div className="d-flex flex-column align-items-center text-center">
                  <blockquote className="fs-6 fw-semibold fst-italic text-secondary mb-1">
                    “The best to-do list app
                    <br />
                    on the market”
                  </blockquote>
                  <img
                    src="https://res.cloudinary.com/imagist/image/upload/h_114,e_colorize,o_48,co_rgb:17150f7a/v1715868560/pc-mag_ak9mna.png"
                    alt="pc-mag logo"
                    width="50"
                    height="50"
                    loading="lazy"
                  />
                </div>

                {/* Vertical Line */}
                <div
                  className="vr"
                  style={{ height: "7rem", width: "0.1rem", color: "black" }}
                ></div>

                {/* Testimonial 3 */}
                <div className="d-flex flex-column align-items-center text-center">
                  <blockquote className="fs-6 fw-semibold fst-italic text-secondary mb-1">
                    “Nothing short of stellar”
                  </blockquote>
                  <img
                    src="https://res.cloudinary.com/imagist/image/upload/h_114,e_colorize,o_48,co_rgb:17150f7a/v1715868560/techradar_qt0nt6.png"
                    alt="techradar logo"
                    width="92"
                    height="16"
                    loading="lazy"
                  />
                </div>
                {/* Vertical Line */}
                <div
                  className="vr"
                  style={{ height: "7rem", width: "0.1rem", color: "black" }}
                ></div>
              </React.Fragment>
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
