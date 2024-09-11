import React, { useState } from "react";
import CloseIcon from "../minicomponents/CloseIcon";
import HambugerIcon from "../minicomponents/HambugerIcon";
import HeroServices from "../minicomponents/HeroServices";
import GetStarted from "./GetStarted";
import Footer from "../minicomponents/Footer";
import { NavLink } from "react-router-dom";

export default function Numtify() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className=" bg-blue-200 text-black font-raleway font-medium ">
        <nav className="max-w-8xl mx-auto px-6 ">
          <div className="flex justify-between items-center h-20">
            <NavLink to="/" className="w-28 h-full">
              <img
                className="w-full h-full"
                src="/numtify.svg"
                alt="Numtify logo"
              />
            </NavLink>
            <div className="hidden md:flex gap-20 items-center">
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

            <div className="md:hidden flex items-center z-40">
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
              className="md:hidden absolute bg-white right-0 w-1/2 text-center pt-28 font-medium h-full z-30 top-0 space-y-5
            "
            >
              <NavLink
                to="/contact"
                className="block px-2 py-2 text-sm hover:bg-blue-500 transition duration-300 hover:text-white"
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/login"
                className="block px-2 py-2 text-sm hover:bg-blue-500 transition duration-300 hover:text-white"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="block px-2 py-2 text-sm hover:bg-blue-500 transition duration-300 hover:text-white"
              >
                Sign Up
              </NavLink>
            </div>
          )}
        </nav>

        {/* hero  */}
        <section className="p-4 pt-14 lg:pb-16 lg:px-16 lg:grid grid-cols-2 ">
          <div className="hero-description">
            <h1 className="text-6xl font-bold leading-tight lg:leading-normal ">
              The Best Online SMS Verification Service
            </h1>
            <p className="my-6">
              With our fast sms verification service, you can protect your
              online identity by using our one-time-use non-VoIP phone numbers.
            </p>
            <div className="h-14 w-full  ">
              <input
                className="h-full w-2/3  p-3  ring-1 rounded-sm  focus:outline outline-blue-700 ring-neutral-200 "
                placeholder="Enter Email Address"
                type="email"
              />{" "}
              <button
                className="h-full px-5 py-2 bg-blue-500 hover:bg-blue-600 transition duration-300 ho rounded-r-sm text-white"
                type="submit"
              >
                {" "}
                Sign Up
              </button>
            </div>
          </div>
          <div className="hero-image  mt-7 lg:mt-0 lg:w-4/6  mx-auto">
            <img
              className=" w-full h-full "
              src="hero-image.png"
              alt="hero image"
            />
          </div>
        </section>
      </header>
      <HeroServices />
      <GetStarted />
      <Footer />
    </>
  );
}
