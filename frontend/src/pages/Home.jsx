import { useState } from 'react';
import {
  LOCATIONS,
  PRACTICE_SCHEDULE,
  CALENDAR_EMBED_URL,
  EXEC_TERM,
  EXEC_TEAM,
  INSTRUCTORS,
  FAQS,
} from '../data/kendoData';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const instructorGroups = INSTRUCTORS.reduce((groups, ins) => {
    const group = groups.find((g) => g.role === ins.role);
    if (group) group.members.push(ins);
    else groups.push({ role: ins.role, members: [ins] });
    return groups;
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', color: '#1a1a1a', lineHeight: '1.6' }}>
      {/* HERO SECTION */}
      <section className="home__hero">
        <h1 className="home__hero-title">UBC KENDO CLUB</h1>
        <p className="home__hero-subtitle">
          Official Martial Arts Club at the University of British Columbia • Est. 1978
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section className="home__about">
        <h2 className="home__about-title">ABOUT UBC KENDO CLUB</h2>
        <p className="home__about-tag">EST. 1978</p>
        <h3 className="home__about-subtitle">More than just a club</h3>
        <p className="home__about-copy home__about-copy--top">
          University of British Columbia Kendo Club is a student-led recreational martial art club.
          Although we are mostly comprised of UBC students and alumni, we also welcome anyone
          outside of UBC to join us and practice kendo with us.
        </p>
        <p className="home__about-copy">
          We are here to teach our members the etiquette and skills in Kendo. As a member, you will
          also have a chance to develop skills such as self-confidence, leadership, and teamwork.
        </p>
      </section>

      {/* SCHEDULE & LOCATIONS */}
      <section id="schedule" className="home__schedule">
        <div className="home__schedule-inner">
          <h2 className="home__schedule-title">Practice Schedule & Location</h2>
          <div className="home__schedule-card">
            {/* TIMES */}
            <div className="home__schedule-times">
              {PRACTICE_SCHEDULE.map((sched, idx) => (
                <div key={idx}>
                  <h3 className="home__schedule-heading">Practice Hours ({sched.day})</h3>
                  <ul className="home__schedule-list">
                    <li>
                      <strong>Beginners:</strong> {sched.beginner}
                    </li>
                    <li>
                      <strong>Seniors / Bogu:</strong> {sched.senior}
                    </li>
                  </ul>
                </div>
              ))}
            </div>

            {/* LOCATIONS WITH MAP LINKS */}
            <div className="home__locations-wrap">
              <h3 className="home__locations-title">📍 Location </h3>
              <div className="home__location-grid">
                {LOCATIONS.map((loc, idx) => (
                  <div key={idx} className="home__location-card">
                    <div>
                      <strong className="home__location-name">{loc.name}</strong>
                      <p className="home__location-address">{loc.address}</p>
                    </div>
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="home__map-link"
                    >
                      Open in Google Maps ↗
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* MAILING LIST NOTICE */}
            <div className="home__mailing-notice">
              <p className="home__mailing-text">
                <strong>Check the Mailing List:</strong> Location may vary from one week to another
                between the Nest and Asian Centre. Always check the latest mailing list email or
                Instagram story before heading out.
              </p>
            </div>
            {/* CALENDAR EMBED */}
            {CALENDAR_EMBED_URL && (
              <details className="home__calendar-details">
                <summary className="home__calendar-summary">View upcoming practices</summary>
                <iframe
                  src={CALENDAR_EMBED_URL}
                  title="UBC Kendo practice calendar"
                  className="home__calendar-iframe"
                ></iframe>
              </details>
            )}
          </div>
        </div>
      </section>

      {/* INSTRUCTORS */}
      <section className="home__staff-section">
        <h2 className="home__staff-title">Instructors</h2>
        {instructorGroups.map((group) => (
          <div key={group.role} className="home__staff-group">
            <h3 className="home__staff-label">{group.role}</h3>
            <ul className="home__staff-list">
              {group.members.map((ins, idx) => (
                <li
                  key={ins.name}
                  className={
                    idx === 0 ? 'home__staff-item' : 'home__staff-item home__staff-item--bordered'
                  }
                >
                  <span className="home__staff-name">{ins.name}</span>
                  <span className="home__staff-rank">{ins.rank}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* EXEC TEAM */}
      <section className="home__staff-section">
        <h2 className="home__staff-title">Executive Team {EXEC_TERM}</h2>
        <ul className="home__staff-list">
          {EXEC_TEAM.map((exec, idx) => (
            <li
              key={idx}
              className={
                idx === 0 ? 'home__staff-item' : 'home__staff-item home__staff-item--bordered'
              }
            >
              <span className="home__staff-name">{exec.name}</span>
              <span className="home__staff-rank">{exec.role}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ SECTION */}
      <section className="home__faq">
        <div className="home__faq-inner">
          <h2 className="home__faq-title">Frequently Asked Questions</h2>
          <div className="home__faq-list">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="home__faq-item">
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="home__faq-button"
                  >
                    <span>{faq.q}</span>
                    <span className="home__faq-toggle">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="home__faq-answer">
                      <p className="home__faq-answer-text">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
