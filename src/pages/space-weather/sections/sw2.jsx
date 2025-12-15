import React from "react";
import swDef from "../../../assets/swDef.jpg";

const Sw2 = () => {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-24">
      {/* الصف العلوي: الصورة + العنوان + الفقرة */}
      <div className="mx-auto max-w-[1200px] flex flex-col lg:flex-row items-start gap-8">
        {/* الصورة */}
        <div className="w-full lg:w-1/2 flex justify-center  ">
          <img
            src={swDef}
            alt="Space Weather Illustration"
            className="rounded-[16px] shadow-md object-cover"
            style={{
              width: "617px",
              height: "308px",
              opacity: 1,
              borderRadius: "16px",
            }}
          />
        </div>

        {/* النصوص بجانب الصورة */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          {/* العنوان */}
          <h2
            className="font-sora font-semibold mb-6"
            style={{
              width: "389px",
              height: "84px",
              fontWeight: 600,
              fontSize: "40px",
              lineHeight: "42px",
              color: "#B3261E",
              verticalAlign: "bottom",
            }}
          >
            Space <br />
            Weather Definition
          </h2>

          {/* الفقرة الأولى بجانب الصورة */}
          <p
            className="font-sora text-justify"
            style={{
              width: "559px",
              height: "252px",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "36px",
              color: "#3F3F3F",
              letterSpacing: "0%",
              verticalAlign: "bottom",
            }}
          >
            You might have never heard of space weather. It does not mean that it
            is rainy, snowy or stormy in space, but similar phenomena happen in
            space, and they sometimes affect our lives. Solar activity is
            strongly related to space weather, so it also affects the activities
            of humans. The sun is 4.6 G years old, and it continues to emit heat
            and light. The energy of the heat and light is produced by nuclear
            fusion in the sun. The sun mainly consists of hydrogen atoms.
          </p>
        </div>
      </div>

      {/* ✅ الفقرة الكبيرة تحت الصورة (قريبة جدًا منها الآن) */}
      <div className="-mt-6 flex justify-center">
        <p
          className="font-sora text-justify"
          style={{
            width: "1192px",
            height: "648px",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "36px",
            color: "#3F3F3F",
            letterSpacing: "0%",
            verticalAlign: "bottom",
          }}
        >
          Four hydrogen atoms react with each other to produce a helium atom. At
          that time, the mass loss energy is radiated as heat and light. The heat
          and light from the sun are essential for creatures on Earth.
          Simultaneously, the sun also emits X-rays, ultraviolet emissions, and
          hot ionized gases that are harmful to creatures. Earth has two barriers
          that protect creatures from harmful materials emitted by the sun. One
          is a thick atmosphere that prevents X-rays and ultraviolet emissions
          from reaching the ground. The outer layer of the atmosphere, called the
          ionosphere, is ionized by X-rays and ultraviolet emissions. The second
          barrier is a magnetic field. The magnetic field plays a role in
          reflecting the flow of ionized gas called the solar wind. However,
          these two barriers are imperfect. Solar flares and coronal mass
          ejections generate a dense solar wind. When it is directed to Earth and
          the magnetic field in the solar wind is directed southward, harmful
          materials (ionized gases) penetrate Earth’s magnetic field barrier to
          reach near-Earth space. This affects the operations of artificial
          satellites and the International Space Station (ISS) outside of the
          atmosphere. Specifically, high-energy charged particles penetrating an
          artificial satellite cause the malfunction of electric devices,
          resulting in abnormal operation. In another case, relatively low-energy
          charged particles charge the housing of an artificial satellite, and a
          short circuit in an electric device destroys the system. Astronauts are
          also at risk of being exposed to radiation. The dense solar wind
          sometimes disturbs the ionosphere. The ionospheric disturbances affect
          HF radio communications and broadcasting using the reflection at the
          ionosphere, as well as the radio communications between artificial
          satellites and ground-based observatories. Recently, ionospheric
          disturbances have been considered as the main factor causing errors in
          satellite positioning, which is used for car navigation. Space weather
          information is also being prepared for use in aviation operations. This
          is most important for aircraft on polar routes because aircraft need to
          use HF radio communications in the polar region, where the elevation
          angle of a communication satellite above the equatorial region is too
          small to use. Moreover, in the polar region, the error of satellite
          positioning and the exposure risk to the passengers and crew increase.
          To avoid these risks, polar route operations will be changed or
          postponed when there are space weather disturbances or when space
          weather is expected to be disturbed.
        </p>
      </div>
    </section>
  );
};

export default Sw2;
