import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Section, Button, FadeIn } from "../components/Common";

export const HomePage: React.FC = () => {
  return (
    <main className="bg-cream overflow-hidden">
      {/* HERO SECTION - Inspired by Screenshot 19-21-40 */}
      <section className="relative min-h-[110vh] flex items-center bg-burgundy overflow-hidden pt-32">
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
            <div className="absolute inset-0 bg-burgundy/30"></div>
            {/* Soft gradient fade mimicking the inspiration */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-burgundy/40 to-burgundy hidden md:block"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy via-burgundy/40 to-transparent md:hidden"></div>
          </div>
          <div className="w-full md:w-1/2 bg-burgundy h-full hidden md:block relative z-0"></div>
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
              <Link to="/courses" className="contents">
                <Button variant="sage" className="scale-110">Join a Training <ArrowRight className="w-4 h-4 ml-4" /></Button>
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
              <div className="aspect-[4/5] md:aspect-square mx-auto oval-mask overflow-hidden border border-burgundy/10 bg-cream group shadow-[0_0_100px_rgba(123,17,3,0.1)] transition-all duration-1000">
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
                <p className="text-burgundy tracking-[0.5em] uppercase font-bold text-[10px]">The Lineage</p>
                <h2 className="text-6xl md:text-8xl font-medium leading-none text-ink">HI, I'M <br /><span className="font-serif italic text-burgundy">Maria</span></h2>
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
                  <span className="text-[9px] tracking-[0.3em] uppercase font-bold border border-ink/10 px-6 py-2 rounded-full text-burgundy">Human Design Guide</span>
                  <span className="text-[9px] tracking-[0.3em] uppercase font-bold border border-sage/40 px-6 py-2 rounded-full text-sage">Somatic Mentor</span>
                  <span className="text-[9px] tracking-[0.3em] uppercase font-bold border border-ink/10 px-6 py-2 rounded-full text-ink/60">Space Holder</span>
                </div>
              </div>

              <div className="pt-8">
                <Link to="/about">
                  <Button variant="outline" className="group">
                    Learn more about me <ArrowRight className="w-4 h-4 ml-4 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* PODCAST SECTION - Inspired by Screenshot 19-23-09 */}
      <section className="bg-cream border-y border-ink/5">
        <div className="grid lg:grid-cols-2">
          {/* Left Column: Image with gradient fade overlay */}
          <div className="relative h-96 lg:h-auto min-h-[600px] overflow-hidden">
            <img src="/_316.jpg" className="w-full h-full object-cover grayscale-[20%]" alt="Podcast" />
            <div className="absolute inset-0 bg-ink/20 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-cream via-transparent"></div>
          </div>

          {/* Right Column: List of content */}
          <div className="py-24 md:py-32 px-12 md:px-24 flex flex-col justify-center bg-cream">
            <FadeIn className="space-y-16">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-7xl font-medium text-ink uppercase tracking-tight">
                  THE STORYTELLERS <br /><span className="font-serif italic lowercase text-burgundy tracking-normal">podcast</span>
                </h2>
                <div className="w-24 h-px bg-burgundy/30 my-10"></div>
                <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-ink/40 mb-12">Featured Episodes:</p>
              </div>

              <div className="space-y-0">
                {[
                  "How to heal your abandonment & rejection wounds",
                  "Using Toltec wisdom to reclaim your power",
                  "How to awaken your magic and your worth",
                  "How to honor plant medicine with a folk herbalist",
                  "Understanding synchronicity and soul truth"
                ].map((ep, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.5 }}
                    className="group py-10 border-b border-ink/5 flex justify-between items-center cursor-pointer"
                  >
                    <div className="flex items-center gap-12">
                      <span className="text-[10px] font-bold text-ink/30 font-sans tracking-widest">{i + 1}</span>
                      <h3 className="text-lg md:text-xl font-medium text-ink/80 group-hover:text-burgundy transition-colors tracking-wide uppercase">
                        {ep}
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center group-hover:bg-burgundy group-hover:border-burgundy transition-all duration-700">
                      <Play className="w-4 h-4 text-ink group-hover:text-cream ml-1" />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-16">
                <a href="#" className="text-[10px] tracking-[0.4em] uppercase font-bold text-burgundy flex items-center gap-4 hover:gap-6 transition-all">
                  Listen to all episodes <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* HUMAN DESIGN SECTION - Dedicated Section */}
      <section className="bg-ink py-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-burgundy/5 skew-x-12 translate-x-1/4"></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <FadeIn className="space-y-16">
              <div className="space-y-6">
                <p className="text-sage tracking-[0.5em] uppercase font-bold text-[10px]">Energetic Architecture</p>
                <h2 className="text-6xl md:text-8xl font-medium leading-[0.8] text-cream">
                  YOUR <br /><span className="font-serif italic text-sage lowercase">blueprint.</span>
                </h2>
              </div>
              
              <div className="space-y-10">
                <p className="text-2xl md:text-3xl font-serif italic text-cream leading-relaxed border-l-2 border-burgundy pl-8 max-w-xl">
                  Human Design is the synthesis of ancient wisdom and modern genetics—a roadmap to your unique resonance.
                </p>
                <div className="space-y-8 text-xl font-normal leading-relaxed text-cream/80 max-w-lg font-sans">
                  <p>By understanding your type, strategy, and authority, you begin to decondition from societal expectations and align with your natural frequency. I guide you through the mechanics of your design to unlock clarity, self-trust, and effortless flow.</p>
                </div>
              </div>

              <div className="pt-8">
                <Link to="/human-design-readings">
                  <Button variant="sage" className="group">
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
              <div className="aspect-square rounded-full border border-cream/10 flex items-center justify-center relative">
                 <div className="absolute inset-0 animate-pulse border border-sage/20 rounded-full scale-110"></div>
                 <div className="w-4/5 h-4/5 rounded-full border border-burgundy/20 flex items-center justify-center">
                    <img 
                      src="/_273.jpg" 
                      alt="Human Design" 
                      className="w-full h-full object-cover rounded-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                    />
                 </div>
                 {/* Floating Labels / Elements mimicking a chart */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ink border border-sage/50 px-6 py-2 rounded-full shadow-2xl">
                    <span className="text-[10px] tracking-widest text-sage uppercase font-bold">Resonance</span>
                 </div>
                 <div className="absolute bottom-1/4 -left-8 bg-ink border border-burgundy/50 px-6 py-2 rounded-full shadow-2xl">
                    <span className="text-[10px] tracking-widest text-burgundy uppercase font-bold">Authority</span>
                 </div>
                 <div className="absolute bottom-1/4 -right-8 bg-ink border border-cream/20 px-6 py-2 rounded-full font-serif italic shadow-2xl">
                    <span className="text-[11px] text-cream">Strategy</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* CORE OFFERINGS - Quick Navigation */}
      <Section className="bg-paper py-48">
        <div className="container mx-auto px-8">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-7xl font-medium text-ink mb-12">LIVING THE <span className="font-serif italic text-burgundy">work.</span></h2>
            <p className="text-lg font-light text-ink/50 max-w-2xl mx-auto italic tracking-wide">
              Detailed paths designed to bring you home to your sovereignty.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-ink/5 border border-ink/5">
            {[
              { name: "Mentorship", desc: "In-depth 1-on-1 somatic and psychospiritual work.", path: "/mentorship" },
              { name: "Pilgrimage", desc: "Walking the Mother Line - immersive sacred travel.", path: "/pilgrimage" },
              { name: "Sacred Spaces", desc: "Women's Circles, retreats, and ceremonial gatherings.", path: "/sacred-spaces" }
            ].map((offering, i) => (
              <Link 
                key={offering.name} 
                to={offering.path}
                className="group p-16 lg:p-24 bg-paper hover:bg-burgundy transition-all duration-1000 relative overflow-hidden flex flex-col justify-between min-h-[450px]"
              >
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-1000">
                  <span className="text-9xl font-serif italic text-cream">0{i+1}</span>
                </div>
                <div className="relative z-10 space-y-12">
                  <h3 className="text-4xl font-serif italic text-burgundy group-hover:text-cream transition-colors duration-700">
                    {offering.name}
                  </h3>
                  <p className="text-xl font-normal leading-relaxed text-ink/80 group-hover:text-cream transition-colors duration-700 max-w-xs">
                    {offering.desc}
                  </p>
                </div>
                <div className="relative z-10 pt-12">
                  <span className="text-[11px] tracking-[0.5em] uppercase font-bold text-burgundy group-hover:text-cream transition-colors duration-700 flex items-center gap-4">
                    Explore <div className="w-12 h-px bg-burgundy/20 group-hover:bg-cream/40 transition-colors"></div> <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
};
