import React from "react";

// استدعاء السكاشن
import Mission1 from "./sections/mission1";
import Mission2 from "./sections/mission2";
import Mission3 from "./sections/mission3";
import Mission4 from "./sections/mission4";
import Mission5 from "./sections/mission5";
import Mission6 from "./sections/mission6";

export default function Missions() {
  return (
    <div className="w-full flex flex-col">
      <Mission1 />
      <Mission2 />
      <Mission3 />
      <Mission4 />
      <Mission5 />
      <Mission6 />
    </div>
  );
}
