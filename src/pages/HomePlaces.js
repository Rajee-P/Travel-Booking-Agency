import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/Destinations.css';

const destinations = [
  {
    name: "Paris, France",
    slug: "paris-france",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    description: "The city of lights and love. Explore iconic landmarks like the Eiffel Tower and Louvre.",
  },
  {
    name: "Bali, Indonesia",
    slug: "bali-indonesia",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "Tropical paradise with lush rice fields, beaches, temples, and culture.",
  },
  {
    name: "Tokyo, Japan",
    slug: "tokyo-japan",
    image: "https://media.istockphoto.com/id/505797368/photo/shibuya-shopping-district-tokyo-japan.webp?a=1&b=1&s=612x612&w=0&k=20&c=TcxRZ-MZovuax_OV_zSXZbv2ZlfBFBy7MWKn3cRBoXk=",
    description: "A blend of tradition and future. Visit shrines, skyscrapers, and sushi spots.",
  },
];

const HomeDestinations = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Top Destinations</h2>
      <Row>
        {destinations.map((pkg, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="package-card">
              <Card.Img variant="top" src={pkg.image} alt={pkg.name} />
              <Card.Body>
                <Card.Title className="package-card-title">{pkg.name}</Card.Title>
                <Card.Text className="package-card-text">{pkg.description}</Card.Text>
                <Link to={`/destination/${pkg.slug}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Link to="/destinations">
          <Button variant="outline-primary">View All Destinations</Button>
        </Link>
      </div>
    </Container>
  );
};

export default HomeDestinations;
