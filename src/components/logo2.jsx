import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";

const Logo2 = () => {
  return (
    <Link to="/" className="inline-block hover:scale-110 transition-transform duration-300">
      <img
        src={logo2}
        alt="EGSA Logo"
        className="w-20 h-20 object-contain"
      />
    </Link>
  );
};

export default Logo2;
