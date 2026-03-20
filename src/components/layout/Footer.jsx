import siteConfig from '../../content/siteConfig.js';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-centered">
        <p className="footer-copyright">
          © 2025 Sankar Raghuthaman | All Rights Reserved
        </p>

        <div className="footer-links footer-icon-links">
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}