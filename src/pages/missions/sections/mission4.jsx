import React from "react";
import MissionBg from "../../../components/missionbg";
import bg from "../../../assets/missionimg1.jpg"; // ← الصورة اللي رفعتها

export default function Mission4() {
  return (
    <section id="mission4" className="font-sora">
      <MissionBg image={bg} height="850px">

        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT SIDE TEXT */}
          <div className="text-white space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Development of a Hyperspectral Camera for the Chang’e-7 Lunar Mission
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
              The Egyptian Space Agency (EgSA), Bahrain’s National Space Science Agency, and the Changchun Institute of Optics, Fine Mechanics, and Physics signed a cooperation agreement to jointly develop a Hyperspectral Camera as part of the goal of developing and delivering scientific instruments for the Chang’e-7 mission
            </p>

            <div className="pt-6">
               <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                Mission Overview
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
                According to the China National Space Administration (CNSA), the Hyperspectral Camera developed by Egypt and Bahrain will image and analyze lunar surface materials from orbit, including the Moon’s polar regions.
              </p>
            </div>

          </div>

          {/* RIGHT SIDE BOX */}
          <div className="bg-black/40 backdrop-blur-md p-6 sm:p-10 rounded-xl text-white">
             <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              The mission integrates
            </h2>
            <h2 className="text-xl sm:text-2xl mb-4">
              This camera is one of the six international payloads selected by CNSA for the Chang’e-7 lunar mission and will provide high-quality hyperspectral data for several fields, including:
            </h2>

            <ul className="list-disc ml-5 text-gray-200 text-sm sm:text-base space-y-2">
              <li>Environmental Monitoring</li>
              <li>Natural Resource Surveys</li>
              <li>Climate Change Studies</li>
            </ul>

          </div>

        </div>

      </MissionBg>
    </section>
  );
}
