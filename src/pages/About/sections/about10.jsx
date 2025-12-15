const About10 = () => {
  const publications = [
    "Amira H. Hussein, Dalia Elfiky, Gad M. Gad, “Single event sensitivity mapping for SRAM by pulsed laser system”, published at IEEE.",

    "Amira H. Hussein, Dalia Elfiky “Qualification of Operational Amplifier used in Satellite Subsystem using Picosecond Pulsed Laser System” published at International Journal of Recent Technology and Engineering (IJRTE).",

    "Nina Servan-Schreiber, Malini Aggarwal, Yuyang Huang, Minwook Kang, Abdalla Shaker, Dieter Bilitza,“Validation of the IRI-2020 model for the topside-plasmasphere using GNSS TEC measurements”, Advances in Space Research 2024,(doi.org/10.1016/j.asr.2024.07.009).",

    "Nooreldeen, Hassan, Alenazi, Moqbil Salem, et al. “Investigation of Ionospheric Response to a Moderate Geomagnetic Storm Over the Mid-Latitude of Saudi Arabia.” Open Astronomy, accepted Oct. 20, 2024, astro-D-24-00008R1.",
  ];

  return (
    <section className="w-full px-6 md:px-16 py-20 font-sora bg-gradient-to-b from-[#f6ecf7] to-white">
      
      {/* HEADER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        
        {/* Left title */}
        <div>
          <h4 className="text-red-600 tracking-[4px] text-sm font-semibold">
            RESEARCH
          </h4>

          <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Journal<br />Publications
          </h1>
        </div>

        {/* Right description */}
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          The journal publications focus on testing satellite components against
          radiation and improving ionospheric models. Published in IEEE, IJRTE, 
          Advances in Space Research, and Open Astronomy, they provide validated
          scientific contributions to space technology and ionospheric science.
        </p>
      </div>

      {/* LIST OF PUBLICATIONS */}
      <div className="space-y-8">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="bg-white shadow-sm hover:shadow-md transition-all duration-300 p-6 rounded-2xl border border-gray-100"
          >
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              <span className="font-semibold mr-2">{index + 1}.</span>
              {pub}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default About10;
