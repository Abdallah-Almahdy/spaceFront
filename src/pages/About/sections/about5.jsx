import React from "react";
import imgAbout5 from "../../../assets/aboutsec2.png";

// Using Sora font (make sure it's imported in your global.css or index.html)
export default function About5() {
  return (
    <section className="font-sora w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Top Section */}
      <div className="font-sora grid lg:grid-cols-2 gap-10 items-center">
        <div className="font-sora w-full">
          <img
            src={imgAbout5}
            alt="Space Weather Center"
            
            className="font-sora w-full h-auto rounded-xl shadow-md object-cover"
          />
        </div>

        <div>
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-black mb-4">
            Mission
          </h2>
          <p className="font-sora text-[#525252] leading-relaxed text-base md:text-lg">
            The Egyptian Space Weather Center (ESWC) studies, analyses, and
            predicts the factors of space environment hazards and their effects on
            the components of space vehicles and works to develop these satellite
            components to mitigate risks during their operating period. In
            addition to studying, analyzing, and predicting space weather risks
            and their impact on satellites as they reach the Earth.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="font-sora mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="font-sora bg-white shadow-sm rounded-2xl p-6 border hover:shadow-lg transition">
          <h3 className="font-sora text-[#6155F5] font-semibold text-xl mb-3">#1</h3>
          <p className="font-sora text-[#525252] text-sm leading-relaxed">
            Motivate the National Community for Space Weather Hazards Effects in
            Egypt in support of the satellites owned by the Egyptian Space
            Agency.
          </p>
        </div>

        {/* Card 2 */}
        <div className="font-sora bg-white shadow-sm rounded-2xl p-6 border hover:shadow-lg transition">
          <h3 className="font-sora text-[#6155F5] font-semibold text-xl mb-3">#2</h3>
          <p className="font-sora text-[#525252] text-sm leading-relaxed">
            To be the cornerstone of the African Space Warning Center.
          </p>
        </div>

        {/* Card 3 */}
        <div className="font-sora bg-white shadow-sm rounded-2xl p-6 border hover:shadow-lg transition">
          <h3 className="font-sora text-[#6155F5] font-semibold text-xl mb-3">#3</h3>
          <p className="font-sora text-[#525252] text-sm leading-relaxed">
            To make use of Ground-Based and Space-Based Measurements Data for
            Reliable Forecasting.
          </p>
        </div>

        {/* Card 4 */}
        <div className="font-sora bg-white shadow-sm rounded-2xl p-6 border hover:shadow-lg transition">
          <h3 className="font-sora text-[#6155F5] font-semibold text-xl mb-3">#4</h3>
          <p className="font-sora text-[#525252] text-sm leading-relaxed">
            Motivate the National Community for Space Weather Hazards Effects in
            Egypt in support of the satellites owned by the Egyptian Space
            Agency.
          </p>
        </div>

        {/* Card 5 */}
        <div className="font-sora bg-white shadow-sm rounded-2xl p-6 border hover:shadow-lg transition md:col-span-2 lg:col-span-1">
          <h3 className="font-sora text-[#6155F5] font-semibold text-xl mb-3">#5</h3>
          <p className="font-sora text-[#525252] text-sm leading-relaxed">
            To engage and establish a coherent dialogue between collaborators to
            foster the establishment of an operational Warning Network of Space
            Weather Hazards service to ensure local support for data and promote
            the infrastructure that already exists in each organization.
          </p>
        </div>
      </div>
    </section>
  );
}
