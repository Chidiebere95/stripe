// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hero from "./Hero";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";

function App() {
  return (
    <div className="">
      <Navbar />
      <Submenu />
      <Hero />
      <Sidebar />
    </div>
  );
}

export default App;
