import PropTypes from 'prop-types';

export default function EducationCard({ item }) {
  return (
    <article className="card education-card">
      <h3>{item.school}</h3>
      <p>{item.degree}</p>
      <p>{item.duration}</p>
    </article>
  );
}

EducationCard.propTypes = {
  item: PropTypes.shape({
    school: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
  }).isRequired,
};