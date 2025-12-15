import React from "react";
import LeftSide from "./sections/left";
import RightSide from "./sections/right";
import "./index.css";

export default function CreateAccount() {
  return (
    <div className="auth-page">
      <LeftSide />
      <RightSide />
    </div>
  );
}
