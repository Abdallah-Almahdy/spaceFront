import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LiveData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔗 API URLs
  const apiUrls = {
    kpIndex:
      "https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json",
    imf: "https://services.swpc.noaa.gov/products/solar-wind/mag-1-day.json",
    plasma: "https://services.swpc.noaa.gov/products/solar-wind/plasma-1-day.json",
    xray: "https://services.swpc.noaa.gov/json/goes/secondary/xray-flares-latest.json",

    // ☀️ Sun image + fallback
    sun: "https://corsproxy.io/?https://services.swpc.noaa.gov/images/suvi/primary/195/latest.png",
    fallbackSun:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Sun_white.jpg",
  };

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true);

        const [kpRes, imfRes, plasmaRes, xrayRes] = await Promise.all([
          axios.get(apiUrls.kpIndex),
          axios.get(apiUrls.imf),
          axios.get(apiUrls.plasma),
          axios.get(apiUrls.xray),
        ]);

        const kpData = kpRes.data[kpRes.data.length - 1];
        const kpValue = parseFloat(kpData[1]);

        const imfLast = imfRes.data[imfRes.data.length - 1];
        
        const btotal = parseFloat(imfLast[6]);
        const bz = parseFloat(imfLast[3]);
        
        const plasmaLast = plasmaRes.data[plasmaRes.data.length - 1];
        const windSpeed = parseFloat(plasmaLast[1]);
        const density = parseFloat(plasmaLast[2]);

        const xrayValue = xrayRes.data?.xray_class || "C4";

        const date = new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "2-digit",
        });

        const vtecValue = 68;

        setData({
          metrics: [
            { name: "KP Index", value: kpValue },
            { name: "IMF Btotal", value: btotal },
            { name: "IMF Bz", value: bz },
            { name: "Solar Wind Speed", value: windSpeed },
            { name: "Solar Wind Density", value: density },
            { name: "X-ray Flare", value: xrayValue },
            { name: "VTEC", value: vtecValue },
          ],
          sun: { date },
        });
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  const getColor = (name, value) => {
    switch (name) {
      case "KP Index":
        if (value < 5) return "bg-green-500";
        if (value === 5) return "bg-yellow-400";
        if (value === 6) return "bg-orange-500";
        if (value >= 7) return "bg-red-600";
        break;

      case "IMF Btotal":
        if (value < 10) return "bg-green-500";
        if (value < 20) return "bg-yellow-500";
        return "bg-red-600";

      case "IMF Bz":
        if (value > -5) return "bg-green-500";
        if (value > -10) return "bg-yellow-500";
        return "bg-red-600";

      case "Solar Wind Speed":
        if (value < 400) return "bg-green-500";
        if (value < 500) return "bg-orange-400";
        return "bg-red-600";

      case "Solar Wind Density":
        if (value < 5) return "bg-green-500";
        if (value < 10) return "bg-yellow-500";
        return "bg-red-600";

      case "X-ray Flare":
        if (typeof value === "string") {
          if (value.startsWith("B") || value.startsWith("C"))
            return "bg-green-500";
          if (value.startsWith("M")) return "bg-orange-500";
          if (value.startsWith("X")) return "bg-red-600";
        }
        return "bg-gray-400";

      case "VTEC":
        if (value < 40) return "bg-yellow-400";
        if (value < 80) return "bg-green-500";
        return "bg-red-600";

      default:
        return "bg-gray-400";
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-40 text-gray-500">
        Loading...
      </div>
    );

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 ">
      {/* Title */}
      <h2 className="text-2xl mb-[20px] md:text-[14px] lg:text-[30px] xl:text-[50px] font-semibold text-black">
        Space Weather Live Data 🔭
      </h2>

      {/* Subtitle */}
      <p className="text-[#435567] text-sm  md:text-[23px] leading-[150%] mt-2 mb-10 max-w-2xl">
        Stay up-to-date with real-time space weather parameters that impact satellites
      </p>

      {/* Cards Grid */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-3 
        gap-[40px]
      ">
        {data.metrics.map((item, idx) => (
          <div
            key={idx}
            className="
              w-full 
              bg-[#F8FAFC] 
              py-[30px]
              px-[35px]
          
              rounded-xl 
              shadow-sm 
              border 
              border-gray-100 
              flex 
              flex-col 
              justify-between
              transition-all 
              duration-300 
              hover:-translate-y-1 
              hover:shadow-md
            "
          >
            <h3 className="text-sm md:text-base font-semibold mb-1">{item.name}</h3>
            <p className="text-gray-400 text-xs md:text-sm mb-2">Value</p>

            <p className="text-xl md:text-2xl font-bold mb-3">{item.value}</p>

            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
              <div
                className={`${getColor(item.name, item.value)} h-full`}
                style={{
                  width: `${
                    typeof item.value === "number"
                      ? Math.min(Math.abs(item.value), 100)
                      : 100
                  }%`,
                }}
              />
            </div>

            <div className="text-xs text-gray-500 flex items-center gap-2">
              <span>+1.2</span>
              <span>📈</span>
            </div>
          </div>
        ))}

        {/* Sun Card */}
        <div className="
          w-full
          bg-black 
          text-white 
          p-5 
          rounded-xl 
          flex 
          flex-col 
          items-center
        ">
          <h3 className="text-sm md:text-base mb-1">Daily Sun</h3>
          <p className="mb-3 text-xs md:text-sm">{data.sun.date}</p>

          <img
            src={data.sun.image}
            alt="Sun"
            onError={(e) => (e.target.src = apiUrls.fallbackSun)}
            className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-full border-2 border-yellow-400 shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

