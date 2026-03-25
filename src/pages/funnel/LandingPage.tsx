import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown, Quote, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Section, Button } from "../../components/Common";

export default function LandingPage() {
  const testimonials = [
    {
      text: "The experience of PR overall was so beyond my expectations. I felt held, supported, deeply seen without even showing myself, and deeply nourished in my heart & soul throughout every single session... I know I'll be revisiting these exact same recordings depending on where I'm at.",
      author: "Anonymous"
    },
    {
      text: "Thank you Maria for your honesty and authenticity as usual. Thank you for reminding me that even in the darkest times (where I honestly lost faith in humanity) I should not give up and I should challenge myself, now more than ever, to stay connected to the divine, because this is the only way to make change in this world.",
      author: "Lea"
    },
    {
      text: "I didn't have the chance to attend the sessions live but I watched 3 in the replay last night & did the prayer this morning while on my way to work. I absolutely loved the prayer. I had goosebumps through it all... Thank you for holding & offering that space. God knows I needed this prayer. It's what the world needs.",
      author: "Michael"
    },
    {
      text: "I loved Maria's opening. It was touching & insightful. I loved the part where she said that our region is the throat chakra of the world... I also relate that the darkness we are experiencing could be a part of a shedding process. Maria was eloquent, soft & divine.",
      author: "Lea"
    },
    {
      text: "I just went through Maria's opening ceremony video in the recordings and I felt my feelings accurately articulated for the first time since this dreadful week started. I cried and let out so many repressed emotions. Thank you so much for sharing your magic with us.",
      author: "Carla"
    },
    {
      text: "Thank you Elie for a great session! I'll be definitely listening to it again when finding inner peace to absorb what you said fully. Feeling centered after today's sessions, and I actually let myself grieve deeply to Maria's.",
      author: "Sandra"
    },
    {
      text: "The sessions have been immensely impactful! The first session struck an exact chord. This feeling, that someone so deeply understands, without me saying a word. Such an essential offering to this specific time in the region, grounding.",
      author: "Nour"
    },
    {
      text: "Every moment of this session was insightful. Sara is a brilliant coach who truly knows how to connect with her audience, tap into their potential, and leave a lasting impact. I only wish the session was longer - it flew by in an instant!",
      author: "Nicole"
    },
    {
      text: "This session brought so much validation to so many scattered feelings inside me, helping me to bring power from within in all the chaos around me in Lebanon. This is beautiful: Rising Phoenix. Thank you Maria. Love & Light.",
      author: "Nadine"
    }
  ];

  const testimonialRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (testimonialRef.current) {
      const { scrollLeft, offsetWidth } = testimonialRef.current;
      const index = Math.round(scrollLeft / offsetWidth);
      setActiveIndex(index);
    }
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (testimonialRef.current) {
      const { scrollLeft, offsetWidth } = testimonialRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - offsetWidth : scrollLeft + offsetWidth;
      testimonialRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen selection:bg-sage/30 bg-cream">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-cream">
        <div className="flex items-center">
          <img
            src="/White notext.png"
            alt="Phoenix Rising"
            className="h-16 md:h-20 object-contain"
            fetchPriority="high"
          />
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
              fetchPriority="high"
              loading="eager"
              decoding="async"
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
              fetchPriority="high"
              loading="eager"
            />
            
            <p className="text-cream/70 tracking-[0.3em] uppercase font-bold text-[9px] mb-8">
              April 11 – May 2nd <span className="mx-2 opacity-50">|</span> Live Daily Sessions <span className="mx-2 opacity-50">|</span> Integration Focused
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
              <Link to="/phoenix-rising/checkout" className="contents">
                <Button variant="cream">Join the Journey</Button>
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
      <Section id="core-shift" className="bg-paper py-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-burgundy/5 -skew-x-12 translate-x-1/2"></div>
        <div className="container-narrow relative z-10">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-12 lg:col-span-5 md:sticky md:top-32">
              <img src="/logo-orange.png" alt="Phoenix Rising Summit" className="w-full max-w-xs md:max-w-sm object-contain mb-10" loading="lazy" decoding="async" />
              <p className="text-sage text-[10px] tracking-[0.5em] uppercase mb-8 font-bold">The Core Shift</p>
              <h2 className="text-6xl md:text-8xl font-medium leading-tight mb-12 text-burgundy">THE CORE <br /><span className="font-serif italic text-burgundy">shift</span></h2>
              <div className="w-24 h-px bg-burgundy/20 mb-12"></div>
              <div className="space-y-6 text-ink/60 font-light leading-relaxed mb-6">
                <p className="text-xl font-serif italic text-burgundy/80 leading-relaxed">
                  "We are back with a very special edition of Phoenix Rising IV. And this time… it meets us in a very different moment."
                </p>
                <p>
                  Many of us are witnessing, experiencing and holding, grief, uncertainty, and intensity in ways we haven’t before. And yet, here we are.
                </p>
                <p>
                  In the past, we gathered for two intense days. This time, we are stretching again into 21 days creating space not just for inspiration, but for integration. Not just for awakening, but for stability. Not just for expansion, but for capacity.
                </p>
                <p>
                  If you’re new here, hi, welcome. Phoenix Rising began as a space to gather. To connect spiritual and wellness communities across the region. To create a space where wisdom is shared horizontally, not hierarchically.
                </p>
                <p className="text-ink/80 font-medium italic border-l-2 border-sage/40 pl-4">
                  This edition carries an even deeper intention. To remain connected to what is sacred, even in dark times. This is not another healing container. It is a return to living what you already know, even when life feels uncertain.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-12 lg:col-span-7 space-y-32">
              <div className="relative">
                <div className="absolute -left-8 top-0 w-px h-full bg-ink/5"></div>
                <div className="pl-12">
                  <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-sage mb-12">The Philosophy</h3>
                  <div className="space-y-8">
                    <p className="text-lg font-light leading-relaxed text-ink/70">
                      21 Days of Embodied Living is a daily live container devoted to integration. Over three weeks, we enter the practice of being with ourselves, fully. With our bodies. With our hearts. With what is actually alive and present.
                    </p>
                    <p className="text-3xl md:text-4xl font-medium leading-snug text-ink">
                      We learn to stay with what feels overwhelming. <br />
                      To listen to our intuition. <br />
                      To move with life instead of against it.
                    </p>
                    <p className="text-2xl font-serif italic text-burgundy">
                      To meet ourselves in truth, in expression, in relationship. And to live, not just know, what we are here for.
                    </p>
                    <p className="text-ink/40 font-light italic tracking-wide uppercase text-[11px]">Devoted to integration. Practice over consumption.</p>
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
                  className="w-full h-full object-cover object-top opacity-80 hover:scale-105 transition-transform duration-[3s]"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 2 - THE CORE POSITIONING */}
      <Section className="relative bg-burgundy text-cream py-48 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/_418.jpg" alt="Atmospheric Background" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" loading="lazy" decoding="async" />
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
            <h2 className="text-3xl md:text-5xl mb-12 font-medium leading-tight text-cream">
              In a time of nervous system overload, of collapsing structures, of constant external noise… this space is about one thing:
            </h2>
            <p className="text-5xl md:text-7xl font-serif italic mb-12 text-sage">Embodiment.</p>
            <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-cream/80">
              <p>Not learning more. Not fixing more. Not escaping what is here.</p>
              <p className="text-cream font-medium">But strengthening your inner compass and building the capacity to stay with yourself in the midst of it all.</p>
              <p>Over 21 days, through one live session a day, we practice. We slow down enough to integrate. We build capacity instead of chasing intensity. We create internal stability even when the external world is unstable. We bring structure to what has felt overwhelming. We give roots to what has only existed as vision.</p>
              <p className="text-2xl font-serif italic text-cream pt-8">This is about living your work. Living your values. Living your knowing. Not when things are perfect. But now.</p>
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
                <p>With guidance from practitioners, many rooted in the Middle East, this journey brings together teachers, mystics, healers, and visionaries who carry not only the medicine of their craft, but the lived reality of this region. This is not wisdom removed from context. This is wisdom lived in real time.</p>
                <p>For too long, we sought answers outside of our lands. This container is a reminder: the wisdom has always lived among us. And in times like these, it is our connection to each other that becomes the medicine.</p>
                <p className="text-xl font-serif italic text-burgundy pt-4">A return home to ourselves, to each other, to the intelligence that has always been ours.</p>
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
              <p className="text-cream/80 font-light italic leading-relaxed mb-4 text-base md:text-lg">Each day features one live session. One focus. One embodied doorway.</p>
              <p className="text-cream font-light leading-relaxed text-base md:text-lg">This is here to help you walk your talk, and embody that which you already know.</p>
            </div>
            
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-x-12 gap-y-20">
              {[
                { title: "Nervous System Regulation", desc: "Building the physiological capacity to meet intensity with stability." },
                { title: "Human Design & Gene Keys", desc: "Understanding your unique mechanics and building radical self-trust." },
                { title: "Astrology & Timing", desc: "Aligning with the intelligence of celestial rhythms and personal cycles." },
                { title: "Cyclical Living", desc: "Working with your energy instead of against it for sustainable output." },
                { title: "Voice & Truth", desc: "Liberating your authentic expression and speaking from the core." },
                { title: "Relational Polarity", desc: "Navigating the dynamics of connection, boundaries, and attraction." },
                { title: "Purpose & Dharma", desc: "Finding direction and following the threads of your soul's work." },
                { title: "Creativity & Pleasure", desc: "Nourishing your aliveness as an act of resistance and resilience." },
                { title: "Embodied Leadership", desc: "Leading a life of integrity from the inside out." },
                { title: "Ancestral Memory", desc: "Connecting to the collective healing and wisdom of those before us." },
                { title: "Visioning the Future", desc: "Stepping into who you are becoming within the shifting world." }
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative"
                >
                  <div className="absolute -left-6 top-0 h-full w-px bg-sage/30 group-hover:bg-sage transition-colors duration-700"></div>
                  <span className="text-sage/90 text-[10px] tracking-[0.3em] uppercase font-bold mb-4 block">Doorway 0{i+1}</span>
                  <h3 className="text-2xl font-serif italic text-cream mb-6 group-hover:translate-x-2 transition-transform duration-700">{phase.title}</h3>
                  <p className="text-cream/90 font-light text-base leading-relaxed">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 4.5 - THE DEEP DIVES (WORKSHOPS) */}
      <Section id="workshops" className="bg-cream text-ink py-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 pointer-events-none mix-blend-multiply">
          <img src="/_31.jpg" className="w-full h-full object-cover mask-fade-left" alt="" loading="lazy" decoding="async" />
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
                className={`text-center group ${i % 2 !== 0 ? 'lg:translate-y-16' : ''} ${i === 16 ? 'col-span-2 lg:col-span-4 mt-8 lg:mt-0' : ''}`}
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
              className="relative p-12 border border-cream/20 bg-cream/[0.04] shadow-2xl rounded-sm backdrop-blur-sm"
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
              className="relative p-12 border border-sage/30 bg-sage/[0.08] shadow-[0_0_50px_rgba(163,196,188,0.1)] rounded-sm backdrop-blur-sm"
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

      {/* SECTION 5.5 - TESTIMONIALS */}
      <Section className="bg-ink text-cream py-48 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/4 -right-10 text-[20vw] font-serif italic vertical-text text-sage">Voices</div>
        </div>
        <div className="container-narrow relative z-10">
          <div className="text-center mb-32">
            <h2 className="text-6xl md:text-8xl mb-10 font-medium text-cream">
              Client <br />
              <span className="font-serif italic text-sage">Reflections</span>
            </h2>
          </div>
          <div className="relative group/carousel">
            <div 
              ref={testimonialRef}
              onScroll={handleScroll}
              className="flex gap-6 md:gap-8 overflow-x-auto pb-16 pt-4 hide-scrollbar snap-x snap-mandatory -mx-8 px-8 md:mx-0 md:px-0"
            >
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.1 }}
                  className="shrink-0 w-[85vw] md:w-[450px] snap-center bg-cream/[0.03] border border-cream/10 p-10 flex flex-col justify-between h-auto min-h-[400px] group hover:border-sage/40 hover:bg-cream/[0.04] transition-all duration-700 rounded-sm cursor-grab active:cursor-grabbing relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sage/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-sage/10 transition-colors"></div>
                  <div>
                    <Quote className="w-8 h-8 text-sage mb-8 opacity-20 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700" />
                    <p className="text-cream/90 font-light leading-relaxed text-base md:text-lg italic mb-10 relative z-10">"{testimonial.text}"</p>
                  </div>
                  <div className="flex items-center gap-5 border-t border-cream/10 pt-8 mt-auto relative z-10">
                    <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0 border border-sage/20 group-hover:border-sage/40 transition-colors">
                      <span className="text-sage font-serif italic text-base">{testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-[11px] tracking-[0.2em] uppercase font-bold text-cream group-hover:text-sage transition-colors">{testimonial.author}</p>
                      <p className="text-[9px] tracking-[0.1em] uppercase text-cream/30 font-light mt-1">Graduate</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={() => scrollCarousel('left')}
                className="w-12 h-12 rounded-full border border-cream/10 flex items-center justify-center hover:bg-cream hover:text-burgundy transition-all duration-500 group/btn"
              >
                <ChevronLeft className="w-5 h-5 opacity-50 group-hover/btn:opacity-100" />
              </button>
              <button 
                onClick={() => scrollCarousel('right')}
                className="w-12 h-12 rounded-full border border-cream/10 flex items-center justify-center hover:bg-cream hover:text-burgundy transition-all duration-500 group/btn"
              >
                <ChevronRight className="w-5 h-5 opacity-50 group-hover/btn:opacity-100" />
              </button>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-3 mt-12">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const container = testimonialRef.current;
                    if (container) {
                      const scrollAmount = i * (container.offsetWidth * 0.85); // Approximate for mobile
                      container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
                    }
                  }}
                  className={`h-1 transition-all duration-500 rounded-full ${
                    activeIndex === i ? 'w-8 bg-sage' : 'w-2 bg-cream/10 hover:bg-cream/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 6 - PRACTICAL DETAILS */}
      <Section className="bg-white text-ink py-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sage/5 -skew-x-12 translate-x-1/2"></div>
        <div className="container-narrow relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-16">
              <div>
                <p className="text-sage text-[10px] tracking-[0.5em] uppercase mb-8 font-bold">The Logistics</p>
                <h2 className="text-5xl md:text-6xl lg:text-7xl mb-12 font-medium text-burgundy leading-[0.9]">
                  PRACTICAL <br /><span className="font-serif italic text-burgundy">details</span>
                </h2>
                <p className="text-ink/60 font-light text-base lg:text-lg leading-relaxed mb-8">
                  Everything you need to step into the container.
                </p>
                <div className="w-24 h-px bg-burgundy/20 mt-8 mb-12"></div>
              </div>

              {/* THE CONTAINER (Moved to Left Side) */}
              <div className="space-y-8">
                <div>
                  <p className="text-2xl md:text-3xl font-serif italic text-burgundy mb-4 leading-tight">Doors close shortly after we start.</p>
                  <p className="text-ink/50 text-sm leading-relaxed italic max-w-sm">We walk this together from the beginning. Join the optional WhatsApp group for community support.</p>
                </div>
                
                <ul className="grid sm:grid-cols-1 gap-y-4">
                  {[
                    "Access to all 21 days of live sessions",
                    "Replay access to integrate",
                    "A space to practice — not just consume",
                    "A community walking this with you"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-ink/70 font-light text-sm">
                      <div className="w-1.5 h-1.5 mt-1.5 bg-sage/30 rounded-full shrink-0 border border-sage/50"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-burgundy text-cream p-10 md:p-16 rounded-sm shadow-[0_40px_100px_rgba(123,17,3,0.15)] relative overflow-hidden group">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10 space-y-16">
                  {/* Row 1: Dates */}
                  <div className="pb-12 border-b border-cream/10">
                    <p className="text-sage text-[9px] tracking-[0.4em] uppercase font-bold mb-6">Dates & Flow</p>
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      <p className="text-4xl font-serif italic text-cream leading-tight">April 11 – May 2</p>
                      <div className="space-y-3 text-cream/70 font-light text-sm leading-relaxed">
                        <p>• 1–2 live sessions per day.</p>
                        <p>• Mondays & Fridays off.</p>
                        <p>• Replay access available for your own pace.</p>
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Investment */}
                  <div className="pb-12 border-b border-cream/10">
                    <p className="text-sage text-[9px] tracking-[0.4em] uppercase font-bold mb-6">The Investment</p>
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      <div>
                        <p className="text-5xl font-serif italic text-cream mb-2">333 AED</p>
                        <p className="text-[9px] tracking-[0.2em] uppercase font-bold text-sage">Early Bird until April 4</p>
                      </div>
                      <div className="space-y-3 text-cream/70 font-light text-sm leading-relaxed">
                        <p className="flex justify-between">Full Investment: <span className="text-cream font-medium">444 AED</span></p>
                        <p className="flex justify-between">Payment Plan: <span className="text-cream font-medium">222 AED × 2</span></p>
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA inside the card at the bottom */}
                  <div className="pt-8 text-center">
                    <Link to="/phoenix-rising/checkout" className="inline-block w-full md:w-auto">
                      <button className="bg-cream text-burgundy px-12 py-5 rounded-full text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-sage hover:text-burgundy transition-all duration-700 w-full md:w-auto shadow-2xl">
                        Secure Your Spot Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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
                 <img src="/_316.jpg" className="w-full h-full object-cover" alt="Origin of Phoenix Rising" loading="lazy" decoding="async" />
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
                <p>Over the years, I’ve explored many teachings, from energy healing and Human Design to ancestral wisdom, to better understand our human and energetic bodies. Phoenix Rising was born from this journey.</p>
                <p>Its intention is to serve those on their healing paths, to connect spiritual and wellness communities across the region, and to share the wisdom of teachers who truly understand our stories.</p>
                <p className="text-xl font-serif italic text-cream pt-4">This is not just 21 days of sessions. It is 21 days of returning to yourself.</p>
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
      <footer className="bg-burgundy text-cream pt-48 pb-32 relative overflow-hidden">
        {/* Massive Watermark */}
        <div className="absolute top-[20%] left-0 w-full flex justify-center pointer-events-none opacity-[0.03]">
          <h2 className="text-[30vw] font-serif italic whitespace-nowrap">Phoenix</h2>
        </div>
        
        <div className="container-narrow relative z-10 px-8">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-32">
            <div className="lg:col-span-8 border-l border-cream/10 pl-8 md:pl-16 relative">
              <div className="absolute -left-1 top-0 w-2 h-2 rounded-full bg-sage"></div>
              
              <img src="/logo-white.png" alt="Phoenix Rising Logo" className="w-24 md:w-32 object-contain opacity-80 mb-16" loading="lazy" decoding="async" />
              
              <div className="mb-16">
                <h2 className="text-7xl md:text-8xl lg:text-[8rem] font-medium leading-[0.85] tracking-tight">
                  21 DAYS <br />
                  <span className="font-serif italic text-sage block mt-4">of Embodied Living.</span>
                </h2>
                <div className="flex items-center gap-6 mt-12">
                  <div className="w-12 h-px bg-sage/40"></div>
                  <p className="text-sage text-[11px] tracking-[0.5em] uppercase font-bold">April 11 – May 2nd</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-x-12 gap-y-6 text-[10px] tracking-[0.4em] uppercase font-bold opacity-50 pt-8">
                <a
                  href="https://www.instagram.com/maria.amiouni"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cream hover:opacity-100 transition-all duration-500"
                >
                  Instagram
                </a>
                <a href="mailto:mariaamiouni@gmail.com" className="hover:text-cream hover:opacity-100 transition-all duration-500">
                  Contact
                </a>
                <Link to="/privacy" className="hover:text-cream hover:opacity-100 transition-all duration-500">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-cream hover:opacity-100 transition-all duration-500">
                  Terms of Service
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-4 lg:text-right flex flex-col justify-end lg:pt-32 h-full">
              <div className="py-16 px-8 md:py-24 md:px-12 border border-cream/10 bg-cream/[0.02] backdrop-blur-sm rounded-sm min-h-[320px] md:min-h-[420px]">
                <p className="text-sage font-serif italic text-3xl mb-6">Come as you are. <br/>Stay with yourself.</p>
                <p className="text-cream/60 text-[10px] tracking-[0.3em] uppercase font-bold mb-10">Walk this with us. We begin April 11.</p>
                
                <Link to="/phoenix-rising/checkout" className="contents">
                  <button className="px-10 py-5 rounded-full border border-cream/20 bg-cream/5 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-cream hover:text-burgundy transition-all duration-700 w-full hover:shadow-[0_0_30px_rgba(245,242,237,0.2)]">
                    Secure Your Spot
                  </button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] tracking-[0.4em] uppercase font-bold text-cream/30">
            <p>© 2026 PHOENIX RISING. ALL RIGHTS RESERVED.</p>
            <div className="flex items-center gap-6">
              <span>Dubai, UAE</span>
              <span className="w-1 h-1 bg-sage/50 rounded-full"></span>
              <span>Global Journey</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
