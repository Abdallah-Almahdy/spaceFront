import React from "react";
import magneto4 from "../../../assets/magimg4.png";

export default function Magneto4() {
  return (
    <section className="w-full bg-[#F0EAEC] py-12 px-6 md:px-12 lg:px-24 antialiased">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* الصورة */}
        <div className="w-full flex justify-center">
          <img
            src={magneto4}
            alt="Van Allen Radiation Belt"
            className="w-full h-auto object-contain rounded-lg lg:mt-20 xl:mt-20"
          />
        </div>

        {/* النصوص */}
        <div className="text-left flex flex-col items-start">

          {/* العنوان */}
          <h2
            style={{
              fontFamily: "Sora",
              fontWeight: 600,
              fontSize: "36px",
              lineHeight: "44px",
              letterSpacing: "0",
              color: "#B3261E",
            }}
            className="mb-6 w-full max-w-[560px] mx-auto lg:mx-0"
          >
            Van Allen Radiation Belt
          </h2>

          {/* الفقرة الأولى */}
          <p
            style={{
              fontFamily: "Sora",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "28px",
              letterSpacing: "0",
              color: "#3F3F3F",
            }}
            className="mb-6 w-full max-w-[560px] mx-auto lg:mx-0"
          >
            The region where high-energy electrons and ions are trapped in the magnetosphere 
            is called the ‘radiation belt’ (Van Allen belt). The radiation belt consists of 
            an inner belt that is distributed around an altitude of 3,000 km and an outer belt 
            that is distributed around an altitude of 20,000 km in the equatorial plane.
          </p>

          {/* الفقرة الثانية */}
          <p
            style={{
              fontFamily: "Sora",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "28px",
              letterSpacing: "0",
              color: "#3F3F3F",
            }}
            className="w-full max-w-[560px] mx-auto lg:mx-0"
          >
            High-energy ions are mainly distributed in the inner radiation belt, and 
            high-energy electrons are distributed in the outer radiation belt. The outer 
            radiation belt expands to a geostationary orbit where many artificial satellites 
            are in operation. The radiation belt is not stable and changes depending on the 
            space environment conditions. In particular, the flux of high-energy particles 
            in the outer belt changes in the range of a few orders of magnitude depending 
            on the solar wind condition, and the high-energy particles sometimes damage 
            artificial satellites.
          </p>

        </div>
      </div>
    </section>
  );
}
