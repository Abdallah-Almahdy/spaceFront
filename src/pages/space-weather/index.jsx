import React from "react";

import Sw1 from "./sections/sw1";
import Sw2 from "./sections/sw2";
import Sw3 from "./sections/sw3";
import Sw4 from "./sections/sw4";
import Sw5 from "./sections/sw5";
import Sw6 from "./sections/sw6";
import Sw7 from "./sections/sw7";

const SpaceWeather = () => {
  return (
    <div className="bg-white text-black font-[Montserrat]">
      <main className="relative z-10 space-y-32">
        <Sw1 />
        <Sw2 />
        <Sw3 />
        <Sw4 />
        <Sw5 />
        <Sw6 />
        <Sw7 />
      </main>
    </div>
  );
};

export default SpaceWeather;
