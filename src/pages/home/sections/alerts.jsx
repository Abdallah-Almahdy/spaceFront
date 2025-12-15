// src/components/AlertsSection.jsx
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const alerts = [
  {
    title: "Solar Flare Alert",
    description:
      "An M4-class Solar Flare has been detected. Possible high-frequency (HF) radio communication disruptions on the sunlit side of Earth. Navigation signals may also experience short-term degradation.",
    link: "#",
    sources: ["NOAA SWPC", "ESA SUIE", "NASA SDO"],
  },
  {
    title: "Geomagnetic Storm Warning",
    description:
      "Geomagnetic activity has reached K-index 7 (G3 level). This could cause GPS positioning errors, satellite surface charging, and power grid fluctuations in high-latitude regions.",
    link: "#",
    sources: ["NOAA SWPC", "ESA SUIE", "NASA SDO"],
  },
  {
    title: "Solar Wind Speed Alert",
    description:
      "Solar wind speed has exceeded 700 km/s. This indicates an enhanced flow from coronal holes that can trigger geomagnetic storms and affect satellite drag and communications.",
    link: "#",
    sources: ["NOAA SWPC", "ESA SUIE"],
  },
  {
    title: "Radiation Belt Disturbance",
    description:
      "Increased high-energy particle flux detected in the Van Allen radiation belts. This may impact satellite electronics and long-duration space missions in medium and high Earth orbits.",
    link: "#",
    sources: ["NASA SDO", "ESA SUIE"],
  },
  {
    title: "Proton Event Detected",
    description:
      "High-energy solar protons have been observed impacting Earth's magnetic field. This may cause polar flight route disruptions and minor communication blackouts at high latitudes.",
    link: "#",
    sources: ["NOAA SWPC", "NASA SDO"],
  },
];

export default function AlertsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(464 + 24); // default width + gap

  // حساب العرض الحقيقي للكارت بعد ما الصفحة تتعرض
  useEffect(() => {
    const updateWidth = () => {
      if (cardRef.current) setCardWidth(cardRef.current.offsetWidth + 24);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleNext = () => {
    if (currentIndex < alerts.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <section className="bg-[#F7FBFF] py-16 px-6 md:px-20 overflow-hidden font-[Sora]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="font-bold text-[36px] text-[#B3261E] leading-[150%]">
            Alerts
          </h2>
          <p className="text-[#435567] font-semibold text-[16px] max-w-[505px] mt-4 leading-[150%]">
            Stay informed with the latest space weather alerts to protect systems, satellites, and operations.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-3 mb-6 pr-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="w-[40px] h-[40px] rounded-full border border-[#1F53B6] text-[#1F53B6] flex items-center justify-center disabled:opacity-40"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= alerts.length - 1}
            className="w-[40px] h-[40px] rounded-full border border-[#1F53B6] text-[#1F53B6] flex items-center justify-center disabled:opacity-40"
          >
            ›
          </button>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: -currentIndex * cardWidth }}
            transition={{ duration: 0.4 }}
            className="flex gap-6"
          >
            {alerts.map((alert, index) => (
              <div
                key={index}
                ref={index === 0 ? cardRef : null}
                className="flex-shrink-0 relative group
                  w-[85vw] sm:w-[380px] md:w-[420px] lg:w-[464px]
                  h-[400px] bg-white border border-gray-200 shadow-lg rounded-xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all"
              >
                {/* Top Bar */}
                <div className="absolute top-0 left-0 w-full h-[6px] rounded-t-xl bg-gradient-to-b from-[#4F378A] to-[#150E24]"></div>

                {/* Content */}
                <h3 className="pt-6 text-[22px] md:text-[24px] font-semibold mb-4 leading-[150%]">
                  {alert.title}
                </h3>
                <p className="text-[#435567] text-[14px] md:text-[15px] leading-relaxed mb-8">
                  {alert.description}
                </p>

                <a
                  href={alert.link}
                  className="flex items-center gap-1 text-[#0088FF] font-semibold group-hover:text-black transition"
                >
                  Learn more →
                </a>

                <div className="border-t mt-6 w-full"></div>

                <div className="flex flex-wrap gap-3 text-[14px] md:text-[15px] font-bold text-[#425466] mt-4">
                  {alert.sources.map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
