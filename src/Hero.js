import React from "react";
import img from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const data = useGlobalContext();
  const { isSideBarOpen, closeSubMenu } = data;
  const handleSubMenu = () => {
    closeSubMenu();
    console.log("hero");
  };
  return (
    <section
      onMouseOver={handleSubMenu}
      className={` min-h-screen hero relative -mt-20`}
    >
      <div className=" w-10/12 mx-auto max-w-screen grid md:grid-col-3  items-center lg:items-end pt-44 lg:pt-20 xl:pt-6 md:bg-contain">
        <div className=" md:  max-w-lg md:max-w-none">
          <h1 className="sm:w-96 xl:w-11/12 text-5xl lg:text-8xl font-bold  mb-8 h1 ">
            Payments infrastructure for the internet
          </h1>
          <p className="text-gray-600 mb-4 md:text-xl xl:w-11/12 ">
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="py-1 px-3 rounded bg-gray-800 text-white capitalize  ">
            start now
          </button>
        </div>
        <div className="md:  hidden md:flex justify-self-center z-0">
          <img src={img} alt="phone-img" className="  w-44 lg:w-60 2xl:w-64" />
        </div>
      </div>
      {/* <div className="flex flex-col items- bg-black h-80 justify-center">
          <div className="w-40 h-40 bg-red-500"></div>
          <div className="w-20 h-20 bg-blue-500"></div>
          
      </div> */}
    </section>
  );
};

export default Hero;
