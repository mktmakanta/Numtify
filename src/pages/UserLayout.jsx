import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

export default function UserLayout() {
  return (
    <>
      <Nav />
      <section className=" md:grid grid-cols-10 bg-sky-100 h-screen ">
        <div className="hidden md:block   lg:col-span-2">
          <Sidebar />
        </div>
        <main className="md:col-span-8 p-5  overflow-y-scroll  ">
          <Outlet />
        </main>
      </section>
    </>
  );
}
