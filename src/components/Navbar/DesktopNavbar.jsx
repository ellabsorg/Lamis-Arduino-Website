import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCloud,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavbarElements from "./NavbarElements";

function DesktopNavbar({ scrollDirection, isOpen, setIsOpen }) {
  return (
    <div
      className={
        scrollDirection === "up"
          ? "desktop-navbar-section"
          : "desktop-navbar-section-collapsed"
      }
    >
      <div className="first-level">
        <div className="first-level-left">
          <Link to="/professional" className="link">
            professional
          </Link>
          <Link to="/education" className="link">
            education
          </Link>
          <Link to="/store" className="link">
            store
          </Link>
        </div>
        <div className="first-level-right">
          <div className="search">
            <FontAwesomeIcon icon={faSearch} />
            <input placeholder="Search on Arduino.cc" />
          </div>
          <Link to="/cloud" className="link">
            <FontAwesomeIcon icon={faCloud} size="2x" />
          </Link>
          <Link to="/signin" className="link">
            Sign in
          </Link>
        </div>
      </div>

      <div className="second-level">
        <Link to="/" className="link">
          <img id="logo" src="/img/arduino-logo-white.png" alt="Arduino Logo" />
        </Link>

        <div className="links desktop-navbar-links">
          <NavbarElements setIsOpen={setIsOpen} />
        </div>

        <FontAwesomeIcon
          icon={isOpen ? faClose : faBars}
          size="2x"
          className="menu-icon"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </div>
  );
}

export default DesktopNavbar;
