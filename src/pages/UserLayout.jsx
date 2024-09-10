import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

export default function UserLayout() {
  return (
    <>
      <Nav />
      <section className=" md:grid grid-cols-10 bg-sky-100  min-h-screen pb-14 ">
        <div className="hidden md:block  md:col-span-2">
          <Sidebar />
        </div>
        <main className="md:col-span-8 p-5  overflow-y-scroll  ">
          <Outlet />
        </main>
      </section>
    </>
  );
}
