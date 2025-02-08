import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Sankar Raghuthaman | All Rights Reserved</p>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/sankar-raghuthaman" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
        <a href="https://github.com/Sankar16" target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon" />
        </a>
        <a href="mailto:ysankarrag@gmail.com">
          <FaEnvelope className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
