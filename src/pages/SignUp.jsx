import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginSignUpNav from "../minicomponents/LoginSignUpNAv";

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
      <LoginSignUpNav />
      <div className="w-full mx-auto top-28 relative max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Create an account</h2>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-3">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:ring-1 focus:ring-2 focus:ring-blue-400"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:ring-1 focus:ring-2 focus:ring-blue-400"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:ring-1 focus:ring-2 focus:ring-blue-400"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:ring-1 focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-44 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
