import React from "react";

const scale2 = () => {
  const data = [
    {
      level: "S1",
      gradient: "linear-gradient(180deg, #2242FF 0%, #142899 100%)",
      effects: (
        <>
          <p><strong>Biological:</strong> None</p>
          <p><strong>Satellite Operations:</strong> None</p>
          <p><strong>Other Systems:</strong> Minor Impacts on HF Radio in The Polar Regions</p>
        </>
      ),
      measure: "10⁻⁵",
    },
    {
      level: "S2",
      gradient: "linear-gradient(180deg, #23FF00 0%, #159900 100%)",
      effects: (
        <>
          <p><strong>Biological:</strong> Passengers and crew in high-flying aircraft at high latitudes may be exposed to elevated radiation risk.</p>
          <p><strong>Satellite Operations:</strong> Infrequent Single-Event Upsets Possible.</p>
          <p><strong>Other Systems:</strong> Small Effects on HF propagation through the polar regions and navigation at polar cap locations possibly affected.</p>
        </>
      ),
      measure: "5×10⁻⁵",
    },
    {
      level: "S3",
      gradient: "linear-gradient(180deg, #FFC300 0%, #997500 100%)",
      effects: (
        <>
          <p><strong>Biological:</strong> Radiation Hazard Avoidance is recommended for astronauts on EVA; passengers and crew in high-flying aircraft at high latitudes may be exposed to radiation risk.</p>
          <p><strong>Satellite Operations:</strong> Single-event upsets, noise in imaging systems, and a slight reduction of efficiency in solar panels are likely.</p>
          <p><strong>Other Systems:</strong> Degraded HF radio propagation through the polar regions and navigation position errors likely.</p>
        </>
      ),
      measure: "",
    },
    {
      level: "S4",
      gradient: "linear-gradient(180deg, #FF6C00 0%, #994100 100%)",
      effects: (
        <>
          <p><strong>Biological:</strong> Unavoidable radiation hazard to astronauts on EVA; passengers and crew in high-flying aircraft at high latitudes may be exposed to radiation risk.</p>
          <p><strong>Satellite Operations:</strong> May experience memory device problems and noise on imaging systems; star-tracker problems may cause orientation problems, and solar panel efficiency can be degraded.</p>
          <p><strong>Other Systems:</strong> Blackout of HF radio communications through the polar regions and increased navigation errors over several days are likely.</p>
        </>
      ),
      measure: "",
    },
    {
      level: "S5",
      gradient: "linear-gradient(180deg, #FF0900 0%, #990500 100%)",
      effects: (
        <>
          <p><strong>Biological:</strong> There is an unavoidable high radiation hazard to astronauts on EVA (extra-vehicular activity); passengers and crew in high-flying aircraft at high latitudes may be exposed to radiation risk.</p>
          <p><strong>Satellite Operations:</strong> Satellites may be rendered useless, memory impacts can cause loss of control and serious noise in image data, star trackers may be unable to locate sources, and permanent damage to solar panels is possible.</p>
          <p><strong>Other Systems:</strong> Complete HF (high frequency) communications blackout through the polar regions.</p>
        </>
      ),
      measure: "",
    },
  ];

  return (
    <section className="bg-gradient-to-tr from-pink-50 to-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <p className="text-sm tracking-widest text-red-700 font-semibold uppercase mb-2">
          S C A L E S
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
          Space Weather Scale for Radio Blackouts
        </h2>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
          <table className="min-w-full border-collapse text-left text-gray-800">
            <thead>
              <tr>
                <th className="border-b border-gray-200 px-4 py-3 w-1/12"></th>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-700 w-6/12">
                  Possible Effects
                </th>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-700 w-3/12">
                  Physical Measure
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="px-4 py-4 flex items-center gap-3 font-semibold text-gray-900">
                    <div
                      className="w-8 h-8 rounded-full flex-shrink-0 shadow-sm"
                      style={{ background: row.gradient }}
                    ></div>
                    {row.level}
                  </td>
                  <td className="px-4 py-4 text-sm space-y-2">{row.effects}</td>
                  <td className="px-4 py-4 text-sm text-gray-600 align-top">
                    {row.measure}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default scale2;