import React from "react";

const MsTemplate = () => {
  return (
    <>
      {/* MS Template */}
      <div className="container-fluid d-flex gap-3 py-5">
        <div className="row mx-5">
          <div className="col">
            {/* card 1 */}
            <div className="card">
              <div className="pic" style={{ backgroundColor: "#F4FBF7" }}>
                <img
                  src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F3a1W0dyAPs5B48bHxkHKwe%2F0ea4273faaa962780a8ade2c78d34681%2Fblog.png%3Fw%3D270"
                  className="card-img-top mx-auto d-block"
                  alt="..."
                  style={{
                    width: "7rem",
                    height: "7rem",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title"> Blog Post</h5>
                <p className="card-text">
                  Go from inspiration to publication with this template for your
                  blog.
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
              <div className="pic" style={{ backgroundColor: "#F4FBF7" }}>
                <img
                  src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F1PUIGd94191KeZJeufgQGT%2Fbf757c1644320b2b2a823bf6781adafb%2Fcampaign-tracker.png%3Fw%3D270"
                  className="card-img-top  mx-auto d-block"
                  alt="..."
                  style={{
                    width: "7rem",
                    height: "7rem",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Campaign Tracker</h5>
                <p className="card-text">
                  Track ad campaigns and keep a pulse on your marketing
                  initiatives.
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
                  src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F4z11h4zSTbdNlS48u0eiON%2Fb32ecbe2f20f3d3fe338459a93ce886d%2Fcontent-calendar.png%3Fw%3D270"
                  className="card-img-top  mx-auto d-block"
                  alt="..."
                  style={{
                    width: "7rem",
                    height: "7rem",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Content Calendar</h5>
                <p className="card-text">
                  Calendar Strategize and publish your
                  marketing content on schedule.
                </p>
                <a href="#" className="btn-primary text-decoration-none">
                  <i className="fa-solid fa-book"></i>
                  Calendar
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            {/* card 4 */}
            <div className="card">
              <div className="pic" style={{ backgroundColor: "#FFF9EB" }}>
                <img
                  src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F25Zc9ppsBmihMQ0bWcO1JD%2F4b60fd66b293313ddff2834ff99747e5%2Fcontent-pipeline.png%3Fw%3D270"
                  className="card-img-top  mx-auto d-block"
                  alt="..."
                  style={{
                    width: "7rem",
                    height: "7rem",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Content Pipeline</h5>
                <p className="card-text">
                  Keep ideas flowing while making progress on content.
                </p>
                <a href="#" className="btn-primary text-decoration-none">
                  <i className="fa-solid fa-book"></i>
                  Board
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            {/* card 5 */}
            <div className="card">
              <div className="pic" style={{ backgroundColor: "#F6FAEB" }}>
                <img
                  src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2FpA9rwn6DnxzTO7jBw5hnr%2F3994240e8ddb80968b7c30f9915a0a51%2Fevent-planning.png%3Fw%3D270"
                  className="card-img-top  mx-auto d-block"
                  alt="..."
                  style={{
                    width: "7rem",
                    height: "7rem",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Event Planning</h5>
                <p className="card-text">
                  Don't let any crucial event planning details slip through the
                  cracks.
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
      <div className="conatiner-fluid ">
        <center>
          <a
            className=" text-decoration-none"
            href="https://www.todoist.com/templates/category/marketing-sales"
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

export default MsTemplate;
