import { useState } from 'react';
import { EXEC_TEAM } from '../data/kendoData';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handles form submission (e.g. via Formspree or EmailJS)
    setSubmitted(true);
  };

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '40px auto',
        padding: '0 20px',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#0f172a', marginBottom: '8px' }}>Contact Us</h1>
      <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '40px' }}>
        Have any questions? Send us a message or reach out on social media.
      </p>

      <div
        style={{
          display: 'grid',
          gap: '32px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}
      >
        {/* DIRECT CONTACT INFO */}
        <div
          style={{
            backgroundColor: '#f8fafc',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
          }}
        >
          <h2 style={{ fontSize: '1.25rem', color: '#0f172a', marginTop: 0 }}>Get in Touch</h2>

          <div style={{ marginBottom: '16px' }}>
            <strong style={{ display: 'block', color: '#334155' }}>📧 General Inquiries</strong>
            <a
              href="mailto:ubckendo@gmail.com"
              style={{ color: '#2563eb', textDecoration: 'none' }}
            >
              ubckendo@gmail.com
            </a>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <strong style={{ display: 'block', color: '#334155' }}>📸 Instagram</strong>
            <a
              href="https://instagram.com/ubckendo"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#2563eb', textDecoration: 'none' }}
            >
              @ubckendo
            </a>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <strong style={{ display: 'block', color: '#334155' }}>📍 Practice Venues</strong>
            <span style={{ fontSize: '0.9rem', color: '#64748b' }}>
              AMS Nest & Asian Centre (UBC Vancouver Campus)
            </span>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div
          style={{
            backgroundColor: '#fff',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          }}
        >
          <h2 style={{ fontSize: '1.25rem', color: '#0f172a', marginTop: 0 }}>Send a Message</h2>

          {submitted ? (
            <div
              style={{
                padding: '16px',
                backgroundColor: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: '8px',
                color: '#166534',
              }}
            >
              <strong>Thank you!</strong> Your message has been sent. We'll get back to you shortly.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    marginBottom: '4px',
                    color: '#334155',
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    marginBottom: '4px',
                    color: '#334155',
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    marginBottom: '4px',
                    color: '#334155',
                  }}
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="How can we help you?"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: '#2563eb',
                  color: '#fff',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
