import React from "react";

export default function MissionBg({ image, height = "750px", children }) {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat relative flex items-center"
      style={{
        backgroundImage: `url(${image})`,
        minHeight: height,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      {/* المحتوى */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
