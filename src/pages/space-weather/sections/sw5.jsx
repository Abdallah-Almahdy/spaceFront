import React from "react";
import { useNavigate } from "react-router-dom";
import sw1 from "../../../assets/sweather4.jpg"; // ✅ صورة الكارت الأول
import sw4 from "../../../assets/sweather1.jpg"; // ✅ صورة الكارت الرابع

export default function Sw5() {
  const navigate = useNavigate();

  return (
    <section id="sun" className="py-16 px-6 md:px-16 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">

        {/* العنوان الرئيسي */}
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
          The Sun
        </h2>

        <p className="text-gray-700 mb-10 leading-relaxed">
          Space weather includes solar flares, geomagnetic storms, solar wind, and ionospheric disturbances—
          each with significant impacts on satellites and Earth's infrastructure
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* ✅ Card 1 (صورة + Gradient أسود من اليسار) */}
          <div
            className="relative h-64 rounded-lg overflow-hidden shadow-lg bg-cover bg-no-repeat"
            style={{
              backgroundImage: `
                linear-gradient(
                  to right,
                  rgba(0,0,0,1) 0%,
                  rgba(0,0,0,0.85) 50%,
                  rgba(0,0,0,0.5) 75%,
                  rgba(0,0,0,0) 100%
                ),
                url(${sw1})
              `,
              backgroundPosition: "right top",
            }}
          >
            <div className="relative z-10 h-full flex items-end p-6">
              <div>
                <p className="text-gray-300 text-sm">#1</p>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Solar Flares
                </h3>
                <p className="text-gray-200 mb-3 text-sm max-w-xs">
                  Powerful bursts of radiation from the Sun that can disrupt communication and navigation.
                </p>
                <button
                  onClick={() => navigate("/sun")}
                  className="text-yellow-400 font-semibold hover:underline"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 (خلفية سوداء Overlay) */}
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg bg-black">
            <div className="absolute inset-0 bg-black bg-opacity-80 flex items-end p-6">
              <div>
                <p className="text-gray-300 text-sm">#2</p>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Solar Wind
                </h3>
                <p className="text-gray-200 mb-3 text-sm">
                  A continuous stream of charged particles flowing from the Sun.
                </p>
                <button
                  onClick={() => navigate("/sun")}
                  className="text-yellow-400 font-semibold hover:underline"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 (خلفية سوداء Overlay) */}
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg bg-black">
            <div className="absolute inset-0 bg-black bg-opacity-80 flex items-end p-6">
              <div>
                <p className="text-gray-300 text-sm">#3</p>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Coronal Mass Ejection (CME)
                </h3>
                <p className="text-gray-200 mb-3 text-sm">
                  Huge clouds of plasma ejected from the Sun.
                </p>
                <button
                  onClick={() => navigate("/sun")}
                  className="text-yellow-400 font-semibold hover:underline"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>

          {/* Card 4 (صورة + Overlay غامق) */}
          <div
            className="relative h-64 rounded-lg overflow-hidden shadow-lg bg-cover bg-center"
            style={{ backgroundImage: `url(${sw4})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <div className="relative z-10 h-full flex items-end p-6">
              <div>
                <p className="text-gray-300 text-sm">#4</p>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Solar Energetic Particles (SEPs)
                </h3>
                <p className="text-gray-200 mb-3 text-sm">
                  High-energy particles accelerated by solar eruptions.
                </p>
                <button
                  onClick={() => navigate("/sun")}
                  className="text-yellow-400 font-semibold hover:underline"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
