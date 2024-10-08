import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthNav from "../minicomponents/AuthNav";
export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username && formData.password) {
      navigate("/user");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="font-raleway min-h-screen bg-blue-200">
      <AuthNav />
      <div className="p-5 h-full w-full ">
        <div className="w-full mx-auto md:top-40 top-28 lg:top-32 relative max-w-xl p-8 bg-white rounded-lg shadow-lg z-10">
          <h2 className="text-2xl font-semibold mb-4">Login to your account</h2>
          <div>
            Don't have an account?{" "}
            <NavLink
              to="/signup"
              className="text-red-600 text-sm underline underline-offset-2"
            >
              Register
            </NavLink>
          </div>
          <form onSubmit={handleSubmit} className="mt-6">
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
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className=" block p-3  ring-1 rounded-sm h-12  focus:outline outline-blue-700 ring-neutral-200 w-full"
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm my-2">{error}</p>}

            <button
              type="submit"
              className="px-10 bg-blue-500 hover:bg-blue-600 transition duration-300 text-white py-2 rounded-sm  "
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
