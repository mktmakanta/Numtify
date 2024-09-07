import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import CloseIcon from "../minicomponents/CloseIcon";
import HambugerIcon from "../minicomponents/HambugerIcon";

export default function LoginSignUpNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="max-w-8xl mx-auto px-6 ">
        <div className="flex justify-between items-center h-20">
          <div className="w-28 h-full">
            <img
              className="w-full h-full"
              src="src/assets/icons/numtify.svg"
              alt="Numtify logo"
            />
          </div>
          <div className="hidden md:flex gap-20 items-center">
            <a href="/" className="">
              Contact Us
            </a>
            <NavLink to="/login" className="">
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className=" mr-10 bg-blue-600 text-white px-9 py-2 rounded-md"
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

        {/* mobile */}
        {isOpen && (
          <div
            className="md:hidden absolute bg-white right-0 w-1/2 text-center pt-28 font-medium h-full  top-0 space-y-5
            "
          >
            <a
              href="/about"
              className="block px-2 py-2 text-sm hover:bg-blue-500 hover:text-white"
            >
              Contact Us
            </a>
            <NavLink
              to="login"
              className="block px-2 py-2 text-sm hover:bg-blue-500  hover:text-white"
            >
              Login
            </NavLink>
            <NavLink
              to="signup"
              className="block px-2 py-2 text-sm hover:bg-blue-500  hover:text-white"
            >
              Sign Up
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
}
