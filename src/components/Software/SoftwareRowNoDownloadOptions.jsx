import React from "react";
import "./softwareRow.css";

function SoftwareRowNoDownloadOptions({ data }) {
  const { description, downloadOptions } = data;
  console.log(description);

  return (
    <div className="software-row">
      <div className="download-desc">
        <div className="download-desc-title-wrapper">
          {downloadOptions && (
            <img src={description?.icon} alt="Software Icon" />
          )}
          <h1 className="download-desc-title">{description?.header}</h1>
        </div>
        <div className="download-desc-text">
          {description?.paragraphs?.map((paragraph, index) => (
            <p className="paragraph" key={index}>
              {paragraph.map((item, itemIndex) =>
                item.type === "simple" ? (
                  `${item.text}`
                ) : (
                  <a href={item.href} key={itemIndex}>
                    {item.text}
                    <span>{item.descp}</span>
                  </a>
                )
              )}
            </p>
          ))}

          {description?.links?.map((link, index) => (
            <p className="paragraph" key={index}>
              <a href={link.href} key={index}>
                {link.text}
                <span>{link.descp}</span>
              </a>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SoftwareRowNoDownloadOptions;
