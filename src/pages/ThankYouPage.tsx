import { motion } from "motion/react";
import { Sparkles, ArrowRight, Heart, Calendar, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Section, Button } from "../components/Common";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-ink text-cream selection:bg-sage selection:text-ink font-sans overflow-hidden flex flex-col relative z-0">
      {/* IMAGE BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src="/_310.jpg" alt="Atmospheric Background" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/80 to-ink"></div>
      </div>

      {/* HEADER */}
      <nav className="p-8 flex justify-center items-center relative z-20">
        <Link to="/">
          <img src="/logo-white.png" alt="Phoenix Rising" className="h-12 object-contain" />
        </Link>
      </nav>

      {/* BACKGROUND DECOR */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20 z-0">
        <motion.div 
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 inset-y-0 m-auto w-[120vw] h-[120vw] border-[1px] border-sage/20 rounded-full"
        ></motion.div>
        <motion.div 
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 inset-y-0 m-auto w-[90vw] h-[90vw] border-[1px] border-sage/10 rounded-full"
        ></motion.div>
      </div>

      <main className="container mx-auto px-8 py-20 md:py-32 relative z-10 flex flex-col items-center justify-center flex-grow">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-center space-y-12 max-w-4xl"
        >
          <div className="inline-block px-8 py-4 border border-sage/30 bg-sage/10 rounded-full mb-8 backdrop-blur-md">
            <p className="text-sage text-[10px] tracking-[0.5em] uppercase font-bold flex items-center gap-4">
              <Sparkles className="w-4 h-4 text-sage" />
              Confirmation Successful
              <Sparkles className="w-4 h-4 text-sage" />
            </p>
          </div>

          <h1 className="text-6xl md:text-9xl font-medium leading-[0.9] text-cream">WELCOME <br /><span className="font-serif italic text-sage tracking-tight">to the journey.</span></h1>
          
          <div className="w-24 h-px bg-cream/20 mx-auto my-12"></div>

          <div className="space-y-6 text-lg md:text-2xl font-light text-cream/70 italic leading-relaxed max-w-2xl mx-auto">
            <p>"The journey of embodiment is not about moving away from yourself, it is about returning."</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-24 text-left">
            {[
              { 
                icon: <Mail className="w-6 h-6 text-sage" />, 
                title: "Check Inbox", 
                desc: "Your enrollment confirmation and onboarding email are on their way." 
              },
              { 
                icon: <Calendar className="w-6 h-6 text-sage" />, 
                title: "Save the Dates", 
                desc: "March 23 – April 12. Add the sessions to your calendar now." 
              },
              { 
                icon: <Globe className="w-6 h-6 text-sage" />, 
                title: "Join the Portal", 
                desc: "Access your member dashboard to meet the community." 
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (i * 0.2) }}
                className="p-10 border border-cream/5 bg-cream/[0.02] backdrop-blur-md rounded-sm"
              >
                <div className="mb-6">{step.icon}</div>
                <h3 className="text-[10px] tracking-[0.3em] uppercase font-bold text-sage mb-4">{step.title}</h3>
                <p className="text-sm text-cream/60 leading-relaxed font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="pt-24 flex flex-col items-center gap-10">
             <Link to="/" className="contents">
               <Button variant="outline" className="border-cream/20 text-cream hover:bg-cream hover:text-ink px-16">Return to Main Site</Button>
             </Link>
             <p className="text-[9px] tracking-[0.4em] uppercase font-bold text-cream/30 italic">Sharing the medicine — tag @maria_amiouni on Instagram</p>
          </div>
        </motion.div>

      </main>

      <footer className="py-12 border-t border-cream/5 text-center opacity-40 text-[9px] tracking-widest uppercase font-bold text-cream relative z-20">
        © 2026 PHOENIX RISING · ENROLLMENT COMPLETE
      </footer>
    </div>
  );
}
