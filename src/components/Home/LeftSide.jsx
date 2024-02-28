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

      <div className="banners">
        <Link to="/" className="cloud">
          <div className="title">
            <div>Develop your code in the cloud</div>
            <div>and build smart IoT projects!</div>
          </div>
        </Link>
        <Link to="/" className="education">
          <div className="title">
            <div>Develop your code in the cloud</div>
            <div>and build smart IoT projects!</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LeftSide;
