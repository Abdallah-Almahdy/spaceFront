import React from "react";
import P1 from "./sections/p1";
import P2 from "./sections/p2";
import Hero from "../home/sections/hero";

export default function Project1() {
  return (
    <main id="magnetosphere" className="bg-[#f4eff3]">
      <Hero/>
      <P1 />
      <P2 />
      
    </main>
  );
}