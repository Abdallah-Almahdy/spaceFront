import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ مهم للتنقل بين الصفحات

const Sw4 = () => {
  const navigate = useNavigate(); // ⚡ بنستخدمها للتنقل عند الضغط على الزر

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1192px]">
        {/* 🔴 العنوان الرئيسي */}
        <h2
          className="font-sora mb-3"
          style={{
            width: "577px",
            height: "60px",
            fontWeight: 600,
            fontSize: "40px",
            lineHeight: "62px",
            color: "#B3261E",
          }}
        >
          Space Weather Scales
        </h2>

        {/* الفقرة الصغيرة تحت العنوان */}
        <p
          className="font-outfit text-[16px] text-[#8C8C8C] leading-[30px] mb-10"
          style={{
            width: "687px",
            height: "56px",
            opacity: 1,
            fontWeight: 400,
          }}
        >
          Space weather is measured on a scale of 1 (minor) to 5 (extreme),
          covering radio blackouts, solar radiation storms, and geomagnetic storms.
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
          <div className="flex flex-col items-start justify-between h-full space-y-6 max-w-[50%]">
            {/* العنوان الفرعي */}
            <h3 className="text-[32px] md:text-[36px] font-semibold font-sora">
              Space Weather Scales
            </h3>

            {/* الفقرة */}
            <p className="text-[16px] leading-[28px] text-gray-200 font-sora max-w-[380px]">
              Space weather is measured on scales from 1 <br />
              (minor) to 5 (extreme), covering radio, <br />
              radiation, and geomagnetic storms.
            </p>

            {/* الزرار */}
            <button
              onClick={() => navigate("/scales")} // ✅ هنا التنقل
              className="mt-4 bg-[#FFB300] text-black px-6 py-2 rounded-full font-sora font-medium transition-all duration-300 hover:bg-black hover:text-[#FFB300]"
            >
              Show Scales →
            </button>
          </div>

          {/* الجزء الأيمن */}
          <div className="flex flex-col justify-center w-full lg:w-[45%] mt-10 lg:mt-0">
            <h4 className="text-[24px] font-semibold font-sora mb-4">Scales ..</h4>

            {/* القائمة مع الخطوط الفاصلة */}
            <ul className="text-[16px] text-gray-300 font-sora divide-y divide-gray-600 border-t border-b border-gray-600">
              <li className="py-3">R – Radio Blackouts</li>
              <li className="py-3">S – Solar Radiation Storms</li>
              <li className="py-3">G – Geomagnetic Storms</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sw4;
