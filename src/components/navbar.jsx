import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo2 from "../assets/logo2.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Space Weather", link: "/space-weather" },
    { name: "Instruments", link: "/instruments" },
    { name: "Space Science Missions", link: "/missions" },
    { name: "Report", link: "/report" },
    { name: "Real Time Data", link: "/data" },
    { name: "Forecast Models", link: "/forecast" },
    { name: "Archive", link: "/archive" },
  ];

  return (
    <nav className="w-full bg-white shadow-md z-50">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[80px]">

        {/* logo */}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            src={logo2}
            alt="EGSA Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 text-[16px] font-medium whitespace-nowrap">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link
                to={item.link}
                className="hover:text-[#FEBC2F] transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <button
          className="lg:hidden text-black"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col gap-4 text-[18px] font-medium">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
