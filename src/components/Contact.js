import React from 'react';
import Row from 'react-bootstrap/Row';
import { contact } from '../data/contact';
import Col from 'react-bootstrap/Col';

const Contact = () => {
  const contactStyle = {
    fontSize: 40,
    color: 'black',
  };
  const rowStyle = {
    height: '100vh',
  };
  const contactContainer = {
    maxWidth: 400,
  };
  return (
    <Row
      style={rowStyle}
      className="height-100 bg-light pt-5 justify-content-center"
      id="contact"
    >
      <h1 className="text-center">Connect With Me</h1>
      <Col
        style={contactContainer}
        className="d-flex justify-content-around my-work-container flex-wrap"
      >
        {contact.map((item) => (
          <a style={contactStyle} href={item.link} key={item.id}>
            {item.image}
          </a>
        ))}
      </Col>
    </Row>
  );
};

export default Contact;
