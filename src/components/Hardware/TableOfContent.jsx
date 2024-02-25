import React from "react";
import { tableOfContents } from "../../constants/Hardware";
import { Link } from "react-router-dom";

function TableOfContent({ scrollToSection }) {
  return (
    <div className="table-of-content">
      <h5 className="title">table of content</h5>
      <ul className="content-container">
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
  );
}

export default TableOfContent;
