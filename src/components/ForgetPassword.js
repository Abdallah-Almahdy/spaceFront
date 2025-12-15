// src/pages/ForgotPassword.js
import React, { useState } from "react";
import LeftSide from "./leftside";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password for:", email);
  };

  return (
    <div className="flex h-screen">
      {/* الجزء الشمال */}
      <div className="w-1/3">
        <LeftSide />
      </div>

      {/* الجزء اليمين */}
      <div className="w-2/3 flex items-center justify-center bg-white relative px-10">
        <div className="absolute top-6 right-10 text-lg">
          <span className="mr-3">Don’t have an account?</span>
          <Link to="/create-account">
            <button className="border-2 px-6 py-3 text-lg text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white rounded-2xl">
              Get started
            </button>
          </Link>
        </div>

        <div className="max-w-md w-full">
          {/* عنوان */}
          <h2 className="text-3xl font-bold mb-4">FORGET PASSWORD?</h2>
          <p className="text-gray-500 mb-8">
            Don’t worry! Enter your registered email address to get password reset instructions.
          </p>

          {/* الفورم */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">Email address</label>
              <input
                type="email"
                placeholder="Sample@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border px-5 py-3 rounded-lg border-gray-300 text-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-white py-3 rounded-full font-semibold text-lg hover:bg-blue-700 shadow-lg"
            >
              Send
            </button>
          </form>

          {/* رجوع لتسجيل الدخول */}
          <div className="mt-6">
            <p className="text-gray-500">
              Remember your password?{" "}
              <Link to="/signin" className="text-blue-600 font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;




