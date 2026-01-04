import React from "react";
import missionimg2 from "../../../assets/missionimg2.png"; // استيراد الصورة

export default function Mission2() {
  return (
    <section id="mission2" className="w-full font-sora py-16 px-4 sm:px-6 lg:px-10">

      {/* ROW 1 – IMAGE + FEATURE LIST */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

        {/* IMAGE */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <img
            src={missionimg2}
            alt="Spacecraft diagram"
            className="
              w-full
              max-w-xs
              sm:max-w-sm
              md:max-w-md
              lg:max-w-lg
              xl:max-w-xl
              object-contain
            "
          />
        </div>

        {/* FEATURE LIST */}
        <div className="lg:col-span-7">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#E22E6D] mb-6">
            Spacecraft Features
          </h2>

          <ul className="text-gray-700 text-sm md:text-base space-y-2 list-disc list-inside">
            <li>Light-weight aluminium structure</li>
            <li>Dual-redundant avionics architecture</li>
            <li>FPGA-based payload control</li>
            <li>Hybrid UHF/S-band communications</li>
          </ul>
        </div>

      </div>

      {/* SPACING */}
      <div className="h-12"></div>

      {/* ROW 2 – THREE CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* CARD 1 */}
        <div className="bg-white rounded-2xl shadow-[0_8px_28px_rgba(0,0,0,0.06)] border border-[#FFF2F7] p-6">
          <h3 className="font-semibold text-lg text-[#D62A66] mb-4">
            Qualification Campaigns
          </h3>
          <ul className="text-gray-700 text-sm space-y-2 list-disc list-inside">
            <li>Vibration testing</li>
            <li>Thermal balance testing</li>
            <li>Thermal vacuum tests</li>
          </ul>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-2xl shadow-[0_8px_28px_rgba(0,0,0,0.06)] border border-[#FFF2F7] p-6">
          <h3 className="font-semibold text-lg text-[#D62A66] mb-4">
            Simulation & Validation
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Numerical simulations confirmed accurate diagnostic behaviour 
            consistent with plasma theory, ensuring reliable in-orbit performance.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-2xl shadow-[0_8px_28px_rgba(0,0,0,0.06)] border border-[#FFF2F7] p-6">
          <h3 className="font-semibold text-lg text-[#D62A66] mb-4">
            Mission Impact
          </h3>
          <ul className="text-gray-700 text-sm space-y-2 list-disc list-inside">
            <li>Science-grade space weather monitoring</li>
            <li>Practical Earth observation</li>
            <li>Achieved in a low-cost resilient platform</li>
          </ul>
        </div>

      </div>

      {/* SPACING */}
      <div className="h-6"></div>

      {/* ROW 3 – FULL WIDTH CARD */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-[0_8px_28px_rgba(0,0,0,0.06)] border border-[#FFF2F7] p-6">
          <h3 className="font-semibold text-lg text-[#D62A66] mb-4">
            Conclusion
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The dual-purpose approach of SPNEX sets a precedent for emerging 
            space programs, providing a scalable blueprint for sovereign 
            affordable satellite missions that advance both fundamental research 
            and societal applications.
          </p>
        </div>
      </div>

    </section>
  );
}
