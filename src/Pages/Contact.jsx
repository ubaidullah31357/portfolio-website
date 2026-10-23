import emailjs from '@emailjs/browser';
import { useState } from 'react';

export const Contact = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message Sent Successfully');
          setUsername('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log(error.text);
          alert('Something went wrong!');
        }
      );
    console.log(import.meta.env.VITE_PUBLIC_KEY);
  };
  return (
    <section className="contact-section" id="contact">
      <h1 className="contact-heading">Contact Us</h1>
      <form id="contact-form" onSubmit={handleOnSubmit}>
        <label htmlFor="username">
          <input
            type="text"
            id="username"
            placeholder="Enter your name"
            className="contact-inputs"
            autoComplete="off"
            required
            name="user_name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="contact-inputs"
            autoComplete="off"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="user_email"
          />
        </label>
        <label htmlFor="message">
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="12"
            placeholder="Enter your message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </label>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
};
