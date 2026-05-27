import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Section, Button, FadeIn } from "../components/Common";
import { MailingListSection } from "../components/MailingListSection";

export const HomePage: React.FC = () => {
  return (
    <main className="bg-cream overflow-hidden">
      {/* HERO SECTION - Inspired by Screenshot 19-21-40 */}
      <section className="relative min-h-[110vh] flex items-center bg-forest overflow-hidden pt-24">
        <div className="absolute inset-0 z-0 flex flex-col md:flex-row-reverse">
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
            <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/40 to-transparent hidden md:block"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent md:hidden"></div>
          </div>
          <div className="w-full md:w-1/2 bg-forest h-full hidden md:block relative z-0"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-8 w-full h-full flex flex-col items-center md:items-start justify-center pt-4">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:pr-12 text-center md:text-left max-w-2xl"
          >
            <p className="text-sage tracking-[0.4em] uppercase font-semibold text-[10px] mb-8">
              SPIRITUAL MENTOR • WRITER • TEACHER
            </p>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-12 leading-[1.0] text-cream font-semibold tracking-tight uppercase">
              This is a space for <br />
              <span className="font-serif italic text-sage lowercase font-light tracking-normal">those ready to</span> <br />
              remember.
            </h1>
            
            <div className="space-y-6 text-cream mb-16 max-w-xl">
              <p className="text-xl md:text-2xl font-serif italic text-cream leading-snug">
                To remember their body. Their rhythm. Their truth.
              </p>
              <p className="text-lg font-light leading-relaxed text-cream/70">
                Blending Human Design, Gene Keys, Astrology and sacred ritual, I create spaces where you return to the frequency that was always yours.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-12 justify-center md:justify-start">
              <Link to="/mentorship" className="contents">
                <Button variant="sage" className="text-ink hover:text-white">Apply for mentorship</Button>
              </Link>
              <a href="#offerings" className="contents">
                <Button variant="outline" className="border-white text-white bg-white/5 backdrop-blur-sm hover:bg-white hover:text-forest shadow-md">
                  See all offerings
                </Button>
              </a>
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
              <div className="aspect-[4/5] md:aspect-square mx-auto oval-mask overflow-hidden border border-forest/10 bg-cream group shadow-[0_0_100px_rgba(2,69,59,0.12)] transition-all duration-1000">
                <img 
                  src="/about_maria_new.jpg" 
                  alt="About Maria" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s] grayscale-[30%] hover:grayscale-0" 
                />
              </div>
            </motion.div>

            <FadeIn className="order-1 lg:order-2 space-y-16">
              <div className="space-y-6">
                <p className="text-forest tracking-[0.5em] uppercase font-semibold text-[10px]">About</p>
                <h2 className="text-6xl md:text-8xl font-semibold leading-none text-ink">HI, I'M <br /><span className="font-serif italic text-forest">Maria</span></h2>
              </div>
              
              <div className="space-y-10">
                <p className="text-2xl md:text-3xl font-serif italic text-ink/80 leading-relaxed border-l-2 border-sage pl-8">
                  I'm a spiritual mentor, writer, and teacher devoted to one thing — helping you remember what you've always known.
                </p>
                
                <div className="space-y-8 text-lg font-light leading-relaxed text-ink/70">
                   <p>I believe you came here with an innate wisdom, magnetism that is unique to you. I’m not here to teach you more, but remind you to return to the rhythm of the Earth, the intelligence of your body, and the truth of your soul.</p>
                   <p>My work weaves together Human Design, Gene Keys, Astrology, and sacred ritual into a single sacred language, spaces where transformation, reflection, and renewal become possible.</p>
                   <p>As the founder of The Phoenix Rising Summit and Sacred Spaces, I've guided hundreds of people through the cycles of life, death, and rebirth because I've walked those cycles myself.</p>
                   <p>My approach is rooted in devotion, beauty, and truth. I'm here to help you reconnect with your body, align with your purpose, and live from the frequency that is undeniably, unapologetically yours.</p>
                </div>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-ink/5">
                  <span className="text-[9px] tracking-[0.3em] uppercase font-bold border border-ink/10 px-6 py-2 rounded-full text-forest">Human Design Guide</span>
                  <span className="text-[9px] tracking-[0.3em] uppercase font-semibold border border-sage/40 px-6 py-2 rounded-full text-sage">Somatic Mentor</span>
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
                <p className="text-forest tracking-[0.5em] uppercase font-semibold text-[10px]">Energetic Architecture</p>
                <h2 className="text-6xl md:text-8xl font-semibold leading-[0.8] text-ink uppercase">
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
                <Link to="/booking" className="contents">
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
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-forest/20 px-6 py-2 rounded-full shadow-xl z-20">
                     <span className="text-[10px] tracking-widest text-forest uppercase font-bold font-serif italic">Energy Type</span>
                  </div>
                  <div className="absolute top-[22%] -right-16 bg-white border border-forest/20 px-6 py-2 rounded-full shadow-xl z-20">
                     <span className="text-[10px] tracking-widest text-forest uppercase font-bold font-serif italic">Profile Type</span>
                  </div>
                  <div className="absolute bottom-[22%] -right-16 bg-white border border-forest/20 px-6 py-2 rounded-full shadow-xl z-20">
                     <span className="text-[10px] tracking-widest text-forest uppercase font-bold font-serif italic">Strategy</span>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white border border-forest/20 px-6 py-2 rounded-full shadow-xl z-20">
                     <span className="text-[10px] tracking-widest text-forest uppercase font-bold font-serif italic">Incarnation Cross</span>
                  </div>
                  <div className="absolute bottom-[22%] -left-16 bg-white border border-forest/20 px-6 py-2 rounded-full shadow-xl z-20">
                     <span className="text-[10px] tracking-widest text-forest uppercase font-bold font-serif italic">Authority</span>
                  </div>
                  <div className="absolute top-[22%] -left-16 bg-white border border-forest/20 px-6 py-2 rounded-full shadow-xl z-20">
                     <span className="text-[10px] tracking-widest text-forest uppercase font-bold font-serif italic">Environment</span>
                  </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* CORE OFFERINGS - DOMINANT GREEN */}
      <section id="offerings" className="bg-forest py-48 text-cream">
        <div className="container mx-auto px-8 text-center">
          <div className="mb-32">
            <h2 className="text-5xl md:text-7xl font-semibold text-cream mb-12 uppercase tracking-tight">LIVING THE <span className="font-serif italic text-sage tracking-normal lowercase">work.</span></h2>
            <p className="text-lg font-light text-cream/50 max-w-2xl mx-auto italic tracking-wide">
              Devotional containers designed to guide you back to your body, your lineage, and your sovereign frequency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              { 
                eyebrow: "1:1 · Application only",
                name: "Mentorship", 
                desc: "This is the deepest container I hold. We work together over time through your Human Design, Gene Keys, somatic practice and Energy Healingl to unravel the patterns that have kept you circling, and rebuild from the truth of who you actually are.", 
                details: "Personalised to your chart and energy type · Limited spaces",
                cta: "Apply to work together",
                path: "/booking" 
              },
              { 
                eyebrow: "Sacred travel · Immersive",
                name: "Pilgrimage Egypt coming soon", 
                desc: "We travel to the places where the Earth still remembers. Walking in the footsteps of Mary Magdalene in the South of France, walking the Mother Line, sitting with the land, letting the ancient sites do what no retreat room can. Pilgrimage is where the body finally gets to believe what the mind already knows.", 
                details: "Immersive sacred travel · South of France · Egypt joining soon · Small group",
                cta: "Learn more",
                path: "/pilgrimage" 
              },
              { 
                eyebrow: "Group container · Seasonal",
                name: "The Ancestral Child", 
                desc: "You have done the inner work. You have met the child you were. And still something loops, in your relationships, your work, how visible you allow yourself to become.\n\nThis is the work that goes one layer further back.\n\nNine portals across eleven weeks, held within the rhythm of the moon. We restore your parents and your lineage not by bypassing what happened, but by returning them to their rightful place in your inner world. Because until we do, the temple cannot hold.\n\nThis is how you finally, fully, arrive.", 
                details: "June 14 — September 6, 2026 · Live + recorded · Three tiers available",
                cta: "Join Today",
                path: "/ancestral-child" 
              }
            ].map((offering, i) => (
              <Link 
                key={offering.name} 
                to={offering.path}
                className="group p-12 lg:p-16 bg-forest hover:bg-white transition-all duration-700 relative overflow-hidden flex flex-col justify-between min-h-[680px] md:min-h-[740px] lg:min-h-[820px] shadow-sm hover:shadow-2xl border-b border-white/5 lg:border-b-0"
              >
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                  <span className="text-9xl font-serif italic text-cream group-hover:text-forest/5">0{i+1}</span>
                </div>
                
                {/* Top part: Eyebrow and Title */}
                <div className="relative z-10 text-left">
                  <p className="text-sage/60 group-hover:text-forest/60 text-[10px] tracking-[0.3em] uppercase font-bold transition-colors duration-700">
                    {offering.eyebrow}
                  </p>
                  <h3 className="text-4xl font-serif italic text-sage group-hover:text-forest transition-colors duration-700 uppercase mt-4">
                    {offering.name}
                  </h3>
                </div>

                {/* Middle part: Description with min-height or flex grow to balance card lengths */}
                <div className="relative z-10 text-left flex-1 flex flex-col justify-start mt-6 min-h-[280px] md:min-h-[300px] lg:min-h-[340px]">
                  <p className="text-base md:text-lg text-cream group-hover:text-forest transition-colors duration-700 leading-relaxed font-sans font-normal whitespace-pre-line">
                    {offering.desc}
                  </p>
                </div>

                {/* Bottom part: Details and CTA */}
                <div className="relative z-10 text-left space-y-8 mt-auto pt-6 border-t border-white/10 group-hover:border-forest/10">
                  <p className="text-[9px] tracking-wider text-sage/60 group-hover:text-forest/60 transition-colors font-sans font-light uppercase">
                    {offering.details}
                  </p>
                  <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-sage group-hover:text-forest transition-colors duration-700 flex items-center gap-4">
                    {offering.cta} <div className="w-12 h-px bg-sage/20 group-hover:bg-forest/20 transition-colors"></div> <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MailingListSection />
    </main>
  );
};
