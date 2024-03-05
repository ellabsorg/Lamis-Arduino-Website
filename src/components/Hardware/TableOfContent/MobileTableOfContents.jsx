import React, { useState } from "react";
import { tableOfContents } from "../../../constants/Hardware";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function MiniTableOfContents({ scrollToSection }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className="table-of-content mobile-table-of-content"
      style={{ maxHeight: toggle ? "calc(100vh - 100px)" : "0px" }}
    >
      <h5 className="title">
        table of contents
        <FontAwesomeIcon
          icon={faCaretDown}
          size="lg"
          style={{ transform: toggle ? "rotate(-180deg)" : " rotate(0deg)" }}
          onClick={() => setToggle(!toggle)}
        />
      </h5>
      <div className="content-container" style={{display: toggle? 'block' : 'none'}}>
        <ul>
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
      </div>
    </div>
  );
}

export default MiniTableOfContents;
