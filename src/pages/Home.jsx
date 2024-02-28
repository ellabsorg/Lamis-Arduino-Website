import React from "react";
import "./home.css";
import MainContent from "../components/Home/MainContent";
import LeftSide from "../components/Home/LeftSide";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
    <Helmet>
      <title>Arduino - Home</title>
      <meta name="description" content="Home application" />
    </Helmet>
    <div className="home-section">
      <div className="home-container">
        <LeftSide />
        <MainContent />
      </div>
    </div>
    </>
  );
}

export default Home;
