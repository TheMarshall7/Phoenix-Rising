import React from "react";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const LOGO_URL =
  "https://assets.cdn.filesafe.space/qPFyxcfcKb9ufSnJGOBl/media/69ad8626d130b91b63ebaf45.png";

export const Footer: React.FC = () => {
  const linkClass =
    "text-[10px] tracking-[0.25em] uppercase font-semibold text-cream/40 hover:text-cream transition-colors";

  return (
    <footer className="bg-[#141414] text-cream py-16 md:py-20 px-8 border-t border-white/5">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-12">
          <Link to="/" className="inline-block shrink-0">
            <img
              src={LOGO_URL}
              alt="Maria Amiouni"
              className="h-10 md:h-11 w-auto max-w-[140px] object-contain opacity-90 hover:opacity-100 transition-opacity"
              width={140}
              height={44}
            />
          </Link>

          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 justify-center md:justify-end">
            <Link to="/mentorship" className={linkClass}>
              Mentorship
            </Link>
            <Link to="/pilgrimage" className={linkClass}>
              Pilgrimage
            </Link>
            <Link to="/sacred-spaces" className={linkClass}>
              Sacred Spaces
            </Link>
            <Link to="/phoenix-rising" className={linkClass}>
              Phoenix Rising
            </Link>
            <Link to="/contact" className={linkClass}>
              Contact
            </Link>
            <Link to="/privacy" className={linkClass}>
              Privacy
            </Link>
            <Link to="/terms" className={linkClass}>
              Terms
            </Link>
          </nav>

          <a
            href="https://www.instagram.com/maria.amiouni"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center md:justify-end text-cream/50 hover:text-cream transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <p className="text-center md:text-left text-[9px] tracking-[0.35em] uppercase font-semibold text-cream/25 mt-12 pt-10 border-t border-white/5">
          © {new Date().getFullYear()} Maria Amiouni. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
