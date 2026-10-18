import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { EVENT_PAGES } from '../data/kendoData';

export default function Navbar() {
  const [eventsOpen, setEventsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const eventsRef = useRef(null);
  const canHover = () => window.matchMedia('(hover: hover)').matches;

  const closeMenus = () => {
    setMenuOpen(false);
    setEventsOpen(false);
  };

  useEffect(() => {
    if (!eventsOpen) return;
    const handleClick = (e) => {
      if (eventsRef.current && !eventsRef.current.contains(e.target)) setEventsOpen(false);
    };
    const handleKey = (e) => {
      if (e.key === 'Escape') setEventsOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [eventsOpen]);

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" onClick={closeMenus}>
          <img src="/UBCKendo_LogoTransparent.png" className="navbar__logo" />
          <span className="navbar__brand-text">UBC KENDO</span>
        </Link>
        <button
          type="button"
          className={`navbar__toggle${menuOpen ? ' navbar__toggle--open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>
        <div className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          <Link to="/" className="navbar__link" onClick={closeMenus}>
            about
          </Link>
          <div
            className="navbar__dropdown"
            ref={eventsRef}
            onMouseEnter={() => canHover() && setEventsOpen(true)}
            onMouseLeave={() => canHover() && setEventsOpen(false)}
          >
            <button
              type="button"
              className="navbar__link navbar__dropdown-toggle"
              aria-expanded={eventsOpen}
              onClick={() => setEventsOpen((open) => (canHover() ? true : !open))}
            >
              events <span aria-hidden="true">▾</span>
            </button>
            {eventsOpen && (
              <ul className="navbar__dropdown-menu">
                {EVENT_PAGES.map((page) => (
                  <li key={page.path}>
                    <Link to={page.path} className="navbar__dropdown-item" onClick={closeMenus}>
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Link to="/merch" className="navbar__link" onClick={closeMenus}>
            merch
          </Link>
          <Link to="/contact" className="navbar__link" onClick={closeMenus}>
            contact
          </Link>
          {/* INSTAGRAM LINK */}
          <a
            href="https://instagram.com/ubckendo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="UBC Kendo Instagram"
            className="navbar__social-link"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
