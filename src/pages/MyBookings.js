import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyBookings = () => {
  const userEmail = localStorage.getItem('userEmail');
  const [bookings, setBookings] = useState([]);
  const [cancelMessage, setCancelMessage] = useState(null);

  useEffect(() => {
    const allBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const userBookings = allBookings.filter(booking => booking.email === userEmail) || [];

    setBookings(userBookings);
  }, [userEmail]);

  const updateBookingsInStorage = (updatedBookings) => {
    const allBookings = JSON.parse(localStorage.getItem('bookings')) || {};
    allBookings[userEmail] = updatedBookings;
    localStorage.setItem('bookings', JSON.stringify(allBookings));
  };

  const handleCancel = (id) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === id ? { ...booking, status: 'Cancelled' } : booking
    );
    setBookings(updatedBookings);
    updateBookingsInStorage(updatedBookings);
    setCancelMessage("Your booking has been cancelled.");
  };

  const getBookingStatus = (bookingDate, status) => {
    const today = new Date();
    const bookingDateObj = new Date(bookingDate);
    if (status === 'Cancelled') return 'Cancelled';
    if (bookingDateObj < today) return 'Finished';
    return 'Confirmed';
  };

  return (
    <section className="mybookings-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2>My Bookings</h2>
            {cancelMessage && <Alert variant="info">{cancelMessage}</Alert>}
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Destination</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.length > 0 ? (
                  bookings.map((booking) => (
                    <tr key={booking.id}>
                      <td>{booking.destination}</td>
                      <td>{booking.date}</td>
                      <td>{getBookingStatus(booking.date, booking.status)}</td>
                      <td>
                        {getBookingStatus(booking.date, booking.status) === 'Confirmed' && (
                          <Button variant="danger" onClick={() => handleCancel(booking.id)}>
                            Cancel
                          </Button>
                        )}
                        {getBookingStatus(booking.date, booking.status) === 'Pending' && (
                          <Link to={`/payment?bookingId=${booking.id}`}>
                            <Button variant="primary">Pay Now</Button>
                          </Link>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center">No bookings found</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MyBookings;
