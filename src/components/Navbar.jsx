"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

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
        <nav className="hidden sm:flex items-center gap-6 text-lg text-black dark:text-white">
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
          className="sm:hidden text-2xl text-black dark:text-white"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="sm:hidden bg-white dark:bg-black px-6 pb-4">
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
    </header>
  );
};

export default Navbar;
