import React from "react";

export default function Account() {
  return (
    <section className="font-raleway  bg-white p-5 pb-10 rounded-lg space-y-6 mt-7">
      <div className="space-y-3">
        <label className="font-semibold block">Email address</label>
        <input
          className="block p-3  ring-1 rounded-sm h-12  focus:outline outline-blue-700 ring-neutral-200 w-full"
          type="email"
          value="admin@gmail.com"
        />
        <button className="px-6 py-3 font-semibold rounded-md border border-gray-300 bg-blue-600 text-white">
          Change email
        </button>
      </div>
      <div className="space-y-3">
        <label className="font-semibold block">Current Password</label>
        <input
          className="block p-3  ring-1 rounded-sm h-12  focus:outline outline-blue-700 ring-neutral-200 w-full"
          type="password"
          value=""
        />
        <label className="font-semibold block">New Password</label>
        <input
          className="block p-3  ring-1 rounded-sm h-12  focus:outline outline-blue-700 ring-neutral-200 w-full"
          type="password"
          value=""
        />
        <button className=" px-3 lg:px-6 py-3 font-semibold rounded-md border border-gray-300 bg-blue-600 text-white">
          Change Password
        </button>
      </div>
    </section>
  );
}
