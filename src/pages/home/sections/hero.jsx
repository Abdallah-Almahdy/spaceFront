import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import bgImage from "../../../assets/space.jpg";
import logo from "../../../assets/Egsa Logo.png"; // 🔹 اللوجو
import logo1 from "../../../assets/logo1.png"
import logo2 from "../../../assets/logo2.png"

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openNav , setOpenNav] = useState(true)

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
    <section
      className="relative w-full h-screen flex  flex-col overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🖤 تدرج غامق */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>

      {/* 🩶 طبقة غامقة ناحية الشمال */}
      <div
        className="absolute top-0 left-0"
        style={{
          width: "730px",
          height: "809px",
          backgroundColor: "#3F3F3F",
          opacity: 1,
          borderTopRightRadius: "50px",
          mixBlendMode: "multiply",
        }}
      ></div>

      {/* 🌌 خطوط متحركة */}
      <svg
        className="absolute right-0 top-0 h-full w-auto opacity-30"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0 300 Q400 100 800 300 T1600 300"
          fill="none"
          stroke="white"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.path
          d="M0 400 Q400 200 800 400 T1600 400"
          fill="none"
          stroke="white"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3.5,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1,
          }}
        />
        <motion.path
          d="M0 500 Q400 300 800 500 T1600 500"
          fill="none"
          stroke="white"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 2,
          }}
        />
      </svg>

      {/* 🌐 Navbar */}
      <div style={{ top: "60px" }} className="w-full  flex items-center justify-center  h-[80px] sticky top-0 z-50">
       <div className="w-[1260px] flex items-center justify-center mx-auto ">
         {/* first image */}
         <div>
          <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex items-center justify-center rounded-full shadow-md hover:scale-110 transition-transform duration-300 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
          style={{
            width: "64px",
            height: "64px",
            
          }}
        >
          <img
            src={logo2}
            alt="EGSA Logo"
            className="w-8 h-8 sm:w-9 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
          />
        </a>
         </div>
         {/* content */}
         {openNav ? (
          <div>-------</div> 
         ):(
          <div className="flex bg-white md:text-[12px] text-[12px] rounded-md mx-[15px] text-black lg:py-[15px] lg:px-[17px] py-[10px] px-[13px] items-center justify-between gap-[25px] lg:text-[15px]">
          {navItems.map((item, index) => (
              <div key={index}>
                <Link
                  to={item.link}
                  className=""
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
         </div>
          )
         }


         <div className="flex bg-white md:text-[12px] text-[12px] rounded-md mx-[15px] text-black lg:py-[15px] lg:px-[17px] py-[10px] px-[13px] items-center justify-between gap-[25px] lg:text-[15px]">
          {navItems.map((item, index) => (
              <div key={index}>
                <Link
                  to={item.link}
                  className=""
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
         </div>
         {/* last image */}
         <div>
          <a
          href="https://egsa.gov.eg/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full shadow-md hover:scale-110 transition-transform duration-300 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
          style={{
            width: "64px",
            height: "64px",
            background: "linear-gradient(180deg, #FFFFFF 0%, #FFFAFF 100%)",
          }}
        >
          <img
            src={logo1}
            alt="EGSA Logo"
            className="w-8 h-8 sm:w-9 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
          />
        </a>
         </div>
         
       </div>
      </div>
        

      {/* 🪐 Hero Content */}
      <div
        className="absolute z-10 text-left text-white 
                top-16 sm:top-24 md:top-32 lg:top-40 
                left-4 sm:left-8 md:left-16 lg:left-40 
                w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] 
                h-auto"
        
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug sm:leading-snug md:leading-snug"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Egyptian Space Weather Center
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-[#FEBC2F] mt-3 font-bold"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "32px",
            lineHeight: "140%",
          }}
        >
          Predict to Protect
        </motion.h2>
      </div>
    </section>
  );
};

export default Hero;



