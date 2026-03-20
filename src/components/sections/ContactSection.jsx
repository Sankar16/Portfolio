import Button from '../ui/Button.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import siteConfig from '../../content/siteConfig.js';

export default function ContactSection() {
  return (
    <section id="contact" className="section section-contact">
      <div className="container narrow-section">
        <div className="card contact-card">
          <SectionHeader title={siteConfig.contactTitle} description={siteConfig.contactText} />
          <div className="contact-actions">
            <Button href={`mailto:${siteConfig.email}`} variant="primary">Email Me</Button>
            <Button href={siteConfig.linkedinUrl} variant="secondary" external>LinkedIn</Button>
            <Button href={siteConfig.resumeUrl} variant="secondary" external>Download Resume</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
