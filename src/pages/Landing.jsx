import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/landing/Hero";
import Register from "../components/Register";
import Date from "../components/landing/Date";
import Info from "../components/landing/Info";
import Join from "../components/landing/Join";
import Dates from "../components/landing/Dates";
import BookSeat from "../components/landing/BookSeat";
import News from "../components/landing/News";

const Landing = () => {
  return (
    <div>
      <Navbar title="Virtual Conference Pricing" />
      <div className=" bg-black text-white bg-landingBgMain bg-fixed bg-cover bg-center-top bg-no-repeat">
        <Hero />
        <Date />
        <Info />
        <Join/>
        <Dates/>
        <BookSeat/>
        <News/>
      </div>
      <Register />
    </div>
  );
};

export default Landing;
