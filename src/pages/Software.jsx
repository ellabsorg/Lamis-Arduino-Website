import React from "react";
import "./software.css";
import { Helmet } from "react-helmet";
import SoftwareRow from "../components/Software/SoftwareRow";
import Banners from "../components/Software/Banners";
import DownloadOptions from "../constants/Software";

function Software() {
  return (
    <>
      <Helmet>
        <title>Software | Arduino</title>
        <meta name="description" content="Software application" />
      </Helmet>
      <div className="software-section">
        <div className="software-container">
          <Banners />
          <h1 className="software-title">Downloads</h1>
          <SoftwareRow data={DownloadOptions.ArduinoIDE232} />
          <Software data={DownloadOptions.arduino} />
          <SoftwareRow data={DownloadOptions.ArduinoPLC103} />
          <SoftwareRow data={DownloadOptions.ArduinoIDE1819} />
        </div>
      </div>
    </>
  );
}

export default Software;
