import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full px-4 py-5 sticky inset-0 z-50">
      <div className="max-w-4xl mx-auto flex justify-center ">
        <div className="flex items-center w-150 justify-center gap-8 sm:gap-12 border border-gray-700 bg-gray-600/10 backdrop-blur-2xl rounded-full px-10 sm:px-16 py-3 ">

          <a
            href="#home"
            className="text-sm sm:text-base font-main  text-gray-300 font-bold hover:text-white transition-colors"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm sm:text-base font-main text-gray-300 font-bold hover:text-white transition-colors"
          >
            About
          </a>

          <a
            href="#projects"
            className="text-sm sm:text-base font-main text-gray-300 font-bold hover:text-white transition-colors"
          >
            Projects
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;