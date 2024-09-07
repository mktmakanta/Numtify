import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="font-raleway bg-gradient-to-r from-blue-500 to-sky-400 bg-cover h-screen text-white ">
      <div className="flex flex-col pt-10 px-5 space-y-6 font-semibold text-xl">
        <NavLink
          className="block px-5 py-3 rounded-lg text-sm  hover:bg-white hover:text-blue-500"
          to="/user"
        >
          New Order
        </NavLink>

        <NavLink
          className="block px-5 py-3 rounded-lg text-sm  hover:bg-white hover:text-blue-500"
          to="orders"
        >
          {" "}
          Orders
        </NavLink>
        <NavLink
          className="block px-5 py-3 rounded-lg text-sm  hover:bg-white hover:text-blue-500"
          to="addfunds"
        >
          Add funds
        </NavLink>
        <NavLink
          className="block px-5 py-3 rounded-lg text-sm  hover:bg-white hover:text-blue-500"
          to="account"
        >
          Account
        </NavLink>
      </div>
    </aside>
  );
}
