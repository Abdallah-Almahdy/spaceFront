import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import instImg1 from "../../../assets/instimg1.jpg";
import bgImage from "../../../assets/space.jpg";
import logo1 from "../../../assets/logo1.png";
import logo2 from "../../../assets/logo2.png";
import { fetchUserData, logoutUser as apiLogoutUser } from "../../../api/authApi";

export default function Inst1() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const data = await fetchUserData();
        setUser(data);
      } catch {
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
  ];

  if (loading) {
    return (
      <div className="h-48 flex items-center justify-center bg-black text-white">
        Verifying session...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white">
      {/* ================= Navbar ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/">
            <img src={logo2} alt="Logo" className="w-12 h-12 object-contain" />
          </Link>

          <div className="hidden md:flex gap-8 text-white font-semibold">
            {navItems.map((item, i) => (
              <Link key={i} to={item.link} className="hover:text-yellow-400">
                {item.name}
              </Link>
            ))}
            {user ? (
              <button
                onClick={handleLogout}
                className="hover:text-yellow-400"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="hover:text-yellow-400">
                Login
              </Link>
            )}
          </div>

          <Link to="https://egsa.gov.eg/" target="_blank">
            <img src={logo1} alt="EGSA" className="w-12 h-12 object-contain" />
          </Link>
        </div>
      </nav>

      {/* ================= Hero ================= */}
      <header
        className="h-[260px] md:h-[320px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-16">
          <h1 className="text-white text-4xl md:text-6xl font-bold font-serif">
            Egyptian Space Weather Center
          </h1>
          <p className="text-[#FEBC2F] text-xl md:text-3xl mt-2 font-serif">
            Predict to Protect
          </p>
        </div>
      </header>

      {/* ================= Content ================= */}
      <section className="relative py-24 overflow-hidden">
        {/* خلفية مائلة نضيفة */}
        <div className="absolute inset-0 -z-10">
          <div className="w-[120%] h-full bg-red-100 rotate-[-2deg] mx-auto" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-extrabold text-[#1c1e2a] mb-6">
              Instruments
            </h2>
            <p className="text-gray-700 text-lg max-w-md leading-relaxed">
              The Egyptian Space Weather Center uses a variety of advanced
              instruments to monitor, analyze, and forecast space weather
              conditions.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={instImg1}
              alt="Instrument"
              className="w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] rounded-full object-cover shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
