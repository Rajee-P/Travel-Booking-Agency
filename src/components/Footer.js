import React from 'react';
import { Container } from 'react-bootstrap';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-blue text-white text-center py-4 mt-auto">
      <Container>
        <p>&copy; {new Date().getFullYear()} TravelMate. All rights reserved.</p>
        <p>
          Contact us: <a href="mailto:travelmate@travelmate.com" className="text-white">support@travelmate.com</a> | Phone: <a href="tel:+1234567890" className="text-white">+91 98989 98989</a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;