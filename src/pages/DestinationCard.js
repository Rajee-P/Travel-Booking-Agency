import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DestinationCard = ({ image, title, description, slug }) => (
  <Card className="destination-card">
    <Card.Img variant="top" src={image} className="destination-card-img" />
    <Card.Body>
      <Card.Title className="destination-card-title">{title}</Card.Title>
      <Card.Text className="destination-card-text">{description}</Card.Text>
      <Link to={`/destination/${slug}`}>
        <Button variant="primary">View Details</Button>
      </Link>
    </Card.Body>
  </Card>
);

export default DestinationCard;
