import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCloud,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { navbarElements } from "./Navbar";
import MiniTableOfContents from "../Hardware/TableOfContent/MiniTableOfContents";
import { scrollToSection } from "../../pages/Hardware";

function MiniNavbar({ scrollDirection, isOpen, setIsOpen }) {
  return (
    <div
      className={
        scrollDirection === "up"
          ? "mini-navbar-section"
          : "mini-navbar-section-collapsed "
      }
    >
      <div className="first-level">
        <div className="first-level-left">
          <Link to="/" className="link">
            pro
          </Link>
          <Link to="/" className="link">
            edu
          </Link>
          <Link to="/" className="link">
            store
          </Link>
        </div>
        <div className="first-level-right">
          <div className="search">
            <FontAwesomeIcon icon={faSearch} />
            <input placeholder="Search on Arduino.cc" />
          </div>
          <Link to="/" className="link">
            <FontAwesomeIcon icon={faCloud} size="2xl" />
          </Link>
        </div>
      </div>

      {/* ----------------------------------- */}
      <div className="second-level">
        <Link to="/" className="link">
          <img id="logo" src="/img/arduino-logo-white.png" />
        </Link>

        <FontAwesomeIcon
          icon={isOpen ? faClose : faBars}
          size="2xl"
          className="menu-icon"
          onClick={() => setIsOpen(!isOpen)}
        />
        
        <div
          className="links mini-navbar-links"
          style={{ visibility: isOpen ? "visible" : "hidden" }}
        >
          {navbarElements()}
          <Link to="/" className="link signIn">
            Sign in
          </Link>
        </div>
      </div>
      <MiniTableOfContents scrollToSection={scrollToSection} />
    </div>
  );
}

export default MiniNavbar;
