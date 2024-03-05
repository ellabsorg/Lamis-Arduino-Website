import React from "react";
import "./software.css";
import { Helmet } from "react-helmet";
import SoftwareRow from "../components/Software/SoftwareRow";
import Banners from "../components/Software/Banners";
import DownloadOptions from "../constants/Software";
import SoftwareRowNoDownloadOptions from "../components/Software/SoftwareRowNoDownloadOptions";

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
          <SoftwareRowNoDownloadOptions data={DownloadOptions.NightlyBuilds} />
          <hr></hr>

          <SoftwareRowNoDownloadOptions
            data={DownloadOptions.ArduinoChromebook}
          />
          <hr></hr>
          <SoftwareRowNoDownloadOptions data={DownloadOptions.MicroPython} />
          <hr></hr>

          <SoftwareRow data={DownloadOptions.ArduinoPLC103} />
          <hr></hr>
          <h2 className="software-subtitle">Legacy IDE (1.8.X)</h2>
          <SoftwareRow data={DownloadOptions.ArduinoIDE1819} />
          <SoftwareRowNoDownloadOptions
            data={DownloadOptions.PreviousReleases}
          />
        </div>
      </div>
    </>
  );
}

export default Software;
