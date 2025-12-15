import React from "react";
import LeftSide from "./sections/left";
import RightSide from "./sections/right";

export default function Confirmpassword() {
  return (
    <div className="grid grid-cols-12 h-screen w-full">
      <LeftSide />
      <div className="col-span-7">
        <RightSide />
      </div>
    </div>
  );
}
