import React from 'react'
import Hero from '../components/blog/Hero'
import Posts from '../components/blog/Posts'
import Navbar from '../components/Navbar'
import Register from '../components/Register'

const Blog = () => {
    return (
        <div>
            <Navbar title="virtual conference blog"/>
            <Hero/>
            <Posts/>
            <Register/>
        </div>
    )
}

export default Blog
