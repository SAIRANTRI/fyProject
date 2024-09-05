import { useState } from 'react';
import React from 'react';
import { navigation } from '../constants';
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b border-gradient-to-r from-purple-500 via-white to-blue-500 lg:bg-n-8/90 lg:backdrop-blur-sm bg-n-8/90 backdrop-blur-sm">
      <header className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 py-4">
        <a href="/" className="text-white text-2xl font-bold">
          Name
        </a>
        <button
          className="lg:hidden text-white text-3xl focus:outline-none"
          onClick={toggleNavigation}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row lg:items-center w-full lg:w-auto lg:static absolute left-0 lg:left-auto top-16 lg:top-auto bg-n-8 lg:bg-transparent transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-auto">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-lg lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
