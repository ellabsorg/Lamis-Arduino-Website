import React from "react";
import HomeData from "../../constants/Home";
import Banner from "./Banner";
import Poster from "./Poster";

function MainContent() {
  return (
    <div className="main-content">
      {HomeData.map((item) =>
        item.type === "banner" ? (
          <Banner data={item} key={item.id} />
        ) : (
          <Poster data={item} key={item.id} />
        )
      )}
    </div>
  );
}

export default MainContent;
