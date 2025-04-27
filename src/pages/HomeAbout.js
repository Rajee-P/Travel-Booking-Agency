import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h2>About Us</h2>
          <p>
            At TravelMate, we believe in the power of travel to bring people closer together and create unforgettable memories. With years of experience in the travel industry, our mission is to make travel accessible, enjoyable, and hassle-free for everyone. Whether you're looking to explore exotic destinations, relax on serene beaches, or embark on thrilling adventures, we've got you covered.
          </p>
          <p>
            Our team of travel experts curates the best holiday packages to suit your preferences, ensuring you get the most value for your time and money. From flight bookings to hotel reservations, from city tours to adventure expeditions, we take care of every detail so you can focus on what matters most—enjoying your trip!
          </p>
          <p>
            Our services cater to all kinds of travelers—solo explorers, family vacations, romantic getaways, or corporate retreats. We pride ourselves on offering personalized travel experiences that align with your unique interests and needs.
          </p>
          <p>
            Join thousands of satisfied travelers who have trusted us to plan their dream vacations. With TravelMate, your journey begins here!
          </p>
          <Link to="/about">
            <Button variant="outline-primary">Learn More</Button>
          </Link>
        </Col>
        <Col md={6}>
          <img
            src="https://images.unsplash.com/photo-1673515335048-ace62cf73a26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWJvdXQlMjBpbWFnZSUyMGZvciUyMHRyYXZlbCUyMGJvb2tpbmclMjBhZ2VuY3l8ZW58MHx8MHx8fDA%3D"
            alt="About Us"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPreview;
