import about11 from "../../../assets/aboutimg11.jpg";
import about12 from "../../../assets/aboutimg12.jpg";
import about13 from "../../../assets/aboutimg13.png";
import about14 from "../../../assets/aboutimg14.jpg";

const About9 = () => {
  const team = [
    {
      name: "Eng. Amira Hamdy",
      title: "Director, Space Environment & Space Weather Department",
      desc: "Space environment engineer with extensive expertise in radiation effects on satellites. Holds an MSc in Space Science and is pursuing a PhD in Space Plasma Physics.",
      img: about11,
      imgPos: "object-[50%_15%]",
    },
    {
      name: "Eng. Abdulla Shaker",
      title: "Space Environment Engineer",
      desc: "Specialist in ionospheric irregularities using Swarm Satellite data. Holds an MSc in Space Science and contributed to several national projects on space weather monitoring systems.",
      img: about12,
      imgPos: "object-center",
    },
    {
      name: "Eng. Hassan Mahdy",
      title: "Space Environment Engineer",
      desc: "Researcher in forecasting ionospheric variability using AI and GNSS data. Participated in international projects with Stanford University, Boston College, and the German Aerospace Center (DLR).",
      img: about13,
      imgPos: "object-[50%_30%]",
    },
    {
      name: "Dr. Rasha Emara",
      title: "Researcher & Lecturer",
      desc: "PhD in Space Science, focused on magnetospheric and ionospheric phenomena. Assistant Lecturer at the German University in Cairo, with experience in spacecraft plasma diagnostics.",
      img: about14,
      imgPos: "object-[50%_4%]",
    },
  ];

  return (
    <section className="w-full py-14 px-6 md:px-12 bg-gray-50 font-sora">
      
      {/* HEADER */}
      <div className="mb-10 max-w-2xl">
        <h4 className="text-red-600 tracking-[4px] text-sm font-semibold">
          TEAM
        </h4>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          Our Team
        </h1>

        {/* السطرين تحت العنوان */}
        <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed">
          We work together to explore, understand, and enhance space environment research,
          combining scientific expertise with real-world applications.
        </p>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1">
          Our mission is to support national and global progress through advanced
          innovation in space weather and satellite technologies.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5"
          >
            <img
              src={member.img}
              alt={member.name}
              className={`w-full h-56 object-cover rounded-lg mb-4 ${member.imgPos}`}
            />

            <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
            <p className="text-sm text-gray-600 font-semibold mt-1">{member.title}</p>

            <p className="text-sm text-gray-700 mt-3 leading-relaxed">
              {member.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About9;
