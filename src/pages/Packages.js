import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PackageCard from './PackageCard';
import '../Styles/Packages.css';

const packages = [
  {
    title: "Beach Paradise",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "Relax on sunny beaches with crystal-clear waters and white sand.",
  },
  {
    title: "Mountain Escape",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    description: "Get away to serene mountains and enjoy cool, fresh air.",
  },
  {
    title: "City Lights",
    image: "https://plus.unsplash.com/premium_photo-1738486447889-5a5519316d2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2l0eSUyMExpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D",
    description: "Explore vibrant cities with rich culture and exciting nightlife.",
  },
  {
    title: "Desert Adventure",
    image: "https://media.istockphoto.com/id/1224021113/photo/indian-cameleers-camel-driver-with-camel-silhouettes-in-dunes-on-sunset-jaisalmer-rajasthan.webp?a=1&b=1&s=612x612&w=0&k=20&c=DgMNlnNSzsOfPvu3OSDGUg1oJTwpXyc0gbmI9N_a-c0=",
    description: "Ride camels, camp under the stars, and experience desert life.",
  },
  {
    title: "Tropical Rainforest",
    image: "https://plus.unsplash.com/premium_photo-1673651332326-0c18b2028353?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VHJvcGljYWwlMjBSYWluZm9yZXN0fGVufDB8fDB8fHww",
    description: "Discover exotic wildlife and lush greenery in tropical jungles.",
  },
  {
    title: "Historic Europe",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    description: "Walk through centuries of history across beautiful European cities.",
  },
  {
    title: "Snowy Getaway",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    description: "Enjoy winter sports or relax in cozy lodges with snowy views.",
  },
  {
    title: "Island Hopping",
    image: "https://images.unsplash.com/photo-1648647956315-4d3b5cb4c243?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXNsYW5kJTIwaG9wcGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    description: "Hop between remote islands, each offering unique experiences.",
  },
  {
    title: "Safari Expedition",
    image: "https://images.unsplash.com/photo-1667550427815-197a7dc432bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFNhZmFyaSUyMEV4cGVkaXRpb258ZW58MHx8MHx8fDA%3D",
    description: "See wild animals in their natural habitat on a guided safari.",
  },
  {
    title: "Wellness Retreat",
    image: "https://media.istockphoto.com/id/689654176/photo/young-woman-doing-yoga-exercises-in-the-summer-city-park-health-lifestyle-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=00NMhEx3VQspoUoxI6m4fB9Hosja7Vx6ipr3on74A64=",
    description: "Rejuvenate with yoga, meditation, and spa treatments in nature.",
  },
  {
    title: "Countryside Charm",
    image: "https://images.unsplash.com/photo-1706204680485-c9f95531d894?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fENvdW50cnlzaWRlJTIwQ2hhcm18ZW58MHx8MHx8fDA%3D",
    description: "Unwind in peaceful countryside villages with rolling green hills and local culture.",
  },
  {
    title: "Cultural India",
    image: "https://media.istockphoto.com/id/825020012/photo/indian-palace.webp?a=1&b=1&s=612x612&w=0&k=20&c=Pd45tGIIlRvITZYVbPudq1h1pQrFQeV50p60VE8_LlM=",
    description: "Experience vibrant festivals, ancient temples, and rich traditions across India.",
  },
  {
    title: "Northern Lights",
    image: "https://media.istockphoto.com/id/831508784/photo/purple-and-green-northern-lights.webp?a=1&b=1&s=612x612&w=0&k=20&c=GTJrjAOU7QpKqCpuqEUCAD1030dfHt5qV8aD-z_EVeE=",
    description: "Witness the magical Aurora Borealis in Arctic destinations like Iceland or Norway.",
  },
  {
    title: "Cruise Voyage",
    image: "https://media.istockphoto.com/id/487190592/photo/happy-woman-looking-at-sea-from-a-cruise-ship.webp?a=1&b=1&s=612x612&w=0&k=20&c=3ftLM8MU_hA2OW3zQouGMk13R9jgyX3wr3hBva_lsO8=",
    description: "Sail across oceans or rivers, enjoying luxury, views, and global stops.",
  },
  {
    title: "Underwater Escape",
    image: "https://plus.unsplash.com/premium_photo-1723050993762-1e54121bc649?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VW5kZXJ3YXRlciUyMEVzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",  // Replace with your preferred image URL
    description: "Experience the tranquility of the ocean by staying in an underwater hotel or enjoying snorkeling and diving in crystal-clear waters.",
  }
];


const Packages = () => (
  <Container className="packages-section">
    <h1 className="text-center my-4">Our Packages</h1>
    <Row>
      {packages.map((pkg, index) => (
        <Col key={index} md={4} className="mb-4">
          <PackageCard
            image={pkg.image}
            title={pkg.title}
            description={pkg.description}
            packageId={index}
          />
        </Col>
      ))}
    </Row>
  </Container>
);

export default Packages;