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
          to={link?.url}
          className="link"
          key={link.id}
          onClick={() => setIsOpen(false)}
        >
          <div className="link-title">
            {link.title}
            {link?.items && <FontAwesomeIcon icon={faCaretDown} />}
          </div>
          {link?.items && (
            <div className="dropDown">
              {link.items.map((item) => (
                <Link
                  to={item.url}
                  className="item"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
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
