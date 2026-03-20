import PropTypes from 'prop-types';
import TagList from './TagList.jsx';

export default function ExperienceCard({ item }) {
  return (
    <article className="card experience-card">
      <div className="role-heading">
        <div>
          <h3>{item.role}</h3>
          <p>{item.company}</p>
        </div>
        <span className="role-duration">{item.duration}</span>
      </div>

      <p className="role-description">{item.description}</p>

      <ul className="bullet-list">
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>

      <TagList items={item.tools} />
    </article>
  );
}

ExperienceCard.propTypes = {
  item: PropTypes.shape({
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};