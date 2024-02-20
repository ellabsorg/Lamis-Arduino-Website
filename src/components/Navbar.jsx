import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCloud,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavbarLinks from "../constants/NavbarLinks";

function Navbar() {
  console.log({ NavbarLinks });
  return (
    <div className="navbar-section">
      <div className="navbar-container">
        <div className="first-level">
          <div className="first-level-left">
            <Link to="/" className="link">
              professional
            </Link>
            <Link to="/" className="link">
              education
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
            <Link to="/" className="link">
              Sign in
            </Link>
          </div>
        </div>
        <div className="second-level">
          <img id="logo" src="/img/arduino-logo-white.png" />

          <div className="links">
            {NavbarLinks.map((link) => (
              <Link to={link?.url} className="link" key={link.id}>
                {link.title}
                {link?.items && <FontAwesomeIcon icon={faCaretDown} />}
                {link?.items && (
                  <div className="dropDown">
                    {link.items.map((item) => (
                      <Link to={item.url} className="item">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
