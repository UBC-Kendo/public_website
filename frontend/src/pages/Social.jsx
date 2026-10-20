import './Events.css';
import { SOCIAL_EVENTS } from '../data/kendoData';

export default function Social() {
  const sorted = [...SOCIAL_EVENTS].sort((a, b) => b.date.localeCompare(a.date));
  const years = [...new Set(sorted.map((e) => e.date.slice(0, 4)))];

  return (
    <div className="events">
      <title>Social | UBC Kendo</title>
      <h1 className="events__title">Social</h1>
      <p className="social__intro">
        Outside of regular practice, we organize special events from time to time. Here is a look at
        some of them!
      </p>

      {years.length === 0 && (
        <div className="events__empty-state">
          <p className="events__empty-text">
            Nothing here yet! Follow our Instagram for announcements.
          </p>
        </div>
      )}

      {years.map((year) => (
        <section key={year} className="social__year-group">
          <div className="social__year-header">
            <h2 className="social__year">{year}</h2>
            <span className="social__year-line" />
          </div>
          <div className="social__grid">
            {sorted
              .filter((e) => e.date.startsWith(year))
              .map((event) => (
                <div key={`${event.date}-${event.title}`} className="social__event">
                  <h3 className="social__event-title">{event.title}</h3>
                  <img
                    src={event.image}
                    alt={event.alt ?? event.title}
                    className="social__image"
                    loading="lazy"
                  />
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
