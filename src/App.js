import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from './pages/About';
import Destinations from './pages/Destinations';
import Packages from './pages/Packages';
import MyBookings from './pages/MyBookings';
import Contact from './pages/Contact';
import HomeFAQs from './pages/HomeFAQs';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Login from './pages/Login';
import RequireAuth from './components/RequireAuth';
import Booking from './pages/Booking';
import Signup from './pages/Signup';
import PackageDetails from './pages/PackageDetails';
import Payment from './pages/Payment';
import DestinationDetails from './pages/DestinationDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destination/:slug" element={<DestinationDetails />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:id" element={<PackageDetails />} />
        <Route path="/booking" element={<RequireAuth><Booking /></RequireAuth>} />  
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<HomeFAQs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;