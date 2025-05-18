"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
import { Link } from "react-router-dom";
import Dock from "@/reactbits/Dock/Dock";


const navLinks = [
  { id: "home", name: "Home", href: "/" },
  { id: "about", name: "About", href: "/about" },
  { id: "projects", name: "Projects", href: "/projects" },
  { id: "contact", name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const closeMenu = () => setIsOpen(false);

  const dockItems = [
    { icon: <VscHome size={22} />, label: 'Home', onClick: () => (window.location.href = "/") },
    { icon: <VscArchive size={22} />, label: 'Projects', onClick: () => (window.location.href = "/projects") },
    { icon: <VscAccount size={22} />, label: 'About', onClick: () => (window.location.href = "/about") },
    { icon: <VscSettingsGear size={22} />, label: theme === "dark" ? "Light" : "Dark", onClick: toggleTheme },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#1c1d1f] border-b border-gray-200 dark:border-gray-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-black dark:text-white transition-colors"
        >
          Mosin
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-between gap-6 text-lg text-black dark:text-white">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              className="text-black dark:text-white hover:text-blue-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="text-xl text-black dark:text-white hover:text-blue-500 transition-colors"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hidden text-2xl text-black dark:text-white "
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="sm:hidden bg-white dark:bg-[#1c1d1f] px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              onClick={closeMenu}
              className="block py-2 text-black dark:text-white hover:text-blue-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              toggleTheme();
              closeMenu();
            }}
            className="mt-4 flex items-center gap-2 text-black dark:text-white hover:text-blue-500 transition-colors"
          >
            {theme === "dark" ? (
              <>
                <FiSun /> Light Mode
              </>
            ) : (
              <>
                <FiMoon /> Dark Mode
              </>
            )}
          </button>
        </div>
      )}

      {/* Mobile Dock - Bottom Navigation */}
      <div className="sm:hidden fixed bottom-2 left-0 w-full flex justify-center z-50">
        <Dock
          items={dockItems}
          panelHeight={70}
          baseItemSize={48}
          magnification={65}
          theme={theme}
        />
      </div>
    </header>
  );
};

export default Navbar;
