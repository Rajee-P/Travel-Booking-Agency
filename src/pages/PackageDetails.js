import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { places } from '../data/places';
import { Container, Card, Button } from 'react-bootstrap';

const PackageDetails = () => {
  const { id } = useParams();
  const pkg = places[id];

  if (!pkg) return <Container className="mt-5"><h3>Package not found.</h3></Container>;

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center vh-80 mt-5 mb-5">
        <Card style={{ width: '700px', height: '500px' }} className="shadow-lg">
          <Card.Img variant="top" src={pkg.image} style={{ height: '250px', objectFit: 'cover' }} />
          <Card.Body className="d-flex flex-column justify-content-between">
            <div>
              <Card.Title className="text-center mb-3">{pkg.title}</Card.Title>
              <Card.Text>
                <strong>About:</strong> {pkg.about}<br />
                <strong>Places Covered:</strong> {pkg.places.join(', ')}<br />
                <strong>Duration:</strong> {pkg.duration}<br />
                <strong>Guide:</strong> {pkg.guide.name} ({pkg.guide.experience})<br />
                <strong>Price:</strong> {pkg.price}<br />
              </Card.Text>
            </div>
            <div className="text-center mt-3">
              <Link to={`/booking?package=${id}`}>
                <Button variant="success" className="px-4">Book Now</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Container>
      <div className="text-center mt-4 mb-5">
        <Link to="/packages" className="btn btn-secondary px-4">Back to Packages</Link>
      </div>
    </>
  );
};

export default PackageDetails;