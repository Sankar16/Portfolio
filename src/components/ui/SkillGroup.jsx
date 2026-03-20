import PropTypes from 'prop-types';

export default function SkillGroup({ group }) {
  return (
    <article className="card skill-group">
      <h3>{group.category}</h3>
      <div className="skill-items">
        {group.items.map((item) => (
          <span key={item} className="skill-pill">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

SkillGroup.propTypes = {
  group: PropTypes.shape({
    category: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};