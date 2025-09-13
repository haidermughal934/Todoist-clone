import React from "react";

const Navbar = () => {
  return (
    <>
      <div>
        {/* Navbar code start from here */}

        <nav
          className="navbar fixed-top navbar-expand-lg bg-white p-2 pb-4"
          style={{
            fontFamily: "-moz-initial",
          }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="https://logo.svgcdn.com/l/todoist.svg"
                alt="Todoist Logo"
                width="150"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-6">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle me-3"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Made For
                  </a>
                  <ul
                    className="dropdown-menu fs-5 p-3"
                    style={{
                      fontFamily: "-moz-initial",
                    }}
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Task Management
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Project Management
                      </a>
                    </li>
                    <li></li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Time Management
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Habit Forming
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Teamwork
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle me-2 ms-2"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Resourses
                  </a>
                  <ul
                    className="dropdown-menu fs-5"
                    style={{
                      fontFamily: "-moz-initial",
                    }}
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Integrations
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Templates
                      </a>
                    </li>
                    <li></li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Getting Started
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Productivity Methods + Quiz
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Inspiration Hub
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Downloads
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link me-4 ms-2 text-black text-decoration-none me-1 p-2 rounded hover-btn"
                    href="https://www.todoist.com/pricing"
                  >
                    Pricing
                  </a>
                </li>
                <div className="vr"></div>
                <li className="nav-item">
                  <a
                    className="nav-link me-2 ms-2 text-black text-decoration-none me-1 p-2 rounded hover-btn"
                    
                  >
                    Login
                  </a>
                </li>
              </ul>
              <form className="d-flex me-2">
                <a href="https://app.todoist.com/auth/signup?locale=en">
                  <button type="button" className="btn btn-danger">
                    Start for free
                  </button>
                </a>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
