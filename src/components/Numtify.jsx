import React, { useState } from "react";
import CloseIcon from "../minicomponents/CloseIcon";
import HambugerIcon from "../minicomponents/HambugerIcon";
import HeroServices from "../minicomponents/HeroServices";
import GetStarted from "./GetStarted";
import Footer from "../minicomponents/Footer";

export default function Numtify() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className=" bg-blue-200 text-black font-raleway font-medium">
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
              <a href="/about" className="">
                Login
              </a>
              <a
                href="/services"
                className=" mr-10 bg-blue-600 text-white px-9 py-2 rounded-md"
              >
                Sign Up
              </a>
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
              className="md:hidden absolute bg-white right-0 w-1/2 text-center pt-28 font-medium h-full  top-0 space-y-5
            "
            >
              <a
                href="/about"
                className="block px-2 py-2 text-sm hover:bg-blue-500 hover:text-white"
              >
                Contact Us
              </a>
              <a
                href="/services"
                className="block px-2 py-2 text-sm hover:bg-blue-500  hover:text-white"
              >
                Login
              </a>
              <a
                href="/contact"
                className="block px-2 py-2 text-sm hover:bg-blue-500  hover:text-white"
              >
                Sign Up
              </a>
            </div>
          )}
        </nav>

        <section className="p-4 pt-14 ">
          <div className="hero-description">
            <h1 className="text-6xl font-bold leading-snug ">
              The Best Online SMS Verification Service
            </h1>
            <p className="my-6">
              With our fast sms verification service, you can protect your
              online identity by using our one-time-use non-VoIP phone numbers.
            </p>
            <div className="h-14 w-full  ">
              <input
                className="h-full w-2/3 rounded-l-sm focus:outline-blue-300 focus:outline-4 px-2 caret-slate-400"
                placeholder="Enter Email Address"
                type="email"
              />{" "}
              <button
                className="h-full px-5 py-2 bg-blue-500 rounded-r-sm text-white"
                type="submit"
              >
                {" "}
                Sign Up
              </button>
            </div>
          </div>
          <div className="hero-image  mt-7 mx-auto">
            <img
              className=" w-full h-full "
              src="src/assets/images/hero-image.png"
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
