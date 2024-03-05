import React from "react";
import { aboutMainContent } from "../../constants/About";
import ContentSection from "../Hardware/ContentSection";

function AboutMainContent() {
  return (
    <div className="page-content">
      <h1 className="title">About Arduino</h1>
      
      {aboutMainContent.map((section) => (
        <ContentSection section={section} />
      ))}
      <p className="last-version">Last revision April 11, 2022, at 11:16 PM</p>
    </div>
  );
}

export default AboutMainContent;