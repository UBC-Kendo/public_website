import { Link } from 'react-router-dom';

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
        <Link
          to="/"
          style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem' }}
        >
          UBC KENDO
        </Link>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: '500' }}>
            Home
          </Link>
          <Link
            to="/contact"
            style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: '500' }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
