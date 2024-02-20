import React from "react";
import HomeData from "../../constants/Home";
import { Link } from "react-router-dom";

function MainContent() {
  return (
    <div className="main-content">
      {HomeData.map((item) =>
        item.type === "banner" ? (
          <Link to="/" className="banner" key={item.id}>
            <img src={item.imgURL} />
          </Link>
        ) : (
          <Link to="/" className="post">
            <img src={item.imgURL} />
            <div className="description">{item.description}</div>
            <div className="blog">blog</div>
          </Link>
        )
      )}
    </div>
  );
}

export default MainContent;
