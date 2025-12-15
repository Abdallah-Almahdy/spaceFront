import React from "react";
import Ion1 from "./sections/ion1";
import Ion2 from "./sections/ion2";
import Ion3 from "./sections/ion3";
import Ion4 from "./sections/ion4";
import Ion5 from "./sections/ion5";

const ionosphere = () => {
  return (
    <div className="bg-white text-black min-h-screen font-[Montserrat]">
      <main className="relative z-10">
        <Ion1 />
        <Ion2 />
        <Ion3 />
        <Ion4 />
        <Ion5 />
      
      </main>
    </div>
  );
};

export default ionosphere;
