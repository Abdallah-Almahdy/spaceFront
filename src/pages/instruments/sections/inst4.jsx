import React from "react";

// استيراد الصور الجديدة
import instImg8 from "../../../assets/instimg8.png";   // الصورة الكبيرة
import instImg9 from "../../../assets/instimg9.jpg";   // يمين فوق
import instImg10 from "../../../assets/instimg10.jpg"; // يمين تحت

export default function Inst4() {
  return (
    <section className="w-full px-6 lg:px-16 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 font-sora">

      {/* الصور – تتحط الأول في RTL لو عايزين النص الناحية التانية */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 items-start order-2 lg:order-1">

        {/* الصورة الكبيرة */}
        <div className="flex justify-center col-span-1 md:mr-6 lg:mr-0">
          <img
            src={instImg8}
            alt="instimg8"
            className="w-40 sm:w-48 md:w-48 lg:w-48 h-28 sm:h-36 md:h-32 lg:h-32 
                       object-contain rounded-xl shadow-md md:mt-0"
          />
        </div>

        {/* يمين: فوق + تحت */}
        <div className="flex flex-col items-center gap-6">

          <img
            src={instImg9}
            alt="instimg9"
            className="w-36 sm:w-44 md:w-48 rounded-xl shadow-md"
          />

          <img
            src={instImg10}
            alt="instImg10"
            className="w-40 sm:w-48 md:w-52 rounded-xl shadow-md"
          />
        </div>

      </div>

      {/* النص – في الناحية التانية */}
      <div className="flex flex-col justify-center order-1 lg:order-2 text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          CALLISTO (Solar Radio Spectrometer)
        </h1>

        <p className="text-gray-700 leading-relaxed mb-4">
          International Network of Solar Radio Spectrometers, a Space Weather Instrument Array.
          CALLISTO is an artificial word, composed of “Compound Astronomical Low-frequency Low-cost 
          Instrument for Spectroscopy and Transportable Observatory”.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          The main applications are observation of solar radio bursts for astronomical science, 
          education, outreach and citizen science, as well as RFI monitoring.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          The instrument operates between <strong>45 – 870 MHz</strong> using a broadband TV tuner 
          with 62.5 KHz resolution. The data are FIT files with up to 400 frequencies per sweep.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Data are transferred via RS-232 to a computer with a time resolution of 0.25 sec at 
          200 channels per spectrum (800 spectral pixels/sec), and an integration time of 1 ms.
        </p>
      </div>

    </section>
  );
}
