import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found">
      <title>UBC Kendo Club | Page not found</title>
      <h1 className="not-found__title">Page not found</h1>
      <p className="not-found__text">The page you are looking for does not exist.</p>
      <Link to="/" className="not-found__link">
        Back to Home
      </Link>
    </div>
  );
}
