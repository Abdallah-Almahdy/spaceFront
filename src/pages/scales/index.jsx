import React from "react";
import Scale0 from "./sections/scale0";
import Scale1 from "./sections/scale1";
import Scale2 from "./sections/scale2";
import Scale3 from "./sections/scale3";

const Scales = () => {
  return (
    <div className="bg-white text-black min-h-screen font-[Montserrat]">
      {/* ❌ شيل space-y-32 علشان السكاشن تيجي ورا بعض */}
      <main className="relative z-10">
        <Scale0 />
        <Scale1 />
        <Scale2 />
        <Scale3 />
      
      </main>
    </div>
  );
};

export default Scales;
