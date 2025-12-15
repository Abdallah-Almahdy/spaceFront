import React from "react";

// كومبوننت Card داخلي
function Card({ image, title, text }) {
  return (
    <div className="rounded-2xl shadow-md hover:shadow-lg transition p-0 overflow-hidden bg-white">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

export default function About8() {
  const items = [
    {
      img: require("../../../assets/aboutimg5.jpg"),
      title: "Early Warning",
      text: "Obtain early and reliable warnings of extreme space weather that can cause severe damage to our satellite.",
    },
    {
      img: require("../../../assets/aboutimg6.png"),
      title: "Data Provision",
      text: "Provide Space Weather Hazards Effects data for designers, operators, and users of ground-based systems.",
    },
    {
      img: require("../../../assets/aboutimg7.png"),
      title: "Critical Information",
      text: "Provide critical information that could be used to mitigate Space Weather Hazards on our Technological Infrastructure.",
    },
    {
      img: require("../../../assets/aboutimg8.jpg"),
      title: "Ionospheric Disturbances",
      text: "Map for Ionospheric Fountain Peak Disturbances over Egypt.",
    },
    {
      img: require("../../../assets/aboutimg9.png"),
      title: "Prediction Models",
      text: "Develop numerical prediction models for the Space Weather Hazards.",
    },
    {
      img: require("../../../assets/aboutimg10.png"),
      title: "International Integration",
      text: "Quality plan for how the Space Weather Warning Center joins the International Space Environment Service (ISES)",
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Specific Objectives 🎯</h2>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Provide early warnings, develop prediction models, and deliver vital data to safeguard technology and enhance resilience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card
              key={index}
              image={item.img}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
