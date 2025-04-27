import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { places } from '../data/places';
import destinations from '../data/destinationPlaces';
import HotelSelector from '../components/HotelSelector';
import { Link } from 'react-router-dom';

const Booking = () => {
  const query = new URLSearchParams(useLocation().search);
  const packageId = query.get('package');
  const destinationSlug = query.get('destination');
  const navigate = useNavigate();

  let pkg = null;
  if (packageId) {
    pkg = places.find(p => p.id === packageId);
  } else if (destinationSlug) {
    pkg = destinations.find(d => d.slug === destinationSlug);
  }

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    hotel: '',
    travelDate: '',
    travelers: 1,
    requests: '',
    terms: false,
  });

  if (!pkg) return <p>Package not found.</p>;

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/; // Starts with 6-9 and has 10 digits
    return phoneRegex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date();
    const selectedDate = new Date(formData.travelDate);
    const fifteenDaysLater = new Date(today);
    fifteenDaysLater.setDate(today.getDate() + 15);

    if (!formData.terms) {
      alert("Please accept the terms and conditions.");
      return;
    }

    if (selectedDate < fifteenDaysLater) {
      alert("You can only book for dates at least 15 days in the future.");
      return;
    }

    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validatePhoneNumber(formData.phone)) {
      alert("Please enter a valid 10-digit Indian phone number starting with 6-9.");
      return;
    }

    try {
      const userEmail = localStorage.getItem('userEmail');
      if (!userEmail) {
        alert('User is not logged in. Please log in to confirm your booking.');
        return;
      }
    
      const newBooking = {
        id: Date.now(),
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        hotel: formData.hotel,
        date: formData.travelDate,
        travelers: formData.travelers,
        requests: formData.requests,
        destination: pkg.title || pkg.name,
        status: 'Confirmed',
        paymentStatus: 'Pending',
        packagePrice: pkg.price || 0,
      };
    
      const allBookings = JSON.parse(localStorage.getItem('bookings')) || [];
      const userBookings = allBookings.filter(booking => booking.email === userEmail) || [];
      allBookings.push(newBooking);
      userBookings.push(newBooking);
      console.log(userBookings);
    
      localStorage.setItem('bookings', JSON.stringify(allBookings));
      const allBookings1 = JSON.parse(localStorage.getItem('bookings')) || [];
      console.log(allBookings1);
      alert(`Booking confirmed for ${formData.fullName}!\nRedirecting to payment...`);
      navigate(`/payment?bookingId=${newBooking.id}`);
    } catch (error) {
      console.error('Error saving booking:', error);
      alert('An error occurred while saving your booking. Please try again.');
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white text-center">
              <h3 className="mb-0">Book Your Trip</h3>
              <p className="mb-0">{pkg.title || pkg.name}</p>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      className="form-control"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <HotelSelector
                      value={formData.hotel}
                      onChange={handleChange}
                      hotels={pkg.hotels}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Travel Date</label>
                    <input
                      type="date"
                      name="travelDate"
                      className="form-control"
                      min={new Date().toISOString().split('T')[0]}
                      required
                      value={formData.travelDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Number of Travelers</label>
                    <input
                      type="number"
                      name="travelers"
                      className="form-control"
                      min="1"
                      value={formData.travelers}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Special Requests</label>
                  <textarea
                    name="requests"
                    className="form-control"
                    rows="3"
                    value={formData.requests}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    name="terms"
                    className="form-check-input"
                    id="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="terms">
                    I agree to the <Link to="/terms" target="_blank">terms and conditions</Link>
                  </label>
                </div>

                <button type="submit" className="btn btn-success w-100">Confirm Booking</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;