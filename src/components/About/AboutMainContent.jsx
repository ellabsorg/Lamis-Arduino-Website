import React from "react";
import { aboutMainContent } from "../../constants/About";
import AboutContentSection from "./AboutContentSection";

function AboutMainContent() {
  return (
    <div className="page-content">
      <h1 className="title">About Arduino</h1>

      {aboutMainContent.map((section) => (
        <AboutContentSection section={section} key={section.id} />
      ))}
      <div id="distributors" className="content-section">
        <h2 className="title">Our Distributors</h2>
        <ul>
          <li>
            For a full list of Arduino-authorized distributors for PRO and Maker
            lines, click{" "}
            <a href="https://store.arduino.cc/pages/distributors?_gl=1*7pxjpr*_ga*MTMwODU2OTc5MS4xNjk5MzUyNjMx*_ga_NEXN8H46L5*MTcwOTYyNzA0OC40NC4xLjE3MDk2MzQwMzkuMC4wLjA.">
              here
            </a>
          </li>
          <li>
            Official distributors for Arduino Education products are listed{" "}
            <a href="https://www.arduino.cc/education/partners.">here</a>
          </li>
        </ul>
      </div>

      <p className="last-version">
        Last revision September 15 2021, at 02:15 PM
      </p>
    </div>
  );
}

export default AboutMainContent;
