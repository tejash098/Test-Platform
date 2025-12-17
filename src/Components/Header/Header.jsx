import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-slate-900 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-white tracking-tight cursor-pointer">
              Quiz<span className="text-sky-500">App</span>
            </div>
            <nav>
              <ul className="flex gap-8 text-slate-300 font-medium">
                <NavLink to={"/"} className={(isActive) => (isActive ? "text-sky-400" : "hover:text-sky-400 transition-colors duration-300 cursor-pointer")}>
                  Home
                </NavLink>
                <NavLink className={(isActive) => (isActive ? "text-sky-400" : "hover:text-sky-400 transition-colors duration-300 cursor-pointer")}>
                  React Quiz
                </NavLink>
                <NavLink className={(isActive) => (isActive ? "text-sky-400" : "hover:text-sky-400 transition-colors duration-300 cursor-pointer")}>
                  Python Quiz
                </NavLink>
                <NavLink className={(isActive) => (isActive ? "text-sky-400" : "hover:text-sky-400 transition-colors duration-300 cursor-pointer")}>
                  JavaScript Quiz
                </NavLink>
                <NavLink className={(isActive) => (isActive ? "text-sky-400" : "hover:text-sky-400 transition-colors duration-300 cursor-pointer")}>
                  SQL Quiz
                </NavLink>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
