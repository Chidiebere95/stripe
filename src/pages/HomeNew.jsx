import React, { Fragment } from 'react'
import Virtual from '../components/Virtual'
import Layout from '../components/Layout'
import Speakers from '../components/Speakers'
import Sponsors from '../components/Sponsors'
import Hero from '../components/Hero'
import Faq from '../components/Faq'
import Register from '../components/Register'

const Home = () => {
    return (
      <Fragment>
        <Layout>
          <Hero />
          <Virtual />
          <Speakers />
          <Sponsors />
          <Faq />
          <Register />
        </Layout>
      </Fragment>
    );
}

export default Home
