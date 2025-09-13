import React from "react";

const PerTemplate = () => {
  return (
    <>
      {/* Personal Template */}
      <div className="container-fluid d-flex gap-3 py-5">
        <div className="row mx-5">
          <div className="col">
            {/* card 1 */}
            <div className="card">
              <div className="pic" style={{ backgroundColor: "#FFF9EB" }}>
                <img
                  src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F7es7zQwCrIEfweclEiszY9%2Ff6709d61801ac60660af20be862a46e9%2Fgoal-tracker.png%3Fw%3D270"
                  className="card-img-top mx-auto d-block"
                  alt="..."
                  style={{
                    width: "7rem",
                    height: "7rem",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Goal Tracker</h5>
                <p className="card-text">
                  Build a list that connects your goals to your
                  daily life.
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
                  src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F71yc5kVTYy3kqdGOANFxeh%2F5b03fef4f8e4384ef649bb3772b23e0e%2Fappointments.png%3Fw%3D270"
                  className="card-img-top  mx-auto d-block"
                  alt="..."
                  style={{
                    width: "7rem",
                    height: "7rem",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Appointment</h5>
                <p className="card-text">
                  Never forget another meeting or appointment.
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
                  src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F3VcsFXTuLMUcdOpoHlc3Iq%2Fb5fc5ab0dce037b13dbaaf4d297266cb%2Ffitness.png%3Fw%3D270"
                  className="card-img-top  mx-auto d-block"
                  alt="..."
                  style={{
                    width: "7rem",
                    height: "7rem",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Fitness</h5>
                <p className="card-text">
                  Make fitness a habit add favorite exercises to your
                  to-do list.
                </p>
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
              <div className="pic" style={{ backgroundColor: "#F4FBF7" }}>
                <img
                  src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F5BGRBpYV8wS7XC2K3BGsZL%2F4791b39a875aa933799839d287fd14cf%2Fgroceries.png%3Fw%3D270"
                  className="card-img-top  mx-auto d-block"
                  alt="..."
                  style={{
                    width: "7rem",
                    height: "7rem",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Grocery List</h5>
                <p className="card-text">
                  Keep your grocery list wherever you go add it to
                  your Todoist.
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
              <div className="pic" style={{ backgroundColor: "#FFF9EB" }}>
                <img
                  src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F71eohTnaTJvslEhAkMoDMt%2Fac5df1dbcbed9a6b27679dbf881aebec%2Fmeal-planning.png%3Fw%3D270"
                  className="card-img-top  mx-auto d-block"
                  alt="..."
                  style={{
                    width: "7rem",
                    height: "7rem",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Meal Planning</h5>
                <p className="card-text">
                  Use this template for meal planning and cokking.
                </p>
                <a href="#" className="btn-primary text-decoration-none">
                  <i className="fa-solid fa-calendar"></i>
                  Calendar
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
            href="https://www.todoist.com/templates/category/personal"
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

export default PerTemplate;
