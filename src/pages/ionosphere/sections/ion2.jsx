import React from "react";
import ionImage2 from "../../../assets/ionimage2.jpeg";
import ionImage3 from "../../../assets/ionimage3.jpeg";

const Ion2 = () => {
  return (
    <section className="bg-gray-50 text-gray-900 font-sans">
      {/* العنوان الرئيسي */}
      <div className="bg-red-50 p-8">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Ionospheric Storm
        </h1>
        <p className="mb-4 leading-relaxed">
          An ionospheric storm is a phenomenon where the electron density in the
          F region of the ionosphere increases or decreases significantly. The F
          region contains a large portion of the ionosphere’s electrons.
          Ionospheric storms are triggered by disturbances in the Earth’s
          magnetosphere, which affect the ionosphere through:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>
            <strong>
              Changes in the background neutral atmosphere (thermosphere)
            </strong>
            .
          </li>
          <li>
            <strong>Electric fields acting on the ionosphere.</strong>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Types of Ionospheric Storms
        </h2>
        <ul className="list-disc ml-6">
          <li>Positive Storm</li>
          <li>Negative Storm</li>
        </ul>
      </div>

      {/* الأنواع */}
      <div className="grid md:grid-cols-2 gap-8 p-8">
        {/* Positive Storm */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-3">Positive Storm</h3>
          <ul className="list-disc ml-6 space-y-1 mb-4 text-left">
            <li>Increase in F-region electron density.</li>
            <li>
              Caused by uplift of the ionospheric layer due to:
              <ul className="list-decimal ml-6 mt-1 space-y-1">
                <li>Electric fields penetrating from the magnetosphere.</li>
                <li>Equatorward thermospheric winds following a disturbance.</li>
              </ul>
            </li>
            <li>
              Effect: Radio waves travel more slowly → Larger satellite
              positioning errors (e.g., GPS).
            </li>
          </ul>
          <img
            src={ionImage2}
            alt="Positive Storm"
            className="shadow-lg mx-auto"
            style={{
              width: "364px",
              height: "260px",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Negative Storm */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-3">Negative Storm</h3>
          <ul className="list-disc ml-6 space-y-1 mb-4 text-left">
            <li>Decrease in F-region electron density.</li>
            <li>
              Caused by changes in atmospheric composition due to polar
              thermospheric heating and expansion toward lower latitudes.
            </li>
            <li>
              Effect: Lower critical frequency → Certain radio waves are no
              longer reflected by the ionosphere.
            </li>
          </ul>
          <img
            src={ionImage3}
            alt="Negative Storm"
            className="shadow-lg mx-auto"
            style={{
              width: "364px",
              height: "260px",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Ion2;
