import React, { useEffect } from "react";
import Logo from "../assets/logo.png"; // Assuming you have a logo image in the assets folder
import { NavLink, useLocation } from "react-router-dom";
import { Menu, Minus } from "lucide-react";

const Header = ({ activePage, setActivePage }) => {
  const navItems = [
    { nav: "Home", path: "/home" },
    { nav: "Committee", path: "/org-committee" },
    { nav: "Faculty", path: "/faculty" },
    { nav: "Notice", path: "/notice" },
    { nav: "Contact", path: "/contact" },
  ];
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="relative z-40">
      <header className="bg-blue-900 text-white py-4 z-50 relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center w-full space-x-2">
            <div className="bg-white text-blue-900 rounded-full flex items-center justify-center font-bold text-xl ml-2">
              <img
                src={Logo}
                alt=""
                className="rounded-full w-14 h-14 object-cover"
              />
            </div>
            <div className="w-full">
              <h1 className="lg:text-2xl font-bold flex-wrap w-full">
                Shree Narayani Gandaki Shadharan Tatha Sanskrit Secondary School
              </h1>
              <p className="text-sm">Excellence in Education Since 2022 BS</p>
            </div>
          </div>
          <div className="block lg:hidden mr-5">
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center px-2 gap-1.5 w-10 h-10 relative"
            >
              <span
                className={`absolute w-8 h-1 bg-white transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 top-2.5" : "rotate-0 top-1.5"
                }`}
              ></span>
              <span
                className={`absolute w-8 h-1 bg-white transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : "opacity-100 top-4"
                }`}
              ></span>
              <span
                className={`absolute w-8 h-1 bg-white transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45 top-2.5" : "rotate-0 top-6.5"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </header>
      <nav className="bg-blue-800 text-white lg:block hidden">
        <div className="container mx-auto px-4 py-3">
          <ul className="flex flex-wrap">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setActivePage(item.nav)}
                  className={`px-4 py-3 hover:bg-blue-700 ${
                    location.pathname === item.path ? "bg-blue-700" : ""
                  }`}
                >
                  {item.nav}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div
        className={`absolute top-full left-0 w-full bg-blue-800 text-white transform transition-transform duration-300 ease-in-out z-30 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } lg:hidden`}
      >
        <ul className="flex flex-col w-full ">
          {navItems.map((item) => (
            <li key={item.path} className="w-full">
              <NavLink
                to={item.path}
                onClick={() => setActivePage(item.nav)}
                className={` flex px-4 py-3 w-full hover:bg-blue-700 ${
                  location.pathname === item.path ? "bg-blue-700" : ""
                }`}
              >
                {item.nav}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
