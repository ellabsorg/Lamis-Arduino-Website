import React from "react";
import "./home.css";
import MainContent from "../components/Home/MainContent";
import LeftSide from "../components/Home/LeftSide";

function Home() {
  return (
    <div className="home-section">
      <div className="home-container">
        <LeftSide />
        <MainContent />
      </div>
    </div>
  );
}

export default Home;
