import React, { useEffect, useState } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCloud,
  faCaretDown,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavbarLinks from "../constants/NavbarLinks";

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [scrollDirection, setScrollDirection] = useState("");

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setScrollDirection(currentScrollPos > prevScrollPos ? "down" : "up");
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]); 

  return (
    <div
      className={
        scrollDirection === "up"
          ? "navbar-section"
          : "navbar-section-collapsed "
      }
    >
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

      {/* ----------------------------------- */}
      <div className="second-level">
        <Link to="/"  className="link">
          <img id="logo" src="/img/arduino-logo-white.png" />
        </Link>

        <div
          className="links"
          style={{ visibility: isOpen ? "visible" : "hidden" }}
        >
          {NavbarLinks.map((link) => (
            <Link to={link?.url} className="link" key={link.id}>
              <div className="link-title">
                {link.title}
                {link?.items && <FontAwesomeIcon icon={faCaretDown} />}
              </div>
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
        <FontAwesomeIcon
          icon={isOpen ? faClose : faBars}
          size="2xl"
          className="menu-icon"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </div>
  );
}

export default Navbar;
