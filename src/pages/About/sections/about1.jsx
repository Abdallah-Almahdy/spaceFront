import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import about1Img from "../../../assets/Aurora.jpg";
import logo1 from "../../../assets/logo1.png";
import logo2 from "../../../assets/logo2.png";
import {
  fetchUserData,
  logoutUser as apiLogoutUser,
} from "../../../api/authApi";

const About1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const token =
        localStorage.getItem("authToken") ||
        sessionStorage.getItem("authToken");

      if (!token) {
        setLoading(false);
        setUser(null);
        return;
      }

      try {
        const data = await fetchUserData();
        setUser(data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, []);

  const handleLogout = async () => {
    await apiLogoutUser();
    setUser(null);
    navigate("/");
  };

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
    ...(user?.isAdmin ? [{ name: "Dashboard", link: "/dashboard" }] : []),
    ...(user
      ? [{ name: "Logout", link: "/logout", action: handleLogout }]
      : [{ name: "Login", link: "/login" }]),
  ];

  if (loading) {
    return (
      <div className="w-full h-48 md:h-60 flex items-center justify-center bg-black text-white">
        Verifying session...
      </div>
    );
  }

  return (
    <section className="relative w-full">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 py-3 z-20 bg-black/50 backdrop-blur-sm">
        {/* Logo Left */}
        <a href="/" target="_blank" rel="noopener noreferrer">
          <img
            src={logo2}
            alt="Logo Left"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center flex-1 gap-8 text-white text-lg font-semibold">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              onClick={item.action ? item.action : undefined}
              className="hover:text-yellow-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Logo Right */}
        <a
          href="https://egsa.gov.eg/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-white rounded-full p-1 flex items-center justify-center
            md:static md:translate-y-0
            absolute right-16 top-1/2 -translate-y-1/2 md:right-auto
          "
        >
          <img
            src={logo1}
            alt="Logo Right"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
          />
        </a>

        {/* Mobile menu icon */}
        <div
          className="md:hidden absolute right-6"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span className="text-white text-2xl">×</span>
          ) : (
            <span className="text-white text-2xl">≡</span>
          )}
        </div>
      </nav>

      {/* Mobile Menu (same as Home) */}
      {menuOpen && (
        <div className="absolute top-16 w-full bg-black/90 text-white flex flex-col items-center py-4 gap-4 md:hidden z-30">

          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              onClick={() => {
                setMenuOpen(false);
                if (item.action) item.action();
              }}
              className="hover:text-yellow-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* About Hero */}
      <div
        className="relative w-full h-48 md:h-60 bg-cover bg-center flex flex-col items-center justify-center pt-12"
        style={{ backgroundImage: `url(${about1Img})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-white text-4xl sm:text-5xl md:text-6xl font-bold"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            About Us
          </h1>

          <h2
            className="text-[#FEBC2F] mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Learn More About ESWC
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About1;
