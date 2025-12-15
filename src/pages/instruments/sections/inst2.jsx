import instImg2 from "../../../assets/instimg2.jpg";
import instImg3 from "../../../assets/instimg3.png";
import instImg4 from "../../../assets/instimg4.jpg";

export default function Inst2() {
  return (
    <section className="w-full h-full min-h-screen bg-white flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex-1">

        {/* ---------- Title & Subtitle ---------- */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#213721]">
            Trimble Alloy GNSS Receiver
          </h2>

          <p className="text-gray-600 mt-6 text-base sm:text-lg leading-relaxed">
            Trimble Real-Time Networks software solutions enable professionals to collect, 
            manage and analyse complex information faster and easier, making them more 
            productive, efficient and profitable. <br />
            This software will include application models such as:
          </p>
        </div>

        {/* ---------- Images Grid ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          <img
            src={instImg2}
            alt="Instrument 1"
            className="w-full h-60 sm:h-64 md:h-56 lg:h-64 xl:h-72 object-cover rounded-xl shadow-md"
          />
          <img
            src={instImg3}
            alt="Instrument 2"
            className="w-full h-60 sm:h-64 md:h-56 lg:h-64 xl:h-72 object-cover rounded-xl shadow-md"
          />
          <img
            src={instImg4}
            alt="Instrument 3"
            className="w-full h-60 sm:h-64 md:h-56 lg:h-64 xl:h-72 object-cover rounded-xl shadow-md"
          />
        </div>

        {/* ---------- Two Text Columns ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Atmosphere Application */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Atmosphere Application</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Through the Atmosphere Watch and the Weather Condition modules, the Trimble
              Atmosphere App enables users to evaluate ionosphere and troposphere conditions
              through calculations of various atmospheric parameters and meteorological
              information from various data sources. Including:
            </p>
            <ul className="text-gray-700 space-y-1 list-disc ml-5">
              <li>Integrated Perceptible Water Vapour</li>
              <li>Total Electron Content</li>
              <li>Tropospheric Slant Delay</li>
              <li>Wet Slant Delay</li>
            </ul>
          </div>

          {/* Ionosphere Application */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Ionosphere Application</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              This model is an addition to the Trimble Atmosphere App, designed to calculate 
              and display ionosphere activity and scintillation information for single CORS 
              stations or GNSS networks and report the information to a system administrator.
              The Ionosphere App calculates and summarizes the following information:
            </p>
            <ul className="text-gray-700 space-y-1 list-disc ml-5">
              <li>Scintillation Index for a reference station</li>
              <li>I95 Index, IRIM and GRIM values out of the network processor</li>
              <li>TEC values out of the Atmosphere Watch module</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
