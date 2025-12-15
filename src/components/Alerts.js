import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const alerts = [
  {
    title: "Solar Flare Alert",
    desc: "An M-Class Solar Flare has been detected. Possible high-frequency (HF) radio communication disruptions on the sunlit side of Earth. Navigation signals may also experience short-term degradation.",
    sources: ["NOAA SWPC", "ESA SWE", "NASA SDO"],
  },
  {
    title: "Geomagnetic Storm Warning",
    desc: "Geomagnetic activity has reached Kp Index 7 (G3 level). This can cause GPS positioning errors, satellite surface charging, and power grid fluctuations in high-latitude regions.",
    sources: ["NOAA SWPC", "ESA SWE", "NASA SDO"],
  },
  {
    title: "Solar Wind Speed Alert",
    desc: "Solar wind speed has exceeded 700 km/s. High-speed streams can increase the risk of geomagnetic storms and affect satellite operations and communications.",
    sources: ["NOAA SWPC", "ESA SWE"],
  },
  {
    title: "Radiation Levels Rising",
    desc: "Elevated electron flux levels detected. Increased radiation may affect spacecraft electronics and pose risks to astronauts in orbit.",
    sources: ["NOAA SWPC", "NASA SDO"],
  },
];

export default function Alerts() {
  return (
    <section className="bg-gray-50 min-h-screen flex flex-col justify-center py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* العنوان والوصف على الشمال */}
        <div className="text-left mb-14">
          <h2 className="text-4xl font-bold mb-4">Alerts</h2>
          <p className="text-gray-600 max-w-2xl">
            Stay informed with the latest space weather alerts to protect
            systems, satellites, and operations.
          </p>
        </div>

        {/* السلايدر */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={20}
          centeredSlides={false}
          breakpoints={{
            0: { slidesPerView: 1 }, // موبايل
            768: { slidesPerView: 2 }, // تابلت
            1024: { slidesPerView: 3 }, // ديسكتوب
          }}
          className="pb-14"
        >
          {alerts.map((alert, i) => (
            <SwiperSlide key={i} className="h-auto">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500/70 flex flex-col h-[360px]">
                <h3 className="text-lg font-semibold mb-2">{alert.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                  {alert.desc}
                </p>
                <a
                  href="#"
                  className="text-purple-600 text-sm font-medium hover:underline mb-4"
                >
                  Learn more →
                </a>
                <div className="text-sm text-gray-800 flex flex-wrap gap-6 font-semibold">
                  {alert.sources.map((s, idx) => (
                    <span key={idx}>{s}</span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* أزرار التنقل */}
          <div className="swiper-button-prev custom-nav"></div>
          <div className="swiper-button-next custom-nav"></div>
        </Swiper>
      </div>

      {/* ستايل الأزرار */}
      <style jsx global>{`
        .custom-nav {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #9333ea, #a855f7);
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 14px;
          font-weight: bold;
          color: #fff;
        }
      `}</style>
    </section>
  );
}







