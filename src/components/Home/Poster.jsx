import React from "react";
import { Link } from "react-router-dom";

function Poster({data}) {
  return (
    <Link to="/" className="post">
      <img src={data.imgURL} />
      <div className="description">{data.description}</div>
      <div className="blog">blog</div>
    </Link>
  );
}

export default Poster;
