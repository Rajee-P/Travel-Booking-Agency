import React from 'react';
import { Container,Accordion } from 'react-bootstrap';

const HomeFAQs = () => {
  return (
    <section className="faqs-section">
      <Container>
        <h2>Frequently Asked Questions</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How do I book a trip?</Accordion.Header>
            <Accordion.Body>
              You can book your trip by visiting the "Packages" section and selecting a destination that suits your preferences.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What payment methods do you accept?</Accordion.Header>
            <Accordion.Body>
              We accept major credit cards, debit cards, and PayPal for payment. Secure payments are processed via SSL encryption.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Can I cancel or modify my booking?</Accordion.Header>
            <Accordion.Body>
              Yes, bookings can be modified or canceled up to 48 hours before your scheduled departure. Please refer to our cancellation policy for more details.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Do you offer group bookings?</Accordion.Header>
            <Accordion.Body>
              Yes, we offer special group discounts for groups of 10 or more. Contact us for more details.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Is travel insurance included?</Accordion.Header>
            <Accordion.Body>
              Travel insurance is optional and can be added during the booking process. We highly recommend considering insurance for a stress-free journey.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>How can I contact customer support?</Accordion.Header>
            <Accordion.Body>
              You can reach our customer support team by clicking on the "Contact Us" page or via email at support@travelmate.com.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Do I need a visa for my trip?</Accordion.Header>
            <Accordion.Body>
              Visa requirements depend on your destination and nationality. Please check the specific visa requirements for your country before booking.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default HomeFAQs;
