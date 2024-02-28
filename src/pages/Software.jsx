import React from "react";
import "./software.css";
import { Helmet } from "react-helmet";

function Software() {
  return (
    <>
      <Helmet>
        <title>Software | Arduino</title>
        <meta name="description" content="Software application" />
      </Helmet>
      <div className="software-section">
        <div className="software-container">
          <div className="banners">
            <div className="banner-create">
              <div className="intro">
                <div className="title">Arduino Web Editor</div>
                <div className="text">
                  Start coding online and save your sketches in the cloud. The
                  most up-to-date version of the IDE includes all libraries and
                  also supports new Arduino boards.
                </div>
                <div className="actions">
                  <button>code online</button>
                  <button>getting started</button>
                </div>
              </div>
              <img src="img/Software/banner-create.png" alt="" />
            </div>
            <div className="ads-banner">
              <img src="img/ads.gif" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Software;
