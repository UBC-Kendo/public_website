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

  return (
    <div style={{ fontFamily: 'sans-serif', color: '#1a1a1a', lineHeight: '1.6' }}>
      {/* HERO SECTION */}
      <section
        style={{
          backgroundColor: '#0f172a',
          color: '#fff',
          padding: '80px 20px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', margin: '0 0 10px 0' }}>UBC KENDO CLUB</h1>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8', margin: '0 0 20px 0' }}>
          Official Martial Arts Club at the University of British Columbia • Est. 1978
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section
        style={{ maxWidth: '800px', margin: '60px auto', padding: '0 20px', textAlign: 'center' }}
      >
        <h2 style={{ fontSize: '2.25rem', color: '#0f172a', margin: '0 0 8px 0' }}>
          ABOUT UBC KENDO CLUB
        </h2>
        <p
          style={{
            color: '#2563eb',
            fontWeight: 'bold',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}
        >
          EST. 1978
        </p>
        <h3
          style={{
            fontSize: '1.25rem',
            color: '#64748b',
            fontWeight: 'normal',
            margin: '0 0 24px 0',
          }}
        >
          More than just a club
        </h3>
        <p
          style={{ color: '#334155', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '16px' }}
        >
          University of British Columbia Kendo Club is a student-led recreational martial art club.
          Although we are mostly comprised of UBC students and alumni, we also welcome anyone
          outside of UBC to join us and practice kendo with us.
        </p>
        <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
          We are here to teach our members the etiquette and skills in Kendo. As a member, you will
          also have a chance to develop skills such as self-confidence, leadership, and teamwork.
        </p>
      </section>

      {/* SCHEDULE & LOCATIONS */}
      <section id="schedule" style={{ backgroundColor: '#f8fafc', padding: '60px 20px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '8px' }}>Practice Schedule & Location</h2>
          <div
            style={{
              backgroundColor: '#fff',
              padding: '28px',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              border: '1px solid #e2e8f0',
            }}
          >
            {/* TIMES */}
            <div style={{ marginBottom: '24px' }}>
              {PRACTICE_SCHEDULE.map((sched, idx) => (
                <div key={idx}>
                  <h3 style={{ margin: '0 0 8px 0', color: '#0f172a' }}>
                    Practice Hours ({sched.day})
                  </h3>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#334155' }}>
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
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ margin: '0 0 12px 0', color: '#0f172a' }}>📍 Location </h3>
              <div
                style={{
                  display: 'grid',
                  gap: '12px',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                }}
              >
                {LOCATIONS.map((loc, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '12px 16px',
                      backgroundColor: '#f1f5f9',
                      borderRadius: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <strong style={{ color: '#0f172a' }}>{loc.name}</strong>
                      <p style={{ margin: '4px 0 12px 0', fontSize: '0.85rem', color: '#64748b' }}>
                        {loc.address}
                      </p>
                    </div>
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        fontSize: '0.85rem',
                        color: '#2563eb',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                      }}
                    >
                      Open in Google Maps ↗
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* MAILING LIST NOTICE */}
            <div
              style={{
                padding: '16px',
                backgroundColor: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '8px',
              }}
            >
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#92400e', fontWeight: '500' }}>
                <strong>Check the Mailing List:</strong> Location may vary from one week to another
                between the Nest and Asian Centre. Always check the latest mailing list email or
                Instagram story before heading out.
              </p>
            </div>
            <br></br>
            {/* CALENDAR EMBED */}
            {CALENDAR_EMBED_URL && (
              <details style={{ marginBottom: '24px' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#0f172a' }}>
                  View upcoming practices
                </summary>
                <iframe
                  src={CALENDAR_EMBED_URL}
                  title="UBC Kendo practice calendar"
                  style={{ width: '100%', height: '300px', border: 0, marginTop: '12px' }}
                ></iframe>
              </details>
            )}
          </div>
        </div>
      </section>

      {/* INSTRUCTORS */}
      <section style={{ maxWidth: '700px', margin: '60px auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>Instructors</h2>
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            backgroundColor: '#fff',
            overflow: 'hidden',
          }}
        >
          {INSTRUCTORS.map((ins, idx) => (
            <li
              key={idx}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                flexWrap: 'wrap',
                gap: '4px 12px',
                padding: '10px 16px',
                borderTop: idx === 0 ? 'none' : '1px solid #e2e8f0',
              }}
            >
              <span style={{ fontWeight: 'bold', color: '#0f172a' }}>{ins.name}</span>
              <span style={{ fontSize: '0.9rem', color: '#64748b' }}>
                <span style={{ color: '#2563eb', fontWeight: 'bold' }}>{ins.rank}</span> ·{' '}
                {ins.role}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* EXEC TEAM */}
      <section style={{ maxWidth: '700px', margin: '60px auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>Executive Team {EXEC_TERM}</h2>
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            backgroundColor: '#fff',
            overflow: 'hidden',
          }}
        >
          {EXEC_TEAM.map((exec, idx) => (
            <li
              key={idx}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                flexWrap: 'wrap',
                gap: '4px 12px',
                padding: '10px 16px',
                borderTop: idx === 0 ? 'none' : '1px solid #e2e8f0',
              }}
            >
              <span style={{ fontWeight: 'bold', color: '#0f172a' }}>{exec.name}</span>
              <span style={{ fontSize: '0.9rem', color: '#2563eb', fontWeight: 'bold' }}>
                {exec.role}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ SECTION */}
      <section style={{ backgroundColor: '#f8fafc', padding: '60px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'grid', gap: '12px' }}>
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: 'transparent',
                      border: 'none',
                      textAlign: 'left',
                      fontSize: '1.05rem',
                      fontWeight: 'bold',
                      color: '#0f172a',
                      cursor: 'pointer',
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ fontSize: '1.2rem', marginLeft: '10px' }}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: '0 20px 16px 20px',
                        color: '#475569',
                        borderTop: '1px solid #f1f5f9',
                      }}
                    >
                      <p style={{ margin: '12px 0 0 0' }}>{faq.a}</p>
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
