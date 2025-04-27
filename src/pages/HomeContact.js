// src/components/HomeContact.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HomeContact = () => {
  return (
    <section className="contact-section">
      <Container>
        <Row className="text-center">
          <Col>
            <h2>Contact Us</h2>
            <p>If you have any questions, feel free to get in touch with us!</p>
            <Button variant="primary" href="/contact">Get in Touch</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeContact;
