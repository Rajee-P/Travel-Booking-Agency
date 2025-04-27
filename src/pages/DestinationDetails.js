import React from 'react';
import { useParams, Link } from 'react-router-dom';
import destinations from '../data/destinationPlaces';
import { Container, Card, Button } from 'react-bootstrap';

const DestinationDetails = () => {
  const { slug } = useParams();
  const destination = destinations.find(d => d.slug === slug);

  if (!destination) return <Container className="mt-5"><h3>Destination not found.</h3></Container>;

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center vh-80 mt-5 mb-5">
        <Card style={{ width: '700px', height: '500px' }} className="shadow-lg">
          <Card.Img variant="top" src={destination.image} style={{ height: '250px', objectFit: 'cover' }} />
          <Card.Body className="d-flex flex-column justify-content-between">
            <div>
              <Card.Title className="text-center mb-3">{destination.name}</Card.Title>
              <Card.Text>
                <strong>About:</strong> {destination.description}<br />
                <strong>Places Covered:</strong> {destination.places.join(', ')}<br />
                <strong>Duration:</strong> {destination.days} Days / {destination.nights} Nights<br />
                {destination.guide && (
                  <><strong>Guide:</strong> {destination.guide.name} ({destination.guide.experience})<br /></>
                )}
                {destination.price && (
                  <><strong>Price:</strong> ${destination.price}<br /></>
                )}
              </Card.Text>
            </div>
            <div className="text-center mt-3">
              <Link to={`/booking?destination=${slug}`}>
                <Button variant="success" className="px-4">Book Now</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Container>
      <div className="text-center mt-5 mb-5">
        <Link to="/destinations" className="btn btn-secondary px-4">Back to Destinations</Link>
      </div>
    </>
  );
};

export default DestinationDetails;