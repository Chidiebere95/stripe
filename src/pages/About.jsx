import React from 'react';
import EventOrganisers from '../components/about/EventOrganisers';
import Faq from '../components/Faq';
import Hero from '../components/about/Hero';
import Register from '../components/Register';
import Sponsors from '../components/Sponsors';
import Virtual from '../components/about/Virtual';
import VirtualBottom from '../components/about/VirtualBottom';
import Layout from '../components/Layout';

const About = () => {
  return (
    <div>
      <Layout title='About Us'>
        <Hero />
        <Virtual />
        <VirtualBottom />
        <EventOrganisers />
        <Faq />
        <Sponsors />
        <Register />
      </Layout>
    </div>
  );
}; 

export default About;
