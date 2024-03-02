import React, { useEffect, useState } from "react";
import "./navbar.css";
import MiniNavbar from "./MiniNavbar";
import ExtraNavbar from "./ExtraNavbar";



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [scrollDirection, setScrollDirection] = useState("up");

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setScrollDirection(
      currentScrollPos < prevScrollPos && currentScrollPos >= 0 ? "up" : "down"
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
      <ExtraNavbar scrollDirection={scrollDirection} />
    </>
  );
}

export default Navbar;
