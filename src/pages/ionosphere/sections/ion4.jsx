// Ion5.jsx
import React from "react";
import ionImage6 from "../../../assets/ionimage6.jpeg";
import ionImage7 from "../../../assets/ionimage7.jpeg";

export default function Ion4() {
  return (
    <section id="Ion5" className="bg-[#f4eff3] py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* العنوان */}
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">
          Sporadic-E layer
        </h2>

        {/* النص التعريفي */}
        <p className="text-gray-700 leading-relaxed mb-8">
          The "sporadic-E (Es) layer" is a thin and high-plasma-density layer
          that sporadically appears at around 100 km altitude. An intense Es
          layer reflects VHF radio waves and causes interference due to
          anomalous propagation. As shown in the right panel, the critical
          frequency is greatly enhanced when an Es layer appears. Neutral wind
          at around 100 km altitude plays an important role in the generation of
          the Es layer. The Es layer is a popular phenomenon among amateur radio
          operators because it enables long-distance HF/VHF propagation.
        </p>

        {/* الصور */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* الصورة الأولى */}
          <div className="flex flex-col items-center">
            <img
              src={ionImage6}
              alt="Usual ionogram"
              className="rounded-xl shadow-md w-full max-w-sm"
              style={{
                width: "364px",
                height: "260px",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
            <span className="text-gray-600 mt-2 text-sm">
              Usual ionogram
            </span>
          </div>

          {/* الصورة الثانية */}
          <div className="flex flex-col items-center">
            <img
              src={ionImage7}
              alt="Sporadic-E layer"
              className="rounded-xl shadow-md w-full max-w-sm"
              style={{
                width: "364px",
                height: "260px",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
            <span className="text-gray-600 mt-2 text-sm">
              Sporadic-E layer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
