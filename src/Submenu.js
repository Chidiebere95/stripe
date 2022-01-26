import React, { useRef, useEffect, useState } from "react";
import { useGlobalContext } from "./context";
import array from "./data";
const Submenu = () => {
  const [data, setData] = useState(array);
  const [subMenuPage, setSubMenuPage] = useState({ page: "hello", links: [] });
  const container = useRef(null);
  const context = useGlobalContext();
  const { isSubMenuOpen, openSubMenu, location, page } = context;

  const handleSubMenu = () => {
    openSubMenu();
  };
  useEffect(() => {
    const { center, bottom } = location;
    // console.log(container);
    container.current.style.left = `${center}px`;
    container.current.style.top = `${bottom}px`;
    const item = data.find((item) => item.page === page);
    if (item) {
      setSubMenuPage(item);
    }
    // console.log(subMenuPage);
  }, [location,data,page]);

  // console.log(page);
  return (
    <div
      ref={container}
      // onMouseOver={handleSubMenu}
      className={`${
        isSubMenuOpen
          ? "absolute z-50  transition-all ease-linear duration-200 top-16  left-1/2 bg-white shadow-2xl transform -translate-x-2/4 rounded p-8  hidden show"
          : "absolute top-20 left-1/2 transform -translate-x-2/4  bg-white shadow-2xl p-4 hidden"
      }`}
    >
      <div className="submenu-top"></div>
      <h1 className="font-semibold mb-4 capitalize">{subMenuPage.page}</h1>
      <div className="flex justify-between gap-x-32">
        {subMenuPage.links.map((item, index) => (
          <div className="submenu-gray flex gap-x-4  items-center capitalize">
            {item.icon}
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Submenu;
