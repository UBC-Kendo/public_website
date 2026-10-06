import { Link } from 'react-router-dom';
import { EVENT_PAGE_TITLE } from '../data/kendoData';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          <img src="/logo.png" alt="UBC Kendo Club" className="navbar__logo" />
        </Link>
        <div className="navbar__links">
          <Link to="/" className="navbar__link">
            Home
          </Link>
          <Link to="/events" className="navbar__link">
            {EVENT_PAGE_TITLE}
          </Link>
          <Link to="/contact" className="navbar__link">
            Contact Us
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
              width="20"
              height="20"
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
