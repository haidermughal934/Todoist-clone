import React from "react";

const Imgtext = () => {
  return (
    <>
      <div className="container my-2 py-5">
        <p
          className=" mb-5"
          style={{
            marginLeft: "5px",
            transform: "rotate(355deg)",
            display: "inline-block",
          }}
        >
          <span
            style={{
              fontFamily: "Shantell Sans",
              fontSize: "19px",
              color: "grey",
            }}
          >
            Take a peek! <br />
            Watch Todoist in action.
          </span>
          
        </p>
        <img
            src="https://framerusercontent.com/images/neVood6gF8kvn47B73UfQNwSU.png"
            alt="arrow"
            style={{
              width: "120px",
              marginLeft: "40px",
              transform: "rotate(10deg)",
              display: "inline-block",
            }}
          />
          
        <img
          src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_2240/https%3A%2F%2Fwww.todoist.com%2Fstatic%2Fhome%2Fvideo-section%2Fen%2Fposter-image.png"
          alt="bg img"
          className=" border rounded-4 object-fit-cover w-100 h-100"
          style={{
            maxWidth:"1088px",
            height: "615px",
          }}
        />
      </div>
    </>
  );
};

export default Imgtext;
