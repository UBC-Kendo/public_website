import './Events.css';

export default function Social() {
  return (
    <div className="events">
      <title>UBC Kendo Club | Social</title>
      <h1 className="events__title">Social</h1>
      <div className="events__empty-state">
        <p className="events__empty-text">
          Nothing scheduled at the moment! Check back later or follow our Instagram for
          announcements.
        </p>
      </div>
    </div>
  );
}
