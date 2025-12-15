import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sw7() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1192px]">
        
        {/* 🔴 العنوان الأساسي */}
        <h2 className="font-sora font-semibold text-[40px] leading-[62px] text-[#B3261E] mb-3">
          Magnetosphere
        </h2>

        {/* الوصف */}
        <p className="font-outfit text-[16px] text-[#8C8C8C] leading-[30px] mb-10 max-w-[680px]">
          The magnetosphere stands as Earth’s invisible shield, deflecting solar
          winds and cosmic radiation to keep our planet safe and balanced
        </p>

        {/* 🩶 الكارد الرمادي */}
        <div className="relative rounded-[12px] bg-[#3F3F3F] px-10 py-12 overflow-hidden flex flex-col lg:flex-row justify-between">

          {/* --------- عناصر الديكور (تمامًا مثل الصورة) --------- */}
          
          {/* اللووب العلوي */}
          <img
            src="/decor/loop-top.svg"
            alt=""
            className="absolute left-6 top-4 w-28 opacity-90"
          />

          {/* الشريط الرمادي العمودي */}
          <div className="absolute left-[30%] top-0 w-[55px] h-full bg-white opacity-[0.06]"></div>

          {/* الدائرة المنقطة الصفراء */}
          <img
            src="/decor/yellow-dots.svg"
            alt=""
            className="absolute left-[32%] bottom-10 w-16"
          />

          {/* السهم الأبيض */}
          <img
            src="/decor/white-arrow.svg"
            alt=""
            className="absolute right-[40%] top-[40%] w-32 opacity-90"
          />

          {/* ---------------------------------------------------- */}

          {/* الجزء الأيسر */}
          <div className="flex flex-col items-start space-y-6 w-full lg:w-[50%] relative z-10">
            {/* العنوان الفرعي */}
            <h3 className="text-[36px] font-semibold font-sora text-white">
              Magnetosphere
            </h3>

            {/* الفقرة */}
            <p className="text-[15px] leading-[28px] text-gray-300 font-sora max-w-[380px]">
              The magnetosphere stands as Earth’s <br />
              invisible shield, deflecting solar winds and <br />
              cosmic radiation to keep our planet safe <br />
              and balanced
            </p>

            {/* الزرار */}
            <button
              onClick={() => navigate("/magnetosphere")}
              className="mt-4 bg-[#FFB300] text-black px-7 py-3 rounded-full font-sora text-[15px] font-medium transition-all duration-300 hover:bg-black hover:text-[#FFB300]"
            >
              Show More →
            </button>
          </div>

          {/* الجزء الأيمن */}
          <div className="flex flex-col justify-center w-full lg:w-[45%] mt-10 lg:mt-0 relative z-10">
            <ul className="text-[16px] text-gray-300 font-sora divide-y divide-gray-600 border-t border-b border-gray-600">
              <li className="py-3 hover:text-[#FFB300] transition-colors duration-300">
                Magnetospheric Convection
              </li>
              <li className="py-3 hover:text-[#FFB300] transition-colors duration-300">
                Geomagnetic Storm
              </li>
              <li className="py-3 hover:text-[#FFB300] transition-colors duration-300">
                Van Allen Radiation Belt
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

