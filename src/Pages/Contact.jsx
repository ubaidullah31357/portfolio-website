export const Contact = () => {
  return (
    <section className="contact-section">
      <h1 className="contact-heading">Contact Us</h1>
      <form action="" id="contact-form">
        <label for="username">
          <input
            type="text"
            id="username"
            placeholder="Enter your name"
            className="contact-inputs"
            autoComplete="off"
            required
            name="username"
          />
        </label>
        <label for="email">
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="contact-inputs"
            autoComplete="off"
            required
            name="email"
          />
        </label>
        <label>
          <textarea
            name="message"
            cols="30"
            rows="12"
            placeholder="Enter your message"
            required
          ></textarea>
        </label>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
};
