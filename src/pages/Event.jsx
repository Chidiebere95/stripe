
import React from 'react'
import Developer from '../components/event/Developer'
import Hero from '../components/event/Hero'
import Info from '../components/event/Info'
import Navbar from '../components/Navbar'
import Register from '../components/Register'

const  Event = () => {
    return (
        <div>
           <Navbar title="Virtual Conference Event"/>
           <Hero/>
           <Developer/>
           <Info/>
           <Register/>
          
        </div>
    )
}

export default Event
