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
import { AllFooterLinks } from "../constants/FooterLinks.js";

function Footer() {
  const footerIcons = [
    {
      id: "facebook",
      icon: faFacebookF,
      url: "https://www.facebook.com/official.arduino",
    },
    {
      id: "instgram",
      icon: faInstagram,
      url: "https://www.instagram.com/arduino.cc/",
    },
    {
      id: "twitter",
      icon: faTwitter,
      url: "https://twitter.com/arduino",
    },
    {
      id: "github",
      icon: faGithub,
      url: "https://github.com/arduino/",
    },
    {
      id: "linkedIn",
      icon: faLinkedin,
      url: "https://www.linkedin.com/company/arduino/",
    },
    {
      id: "youtube",
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
          <p>Back to top</p>
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
          <div className="footer-title">newsletter</div>
          <div className="input-wrapper">
            <input type="email" placeholder="Enter your email to sign up" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
        <div className="footer-content-right">
          <div className="footer-title">follow us</div>
          <div className="footer-icons">
            {footerIcons.map((item) => (
              <Link
                to={item.url}
                key={item.id}
                id={item.id}
                className="footer-icon "
              >
                <FontAwesomeIcon icon={item.icon} size="md" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mini-footer-links">
        {AllFooterLinks.map((item) => (
          <Link
            to={item.url}
            key={item.id}
            className={`footer-link div${item.id}`}
          >
            {item.title}
          </Link>
        ))}
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
