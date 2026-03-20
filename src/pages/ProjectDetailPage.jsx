import PropTypes from 'prop-types';
import { Navigate, useParams } from 'react-router-dom';
import projects from '../content/projects.js';
import Button from '../components/ui/Button.jsx';
import TagList from '../components/ui/TagList.jsx';

function DetailBlock({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="detail-block">
      <h3>{title}</h3>
      <ul className="bullet-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

DetailBlock.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <section className="section page-offset">
      <div className="container project-detail-layout">
        <div className="project-detail-header">
          <div className="card-actions" style={{ marginBottom: '1rem' }}>
            <Button to="/projects" variant="ghost">
              ← Back to Projects
            </Button>
          </div>

          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p className="project-detail-summary">{project.overview}</p>

          <TagList items={project.stack} />

          <div className="card-actions">
            {project.githubUrl ? (
              <Button href={project.githubUrl} variant="secondary" external>
                GitHub
              </Button>
            ) : null}

            {project.demoUrl ? (
              <Button href={project.demoUrl} variant="secondary" external>
                Live Demo
              </Button>
            ) : null}
          </div>
        </div>

        <div className="detail-block">
          <h3>Problem</h3>
          <p>{project.problem}</p>
        </div>

        <DetailBlock title="What I Built" items={project.built} />
        <DetailBlock title="Technical Approach" items={project.approach} />
        <DetailBlock title="Outcomes" items={project.outcomes} />
        <DetailBlock title="Key Learnings" items={project.learnings} />
      </div>
    </section>
  );
}