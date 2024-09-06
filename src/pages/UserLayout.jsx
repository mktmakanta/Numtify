import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

export default function UserLayout() {
  return (
    <>
      <Nav />
      <div className=" lg:grid grid-cols-6">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}
