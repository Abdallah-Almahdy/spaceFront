// src/pages/CreateAccount.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

function RightSide() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Account Created:", formData);
  };

  return (
<div className="bg-red-300 w-full">
        {/* اللوجين في الأعلى */}
        <div className="absolute top-10 right-10 text-lg">
          <span className="mr-3">Already have an account?</span>
          <Link to="/signin">
            <button className="border-2 px-6 py-2 text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white rounded-full">
              Sign in
            </button>
          </Link>
        </div>
      <div className="w-full flex items-center justify-center bg-white relative px-10 h-full">



        {/* الفورم */}
        <div className="max-w-xl w-full">
          <h2 className="text-3xl font-bold mb-2">CREATE AN ACCOUNT</h2>
          <p className="text-gray-500 mb-8">
            Create your account to explore new frontiers
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block mb-2 font-medium">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="Sample@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-5 py-3 rounded-lg border-gray-300 text-lg"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 font-medium">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border px-5 py-3 rounded-lg border-gray-300 text-lg"
              />
            </div>

            {/* Terms */}
            <p className="text-gray-500 text-sm">
              By creating account, you agree to our{" "}
              <span className="text-blue-600 font-semibold cursor-pointer">
                Terms & Conditions
              </span>
            </p>

            {/* زر إنشاء الحساب */}
            <button
              type="submit"
              className="px-10 bg-gradient-to-r from-yellow-400 to-yellow-400 text-black py-3 rounded-full font-semibold text-lg hover:opacity-90 shadow-lg"
            >
              Create an account
            </button>
          </form>

          {/* أو أنشئ حساب باستخدام */}
          <div className="mt-8">
            <p className="text-center text-gray-500 mb-4">
              Or create an account using:
            </p>
            <div className="flex justify-center space-x-4">
              <button className="flex items-center px-4 py-2 border rounded-full hover:bg-gray-50">
                <span className="ml-2">Facebook</span>
              </button>
              <button className="flex items-center px-4 py-2 border rounded-full hover:bg-gray-50">
                <span className="ml-2">Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
   </div>
  );
}

export default RightSide;

