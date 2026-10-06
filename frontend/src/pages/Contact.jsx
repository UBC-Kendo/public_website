import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm('maeqyzqj'); // TODO: CHANGE TO ACTUAL EMAIL LINK

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '40px auto',
        padding: '0 20px',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#0f172a', marginBottom: '8px' }}>Contact Us</h1>
      <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '32px' }}>
        Have questions about joining, dues, or practice schedules? Send us a message!
      </p>

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
        {state.succeeded ? (
          <div
            style={{
              padding: '16px',
              backgroundColor: '#f0fdf4',
              border: '1px solid #bbf7d0',
              borderRadius: '8px',
              color: '#166534',
              textAlign: 'center',
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
                htmlFor="name"
                input
                id="name"
                type="text"
                name="name"
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
                htmlFor="email"
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
                input
                id="email"
                type="email"
                name="email"
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
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '4px' }}
              />
            </div>

            <div>
              <label
                htmlFor="message"
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
                textarea
                id="message"
                name="message"
                rows="5"
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
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '4px' }}
              />
            </div>

            <ValidationError
              errors={state.errors}
              style={{ color: '#dc2626', fontSize: '0.85rem' }}
            />

            <button
              type="submit"
              disabled={state.submitting}
              style={{
                backgroundColor: state.submitting ? '#94a3b8' : '#2563eb',
                color: '#fff',
                border: 'none',
                padding: '12px',
                borderRadius: '6px',
                fontWeight: 'bold',
                cursor: state.submitting ? 'not-allowed' : 'pointer',
              }}
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
