import React from "react";
import cmeImg from "../../../assets/sunimg6.png"; // الصورة الأساسية

export default function Sun4() {
  return (
    <section
      id="sun4"
      className="w-full bg-[#F4EFF3] py-16 px-6 md:px-12 lg:px-24 flex flex-col items-center"
    >
      <div className="max-w-[1200px] w-full flex flex-col gap-12">
        {/* ✅ الصف الرئيسي (الصورة + النص) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* الصورة */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={cmeImg}
              alt="Coronal Mass Ejection"
              className="rounded-[16px] shadow-md object-cover"
              style={{
                width: "100%",
                maxWidth: "460px",
                height: "auto",
                borderRadius: "16px",
              }}
            />
          </div>

          {/* النص */}
          <div className="w-full lg:w-1/2">
            <h2
              className="font-sora font-bold mb-4"
              style={{
                fontSize: "32px",
                lineHeight: "42px",
                color: "#B3261E",
              }}
            >
              Coronal Mass Ejection (CME)
            </h2>

            <p
              className="font-sora mb-6 text-justify"
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "36px",
                color: "#3F3F3F",
              }}
            >
              Huge amounts of ionized gas and plasma from the solar atmosphere
              sometimes erupt into interstellar space and are associated with
              solar flares. This phenomenon is called coronal mass ejection
              (CME), whose speed is 100–1000 km/s and its total mass is estimated
              to be a few times 10 billion kilograms to more than 10 billion
              tons. CMEs without solar flares are also observed in rare cases.
            </p>

            <p
              className="font-sora text-justify"
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "36px",
                color: "#3F3F3F",
              }}
            >
              The speed of CMEs is sometimes larger than the speed, causing a
              shock to be formed at the propagation front. Some CMEs consist of
              a magnetic flux rope, which is considered to be ejected from the
              corona following the shock front. This magnetic flux rope has a
              cylindrical structure. When the magnetic field is directed toward
              the south, large-amplitude geomagnetic storms occur.
            </p>
          </div>
        </div>

        {/* ✅ العنوان الفرعي + الجدول */}
        <div className="w-full mt-8">
          <h3
            className="font-sora font-semibold mb-4"
            style={{
              fontSize: "20px",
              lineHeight: "30px",
              color: "#B3261E",
            }}
          >
            Coronal Mass Ejection
          </h3>

          {/* الجدول */}
          <div className="w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/4 bg-white border-b sm:border-b-0 sm:border-r border-gray-300 p-4 font-semibold">
                Issue
              </div>
              <div className="sm:w-3/4 bg-white p-4 font-normal text-gray-700">
                When the FULL HALO CME (CME from the Sun's Surface to all
                directions) is observed.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
