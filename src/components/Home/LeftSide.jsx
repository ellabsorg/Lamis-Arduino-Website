import React from "react";
import { Link } from "react-router-dom";
import ActionButtons from "./ActionButtons";

function LeftSide() {
  return (
    <div className="left-side">
      <Link to="/" className="what-arduino">
        <div className="title">what is arduino?</div>
        <img src="https://www.arduino.cc/static/media/arduino-UNO.bcc69bde.png" />
      </Link>

      <ActionButtons />
    </div>
  );
}

export default LeftSide;
