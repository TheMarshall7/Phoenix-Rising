import { motion } from "framer-motion";
import { Sparkles, Calendar, Mail, Globe, ChevronLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Common";

const TEACHABLE_COURSE_URL =
  "https://maria-amiouni-s-school.teachable.com/p/phoenix-rising-21-days-of-embodiedliving";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-ink text-cream selection:bg-burgundy/25 selection:text-cream font-sans overflow-hidden flex flex-col relative z-0">
      {/* IMAGE BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src="/_310.jpg" alt="Atmospheric Background" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/95 via-ink/[0.88] to-ink"></div>
      </div>

      {/* HEADER */}
      <nav className="p-8 grid grid-cols-[1fr_auto_1fr] items-center gap-4 relative z-20">
        <Link
          to="/"
          className="flex items-center gap-2 text-[10px] tracking-[0.35em] uppercase font-bold text-cream/90 hover:text-cream transition-colors justify-self-start"
        >
          <ChevronLeft className="w-4 h-4 shrink-0" aria-hidden />
          <span className="hidden sm:inline">Main site</span>
          <span className="sm:hidden">Home</span>
        </Link>
        <Link to="/phoenix-rising" className="justify-self-center">
          <img src="/logo-white.png" alt="Phoenix Rising" className="h-12 object-contain" />
        </Link>
        <div className="justify-self-end w-[min(100%,7rem)]" aria-hidden />
      </nav>

      {/* BACKGROUND DECOR */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20 z-0">
        <motion.div 
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 inset-y-0 m-auto w-[120vw] h-[120vw] border-[1px] border-burgundy/25 rounded-full"
        ></motion.div>
        <motion.div 
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 inset-y-0 m-auto w-[90vw] h-[90vw] border-[1px] border-burgundy/15 rounded-full"
        ></motion.div>
      </div>

      <main className="container mx-auto px-8 py-20 md:py-32 relative z-10 flex flex-col items-center justify-center flex-grow">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-center space-y-12 max-w-4xl"
        >
          <div className="inline-block px-8 py-4 border border-burgundy/45 bg-burgundy/20 rounded-full mb-8 backdrop-blur-md shadow-sm shadow-ink/40">
            <p className="text-cream text-[10px] tracking-[0.5em] uppercase font-bold flex items-center gap-4">
              <Sparkles className="w-4 h-4 text-[#c4584e]" aria-hidden />
              Confirmation Successful
              <Sparkles className="w-4 h-4 text-[#c4584e]" aria-hidden />
            </p>
          </div>

          <h1 className="text-6xl md:text-9xl font-medium leading-[0.9] text-cream">WELCOME <br /><span className="font-serif italic text-burgundy tracking-tight">to the journey.</span></h1>
          
          <div className="w-24 h-px bg-cream/35 mx-auto my-12"></div>

          <div className="space-y-6 text-lg md:text-2xl font-light text-cream/95 italic leading-relaxed max-w-2xl mx-auto">
            <p>"The journey of embodiment is not about moving away from yourself, it is about returning."</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-24 text-left">
            {[
              { 
                icon: <Mail className="w-6 h-6 text-[#d4655a]" />, 
                title: "Check Inbox", 
                desc: "Your enrollment confirmation and onboarding email are on their way." 
              },
              { 
                icon: <Calendar className="w-6 h-6 text-[#d4655a]" />, 
                title: "Save the Dates", 
                desc: "March 23 – April 12. Add the sessions to your calendar now." 
              },
              { 
                icon: <Globe className="w-6 h-6 text-[#d4655a]" />, 
                title: "Join the Portal", 
                desc: "Open School of MA on Teachable for your course dashboard and community." 
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (i * 0.2) }}
                className="p-10 border border-cream/15 bg-ink/55 backdrop-blur-md rounded-sm shadow-sm shadow-black/20"
              >
                <div className="mb-6">{step.icon}</div>
                <h3 className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#d4655a] mb-4">{step.title}</h3>
                <p className="text-sm text-cream/92 leading-relaxed font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 max-w-lg mx-auto p-8 border border-burgundy/35 bg-burgundy/15 rounded-sm text-center space-y-4 shadow-sm shadow-black/25">
            <p className="text-sm text-cream/95 font-light leading-relaxed">
              If you were not sent to the course automatically after checkout, open the portal here:
            </p>
            <a
              href={TEACHABLE_COURSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-[10px] tracking-[0.25em] uppercase font-bold text-cream bg-burgundy/90 hover:bg-burgundy border border-burgundy/40 transition-colors rounded-sm"
            >
              Open course on Teachable
              <ExternalLink className="w-4 h-4 shrink-0 opacity-90" aria-hidden />
            </a>
          </div>

          <div className="pt-24 flex flex-col items-center gap-10">
             <Link to="/" className="contents">
               <Button variant="outline" className="border-cream/20 text-cream hover:bg-cream hover:text-ink px-16">Return to Main Site</Button>
             </Link>
             <p className="text-[9px] tracking-[0.4em] uppercase font-bold text-cream/60 italic">Sharing the medicine — tag @maria_amiouni on Instagram</p>
          </div>
        </motion.div>

      </main>

      <footer className="py-12 border-t border-cream/15 text-center text-[9px] tracking-widest uppercase font-bold text-cream/70 relative z-20">
        © 2026 PHOENIX RISING · ENROLLMENT COMPLETE
      </footer>
    </div>
  );
}
