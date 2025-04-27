import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/Packages.css';

const packages = [
  {
    title: "Beach Paradise",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "Relax on sunny beaches with crystal-clear waters and white sand.",
  },
  {
    title: "Mountain Escape",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    description: "Get away to serene mountains and enjoy cool, fresh air.",
  },
  {
    title: "City Lights",
    image: "https://plus.unsplash.com/premium_photo-1738486447889-5a5519316d2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2l0eSUyMExpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D",
    description: "Explore vibrant cities with rich culture and exciting nightlife.",
  },
];

const HomePackages = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Top Tour Packages</h2>
      <Row>
        {packages.map((pkg, idx) => (
          <Col md={4} key={idx} className="mb-4">
            <Card className="package-card">
              <Card.Img variant="top" src={pkg.image} alt={pkg.title} />
              <Card.Body>
                <Card.Title className="package-card-title">{pkg.title}</Card.Title>
                <Card.Text className="package-card-text">{pkg.description}</Card.Text>
                <Link to={`/packages/${idx}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Link to="/packages">
          <Button variant="outline-primary">View All Packages</Button>
        </Link>
      </div>
    </Container>
  );
};

export default HomePackages;
