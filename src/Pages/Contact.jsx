import { useState } from 'react';
import { LuMail } from 'react-icons/lu';

export const Contact = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState('');

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error(
          `Form submission failed with status ${response.status}`
        );
      }

      setFormStatus('Message sent successfully.');
      setUsername('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Unable to submit the contact form:', error);
      setFormStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <section
      className="flex scroll-mt-24 flex-col items-center justify-center px-4 py-8 sm:px-8"
      id="contact"
    >
      <h2 className="my-4 flex items-center justify-center gap-2 text-2xl font-bold sm:gap-[0.8rem] sm:text-[1.7rem] [&>svg]:shrink-0 [&>svg]:text-[#00ff8b]">
        Contact Us <LuMail />
      </h2>
      <article className="w-full max-w-3xl rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-4 shadow-[3px_4px_8px_0_rgba(0,0,0,0.5)] sm:p-6 md:p-8">
        <form
          className="flex flex-col items-center justify-center gap-4"
          id="contact-form"
          name="contact"
          method="POST"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleOnSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <label className="hidden" aria-hidden="true">
            Do not fill this out if you are human:
            <input name="bot-field" tabIndex="-1" autoComplete="off" />
          </label>
          <label className="w-full" htmlFor="username">
            <input
              type="text"
              id="username"
              placeholder="Enter your name"
              className="h-10 w-full rounded-[0.3rem] border border-[#6c6a6a] bg-[#0c1d32] p-2 text-[#fffbfc]"
              autoComplete="off"
              required
              name="user_name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="w-full" htmlFor="email">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="h-10 w-full rounded-[0.3rem] border border-[#6c6a6a] bg-[#0c1d32] p-2 text-[#fffbfc]"
              autoComplete="off"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="user_email"
            />
          </label>
          <label className="w-full" htmlFor="message">
            <textarea
              name="message"
              id="message"
              rows="8"
              className="w-full resize-y rounded-[0.3rem] border border-[#6c6a6a] bg-[#0c1d32] p-2 text-[#fffbfc]"
              placeholder="Enter your message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>
          <button
            type="submit"
            className="h-10 w-full rounded-[0.3rem] border border-[#6c6a6a] bg-[#0c1d32] text-[#fffbfc] transition-colors hover:border-[#00ff8b] hover:bg-[#081c38] active:border-[#fffbfc]"
          >
            Submit
          </button>
          {formStatus && (
            <p className="w-full text-center" role="status" aria-live="polite">
              {formStatus}
            </p>
          )}
        </form>
      </article>
    </section>
  );
};
