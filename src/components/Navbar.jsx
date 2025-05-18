import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { VscHome, VscAccount } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import Dock from "@/reactbits/Dock/Dock";
import { GrProjects } from "react-icons/gr";
import { RiContactsBook3Line } from "react-icons/ri";

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
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const dockItems = [
    { icon: <VscHome size={22} />, label: "Home", onClick: () => navigate("/") },
    { icon: <VscAccount size={22} />, label: "About", onClick: () => navigate("/about") },
    { icon: <GrProjects size={22} />, label: "Projects", onClick: () => navigate("/projects") },
    { icon: <RiContactsBook3Line size={22} />, label: "Contact", onClick: () => navigate("/contact") },
    { icon: theme === "dark" ? <FiSun /> : <FiMoon />, label: theme === "dark" ? "Light" : "Dark", onClick: toggleTheme },
  ];

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
          <button onClick={toggleTheme} className="text-xl hover:text-blue-500 transition-colors">
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-2xl" aria-label="Toggle Menu">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-[#1c1d1f] px-6 pb-4">
          {navLinks.map((link) => (
            <Link key={link.id} to={link.href} onClick={() => setIsOpen(false)} className="block py-2 hover:text-blue-500">
              {link.name}
            </Link>
          ))}
          <button onClick={toggleTheme} className="mt-4 flex items-center gap-2 hover:text-blue-500">
            {theme === "dark" ? <><FiSun /> Light Mode</> : <><FiMoon /> Dark Mode</>}
          </button>
        </div>
      )}

      <div className="fixed bottom-2 left-0 w-full flex justify-center z-50 sm:flex md:flex">
        <Dock items={dockItems} panelHeight={70} baseItemSize={48} magnification={65} theme={theme} />
      </div>
    </header>
  );
};

export default Navbar;