import React, { useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';
import contact from '../data/contact';
import '../style/Contact.css';

function Contact() {
  const rowStyle = {
    height: '100vh',
  };
  const contactContainer = {
    maxWidth: 400,
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
    <Row
      style={rowStyle}
      className="height-100 flex-column bg-light pt-5 justify-content-center align-items-center"
      id="contact"
    >
      <h1 className="text-center pb-5">Connect With Me</h1>
      <Form
        ref={form}
        onSubmit={sendEmail}
        style={contactContainer}
        className="pt-5"
      >
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            id="name"
            placeholder="enter your name"
            required
            type="name"
            name="user_name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            id="email"
            placeholder="enter your email"
            type="email"
            name="user_email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <textarea
            className="form-control rounded"
            type="text-area"
            name="message"
            id="email_body"
            placeholder="enter your message"
            required
          />
        </Form.Group>
        <Button className="w-100 mt-4" type="submit" value="Send">
          Send Message
        </Button>
      </Form>
      <Col
        style={contactContainer}
        className="d-flex justify-content-around my-work-container flex-wrap"
      >
        {contact.map((item) => (
          <a className="contact-img" href={item.link} key={item.id}>
            {item.image}
          </a>
        ))}
      </Col>
      <a href="mailto: williamshaner3@gmail.com" className="text-center mb-5">williamshaner3@gmail.com</a>
    </Row>
  );
}

export default Contact;
