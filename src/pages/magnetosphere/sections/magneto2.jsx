import React from "react";
import magnetoImg2 from "../../../assets/magimg2.png"; // استيراد الصورة

export default function Magneto2() {
  return (
    <section className="w-full bg-[#7D526029] py-12 px-6 md:px-12 lg:px-24 font-[Open_Sans]">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* ----- النص ----- */}
        <div className="text-left">
          <h2
            style={{
              fontFamily: "Open Sans",
              fontWeight: 600,
              fontStyle: "normal",
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#B3261E",
            }}
            className="mb-6"
          >
            Magnetospheric Convection
          </h2>

          <p
            style={{
              fontFamily: "Open Sans",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#646464",
            }}
            className="leading-normal text-left"
          >
            The efficiency of energy input from the solar wind to the magnetosphere is mainly controlled
            by the direction of the magnetic field carried by the solar wind, i.e., IMF. Earth’s magnetic
            field lines are northward except at the northern and southern poles, extending from the southern
            hemisphere and entering the northern hemisphere, because Earth’s intrinsic magnetic field has
            S and N poles at the north and south poles, respectively, as noted above. When the IMF arrives
            at the dayside magnetosphere is directed northward, Earth’s magnetic field and the IMF do not
            interact significantly, although they approach each other at the magnetopause. In this case,
            similarly to the relationship between objects and flow fields, the solar wind flows around the
            magnetosphere toward the night side. However, when the IMF arrives at the dayside magnetosphere
            is directed southward, Earth’s magnetic field and the IMF become antiparallel, resulting in the
            merging between the field lines, that is, “magnetic reconnection”. As a result, magnetic field
            lines, one end of which is connected to the IMF and the other end of which is grounded Earth,
            are created. We call such field lines “open field lines”, while we call magnetic field lines
            with both ends grounded to Earth “closed field lines.” Open field lines are carried toward the
            nightside by the solar wind, while one end remains grounded to Earth.
          </p>
        </div>

        {/* ----- الصورة ----- */}
        <div className="w-full flex justify-center">
          <img
            src={magnetoImg2}
            alt="Magnetospheric diagram"
            className="w-full h-auto object-contain rounded-lg xl:mt-4 lg:mt-4"
          />
        </div>

      </div>

      {/* ----- الفقرة الطويلة تحت الصورة وتمتد لآخر الصفحة ----- */}
      <div className="mt-10 flex justify-center">
        <p
          style={{
            fontFamily: "Open Sans",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "16px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#646464",
            width: "1300px", // تمتد لآخر الصفحة مثل Sw2
          }}
          className="text-left"
        >
          In the distant magnetotail, open field lines from the northern and southern hemispheres gradually
          approach each other, resulting in a situation in which antiparallel field lines approach each other
          similarly to those in the dayside. Magnetic reconnection occurs again there. As a result, a pair of
          open field lines originating from the northern and southern hemispheres merge again and become a
          closed field line with both ends grounded to Earth. The newly created closed field line returns toward
          Earth and eventually toward the dayside owing to the magnetic tension force, which acts to recover from
          the stretched configuration to the original dipole field. In this way, the dayside magnetic field is
          carried toward the nightside.
          <br /><br />
          Plasmas inside the magnetosphere move together with the magnetic field. This circulation of plasmas and
          the magnetic field is called ‘magnetospheric convection’. In this way, the solar wind energy effectively
          flows into the magnetosphere and drives the large-scale convection. This does not imply that no solar wind
          energy flows into the magnetosphere during the northward IMF. It is considered that solar wind energy can
          flow into the magnetosphere owing to the viscosity between the solar wind plasmas and the magnetospheric
          plasmas regardless of the IMF direction. However, it is generally considered that the energy input by the
          magnetic reconnection is much larger than that by the viscous interaction.
        </p>
      </div>

    </section>
  );
}
