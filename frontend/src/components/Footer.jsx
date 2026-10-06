import { Link } from 'react-router-dom';
import { EVENT_PAGE_TITLE, LOCATIONS } from '../data/kendoData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* BRAND / ABOUT */}
        <div>
          <h3 className="footer__brand-title">UBC Kendo Club</h3>
          <p className="footer__brand-text">
            Official University of British Columbia Kendo Club, established in 1978. Dedicated to
            practicing traditional Japanese kendo in Vancouver, BC.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="footer__heading">Navigation</h4>
          <ul className="footer__nav-list">
            <li>
              <Link to="/" className="footer__link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/events" className="footer__link">
                {EVENT_PAGE_TITLE}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer__link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* PRACTICE LOCATIONS */}
        <div>
          <h4 className="footer__heading">Practice Venues</h4>
          <ul className="footer__locations">
            {LOCATIONS.map((loc, idx) => (
              <li key={idx} className="footer__location">
                <span className="footer__location-name">{loc.name}</span>
              </li>
            ))}
          </ul>
          <p className="footer__address">
            University of British Columbia
            <br />
            Vancouver, BC V6T 1Z1
          </p>
        </div>

        {/* SOCIAL & CONTACT */}
        <div>
          <h4 className="footer__heading">Connect</h4>
          <div className="footer__social">
            <a
              href="https://instagram.com/ubckendo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer__social-link"
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
          <p className="footer__email">
            <a href="mailto:ubckendo@gmail.com" className="footer__email-link">
              ubckendo@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="footer__bottom">
        <p className="footer__bottom-text">
          © {new Date().getFullYear()} UBC Kendo Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
