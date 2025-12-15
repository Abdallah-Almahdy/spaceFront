// Ion3.jsx
import React from "react";
import ionImage4 from "../../../assets/ionimage4.jpeg";
import ionImage5 from "../../../assets/ionimage5.jpeg";

export default function Ion3() {
  return (
    <section id="Ion3" className="bg-[#f4eff3] py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* العنوان */}
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">
          Dellinger Phenomenon
        </h2>

        {/* النص التعريفي */}
        <p className="text-gray-700 leading-relaxed mb-8">
          The "Dellinger phenomenon" is a phenomenon in which the D region at
          altitudes of 60–90 km is abnormally ionized owing to a rapid increase
          in the solar X-ray flux after a solar flare eruption, which causes an
          irregular absorption of radio waves that are normally transmitted
          through the layer. The phenomenon is also called a "sudden
          ionospheric disturbance". The figure (called an ionogram) indicates an
          echo from the ionosphere observed by an ionosonde; the left panel
          shows an ordinary ionogram, while the right panel shows an ionogram
          when a Dellinger phenomenon occurs. When a severe Dellinger phenomenon
          occurs, HF radio waves are disrupted, and a "blackout" may occur, and
          in the worst cases, the disruption continues for several hours.
        </p>

        {/* الصور */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* الصورة الأولى */}
          <div className="flex flex-col items-center">
            <img
              src={ionImage4}
              alt="Usual ionogram"
              className="rounded-xl shadow-md w-full max-w-sm"
            />
            <span className="text-gray-600 mt-2 text-sm">
              Usual ionogram
            </span>
          </div>

          {/* الصورة الثانية */}
          <div className="flex flex-col items-center">
            <img
              src={ionImage5}
              alt="Loss of ionospheric echo"
              className="rounded-xl shadow-md w-full max-w-sm"
            />
            <span className="text-gray-600 mt-2 text-sm">
              Loss of ionospheric echo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

