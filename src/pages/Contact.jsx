import React from 'react'
import Container from '../components/contact/Container'
import Form from '../components/contact/Form'
import Hero from '../components/contact/Hero'
import Navbar from '../components/Navbar'
import Register from '../components/Register'

const Contact = () => {
    return (
        <div className="">
            <Navbar title="Virtual Conference Contact"/>
            <Container>
            <Hero/>
            <Form/>
            </Container>
            <Register/>
        </div>
    )
}

export default Contact
