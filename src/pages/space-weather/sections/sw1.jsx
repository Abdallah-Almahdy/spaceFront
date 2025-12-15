import React from "react";
import sw1Img from "../../../assets/Aurora.jpg";
import Navbar from "../../../components/navbar"; // ✅ استدعاء النافبار

const Sw1 = () => {
  return (
    <div className="w-full relative">
      {/* ✅ النافبار في أعلى السيكشن */}
      <Navbar />

      {/* 🪐 السيكشن الرئيسي */}
      <section
        className="relative flex items-center justify-start w-full h-[500px] md:h-[700px] lg:h-[838px]"
        style={{
          backgroundImage: `url(${sw1Img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* فلتر يغطي النصف الشمالي */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-black/70"></div>

        {/* النص */}
        <div className="relative z-10 px-6 md:px-12 lg:px-24 text-left max-w-[559px]">
          <h2
            className="font-outfit font-bold text-[64px] md:text-[72px] leading-[81px] tracking-[0.01em] text-white mb-6"
            style={{ verticalAlign: "bottom" }}
          >
            Space Weather
          </h2>
          <p className="font-sora text-[16px] leading-[36px] text-white">
            The Egyptian Space Weather Center (ESWC) monitors solar activity and
            geomagnetic storms to safeguard satellites, communication networks, and
            national infrastructure from the effects of solar and space phenomena.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Sw1;
