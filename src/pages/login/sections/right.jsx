// src/pages/CreateAccount.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../../api/authApi";

function RightSide() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
          const res = login({
            username:formData.email,
            password:formData.password
          })
          console.log("Account Created:", formData);

      
    } catch (error) {
      console.log(error)
    }
  };

  return (
<div className="bg-red-300 w-full">
        {/* اللوجين في الأعلى */}
        <div className="absolute top-10 right-10 text-lg">
          <span className="mr-3">Don't have an account?</span>
          <Link to="/create-account">
            <button className="border-2 px-6 py-2 text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white rounded-full">
              Create Account
            </button>
          </Link>
        </div>
      <div className="w-full flex items-center justify-center bg-white relative px-10 h-full">



        {/* الفورم */}
        <div className="max-w-xl w-full">
          <h2 className="text-3xl font-bold mb-2">WELCOME TO EgSA!</h2>
          <p className="text-gray-500 mb-8">
            Sign in and be part of tomorrow's space discoveries
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
               {/* Options */}
                      <div className="flex items-center justify-between text-lg">
                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            name="remember"
                            checked={formData.remember}
                            onChange={handleChange}
                            className="w-5 h-5"
                          />
                          Remember me on this device
                        </label>
                        <Link to="/forget-password" className="text-blue-600 hover:underline">
                          Forgot Password?
                        </Link>
                      </div>

            {/* زر إنشاء الحساب */}
            <button
              type="submit"
              className="px-10 bg-gradient-to-r from-yellow-400 to-yellow-400 text-black py-3 rounded-full font-semibold text-lg hover:opacity-90 shadow-lg"
            >
              Sign in
            </button>
          </form>

          {/* أو أنشئ حساب باستخدام */}
          <div className="mt-8">
            <p className="text-center text-gray-500 mb-4">
              Or sign in using:
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

