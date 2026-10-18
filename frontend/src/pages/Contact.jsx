import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact">
      <h1 className="contact__title">Contact Us</h1>
      <p className="contact__text">
        If you would like to reach out about joining, dues or practice schedules, please send us an
        email at{' '}
        <a href="mailto:ubckendo@gmail.com" className="contact__link">
          ubckendo@gmail.com
        </a>
        .
      </p>
      <p className="contact__text">
        For practice updates and announcements, follow us on{' '}
        <a
          href="https://instagram.com/ubckendo"
          target="_blank"
          rel="noopener noreferrer"
          className="contact__link"
        >
          Instagram
        </a>
        .
      </p>
    </div>
  );
}