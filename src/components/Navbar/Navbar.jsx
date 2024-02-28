import React, { useEffect, useState } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavbarLinks from "../../constants/NavbarLinks";
import MiniNavbar from "./MiniNavbar";
import ExtraNavbar from "./ExtraNavbar";

export const navbarElements = () => {
  return NavbarLinks.map((link) => (
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
  ));
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [scrollDirection, setScrollDirection] = useState("up");

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);
    setScrollDirection(
      currentScrollPos < prevScrollPos && currentScrollPos > 100 ? "up" : "down"
    );
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <MiniNavbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollDirection={scrollDirection}
      />
      <ExtraNavbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollDirection={scrollDirection}
      />
    </>
  );
}

export default Navbar;
