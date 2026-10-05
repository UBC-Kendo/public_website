import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '80px auto',
        padding: '0 20px',
        textAlign: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ color: '#0f172a' }}>Page not found</h1>
      <p style={{ color: '#64748b' }}>The page you are looking for does not exist.</p>
      <Link to="/" style={{ color: '#2563eb', fontWeight: 'bold', textDecoration: 'none' }}>
        Back to Home
      </Link>
    </div>
  );
}