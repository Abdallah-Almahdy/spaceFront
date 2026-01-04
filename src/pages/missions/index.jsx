import React, { useState } from "react";

// استدعاء السكاشن
import Mission1 from "./sections/mission1";
import Mission2 from "./sections/mission2";
import Mission4 from "./sections/mission4";
import Mission5 from "./sections/mission5";

export default function Missions({ defaultProject = "project1", setActiveProjectFromHero }) {
  // استخدم الـ prop إذا مرره Hero، وإلا استخدم state محلي
  const [activeProject, setActiveProject] = useState(defaultProject);

  // دالة لتغيير المشروع وتأمين أنها موجودة من Hero
  const handleSetActiveProject = (project) => {
    setActiveProject(project);
    if (setActiveProjectFromHero) setActiveProjectFromHero(project);
  };

  return (
    <div className="w-full flex flex-col">

      {/* Tabs فوق الصفحة */}
      <div className="flex justify-center gap-4 py-6">
        <button
          className={`px-4 py-2 rounded font-semibold ${
            activeProject === "project1"
              ? "bg-yellow-400 text-black"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleSetActiveProject("project1")}
        >
          Project 1
        </button>
        <button
          className={`px-4 py-2 rounded font-semibold ${
            activeProject === "project2"
              ? "bg-yellow-400 text-black"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleSetActiveProject("project2")}
        >
          Project 2
        </button>
      </div>

      {/* Project 1 Sections */}
      {activeProject === "project1" && (
        <div className="flex flex-col gap-10">
          <Mission1 />
          <Mission2 />
        </div>
      )}

      {/* Project 2 Sections */}
      {activeProject === "project2" && (
        <div className="flex flex-col gap-10">
          <Mission4 />
          <Mission5 />
        </div>
      )}
    </div>
  );
}
