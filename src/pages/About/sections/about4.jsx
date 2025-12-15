import React from "react";
import imageAbout4 from "../../../assets/aboutsec2.png";

export default function About4() {
  const data = [
    { number: "#1", text: "Enhance the understanding of space weather phenomena" },
    { number: "#2", text: "Make continuous monitoring of outer space weather" },
    { number: "#3", text: "Forecast potential risks that may affect satellite signals" },
    { number: "#4", text: "Assess their impact on technology and communication" },
  ];

  return (
    <section className="py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* النص */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b0b0b] font-sora mb-4">
            Vision
          </h2>

          <p className="text-gray-600 leading-relaxed font-sora text-[15px] md:text-[16px]">
            The Egyptian Space Agency has joined the space club with the launch
            of a series of satellites. It is necessary to establish a space
            weather monitoring and forecasting center for Egyptian satellites,
            through which it is possible to continuously monitor outer space
            weather and forecast potential risks that may affect satellite
            communication. The ESWC is to become a leading Center in the field of
            space weather research and applications in the region.
          </p>
        </div>

        {/* الصورة */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={imageAbout4}
            alt="about4"
            className="w-full max-w-[500px] rounded-xl object-cover"
          />
        </div>
      </div>

      {/* المربعات */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="
              group bg-white p-6 rounded-2xl shadow-sm border 
              transition-all duration-300 cursor-pointer
              hover:bg-gradient-to-b hover:from-[#ff8d8f] hover:to-[#ff383c]
              hover:border-transparent
            "
          >
            <p
              className="
                text-[#ff383c] font-bold text-lg font-sora mb-3
                group-hover:text-white transition duration-300
              "
            >
              {item.number}
            </p>

            <p
              className="
                text-gray-700 font-sora leading-relaxed
                group-hover:text-white transition duration-300
              "
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
