"use client";
import React, { useState, useEffect } from "react";
import RotatingText from "@/reactbits/RotatingText/RotatingText";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const Abou = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Get saved theme from localStorage or default to system theme
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="relative min-h-[600px] w-full px-4 py-16 text-black  dark:text-white bg-white dark:bg-transparent transition-colors duration-300 overflow-hidden">
      {/* <div className="absolute top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className="text-xl p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg transition"
          title="Toggle Theme"
        >
          {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon />}
        </button>
      </div> */}

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left - Glass Card */}
        <div
          className="relative backdrop-blur-md rounded-2xl p-6 border shadow-lg text-center 
  bg-white/30 border-white/50 text-black 
  dark:bg-white/10 dark:border-white/20 dark:text-white"
        >
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src="assets/character/sayhi.png"
              alt="Say Hi"
              className="w-full h-auto transition duration-500"
            />
            <img
              src="assets/character/hey.png"
              alt="Hey"
              className="absolute top-0 left-0 w-[150px] h-[150px] object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <p className="mt-4 text-xl font-semibold">Mosin Balsing</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mt-4 text-xl">
            <a
              href="https://linkedin.com/in/mosinbalsing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/mosinbalsing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/mosinbalsing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right - Info Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Hi, I’m Mosin Balsing
          </h1>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-300">
            A passionate Full Stack Developer 🚀 skilled in building web and
            mobile apps using React, Node.js, Django, Flutter, and more.
            <br className="hidden md:block" />I love creating interactive UIs
            and solving real-world problems with clean and scalable code.
          </p>

          <div className="mt-6 flex gap-2 flex-wrap items-center justify-center lg:justify-start">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
              Creative
            </h1>
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
              <RotatingText
                texts={["Thinker", "Coder", "Developer", "Designer"]}
                mainClassName="px-2 sm:px-3 md:px-4 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg font-bold"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abou;
