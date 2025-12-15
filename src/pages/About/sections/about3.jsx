import React from "react";

const AboutSection3 = () => {
  const data = [
    {
      impact: "Radio Communication",
      solar: ["Solar Flare", "Solar Proton"],
      magnetosphere: ["Geomagnetic Disturbance", "Radiation Belt Electrons"],
      ionosphere: ["Ionospheric Storm", "Dellinger Phenomenon", "Sporadic E-Layer"],
    },
    {
      impact: "Aviation",
      solar: ["Solar Flare", "Solar Proton"],
      magnetosphere: ["Geomagnetic Disturbance", "Radiation Belt Electrons"],
      ionosphere: ["Ionospheric Storm", "Dellinger Phenomenon", "Sporadic E-Layer"],
    },
    {
      impact: "Satellites",
      solar: ["Solar Flare", "Solar Proton"],
      magnetosphere: ["Geomagnetic Disturbance", "Radiation Belt Electrons"],
      ionosphere: ["Ionospheric Storm", "Dellinger Phenomenon", "Sporadic E-Layer"],
    },
    {
      impact: "GPS",
      solar: ["Solar Flare", "Solar Proton"],
      magnetosphere: ["Geomagnetic Disturbance", "Radiation Belt Electrons"],
      ionosphere: ["Ionospheric Storm", "Dellinger Phenomenon", "Sporadic E-Layer"],
    },
    {
      impact: "Radiation Exposure",
      solar: ["Solar Flare", "Solar Proton"],
      magnetosphere: ["Geomagnetic Disturbance", "Radiation Belt Electrons"],
      ionosphere: ["Ionospheric Storm", "Dellinger Phenomenon", "Sporadic E-Layer"],
    },
    {
      impact: "Power Grid",
      solar: ["Solar Flare", "Solar Proton"],
      magnetosphere: ["Geomagnetic Disturbance", "Radiation Belt Electrons"],
      ionosphere: ["Ionospheric Storm", "Dellinger Phenomenon", "Sporadic E-Layer"],
    },
    {
      impact: "Aurora",
      solar: ["Solar Flare", "Solar Proton"],
      magnetosphere: ["Geomagnetic Disturbance", "Radiation Belt Electrons"],
      ionosphere: ["Ionospheric Storm", "Dellinger Phenomenon", "Sporadic E-Layer"],
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
          Space Weather Impacts on Infrastructure Summary
        </h2>

        {/* DESKTOP TABLE (md and up) */}
        <div className="hidden md:block overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
          <table className="min-w-full border-collapse text-left text-gray-800">
            <thead>
              <tr>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-700 w-1/6">
                  Impacts
                </th>
                <th
                  colSpan={3}
                  className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-700 text-center"
                >
                  Relative Phenomena
                </th>
              </tr>
              <tr>
                <th className="border-b border-gray-200 px-4 py-2"></th>
                <th className="border-b border-gray-200 px-4 py-2 text-gray-700">
                  Solar
                </th>
                <th className="border-b border-gray-200 px-4 py-2 text-gray-700">
                  Magnetosphere
                </th>
                <th className="border-b border-gray-200 px-4 py-2 text-gray-700">
                  Ionosphere
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="px-4 py-3 font-semibold text-gray-900">
                    {row.impact}
                  </td>

                  <td className="px-4 py-3 align-top">
                    {row.solar.map((item, i) => (
                      <div
                        key={i}
                        className="bg-yellow-200 inline-block px-2 py-1 rounded text-sm font-medium text-gray-800 mr-1 mb-1"
                      >
                        {item}
                      </div>
                    ))}
                  </td>

                  <td className="px-4 py-3 align-top">
                    {row.magnetosphere.map((item, i) => (
                      <div
                        key={i}
                        className={`${
                          item === "Geomagnetic Disturbance" ? "bg-yellow-200" : ""
                        } inline-block px-2 py-1 rounded text-sm font-medium text-gray-800 mr-1 mb-1`}
                      >
                        {item}
                      </div>
                    ))}
                  </td>

                  <td className="px-4 py-3 align-top">
                    {row.ionosphere.map((item, i) => (
                      <div
                        key={i}
                        className={`${
                          ["Ionospheric Storm", "Sporadic E-Layer"].includes(item)
                            ? "bg-yellow-200"
                            : ""
                        } inline-block px-2 py-1 rounded text-sm font-medium text-gray-800 mr-1 mb-1`}
                      >
                        {item}
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE CARDS (sm and below) */}
        <div className="md:hidden flex flex-col gap-6 mt-6">
          {data.map((row, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 shadow-md border border-gray-200"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {row.impact}
              </h3>

              <div className="mb-3">
                <p className="font-semibold text-gray-700 mb-1">Solar</p>
                <div className="flex flex-wrap gap-2">
                  {row.solar.map((item, i) => (
                    <span
                      key={i}
                      className="bg-yellow-200 px-2 py-1 rounded text-sm font-medium text-gray-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-3">
                <p className="font-semibold text-gray-700 mb-1">Magnetosphere</p>
                <div className="flex flex-wrap gap-2">
                  {row.magnetosphere.map((item, i) => (
                    <span
                      key={i}
                      className={`${
                        item === "Geomagnetic Disturbance" ? "bg-yellow-200" : ""
                      } px-2 py-1 rounded text-sm font-medium text-gray-800 bg-yellow-50`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-700 mb-1">Ionosphere</p>
                <div className="flex flex-wrap gap-2">
                  {row.ionosphere.map((item, i) => (
                    <span
                      key={i}
                      className={`${
                        ["Ionospheric Storm", "Sporadic E-Layer"].includes(item)
                          ? "bg-yellow-200"
                          : "bg-yellow-50"
                      } px-2 py-1 rounded text-sm font-medium text-gray-800`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection3;
