import React from "react";

const scale1 = () => {
  const data = [
    {
      level: "R1",
      gradient: "linear-gradient(180deg, #0CF7FF 0%, #06EBFF 100%)",
      effects: (
        <>
          <p>
            <strong>HF Radio:</strong> Weak or minor degradation of HF radio
            communication on the sunlit side, occasional loss of radio contact.
          </p>
          <p>
            <strong>Navigation:</strong> Low-frequency navigation signals are
            degraded for brief intervals.
          </p>
        </>
      ),
      measure: "",
    },
    {
      level: "R2",
      gradient: "linear-gradient(180deg, #C3DB1A 0%, #A8CB13 100%)",
      effects: (
        <>
          <p>
            <strong>HF Radio:</strong> Limited blackout of HF radio
            communication on the sunlit side, loss of radio contact for tens of
            minutes.
          </p>
          <p>
            <strong>Navigation:</strong> Degradation of low-frequency navigation
            signals for tens of minutes.
          </p>
        </>
      ),
      measure: "5×10⁻⁵",
    },
    {
      level: "R3",
      gradient: "linear-gradient(180deg, #FFD04A 0%, #FFB021 100%)",
      effects: (
        <>
          <p>
            <strong>HF Radio:</strong> There is a wide area blackout of HF radio
            communication, loss of radio contact for about an hour on the sunlit
            side of Earth.
          </p>
          <p>
            <strong>Navigation:</strong> Low-frequency navigation signals
            degraded for about an hour.
          </p>
        </>
      ),
      measure: "",
    },
    {
      level: "R4",
      gradient: "linear-gradient(180deg, #FED43B 0%, #FCBC24 100%)",
      effects: (
        <>
          <p>
            <strong>HF Radio:</strong> HF radio communication is blacked out on
            most of the sunlit side of Earth for one to two hours. HF radio
            contact was lost during this time.
          </p>
          <p>
            <strong>Navigation:</strong> Outages of low-frequency navigation
            signals cause increased errors in positioning for one to two hours.
            Minor disruptions of satellite navigation are possible on the sunlit
            side of Earth.
          </p>
        </>
      ),
      measure: "",
    },
    {
      level: "R5",
      gradient: "linear-gradient(180deg, #FE783B 0%, #FE725C 100%)",
      effects: (
        <>
          <p>
            <strong>HF Radio:</strong> Complete HF (high frequency) radio
            blackout on the entire sunlit side of the Earth, lasting for several
            hours. This results in no HF radio contact with mariners and
            end-route aviators in this sector.
          </p>
          <p>
            <strong>Navigation:</strong> Low-frequency navigation signals used by
            maritime and general aviation systems experience outages on the
            sunlit side of the Earth for many hours, causing loss in positioning.
            Increased satellite navigation errors in positioning for several
            hours on the sunlit side of Earth, which may spread into the night
            side.
          </p>
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
                  {/* Level + Gradient Icon */}
                  <td className="px-4 py-4 flex items-center gap-3 font-semibold text-gray-900">
                    <div
                      className="w-8 h-8 rounded-full flex-shrink-0 shadow-sm"
                      style={{ background: row.gradient }}
                    ></div>
                    {row.level}
                  </td>

                  {/* Effects */}
                  <td className="px-4 py-4 text-sm space-y-2">{row.effects}</td>

                  {/* Measure */}
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

export default scale1;
