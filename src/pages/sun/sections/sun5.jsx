import React from "react";
import sepImg from "../../../assets/sunimg7.png"; // الصورة

export default function Sun5() {
  return (
    <section
      id="sun5"
      className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 flex flex-col items-center"
    >
      <div className="max-w-[1200px] w-full flex flex-col gap-12">
        {/* ✅ الصف العلوي: النص + الصورة */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
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
              Solar Energetic Particles (SEPs)
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
              Solar flares release not only a large amount of radiation but also
              high-energy particles called solar energetic particles (SEPs), such
              as electrons, protons, and heavy ions in the energy range of
              MeV–GeV. Some particles propagate at a speed of ~20–80% of the
              speed, and they arrive on Earth only 30 minutes after the occurrence
              of a solar flare. These particles are not only electrons but also
              heavy ions (e.g., He, Fe, and O), and they are also observed with a
              duration of a few hours to a day.
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
              In another typical case, high-energy protons are observed when the
              CME arrives at Earth; afterwards, the number of protons gradually
              decreases within a few days. SEPs can affect human space activities
              around Earth. Very high–energy particles from the sun are sometimes
              observed using a cosmic-ray monitor on the ground. Within the solar
              cycle of 11 years, 10 events occur on average at around the solar
              maximum activity.
            </p>
          </div>

          {/* الصورة */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={sepImg}
              alt="Solar Energetic Particles"
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

        {/* ✅ الجدول */}
        <div className="w-full mt-8">
          <h3
            className="font-sora font-semibold mb-4"
            style={{
              fontSize: "20px",
              lineHeight: "30px",
              color: "#B3261E",
            }}
          >
            Solar Proton
          </h3>

          <div className="w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
            {[
              "When the proton flux (≥10MeV) observed by GOES is over 10 PFU",
              "When the proton flux (≥10MeV) observed by GOES is over 100 PFU",
              "When the proton flux (≥10MeV) observed by GOES is over 1000 PFU",
              "When the proton flux (≥10MeV) observed by GOES is over 10000 PFU",
            ].map((text, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row border-b border-gray-300 last:border-b-0"
              >
                <div className="sm:w-1/4 bg-white p-4 font-semibold border-b sm:border-b-0 sm:border-r border-gray-300">
                  Issue
                </div>
                <div className="sm:w-3/4 bg-white p-4 font-normal text-gray-700">
                  {text}
                </div>
              </div>
            ))}

            {/* الصف الأخير (Cancel) */}
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/4 bg-white p-4 font-semibold border-r border-gray-300">
                Cancel
              </div>
              <div className="sm:w-3/4 bg-white p-4 font-normal text-gray-700">
                When the proton flux (≥10MeV) observed by GOES returns to less
                than 10 PFU
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
