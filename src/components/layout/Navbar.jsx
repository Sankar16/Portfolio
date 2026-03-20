import { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import siteConfig from '../../content/siteConfig.js';

const navItems = [
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Research', href: '#research' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setOpen(false);

  const handleSectionNav = (event, hash) => {
    event.preventDefault();
    closeMenu();

    if (location.pathname !== '/') {
      navigate(`/${hash}`);
      return;
    }

    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', hash);
    }
  };

  const renderLink = (item) => {
    if (item.href.startsWith('#')) {
      return (
        <a
          key={item.label}
          href={`/${item.href}`}
          onClick={(event) => handleSectionNav(event, item.href)}
          className={location.pathname === '/' && location.hash === item.href ? 'active' : ''}
        >
          {item.label}
        </a>
      );
    }

    return (
      <NavLink
        key={item.label}
        to={item.href}
        onClick={closeMenu}
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        {item.label}
      </NavLink>
    );
  };

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          {siteConfig.name}
        </Link>

        <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {navItems.map(renderLink)}
          <a className="resume-link" href={siteConfig.resumeUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
