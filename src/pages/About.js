import React from 'react';
import { Container } from 'react-bootstrap';
import '../Styles/About.css';

const AboutUs = () => (
  <section className="about-section">
    <Container>

      <div className="about-top mb-5">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            At TravelMate, we are passionate about crafting unforgettable travel experiences. Our dedicated team of travel experts works tirelessly to curate personalized journeys that cater to your unique preferences and desires. Whether you're seeking adventure, relaxation, or cultural immersion, we have the perfect package for you.
          </p>
          <h3>Our Mission</h3>
          <p>
            Our mission is to make travel simple, affordable, and unforgettable. We aim to provide you with expertly crafted travel itineraries that reflect your interests, whether it's exploring new cultures, relaxing on pristine beaches, or embarking on thrilling adventures. At TravelMate, every journey is tailored to ensure you experience the best the world has to offer.
          </p>
        </div>
        <div className="about-image-container">
          <img
            src="https://images.unsplash.com/photo-1649298821446-21602d36be18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFib3V0JTIwdXMlMjBpbWFnZSUyMGZvciUyMHRyYXZlbCUyMGJvb2tpbmclMjBhZ2VuY3l8ZW58MHx8MHx8fDA%3D"
            alt="About Us"
            className="about-image"
          />
        </div>
      </div>

      <div>
        <h3>What Sets Us Apart</h3>
        <ul>
          <li><strong>Personalized Travel Planning:</strong> We take the time to understand your travel preferences and create itineraries that cater to your individual needs.</li>
          <li><strong>Exclusive Deals:</strong> Thanks to our strong relationships with global partners, we offer exclusive discounts and special offers not available elsewhere.</li>
          <li><strong>Expert Guidance:</strong> Our team of seasoned travel experts is here to offer advice, answer your questions, and help you navigate every step of the planning process.</li>
          <li><strong>End-to-End Service:</strong> From flight booking to accommodation and local experiences, we provide a complete package, ensuring a seamless and stress-free journey.</li>
        </ul>
      </div>
      <div>
        <h3>Our Values</h3>
        <ul>
          <li><strong>Customer First:</strong> We prioritize your satisfaction and strive to exceed your expectations at every step of your journey.</li>
          <li><strong>Integrity:</strong> We believe in transparency and honesty in all our dealings, ensuring you can trust us with your travel plans.</li>
          <li><strong>Innovation:</strong> We continuously seek new ways to enhance your travel experience through technology and creativity.</li>
          <li><strong>Sustainability:</strong> We are committed to promoting eco-friendly travel practices and supporting local communities.</li>
        </ul>
      </div>
    </Container>
  </section>
);

export default AboutUs;
