import React from 'react'
import Hero from '../components/home/Hero'
import Topics from '../components/home/Topics'
import Date from '../components/home/Date'
import Navbar from '../components/Navbar'

import Container from '../components/home/Container'
import Register from '../components/Register'

const Home = () => {
    return (
        <div>
            <Navbar title="virtual conference home"/>
            <Hero/>
            <Topics/>
            <Date/>
            <Container/>
            <Register/>
        </div>
    )
}

export default Home
