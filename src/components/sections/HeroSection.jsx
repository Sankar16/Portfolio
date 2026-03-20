import { motion } from 'framer-motion';
import Button from '../ui/Button.jsx';
import TagList from '../ui/TagList.jsx';
import siteConfig from '../../content/siteConfig.js';

export default function HeroSection() {
  return (
    <section className="hero-section section">
      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <p className="eyebrow">{siteConfig.location}</p>
          <h1>{siteConfig.headline}</h1>
          <p className="hero-copy">{siteConfig.subheadline}</p>

          <div className="hero-actions">
            <Button to="/projects">View Projects</Button>
            <Button href={siteConfig.resumeUrl} variant="secondary" external>
              Download Resume
            </Button>
            <Button href={siteConfig.githubUrl} variant="ghost" external>
              GitHub
            </Button>
            <Button href={siteConfig.linkedinUrl} variant="ghost" external>
              LinkedIn
            </Button>
          </div>

          <TagList items={siteConfig.heroTags} />
        </motion.div>

        <motion.aside
          className="card hero-aside hero-aside-tint"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="mini-label">Professional Snapshot</p>
          <h2>{siteConfig.title}</h2>
          <ul className="snapshot-list">
            <li>ML systems and evaluation workflows</li>
            <li>LLM applications and retrieval / ranking pipelines</li>
            <li>Scalable data pipelines and production-minded implementation</li>
            <li>Research-heavy and real-world problem solving</li>
          </ul>
        </motion.aside>
      </div>
    </section>
  );
}