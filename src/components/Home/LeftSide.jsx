import React from "react";
import { Link } from "react-router-dom";
import ActionButtons from "./ActionButtons";
import SocialMediaContacts from "./SocialMediaContacts";
import Home, { HomeDetails } from "../../constants/Home";

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
      {HomeDetails.map((detail) => (
        <div className="tail-block">
          <div className="tail-block-title">
            {detail.title.map((title) => (
              <h1>{title}</h1>
            ))}
          </div>
          <div className="tail-block-text">
            {detail.paragraphs.map((paragraph) =>
              paragraph.type === "simple" ? (
                `${paragraph.text}`
              ) : (
                <a href={paragraph.href} target="_blank">
                  {paragraph.text}
                </a>
              )
            )}
          </div>
        </div>
      ))}
      <SocialMediaContacts />
    </div>
  );
}

export default LeftSide;
