import React from "react";
import "./softwareRow.css";

function SoftwareRow({ data }) {
  const { description, downloadOptions } = data;

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
              {paragraph?.map((item) =>
                item.type === "simple" ? (
                  `${item.text}`
                ) : item.type === "link" ? (
                  <a href={item.href}>{item.text}</a>
                ) : (
                  <h4 id="source-code">{item.text}</h4>
                )
              )}
            </p>
          ))}
        </div>
      </div>

      <div className="download-options">
        <h3 className="download-options-title">download options</h3>
        <div className="download-links-groupe">{downloadOptions?.required}</div>
        <div className="download-links-groupe">
          {downloadOptions?.windows?.map((option) => (
            <a className="download-link" href={option.href}>
              <span className="title">Windows </span>
              <span className="description">{option.text}</span>
            </a>
          ))}
        </div>
        <div className="download-links-groupe">
          {downloadOptions?.windowsApp?.map((option) => (
            <a className="download-link" href={option.href}>
              <span className="title">Windows App </span>
              <span className="description">{option.text}</span>
            </a>
          ))}
        </div>
        <div className="download-links-groupe">
          {downloadOptions?.linux?.map((option) => (
            <a className="download-link" href={option.href}>
              <span className="title">Linux </span>
              <span className="description">{option.text}</span>
            </a>
          ))}
        </div>
        <div className="download-links-groupe">
          {downloadOptions?.macOs?.map((option) => (
            <a className="download-link" href={option.href}>
              <span className="title">macOs </span>
              <span className="description">{option.text}</span>
            </a>
          ))}
        </div>
        <div className="download-links-groupe">
          {downloadOptions?.macosX?.map((option) => (
            <a className="download-link" href={option.href}>
              <span className="title">Mac Os X</span>
              <span className="description">{option.text}</span>
            </a>
          ))}
        </div>
        <div className="version">{downloadOptions?.version}</div>
        <div className="release-notes">
          <a
            rel="noopener noreferrer"
            href={downloadOptions?.release_notes?.href}
          >
            {downloadOptions?.release_notes?.text}
          </a>
        </div>
        <div className="release-notes">
          <a rel="noopener noreferrer" href={downloadOptions?.checksums?.href}>
            {downloadOptions?.checksums?.text}
          </a>
        </div>
      </div>
    </div>
  );
}

export default SoftwareRow;
