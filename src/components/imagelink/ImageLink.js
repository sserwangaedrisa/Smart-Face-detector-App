import React from "react";
import "./ImageLink.css";

const ImageLink = ({ Detecting, buttonActionFunction }) => {
  return (
    <div>
      <p>
        {" "}
        The magic face recognition app.
        <br />
        Just fill in the prompt below and then see the magic.
      </p>
      <div className="center w-70 form">
        <div className="center ma2 w-90 shadow-3">
          <input
            placeholder="paste the image url!!!"
            type="text"
            onChange={Detecting}
            className="bg-white f4 br2 shadow-3 w-70"
          />
          <button
            onClick={buttonActionFunction}
            className=" button w-auto-ns w-30 grow f4 link bg-light-blue br2 "
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageLink;
