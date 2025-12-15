import React from "react";

// استيراد الصور
import instImg5 from "../../../assets/instimg5.jpg";
import instImg6 from "../../../assets/instimg6.png";
import instImg7 from "../../../assets/instimg7.jpg";

export default function Inst3() {
  return (
    <section className="w-full px-6 lg:px-16 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 font-sora">

      {/* النص */}
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Low-Cost GNSS Receivers
        </h1>

        <p className="text-gray-700 leading-relaxed mb-4">
          The low-cost GNSS receiver instrument (CARO Station), described as
          consisting of a U-Blox F9P GNSS receiver, a TOPGNSS antenna, an
          Orange Pi data logger, and associated cables, enclosure, and fittings,
          represents a pioneering effort in Egypt to monitor ionospheric
          conditions.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          The primary objective of this instrument is to establish a
          comprehensive baseline of the regional ionosphere, capturing
          variations across different seasons, local times, and geomagnetic
          levels.
        </p>

        <p className="text-gray-700 leading-relaxed">
          These products are crucial for understanding ionospheric dynamics and
          mitigating their impact on satellite-based communication and
          navigation systems.
        </p>
      </div>

      {/* الصور */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 items-start">

        {/* الصورة الكبيرة على الشمال */}
        <div className="flex justify-center col-span-1 md:mr-6 lg:mr-0">
          <img
            src={instImg5}
            alt="instimg5"
            className="w-40 sm:w-48 md:w-48 lg:w-48 h-28 sm:h-36 md:h-32 lg:h-32 object-contain rounded-xl shadow-md md:mt-0 "
          />
        </div>

        {/* يمين: الصورة فوق + تحت */}
        <div className="flex flex-col items-center gap-6">

          {/* يمين فوق */}
          <img
            src={instImg6}
            alt="instimg6"
            className="w-36 sm:w-44 md:w-48 rounded-xl shadow-md"
          />

          {/* يمين تحت */}
          <img
            src={instImg7}
            alt="instimg7"
            className="w-40 sm:w-48 md:w-52 rounded-xl shadow-md"
          />
        </div>

      </div>

    </section>
  );
}
