import React from "react";
import RowsTable from "../About/RowsTable";
import ColumnsTable from "../Hardware/ColumnsTable";

function AboutContentSection({ section }) {
  return (
    <>
      <div id={section.id} className="content-section" key={section.id}>
        <h2 className="title">{section.title}</h2>
        {section.paragraphs?.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
        {section?.table &&
          (section.table?.columns ? (
            <ColumnsTable table={section.table} />
          ) : (
            <RowsTable table={section.table} />
          ))}
        {section?.children &&
          section.children.map((child, index) => (
            <div id={child.id} key={index}>
              <h3 className="subtitle">{child.title}</h3>
              {child.paragraphs?.map((paragraph) => (
                <p>{paragraph}</p>
              ))}
              {child?.tables?.map((table) => (
                <>
                  {table?.columns ? (
                    <ColumnsTable table={table} />
                  ) : (
                    <RowsTable table={table} />
                  )}
                </>
              ))}
            </div>
          ))}
      </div>
    </>
  );
}

export default AboutContentSection;
