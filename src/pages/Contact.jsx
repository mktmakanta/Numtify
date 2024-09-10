import React, { useState } from "react";

import AuthNav from "../minicomponents/AuthNav";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We have received your message.`);
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(true);
  };

  return (
    <section className="bg-blue-200 font-raleway  min-h-screen">
      <AuthNav />
      <div className=" p-5 mt-10">
        <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
          <p className="text-gray-600 text-center mb-8">
            Feel free to reach out to us for any inquiries or feedback.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label className=" mb-2 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className=" p-3  ring-1 rounded-sm h-12  focus:outline outline-blue-700 ring-neutral-200"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className=" mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className=" p-3  ring-1 rounded-sm h-12  focus:outline outline-blue-700 ring-neutral-200"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className=" mb-2 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className=" p-3  ring-1 rounded-sm h-12  focus:outline outline-blue-700 ring-neutral-200"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="  hover:bg-blue-600 px-10 bg-blue-500 text-white py-2 rounded-sm  transition duration-300"
            >
              Send Message
            </button>
          </form>

          {submitted && (
            <p className="text-center mt-6 text-green-500 font-semibold">
              Your message has been successfully sent!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
