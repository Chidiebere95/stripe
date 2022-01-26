import React from "react";
import { useGlobalContext } from "./context";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const context = useGlobalContext();
  const { openSideBar,openSubMenu,closeSubMenu } = context;
  // console.log(context);

  const handleSideBar = () => {
    openSideBar();
  };
  const handleSubmenu = (e) => {
    const text=e.target.textContent
    const bottom=e.target.getBoundingClientRect().bottom-5
    const left= e.target.getBoundingClientRect().left
    const right= e.target.getBoundingClientRect().right
    const center=(left+right)/2
    // console.log(text);
    openSubMenu(text,{bottom,center});

  };
  const handleSubmenuClose=(e)=>{
    if(!e.target.classList.contains("submenu-btn")){
      // console.log('submenu-btn');
      closeSubMenu()
    }
  }
  return (
    <>
      <nav onMouseOver={handleSubmenuClose} className=" mx-auto  h-20 flex items-center justify-center bg-transparent z-10 relative">
        <div className="w-10/12 max-w-screen flex items-center justify-between">
          <img className="" src={logo} alt="logo" />
          <button
            onClick={handleSideBar}
            className="py-2 px-3 rounded  bg-black text-white md:hidden"
          >
            <FaBars />
          </button>
          <ul className="hidden md:flex  text-white text-lg">
            <li className="capitalize">
              <button onMouseOver={handleSubmenu} className="capitalize px-10 py-4 submenu-btn">products</button>
            </li>
            <li className="capitalize">
              <button onMouseOver={handleSubmenu} className="capitalize px-10 py-4 submenu-btn">developers</button>
            </li>
            <li className="capitalize">
              <button onMouseOver={handleSubmenu} className="capitalize px-10 py-4 submenu-btn">company</button>
            </li>
          </ul>
          <button className="z-10 py-1 px-3 rounded bg-black text-white capitalize hidden md:inline-block">
            {" "}
            sign in
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
