import React from "react";
import about7 from "../../../assets/aboutsec2.png";

export default function About7() {
  const cards = [
    {
      id: "#1",
      title:
        "Motivate the national community to support Egyptian satellites against space weather hazards.",
    },
    {
      id: "#2",
      title: "To be the cornerstone of the African Space Warning Center.",
    },
    {
      id: "#3",
      title:
        "To make use of Ground-Based and Space-Based Measurements Data for Reliable Forecasting.",
    },
    {
      id: "#4",
      title:
        "Develop an Egyptian-independent Network of Space Weather Hazards data processing systems.",
    },
    {
      id: "#5",
      title:
        "To engage and establish a coherent dialogue between collaborators for an operational Warning Network.",
    },
  ];

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Objectives</h2>

      {/* قسم النص والصورة - محسن */}
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 mb-12 w-full">
        {/* النص - يأخذ 60% من المساحة */}
        <div className="lg:w-3/5">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            To monitor and forecast space weather, protecting satellites and
            critical infrastructures while supporting global collaboration.
          </p>

          {/* إضافة نقاط إضافية للوصف */}
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="mt-1 mr-3 text-blue-600">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-700">
                Real-time monitoring of space weather conditions
              </p>
            </div>
            <div className="flex items-start">
              <div className="mt-1 mr-3 text-blue-600">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-700">
                Advanced forecasting models for early warnings
              </p>
            </div>
            <div className="flex items-start">
              <div className="mt-1 mr-3 text-blue-600">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-700">
                International collaboration and data sharing
              </p>
            </div>
          </div>
        </div>

        {/* الصورة - تأخذ 40% من المساحة */}
        <div className="lg:w-2/5">
          <div className="relative group">
            <img
              src={about7}
              alt="Space weather monitoring and analysis"
              className="rounded-xl w-full h-auto shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent rounded-xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white bg-black/50 backdrop-blur-sm rounded-lg p-3">
              <p className="text-sm font-medium">
                Space Weather Monitoring System
              </p>
            </div>
          </div>

          {/* إضافة وصف تحت الصورة */}
          <p className="text-gray-500 text-sm mt-4 text-center">
            Advanced monitoring tools for space weather analysis and prediction
          </p>
        </div>
      </div>

      {/* قسم البطاقات - محسن */}
      <div className="relative">
        {/* عنوان البطاقات */}
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Our Strategic Objectives
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Five key objectives guiding our mission to protect space assets and
            critical infrastructure
          </p>
        </div>

        {/* البطاقات مع تخطيط محسن */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="relative p-6 rounded-xl transition-all duration-300 shadow-lg bg-white hover:shadow-2xl group overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: `fadeInUp 0.5s ease-out ${index * 100}ms both`,
              }}
            >
              {/* تأثير خلفية عند hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#242292]/0 to-[#1A134A]/0 group-hover:from-[#242292]/10 group-hover:to-[#1A134A]/10 transition-all duration-300"></div>

              {/* رقم البطاقة مع تصميم محسن */}
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#242292] to-[#1A134A] flex items-center justify-center mr-3">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <p className="text-xl font-bold text-gray-800 group-hover:text-[#242292] transition-colors duration-300">
                  {card.id}
                </p>
              </div>

              {/* نص البطاقة */}
              <p className="text-gray-600 group-hover:text-gray-800 leading-relaxed relative z-10">
                {card.title}
              </p>

              {/* أيقونة عند hover */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-6 h-6 text-[#242292]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </div>
          ))}

          {/* بطاقة إضافية للتوازن البصري */}
          <div className="md:col-span-2 lg:col-span-3 p-6 rounded-xl bg-gradient-to-r from-[#242292]/5 to-[#1A134A]/5 border border-[#242292]/20">
            <div className="text-center">
              <h4 className="text-xl font-bold text-[#242292] mb-3">
                Together Towards Space Security
              </h4>
              <p className="text-gray-700">
                These objectives represent our commitment to advancing space
                weather research and protecting critical infrastructure through
                innovation and collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* إضافة أنماط CSS للحركات */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
