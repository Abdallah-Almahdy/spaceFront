import React from "react";
import solarWind1 from "../../../assets/sunimg4.png"; // الصورة الأولى
import solarWind2 from "../../../assets/sunimg5.png"; // الصورة الثانية

export default function Sun3() {
  return (
    <section
      id="sun3"
      className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 flex flex-col items-center"
    >
      <div className="max-w-[1200px] w-full flex flex-col gap-16">
        {/* ✅ العنوان */}
        <h2
          className="font-sora font-bold mb-4"
          style={{
            fontSize: "40px",
            lineHeight: "42px",
            color: "#B3261E",
          }}
        >
          Solar Wind
        </h2>

        {/* ✅ الصف الأول: النص يسار - الصورة يمين */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* النص */}
          <div className="w-full lg:w-1/2">
            <p
              className="font-sora text-justify"
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "36px",
                color: "#3F3F3F",
              }}
            >
              Coronal gas continuously flows out to interstellar space. This
              stream is called the solar wind, which is accelerated to a
              supersonic speed. In the solar atmosphere, closed magnetic field
              lines and open field lines are observed, and solar wind is
              considered to flow along the open field lines. The origin of solar
              wind is located at coronal holes, where high-speed plasma flow is
              continuously observed, and it makes the region dark. Since the sun
              and the solar wind corotate within 27 days, the solar wind
              produces a spiral structure with the center at the sun.
            </p>
          </div>

          {/* الصورة الأولى */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={solarWind1}
              alt="Solar Wind Diagram"
              className="rounded-[16px] shadow-md object-cover"
              style={{
                width: "100%",
                maxWidth: "460px",
                height: "auto",
                borderRadius: "16px",
              }}
            />
          </div>
        </div>

        {/* ✅ الصف الثاني: الصورة يسار - النص يمين */}
        <div className="flex flex-col lg:flex-row-reverse items-start justify-between gap-8">
          {/* النص */}
          <div className="w-full lg:w-1/2">
            <p
              className="font-sora text-justify"
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "36px",
                color: "#3F3F3F",
              }}
            >
              Solar wind is measured by in situ observations of plasma density
              and velocity just 1 hour before its arrival on Earth, by the ACE
              and DSCOVR satellites. Solar wind with a speed of ~300 km/s is
              called slow solar wind, while that with a speed of ~700 km/s is
              called fast solar wind. The latter can propagate from the sun to
              Earth within ~2 days. The fast solar wind flows out from the
              coronal holes at lower altitudes, and it is often observed for 27
              days, synchronized with solar rotation.
            </p>
          </div>

          {/* الصورة الثانية */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={solarWind2}
              alt="Solar Wind Structure"
              className="rounded-[16px] shadow-md object-cover"
              style={{
                width: "100%",
                maxWidth: "460px",
                height: "auto",
                borderRadius: "16px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
