import research from '../../content/research.js';
import Button from '../ui/Button.jsx';

export default function ResearchSection() {
  return (
    <section id="research" className="section section-soft">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Research & Publications</p>
          <h2>Selected Research</h2>
          <p className="section-description">
            A small selection of research-led work that complements my projects and applied engineering experience.
          </p>
        </div>

        <div className="project-grid">
          {research.map((item) => (
            <article key={item.title} className="card research-card">
              <h3>{item.title}</h3>
              <p><strong>Published in:</strong> {item.venue}</p>
              <p><strong>Date:</strong> {item.date}</p>
              <p>{item.summary}</p>

              {item.paperUrl ? (
                <div className="card-actions">
                  <Button
                    href={item.paperUrl}
                    variant="secondary"
                    external
                  >
                    {item.buttonLabel || 'Read Paper'}
                  </Button>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}