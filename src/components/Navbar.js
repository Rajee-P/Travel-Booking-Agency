import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';

const NavigationBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    const storedName = localStorage.getItem('userName');
    console.log('Token:', token, 'Stored Name:', storedName);
    setIsLoggedIn(!!token);
    setUserName(storedName || '');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
    setUserName('');
    navigate('/');
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand href="/" className="custom-brand">
        TravelMate
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto custom-nav-links">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/packages">Packages</Nav.Link>
          <Nav.Link href="/destinations">Places</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/mybookings">My Bookings</Nav.Link>
          <Nav.Link href="/faqs">FAQs</Nav.Link>

          {!isLoggedIn ? (
            <>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Signup</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link disabled className="text-primary">
                Welcome, {userName}!
              </Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;