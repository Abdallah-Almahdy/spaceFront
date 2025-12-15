import ionImage8 from "../../../assets/ionimage8.png";
// Ion5.jsx
export default function Ion5() {
  return (
    <section id="Ion5" className="bg-[#fdf6f6] py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* النص */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">
            Plasma Bubble
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            A "plasma bubble" is an irregular and low-density region generated locally in the equatorial 
            and low-latitude ionosphere. The colour contours in the figure show the plasma density distribution 
            of plasma bubbles produced by numerical simulation.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Plasma bubbles affect radio wave propagation from satellites to the ground and may cause communication 
            outages and decrease navigation accuracy. Nowcasts and forecasts of plasma bubble occurrence 
            are strongly required.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Plasma bubbles usually begin to appear around sunset near the magnetic equator and propagate eastward, 
            having structures aligned with the magnetic field. Plasma bubbles occasionally reach Japanese latitudes 
            under high solar activity or geomagnetic storm conditions. The basic generation mechanism of plasma bubbles 
            is already known, but it is still difficult to predict when and where they appear.
          </p>
        </div>

        {/* الصورة */}
        <div className="flex justify-center">
          <img
            src={ionImage8}
            alt="Plasma Bubble illustration"
            className="rounded-xl shadow-md w-full max-w-sm"
          />
        </div>

      </div>
    </section>
  );
}
