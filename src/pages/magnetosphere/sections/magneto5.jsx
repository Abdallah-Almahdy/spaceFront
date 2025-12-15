import React from "react";

export default function Magneto5() {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-24 font-[Sora]">
      
      {/* الحاوية العامة */}
      <div className="max-w-[1300px] mx-auto">

        {/* ------- Geomagnetic Disturbance ------- */}
        <h2 className="text-[24px] font-semibold leading-[150%] text-[#B3261E] mb-6">
          Geomagnetic Disturbance
        </h2>

        <div className="w-full border border-[#E5E5E5] rounded-lg overflow-hidden mb-14">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-[#E5E5E5]">
                <td className="w-[120px] font-semibold p-4 text-[#000000CC] border-r border-[#E5E5E5]">
                  Issue
                </td>
                <td className="p-4 text-[#000000CC]">
                  When there is a report of a geomagnetic storm from Kakioka
                </td>
              </tr>

              <tr>
                <td className="w-[120px] font-semibold p-4 text-[#000000CC] border-r border-[#E5E5E5]">
                  Cancel
                </td>
                <td className="p-4 text-[#000000CC]">
                  When the geomagnetic storm is terminated
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ------- Radiation Belt Electron ------- */}
        <h2 className="text-[24px] font-semibold leading-[150%] text-[#B3261E] mb-6">
          Radiation Belt Electron
        </h2>

        <div className="w-full border border-[#E5E5E5] rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-[#E5E5E5]">
                <td className="w-[120px] font-semibold p-4 text-[#000000CC] border-r border-[#E5E5E5]">
                  Issue
                </td>
                <td className="p-4 text-[#000000CC]">
                  When the 24-hour electron fluence (≥ 2 MeV) observed by GOES is over 3.8 × 10⁸ [/cm2 sr]
                </td>
              </tr>

              <tr className="border-b border-[#E5E5E5]">
                <td className="w-[120px] font-semibold p-4 text-[#000000CC] border-r border-[#E5E5E5]">
                  Issue
                </td>
                <td className="p-4 text-[#000000CC]">
                  When the 24-hour electron fluence (≥ 2 MeV) observed by GOES is over 3.8 × 10⁹ [/cm2 sr]
                </td>
              </tr>

              <tr className="border-b border-[#E5E5E5]">
                <td className="w-[120px] font-semibold p-4 text-[#000000CC] border-r border-[#E5E5E5]">
                  Issue
                </td>
                <td className="p-4 text-[#000000CC]">
                  When the 24-hour electron fluence (≥ 2 MeV) observed by GOES returns to less than 1.9 × 10⁹ [/cm2 sr]
                </td>
              </tr>

              <tr>
                <td className="w-[120px] font-semibold p-4 text-[#000000CC] border-r border-[#E5E5E5]">
                  Cancel
                </td>
                <td className="p-4 text-[#000000CC]">
                  When the 24-hour electron fluence (≥ 2 MeV) observed by GOES returns to less than 1.9 × 10⁸ [/cm2 sr]
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </section>
  );
}
