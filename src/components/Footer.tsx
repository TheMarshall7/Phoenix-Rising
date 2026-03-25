import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-cream py-32 md:py-48 px-8 overflow-hidden relative">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[40vw] font-serif italic text-white/5 pointer-events-none origin-center transform rotate-12">
        Amiouni
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24 mb-32 items-end">
          <div className="lg:col-span-2">
            <img 
              src="/logo-white.png" 
              alt="Maria Amiouni" 
              className="h-24 md:h-32 mb-12 opacity-80" 
            />
            <p className="text-2xl md:text-3xl font-serif italic text-cream/70 leading-relaxed max-w-lg mb-8">
              "Returning to the roots of your own power, one step into embodiment at a time."
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-sage mb-10">Offerings</h3>
            <div className="flex flex-col gap-6 text-sm font-light text-cream/50 tracking-widest uppercase">
              <Link to="/mentorship" className="hover:text-cream transition-colors flex items-center gap-2 group">
                Mentorship <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link to="/pilgrimage" className="hover:text-cream transition-colors flex items-center gap-2 group">
                Pilgrimage <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link to="/sacred-spaces" className="hover:text-cream transition-colors flex items-center gap-2 group">
                Sacred Spaces <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link to="/phoenix-rising" className="hover:text-cream transition-colors flex items-center gap-2 group">
                Phoenix Rising <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-sage mb-10">Connect</h3>
             <div className="flex flex-col gap-6 text-sm font-light text-cream/50 tracking-widest uppercase">
              <a href="https://www.instagram.com/maria.amiouni" target="_blank" rel="noreferrer" className="hover:text-cream transition-colors">Instagram</a>
              <a href="mailto:mariaamiouni@gmail.com" className="hover:text-cream transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-cream/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] tracking-[0.3em] uppercase font-bold text-cream/20">
          <p>© 2026 MARIA AMIOUNI. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link to="/privacy" className="hover:text-cream/50 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-cream/50 transition-colors">
              Terms
            </Link>
            <span className="hidden sm:inline w-1 h-1 bg-cream/20 rounded-full" aria-hidden />
            <span>Dubai, UAE</span>
            <span className="w-1 h-1 bg-cream/20 rounded-full" aria-hidden />
            <span>Global Mentorship</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
