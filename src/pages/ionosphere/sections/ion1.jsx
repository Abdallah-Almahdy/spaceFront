import React from "react";
import ionImage1 from "../../../assets/ionimage1.png";
import Logo2 from "../../../components/logo2"; // صححنا المسار

const Ion1 = () => {
  return (
    <section className="relative bg-white text-gray-900 font-sans overflow-hidden px-6 md:px-12 lg:px-[124px] py-12 min-h-screen flex flex-col space-y-8">
      
      {/* 🔹 اللوجو على أقصى يمين الصفحة */}
      <div className="absolute top-6 right-6 z-50">
        <Logo2 />
      </div>

      {/* العنوان والفقرات */}
      <div className="w-full space-y-4">
        <h5 className="text-[#B3261E] uppercase font-[Sora] font-normal text-[18px] leading-[100%] tracking-[0.615em]">
          Ionospheric
        </h5>

        <h1 className="text-3xl md:text-4xl font-bold">
          Ionospheric
        </h1>

        <p className="text-[#3F3F3F] font-[Sora] text-[16px] md:text-[18px] leading-[28px] md:leading-[36px] font-normal">
          Earth's upper atmosphere is partially ionized due to the absorption of
          solar ultraviolet rays and X-rays and the impact of energized particles.
          The ionized atmosphere is called the ionosphere. As shown in the figure,
          the ionosphere expands over an altitude range from 60 to 1000 km and is
          divided into areas such as the D, E, and F regions from its altitude
          distribution. These regions vary both temporarily and spatially in
          response to variations in solar UV intensity and the state of the
          background neutral atmosphere. In the vicinity of Japan, the electron
          density generally becomes larger at lower latitudes.
        </p>

        <p className="text-[#3F3F3F] font-[Sora] text-[16px] md:text-[18px] leading-[28px] md:leading-[36px] font-normal">
          The electron density has regular temporal variations such as daily and
          seasonal cycles and the approximately 11-year cycle associated with
          solar activity. In addition to the periodic variations, irregular
          disturbances also occur. For example, immediately after a large solar
          flare, the "Dellinger phenomenon", an irregular increase in the D
          region electron density, sometimes occurs, which can disrupt radio
          communications. When the magnetosphere is disturbed, an "ionospheric
          storm" may occur, in which the F region electron density significantly
          increases or decreases. Some local fluctuations, such as a "sporadic E
          layer" and "equatorial plasma bubble" also frequently occur in
          particular seasons.
        </p>
      </div>

      {/* الصورة */}
      <div className="flex justify-center">
        <img
          src={ionImage1}
          alt="Ionosphere diagram"
          className="w-full max-w-[466px] h-auto object-contain rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Ion1;
