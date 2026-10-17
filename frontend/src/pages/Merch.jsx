import { Link } from 'react-router-dom';
import { MERCH_ITEMS } from '../data/kendoData';

export default function Merch() {
  return (
    <div className="merch">
      <div className="merch__inner">
        <h1 className="merch__title">Merch</h1>
        <div className="merch__gallery">
          {MERCH_ITEMS.map((item) => (
            <img key={item.name} src={item.image} alt={item.name} className="merch__item" />
          ))}
        </div>
        <p className="merch__text">
          Interested in buying something?{' '}
          <Link to="/contact" className="merch__link">
            Contact us
          </Link>{' '}
          and we will get back to you.
        </p>
      </div>
    </div>
  );
}
