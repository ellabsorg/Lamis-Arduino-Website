import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
import FooterLinks from "../constants/FooterLinks.js";
import { Link } from "react-router-dom";

function Footer() {
  const footerIcons = [
    {
      id: 1,
      icon: faFacebookF,
      url: "https://www.facebook.com/official.arduino",
    },
    {
      id: 2,
      icon: faInstagram,
      url: "https://www.instagram.com/arduino.cc/",
    },
    {
      id: 3,
      icon: faTwitter,
      url: "https://twitter.com/arduino",
    },
    {
      id: 4,
      icon: faGithub,
      url: "https://github.com/arduino/",
    },
    {
      id: 5,
      icon: faLinkedin,
      url: "https://www.linkedin.com/company/arduino/",
    },
    {
      id: 6,
      icon: faYoutube,
      url: "https://www.youtube.com/user/arduinoteam",
    },
  ];

  return (
    <div className="footer-section">
      <div className="footer-header">
        <div className="footer-header-left">ARDUINO</div>
        <div
          className="footer-header-right"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FontAwesomeIcon icon={faChevronUp} size="2xs" />
          Back to top
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-content-left">
          {FooterLinks["content-left"].map((item) => (
            <Link
              to={item.url}
              key={item.id}
              className={`footer-link link${item.id}`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="footer-content-center">
          <div className="title">newsletter</div>
          <div className="input-wrapper">
            <input type="email" placeholder="Enter your email to sign up" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
        <div className="footer-content-right">
          <div className="title">follow us</div>
          <div className="footer-icons">
            {footerIcons.map((item) => (
              <Link to={item.url} key={item.id} className="footer-icon">
                <FontAwesomeIcon icon={item.icon} size="md" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <Link to="/" className="copy-right footer-link">
          © 2024 Arduino
        </Link>
        <div className="footer-links">
          {FooterLinks.bottom.map((item) => (
            <Link to={item.url} key={item.id} className="footer-link">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
