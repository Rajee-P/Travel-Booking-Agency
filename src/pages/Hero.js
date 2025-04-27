import React from 'react';
import { Container } from 'react-bootstrap';
import '../Styles/Hero.css'; 
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <Container className="text-center text-white hero-content">
          <h1 className="display-4 fw-bold">Discover Your Next Adventure</h1>
          <p className="lead">Explore amazing places, book exclusive packages, and make unforgettable memories with TravelMate.</p>
          <Link to="/destinations" className="btn btn-primary btn-lg rounded-pill shadow">
            Explore Destinations
          </Link>
        </Container>
      </div>
    </div>
  );
};

export default Hero;