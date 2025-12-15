import React from "react";
import Magneto1 from "./sections/magneto1";
import Magneto2 from "./sections/magneto2";
import Magneto3 from "./sections/magneto3";
import Magneto4 from "./sections/magneto4";
import Magneto5 from "./sections/magneto5";

export default function Magnetosphere() {
  return (
    <main id="magnetosphere" className="bg-[#f4eff3]">
      <Magneto1 />
      <Magneto2 />
      <Magneto3 />
      <Magneto4 />
      <Magneto5 />
    </main>
  );
}
