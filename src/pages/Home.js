import React from 'react';
import Hero from '../pages/Hero';
import HomePackages from '../pages/HomePackages';
import HomePlaces from '../pages/HomePlaces';
import HomeAbout from '../pages/HomeAbout';
import HomeContact from '../pages/HomeContact';
import HomeFAQs from '../pages/HomeFAQs';
import Testimonials from '../pages/Testimonials';  
import TermsPrivacy from '../pages/HomePrivacy';

const Home = () => {
  return (
    <>
      <Hero />
      <HomePackages />
      <HomePlaces />
      <HomeAbout />
      <Testimonials /> 
      <HomeFAQs />
      <HomeContact />
      <TermsPrivacy />
    </>
  );
};

export default Home;
