import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <Container>
        <Row className="text-center">
          <Col>
            <h2>What Our Clients Say</h2>
            <div className="testimonial-card">
              <blockquote>"TravelMate made our honeymoon unforgettable! Highly recommend!" - Sarah & John</blockquote>
            </div>
            <div className="testimonial-card">
              <blockquote>"Amazing service and wonderful destinations. Will definitely book again!" - Emily T.</blockquote>
            </div>
            <div className="testimonial-card">
              <blockquote>"We had a fantastic time with TravelMate. Great customer service and beautiful locations!" - Mark & Laura</blockquote>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
