import React from "react";
import { Helmet } from "react-helmet";
import DesktopTableOfContents from "../components/TableOfContent/DesktopTableOfContents";
import "./hardware.css";
import HardwareMainContent from "../components/Hardware/HardwareMainContent";
import { HARDWARE_TOC } from "../constants/Hardware";

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
          <DesktopTableOfContents
            scrollToSection={scrollToSection}
            tableOfContents={HARDWARE_TOC}
          />
          <HardwareMainContent />
        </div>
      </div>
    </>
  );
}

export default Hardware;
