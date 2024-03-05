import React from "react";
import { Helmet } from "react-helmet";
import ExtraTableOfContents from "../components/Hardware/TableOfContent/DesktopTableOfContents";
import "../components/Hardware/TableOfContent/tableOfContents.css";
import "./hardware.css";
import HardwareMainContent from "../components/Hardware/HardwareMainContent";

export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = element.offsetTop - 100; // Adjusted offset
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }
};

function Hardware() {
  return (
    <>
      <Helmet>
        <title>Hardware | Arduino</title>
        <meta
          name="description"
          content="Open-source electronic prototyping platform enabling users to create interactive electronic objects."
        />
      </Helmet>
      <div className="hardware-section">
        <div className="hardware-container">
          <ExtraTableOfContents scrollToSection={scrollToSection} />
          <HardwareMainContent />
        </div>
      </div>
    </>
  );
}

export default Hardware;
