import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import contact from '../data/contact';
import '../style/Contact/Contact.css';

function Contact() {
  const rowStyle = {
    minHeight: '100vh',
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_oh25hf8',
      'template_lffgyg1',
      form.current,
      'hXaGzcxEQ0_z0xZPP',
    );
  };

  return (
    <main
      style={rowStyle}
      className="height-100 flex-column bg-light pt-5 justify-content-center align-items-center row contact"
      id="contact"
    >
      <h2 className="text-center pb-5 text-uppercase">Connect With Me</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="pt-5"
      >
        <div className="mb-3  form-group">

          <label htmlFor="user_name">
            Name
            <input
              id="name"
              placeholder="enter your name"
              required
              type="name"
              name="user_name"
            />
          </label>
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="user_email">
            Email
            <input
              required
              id="email"
              placeholder="enter your email"
              type="email"
              name="user_email"
            />
          </label>
        </div>
        <div className="mb-3 form-group">
          <label htmlFor="message">
            Message
            <textarea
              className="form-control rounded"
              type="text-area"
              name="message"
              id="email_body"
              placeholder="enter your message"
              required
            />
          </label>

        </div>
        <button id="button" type="submit" value="Send">
          Send Message
        </button>
      </form>
      <div
        className="row"
      >
        {contact.map((item) => (
          <a className="contact-img" href={item.link} key={item.id} target="_blank" rel="noreferrer">
            {item.image}
          </a>
        ))}
      </div>
      <a href="mailto: williamshaner3@gmail.com" className="text-center mb-5">williamshaner3@gmail.com</a>
    </main>
  );
}

export default Contact;
