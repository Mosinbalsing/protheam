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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#1c1d1f] border-b border-gray-200 dark:border-gray-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-black dark:text-white transition-colors">
          Mosin
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-lg text-black dark:text-white">
          {navLinks.map((link) => (
            <Link key={link.id} to={link.href} className="hover:text-blue-500 transition-colors">
              {link.name}
            </Link>
          ))}
          <button onClick={toggleTheme} className="text-xl hover:text-blue-500 transition-colors border-none">
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-2xl border-none" aria-label="Toggle Menu">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-[#1c1d1f] px-6 pb-4 flex flex-col items-center text-lg text-black dark:text-white">
          {navLinks.map((link) => (
            <Link key={link.id} to={link.href} onClick={() => setIsOpen(false)} className="block py-2 hover:text-blue-500">
              {link.name}
            </Link>
          ))}
          <button onClick={() => { toggleTheme(); setIsOpen(false); }} className="mt-4 flex items-center gap-2 hover:text-blue-500 border-none">
            {theme === "dark" ? <><FiSun /> Light Mode</> : <><FiMoon /> Dark Mode</>}
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;