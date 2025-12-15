

// استيراد الصور
import instImg11 from "../../../assets/instimg11.png"; 
import instImg12 from "../../../assets/instimg12.jpg"; 
import instImg13 from "../../../assets/instimg13.png"; 

export default function Inst5() {
  return (
    <section className="w-full px-6 lg:px-16 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 font-sora">

      {/* النص */}
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Weather Station (Vantage Pro2)
        </h1>

        <p className="text-gray-700 leading-relaxed mb-4">
          Vantage Pro2™ Wireless Weather Stations include two components:
          The Sensor Suite, which houses and manages the external sensor array,
          and the console, which provides the user interface, data display,
          and calculations. The Sensor Suite and Vantage Pro2 console communicate
          via an FCC-certified, license-free, spread-spectrum frequency-hopping
          (FHSS) transmitter and receiver.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          User-selectable transmitter ID codes allow up to eight stations to
          coexist in the same geographic area. The frequency-hopping spread
          spectrum technology provides greater communication strength over longer
          distances and areas of weaker reception.
        </p>

        <p className="text-gray-700 leading-relaxed">
          The Wireless Vantage Pro2 Plus weather station includes additional
          optional sensors such as the UV sensor and the solar radiation sensor.
        </p>
      </div>

      {/* الصور */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 items-start">

        {/* الصورة الكبيرة على الشمال */}
        <div className="flex justify-center col-span-1 md:mr-6 lg:mr-0">
          <img
            src={instImg11}
            alt="instimg11"
            className="w-40 sm:w-48 md:w-48 lg:w-48 
                       h-28 sm:h-36 md:h-32 lg:h-32 
                       object-contain rounded-xl shadow-md"
          />
        </div>

        {/* يمين: الصورة فوق + تحت */}
        <div className="flex flex-col items-center gap-6">

          {/* يمين فوق */}
          <img
            src={instImg12}
            alt="instimg12"
            className="w-36 sm:w-44 md:w-48 rounded-xl shadow-md"
          />

          {/* يمين تحت */}
          <img
            src={instImg13}
            alt="instimg13"
            className="w-40 sm:w-48 md:w-52 rounded-xl shadow-md"
          />
        </div>

      </div>

    </section>
  );
}
