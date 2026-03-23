import { motion } from "motion/react";
import { ArrowRight, Check, ChevronDown, Quote, Sparkles, Zap, Moon, Sun, Compass, Shield, Play, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Section, Button } from "../components/Common";

export default function LandingPage() {
  return (
    <div className="min-h-screen selection:bg-sage/30 bg-cream">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-cream">
        <div className="flex items-center">
          <img src="/logo-white.png" alt="Phoenix Rising" className="h-16 md:h-20 object-contain" />
        </div>
        <div className="hidden md:flex gap-12 text-[9px] tracking-[0.4em] uppercase font-bold">
          <a href="#roadmap" className="hover:text-sage transition-colors">Roadmap</a>
          <a href="#workshops" className="hover:text-sage transition-colors">Workshops</a>
          <a href="#faculty" className="hover:text-sage transition-colors">Faculty</a>
        </div>
        <div className="w-6 h-px bg-cream"></div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-burgundy overflow-hidden">
        <div className="absolute inset-0 z-0 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 relative h-full">
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              src="/_114.jpg" 
              alt="Woman looking up" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-burgundy/40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-burgundy/20 to-burgundy hidden md:block"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy via-burgundy/40 to-transparent md:hidden"></div>
          </div>
          <div className="w-full md:w-1/2 bg-burgundy h-full hidden md:block relative z-0"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-8 w-full grid md:grid-cols-2 items-center min-h-screen">
          <div className="hidden md:flex items-center justify-center">
             {/* Vertical text removed as per request */}
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="md:pl-12 py-24 md:py-32 flex flex-col justify-center min-h-[calc(100vh-100px)] lg:min-h-screen"
          >
            <motion.img
              src="/logo-white.png"
              alt="Phoenix Rising Summit"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="w-56 md:w-80 object-contain mb-8 md:mb-10"
            />
            
            <p className="text-cream/70 tracking-[0.3em] uppercase font-bold text-[9px] mb-8">
              March 23 – April 12 <span className="mx-2 opacity-50">|</span> Live Daily Sessions <span className="mx-2 opacity-50">|</span> Easter Pause Included
            </p>
            
            <h1 className="text-6xl lg:text-[5.5rem] xl:text-8xl mb-12 leading-[0.9] text-cream font-medium tracking-tight">
              21 Days of <br />
              <span className="font-serif italic text-cream">Embodied Living.</span>
            </h1>
            
            <div className="space-y-6 text-cream mb-16 max-w-lg">
              <p className="text-[10px] tracking-[0.2em] uppercase font-bold leading-relaxed text-cream/50">
                A live journey into living what you already know.
              </p>
              <p className="text-lg font-light leading-relaxed text-cream/80">
                You don’t need more information. You don’t need another breakthrough. You don’t need to become someone new.
              </p>
              <p className="text-2xl font-serif italic text-cream pt-2">
                You need the capacity to live what you already understand.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mt-auto lg:mt-0">
              <Link to="/checkout" className="contents">
                <Button variant="primary" className="bg-cream text-burgundy hover:scale-105">Join the Journey</Button>
              </Link>
              <div className="flex items-center gap-4 text-[9px] tracking-widest uppercase font-bold text-cream/40 px-4 sm:px-0">
                <span className="w-8 h-px bg-cream/20 hidden sm:block"></span>
                Limited Capacity
              </div>
            </div>
          </motion.div>        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-30">
          <ChevronDown className="w-6 h-6 text-cream" />
        </div>
      </section>

      {/* SECTION 1 - THE CORE SHIFT */}
      <Section id="roadmap" className="bg-paper py-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-burgundy/5 -skew-x-12 translate-x-1/2"></div>
        <div className="container-narrow relative z-10">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-5 md:sticky md:top-32">
              <img src="/logo-orange.png" alt="Phoenix Rising Summit" className="w-full max-w-xs md:max-w-sm object-contain mb-10" />
              <p className="text-sage text-[10px] tracking-[0.5em] uppercase mb-8 font-bold">The Evolution</p>
              <h2 className="text-6xl md:text-8xl font-medium leading-tight mb-12 text-burgundy">THE CORE <br /><span className="font-serif italic text-burgundy">shift</span></h2>
              <div className="w-24 h-px bg-burgundy/20 mb-12"></div>
              <p className="text-xl font-serif italic text-burgundy/80 leading-relaxed mb-8">
                "We are back with a very special edition of Phoenix Rising IV. It’s wild to see how this space has evolved in such a short time."
              </p>
              <p className="text-ink/60 font-light leading-relaxed mb-6">
                In the past, we gathered for two intense days. This time, we are stretching again into 21 days — creating space not just for inspiration, but for integration. Not just for awakening, but for practice.
              </p>
              <p className="text-ink/60 font-light leading-relaxed mb-6">
                If you’re new here, hi. Welcome. Phoenix Rising began as a way to gather — to connect spiritual and wellness communities across the region, to create a space where wisdom is shared horizontally, not hierarchically.
              </p>
              <p className="text-ink/80 font-medium leading-relaxed italic border-l-2 border-sage/40 pl-4">
                And this particular edition is very different. It is not another healing container. It is a return to living what you already know.
              </p>
            </div>
            
            <div className="md:col-span-7 space-y-32">
              <div className="relative">
                <div className="absolute -left-8 top-0 w-px h-full bg-ink/5"></div>
                <div className="pl-12">
                  <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-sage mb-12">The Philosophy</h3>
                  <div className="space-y-8">
                    <p className="text-lg font-light leading-relaxed text-ink/70">
                      21 Days of Embodied Living is a daily live container devoted to integration. Over three weeks, we move through nervous system regulation, inner authority, cyclical intelligence, pleasure, sustainability, and embodied leadership.
                    </p>
                    <p className="text-3xl md:text-4xl font-medium leading-snug text-ink">
                      You don’t need more information. <br />
                      You don’t need another breakthrough. <br />
                      You don’t need to become someone new.
                    </p>
                    <p className="text-2xl font-serif italic text-burgundy">
                      You need the capacity to live what you already understand.
                    </p>
                    <p className="text-ink/40 font-light italic tracking-wide uppercase text-[11px]">Not as concepts. As practice.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-12">
                <div className="p-10 bg-white border border-ink/5 group hover:border-sage/30 transition-colors duration-700">
                  <p className="text-5xl font-serif italic text-burgundy mb-4 group-hover:text-sage transition-colors">21</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-ink/40">Days of Devotion</p>
                </div>
                <div className="p-10 bg-white border border-ink/5 group hover:border-sage/30 transition-colors duration-700">
                  <p className="text-5xl font-serif italic text-burgundy mb-4 group-hover:text-sage transition-colors">17</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-ink/40">Core Practitioners</p>
                </div>
              </div>

              <div className="aspect-[16/9] overflow-hidden border border-ink/5">
                <img 
                  src="/_273.jpg" 
                  alt="Atmospheric landscape" 
                  className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-[3s]"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 2 - THE CORE POSITIONING */}
      <Section className="relative bg-burgundy text-cream py-48 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/_418.jpg" alt="Atmospheric Background" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-burgundy via-transparent to-burgundy"></div>
        </div>
        <div className="container-narrow relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-sage text-[10px] tracking-[0.4em] uppercase mb-8 font-bold">The Core Positioning</p>
            <h2 className="text-3xl md:text-5xl mb-12 font-medium leading-tight">
              In a time of nervous system overload, collapsing authority structures, and endless self-improvement culture, this space is about one thing:
            </h2>
            <p className="text-5xl md:text-7xl font-serif italic mb-12 text-sage">Embodiment.</p>
            <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-cream/80">
              <p>Not learning more. Not fixing more. Not becoming someone new.</p>
              <p className="text-cream font-medium">But strengthening your inner compass and building the capacity to live from it.</p>
              <p>Over 21 days, through one live session a day, we practice. We slow down enough to integrate. We build capacity instead of chasing intensity. We bring structure to what has felt abstract. We give roots to what has only existed as vision.</p>
              <p className="text-2xl font-serif italic text-cream pt-8">This is about living your work. Living your values. Living your knowing.</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* SECTION 3 - MIDDLE EASTERN GROUNDING */}
      <Section className="bg-cream text-ink border-b border-ink/10">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-full overflow-hidden relative z-10">
                <img 
                  src="/_280.jpg" 
                  alt="Middle Eastern Grounding" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl mb-8 font-medium text-burgundy">
                MIDDLE EASTERN <span className="font-serif italic text-burgundy">grounding</span>
              </h2>
              <div className="space-y-6 text-base md:text-lg font-light leading-relaxed text-ink/80">
                <p>With guidance from practitioners, many rooted in the Middle East, this journey brings together teachers, mystics, healers, and visionaries who carry not only the medicine of their craft, but the lived experience of our shared stories.</p>
                <p>For too long, we sought wisdom outside of our lands. This container is a reminder that the wisdom has always lived among us.</p>
                <p className="text-xl font-serif italic text-burgundy pt-4">Now is the time to return home, to ourselves, to each other, to the intelligence that has always been ours.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* SECTION 4 - THE 21-DAY ROADMAP */}
      <Section id="roadmap" className="bg-burgundy text-cream py-48 border-y border-cream/5">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-16 items-start">
            <div className="md:sticky md:top-32">
              <p className="text-sage text-[10px] tracking-[0.5em] uppercase mb-6 font-bold">The Roadmap</p>
              <h2 className="text-6xl md:text-8xl mb-10 font-medium text-cream">21 DAYS <br /><span className="font-serif italic text-sage">of focus.</span></h2>
              <p className="text-cream/50 font-light italic leading-relaxed mb-4">Each day features one live session. One focus. One embodied doorway.</p>
              <p className="text-cream/70 font-light leading-relaxed">This is here to help you walk your talk, and embody that which you already know.</p>
            </div>
            
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-x-12 gap-y-20">
              {[
                { title: "Nervous System Regulation", days: "Days 1-3", desc: "Building the physiological capacity to hold your power and presence." },
                { title: "Cyclical Intelligence", days: "Days 4-6", desc: "Moving from linear striving to the wisdom of seasons and rhythms." },
                { title: "Inner Authority", days: "Days 7-9", desc: "Strengthening your inner compass and reclaiming your choice." },
                { title: "Pleasure & Play", days: "Days 10-12", desc: "Reclaiming aliveness and creativity as essential tools for resilience." },
                { title: "Sustainable Productivity", days: "Days 13-14", desc: "Aligning your work with your life without the cost of burnout." },
                { title: "Work/Life Alignment", days: "Days 15-16", desc: "Using cyclical wisdom to reshape how you work and rest sustainably." },
                { title: "Embodied Leadership", days: "Days 17-18", desc: "Leading from a place of unshakeable wholeness and truth." },
                { title: "Ancestral Remembrance", days: "Days 19-20", desc: "Rerooting into the wisdom and stories that carry us." },
                { title: "Vision & Future Orientation", days: "Day 21", desc: "Embodying the next evolution of your path." }
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -left-6 top-0 h-full w-px bg-sage/20 group-hover:bg-sage transition-colors duration-700"></div>
                  <span className="text-sage text-[9px] tracking-[0.3em] uppercase font-bold mb-4 block opacity-60">{phase.days}</span>
                  <h3 className="text-2xl font-serif italic text-sage mb-6 group-hover:translate-x-2 transition-transform duration-700">{phase.title}</h3>
                  <p className="text-cream/60 font-light text-sm leading-relaxed">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 4.5 - THE DEEP DIVES (WORKSHOPS) */}
      <Section id="workshops" className="bg-cream text-ink py-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 pointer-events-none mix-blend-multiply">
          <img src="/_31.jpg" className="w-full h-full object-cover mask-fade-left" alt="" />
          <div className="absolute inset-0 bg-gradient-to-r from-cream to-transparent"></div>
        </div>
        <div className="container-narrow">
          <div className="text-center mb-32">
            <p className="text-sage text-[10px] tracking-[0.5em] uppercase mb-6 font-bold">The Deep Dives</p>
            <h2 className="text-7xl md:text-9xl mb-10 font-medium text-burgundy">THE <span className="font-serif italic text-burgundy">workshops</span></h2>
            <p className="text-ink/40 max-w-2xl mx-auto font-light italic text-lg">Detailed explorations led by our expert practitioners.</p>
          </div>
          
          <div className="space-y-12">
            {[
              { 
                name: "Amira ElBeialy", 
                title: "Magnetize & Manifest", 
                desc: "A guided session designed to help you clarify your true intention and uncover what may be unconsciously blocking its fulfillment. Together, we’ll identify and release limiting beliefs and internal resistance, and recalibrate your nervous system to feel safe receiving what you desire.",
                duration: "75 mins"
              },
              { 
                name: "Bahaa Abou Dargham", 
                title: "2027 and Beyond: The End of the Planning Era", 
                desc: "According to Human Design, a new cycle begins in 2027 — the Sleeping Phoenix. This transition marks a fundamental shift in how we survive, relate, and make decisions. This session offers a grounded yet expansive perspective on this invitation into a new way of being.",
                duration: "75 mins"
              },
              { 
                name: "Julia Stadler & Maya Abou Chedid", 
                title: "The Living Bridge", 
                desc: "Where Psychotherapy Meets Shamanic Practice & Expanded States. Exploring the meeting point of Spirit and Psyche, nervous system capacity, and integrating the plausible while holding the mystical.",
                duration: "75 mins"
              },
              { 
                name: "Yāna Nancy Sebaali", 
                title: "From Healing to Living: Cyclical Intelligence", 
                desc: "Exploring cyclical intelligence as a way of living — an embodied understanding that growth unfolds through seasons of expansion and contraction, clarity and tenderness, sovereignty and rest.",
                duration: "60 mins"
              },
              { 
                name: "Sara Abiqwa", 
                title: "Living As Your Higher Self", 
                desc: "An invitation to remember the deeper awareness within you, the part that sees clearly and chooses consciously. Step into personal agency, responsibility, and embodied leadership.",
                duration: "75 mins"
              },
              { 
                name: "Imad Naassi", 
                title: "Somatic Breathwork", 
                desc: "A journey to release exhaustion, suppressed emotions, and reclaim wholeness through breath and somatic guidance.",
                duration: "75 mins"
              },
              { 
                name: "Rasha AlShaar", 
                title: "Play as Practice", 
                desc: "A somatic conscious movement experience to explore play, pleasure, and aliveness as essential elements of regulation and resilience.",
                duration: "45 mins"
              },
              { 
                name: "Raghdan", 
                title: "Future Self Embodiment", 
                desc: "Cultivating energetic clarity as you step into new chapters, aligning your inner frequency with the life you desire so you can begin living it now.",
                duration: "60 mins"
              },
              { 
                name: "Soraya Aouad (Sunchef)", 
                title: "From Intimidation to Empowerment", 
                desc: "Falling in love with cooking as a grounded practice of self-care, self-leadership, and embodied discipline — not perfection.",
                duration: "45 mins"
              },
              { 
                name: "Alyah Al Jasser", 
                title: "Reclaiming Work/Life Balance", 
                desc: "Using the wisdom of the menstrual cycle to transform the way women work and live, reducing burnout and cultivating a more sustainable approach.",
                duration: "75 mins"
              },
              { 
                name: "HayaYasmeen", 
                title: "Dharma Marga: Discover Your Life Path", 
                desc: "Using Life Path numbers as a practical tool for clarity and direction, including a questionnaire and fearless embodiment exercise.",
                duration: "75 mins"
              },
              { 
                name: "Mira Tabbara", 
                title: "Level Up Your Business", 
                desc: "Mindset and business tools to help solopreneurs structure offers, attract aligned clients, and build a sustainable, profitable business.",
                duration: "60 mins"
              },
              { 
                name: "Attia", 
                title: "Astrocartography for Conscious Travel", 
                desc: "How to use Astrocartography and Human Design to make more intentional travel and relocation decisions that truly support your energy.",
                duration: "75 mins"
              },
              { 
                name: "Sarah Berjaoui", 
                title: "Understanding Relationships & Polarity", 
                desc: "Exploring emotional patterns, masculine presence, and feminine polarity through Human Design, attachment theory, and Family Constellations.",
                duration: "75 mins"
              },
              { 
                name: "Rawan Roshni", 
                title: "Voice Liberation & Re-Rooting", 
                desc: "Working with the voice as an instrument of transformation, re-rooting into ancestry, authenticity, and collective liberation.",
                duration: "75 mins"
              },
              { 
                name: "Mariam Alshatti", 
                title: "Authentic Alignment", 
                desc: "A class weaving teachings, writing, and meditation to witness what is within and walk in integrity with a straight spine.",
                duration: "45 mins"
              }
            ].map((session, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group border-b border-ink/10 pb-12 last:border-0"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="max-w-2xl">
                    <p className="text-sage text-[10px] tracking-[0.2em] uppercase font-bold mb-4">{session.name}</p>
                    <h3 className="text-2xl md:text-3xl font-serif italic text-burgundy mb-4">{session.title}</h3>
                    <p className="text-ink/70 font-light leading-relaxed text-sm md:text-base">{session.desc}</p>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-block px-4 py-2 border border-ink/10 text-[10px] tracking-widest uppercase font-bold text-ink/40">
                      {session.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* THE FACULTY SECTION */}
      <Section id="faculty" className="bg-ink text-cream py-48">
        <div className="container-narrow">
          <div className="text-center mb-32">
            <p className="text-sage text-[10px] tracking-[0.5em] uppercase mb-6 font-bold">The Faculty</p>
            <h2 className="text-7xl md:text-9xl mb-10 font-medium">OUR <span className="font-serif italic text-sage text-sage">practitioners</span></h2>
            <p className="text-cream/40 max-w-2xl mx-auto font-light italic text-lg">A collective of teachers, mystics, healers, and visionaries rooted in shared wisdom.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-24 md:gap-y-32">
            {[
              { name: "Amira ElBeialy", title: "Magnetize & Manifest" },
              { name: "Bahaa Abou Dargham", title: "Human Design Guide" },
              { name: "Julia Stadler", title: "Psychotherapist" },
              { name: "Maya Abou Chedid", title: "Shamanic Practitioner" },
              { name: "Yāna Nancy Sebaali", title: "Cyclical Intelligence" },
              { name: "Sara Abiqwa", title: "Higher Self Guide" },
              { name: "Imad Naassi", title: "Breathwork Facilitator" },
              { name: "Rasha AlShaar", title: "Movement Experience" },
              { name: "Raghdan", title: "Energetic Clarity" },
              { name: "Soraya Aouad", title: "Sunchef" },
              { name: "Alyah Al Jasser", "title": "Cycle Awareness" },
              { name: "HayaYasmeen", title: "Dharma Marga" },
              { name: "Mira Tabbara", title: "Business Mentor" },
              { name: "Attia", title: "Astrocartography" },
              { name: "Sarah Berjaoui", title: "Relationship Expert" },
              { name: "Rawan Roshni", title: "Voice Liberation" },
              { name: "Mariam Alshatti", title: "Authentic Alignment" }
            ].map((practitioner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.1 }}
                className={`text-center group ${i % 2 !== 0 ? 'lg:translate-y-16' : ''}`}
              >
                <div className="relative mb-10 w-fit mx-auto">
                  {/* Subtle outer animated rings */}
                  <div className="absolute -inset-4 border border-sage/20 rounded-full scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-1000"></div>
                  <div className="absolute -inset-2 border border-cream/10 rounded-full scale-100 group-hover:scale-95 transition-transform duration-1000 delay-100"></div>
                  
                  {/* The red circle */}
                  <div className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full bg-gradient-to-br from-burgundy to-[#4a0a02] flex items-center justify-center border border-burgundy/40 shadow-[0_0_30px_rgba(123,17,3,0.15)] group-hover:shadow-[0_0_50px_rgba(123,17,3,0.3)] transition-all duration-700 relative z-10">
                     <span className="text-sage font-serif italic text-4xl md:text-5xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">{practitioner.name.charAt(0)}</span>
                  </div>
                </div>
                
                <div className="relative flex flex-col items-center">
                  <div className="w-px h-6 bg-cream/10 mb-6 group-hover:h-10 group-hover:bg-sage/40 transition-all duration-700"></div>
                  <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-bold text-cream mb-3">{practitioner.name}</p>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-cream/40 font-light">{practitioner.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 5 - WHAT MAKES THIS DIFFERENT */}
      <Section className="bg-burgundy text-cream py-48 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/4 -left-20 text-[20vw] font-serif italic vertical-text text-sage">Practice</div>
          <div className="absolute bottom-1/4 -right-20 text-[20vw] font-serif italic vertical-text text-sage">Integration</div>
        </div>

        <div className="container-narrow relative z-10">
          <div className="text-center mb-32">
            <p className="text-sage text-[10px] tracking-[0.5em] uppercase mb-6 font-bold">The Distinction</p>
            <h2 className="text-7xl md:text-9xl mb-10 font-medium text-cream">WHAT MAKES THIS <br /><span className="font-serif italic text-sage">different</span></h2>
            <p className="text-cream/40 max-w-xl mx-auto font-light italic text-lg leading-relaxed">This is not another healing container. It is a return to living what you already know.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-24 mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-12 border border-cream/5 bg-cream/[0.02]"
            >
              <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-sage mb-12 flex items-center gap-4">
                <span className="w-8 h-px bg-sage/30"></span>
                This is not
              </h3>
              <ul className="space-y-6">
                {[
                  "A healing immersion",
                  "A spiritual detox",
                  "A performance of spirituality",
                  "A bypassing space",
                  "A guru-led hierarchy",
                  "A processing loop",
                  "A manifestation challenge"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-6 text-cream/70 font-medium group text-xl">
                    <div className="w-1.5 h-1.5 bg-sage group-hover:bg-cream transition-colors"></div>
                    <span className="font-serif italic group-hover:text-cream transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-12 border border-sage/10 bg-sage/[0.02]"
            >
              <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-sage mb-12 flex items-center gap-4">
                <span className="w-8 h-px bg-sage/30"></span>
                This is
              </h3>
              <ul className="space-y-6">
                {[
                  "Real life embodiment",
                  "Daily lived practice",
                  "Slow, honest integration",
                  "Capacity-building over intensity",
                  "Community without dependency",
                  "Nervous system grounded work",
                  "Living the teachings imperfectly and humanly"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-6 text-cream font-medium group text-xl">
                    <Check className="w-5 h-5 text-sage group-hover:text-cream transition-colors" />
                    <span className="font-serif italic">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-cream text-ink p-16 md:p-24 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-sage"></div>
            <h3 className="text-4xl md:text-5xl font-serif italic text-burgundy mb-12">This is for you if:</h3>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto text-left">
              {[
                "You are tired of outsourcing your power",
                "You've done years of healing but want to live it now",
                "You want structure without rigidity",
                "You want community without hierarchy",
                "You want growth without burnout",
                "You seek integration over inspiration"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-ink font-medium text-xl list-none">
                  <span className="text-sage font-serif italic text-2xl leading-none">0{i+1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* PHOTO GALLERY */}
      <Section className="bg-paper text-ink py-48 overflow-hidden">
        <div className="container-narrow text-center mb-32">
          <p className="text-sage text-[10px] tracking-[0.5em] uppercase mb-6 font-bold">The Experience</p>
          <h2 className="text-6xl md:text-8xl mb-10 font-medium text-burgundy">GLIMPSES OF <br /><span className="font-serif italic text-burgundy">the journey</span></h2>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory px-8 md:px-0 mx-auto max-w-[100vw] lg:max-w-[80vw]">
          {[
            "/_304.jpg",
            "/_31.jpg",
            "/_310.jpg",
            "/_316.jpg",
            "/_401.jpg",
            "/_418.jpg",
            "/_423.jpg",
            "/_47.jpg"
          ].map((src, i) => (
            <motion.div
              key={i}
              className="shrink-0 w-[85vw] md:w-[600px] aspect-[4/3] snap-center rounded-sm overflow-hidden border border-ink/5"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src={src} 
                alt="Retreat moment" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
              />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SECTION 6 - PRACTICAL DETAILS */}
      <Section className="bg-cream text-ink py-48 border-b border-ink/5">
        <div className="container-narrow">
          <div className="text-center mb-32">
            <p className="text-sage text-[10px] tracking-[0.5em] uppercase mb-6 font-bold">The Logistics</p>
            <h2 className="text-7xl md:text-9xl mb-10 font-medium text-burgundy">PRACTICAL <span className="font-serif italic text-burgundy">details</span></h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            <div className="p-16 bg-cream group hover:bg-paper transition-colors duration-700">
              <p className="text-sage text-[9px] tracking-[0.3em] uppercase font-bold mb-8 opacity-60">Dates</p>
              <p className="text-3xl font-serif italic text-burgundy mb-4">March 23 – April 12</p>
              <p className="text-xs text-ink/40 font-medium tracking-widest uppercase">Easter Integration Pause: April 3–6</p>
            </div>
            <div className="p-16 bg-cream group hover:bg-paper transition-colors duration-700">
              <p className="text-sage text-[9px] tracking-[0.3em] uppercase font-bold mb-8 opacity-60">Format</p>
              <p className="text-3xl font-serif italic text-burgundy mb-4">1–2 live sessions per day</p>
              <p className="text-xs text-ink/40 font-medium tracking-widest uppercase">Replay access included</p>
            </div>
            <div className="p-16 bg-cream group hover:bg-paper transition-colors duration-700">
              <p className="text-sage text-[9px] tracking-[0.3em] uppercase font-bold mb-8 opacity-60">Investment</p>
              <p className="text-3xl font-serif italic text-burgundy mb-4">Secure Your Spot</p>
              <p className="text-xs text-ink/40 font-medium tracking-widest uppercase">Payment plans available</p>
            </div>
          </div>

          <div className="mt-16 p-12 border border-ink/10 bg-paper">
            <p className="text-sage text-[9px] tracking-[0.3em] uppercase font-bold mb-6 opacity-60">Session Times (Dubai)</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { day: "Mon – Thu", time: "9:00 PM" },
                { day: "Fridays", time: "11:00 AM" },
                { day: "Saturdays", time: "11:00 AM & 12:30 PM" },
                { day: "Sundays", time: "11:00 AM & 7:30 PM" },
              ].map((slot, i) => (
                <div key={i}>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-ink/40 mb-2">{slot.day}</p>
                  <p className="text-xl font-serif italic text-burgundy">{slot.time}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-32 text-center">
            <Link to="/checkout" className="contents">
              <Button variant="primary" className="mx-auto scale-110">Secure Your Spot Now</Button>
            </Link>
            <p className="mt-8 text-[10px] tracking-[0.3em] uppercase font-bold text-ink/30">Early bird pricing ends soon</p>
          </div>
        </div>
      </Section>

      {/* THE ORIGIN OF PHOENIX RISING */}
      <Section className="bg-ink text-cream py-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[40vw] font-serif italic text-sage">Origin</div>
        </div>
        
        <div className="container-narrow relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
               <div className="aspect-[4/5] md:aspect-square overflow-hidden rounded-sm relative z-10">
                 <img src="/_316.jpg" className="w-full h-full object-cover" alt="Origin of Phoenix Rising" />
               </div>
               <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-sage/10 rounded-full blur-3xl"></div>
            </div>

            <div className="pl-4 md:pl-12">
              <p className="text-sage text-[10px] tracking-[0.5em] uppercase mb-8 font-bold">The Story</p>
              <h2 className="text-5xl md:text-6xl font-medium text-cream leading-tight mb-16">THE ORIGIN <br /><span className="font-serif italic text-sage">of Phoenix</span></h2>
              
              <div className="relative mb-12">
                <span className="absolute -top-16 -left-8 text-[100px] font-serif text-cream/10 leading-none">“</span>
                <p className="text-2xl lg:text-3xl font-serif italic text-cream leading-relaxed relative z-10">
                  A day before the 8.8.8 portal, I found myself wide awake all night. My body was pulsing, and I surrendered to the experience.
                </p>
              </div>

              <div className="space-y-6 text-base font-light leading-relaxed text-cream/70 mb-12">
                <p>For the past few months, I had been asking for a new path to reveal itself, one aligned with what this moment needs: a heartfelt purpose centered on people, community, and greater service.</p>
                <p>Over the years, I've explored many teachings, from energy healing and Human Design to ancestral wisdom, to better understand our human and energetic bodies. Phoenix Rising was born from this journey.</p>
              </div>

              <div className="pt-8 border-t border-cream/10 flex items-center gap-8">
                <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-sage" />
                </div>
                <p className="text-sage text-sm font-medium italic">Bringing together 17 teachers, the fourth edition creates a space to connect and support one another on our paths of awakening.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-burgundy text-cream py-48 relative overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-24 items-end mb-32">
            <div>
              <div className="mb-12">
                <img src="/logo-white.png" alt="Phoenix Rising Logo" className="w-64 md:w-96 object-contain mb-12" />
                <h2 className="text-6xl md:text-8xl font-medium leading-[0.85]">21 DAYS <br /><span className="font-serif italic">of living.</span></h2>
              </div>
              <div className="flex flex-wrap gap-x-12 gap-y-6 text-[10px] tracking-[0.4em] uppercase font-bold opacity-40">
                <a href="#" className="hover:text-sage hover:opacity-100 transition-all">Instagram</a>
                <a href="#" className="hover:text-sage hover:opacity-100 transition-all">Contact</a>
                <a href="#" className="hover:text-sage hover:opacity-100 transition-all">Privacy Policy</a>
                <a href="#" className="hover:text-sage hover:opacity-100 transition-all">Terms of Service</a>
              </div>
            </div>
            <div className="md:text-right">
              <p className="text-sage font-serif italic text-2xl mb-8">"You need the capacity to live what you already understand."</p>
              <Link to="/checkout" className="contents">
                <Button variant="primary" className="bg-cream text-burgundy hover:bg-sage hover:text-burgundy md:ml-auto">Secure Your Spot</Button>
              </Link>
            </div>
          </div>
          
          <div className="pt-12 border-t border-cream/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[9px] tracking-[0.3em] uppercase font-bold opacity-20">© 2026 PHOENIX RISING. ALL RIGHTS RESERVED.</p>
            <div className="flex items-center gap-4 text-[9px] tracking-[0.3em] uppercase font-bold opacity-20">
              <span>Dubai, UAE</span>
              <span className="w-1 h-1 bg-cream rounded-full"></span>
              <span>Global Journey</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
