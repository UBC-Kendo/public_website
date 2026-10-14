import { EVENT_PAGE_TITLE, EVENT_DATA } from '../data/kendoData';

export default function Events() {
  const { hasActiveEvent, title, date, location, description, bracketUrl } = EVENT_DATA;

  return (
    <div className="events">
      <h1 className="events__title">{EVENT_PAGE_TITLE}</h1>

      {hasActiveEvent ? (
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
      ) : (
        <div className="events__empty-state">
          <p className="events__empty-text">
            Nothing scheduled at the moment! Check back later or follow our Instagram for
            announcements.
          </p>
        </div>
      )}
    </div>
  );
}
