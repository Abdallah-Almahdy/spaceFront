// LiveData.jsx
import React from "react";
import { Telescope } from "lucide-react"; // أيقونة التلسكوب

const cards = [
  {
    title: "KP Index",
    value: "6,675",
    sub: "+1.2",
    unit: "",
    color: "from-purple-100 to-purple-200",
  },
  {
    title: "IMF Btotal",
    value: "15,61",
    sub: "+3.4 nT",
    unit: "",
    color: "from-blue-100 to-blue-200",
  },
  {
    title: "IMF Bz",
    value: "-12,22",
    sub: "-2.8",
    unit: "",
    color: "from-purple-100 to-purple-200",
  },
  {
    title: "Solar Wind Speed",
    value: "557.3",
    sub: "",
    unit: "km/s",
    color: "from-blue-100 to-blue-200",
  },
  {
    title: "Solar Wind Density",
    value: "6.32",
    sub: "",
    unit: "p/cm³",
    color: "from-purple-100 to-purple-200",
  },
  {
    title: "X-ray Flare",
    value: "C4",
    sub: "C6",
    unit: "",
    color: "from-blue-100 to-blue-200",
  },
  {
    title: "VTEC",
    value: "68",
    sub: "",
    unit: "TECU",
    color: "from-purple-100 to-purple-200",
  },
];

const LiveData = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto min-h-screen">
      {/* العنوان */}
      <div className="mb-12 text-left">
        <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-start gap-2">
          Space Weather Live Data <Telescope className="w-6 h-6" />
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl">
          Stay up-to-date with real-time space weather parameters that impact satellites,
          communications, navigation systems, and power grids worldwide.
        </p>
      </div>

      {/* الكروت */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${card.color} p-6 rounded-xl shadow text-center`}
          >
            <h3 className="text-sm font-medium text-gray-600">{card.title}</h3>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">{card.value}</p>
            <div className="text-sm text-gray-500 flex justify-center gap-1">
              {card.sub && <span>{card.sub}</span>}
              {card.unit && <span className="text-gray-400">{card.unit}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveData;



