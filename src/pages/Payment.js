import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const query = new URLSearchParams(useLocation().search);
  const bookingId = Number(query.get('bookingId')); 
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail');

  const allBookings = JSON.parse(localStorage.getItem('bookings')) || [];
  const userBookings = allBookings.filter(booking => booking.email === userEmail) || [];
  
  const booking = userBookings.find(b => b.id === bookingId); 

  const [paymentStatus, setPaymentStatus] = useState('Pending');
  const [cardDetails, setCardDetails] = useState({
    name: '',
    number: '',
    expiry: '',
    cvv: ''
  });

  useEffect(() => {
    if (!booking) {
      console.warn('Booking not found with ID:', bookingId);
    }
  }, [bookingId, booking]);

  if (!booking) {
    return <div className="container mt-5"><h3>Booking not found.</h3></div>;
  }

  const totalAmount = (booking.packagePrice || 0) * (booking.travelers || 1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({ ...prev, [name]: value }));
  };

  const validateCardDetails = () => {
    const { number, expiry, cvv } = cardDetails;

    if (!/^\d{16}$/.test(number)) {
      alert('Invalid card number. It must be exactly 16 digits.');
      return false;
    }

    if (!/^\d{3}$/.test(cvv)) {
      alert('Invalid CVV. It must be exactly 3 digits.');
      return false;
    }

    const [month, year] = expiry.split('/').map(Number);
    if (!month || !year || month < 1 || month > 12) {
      alert('Invalid expiry date. Please use the format MM/YY.');
      return false;
    }

    const currentDate = new Date();
    const expiryDate = new Date(`20${year}`, month - 1); // Convert MM/YY to a Date object
    if (expiryDate <= currentDate) {
      alert('Invalid expiry date. The card has expired.');
      return false;
    }

    return true;
  };

  const handlePayment = () => {
    if (!cardDetails.name || !cardDetails.number || !cardDetails.expiry || !cardDetails.cvv) {
      alert('Please fill in all card details.');
      return;
    }

    if (!validateCardDetails()) {
      alert('Card is invalid. Please check your card details.');
      return;
    }

    setPaymentStatus('Paid');

    const updatedBookings = userBookings.map(b =>
      b.id === booking.id
        ? { ...b, status: 'Confirmed', paymentStatus: 'Paid' }
        : b
    );

    allBookings[userEmail] = updatedBookings;
    localStorage.setItem('bookings', JSON.stringify(allBookings));

    alert('Payment successful! Your booking is confirmed.');
    navigate('/mybookings');
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white text-center">
              <h3 className="mb-0">Payment</h3>
              <p className="mb-0">For: {booking.destination}</p>
            </div>
            <div className="card-body">
              <p className="text-center mb-4">
                <strong>Total Price:</strong> ${totalAmount}
              </p>
              <form>
                <div className="mb-3">
                  <label className="form-label">Cardholder Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={cardDetails.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Card Number</label>
                  <input
                    type="text"
                    name="number"
                    className="form-control"
                    value={cardDetails.number}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Expiry Date</label>
                    <input
                      type="text"
                      name="expiry"
                      className="form-control"
                      placeholder="MM/YY"
                      value={cardDetails.expiry}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">CVV</label>
                    <input
                      type="password"
                      name="cvv"
                      className="form-control"
                      placeholder="123"
                      value={cardDetails.cvv}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-success w-100"
                  onClick={handlePayment}
                >
                  Pay ${totalAmount}
                </button>
              </form>
              <p className="text-center mt-3">
                <strong>Status:</strong> {paymentStatus}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;