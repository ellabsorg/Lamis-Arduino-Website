import React, { useState } from "react";
import { tableOfContents } from "../../../constants/Hardware";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function MiniTableOfContents({ scrollToSection }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" table-of-content mini-table-of-content">
      <h5 className="title">
        table of contents
        <FontAwesomeIcon
          icon={faCaretDown}
          size="lg"
          style={{ transform: toggle ? "rotate(-180deg)" : " rotate(0deg)" }}
          onClick={() => setToggle(!toggle)}
        />
      </h5>
      {toggle && (
        <ul className="content-container">
          {tableOfContents.map((item) => (
            <li className="content-link" key={item.id}>
              <Link
                to={`#${item.id}`}
                onClick={() => {
                  scrollToSection(item.id);
                  setToggle(false);
                }}
              >
                {item?.title}
              </Link>
              <ul>
                {item?.children?.map((child) => (
                  <li className="content-sublink" key={child.id}>
                    <Link
                      to={`#${child.id}`}
                      onClick={() => {
                        scrollToSection(child.id);
                        setToggle(false);
                      }}
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MiniTableOfContents;
