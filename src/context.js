import React, { useState, useContext } from "react";
// import sublinks from './data'
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  const [isSubMenuOpen, setisSubMenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({});
  const openSideBar = () => {
    setisSideBarOpen(true);
  };
  const closeSideBar = () => {
    setisSideBarOpen(false);
  };
  const openSubMenu = (page, cordinates) => {
    setLocation(cordinates);
    setisSubMenuOpen(true);
    setPage(page);
    // console.log(location);
  };
  const closeSubMenu = () => {
    setisSubMenuOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        isSubMenuOpen,
        openSideBar,
        openSubMenu,
        closeSideBar,
        closeSubMenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
