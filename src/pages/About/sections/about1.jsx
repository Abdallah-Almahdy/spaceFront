import React from "react";
import about1Img from "../../../assets/Aurora.jpg"; 
import Navbar from "../../../components/navbar"; 

const About1 = () => {
  return (
    <div className="w-full">
      {/* النافبار */}
      <Navbar />

      {/* السيكشن */}
      <section
        className="relative flex items-center justify-start w-full h-[500px] md:h-[700px] lg:h-[838px]"
        style={{
          backgroundImage: `url(${about1Img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} 
      >
        {/* فلتر يغطي الشمال بس */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-black/70"></div>

        {/* النص */}
        <div className="relative z-10 px-6 md:px-12 lg:px-24 text-left max-w-[559px]">
          <h2
            className="font-outfit font-bold text-[72px] leading-[81px] tracking-[0.01em] text-white mb-6"
            style={{ verticalAlign: "bottom" }}
          >
            About Us
          </h2>
          <p className="font-sora text-[16px] leading-[36px] text-white">
            The Egyptian Space Weather Center (ESWC) of the Egyptian Space Agency
            (ESA) is a National Center that serves as the official source for
            space weather alerts and warnings in Egypt.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About1;














