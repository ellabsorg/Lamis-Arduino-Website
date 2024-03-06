import React from "react";
import ColumnsTable from "./ColumnsTable";

function HardwareContentSection({ section }) {
  return (
    <>
      <hr />
      <div id={section.id} className="content-section" key={section.id}>
        <h2 className="title">{section.title}</h2>
        {section.text?.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
        {section?.table && <ColumnsTable table={section?.table} />}
        {section?.children &&
          section.children.map((child) => (
            <div id={child.id}>
              <h3 className="subtitle">{child.title}</h3>
              <ColumnsTable table={child.table} />
            </div>
          ))}
      </div>
    </>
  );
}

export default HardwareContentSection;
