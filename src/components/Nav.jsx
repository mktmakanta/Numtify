import React from "react";
import { useState } from "react";
import CloseIcon from "../minicomponents/CloseIcon";
import HambugerIcon from "../minicomponents/HambugerIcon";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className=" bg-blue-50 text-black font-raleway font-medium sticky top-0">
      <nav className="max-w-8xl mx-auto px-6 ">
        <div className="flex justify-between items-center h-20">
          <div className="w-28 h-full">
            <img
              className="w-full h-full"
              src="src/assets/icons/numtify.svg"
              alt="Numtify logo"
            />
          </div>
          <div className="hidden md:flex gap-12 items-center">
            <div className=" bg-blue-500 text-white h-full px-12 py-7">
              NGN 857
            </div>
            <NavLink
              to="/"
              className=" mr-10 text-blue-600 font-medium px-9 py-2 rounded-md"
            >
              Logout
            </NavLink>
          </div>

          <div className="md:hidden flex items-center z-30">
            <div className=" bg-blue-500 text-white h-full px-6 py-7 mr-4">
              NGN 857
            </div>
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
            className="md:hidden absolute bg-white right-0 w-1/2 text-center pt-28 font-medium h-screen  top-0 space-y-5
        "
          >
            <NavLink
              to="/user"
              className="block px-2 py-2 text-sm hover:bg-blue-500 hover:text-white"
            >
              Order Number
            </NavLink>
            <NavLink
              to="orders"
              className="block px-2 py-2 text-sm hover:bg-blue-500  hover:text-white"
            >
              View Orders
            </NavLink>
            <NavLink
              to="addfunds"
              className="block px-2 py-2 text-sm hover:bg-blue-500  hover:text-white"
            >
              Add funds
            </NavLink>
            <NavLink
              to="account"
              className="block px-2 py-2 text-sm hover:bg-blue-500  hover:text-white"
            >
              Account
            </NavLink>
            <NavLink
              to="/"
              className="block px-2 py-2 text-sm hover:bg-blue-500  hover:text-white"
            >
              Logout
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}
