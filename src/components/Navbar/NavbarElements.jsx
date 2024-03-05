import React from "react";
import { Link } from "react-router-dom";
import NavbarLinks from "../../constants/NavbarLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function NavbarElements({ setIsOpen }) {
  return (
    <div className="navbar-elements">
      {NavbarLinks.map((link) => (
        <Link
          to={link?.path}
          key={link.id}
          className="link"
          onClick={() => setIsOpen(false)}
        >
          <div className="link-title">
            {link.menuItem}
            {link?.subMenuItems && <FontAwesomeIcon icon={faCaretDown} />}
          </div>
          {link?.subMenuItems && (
            <div className="dropDown">
              {link.subMenuItems.map((element) => (
                <Link
                  to={element.path}
                  className="item"
                  key={element.id}
                  onClick={() => setIsOpen(false)}
                >
                  {element.item}
                </Link>
              ))}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default NavbarElements;
