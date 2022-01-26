import React, { useState } from "react";
import sublinks from "./data";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const [data, setdata] = useState(sublinks);
  const context = useGlobalContext();
  const { closeSideBar, isSideBarOpen } = context;
  // console.log(context);

  const handleSideBar = () => {
    closeSideBar();
  };
  return (
    <div
      className={ `${isSideBarOpen?"sidebar-bg z-30 absolute top-0 bottom-0 left-0 right-0 p-4  md:hidden ": " z-30 absolute top-0 bottom-0 left-0 right-0 p-4  md:hidden scale-zero"} `
      }
    >
      <div className="relative  h-full">
        <div
          className={
            " sidebar  bg-white h-full shadow-lg rounded  mx-auto "
          }
        >
          <div className="relative px-8 py-16">
            <button
              className=" absolute top-8 right-8 text-3xl cursor-pointer"
              onClick={handleSideBar}
            >
              <FaTimes />
            </button>
            {data.map((item, index) => {
              const { page, links } = item;
              // console.log(item);
              return (
                <div className="mb-6 capitalize " key={index}>
                  <h5 className="font-bold mb-4 sidebar-header">{page}</h5>
                  <div className=" grid grid-cols-2">
                    {links.map((item, index) => {
                      return (
                        <button
                          key={index}
                          className="capitalize flex items-center gap-x-4 mb-2 cursor-pointer"
                        >
                          <i className="  text-lg sidebar-header">
                            {item.icon}
                          </i>
                          <h5 className="text-sm"> {item.label}</h5>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
