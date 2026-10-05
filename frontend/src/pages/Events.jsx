import { EVENT_PAGE_TITLE, EVENT_DATA } from '../data/kendoData';

export default function Events() {
  const { hasActiveEvent, title, date, location, description, bracketUrl } = EVENT_DATA;

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '60px auto',
        padding: '0 20px',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#0f172a', marginBottom: '24px' }}>
        {EVENT_PAGE_TITLE}
      </h1>

      {hasActiveEvent ? (
        <div
          style={{
            backgroundColor: '#f8fafc',
            padding: '32px',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            <h2 style={{ margin: 0, color: '#0f172a', fontSize: '1.5rem' }}>{title}</h2>
            <span
              style={{
                backgroundColor: '#dcfce7',
                color: '#166534',
                padding: '4px 12px',
                borderRadius: '16px',
                fontWeight: 'bold',
                fontSize: '0.85rem',
              }}
            >
              Upcoming Event
            </span>
          </div>

          <p
            style={{ color: '#475569', fontSize: '1rem', margin: '0 0 20px 0', lineHeight: '1.5' }}
          >
            {description}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              marginBottom: '20px',
              fontSize: '0.95rem',
              color: '#334155',
            }}
          >
            <div>
              <strong>📅 Date:</strong> {date}
            </div>
            <div>
              <strong>📍 Venue:</strong> {location}
            </div>
          </div>

          {bracketUrl && (
            <div style={{ marginTop: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '12px' }}>
                Live Tournament Bracket
              </h3>
              <iframe
                src={bracketUrl}
                width="100%"
                height="500"
                frameBorder="0"
                scrolling="auto"
                style={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                title="Tournament Bracket"
              ></iframe>
            </div>
          )}
        </div>
      ) : (
        <div
          style={{
            textAlign: 'center',
            padding: '40px 20px',
            backgroundColor: '#f8fafc',
            borderRadius: '12px',
            border: '1px dashed #cbd5e1',
          }}
        >
          <p style={{ color: '#64748b', fontSize: '1.1rem', margin: 0 }}>
            Nothing scheduled at the moment! Check back later or follow our Instagram for
            announcements.
          </p>
        </div>
      )}
    </div>
  );
}
