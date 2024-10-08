import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthNav from "../minicomponents/AuthNav";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    confirmUsername: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.username !== formData.confirmUsername) {
      setError("Usernames do not match");
    } else {
      navigate("/user");
    }
  };

  return (
    <div className="font-raleway min-h-screen bg-blue-200">
      <AuthNav />
      <div className="p-5">
        <div className="w-full mx-auto top-5 md:top-40 lg:top-20 relative max-w-xl p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Create an account</h2>
          <div>
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="text-red-600 text-sm underline underline-offset-2"
            >
              Login
            </NavLink>
          </div>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-3">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="block p-3  ring-1 rounded-sm h-12  focus:outline outline-blue-700 ring-neutral-200 w-full"
                required
              />
            </div>

            <div className="mb-3">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="block p-3  ring-1 rounded-sm h-12  focus:outline outline-blue-700 ring-neutral-200 w-full"
                required
              />
            </div>

            <div className="mb-3">
              <label className="block text-gray-700">Confirm Username</label>
              <input
                type="text"
                name="confirmUsername"
                value={formData.confirmUsername}
                onChange={handleInputChange}
                className="block p-3  ring-1 rounded-sm h-12  focus:outline outline-blue-700 ring-neutral-200 w-full"
                required
              />
            </div>

            <div className="mb-3">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="block p-3  ring-1 rounded-sm h-12  focus:outline outline-blue-700 ring-neutral-200 w-full"
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="px-10 mt-2 bg-blue-500 text-white py-2 rounded-sm hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
