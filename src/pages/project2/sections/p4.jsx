import React from "react";
import missionImg5 from "../../../assets/missionimg3.jpg";

export default function P4() {
  return (
    <section id="mission5" className="w-full bg-white py-16 px-4 lg:px-20">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={missionImg5}
            alt="Mission Image"
            className="w-[80%] md:w-[70%] lg:w-[85%] object-contain"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="text-center lg:text-left space-y-4">
          <h2 className="text-[#B12222] text-2xl sm:text-3xl font-semibold">
            International Achievement
          </h2>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            In May 2024, the joint Egyptian–Bahraini venture succeeded in a global 
            competition hosted by the Chinese Space Agency, securing a spot aboard 
            the Chang’e-7 lunar exploration mission, scheduled for August 2026.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-xl p-6 space-y-3">
          <h3 className="text-[#B12222] font-semibold text-lg">
            Mission Description
          </h3>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            The mission includes developing, testing, and deploying a multispectral 
            camera to analyze lunar surface materials, focusing on:
          </p>

          <ul className="list-disc pl-4 text-gray-600 text-sm sm:text-base space-y-1">
            <li>Studying the soil composition of the lunar south pole</li>
            <li>Investigating the presence of water ice</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-xl p-6 space-y-3">
          <h3 className="text-[#B12222] font-semibold text-lg">
            Capabilities of the Hyperspectral Camera
          </h3>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            The instrument will enable:
          </p>

          <ul className="list-disc pl-4 text-gray-600 text-sm sm:text-base space-y-1">
            <li>Detailed imaging and analysis of the Moon’s surface</li>
            <li>High-resolution study of the polar regions</li>
            <li>
              Geological insights such as:
              <ol className="list-decimal pl-5 space-y-1">
                <li>Water-ice distribution</li>
                <li>Mineral composition</li>
                <li>Surface material variations</li>
              </ol>
            </li>
          </ul>

          <p className="text-gray-800 font-medium">
            Sheath behaviour was consistent with plasma theory, ensuring reliable in-orbit performance.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-xl p-6 space-y-3">
          <h3 className="text-[#B12222] font-semibold text-lg">
            Scientific Impact
          </h3>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            The data collected will contribute to:
          </p>

          <ul className="list-disc pl-4 text-gray-600 text-sm sm:text-base space-y-1">
            <li>A deeper understanding of lunar surface materials</li>
            <li>New insights into the Moon’s history and formation</li>
            <li>
              Supporting future lunar exploration and potential human settlement,
              especially through identifying accessible water sources
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
