import React from "react";
import { Link } from "react-router-dom";
import ContentSection from "./ContentSection";
import { hardwareMainContent } from "../../constants/Hardware";

function HardwareMainContent() {
  return (
    <div className="page-content">
      <h1 className="title">arduino hardware</h1>
      <p>
        Arduino has over the years released over 100 hardware products: boards,
        shields, carriers, kits and other accessories. In this page, you will
        find an overview of all active Arduino hardware, including the Nano, MKR
        and Classic families.
      </p>
      <hr />
      <Link to="https://www.arduino.cc/pro/hardware">
        <img src="img/Hardware/arduino-pro.jpg" alt="" />
      </Link>
      <hr />
      <Link to="https://www.arduino.cc/education">
        <img src="img/Hardware/educational-kits.jpg" alt="" />
      </Link>
      {hardwareMainContent.map((section) => (
        <ContentSection section={section} />
      ))}
      <p className="last-version">Last revision April 11, 2022, at 11:16 PM</p>
    </div>
  );
}

export default HardwareMainContent;
