import React from "react";

const WorkTemplate = () => {
  return (
    <>
      {/* Work Template */}
      <div className="container-fluid d-flex gap-3 py-5">
        <div className="row mx-5">
          <div className="col">
            {/* card 1 */}
            <div className="card">
              <div className="pic" style={{ backgroundColor: "#F4FBF7" }}>
                <img
                  src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F1la3hgXN3C6hvQI6IulAKV%2F14b9e9e3675dea1a0d8b3e0c82559a52%2Faccounting-tasks.png%3Fw%3D270"
                  className="card-img-top mx-auto d-block"
                  alt="..."
                  style={{
                    width: "7rem",
                    height: "7rem",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Accounting Tasks</h5>
                <p className="card-text">
                  Create a system to keep your books, receipts, and invoices
                  organized.
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
                  src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F15OVPgnxNOQKhBmfbiju8D%2F6237caafe7e2eb3efd98658e6eebccc5%2Fbusiness-travel-packing.png%3Fw%3D270"
                  className="card-img-top  mx-auto d-block"
                  alt="..."
                  style={{
                    width: "7rem",
                    height: "7rem",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Business Travel</h5>
                <p className="card-text">
                  Never forget your laptop charger, or passport again.
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
              <div className="pic" style={{ backgroundColor: "#F4FBF7" }}>
                <img
                  src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F4jRfVdAdXfu3MfxWkN4Mct%2Fd10e07e3fb8476bc0eb932daa3629d0b%2Fclient-management-light.png%3Fw%3D270"
                  className="card-img-top  mx-auto d-block"
                  alt="..."
                  style={{
                    width: "7rem",
                    height: "7rem",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Client Management</h5>
                <p className="card-text">Organize your work with clients.</p>
                <a href="#" className="btn-primary text-decoration-none">
                  <i className="fa-solid fa-book"></i>
                  List
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            {/* card 4 */}
            <div className="card">
              <div className="pic" style={{ backgroundColor: "#F6FAEB" }}>
                <img
                  src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F1BRIRjqHOIp5yftZ1FIskk%2Fc1100be22568f4ed2a927266712ebdd1%2Fdeep-work.png%3Fw%3D270"
                  className="card-img-top  mx-auto d-block"
                  alt="..."
                  style={{
                    width: "7rem",
                    height: "7rem",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Deep Work</h5>
                <p className="card-text">
                  Practice prioritizing focus and eliminating distraction.
                </p>
                <a href="#" className="btn-primary text-decoration-none">
                  <i className="fa-solid fa-book"></i>
                  List
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            {/* card 5 */}
            <div className="card">
              <div className="pic" style={{ backgroundColor: "#FFF6F0" }}>
                <img
                  src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F6TiTWjSetzQYlfaCmDNDLc%2F9a3e60cc7022ba15b34042e669c52055%2Fmeeting-agenda.png%3Fw%3D270"
                  className="card-img-top  mx-auto d-block"
                  alt="..."
                  style={{
                    width: "7rem",
                    height: "7rem",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Meeting Agenda</h5>
                <p className="card-text">
                  Waste less time in meetings, ensuring they're efficient.
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
            href="https://www.todoist.com/templates/category/work"
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

export default WorkTemplate;
