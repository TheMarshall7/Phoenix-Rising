import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Mentorship", path: "/mentorship" },
    { name: "Pilgrimage", path: "/pilgrimage" },
    { name: "Sacred Spaces", path: "/sacred-spaces" },
  ];

  // All pages start with a dark green hero, so always use light text when not scrolled
  const isDarkPage = true;

  const logoSrc =
    "https://assets.cdn.filesafe.space/qPFyxcfcKb9ufSnJGOBl/media/69ad8626d130b91b63ebaf45.png";

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-8 py-6 ${
          scrolled ? "bg-cream/90 backdrop-blur-md border-b border-ink/5" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="relative z-50 flex shrink-0 items-center">
            <img
              src={logoSrc}
              alt="Maria Amiouni"
              className={`h-[50px] w-auto max-w-[min(100vw-10rem,240px)] object-contain object-left transition-[filter] duration-700 ${
                scrolled
                  ? "drop-shadow-[0_0_1px_rgba(26,26,26,0.55)] drop-shadow-[0_0_12px_rgba(255,255,255,0.95)] drop-shadow-[0_2px_14px_rgba(2,69,59,0.2)]"
                  : isDarkPage
                    ? "drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]"
                    : ""
              }`}
              width={240}
              height={50}
            />
          </Link>

          <div className={`hidden md:flex items-center gap-12 text-[10px] tracking-[0.4em] uppercase font-bold transition-colors duration-700 ${
            scrolled ? "text-ink/70" : (isDarkPage ? "text-cream/90" : "text-ink/70")
          }`}>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`transition-colors relative group ${
                  scrolled 
                    ? (location.pathname === link.path ? "text-forest" : "hover:text-forest")
                    : (isDarkPage 
                        ? (location.pathname === link.path ? "text-sage" : "hover:text-cream")
                        : (location.pathname === link.path ? "text-forest" : "hover:text-forest"))
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 w-0 h-px transition-all duration-500 group-hover:w-full ${
                  scrolled ? "bg-forest" : (isDarkPage ? "bg-cream" : "bg-forest")
                } ${
                  location.pathname === link.path ? "w-full" : ""
                }`}></span>
              </Link>
            ))}
            <Link 
              to="/phoenix-rising" 
              className={`flex items-center gap-2 px-6 py-3 border transition-all duration-500 ${
                scrolled 
                  ? "border-forest/20 hover:bg-forest hover:text-white" 
                  : (isDarkPage 
                      ? "border-cream/20 text-cream hover:bg-cream hover:text-forest" 
                      : "border-forest/20 hover:bg-forest hover:text-white")
              }`}
            >
              Phoenix Rising Summit
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          <button 
            className={`relative z-50 md:hidden p-2 transition-colors duration-700 ${
              isOpen ? "text-cream" : (scrolled ? "text-ink" : (isDarkPage ? "text-cream" : "text-ink"))
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-forest text-cream flex flex-col items-center justify-center gap-12 pt-20"
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Link 
                  to={link.path} 
                  className="text-3xl font-serif italic tracking-wide"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Link 
                  to="/phoenix-rising" 
                  className="px-10 py-5 border border-cream/20 text-[10px] tracking-widest uppercase font-bold hover:bg-cream hover:text-forest transition-all"
                >
                  Phoenix Rising Summit
                </Link>
              </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
