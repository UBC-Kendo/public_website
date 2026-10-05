import { Link } from 'react-router-dom';
import { EVENT_PAGE_TITLE, LOCATIONS } from '../data/kendoData';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#0f172a',
        color: '#94a3b8',
        padding: '48px 20px 24px',
        borderTop: '1px solid #1e293b',
        marginTop: '80px',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '32px',
          marginBottom: '40px',
        }}
      >
        {/* BRAND / ABOUT */}
        <div>
          <h3
            style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 12px 0', fontWeight: 'bold' }}
          >
            UBC Kendo Club
          </h3>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
            Official University of British Columbia Kendo Club, established in 1978. Dedicated to
            practicing traditional Japanese kendo in Vancouver, BC.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4
            style={{
              color: '#fff',
              fontSize: '0.95rem',
              margin: '0 0 12px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Navigation
          </h4>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              fontSize: '0.9rem',
            }}
          >
            <li>
              <Link to="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/events" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                {EVENT_PAGE_TITLE}
              </Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* PRACTICE LOCATIONS */}
        <div>
          <h4
            style={{
              color: '#fff',
              fontSize: '0.95rem',
              margin: '0 0 12px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Practice Venues
          </h4>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 8px 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              fontSize: '0.9rem',
            }}
          >
            {LOCATIONS.map((loc, idx) => (
              <li key={idx} style={{ lineHeight: '1.4' }}>
                <span style={{ color: '#cbd5e1' }}>{loc.name}</span>
              </li>
            ))}
          </ul>
          <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
            University of British Columbia
            <br />
            Vancouver, BC V6T 1Z1
          </p>
        </div>

        {/* SOCIAL & CONTACT */}
        <div>
          <h4
            style={{
              color: '#fff',
              fontSize: '0.95rem',
              margin: '0 0 12px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Connect
          </h4>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '12px' }}>
            <a
              href="https://instagram.com/ubckendo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{
                color: '#94a3b8',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.9rem',
              }}
            >
              <svg
                width="18"
                height="18"
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
              @ubckendo
            </a>
          </div>
          <p style={{ fontSize: '0.9rem', margin: 0 }}>
            <a
              href="mailto:ubckendo@gmail.com"
              style={{ color: '#94a3b8', textDecoration: 'none' }}
            >
              ubckendo@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          paddingTop: '24px',
          borderTop: '1px solid #1e293b',
          textAlign: 'center',
          fontSize: '0.85rem',
        }}
      >
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} UBC Kendo Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
