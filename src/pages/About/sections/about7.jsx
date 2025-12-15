import React from "react";
import about7 from "../../../assets/aboutsec2.png";

export default function About7() {
  const cards = [
    { id: "#1", title: "Motivate the national community to support Egyptian satellites against space weather hazards." },
    { id: "#2", title: "To be the cornerstone of the African Space Warning Center." },
    { id: "#3", title: "To make use of Ground-Based and Space-Based Measurements Data for Reliable Forecasting." },
    { id: "#4", title: "Develop an Egyptian-independent Network of Space Weather Hazards data processing systems." },
    { id: "#5", title: "To engage and establish a coherent dialogue between collaborators for an operational Warning Network." },
  ];

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Objectives</h2>

      <div className="flex flex-col md:flex-row items-center gap-10 mb-10 w-full">
        <div className="flex-1">
          <p className="text-gray-600 max-w-xl">
            To monitor and forecast space weather, protecting satellites and critical infrastructures while supporting global collaboration.
          </p>
        </div>

        <div className="flex-1 flex justify-end">
          <img
            src={about7}
            alt="Space weather screens"
            className="rounded-xl w-full max-w-xl h-auto"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {cards.map((card) => (
          <div
            key={card.id}
            className="p-6 rounded-xl transition-all duration-300 shadow-lg bg-white hover:bg-gradient-to-br hover:from-[#242292] hover:to-[#1A134A] group"
          >
            <p className="text-xl font-bold mb-4 group-hover:text-white">{card.id}</p>
            <p className="text-gray-600 group-hover:text-white leading-relaxed">{card.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}