import React, { useState } from "react";
import "./Signin.css";
import LeftSide from "./leftside";
import { FaFacebook, FaGoogle, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="signin-page flex h-screen">
      {/* الجزء الشمال - الصورة */}
      <div className="w-2/5">{/* أكبر من التلت شوية */}
        <LeftSide />
      </div>

      {/* الجزء اليمين - الفورم */}
      <div className="w-3/5 flex items-center justify-center relative bg-white">
        <div className="absolute top-6 right-10 text-lg">
          <span className="mr-3">Don’t have an account?</span>
          <Link to="/create-account">
            <button className="border-2 px-6 py-3 text-lg text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white rounded-2xl">
              Create Account
            </button>
          </Link>
        </div>

        <div className="w-[500px] mt-10"> {/* نزلنا المحتوى لتحت */}
          {/* عنوان و وصف */}
          <h2 className="text-4xl font-bold mb-5 mt-6">WELCOME TO EgSA!</h2>
          <p className="text-gray-500 text-xl mb-10 leading-relaxed">
            Sign in and be part of tomorrow’s space discoveries
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Email */}
            <div>
              <label className="block mb-3 text-xl font-medium">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="Sample@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-5 py-4 rounded-lg border-gray-300 text-lg"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-3 text-xl font-medium">Password</label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border px-5 py-4 rounded-lg border-gray-300 text-lg"
                />
                <span className="absolute top-5 right-5 text-gray-500 cursor-pointer text-xl">
                  <FaRegEyeSlash />
                </span>
              </div>
            </div>

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

            {/* Submit Button */}
            <button
              type="submit"
              className="shadow-xl w-full bg-yellow-400 rounded-full text-white py-4 text-xl font-semibold hover:text-blue-700 hover:bg-white border border-blue-500"
            >
              Sign in
            </button>

            {/* Divider */}
            <hr className="my-8" />
            <p className="text-center text-gray-500 text-lg">
              Or sign in using:
            </p>

            {/* Social Buttons */}
            <div className="flex gap-6">
              <button className="flex-1 flex items-center justify-center gap-3 border rounded-full py-4 text-lg hover:bg-gray-700 hover:text-white">
                <FaFacebook /> Facebook
              </button>
              <button className="flex-1 flex items-center justify-center gap-3 border rounded-full py-4 text-lg hover:bg-gray-700 hover:text-white">
                <FaGoogle /> Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;









