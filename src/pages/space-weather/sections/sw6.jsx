import React from "react";
import { useNavigate } from "react-router-dom";

const Sw6 = () => {
  const navigate = useNavigate(); // ✅ تعريف الـ navigate

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1192px]">
        {/* 🔴 العنوان الرئيسي */}
        <h2
          className="font-sora mb-3"
          style={{
            fontWeight: 600,
            fontSize: "40px",
            lineHeight: "62px",
            color: "#B3261E",
          }}
        >
          Ionosphere
        </h2>

        {/* الفقرة الصغيرة تحت العنوان */}
        <p
          className="font-outfit text-[16px] text-[#8C8C8C] leading-[30px] mb-10 max-w-[680px]"
          style={{
            fontWeight: 400,
          }}
        >
          The ionosphere is a layer of Earth’s upper atmosphere, ionized by solar
          radiation, that strongly influences radio signals, GPS accuracy, and
          satellite communications.
        </p>

        {/* 🩶 المربع الرمادي */}
        <div
          className="flex flex-col lg:flex-row justify-between items-start text-white rounded-[9px] border-[9px] border-[#3F3F3F] bg-[#3F3F3F] px-10 py-12"
          style={{
            borderRadius: "9px",
            border: "9px solid #3F3F3F",
          }}
        >
          {/* الجزء الأيسر */}
          <div className="flex flex-col items-start justify-between h-full space-y-6 w-full lg:w-[50%]">
            {/* العنوان الفرعي */}
            <h3 className="text-[32px] md:text-[36px] font-semibold font-sora">
              Ionosphere
            </h3>

            {/* الفقرة */}
            <p className="text-[16px] leading-[28px] text-gray-200 font-sora max-w-[380px]">
              The ionosphere is a layer of Earth’s upper <br />
              atmosphere, ionized by solar radiation, that <br />
              strongly influences radio signals, GPS <br />
              accuracy, and satellite communications.
            </p>

            {/* الزرار */}
            <button
              onClick={() => navigate("/ionosphere")} // ✅ هنا الانتقال للصفحة
              className="mt-4 bg-[#FFB300] text-black px-6 py-2 rounded-full font-sora font-medium transition-all duration-300 hover:bg-black hover:text-[#FFB300]"
            >
              Show More →
            </button>
          </div>

          {/* الجزء الأيمن */}
          <div className="flex flex-col justify-center w-full lg:w-[45%] mt-10 lg:mt-0">
            <ul className="text-[16px] text-gray-300 font-sora divide-y divide-gray-600 border-t border-b border-gray-600">
              <li className="py-3 hover:text-[#FFB300] transition-colors duration-300">
                Ionospheric Storm
              </li>
              <li className="py-3 hover:text-[#FFB300] transition-colors duration-300">
                Dellinger Phenomenon
              </li>
              <li className="py-3 hover:text-[#FFB300] transition-colors duration-300">
                Sporadic-E layer
              </li>
              <li className="py-3 hover:text-[#FFB300] transition-colors duration-300">
                Plasma Bubble
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sw6;
