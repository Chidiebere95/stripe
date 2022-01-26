import React from "react";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import Schedules from "../components/schedule/Schedules";

const Schedule = () => {
  return (
    <div>
      <Navbar title="virtual conference schedule" />
      <Schedules/>
      <Register/>
    </div>
  );
};
 
export default Schedule;
