import { useState } from 'react';
import {
  LOCATIONS,
  PRACTICE_SCHEDULE,
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
        <img src="/hero-bg.png" alt="" className="home__hero-bg" />
        <img src="/UBCKendo_LogoTransparent.png" alt="UBC Kendo Club" className="home__hero-logo" />
      </section>

      {/* ABOUT SECTION */}
      <section className="home__about">
        <div className="home__about-inner">
          <img
            src="/UBCKendo_LogoTransparent.png"
            alt=""
            aria-hidden="true"
            className="home__about-overlay"
          />
          <img src="/about.jpg" alt="UBC Kendo Club members" className="home__about-photo" />
          <div className="home__about-content">
            <h2 className="home__about-title">ABOUT UBC KENDO CLUB</h2>
            <p className="home__about-tag">EST. 1978</p>
            <p className="home__about-copy home__about-copy--top">
              University of British Columbia Kendo Club is a student-led recreational martial art
              club. Although we are mostly comprised of UBC students and alumni, we also welcome
              anyone outside of UBC to join us and practice kendo with us.
            </p>
            <p className="home__about-copy">
              We are here to teach our members the etiquette and skills in Kendo. As a member, you
              will also have a chance to develop skills such as self-confidence, leadership, and
              teamwork.
            </p>
          </div>
        </div>
      </section>

      {/* SCHEDULE & LOCATIONS */}
      <section id="schedule" className="home__schedule">
        <div className="home__schedule-inner">
          <h2 className="home__schedule-title">{EXEC_TERM} Practice Schedule:</h2>

          <div className="home__schedule-card">
            <div className="home__locations-wrap">
              <h3 className="home__locations-title">Location: </h3>
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

            {PRACTICE_SCHEDULE.map((sched, idx) => (
              <div key={idx} className="home__schedule-block">
                <p className="home__schedule-day">{sched.day}</p>
                <p className="home__schedule-time">Beginners: {sched.beginner}</p>
                <p className="home__schedule-time">Seniors / Bogu: {sched.senior}</p>
              </div>
            ))}

            <div className="home__mailing-notice">
              <p className="home__mailing-text">
                <strong>Check the Mailing List:</strong> Location may vary from one week to another
                between the Nest and Asian Centre. Always check the latest mailing list email or
                Instagram story before heading out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSTRUCTORS */}
      <section className="home__instructors">
        <div className="home__instructors-inner">
          <h2 className="home__instructors-title">CLUB INSTRUCTORS</h2>
          {instructorGroups.map((group) => (
            <div key={group.role} className="home__instructors-group">
              <h3 className="home__instructors-role">{group.role}</h3>
              <ul className="home__instructors-list">
                {group.members.map((ins) => (
                  <li key={ins.name}>
                    {ins.name} ({ins.rank})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* EXEC TEAM */}
      <section className="home__exec">
        <div className="home__exec-inner">
          <h2 className="home__exec-title">Exec Team {EXEC_TERM}</h2>
          <div className="home__exec-grid">
            {EXEC_TEAM.map((exec) => (
              <div key={exec.name} className="home__exec-card">
                <img src={exec.photo} alt="" className="home__exec-photo" />
                <div>
                  <h3 className="home__exec-name">{exec.name}</h3>
                  <p className="home__exec-role">{exec.role}</p>
                  <p className="home__exec-bio">{exec.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
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
