import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm('maeqyzqj'); // TODO: CHANGE TO ACTUAL EMAIL LINK

  return (
    <div className="contact">
      <h1 className="contact__title">Contact Us</h1>
      <p className="contact__subtitle">
        Have questions about joining, dues, or practice schedules? Send us a message!
      </p>

      {/* CONTACT FORM */}
      <div className="contact__panel">
        {state.succeeded ? (
          <div className="contact__success">
            <strong>Thank you!</strong> Your message has been sent. We'll get back to you shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact__form">
            <div>
              <label htmlFor="name" className="contact__label">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="contact__input"
              />
            </div>

            <div>
              <label htmlFor="email" className="contact__label">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="your.email@example.com"
                className="contact__input"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="contact__error"
              />
            </div>

            <div>
              <label htmlFor="message" className="contact__label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="How can we help you?"
                className="contact__textarea"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="contact__error"
              />
            </div>

            <ValidationError
              errors={state.errors}
              className="contact__error contact__error--global"
            />

            <button
              type="submit"
              disabled={state.submitting}
              className={
                state.submitting ? 'contact__submit contact__submit--disabled' : 'contact__submit'
              }
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
