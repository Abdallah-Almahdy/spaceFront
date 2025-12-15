// src/pages/instruments/index.jsx
import React from "react";
import Inst1 from "./sections/inst1";
import Inst2 from "./sections/inst2";
import Inst3 from "./sections/inst3";
import Inst4 from "./sections/inst4";
import Inst5 from "./sections/inst5";

export default function Instruments() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      

      {/* المحتوى الرئيسي */}
      <main className="max-w-6xl mx-auto p-6 md:p-12 space-y-16">
        <Inst1 />
        <Inst2 />
        <Inst3 />
        <Inst4 />
        <Inst5 />
      </main>

    </div>
  );
}
