import React from "react";
import bgImage from "../../../assets/space.jpg"; 
import { Link } from "react-router-dom";

// غير المسار حسب مكان الصورة عندك

export default function LeftSide() {
  return (
    <div
      className="col-span-5 h-screen relative text-white flex flex-col"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay خفيف */}
      <div className="absolute inset-0 bg-black/40" />

      {/* المحتوى */}
      <div className="relative z-10 flex flex-col h-full">
        {/* LOGO */}
        <div className="p-6 text-xl font-bold">LOGO</div>

        {/* النص */}
        <div className="flex-1 flex flex-col justify-center px-10 gap-4 text-3xl font-bold">
          <p>
            DO IT <span className="text-yellow-400">NOW</span>
          </p>
          <p>
            DISCOVER <span className="text-yellow-400">BEYOND</span>
          </p>
          <p>
            TOUCH <span className="text-yellow-400">INFINITY</span>
          </p>
        </div>

        {/* Footer */}
        <div className="p-6 text-xs opacity-80">
          Terms & Conditions | Privacy Policy
        </div>
      </div>
    </div>
  );
}

