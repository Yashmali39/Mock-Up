import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" sticky top-0 left-0 w-full bg-black text-white py-4 px-6 z-10 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo (Z+1 Position & Larger Size) */}
        <NavLink to="/" className="relative z-10">
          <img
            src="/images/Black-simba-Logo.png"
            alt="Black Simba Logo"
            className="h-20 md:h-24 w-auto p-2"
          />
        </NavLink>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li className="m-1 p-1 font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-600 font-bold" : "text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="m-1 p-1 font-semibold">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-orange-600 font-bold" : "text-white"
              }
            >
              About
            </NavLink>
          </li>
          <li className="m-1 p-1 font-semibold">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-orange-600 font-bold" : "text-white"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
