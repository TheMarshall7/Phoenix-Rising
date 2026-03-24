import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Section, Button, FadeIn } from "../components/Common";

export const HomePage: React.FC = () => {
  return (
    <main className="bg-cream overflow-hidden">
      {/* HERO SECTION - Inspired by Screenshot 19-21-40 */}
      <section className="relative min-h-[110vh] flex items-center bg-forest overflow-hidden pt-32">
        <div className="absolute inset-0 z-0 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 relative h-full">
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2.2, ease: "easeOut" }}
              src="/_114.jpg" 
              alt="Maria Amiouni" 
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-forest/30"></div>
            {/* Soft gradient fade mimicking the inspiration */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-forest/40 to-forest hidden md:block"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent md:hidden"></div>
          </div>
          <div className="w-full md:w-1/2 bg-forest h-full hidden md:block relative z-0"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-8 w-full h-full flex flex-col items-center md:items-end justify-center pt-24">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:pl-12 text-center md:text-left max-w-2xl"
          >
            <p className="text-sage tracking-[0.4em] uppercase font-bold text-[10px] mb-8">Mentorship for the modern woman</p>
            
            <h1 className="text-7xl lg:text-[7.5rem] xl:text-9xl mb-12 leading-[0.85] text-cream font-medium tracking-tight">
              BREAK CYCLES. <br />
              <span className="font-serif italic text-cream font-light lowercase">lead with heart.</span>
            </h1>
            
            <div className="space-y-6 text-cream mb-16 max-w-lg">
              <p className="text-xl md:text-2xl font-serif italic text-cream leading-snug">
                Empowering women with tools for spiritual growth, subconscious shifts, and somatic mastery.
              </p>
              <p className="text-lg font-light leading-relaxed text-cream/70">
                With a decade of expertise, I guide you to break cycles, master your energy, and heal deeply—helping you lead with clarity, confidence, and self-trust.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-12 justify-center md:justify-start">
              <Link to="/booking" className="contents">
                <Button variant="sage" className="scale-110">Book a Session <ArrowRight className="w-4 h-4 ml-4" /></Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO SECTION - Inspired by Screenshot 19-21-00 */}
      <Section className="bg-paper py-48 relative">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              {/* OVAL MASK INSPIRATION */}
              <div className="aspect-[4/5] md:aspect-square mx-auto oval-mask overflow-hidden border border-forest/10 bg-cream group shadow-[0_0_100px_rgba(123,17,3,0.1)] transition-all duration-1000">
                <img 
                  src="/_280.jpg" 
                  alt="About Maria" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s] grayscale-[30%] hover:grayscale-0" 
                />
              </div>

              {/* STARBURST ACCENT from Screenshot 19-21-00 */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -top-12 -right-12 w-32 h-32 text-sage opacity-20 hidden md:block"
              >
                <Sparkles className="w-full h-full" />
              </motion.div>
            </motion.div>

            <FadeIn className="order-1 lg:order-2 space-y-16">
              <div className="space-y-6">
                <p className="text-forest tracking-[0.5em] uppercase font-bold text-[10px]">The Lineage</p>
                <h2 className="text-6xl md:text-8xl font-medium leading-none text-ink">HI, I'M <br /><span className="font-serif italic text-forest">Maria</span></h2>
              </div>
              
              <div className="space-y-10">
                <p className="text-2xl md:text-3xl font-serif italic text-ink/80 leading-relaxed border-l-2 border-sage pl-8">
                  Your guide to breaking cycles, reading your energetic blueprint, and accelerating spiritual evolution.
                </p>
                
                <div className="space-y-8 text-lg font-light leading-relaxed text-ink/70">
                   <p>I’m a lineage-based mentor, Human Design guide, and retreat facilitator with over 8 years of experience helping women heal deeply, break patterns, and lead with confidence.</p>
                   <p>Rooted in ancestral wisdom and psychotherapy, I blend somatic practices and specific Human Design mechanics to honor your unique spirit. My mission is to help you cultivate self-trust, understand your design, and embody your true power.</p>
                </div>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-ink/5">
                  <span className="text-[9px] tracking-[0.3em] uppercase font-bold border border-ink/10 px-6 py-2 rounded-full text-forest">Human Design Guide</span>
                  <span className="text-[9px] tracking-[0.3em] uppercase font-bold border border-sage/40 px-6 py-2 rounded-full text-sage">Somatic Mentor</span>
                  <span className="text-[9px] tracking-[0.3em] uppercase font-bold border border-ink/10 px-6 py-2 rounded-full text-ink/60">Space Holder</span>
                </div>
              </div>


            </FadeIn>
          </div>
        </div>
      </Section>

      {/* HUMAN DESIGN SECTION - WHITE */}
      <section className="bg-cream py-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-forest/5 skew-x-12 translate-x-1/4"></div>
        <div className="container mx-auto px-8 relative z-10 text-ink">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <FadeIn className="space-y-16">
              <div className="space-y-6">
                <p className="text-forest tracking-[0.5em] uppercase font-bold text-[10px]">Energetic Architecture</p>
                <h2 className="text-6xl md:text-8xl font-medium leading-[0.8] text-ink uppercase">
                  YOUR <br /><span className="font-serif italic text-forest lowercase tracking-normal">blueprint.</span>
                </h2>
              </div>
              
              <div className="space-y-10">
                <p className="text-2xl md:text-3xl font-serif italic text-ink leading-relaxed border-l-2 border-sage pl-8 max-w-xl">
                  Human Design is the synthesis of ancient wisdom and modern genetics—a roadmap to your unique resonance.
                </p>
                <div className="space-y-8 text-xl font-light leading-relaxed text-ink/70 max-w-lg font-sans italic">
                  <p>By understanding your type, strategy, and authority, you begin to decondition from societal expectations and align with your natural frequency. I guide you through the mechanics of your design to unlock clarity, self-trust, and effortless flow.</p>
                </div>
              </div>

              <div className="pt-12">
                <Link to="/human-design-readings" className="contents">
                  <Button variant="outline" className="group">
                    Get your Chart Reading <ArrowRight className="w-4 h-4 ml-4 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
              </div>
            </FadeIn>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5 }}
               className="relative"
            >
              <div className="aspect-square rounded-full border border-forest/10 flex items-center justify-center relative">
                 <div className="absolute inset-0 animate-pulse border border-forest/20 rounded-full scale-110"></div>
                 <div className="w-4/5 h-4/5 rounded-full border border-forest/10 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/_273.jpg" 
                      alt="Human Design" 
                      className="w-full h-full object-cover object-top grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                    />
                 </div>
                 {/* Floating Labels */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-forest/20 px-6 py-2 rounded-full shadow-xl">
                    <span className="text-[10px] tracking-widest text-forest uppercase font-bold">Resonance</span>
                 </div>
                 <div className="absolute bottom-1/4 -left-8 bg-white border border-forest/20 px-6 py-2 rounded-full shadow-xl">
                    <span className="text-[10px] tracking-widest text-forest uppercase font-bold">Authority</span>
                 </div>
                 <div className="absolute bottom-1/4 -right-8 bg-white border border-forest/20 px-6 py-2 rounded-full font-serif italic shadow-xl">
                    <span className="text-[11px] text-ink">Strategy</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* CORE OFFERINGS - DOMINANT GREEN */}
      <section className="bg-forest py-48 text-cream">
        <div className="container mx-auto px-8 text-center">
          <div className="mb-32">
            <h2 className="text-5xl md:text-7xl font-medium text-cream mb-12 uppercase tracking-tight">LIVING THE <span className="font-serif italic text-sage tracking-normal lowercase">work.</span></h2>
            <p className="text-lg font-light text-cream/50 max-w-2xl mx-auto italic tracking-wide">
              Detailed paths designed to bring you home to your sovereignty.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              { name: "Mentorship", desc: "In-depth 1-on-1 somatic and psychospiritual work.", path: "/mentorship" },
              { name: "Pilgrimage", desc: "Walking the Mother Line - immersive sacred travel.", path: "/pilgrimage" },
              { name: "Sacred Spaces", desc: "Women's Circles, retreats, and ceremonial gatherings.", path: "/sacred-spaces" }
            ].map((offering, i) => (
              <Link 
                key={offering.name} 
                to={offering.path}
                className="group p-16 lg:p-24 bg-forest hover:bg-white/5 transition-all duration-1000 relative overflow-hidden flex flex-col justify-between min-h-[450px]"
              >
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-1000">
                  <span className="text-9xl font-serif italic text-cream">0{i+1}</span>
                </div>
                <div className="relative z-10 space-y-12 text-left">
                  <h3 className="text-4xl font-serif italic text-sage group-hover:text-cream transition-colors duration-700 uppercase">
                    {offering.name}
                  </h3>
                  <p className="text-xl font-light leading-relaxed text-cream/70 group-hover:text-cream transition-colors duration-700 max-w-xs italic">
                    {offering.desc}
                  </p>
                </div>
                <div className="relative z-10 pt-12 text-left">
                  <span className="text-[11px] tracking-[0.5em] uppercase font-bold text-sage group-hover:text-cream transition-colors duration-700 flex items-center gap-4">
                    Explore <div className="w-12 h-px bg-sage/20 group-hover:bg-cream/40 transition-colors"></div> <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
