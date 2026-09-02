import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#about") {
      setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  }, [location]);



  return (
    <nav className="w-full px-4 py-5 sticky inset-0 z-50">
      <div className="max-w-4xl mx-auto flex justify-center ">
        <div className="flex items-center w-150 justify-center gap-8 sm:gap-12 border border-gray-700 bg-gray-600/10 backdrop-blur-2xl rounded-full px-10 sm:px-16 py-3 ">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm sm:text-base font-main font-bold 
               hover:text-white transition-colors
               ${isActive ? "text-white" : "text-gray-300 hover:text-white"}`
            }          
          >
            Home
          </NavLink>

          <a
            href="/#about"
            className="text-sm sm:text-base font-main text-gray-300 font-bold hover:text-white transition-colors"
          >
            About
          </a>

          <NavLink

            to="/projects"
            className={({ isActive }) =>
              `text-sm sm:text-base font-main font-bold 
               hover:text-white transition-colors
               ${isActive ? "text-white" : "text-gray-300 hover:text-white"}`
            }          >
            Projects
          </NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;