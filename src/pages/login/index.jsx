import React from "react";
import LeftSide from "./sections/left";
import RightSide from "./sections/right";
import "./index.css";

export default function Login() {
  return (
    <div className="login-page">
      <LeftSide />
      <RightSide />
    </div>
  );
}
