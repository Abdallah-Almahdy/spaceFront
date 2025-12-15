import instImg1 from "../../../assets/instimg1.jpg";
import Navbar from "../../../components/navbar";

export default function Inst1() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden overflow-y-auto">

      {/* ✅ النافبار فوق كل المحتوى */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* ⭐ الخلفية المائلة — ريسبونسيف الآن */}
      <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden">
        <div
          className="
            w-[130%] 
            h-[130%]
            bg-red-100 
            rotate-[-2deg] 
            translate-y-[80px]
            mx-auto
          "
        ></div>
      </div>

      {/* محتوى inst1 */}
      <section className="relative w-full py-24 md:py-32 z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* النص */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1c1e2a] mb-6">
              Instruments
            </h1>

            <p className="text-gray-700 text-base sm:text-lg max-w-md leading-relaxed">
              The Egyptian Space Weather Center uses a variety of advanced
              instruments to monitor, analyze, and forecast space weather
              conditions...
            </p>
          </div>

          {/* الصورة */}
          <div className="flex justify-center md:justify-end">
            <img
              src={instImg1}
              alt="Earth"
              className="
                w-[230px] h-[230px]
                sm:w-[300px] sm:h-[300px]
                md:w-[350px] md:h-[350px]
                lg:w-[420px] lg:h-[420px]
                xl:w-[460px] xl:h-[460px]
                object-cover rounded-full shadow-xl
              "
            />
          </div>
        </div>
      </section>
    </div>
  );
}



