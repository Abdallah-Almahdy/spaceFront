import React from "react";
import img2 from "../../../assets/space2.png";
const img3 = require("../../../assets/space4.png");

const SpaceWeatherNews = () => {
  const cards = [
    {
      img: img2,
      title: "Powerful Solar Flare Detected",
      text: `An X1.5-class solar flare erupted from the Sun's active region AR8542,
             causing temporary radio blackouts in parts of South America. Space
             agencies are monitoring potential impacts on scientific communications
             and navigation systems.`,
    },
    {
      img: require("../../../assets/space3.jpg"),
      title: "Geomagnetic Storm Reaches G3 Level",
      text: `A strong geomagnetic storm, driven by a coronal mass ejection (CME),
             has pushed the KP index to 7 — high latitude regions may experience
             auroras, and minor fluctuations in power grids are possible.`,
    },
    {
      img: img3,
      title: "Radiation Levels Rise in the Outer Belt",
      text: `High-energy electron flux in Earth's outer radiation belt has been
             rising, posing a risk to satellites' electronics. Engineers are
             implementing protective protocols to mitigate the impact.`,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <div className="max-w-screen-xl mx-auto px-4 py-8 flex-1">
        {/* العنوان والنص */}
        <div className="flex flex-col items-start mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Space Weather News</h1>
          <p className="text-lg md:text-xl text-left text-[#435567] font-semibold">
            Stay informed with the latest updates on solar activity, geomagnetic
            events, and their effects on Earth.
          </p>
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group bg-white shadow-lg rounded-xl overflow-hidden 
                         w-[90vw] sm:w-[340px] md:w-[360px] lg:w-[381px] 
                         h-auto mx-auto transition-all duration-500"
            >
              <div className="overflow-hidden relative">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:-translate-y-6"
                />
              </div>

              {/* المحتوى */}
              <div className="p-6 flex flex-col justify-between relative
                              transition-transform duration-700 group-hover:-translate-y-4">
                <div>
                  <h3 className="text-[22px] md:text-[24px] font-semibold text-black mb-4 leading-[150%]">
                    {card.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#435567] leading-[150%] mb-6">
                    {card.text}
                  </p>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <p
                    className="relative z-10 text-[#0088FF] text-[14px] font-semibold 
                               opacity-0 translate-y-3 transform transition-all duration-500 
                               group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer"
                  >
                    Read more
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpaceWeatherNews;
