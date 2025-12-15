import React from "react";

export default function About6() {
  const red = "#C94A3A";
  const purple = "#6A6CF3";

  const items = [
    // العمود الأول
    { color: red, text: "Mission analysis and system requirements for satellites." },
    { color: purple, text: "Ionospheric models for space weather effects." },
    { color: purple, text: "Ionospheric scintillation (S4) map over Egypt." },

    // العمود الثاني
    { color: red, text: "Characterization of ionospheric plasma parameters." },
    { color: purple, text: "Critical info to mitigate space weather impact." },
    { color: purple, text: "Water vapour analysis map over Egypt." },

    // العمود الثالث
    { color: red, text: "Study extreme space weather hazards on satellites." },
    { color: purple, text: "TEC map for ionospheric disturbances over Egypt." },
    { color: purple, text: "ROTI map over Egypt." }
  ];

  return (
    <section className="py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* العنوان */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b0b0b] font-sora mb-12">
          Our Capabilities
        </h2>

        {/* الـ GRID */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 text-[#7E7E7E]">

          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">

              {/* مربع موحد المقاس */}
              <span
                className="w-5 h-5 flex justify-center items-center rounded-none shrink-0"
                style={{ backgroundColor: item.color }}
              >
                {/* علامة صح SVG ثابتة */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>

              <p className="leading-snug max-w-[260px]">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
