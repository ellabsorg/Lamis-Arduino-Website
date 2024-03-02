import React from "react";
import "./hardware.css";
import { Link } from "react-router-dom";
import ContentSection from "../components/Hardware/ContentSection";
import { Helmet } from "react-helmet";
import ExtraTableOfContents from "../components/Hardware/TableOfContent/ExtraTableOfContents";
import { tableOfContents } from "../constants/Hardware";
import "../components/Hardware/TableOfContent/tableOfContents.css";

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
        <meta name="description" content="Hardware application" />
      </Helmet>
      <div className="hardware-section">
        <div className="hardware-container">
          <ExtraTableOfContents scrollToSection={scrollToSection} />
          <div className="page-content">
            <h1 className="title">arduino hardware</h1>
            <p>
              Arduino has over the years released over 100 hardware products:
              boards, shields, carriers, kits and other accessories. In this
              page, you will find an overview of all active Arduino hardware,
              including the Nano, MKR and Classic families.
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
    </>
  );
}

export default Hardware;
