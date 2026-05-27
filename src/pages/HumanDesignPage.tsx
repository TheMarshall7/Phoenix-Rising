import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Compass, Users, Sparkles, Workflow, Eye, ArrowUpRight } from "lucide-react";
import { Button, FadeIn } from "../components/Common";

const energyTypes = [
  {
    num: "01",
    type: "Generator",
    tagline: "You were built to do the work you love.",
    description: "The exhaustion comes from doing everyone else's. Your power lies in response, waiting for life to spark your sacral engine before you commit your life force.",
    badge: "Built for Passion & Response",
    icon: Compass
  },
  {
    num: "02",
    type: "Manifesting Generator",
    tagline: "You were never meant to do one thing.",
    description: "The world just hasn't caught up yet. You are a multi-passionate force, designed to skip steps, pivot quickly, and map new routes that others find chaotic but you find vital.",
    badge: "Multi-Passionate Speed & Fire",
    icon: Sparkles
  },
  {
    num: "03",
    type: "Projector",
    tagline: "You see what others can't.",
    description: "You were never meant to push — you were meant to be invited. Your gift is deep, penetrating guidance. When recognized and invited, you direct energy with master-level clarity.",
    badge: "Guiding Visionary & Seer",
    icon: Eye
  },
  {
    num: "04",
    type: "Manifestor",
    tagline: "You were built to initiate.",
    description: "The anger comes from waiting for permission you were never supposed to need. You are designed to impact, to blast open doors, and to inform others of your direction before you move.",
    badge: "Initiating Catalyst & Trailblazer",
    icon: Workflow
  },
  {
    num: "05",
    type: "Reflector",
    tagline: "You are rare. A mirror for the world around you.",
    description: "Your environment is everything. As a lunar being, you absorb and mirror the health of the community around you. You are here to taste the frequency of spaces and guide from a place of wisdom.",
    badge: "Cosmic Mirror & Truth Teller",
    icon: Users
  }
];

export const HumanDesignPage: React.FC = () => {
  return (
    <main className="bg-paper overflow-hidden">
      {/* HERO SECTION - SPLIT VIEW WITH FLOATING BLUEPRINT ACCENTS */}
      <section className="relative min-h-[90vh] flex items-center bg-forest overflow-hidden pt-36 pb-20 px-8 text-cream">
        {/* Background Gradients & Ambient Glow */}
        <div className="absolute inset-0 z-0 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 relative h-full min-h-[40vh] md:min-h-0">
            <img
              src="/_273.jpg"
              alt="Human Design Mandalas"
              className="w-full h-full object-cover grayscale-[35%] opacity-40 md:opacity-50"
            />
            <div className="absolute inset-0 bg-forest/50"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-forest/60 to-forest hidden md:block"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-transparent md:hidden"></div>
          </div>
          <div className="w-full md:w-1/2 bg-forest h-full hidden md:block"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl w-full grid md:grid-cols-12 gap-16 items-center">
          {/* Left Text content */}
          <div className="md:col-span-7 space-y-10 text-center md:text-left">
            <span className="text-sage tracking-[0.45em] uppercase font-semibold text-[10px] mb-4 block">
              The Energetic Architecture
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] text-cream font-semibold tracking-tight uppercase">
              HUMAN <br />
              <span className="font-serif italic text-sage lowercase font-light tracking-normal block mt-2">design</span>
            </h1>
            
            <div className="w-20 h-px bg-sage/30 my-8 mx-auto md:mx-0"></div>

            <div className="space-y-6 max-w-xl mx-auto md:mx-0">
              <p className="text-2xl md:text-3xl font-serif italic text-cream/95 leading-snug">
                "You have always operated differently. Made decisions differently. Needed things others didn't seem to need."
              </p>
              <p className="text-base font-light text-cream/70 leading-relaxed font-sans">
                And somewhere along the way you were told that was the problem. It wasn't. It was your design.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start pt-6">
              <a href="#offerings" className="contents">
                <Button variant="sage">Explore Readings</Button>
              </a>
              <a href="#types" className="contents">
                <Button variant="outline" className="border-cream/20 text-cream hover:bg-cream hover:text-forest">
                  Understand the Types
                </Button>
              </a>
            </div>
          </div>

          {/* Right Graphical container */}
          <div className="md:col-span-5 hidden md:flex justify-center items-center relative">
            <div className="w-full max-w-[340px] aspect-square rounded-full border border-cream/15 flex items-center justify-center relative p-8">
              <div className="absolute inset-0 border border-cream/5 rounded-full scale-110 animate-pulse"></div>
              <div className="absolute inset-0 border border-sage/10 rounded-full scale-125"></div>
              
              <div className="w-full h-full rounded-full overflow-hidden border border-cream/20 relative z-10 bg-forest">
                <img 
                  src="/_273.jpg" 
                  alt="Mandalas Detail" 
                  className="w-full h-full object-cover grayscale-[20%] opacity-85 hover:grayscale-0 transition-all duration-1000" 
                />
              </div>

              {/* Float indicators representing the blueprint */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-forest/90 border border-sage/30 px-4 py-1.5 rounded-full shadow-2xl z-20">
                <span className="text-[8px] tracking-widest text-sage uppercase font-bold">Energy Type</span>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-forest/90 border border-sage/30 px-4 py-1.5 rounded-full shadow-2xl z-20">
                <span className="text-[8px] tracking-widest text-sage uppercase font-bold">Strategy & Authority</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARIA'S NARRATIVE - HIGH-END COPYWRITING SECTION */}
      <section className="bg-white py-40 px-8 text-ink relative">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-16 text-center">
            <span className="text-forest tracking-[0.5em] uppercase font-bold text-[10px] block">
              A Path of Remembrance
            </span>
            
            <div className="max-w-2xl mx-auto border-l-2 border-forest/20 pl-8 md:pl-12 text-left my-12">
              <p className="text-3xl md:text-4xl font-serif italic text-forest/95 leading-snug">
                "Human Design gave me a language for what I had always felt but couldn't defend."
              </p>
            </div>

            <div className="w-16 h-px bg-forest/20 mx-auto"></div>

            <div className="grid md:grid-cols-2 gap-12 text-left text-lg font-light leading-relaxed text-ink/80 font-sans">
              <p>
                It showed me why I was exhausted by the way I was working, why certain relationships drained me, and why I kept overriding my own knowing. It gave me permission to operate in alignment with the natural cycles of my energy body.
              </p>
              <div className="space-y-6">
                <p className="font-serif italic text-forest text-xl leading-relaxed">
                  It wasn't a personality test. It was a homecoming.
                </p>
                <p>
                  That's what I want to give you. Not more mental rules to remember, but a remembering of how you were already built to navigate this life with clarity and self-trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENERGY TYPES GRID - EXTRA PREMIUM DARK STAGGERED PANELS */}
      <section id="types" className="bg-[#012f27] py-40 px-8 text-cream relative">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-sage/5 rounded-full blur-[160px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cream/3 rounded-full blur-[140px]"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-32 space-y-6">
            <span className="text-sage/60 tracking-[0.45em] uppercase font-bold text-[10px] block">
              The Five Blueprints
            </span>
            <h2 className="text-5xl md:text-7xl font-semibold text-cream uppercase">
              The Five <span className="font-serif italic text-sage lowercase font-light">energies.</span>
            </h2>
            <div className="w-12 h-px bg-sage/20 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {energyTypes.map((t) => {
              const IconComponent = t.icon;
              return (
                <FadeIn 
                  key={t.type} 
                  className="group relative p-12 bg-forest/40 border border-cream/10 rounded-sm hover:bg-forest hover:border-sage/30 transition-all duration-1000 flex flex-col justify-between min-h-[380px] overflow-hidden"
                >
                  {/* Decorative index indicator in bg */}
                  <div className="absolute -top-10 -right-6 text-[10rem] font-serif italic text-cream/[0.02] group-hover:text-cream/[0.04] transition-all duration-1000 pointer-events-none select-none">
                    {t.num}
                  </div>

                  <div className="space-y-8 relative z-10">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] tracking-widest text-sage group-hover:text-cream/80 transition-colors uppercase font-bold">{t.num}</span>
                      <IconComponent className="w-5 h-5 text-sage/40 group-hover:text-sage transition-colors duration-500" />
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-3xl font-serif italic text-sage group-hover:text-cream transition-colors duration-700 uppercase leading-none">
                        {t.type}
                      </h3>
                      <div className="w-8 h-px bg-sage/20 group-hover:bg-cream/40 transition-colors"></div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-base font-semibold font-sans text-cream/95 leading-relaxed">
                        {t.tagline}
                      </p>
                      <p className="text-[13px] font-light text-cream/70 leading-relaxed font-sans group-hover:text-cream/85 transition-colors">
                        {t.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-cream/5 group-hover:border-cream/10 mt-8 relative z-10 transition-colors">
                    <span className="text-[9px] tracking-widest font-bold uppercase text-sage/40 group-hover:text-sage/60 transition-colors">
                      {t.badge}
                    </span>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* WAYS TO WORK TOGETHER - ASYMMETRIC GRID */}
      <section id="offerings" className="bg-paper py-40 px-8 text-ink relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-forest/[0.01] skew-x-12 translate-x-1/4 pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-32 space-y-6">
            <span className="text-forest/60 tracking-[0.45em] uppercase font-bold text-[10px] block">
              The Services
            </span>
            <h2 className="text-5xl md:text-7xl font-semibold text-ink uppercase">
              Ways We Can <span className="font-serif italic text-forest lowercase font-light">collaborate.</span>
            </h2>
            <div className="w-12 h-px bg-forest/20 mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 items-stretch">
            {/* CARD 1: ONE OFF READING (White / Minimalist Premium) */}
            <FadeIn className="bg-white border border-forest/10 p-12 hover:shadow-2xl hover:border-forest/20 transition-all duration-1000 flex flex-col justify-between min-h-[640px]">
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-forest/50">Single Immersion</span>
                  <div className="w-1.5 h-1.5 bg-forest/30 rounded-full"></div>
                </div>
                
                <h3 className="text-3xl font-serif italic text-forest uppercase leading-tight">
                  A one off reading
                </h3>
                
                <p className="text-sm font-light text-ink/80 leading-relaxed">
                  This is where most people begin. We sit with your chart, your energy type, your authority, your defined and undefined centers and I show you what it actually means for the way you live, love, and work.
                </p>
                
                <ul className="space-y-5 pt-8 border-t border-forest/5">
                  {[
                    "Individual reading: your chart, your life, your mission",
                    "Couples reading: two charts, one relationship, and the invisible dynamics running between you",
                    "Family Penta: the chart that forms when a family unit comes together, and what it asks of each person"
                  ].map((bullet, i) => (
                    <li key={i} className="flex gap-4 text-xs font-light text-ink/75 leading-relaxed">
                      <Star className="w-3.5 h-3.5 text-forest/40 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-forest/5 mt-8 space-y-6">
                <div className="space-y-2">
                  <p className="text-[10px] tracking-widest text-ink/40 uppercase font-semibold">Exchange</p>
                  <div className="flex flex-col gap-1">
                    <p className="text-2xl font-serif italic text-forest">750 AED <span className="text-xs font-sans not-italic text-ink/65">/ 60 mins</span></p>
                    <p className="text-2xl font-serif italic text-forest">1,050 AED <span className="text-xs font-sans not-italic text-ink/65">/ 90 mins</span></p>
                  </div>
                </div>
                
                <Link to="/booking" className="block">
                  <Button variant="primary" className="w-full text-center py-4 flex items-center justify-center gap-2 group">
                    Book a reading <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </FadeIn>

            {/* CARD 2: SIGNATURE WOVEN CONTAINER (Dominant Green Premium) */}
            <FadeIn className="bg-forest text-cream p-12 shadow-2xl hover:shadow-[0_35px_80px_rgba(2,69,59,0.25)] transition-all duration-1000 flex flex-col justify-between min-h-[640px] relative overflow-hidden ring-1 ring-sage/20">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Compass className="w-48 h-48" />
              </div>
              
              <div className="space-y-8 relative z-10">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-sage/80">Deep Alignment</span>
                  <span className="text-[9px] border border-sage/30 px-3 py-1 uppercase tracking-widest text-sage font-bold rounded-sm">Signature</span>
                </div>
                
                <h3 className="text-3xl font-serif italic text-sage uppercase leading-tight">
                  Woven into mentorship
                </h3>
                
                <p className="text-sm font-light text-cream/80 leading-relaxed">
                  If you are ready for more than a single session — if you want your Human Design to become a living practice rather than a one-time revelation — this is the deeper container. Your chart becomes a thread running through everything we do together: your decisions, your energy, your purpose, your healing.
                </p>
                
                <div className="border-l-2 border-sage/40 pl-5 py-2 text-xs italic text-sage/90 font-light leading-relaxed">
                  Includes personalized chart integrations, bi-weekly integration mappings, and ongoing decision support tailored exactly to your environment.
                </div>
              </div>

              <div className="pt-8 border-t border-cream/10 mt-8 space-y-6 relative z-10">
                <div className="space-y-2">
                  <p className="text-[10px] tracking-widest text-cream/40 uppercase font-semibold">Exchange</p>
                  <div>
                    <p className="text-3xl font-serif italic text-sage">1,100 AED <span className="text-xs font-sans not-italic text-cream/65">/ session</span></p>
                    <p className="text-[11px] font-light text-cream/60 mt-1 uppercase tracking-wider">2 sessions a month (Total: 3,300 AED)</p>
                  </div>
                </div>
                
                <Link to="/booking" className="block">
                  <Button variant="sage" className="w-full text-center py-4 flex items-center justify-center gap-2 group">
                    Apply for 3 month mentorship <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </FadeIn>

            {/* CARD 3: CORPORATE TEAMS (White / Minimalist Premium) */}
            <FadeIn className="bg-white border border-forest/10 p-12 hover:shadow-2xl hover:border-forest/20 transition-all duration-1000 flex flex-col justify-between min-h-[640px]">
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-forest/50">Collective Dynamics</span>
                  <div className="w-1.5 h-1.5 bg-forest/30 rounded-full"></div>
                </div>
                
                <h3 className="text-3xl font-serif italic text-forest uppercase leading-tight">
                  For teams & orgs
                </h3>
                
                <p className="text-sm font-light text-ink/80 leading-relaxed">
                  Human Design isn't only personal work. Understanding the energy types, communication styles, and decision-making strategies within a team changes everything.
                </p>
                
                <p className="text-sm font-light text-ink/75 leading-relaxed">
                  How people collaborate, where friction comes from, and how to lead in a way that brings out what each person is actually here to do.
                </p>
                
                <div className="border-t border-forest/5 pt-6 text-xs text-ink/65 italic font-light leading-relaxed">
                  I'm available for corporate readings, team sessions, and leadership workshops tailored to your organization's environment.
                </div>
              </div>

              <div className="pt-8 border-t border-forest/5 mt-8 space-y-6">
                <div className="space-y-2">
                  <p className="text-[10px] tracking-widest text-ink/40 uppercase font-semibold">Services</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-xs text-forest uppercase font-bold">
                      <ArrowUpRight className="w-3.5 h-3.5" /> Corporate Readings
                    </li>
                    <li className="flex items-center gap-3 text-xs text-forest uppercase font-bold">
                      <ArrowUpRight className="w-3.5 h-3.5" /> Leadership Workshops
                    </li>
                  </ul>
                </div>
                
                <Link to="/contact" className="block">
                  <Button variant="outline" className="w-full text-center py-4 flex items-center justify-center gap-2 group">
                    Enquire about corporate work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
};
