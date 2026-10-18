import './Events.css';
import { EVENT_DATA, TAIKAI_EVENTS } from '../data/kendoData';

const formatDate = (iso, endIso) => {
  const [y, m, d] = iso.split('-');
  const range = endIso ? `-${endIso.split('-')[2]}` : '';
  const year = y === String(new Date().getFullYear()) ? '' : `.${y.slice(2)}`;
  return `${m}.${d}${range}${year}`;
};

function TimelineList({ items, highlightFirst }) {
  return (
    <ol className="timeline__list">
      {items.map((item, i) => (
        <li
          key={`${item.date}-${item.title}`}
          className={`timeline__item${highlightFirst && i === 0 ? ' timeline__item--highlight' : ''}`}
        >
          <div className="timeline__row">
            <span className="timeline__date">{formatDate(item.date, item.endDate)}</span>
            <span className="timeline__line" />
          </div>
          <p className="timeline__title">{item.title}</p>
        </li>
      ))}
    </ol>
  );
}

export default function Taikai() {
  const { hasActiveEvent, title, date, location, description, bracketUrl } = EVENT_DATA;

  const today = new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD
  const sorted = [...TAIKAI_EVENTS].sort((a, b) => a.date.localeCompare(b.date));
  const upcoming = sorted.filter((e) => e.date >= today);
  const past = sorted.filter((e) => e.date < today).reverse();

  return (
    <div className="events">
      <h1 className="events__title">Taikai</h1>

      {hasActiveEvent && (
        <div className="events__card events__card--active">
          <div className="events__header">
            <h2 className="events__event-title">{title}</h2>
            <span className="events__badge">Upcoming Event</span>
          </div>

          <p className="events__description">{description}</p>

          <div className="events__meta">
            <div>
              <strong>📅 Date:</strong> {date}
            </div>
            <div>
              <strong>📍 Venue:</strong> {location}
            </div>
          </div>

          {bracketUrl && (
            <div className="events__bracket-wrapper">
              <h3 className="events__bracket-title">Live Tournament Bracket</h3>
              <iframe
                src={bracketUrl}
                width="100%"
                height="500"
                className="events__iframe"
                title="Tournament Bracket"
              ></iframe>
            </div>
          )}
        </div>
      )}

      <div className="timeline">
        <h2 className="timeline__heading">Upcoming</h2>
        {upcoming.length > 0 ? (
          <TimelineList items={upcoming} highlightFirst />
        ) : (
          <p className="timeline__empty">
            Nothing scheduled at the moment! Check back later or follow our Instagram for
            announcements.
          </p>
        )}

        {past.length > 0 && (
          <>
            <h2 className="timeline__heading">Past</h2>
            <TimelineList items={past} />
          </>
        )}
      </div>
    </div>
  );
}
