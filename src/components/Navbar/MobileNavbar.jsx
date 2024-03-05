import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCloud,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MobileTableOfContents from "../TableOfContent/MobileTableOfContents";
import { scrollToSection } from "../../pages/Hardware";
import NavbarElements from "./NavbarElements";
import { ABOUT_TOC } from "../../constants/About";
import { HARDWARE_TOC } from "../../constants/Hardware";

function MobileNavbar({ scrollDirection, isOpen, setIsOpen }) {
  const pathName = window.location?.pathname;
  return (
    <div
      className={
        scrollDirection === "up"
          ? "mobile-navbar-section"
          : "mobile-navbar-section-collapsed "
      }
    >
      <div className="first-level">
        <div className="first-level-left">
          <Link to="https://www.arduino.cc/pro/" className="link">
            pro
          </Link>
          <Link to="https://www.arduino.cc/education" className="link">
            edu
          </Link>
          <Link
            to="https://store.arduino.cc/?_gl=1*mrhaxa*_ga*MTMwODU2OTc5MS4xNjk5MzUyNjMx*_ga_NEXN8H46L5*MTcwOTYyNzA0OC40NC4xLjE3MDk2MzA4NDEuMC4wLjA.*_fplc*Z3pEeDVaRGNEVFg1TFhmVWIzUTNRMXBrRU5DQTQzNjNQNmhSMSUyRlgxZXd2ekF4QkFJcWEyYXlPVHpZejhydjliMGgxN3pQRVdWdUJ3TWRwR2VNaFV0VCUyRjJvZXJHRk1ua1I3bzhjNWk3RyUyQlpyMFhrdkRoR29rbGhrdjRra2JBJTNEJTNE"
            className="link"
          >
            store
          </Link>
        </div>
        <div className="first-level-right">
          <div className="search">
            <FontAwesomeIcon icon={faSearch} />
            <input placeholder="Search on Arduino.cc" />
          </div>
          <Link
            to="https://app.arduino.cc/?_gl=1*1ctalio*_ga*MTMwODU2OTc5MS4xNjk5MzUyNjMx*_ga_NEXN8H46L5*MTcwOTYyNzA0OC40NC4xLjE3MDk2MzA4NTEuMC4wLjA.*_fplc*Z3pEeDVaRGNEVFg1TFhmVWIzUTNRMXBrRU5DQTQzNjNQNmhSMSUyRlgxZXd2ekF4QkFJcWEyYXlPVHpZejhydjliMGgxN3pQRVdWdUJ3TWRwR2VNaFV0VCUyRjJvZXJHRk1ua1I3bzhjNWk3RyUyQlpyMFhrdkRoR29rbGhrdjRra2JBJTNEJTNE"
            className="link"
          >
            <FontAwesomeIcon icon={faCloud} size="2xl" />
          </Link>
        </div>
      </div>

      {/* ----------------------------------- */}
      <div className="second-level">
        <Link to="/" className="link">
          <img id="logo" src="/img/arduino-logo-white.png" />
        </Link>

        <FontAwesomeIcon
          icon={isOpen ? faClose : faBars}
          size="2xl"
          className="menu-icon"
          onClick={() => setIsOpen(!isOpen)}
        />

        <div
          className="links mobile-navbar-links"
          style={{ visibility: isOpen ? "visible" : "hidden" }}
        >
          <NavbarElements setIsOpen={setIsOpen} />
          <Link
            to="https://login.arduino.cc/login?state=hKFo2SA3NTdsSEtMMW1TekFTS0dkRDZCcHotVVBiMHFVekVCZKFupWxvZ2luo3RpZNkgUDFjRVMxODVBWEg4UHJIT1FDU0dwMnNfbXpNZXhfX0WjY2lk2SAzMHNVSTFQSHNvWHp3SjlLaURxWUlkTW1JanNxeGlIWA&client=30sUI1PHsoXzwJ9KiDqYIdMmIjsqxiHX&protocol=oauth2&authorizeTimeoutInSeconds=5&redirect_uri=https%3A%2F%2Fwww.arduino.cc&audience=https%3A%2F%2Fapi.arduino.cc&scope=openid+profile+email&skipAutoLogin=true&response_type=code&response_mode=query&nonce=VHZYRElFdmhzbkZfRjZLRUlpVVBPVWVnQ1A0QkpwcG83N1NvOU1kS0pYag%3D%3D&code_challenge=c8xGZSKcdIuKhEF8UlakkpTiA4ppZ2fK10AA_ggyxcQ&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuMTIuMSJ9#/sso/login"
            className="link signIn"
          >
            Sign in
          </Link>
        </div>
      </div>
      {pathName === "/hardware" && (
        <MobileTableOfContents
          scrollToSection={scrollToSection}
          tableOfContents={HARDWARE_TOC}
        />
      )}
      {pathName === "/about" && (
        <MobileTableOfContents
          scrollToSection={scrollToSection}
          tableOfContents={ABOUT_TOC}
        />
      )}
    </div>
  );
}

export default MobileNavbar;
