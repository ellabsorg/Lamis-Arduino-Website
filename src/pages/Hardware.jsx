import React from "react";
import TableOfContent from "../components/Hardware/TableOfContent";
import "./hardware.css";
import { Link } from "react-router-dom";
import { tableOfContents } from "../constants/Hardware";
import ContentSection from "../components/Hardware/ContentSection";
function Hardware() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = element.offsetTop - 100; // Adjusted offset
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="hardware-section">
      <div className="hardware-container">
        <TableOfContent scrollToSection={scrollToSection} />
        <div className="page-content">
          <h1 className="title">arduino hardware</h1>
          <p>
            Arduino has over the years released over 100 hardware products:
            boards, shields, carriers, kits and other accessories. In this page,
            you will find an overview of all active Arduino hardware, including
            the Nano, MKR and Classic families.
          </p>
          <hr />
          <Link to="/">
            <img src="img/Hardware/arduino-pro.jpg" alt="" />
          </Link>
          <hr />
          <Link to="/">
            <img src="img/Hardware/educational-kits.jpg" alt="" />
          </Link>
          {tableOfContents.map((section) => (
            <ContentSection section={section} />
          ))}
          <p className="last-version">
            Last revision April 11, 2022, at 11:16 PM
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hardware;
