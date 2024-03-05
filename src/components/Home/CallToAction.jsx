import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function CallToAction({ data }) {
  return (
    <Link
      to="/"
      className="cta-button"
      style={{ backgroundColor: data.backgroundColor }}
    >
      <div className="title">{data.title}</div>
      <div className="text">{data.text}</div>
      <div className="icon">
        <FontAwesomeIcon icon={data.icon} size="xl" />
      </div>
    </Link>
  );
}

export default CallToAction;
