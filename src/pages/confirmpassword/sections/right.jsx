import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";

export default function RightSide() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full h-full flex items-center justify-center px-6 md:px-10 relative bg-white">
      {/* Sign in */}
      <div className="absolute top-8 right-8 text-sm">
        <span className="mr-2 text-gray-500">Already have an account?</span>
        <Link
          to="/login"
          className="border border-blue-600 text-blue-600 px-4 py-1 rounded-full hover:bg-blue-600 hover:text-white transition"
        >
          Sign in
        </Link>
      </div>

      {/* Form */}
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Reset Password
        </h2>
        <p className="text-gray-500 mb-8">
          Create your account to explore new frontiers
        </p>

        <form className="space-y-6">
          {/* New Password */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10"
              />
              <Eye
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                size={18}
              />
            </div>
          </div>

          {/* Terms */}
          <p className="text-sm text-gray-500">
            By creating account, you agree to our{" "}
            <span className="text-blue-600 cursor-pointer">
              Terms & Conditions
            </span>
          </p>

          {/* Button */}
          <button
            type="submit"
            className="bg-yellow-400 px-8 py-3 rounded-full font-semibold shadow-lg hover:opacity-90"
          >
            Create an account
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 text-gray-400 text-sm my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            Or create an account using
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <button className="flex-1 border rounded-full py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
              Microsoft
            </button>
            <button className="flex-1 border rounded-full py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
              Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
