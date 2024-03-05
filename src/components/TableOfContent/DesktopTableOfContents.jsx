import React from "react";
import { Link } from "react-router-dom";

function DesktopTableOfContents({ scrollToSection, tableOfContents }) {
  return (
    <div className="table-of-content desktop-table-of-content">
      <h5 className="title">table of contents</h5>
      <div className="content-container">
        <ul>
          {tableOfContents.map((item) => (
            <li className="content-link" key={item.id}>
              <Link to={`#${item.id}`} onClick={() => scrollToSection(item.id)}>
                {item?.title}
              </Link>
              <ul>
                {item?.children?.map((child) => (
                  <li className="content-sublink" key={child.id}>
                    <Link
                      to={`#${child.id}`}
                      onClick={() => scrollToSection(child.id)}
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

export default DesktopTableOfContents;
