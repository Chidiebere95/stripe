import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/pricing/Hero";
import Hero2 from "../components/pricing/Hero2";
import Register from "../components/Register";

const Pricing = () => {
  return (
    <div>
      <Navbar title="Virtual Conference Pricing" />
      <div className=" bg-black text-white bg-shapesPricing bg-fixed bg-cover bg-center-top bg-no-repeat">
        
      <Hero/>
      <Hero2/>
      </div>

      <Register/>
    </div>
  );
};

export default Pricing;
