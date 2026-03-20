import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Button({ children, href, to, variant = 'primary', external = false }) {
  const className = `button button-${variant}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={className}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  to: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  external: PropTypes.bool,
};