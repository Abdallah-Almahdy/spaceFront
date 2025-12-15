import React from "react";
import sunImage from "../../../assets/sunimg1.png"; // ✅ استدعاء الصورة
import Logo2 from "../../../components/logo2"; // ✅ استدعاء اللوجو

export default function Sun1() {
  return (
    <section
      id="sun1"
      className="py-16 px-6 md:px-12 lg:px-24 text-gray-900 flex flex-col items-center bg-white relative"
    >
      {/* ✅ الصف العلوي: النص والصورة جنب بعض */}
      <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-start justify-between gap-12 relative">
        {/* ✅ النصوص */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h5 className="text-sm tracking-[0.4em] text-red-600 mb-2 font-semibold uppercase">
            S U N
          </h5>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Sun</h2>

          <p
            className="font-sora text-justify mb-6"
            style={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "36px",
              color: "#3F3F3F",
            }}
          >
            The sun is a star mainly made of hydrogen and helium gas, which has
            multiple layers in its atmosphere. The photosphere is a visible
            layer, radiating white light emission, which is called the solar
            surface. Black spots in the photosphere are called sunspots, where
            the magnetic field is stronger and the temperature is lower than the
            surrounding area.
          </p>

          <p
            className="font-sora text-justify"
            style={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "36px",
              color: "#3F3F3F",
            }}
          >
            Inside the sun, there are three layers called the core, the
            radiation layer, and the convection layer, in order from the center.
            Nuclear fusion takes place at the core, emitting light and heat.
            Outside of the photosphere are the chromosphere, the transition
            region, and the corona that expand into interstellar space and
            evolve into coronal mass ejections (CMEs).
          </p>
        </div>

        {/* ✅ الصورة */}
        <div className="w-full lg:w-1/2 flex justify-center items-start lg:mt-20 xl:mt-17 relative">
          <img
            src={sunImage}
            alt="Sun Layers Diagram"
            className="rounded-[16px] shadow-md object-cover"
            style={{
              width: "462px",
              height: "393px",
              transform: "translateY(28px)",
            }}
          />

          {/* ✅ Logo2 في أقصى يمين الـsection */}
          <div className="fixed top-8 right-8">
            <Logo2 />
          </div>
        </div>
      </div>

      {/* ✅ الفقرة الأخيرة تحت الصورة بالكامل */}
      <div className="mt-10 flex justify-center">
        <p
          className="font-sora text-justify"
          style={{
            maxWidth: "1192px",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "36px",
            color: "#3F3F3F",
          }}
        >
          The chromosphere is a “red” layer observed with the emission line of
          hydrogen alpha. There are shadow-like dark thread structures in the
          chromosphere, which are called filaments. When they move to the solar
          limit by the corotation of the Sun, they show bright loop structures
          in front of the dark space background, which are also called
          prominences. These filaments or prominences sometimes erupt
          simultaneously or in association with solar flares.
        </p>
      </div>
    </section>
  );
}
