import React from "react";
import flare1 from "../../../assets/sunimg2.png"; 
import flare2 from "../../../assets/sunimg3.png"; 

export default function Sun2() {
  return (
    <section
      id="sun2"
      className="w-full py-16 px-6 md:px-12 lg:px-24 flex flex-col items-center"
      style={{ backgroundColor: "#7D526029" }}
    >
      {/* ✅ الصف الأول: النص + الصورة الأولى */}
      <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-start justify-between gap-8 mb-10">
        {/* النص */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h5 className="text-sm tracking-[0.4em] text-red-600 mb-2 font-semibold uppercase">
            S O L A R &nbsp; F L A R E S
          </h5>

          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: "#B3261E" }}
          >
            Solar Flares
          </h2>

          <p
            className="font-sora text-justify mb-6"
            style={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "36px",
              color: "#3F3F3F",
              letterSpacing: "0%",
            }}
          >
            A sudden brightening around sunspots at X-ray, EUV, and optical
            wavelengths is called a solar flare. Solar flares are the largest
            eruptions in the solar system, and they release heated gas and
            plasma from the solar atmosphere, harmful high-energy particles, and
            a large number of X-rays. The typical size of a solar flare is 100
            thousand km, and typical energy is comparable to ten billion
            hydrogen bombs. The fundamental mechanism of solar flares has been
            repeatedly explored for discovery more than 100 years ago. Solar
            flares usually occur at around sunspots with a strong magnetic
            field, with intense magnetic energy accumulated in the lower
            atmosphere region. Therefore, the number of sunspots with complex
            structures produces a larger class of flares more easily.
          </p>
        </div>

        {/* الصورة الأولى */}
        <div className="w-full lg:w-1/2 lg:mt-32 flex justify-center items-start">
          <img
            src={flare1}
            alt="Solar Flare Eruption"
            className="rounded-[16px] shadow-md object-cover"
            style={{
              width: "462px",
              height: "320px",
              opacity: 1,
              transform: "translateY(8px)",
              borderRadius: "16px",
            }}
          />
        </div>
      </div>

      {/* ✅ الصورة الثانية + الفقرة التحتها */}
      <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-start justify-between gap-8 mb-10">
        {/* الصورة الثانية */}
        <div className="w-full lg:w-1/2 flex justify-center items-start">
          <img
            src={flare2}
            alt="Solar Cycle Graph"
            className="rounded-[16px] shadow-md object-cover"
            style={{
              width: "462px",
              height: "320px",
              opacity: 1,
              borderRadius: "16px",
            }}
          />
        </div>

        {/* النص اللي على يمين الصورة التانية */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <p
            className="font-sora text-justify"
            style={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "36px",
              color: "#3F3F3F",
              letterSpacing: "0%",
            }}
          >
            Solar activity varies between active and quiet periods with a period
            of 11 years. The number of sunspots also undergoes a similar
            variation in 11 years. When there are many sunspots, namely, when
            solar activity is high, a large number of flares are more frequently
            observed than in the quiet solar period. This is why the number of
            sunspots is used as an indicator of solar activity.
          </p>
        </div>
      </div>

      {/* ✅ الجدول الأبيض في الأسفل */}
      <div className="max-w-[900px] w-full mt-8">
        <h3
          className="font-sora font-semibold mb-4 text-2xl"
          style={{ color: "#B3261E" }}
        >
          Solar Flare
        </h3>

        <div className="bg-white rounded-[16px] shadow-md overflow-hidden border border-gray-200">
          {/* الصف الأول */}
          <div className="flex flex-col sm:flex-row border-b border-gray-200">
            <div className="w-full sm:w-1/4 px-6 py-4 font-semibold text-[#3F3F3F] bg-white">
              Issue
            </div>
            <div className="w-full sm:w-3/4 px-6 py-4 text-[#3F3F3F] font-sora text-[15px] bg-white">
              When the M-class or greater LDE flare occurs (for over 30 minutes).
            </div>
          </div>

          {/* الصف الثاني */}
          <div className="flex flex-col sm:flex-row border-b border-gray-200">
            <div className="w-full sm:w-1/4 px-6 py-4 font-semibold text-[#3F3F3F] bg-white">
              Issue
            </div>
            <div className="w-full sm:w-3/4 px-6 py-4 text-[#3F3F3F] font-sora text-[15px] bg-white">
              When the X-class LDE flare occurs.
            </div>
          </div>

          {/* الصف الثالث */}
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/4 px-6 py-4 font-semibold text-[#3F3F3F] bg-white">
              Issue
            </div>
            <div className="w-full sm:w-3/4 px-6 py-4 text-[#3F3F3F] font-sora text-[15px] bg-white">
              When a solar flare with optical importance 3 or more (3F, 3N, 3B,
              4F, 4N, 4B) occurs.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
