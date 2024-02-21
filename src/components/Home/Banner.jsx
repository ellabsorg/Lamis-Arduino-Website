import React from "react";
import { Link } from "react-router-dom";

function Banner({ data }) {
  return (
    <Link to="/" className="banner">
      <img src={data.imgURL} />
    </Link>
  );
}

export default Banner;
