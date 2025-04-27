import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PackageCard = ({ image, title, description, packageId }) => (
  <Card className="package-card">
    <Card.Img variant="top" src={image} className="package-card-img" />
    <Card.Body>
      <Card.Title className="package-card-title">{title}</Card.Title>
      <Card.Text className="package-card-text">{description}</Card.Text>
      <Link to={`/packages/${packageId}`}>
        <Button variant="primary">View Details</Button>
      </Link>
    </Card.Body>
  </Card>
);

export default PackageCard;