import React from "react";
import aboutImage from "../../../assets/aboutsec2.png";

const About2 = () => {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-start gap-10">
        
        {/* الصورة */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={aboutImage}
            alt="About the Center"
            className="rounded-xl shadow-lg object-cover w-full max-w-[606px] h-[260px] xl:mt-24 md:mt-16"
          />
        </div>

        {/* النص */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h2
            className="font-sora font-semibold mb-6"
            style={{
              fontSize: "40px",
              lineHeight: "42px",
              color: "#B3261E",
            }}
          >
            About the Center
          </h2>

          {/* فقرة 1 */}
          <p className="font-sora text-justify leading-8 text-[#3F3F3F]
            text-sm md:text-base
            w-full max-w-none md:max-w-[550px] lg:max-w-[600px]"
          >
            Space weather has harmful effects on satellites. The disturbance
            occurs in space weather from geomagnetic storms, ionosphere
            disturbances, and solar phenomena. In recent decades, there has
            been a growing interest in mitigating these damages, as space 
            weather strikes have serious impacts on advanced technology,
            electric power grids, navigation, and communication systems.
          </p>

          {/* فقرة 2 */}
          <p className="font-sora mt-4 text-justify leading-8 text-[#3F3F3F]
            text-sm md:text-base
            w-full max-w-none md:max-w-[550px] lg:max-w-[600px]"
          >
            The goal has been to explain why human society on Earth and beyond in space
            cannot operate safely, efficiently, and steadily advance without committed and
            comprehensive space-weather research initiatives...
          </p>

          {/* فقرة 3 */}
          <p className="font-sora mt-4 text-justify leading-8 text-[#3F3F3F]
            text-sm md:text-base
            w-full max-w-none md:max-w-[550px] lg:max-w-[600px]"
          >
            ESWC develops prediction models and reinforces the capacity of space weather
            forecasting services that are essential to safeguarding critical national
            infrastructures...
          </p>
        </div>
      </div>
    </section>
  );
};

export default About2;
