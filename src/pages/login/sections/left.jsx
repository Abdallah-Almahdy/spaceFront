import React from "react";
import "./left.css";
import { Link } from "react-router-dom";

export default function LeftSide() {
  return (
    <div className="signin-container">
      {/* الجزء الخاص بالصورة والنصوص */}
      <div className="signin-image">
        <div className="text-2xl text-white p-5 font-bold ">LOGO</div>
        <div className="text-2xl text-white p-5 font-bold flex flex-col gap-2">
          <p>DO IT<span className="text-yellow-400  shadow-xl"> NOW</span></p>
          <p>DISCOVER<span className="text-yellow-400  shadow-xl"> BEYOND</span></p>
          <p>TOUCH<span className="text-yellow-400  shadow-xl"> INFINITY</span></p>
        </div>
        <div className="absolute bottom-4 left-2 text-white text-xs">
          <span className=" shadow-xl">Terms & Conditions</span> | <span className=" shadow-xl">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}