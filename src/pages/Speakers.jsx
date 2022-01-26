import React from "react";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import Date from "../components/speakers/Date";
import Developers from "../components/speakers/Developers";
import Hero from "../components/speakers/Hero";
import SignUp from "../components/speakers/SignUp";

const Speakers = () => {
  return (
    <div>
      <Navbar title="virtual conference speakers" />
      <Hero />
      <Developers/>
      <SignUp/> 
      <Date/> 
      <Register/>
    </div>
  );
};

export default Speakers;
