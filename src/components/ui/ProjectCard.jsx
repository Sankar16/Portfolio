import PropTypes from 'prop-types';
import Button from './Button.jsx';
import TagList from './TagList.jsx';

export default function ProjectCard({ project, compact = false }) {
  return (
    <article className={`card project-card ${compact ? 'project-card-compact' : ''}`}>
      <div className="project-meta-row">
        <span className="project-category">{project.category}</span>
      </div>

      <h3>{project.title}</h3>
      <p className="project-summary">{project.summary}</p>
      <p className="project-why">
        <strong>Why it matters:</strong> {project.whyItMatters}
      </p>

      <TagList items={project.stack} />

      <div className="card-actions">
        <Button to={`/projects/${project.slug}`} variant="primary">
          View Details
        </Button>

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
    </article>
  );
}

ProjectCard.propTypes = {
  compact: PropTypes.bool,
  project: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    whyItMatters: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubUrl: PropTypes.string,
    demoUrl: PropTypes.string,
  }).isRequired,
};