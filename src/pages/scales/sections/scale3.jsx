import React from "react";

const scale3 = () => {
  const data = [
    {
      level: "G1",
      gradient: "linear-gradient(180deg, #00CFFF 0%, #007499 100%)",
      effects: (
        <>
          <p><strong>Power Systems:</strong> Weak power grid fluctuations can occur.</p>
          <p><strong>Satellite Operations:</strong> A minor impact on satellite operations is possible.</p>
          <p><strong>Other Systems:</strong> Migratory animals are affected at this and higher levels; aurora is commonly visible at high latitudes (northern Michigan and Maine).</p>
        </>
      ),
      measure: "10⁻⁵",
    },
    {
      level: "G2",
      gradient: "linear-gradient(180deg, #23FF00 0%, #159900 100%)",
      effects: (
        <>
          <p><strong>Power Systems:</strong> High-latitude power systems may experience voltage alarms, and long-duration storms may cause transformer damage.</p>
          <p><strong>Satellite Operations:</strong> Corrective actions to orientation may be required by ground control; possible changes in drag affect orbit prediction.</p>
          <p><strong>Other Systems:</strong> HF radio propagation can fade at higher latitudes, and aurora has been seen as far as New York and Idaho (typically 55° geomagnetic lat.).</p>
        </>
      ),
      measure: "5×10⁻⁵",
    },
    {
      level: "G3",
      gradient: "linear-gradient(180deg, #FFC300 0%, #997500 100%)",
      effects: (
        <>
          <p><strong>Power Systems:</strong> Voltage corrections may be required, and false alarms may be triggered on some protection devices.</p>
          <p><strong>Satellite Operations:</strong> Surface charging may occur on satellite components, drag may increase on low-Earth-orbit satellites, and corrections may be needed for orientation problems.</p>
          <p><strong>Other Systems:</strong> Intermittent satellite navigation (GPS) and low-frequency radio navigation problems may occur. HF radio may be intermittent. Aurora has been seen as low as Illinois and Oregon (typically 50° geomagnetic lat.).</p>
        </>
      ),
      measure: "",
    },
    {
      level: "G4",
      gradient: "linear-gradient(180deg, #FF6C00 0%, #994100 100%)",
      effects: (
        <>
          <p><strong>Power Systems:</strong> Possible widespread voltage control problems and some protective systems may mistakenly trip out key assets from the grid.</p>
          <p><strong>Satellite Operations:</strong> May experience surface charging and tracking problems. Corrections may be needed for orientation issues.</p>
          <p><strong>Other Systems:</strong> HF radio may be intermittent. Navigation problems may increase, and aurora has been seen as low as Alabama and northern California.</p>
        </>
      ),
      measure: "",
    },
    {
      level: "G5",
      gradient: "linear-gradient(180deg, #FF0900 0%, #990500 100%)",
      effects: (
        <>
          <p><strong>Power Systems:</strong> Widespread voltage control problems and protective system problems can occur, some grid systems may experience complete collapse or blackouts, and transformers may be damaged.</p>
          <p><strong>Satellite Operations:</strong> May be rendered useless, satellites may experience orientation problems, uplink/downlink tracking and control problems can occur.</p>
          <p><strong>Other Systems:</strong> HF radio blackout on the sunlit side of Earth (high frequency), satellite navigation may be degraded for days, low-frequency radio navigation may be unusable for hours, and aurora has been seen as low as Florida and southern Texas.</p>
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
          Space Weather Scale for Geomagnetic Storms
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

export default scale3;
