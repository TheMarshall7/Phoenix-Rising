import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import {
  MAIN_SITE_LOGO_GREEN,
  MAIN_SITE_LOGO_WHITE,
} from "../constants/branding";

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
    { name: "Human Design", path: "/human-design" },
  ];

  // All pages start with a dark green hero, so always use light text when not scrolled
  const isDarkPage = true;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-8 py-6 ${
          scrolled ? "bg-cream/90 backdrop-blur-md border-b border-ink/5" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            aria-label="Maria Amiouni — Home"
            className="relative z-50 flex h-[50px] w-[min(100vw-10rem,240px)] shrink-0 items-center"
          >
            <img
              src={MAIN_SITE_LOGO_WHITE}
              alt=""
              aria-hidden
              className={`absolute left-0 top-1/2 z-10 h-[50px] w-auto max-w-[min(100vw-10rem,240px)] -translate-y-1/2 object-contain object-left transition-opacity duration-700 ${
                scrolled ? "pointer-events-none opacity-0" : "opacity-100"
              } ${isDarkPage ? "drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]" : ""}`}
              width={240}
              height={50}
            />
            <img
              src={MAIN_SITE_LOGO_GREEN}
              alt=""
              aria-hidden
              className={`relative z-20 h-[50px] w-auto max-w-[min(100vw-10rem,240px)] object-contain object-left transition-opacity duration-700 ${
                scrolled ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              width={240}
              height={50}
            />
          </Link>

          <div className={`hidden md:flex items-center gap-12 text-[10px] tracking-[0.4em] uppercase font-bold transition-colors duration-700 ${
            scrolled ? "text-ink/70" : (isDarkPage ? "text-cream/90" : "text-ink/70")
          }`}>
            {navLinks.map((link) => {
              if (link.name === "Pilgrimage") {
                const isActive = location.pathname.startsWith("/pilgrimage");
                return (
                  <div key={link.name} className="relative group py-2">
                    <span
                      className={`cursor-pointer transition-colors flex items-center gap-1.5 ${
                        scrolled 
                          ? (isActive ? "text-forest" : "hover:text-forest")
                          : (isDarkPage 
                              ? (isActive ? "text-sage" : "hover:text-cream")
                              : (isActive ? "text-forest" : "hover:text-forest"))
                      }`}
                    >
                      {link.name}
                      <span className="text-[7px] opacity-60 transform group-hover:rotate-180 transition-transform duration-300">▼</span>
                    </span>
                    <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-500 group-hover:w-full ${
                      scrolled ? "bg-forest" : (isDarkPage ? "bg-cream" : "bg-forest")
                    } ${
                      isActive ? "w-full" : ""
                    }`}></span>

                    {/* Dropdown Menu */}
                    <div className="absolute left-0 mt-3 w-40 bg-forest border border-cream/10 rounded-sm shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-50">
                      <Link 
                        to="/pilgrimage/france" 
                        className="block px-6 py-2.5 text-cream/70 hover:text-cream hover:bg-white/5 transition-colors text-[9px] tracking-widest uppercase font-bold"
                      >
                        France
                      </Link>
                      <Link 
                        to="/pilgrimage/egypt" 
                        className="block px-6 py-2.5 text-cream/70 hover:text-cream hover:bg-white/5 transition-colors text-[9px] tracking-widest uppercase font-bold"
                      >
                        Egypt
                      </Link>
                    </div>
                  </div>
                );
              }
              return (
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
              );
            })}
            <Link 
              to="/ancestral-child" 
              className={`flex items-center gap-2 px-6 py-3 border transition-all duration-500 ${
                scrolled 
                  ? "border-forest/20 hover:bg-forest hover:text-white" 
                  : (isDarkPage 
                      ? "border-cream/20 text-cream hover:bg-cream hover:text-forest" 
                      : "border-forest/20 hover:bg-forest hover:text-white")
              }`}
            >
              The Ancestral Child
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
            {navLinks.map((link) => {
              if (link.name === "Pilgrimage") {
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <span className="text-3xl font-serif italic tracking-wide text-cream/40">
                      Pilgrimages
                    </span>
                    <div className="flex flex-col items-center gap-1.5">
                      <Link 
                        to="/pilgrimage/france" 
                        className="text-2xl font-serif italic tracking-wide text-cream hover:text-sage transition-colors"
                      >
                        — France
                      </Link>
                      <Link 
                        to="/pilgrimage/egypt" 
                        className="text-2xl font-serif italic tracking-wide text-cream hover:text-sage transition-colors"
                      >
                        — Egypt
                      </Link>
                    </div>
                  </motion.div>
                );
              }
              return (
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
              );
            })}
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Link 
                  to="/ancestral-child" 
                  className="px-10 py-5 border border-cream/20 text-[10px] tracking-widest uppercase font-bold hover:bg-cream hover:text-forest transition-all"
                >
                  The Ancestral Child
                </Link>
              </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
