import TagList from '../ui/TagList.jsx';

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="card about-card">
          <div className="about-grid">
            <div className="about-photo-wrap">
              <img
                src="/profile.png"
                alt="Sankar Raghuthaman"
                className="about-photo"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="about-photo-placeholder" style={{ display: 'none' }}>
                Add your photo
              </div>
            </div>

            <div className="about-copy">
              <p className="eyebrow">About</p>
              <h2>About Me</h2>
              <p>
                I’m a Data Scientist / AI-ML Engineer focused on building practical machine
                learning systems that are both rigorous and usable. My work spans model development,
                evaluation, experimentation, LLM-powered workflows, and scalable data pipelines
                across research and production environments.
              </p>
              <p>
                I’m especially interested in problems where strong modeling, thoughtful
                experimentation, and real-world implementation all matter — whether in applied AI,
                analytics, experimentation tooling, or ML platform workflows.
              </p>

              <TagList
                items={[
                  'Machine Learning',
                  'LLM Workflows',
                  'Experimentation',
                  'Data Pipelines',
                  'Applied AI',
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}