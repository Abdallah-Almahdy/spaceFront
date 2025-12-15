import React from "react";
import LeftSide from "./sections/left";
import RightSide from "./sections/right";

export default function BasicInfo() {
  return (
    <div className="grid grid-cols-12 w-full h-screen">
      <LeftSide />
      <div className="col-span-12 lg:col-span-7">
        <RightSide />
      </div>
    </div>
  );
}
