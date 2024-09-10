import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import CloseIcon from "./CloseIcon";
import HambugerIcon from "./HambugerIcon";

export default function AuthNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="max-w-8xl mx-auto px-6 ">
        <div className="flex justify-between items-center h-20">
          <NavLink to="/" className="w-28 h-full">
            <img
              className="w-full h-full"
              src="numtify.svg"
              alt="Numtify logo"
            />
          </NavLink>
          <div className="hidden font-medium md:flex gap-20 items-center">
            <NavLink
              to="/contact"
              className="hover:text-blue-400 transition duration-300"
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/login"
              className="hover:text-blue-400 transition duration-300"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className=" mr-10 bg-blue-500 hover:bg-blue-600 transition duration-300 text-white px-9 py-2 rounded-md"
            >
              Sign Up
            </NavLink>
          </div>

          <div className="md:hidden flex items-center z-30">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <CloseIcon className="text-2xl" />
              ) : (
                <HambugerIcon className="text-4xl" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            className="md:hidden absolute  bg-white right-0 w-1/2 text-center pt-28 font-medium h-full z-20 top-0 space-y-5
            "
          >
            <NavLink
              onClick={() => {
                setIsOpen(false);
              }}
              to="/contact"
              className="block px-2 py-2 text-sm transition duration-300 hover:bg-blue-500 hover:text-white"
            >
              Contact Us
            </NavLink>
            <NavLink
              onClick={() => {
                setIsOpen(false);
              }}
              to="/login"
              className="block px-2 py-2 text-sm transition duration-300 hover:bg-blue-500  hover:text-white"
            >
              Login
            </NavLink>
            <NavLink
              onClick={() => {
                setIsOpen(false);
              }}
              to="/signup"
              className="block px-2 py-2 text-sm  transition duration-300 hover:bg-blue-500  hover:text-white"
            >
              Sign Up
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
}
