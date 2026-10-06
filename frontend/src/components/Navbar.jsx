import { Link } from 'react-router-dom';
import { EVENT_PAGE_TITLE } from '../data/kendoData';

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#0f172a',
        padding: '16px 20px',
        borderBottom: '1px solid #1e293b',
      }}
    >
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/logo.png"
            alt="UBC Kendo Club"
            style={{ height: '64px', width: 'auto', display: 'block' }}
          />
        </Link>
        <div style={{ display: 'flex', gap: '14px', whiteSpace: 'nowrap' }}>
          <Link to="/" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: '500' }}>
            Home
          </Link>
          <Link
            to="/events"
            style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: '500' }}
          >
            {EVENT_PAGE_TITLE}
          </Link>
          <Link
            to="/contact"
            style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: '500' }}
          >
            Contact Us
          </Link>
          {/* INSTAGRAM LINK */}
          <a
            href="https://instagram.com/ubckendo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="UBC Kendo Instagram"
            style={{
              display: 'flex',
              alignItems: 'center',
              color: '#94a3b8',
              transition: 'color 0.2s',
            }}
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
