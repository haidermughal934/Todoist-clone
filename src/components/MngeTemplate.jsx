import React from "react";

const MngeTemplate = () => {
  return (
    <>
      {/* Management Template */}
      <div className="container d-flex gap-3 py-5">
        <div className="row mx-5">
          <div className="col">
            {/* card 1 */}
            <div className="card">
              <div className="pic" style={{ backgroundColor: "#F4FBF7" }}>
                <img
                  src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F2Mf78ckdUG86h15GS3XC3r%2F031690accea5210c089bab1fda255364%2Fone-on-one-meeting.png%3Fw%3D270"
                  className="card-img-top mx-auto d-block"
                  alt="..."
                  style={{
                    width: "7rem",
                    height: "7rem",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">1-on-1 Meeting</h5>
                <p className="card-text">
                  Ensure priorities are clear and keep a pulse on how your
                  team's feeling.
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
                  src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F5QpPChCdKzj2fSm5RpnZ8F%2F61c81bf377074a18b8f03c9c1fea77f6%2Femployee-onboarding.png%3Fw%3D270"
                  className="card-img-top  mx-auto d-block"
                  alt="..."
                  style={{
                    width: "7rem",
                    height: "7rem",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Employe Onboarding</h5>
                <p className="card-text">
                  Make sure newcomers have the information they need to hit the
                  ground running.
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
                  src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F3GD5k7FbjZbI6nKzShzlpo%2Fd4ffff789281df9a10185bcf7dcd7348%2Fgoals-feedback-meeting.png%3Fw%3D270"
                  className="card-img-top  mx-auto d-block"
                  alt="..."
                  style={{
                    width: "7rem",
                    height: "7rem",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Goals & Feedback</h5>
                <p className="card-text">
                  Encourage frequent feedback and goal-oriented.
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
                  src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F45YTC3dHG9n5yNiuRVOjdu%2Fb22f9e694dc6dc52ac665e10a4e6df16%2Fhiring-pipeline.png%3Fw%3D270"
                  className="card-img-top  mx-auto d-block"
                  alt="..."
                  style={{
                    width: "7rem",
                    height: "7rem",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title"> Hiring Pipeline</h5>
                <p className="card-text">
                  Stay communicative as candidates progress
                  through hiring pipeline.
                </p>
                <a href="#" className="btn-primary text-decoration-none">
                  <i className="fa-solid fa-book"></i>
                  Board
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
            href="https://www.todoist.com/templates/category/management"
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

export default MngeTemplate;
