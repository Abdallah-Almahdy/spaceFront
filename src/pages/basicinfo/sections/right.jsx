import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RightSide() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    affiliation: "",
    country: "",
    level: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full h-full flex items-center justify-center px-6 md:px-10 relative">
      {/* Login */}
      <div className="absolute top-6 right-6 text-sm">
        <span className="mr-2 text-gray-500">Already have an account?</span>
        <Link
          to="/login"
          className="border border-blue-600 text-blue-600 px-4 py-1 rounded-full hover:bg-blue-600 hover:text-white transition"
        >
          Sign in
        </Link>
      </div>

      {/* Form */}
      <div className="w-full max-w-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          YOUR BASIC INFORMATIONS
        </h2>
        <p className="text-gray-500 mb-8">
          Please complete your basic informations.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Gmail"
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />

          {/* Passwords */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          {/* Affiliation + Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="affiliation"
              placeholder="Affiliation"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            />
            <select
              name="country"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 text-gray-500"
            >
              <option>Please select</option>
              <option>Egypt</option>
              <option>USA</option>
            </select>
          </div>

          {/* Level + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="level"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 text-gray-500"
            >
              <option>Please select</option>
              <option>Student</option>
              <option>Researcher</option>
            </select>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-40 bg-yellow-400 text-black py-3 rounded-full font-semibold shadow-lg hover:opacity-90"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
