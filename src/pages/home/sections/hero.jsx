import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../../../assets/space.jpg";
import logo1 from "../../../assets/logo1.png";
import logo2 from "../../../assets/logo2.png";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Space Weather", link: "/space-weather" },
    { name: "Instruments", link: "/instruments" },
    { name: "Missions", link: "/missions" },
    { name: "Report", link: "/report" },
    { name: "Real Time Data", link: "/data" },
    { name: "Forecast Models", link: "/forecast" },
    { name: "Archive", link: "/archive" },
  ];

  return (
    <section className="relative w-full">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 py-3 z-20 bg-black/50 backdrop-blur-sm">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <img
            src={logo2}
            alt="Logo Left"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
          />
        </a>

        <div className="hidden md:flex items-center justify-center flex-1 gap-8 text-white text-lg font-semibold">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="hover:text-yellow-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <a href="https://egsa.gov.eg/" target="_blank" rel="noopener noreferrer">
          <img
            src={logo1}
            alt="Logo Right"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
          />
        </a>

        <div className="md:hidden absolute right-6" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <span className="text-white text-2xl">×</span> : <span className="text-white text-2xl">≡</span>}
        </div>
      </nav>

      {menuOpen && (
        <div className="absolute top-16 w-full bg-black/90 text-white flex flex-col items-center py-4 gap-4 md:hidden z-10">
          {navItems.map((item, idx) => (
            <Link key={idx} to={item.link} onClick={() => setMenuOpen(false)}>
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* Hero under Navbar */}
      <div
        className="relative w-full h-48 md:h-60 bg-cover bg-center flex flex-col items-center justify-center pt-12"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Title */}
        <h1
          className="text-white text-4xl sm:text-5xl md:text-6xl font-bold"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Egyptian Space Weather Center
        </h1>

        {/* Slogan */}
        <h2
          className="text-[#FEBC2F] mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Predict to Protect
        </h2>
      </div>
    </section>
  );
};

export default Hero;
