import React from "react";
import { Helmet } from "react-helmet";
import DesktopTableOfContents from "../components/TableOfContent/DesktopTableOfContents";
import "../components/TableOfContent/tableOfContents.css";
import "./about.css";
import { ABOUT_TOC } from "../constants/About";
import { scrollToSection } from "./Hardware";
import AboutMainContent from "../components/About/AboutMainContent";

function About() {
  return (
    <>
      <Helmet>
        <title>About arduino | Arduino</title>
        <meta
          name="description"
          content="Open-source electronic prototyping platform enabling users to create interactive electronic objects."
        />
      </Helmet>
      <div className="hardware-section">
        <div className="hardware-container">
          <DesktopTableOfContents
            scrollToSection={scrollToSection}
            tableOfContents={ABOUT_TOC}
          />
          <AboutMainContent />
        </div>
      </div>
    </>
  );
}

export default About;
