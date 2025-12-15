import React from "react";
import MissionBg from "../../../components/missionbg";
import bg from "../../../assets/missionimg1.jpg"; // ← الصورة اللي رفعتها

export default function Mission4() {
  return (
    <section className="font-sora">
      <MissionBg image={bg} height="850px">

        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT SIDE TEXT */}
          <div className="text-white space-y-6">

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              The Space Plasma Nano-satellite <br /> Experiment (SPNEX)
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
              The Space Plasma Nano-satellite Experiment (SPNEX), developed by the
              Egyptian Space Agency, addresses two critical needs in space science
              and technology
            </p>

            <ul className="list-disc ml-5 text-gray-300 text-sm sm:text-base space-y-1">
              <li>In-situ monitoring of ionospheric plasma variability</li>
              <li>Cost-effective Earth observation</li>
            </ul>

            <div className="pt-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                Mission Overview
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
                Originally conceived as a CubeSat, SPNEX was redesigned into a custom
                11 kg nanosatellite (400 × 140 × 300 mm) to meet launcher integration
                constraints while maintaining modularity and compactness.
              </p>
            </div>

          </div>

          {/* RIGHT SIDE BOX */}
          <div className="bg-black/40 backdrop-blur-md p-6 sm:p-10 rounded-xl text-white">

            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              The mission integrates
            </h2>

            <ul className="list-disc ml-5 text-gray-200 text-sm sm:text-base space-y-2">
              <li>
                Dual Langmuir probe payload for measuring electron density and
                temperature.
              </li>
              <li>
                Optical imaging system with 7.5–12 m ground sampling distance,
                enabling applications in:
              </li>
            </ul>

            <ol className="list-decimal ml-6 mt-4 text-gray-300 text-sm sm:text-base space-y-1">
              <li>Agriculture</li>
              <li>Disaster management</li>
              <li>Urban planning</li>
            </ol>

          </div>

        </div>

      </MissionBg>
    </section>
  );
}

