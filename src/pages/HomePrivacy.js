import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TermsPrivacy = () => {
  return (
    <section className="terms-privacy-section">
      <Container>
        <Row>
          <Col>
            <h4><a href="/terms">Terms and Conditions</a></h4>
            <p>By using our website, you agree to abide by the terms and conditions outlined here. These cover the terms for booking, payment, and cancellation policies.</p>
          </Col>
          <Col>
            <h4><a href="/privacy">Privacy Policy</a></h4>
            <p>Your privacy is very important to us. We ensure that all your personal data is protected and will not be shared with third parties without your consent. For more details, please read our Privacy Policy.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TermsPrivacy;
