import PropTypes from 'prop-types';

export default function TagList({ items }) {
  return (
    <div className="tag-list">
      {items.map((item) => (
        <span key={item} className="tag-chip">
          {item}
        </span>
      ))}
    </div>
  );
}

TagList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};