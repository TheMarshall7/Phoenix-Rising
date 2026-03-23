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

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-8 py-6 ${
          scrolled ? "bg-cream/90 backdrop-blur-md border-b border-ink/5" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="relative z-50">
            <img 
              src="/logo-orange.png" 
              alt="Maria Amiouni" 
              className={`h-12 md:h-16 transition-all duration-700 ${scrolled ? "scale-90" : "scale-100"}`}
            />
          </Link>

          <div className="hidden md:flex items-center gap-12 text-[10px] tracking-[0.4em] uppercase font-bold text-ink/70">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`hover:text-burgundy transition-colors relative group ${
                  location.pathname === link.path ? "text-burgundy" : ""
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 w-0 h-px bg-burgundy transition-all duration-500 group-hover:w-full ${
                  location.pathname === link.path ? "w-full" : ""
                }`}></span>
              </Link>
            ))}
            <a 
              href="http://localhost:3000/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-burgundy/20 hover:bg-burgundy hover:text-white transition-all duration-500"
            >
              Phoenix Rising Summit
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <button 
            className="relative z-50 md:hidden p-2 text-ink"
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
            className="fixed inset-0 z-40 bg-burgundy text-cream flex flex-col items-center justify-center gap-12 pt-20"
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
                <a 
                  href="http://localhost:3000/" 
                  className="px-10 py-5 border border-cream/20 text-[10px] tracking-widest uppercase font-bold hover:bg-cream hover:text-burgundy transition-all"
                >
                  Phoenix Rising Summit
                </a>
              </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
