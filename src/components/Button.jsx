import React from 'react'
import "../App.css";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <>
    <div className="container-fluid text-center">
        <h1 className="fw-bold">
          Kickstart your next project with Todoist Templates
        </h1>
        <p className=" fw-semibold text-secondary fs-5 mt-4">
          No need to create projects or setups from scratch when we have
          <br /> 50+ templates made for you.
        </p>
      </div>
      {/* Buttons */}
      <div className="container-fluid text-center py-1">
        <Link to="/WorkTemplate">
          <button className="bttn border-0 ms-2 p-3 rounded-3">Work</button>
        </Link>
        <Link to="/PerTemplate">
          <button className="bttn border-0 ms-2 p-3 rounded-3">Personal</button>
        </Link>
        <Link to="/EduTemplate">
          <button className="bttn border-0 ms-2 p-3 rounded-3">
            Education
          </button>
        </Link>
        <Link to="/MngeTemplate">
          <button className="bttn border-0 ms-2 p-3 rounded-3">
            Management
          </button>
        </Link>
        <Link to="/MsTemplate">
          <button className="bttn border-0 ms-2 p-3 rounded-3">
            Marketing & Sales
          </button>
        </Link>
        <Link to="/CsTemplate">
          <button className="bttn border-0 ms-2 p-3 rounded-3">
            Customer Support
          </button>
        </Link>
      </div>
    </>
  )
}

export default Button