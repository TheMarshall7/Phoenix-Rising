import { Fragment, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Sparkles, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { Link } from "react-router-dom";
import { Section, Button } from "../../components/Common";
import { PHOENIX_PORTAL_SESSIONS } from "../../data/phoenixPortalSessions";

type PractitionerEntry = {
  name: string;
  title: string;
  photo?: string;
  enlargedPhoto?: string;
  photoObjectPosition?: string;
};

const PHOENIX_PRACTITIONERS: PractitionerEntry[] = [
  { name: "Maria Amiouni", title: "Spiritual Mentor & Host", photo: "/_114.jpg" },
  { name: "Alyah Al Jasser", title: "Cycle Awareness", photo: "/practitioners/alyah-al-jasser.jpg" },
  { name: "Rawan Roshni", title: "Voice Liberation", photo: "/practitioners/rawan-roshni.jpg" },
  { name: "HayaYasmeen", title: "Dharma Marga", photo: "/practitioners/haya-yasmeen.jpg" },
  { name: "Hadar Cohen", title: "Embodied Wisdom", photo: "/practitioners/hadar-cohen.png" },
  {
    name: "Imad Naassi",
    title: "Breathwork Facilitator",
    photo: "/practitioners/imad-naassi-lightbox.jpg",
    photoObjectPosition: "object-[50%_22%]",
  },
  { name: "Sara Abiqwa", title: "Higher Self Guide", photo: "/practitioners/sara-abiqwa.jpg" },
  { name: "Soraya Aouad", title: "Sunchef", photo: "/practitioners/soraya-aouad.jpg" },
  { name: "Amira ElBeialy", title: "Magnetize & Manifest", photo: "/practitioners/amira-elbeialy.jpg" },
  { name: "Caline", title: "Heart-Centered Practice", photo: "/practitioners/caline-malek.png" },
  { name: "Yāna Nancy Sebaali", title: "Cyclical Intelligence", photo: "/practitioners/yana-sebaali.jpg" },
  { name: "Rasha AlShaar", title: "Movement Experience", photo: "/practitioners/rasha-alshaar.jpg" },
  { name: "Mira Tabbara", title: "Business Mentor", photo: "/practitioners/mira-tabbara.jpg" },
  { name: "Sarah Berjaoui", title: "Relationship Expert" },
  { name: "Aude Barras", title: "Embodied Remembrance", photo: "/Aude%20Barras.jpg" },
  { name: "Julia Stadler", title: "Psychotherapist", photo: "/practitioners/julia-stadler.jpg" },
  { name: "Maya Abou Chedid", title: "Shamanic Practitioner", photo: "/practitioners/maya-abou-chedid.jpg" },
  { name: "Mariam Alshatti", title: "Authentic Alignment", photo: "/practitioners/mariam-alshatti.jpg" },
];

const ROADMAP_DOORWAYS = [
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
  { title: "Visioning the Future", desc: "Stepping into who you are becoming within the shifting world." },
] as const;

export default function LandingPage() {
  /** Curated testimonials only — full phone screenshots (chat/SMS) removed to protect privacy. */
  const testimonialImages: { src: string; alt: string }[] = [
    { src: "/Testimonials/PR-1/6.png", alt: "Phoenix Rising testimonial" },
    { src: "/Testimonials/PR-1/14.png", alt: "Phoenix Rising testimonial" },
    { src: "/Testimonials/PR-1/15.png", alt: "Phoenix Rising testimonial" },
    { src: "/Testimonials/PR-1/16.png", alt: "Phoenix Rising testimonial" },
    { src: "/Testimonials/PR-1/Testimonial.png", alt: "Phoenix Rising testimonial" },
    { src: "/Testimonials/PR-3/7.png", alt: "Phoenix Rising testimonial" },
    { src: "/Testimonials/PR-3/8.png", alt: "Phoenix Rising testimonial" },
    { src: "/Testimonials/PR-3/9.png", alt: "Phoenix Rising testimonial" },
    { src: "/Testimonials/PR-3/10.png", alt: "Phoenix Rising testimonial" },
  ];

  const testimonialRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  type Lightbox =
    | { kind: "testimonial"; src: string }
    | { kind: "practitioner"; src: string; name: string; title: string };
  const [lightbox, setLightbox] = useState<Lightbox | null>(null);

  const scrollToTestimonialIndex = (i: number) => {
    const container = testimonialRef.current;
    if (!container?.children[i]) return;
    const card = container.children[i] as HTMLElement;
    card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  const handleScroll = () => {
    const container = testimonialRef.current;
    if (!container) return;
    const viewMid = container.scrollLeft + container.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    for (let i = 0; i < container.children.length; i++) {
      const card = container.children[i] as HTMLElement;
      const cardMid = card.offsetLeft + card.offsetWidth / 2;
      const d = Math.abs(cardMid - viewMid);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    }
    setActiveIndex(best);
  };

  const scrollCarousel = (direction: "left" | "right") => {
    const next = activeIndex + (direction === "right" ? 1 : -1);
    const clamped = Math.max(0, Math.min(testimonialImages.length - 1, next));
    scrollToTestimonialIndex(clamped);
  };

  return (
    <div className="min-h-screen selection:bg-burgundy/15 bg-cream">
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[100] bg-ink/80 backdrop-blur-sm flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.kind === "practitioner" ? "Practitioner photo" : "Testimonial"}
          >
            <motion.button
              type="button"
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-cream/10 hover:bg-cream/20 text-cream flex items-center justify-center transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Close"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <X className="w-5 h-5" />
            </motion.button>

            <motion.div
              className="w-full max-w-2xl"
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 12 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.kind === "practitioner" ? lightbox.name : "Phoenix Rising testimonial"}
                className="w-full h-auto max-h-[min(85vh,920px)] object-contain object-top rounded-md border border-cream/15 shadow-2xl bg-cream mx-auto"
              />
              {lightbox.kind === "practitioner" && (
                <div className="mt-8 text-center">
                  <p className="text-cream text-lg md:text-xl font-medium tracking-wide">{lightbox.name}</p>
                  <p className="text-cream/50 text-[10px] tracking-[0.35em] uppercase mt-2">{lightbox.title}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-8 py-6 flex justify-between items-center gap-4 mix-blend-difference text-cream">
        <div className="flex items-center gap-4 md:gap-8 min-w-0 shrink">
          <Link
            to="/"
            className="flex items-center gap-2 text-[9px] md:text-[10px] tracking-[0.25em] md:tracking-[0.35em] uppercase font-bold text-cream/90 hover:text-burgundy transition-colors shrink-0"
          >
            <ChevronLeft className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" aria-hidden />
            <span className="hidden sm:inline">Main site</span>
            <span className="sm:hidden">Home</span>
          </Link>
          <img
            src="/White notext.png"
            alt="Phoenix Rising"
            className="h-12 md:h-20 object-contain object-left max-w-[min(45vw,200px)]"
            fetchPriority="high"
          />
        </div>
        <div className="hidden md:flex gap-12 text-[9px] tracking-[0.4em] uppercase font-bold">
          <a href="#roadmap" className="hover:text-burgundy transition-colors">Roadmap</a>
          <a href="#portals" className="hover:text-burgundy transition-colors">Portals</a>
          <a href="#practitioners" className="hover:text-burgundy transition-colors">Practitioners</a>
        </div>
        <div className="hidden sm:block w-6 h-px bg-cream shrink-0" aria-hidden />
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
            
            <h1 className="text-6xl lg:text-[5.5rem] xl:text-8xl mb-12 leading-[0.9] text-cream font-semibold tracking-tight">
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
              <h2 className="text-6xl md:text-8xl font-semibold leading-tight mb-12 text-burgundy">THE CORE <br /><span className="font-serif italic text-burgundy">shift</span></h2>
              <div className="w-24 h-px bg-burgundy/20 mb-12"></div>
              <div className="space-y-6 text-ink/60 font-normal leading-relaxed mb-6">
                <p>
                  Many of us are witnessing, experiencing and holding, grief, uncertainty, and intensity in ways we haven’t before. And yet, here we are.
                </p>
                <p>
                  In the past, we gathered for two intense days. This time, we are stretching again into 21 days creating space not just for inspiration, but for integration. Not just for awakening, but for stability. Not just for expansion, but for capacity.
                </p>
                <p>
                  If you’re new here, hi, welcome. Phoenix Rising began as a space to gather. To connect spiritual and wellness communities across the region. To create a space where wisdom is shared horizontally, not hierarchically.
                </p>
                <p className="text-ink/80 font-normal italic border-l-2 border-burgundy/35 pl-4">
                  This edition carries an even deeper intention. To remain connected to what is sacred, even in dark times. This is not another healing container. It is a return to living what you already know, even when life feels uncertain.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-12 lg:col-span-7 space-y-32">
              <div className="relative">
                <div className="absolute -left-8 top-0 w-px h-full bg-ink/5"></div>
                <div className="pl-12">
                  <h3 className="text-[10px] tracking-[0.4em] uppercase font-semibold text-burgundy mb-12">The Philosophy</h3>
                  <div className="space-y-8">
                    <p className="text-lg font-normal leading-relaxed text-ink/70">
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
                <div className="p-10 bg-white border border-ink/5 group hover:border-burgundy/25 transition-colors duration-700">
                  <p className="text-5xl font-serif italic text-burgundy mb-4 group-hover:text-burgundy/80 transition-colors">21</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-ink/40">Days of Devotion</p>
                </div>
                <div className="p-10 bg-white border border-ink/5 group hover:border-burgundy/25 transition-colors duration-700">
                  <p className="text-5xl font-serif italic text-burgundy mb-4 group-hover:text-burgundy/80 transition-colors">15</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-ink/40">Practitioners</p>
                </div>
              </div>

              <div className="relative overflow-hidden border border-ink/5 bg-white rounded-sm shadow-sm group hover:border-burgundy/25 transition-colors duration-700">
                <div className="aspect-[4/3] md:aspect-[16/9] overflow-hidden">
                  <img
                    src="/_273.jpg"
                    alt="Atmospheric landscape"
                    className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-95 group-hover:scale-105 transition-all duration-[3s]"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent opacity-80" />
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
            <p className="text-cream/80 text-[10px] tracking-[0.4em] uppercase mb-8 font-semibold">The Core Positioning</p>
            <h2 className="text-3xl md:text-5xl mb-12 font-semibold leading-tight text-cream">
              In a time of nervous system overload, of collapsing structures, of constant external noise… this space is about one thing:
            </h2>
            <p className="text-5xl md:text-7xl font-serif italic mb-12 text-cream">Embodiment.</p>
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
              <div className="space-y-6 text-base md:text-lg font-normal leading-relaxed text-ink/80">
                <p>
                  With guidance from practitioners, many rooted in the Middle East, this journey brings together teachers, mystics, healers, and visionaries who carry not only the{" "}
                  <strong className="font-semibold text-burgundy">medicine of their craft</strong>, but the{" "}
                  <strong className="font-semibold text-burgundy">lived reality of this region</strong>. This is not wisdom removed from context. This is{" "}
                  <strong className="font-semibold text-burgundy">wisdom lived in real time</strong>.
                </p>
                <p>
                  For too long, we sought answers outside of our lands. This container is a reminder: the wisdom has always lived among us. And in times like these, it is our{" "}
                  <strong className="font-semibold text-burgundy">connection to each other</strong> that becomes the medicine.
                </p>
                <p className="text-xl font-serif italic text-burgundy pt-4">A return home to ourselves, to each other, to the intelligence that has always been ours.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* SECTION 4 - THE 21-DAY ROADMAP (serpentine path + mobile timeline) */}
      <Section
        id="roadmap"
        className="relative overflow-hidden border-y border-cream/10 bg-burgundy py-48 text-cream"
      >
        {/* Subtle map-like depth so pathways read */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_35%,rgba(255,250,240,0.06),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,transparent_28%,transparent_72%,rgba(0,0,0,0.1)_100%)]"
          aria-hidden
        />
        <div className="container-narrow relative z-10">
          <div className="mx-auto mb-20 max-w-3xl text-center md:mb-24">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.5em] text-cream/90">The Roadmap</p>
            <h2 className="mb-10 text-6xl font-semibold text-cream md:text-8xl">
              21 DAYS <br />
              <span className="font-serif italic text-cream">of focus.</span>
            </h2>
            <p className="mb-4 text-base font-light italic leading-relaxed text-cream/85 md:text-lg">
              Each day features one live session. One focus. One embodied doorway.
            </p>
            <p className="text-base font-light leading-relaxed text-cream md:text-lg">
              This is here to help you walk your talk, and embody that which you already know.
            </p>
          </div>

          {/* Mobile: vertical timeline — visible spine */}
          <div className="relative mx-auto max-w-lg lg:hidden">
            <div
              className="absolute left-[27px] top-4 bottom-4 w-[3px] rounded-full bg-gradient-to-b from-cream/25 via-cream/70 to-cream/25 shadow-[0_0_24px_rgba(255,250,240,0.35)]"
              aria-hidden
            />
            {ROADMAP_DOORWAYS.map((phase, i) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="relative flex gap-6 pb-14 last:pb-0"
              >
                <div
                  className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-cream/45 bg-gradient-to-br from-burgundy to-[#4a0a02] shadow-[0_0_28px_rgba(255,250,240,0.2),0_0_20px_rgba(123,17,3,0.45)] ring-2 ring-cream/15"
                  aria-hidden
                >
                  <span className="font-serif text-lg italic text-cream">{i + 1}</span>
                </div>
                <div className="min-w-0 pt-0.5">
                  <span className="text-cream/90 text-[10px] tracking-[0.3em] uppercase font-semibold mb-2 block">
                    Doorway {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-serif italic text-cream mb-3 leading-snug">{phase.title}</h3>
                  <p className="text-cream/75 font-light text-sm leading-relaxed">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: serpentine path */}
          <div className="hidden lg:block">
            {(() => {
              type RoadmapPhase = (typeof ROADMAP_DOORWAYS)[number];
              const chunks: RoadmapPhase[][] = [];
              for (let s = 0; s < ROADMAP_DOORWAYS.length; s += 3) {
                chunks.push(ROADMAP_DOORWAYS.slice(s, s + 3) as RoadmapPhase[]);
              }
              return chunks.map((chunk, rowIdx) => {
                /** Always chronological left → right (4→5→6, 10→11) so the path from 3 lands on 4, not 6. */
                const start = rowIdx * 3;
                const phasesToShow = [...chunk];
                const globalIndices = phasesToShow.map((_, idx) => start + idx);
                const isShortRow = chunk.length < 3;

                const pathLineClass =
                  "h-[3px] w-full rounded-full bg-gradient-to-r from-cream/30 via-cream/90 to-cream/30 shadow-[0_0_18px_rgba(255,250,240,0.45),0_0_6px_rgba(255,250,240,0.25)]";

                return (
                  <div key={rowIdx} className="mb-0">
                    {/* 1) Circle + horizontal path only (so the S-curve can sit flush between rows) */}
                    <div
                      className={`mx-auto flex w-full max-w-6xl items-start px-1 ${
                        isShortRow ? "max-w-4xl justify-center" : ""
                      }`}
                    >
                      {phasesToShow.map((_, j) => {
                        const globalIdx = globalIndices[j];
                        const doorwayNum = globalIdx + 1;
                        const nodeWidth = isShortRow
                          ? "w-[min(42vw,300px)] xl:w-[320px]"
                          : "w-[min(28vw,240px)] xl:w-[260px]";
                        return (
                          <Fragment key={globalIdx}>
                            {j > 0 && (
                              <div
                                className="flex min-h-[3px] min-w-[12px] flex-1 items-start pt-7"
                                aria-hidden
                              >
                                <div className={`${pathLineClass} w-full`} />
                              </div>
                            )}
                            <motion.div
                              initial={{ opacity: 0, y: 28 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: globalIdx * 0.04 }}
                              className={`flex shrink-0 flex-col items-center px-2 text-center ${nodeWidth}`}
                            >
                              <div
                                className="relative flex h-[3.75rem] w-[3.75rem] shrink-0 items-center justify-center rounded-full border-2 border-cream/50 bg-gradient-to-br from-burgundy to-[#4a0a02] shadow-[0_0_32px_rgba(255,250,240,0.18),0_0_24px_rgba(123,17,3,0.5)] ring-2 ring-cream/20"
                                aria-hidden
                              >
                                <span className="font-serif text-xl italic text-cream">{doorwayNum}</span>
                              </div>
                              <span className="mt-4 block text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/95">
                                Doorway {String(doorwayNum).padStart(2, "0")}
                              </span>
                            </motion.div>
                          </Fragment>
                        );
                      })}
                    </div>

                    {/* 2) Titles + copy aligned to the same columns */}
                    <div
                      className={`mx-auto mt-8 grid max-w-6xl gap-x-6 gap-y-10 px-3 ${
                        isShortRow
                          ? "max-w-4xl grid-cols-1 sm:grid-cols-2 sm:justify-items-center"
                          : "grid-cols-3"
                      }`}
                    >
                      {phasesToShow.map((phase, j) => {
                        const globalIdx = globalIndices[j];
                        return (
                          <motion.div
                            key={`text-${globalIdx}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: globalIdx * 0.04 + 0.05 }}
                            className={`min-w-0 text-center ${isShortRow ? "max-w-md" : ""}`}
                          >
                            <h3 className="mb-3 text-xl font-serif italic leading-snug text-cream xl:text-[1.35rem]">
                              {phase.title}
                            </h3>
                            <p className="text-sm font-light leading-relaxed text-cream/80">{phase.desc}</p>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* 3) Continuous SVG bridge: last node (right) → first node of next row (left), or mirrored for alternating serpentine */}
                    {rowIdx < chunks.length - 1 && (
                      <div
                        className="pointer-events-none relative mx-auto w-full max-w-6xl px-2"
                        aria-hidden
                      >
                        <div className="h-24 w-full md:h-32 lg:h-36">
                          <svg
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            className="h-full w-full overflow-visible"
                          >
                            <defs>
                              <linearGradient
                                id={`roadmap-bridge-stroke-${rowIdx}`}
                                gradientUnits="userSpaceOnUse"
                                x1="0"
                                y1="0"
                                x2="100"
                                y2="0"
                              >
                                <stop offset="0%" stopColor="rgba(255,250,240,0.35)" />
                                <stop offset="50%" stopColor="rgba(255,250,240,0.95)" />
                                <stop offset="100%" stopColor="rgba(255,250,240,0.35)" />
                              </linearGradient>
                            </defs>
                            {/* Last node of each row is on the right; next row begins on the left — one continuous S */}
                            <path
                              d="M 93 10 C 93 52, 7 48, 7 90"
                              fill="none"
                              stroke={`url(#roadmap-bridge-stroke-${rowIdx})`}
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              vectorEffect="non-scaling-stroke"
                              className="drop-shadow-[0_0_10px_rgba(255,250,240,0.35)]"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </Section>

      {/* SECTION 4.5 - THE DEEP DIVES (PORTALS) */}
      <Section id="portals" className="bg-cream text-ink py-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 pointer-events-none mix-blend-multiply">
          <img src="/_31.jpg" className="w-full h-full object-cover mask-fade-left" alt="" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-cream to-transparent"></div>
        </div>
        <div className="container-narrow">
          <div className="text-center mb-32">
            <p className="text-burgundy text-[10px] tracking-[0.5em] uppercase mb-6 font-semibold">The Deep Dives</p>
            <h2 className="text-7xl md:text-9xl mb-10 font-semibold text-burgundy">THE <span className="font-serif italic text-burgundy">portals</span></h2>
            <p className="text-ink/40 max-w-2xl mx-auto font-light italic text-lg">Detailed explorations led by our expert practitioners.</p>
          </div>
          
          <div className="max-w-6xl mx-auto flex flex-col min-w-0">
            <div className="space-y-16 md:space-y-24">
              {PHOENIX_PORTAL_SESSIONS.map((session) => (
                <motion.div
                  key={session.portal}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  className="scroll-mt-28 rounded-2xl border border-ink/10 bg-cream/60 p-6 md:p-10 shadow-sm"
                >
                  <div className="flex flex-col gap-8 md:flex-row md:gap-10 md:items-start">
                    <div className="flex shrink-0 justify-center md:justify-start">
                      {session.photoSecondary ? (
                        <div className="flex gap-3">
                          <div className="relative h-32 w-32 overflow-hidden rounded-full border border-burgundy/35 bg-gradient-to-br from-burgundy to-[#4a0a02] shadow-[0_0_24px_rgba(123,17,3,0.12)] md:h-40 md:w-40">
                            {session.photo ? (
                              <img
                                src={session.photo}
                                alt="Julia Stadler"
                                loading="lazy"
                                decoding="async"
                                className={`h-full w-full object-cover grayscale-[0.2] ${session.photoObjectPosition ?? ""}`}
                              />
                            ) : null}
                          </div>
                          <div className="relative h-32 w-32 overflow-hidden rounded-full border border-burgundy/35 bg-gradient-to-br from-burgundy to-[#4a0a02] shadow-[0_0_24px_rgba(123,17,3,0.12)] md:h-40 md:w-40">
                            <img
                              src={session.photoSecondary}
                              alt="Maya Abou Chedid"
                              loading="lazy"
                              decoding="async"
                              className={`h-full w-full object-cover grayscale-[0.2] ${session.photoSecondaryObjectPosition ?? ""}`}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="relative h-36 w-36 overflow-hidden rounded-full border border-burgundy/35 bg-gradient-to-br from-burgundy to-[#4a0a02] shadow-[0_0_28px_rgba(123,17,3,0.15)] md:h-44 md:w-44">
                          {session.photo ? (
                            <img
                              src={session.photo}
                              alt={session.name}
                              loading="lazy"
                              decoding="async"
                              className={`h-full w-full object-cover grayscale-[0.2] ${session.photoObjectPosition ?? ""}`}
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center">
                              <span className="font-serif text-4xl italic text-cream/90 md:text-5xl">
                                {session.name.charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-burgundy text-[10px] tracking-[0.35em] uppercase font-bold mb-2">
                        Portal {session.portal}
                      </p>
                      <p className="text-ink/50 text-[10px] tracking-[0.2em] uppercase font-semibold mb-3">{session.name}</p>
                      <h3 className="text-2xl md:text-3xl font-serif italic text-burgundy mb-4">{session.title}</h3>
                      <p className="text-ink/70 font-light leading-relaxed text-sm md:text-base mb-6">{session.desc}</p>
                      <span className="inline-block border border-ink/15 bg-ink/[0.03] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-ink/45">
                        {session.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* THE PRACTITIONERS SECTION */}
      <Section id="practitioners" className="bg-ink text-cream py-48">
        <div className="container-narrow">
          <div className="text-center mb-32">
            <p className="text-burgundy text-[10px] tracking-[0.5em] uppercase mb-6 font-semibold">The Practitioners</p>
            <h2 className="text-7xl md:text-9xl mb-10 font-semibold">OUR <span className="font-serif italic text-cream">practitioners</span></h2>
            <p className="text-cream/40 max-w-2xl mx-auto font-light italic text-lg">A collective of teachers, mystics, healers, and visionaries rooted in shared wisdom.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-24 md:gap-y-32">
            {PHOENIX_PRACTITIONERS.slice(0, 12).map((practitioner, i) => (
              <motion.div
                key={practitioner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.1 }}
                className={`text-center group ${i % 2 !== 0 ? "lg:translate-y-16" : ""} ${practitioner.photo ? "cursor-pointer" : ""}`}
                role={practitioner.photo ? "button" : undefined}
                tabIndex={practitioner.photo ? 0 : undefined}
                aria-label={practitioner.photo ? `View larger photo of ${practitioner.name}` : undefined}
                onClick={() => {
                  if (practitioner.photo) {
                    setLightbox({
                      kind: "practitioner",
                      src: practitioner.enlargedPhoto ?? practitioner.photo,
                      name: practitioner.name,
                      title: practitioner.title,
                    });
                  }
                }}
                onKeyDown={(e) => {
                  if (!practitioner.photo) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightbox({
                      kind: "practitioner",
                      src: practitioner.enlargedPhoto ?? practitioner.photo,
                      name: practitioner.name,
                      title: practitioner.title,
                    });
                  }
                }}
              >
                <div className="relative mb-10 w-fit mx-auto">
                  {/* Subtle outer animated rings */}
                  <div className="absolute -inset-4 border border-burgundy/30 rounded-full scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-1000"></div>
                  <div className="absolute -inset-2 border border-cream/10 rounded-full scale-100 group-hover:scale-95 transition-transform duration-1000 delay-100"></div>
                  
                  {/* Headshot or initial */}
                  <div className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full overflow-hidden border border-burgundy/40 shadow-[0_0_30px_rgba(123,17,3,0.15)] group-hover:shadow-[0_0_50px_rgba(123,17,3,0.3)] transition-all duration-700 relative z-10 bg-gradient-to-br from-burgundy to-[#4a0a02]">
                    {practitioner.photo ? (
                      <img
                        src={practitioner.photo}
                        alt={practitioner.name}
                        loading="lazy"
                        decoding="async"
                        className={`w-full h-full object-cover grayscale-[0.25] group-hover:grayscale-0 transition-all duration-700 ${practitioner.photoObjectPosition ?? ""}`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-cream font-serif italic text-4xl md:text-5xl opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                          {practitioner.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="relative flex flex-col items-center">
                  <div className="w-px h-6 bg-cream/10 mb-6 group-hover:h-10 group-hover:bg-cream/40 transition-all duration-700"></div>
                  <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-bold text-cream mb-3">{practitioner.name}</p>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-cream/40 font-light">{practitioner.title}</p>
                </div>
              </motion.div>
            ))}
            <div className="col-span-full flex w-full justify-center">
              <div className="flex w-full max-w-4xl flex-wrap justify-center gap-x-8 md:gap-x-12 gap-y-24 md:gap-y-32">
                {PHOENIX_PRACTITIONERS.slice(12).map((practitioner, j) => {
                  const i = j + 12;
                  return (
                    <motion.div
                      key={practitioner.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (i % 4) * 0.1 }}
                      className={`text-center group w-full max-w-[220px] shrink-0 sm:max-w-[240px] ${practitioner.photo ? "cursor-pointer" : ""}`}
                      role={practitioner.photo ? "button" : undefined}
                      tabIndex={practitioner.photo ? 0 : undefined}
                      aria-label={practitioner.photo ? `View larger photo of ${practitioner.name}` : undefined}
                      onClick={() => {
                        if (practitioner.photo) {
                          setLightbox({
                            kind: "practitioner",
                            src: practitioner.enlargedPhoto ?? practitioner.photo,
                            name: practitioner.name,
                            title: practitioner.title,
                          });
                        }
                      }}
                      onKeyDown={(e) => {
                        if (!practitioner.photo) return;
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setLightbox({
                            kind: "practitioner",
                            src: practitioner.enlargedPhoto ?? practitioner.photo,
                            name: practitioner.name,
                            title: practitioner.title,
                          });
                        }
                      }}
                    >
                      <div className="relative mb-10 w-fit mx-auto">
                        <div className="absolute -inset-4 border border-burgundy/30 rounded-full scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-1000"></div>
                        <div className="absolute -inset-2 border border-cream/10 rounded-full scale-100 group-hover:scale-95 transition-transform duration-1000 delay-100"></div>
                        <div className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full overflow-hidden border border-burgundy/40 shadow-[0_0_30px_rgba(123,17,3,0.15)] group-hover:shadow-[0_0_50px_rgba(123,17,3,0.3)] transition-all duration-700 relative z-10 bg-gradient-to-br from-burgundy to-[#4a0a02]">
                          {practitioner.photo ? (
                            <img
                              src={practitioner.photo}
                              alt={practitioner.name}
                              loading="lazy"
                              decoding="async"
                              className={`w-full h-full object-cover grayscale-[0.25] group-hover:grayscale-0 transition-all duration-700 ${practitioner.photoObjectPosition ?? ""}`}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-cream font-serif italic text-4xl md:text-5xl opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                                {practitioner.name.charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="relative flex flex-col items-center">
                        <div className="w-px h-6 bg-cream/10 mb-6 group-hover:h-10 group-hover:bg-cream/40 transition-all duration-700"></div>
                        <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-bold text-cream mb-3">{practitioner.name}</p>
                        <p className="text-[9px] tracking-[0.2em] uppercase text-cream/40 font-light">{practitioner.title}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 5 - WHAT MAKES THIS DIFFERENT */}
      <Section className="bg-burgundy text-cream py-48 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/4 -left-20 text-[20vw] font-serif italic vertical-text text-cream/10">Practice</div>
          <div className="absolute bottom-1/4 -right-20 text-[20vw] font-serif italic vertical-text text-cream/10">Integration</div>
        </div>

        <div className="container-narrow relative z-10">
          <div className="text-center mb-32">
            <p className="text-cream/80 text-[10px] tracking-[0.5em] uppercase mb-6 font-semibold">The Distinction</p>
            <h2 className="text-7xl md:text-9xl mb-10 font-semibold text-cream">WHAT MAKES THIS <br /><span className="font-serif italic text-cream">different</span></h2>
            <p className="text-cream/40 max-w-xl mx-auto font-light italic text-lg leading-relaxed">This is not another healing container. It is a return to living what you already know.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-24 mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-12 border border-cream/20 bg-cream/[0.04] shadow-2xl rounded-sm backdrop-blur-sm"
            >
              <h3 className="text-[10px] tracking-[0.4em] uppercase font-semibold text-cream/90 mb-12 flex items-center gap-4">
                <span className="w-8 h-px bg-cream/30"></span>
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
                  <li key={i} className="flex items-center gap-6 text-cream/70 font-normal group text-xl">
                    <div className="w-1.5 h-1.5 bg-cream/50 group-hover:bg-cream transition-colors"></div>
                    <span className="font-serif italic group-hover:text-cream transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-12 border border-cream/25 bg-white/[0.06] shadow-[0_0_50px_rgba(0,0,0,0.12)] rounded-sm backdrop-blur-sm"
            >
              <h3 className="text-[10px] tracking-[0.4em] uppercase font-semibold text-cream/90 mb-12 flex items-center gap-4">
                <span className="w-8 h-px bg-cream/30"></span>
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
                  <li key={i} className="flex items-center gap-6 text-cream font-normal group text-xl">
                    <Check className="w-5 h-5 text-cream group-hover:text-white transition-colors" />
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
            <div className="absolute top-0 left-0 w-2 h-full bg-burgundy"></div>
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
                <li key={i} className="flex items-start gap-4 text-ink font-normal text-xl list-none">
                  <span className="text-burgundy font-serif italic text-2xl leading-none">0{i+1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* SECTION 5.5 - TESTIMONIALS (gallery-style carousel) */}
      <Section className="bg-ink text-cream py-48 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
          <div className="absolute -right-8 top-1/4 text-[18vw] font-serif italic leading-none text-cream select-none md:text-[14vw]">
            Voices
          </div>
        </div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cream/15 to-transparent" aria-hidden />
        <div className="container-narrow relative z-10 max-w-6xl">
          <div className="mb-16 text-center md:mb-20">
            <p className="text-burgundy mb-6 text-[10px] font-semibold uppercase tracking-[0.45em]">From the community</p>
            <h2 className="mb-6 text-5xl font-medium text-cream md:text-7xl lg:text-8xl">
              Client <span className="font-serif italic text-cream">reflections</span>
            </h2>
            <p className="mx-auto max-w-lg text-sm font-light leading-relaxed text-cream/45 md:text-base">
              Real words from people who have moved through the Phoenix Rising container — tap any card to view full size.
            </p>
          </div>

          <div className="relative">
            {/* Edge fades so the rail feels like a gallery */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-10 bg-gradient-to-r from-ink to-transparent md:w-16"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-10 bg-gradient-to-l from-ink to-transparent md:w-16"
              aria-hidden
            />

            <div
              ref={testimonialRef}
              onScroll={handleScroll}
              className="hide-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-4 px-4 pb-6 pt-2 md:gap-8 md:scroll-px-6 md:px-6"
            >
              {testimonialImages.map((t, i) => (
                <motion.div
                  key={t.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 4) * 0.06 }}
                  className="group/card w-[min(82vw,380px)] shrink-0 snap-center md:w-[min(42vw,420px)] lg:w-[400px]"
                >
                  <div className="rounded-2xl border border-cream/[0.09] bg-gradient-to-b from-cream/[0.06] via-cream/[0.02] to-transparent p-[2px] shadow-[0_28px_80px_-24px_rgba(0,0,0,0.65)] ring-1 ring-cream/[0.04] transition-all duration-500 group-hover/card:border-burgundy/25 group-hover/card:ring-burgundy/15 group-hover/card:shadow-[0_36px_90px_-20px_rgba(123,17,3,0.25)]">
                    <div className="overflow-hidden rounded-[14px] bg-ink/80">
                      <button
                        type="button"
                        onClick={() => setLightbox({ kind: "testimonial", src: t.src })}
                        className="relative block w-full cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                        aria-label={`Open testimonial ${i + 1} of ${testimonialImages.length} in full screen`}
                      >
                        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-ink/50 via-transparent to-ink/10 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
                        <div className="absolute bottom-4 right-4 z-[2] flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 bg-ink/70 text-cream opacity-0 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover/card:opacity-100 group-hover/card:border-cream/35">
                          <ZoomIn className="h-4 w-4" aria-hidden />
                        </div>
                        <img
                          src={t.src}
                          alt={t.alt}
                          loading="lazy"
                          decoding="async"
                          className="aspect-[3/4] w-full object-cover object-top transition-[filter,transform] duration-700 group-hover/card:scale-[1.02] group-hover/card:brightness-[1.03] md:aspect-[4/5] md:max-h-[min(520px,70vh)]"
                        />
                      </button>
                    </div>
                  </div>
                  <p className="mt-4 text-center text-[9px] font-medium uppercase tracking-[0.35em] text-cream/25">
                    Reflection {String(i + 1).padStart(2, "0")} · Phoenix Rising
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-12">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => scrollCarousel("left")}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/15 bg-cream/[0.03] text-cream transition-all duration-300 hover:border-cream/30 hover:bg-cream hover:text-burgundy"
                  aria-label="Previous reflection"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <span className="min-w-[5.5rem] text-center font-mono text-[11px] tabular-nums tracking-widest text-cream/50">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(testimonialImages.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={() => scrollCarousel("right")}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/15 bg-cream/[0.03] text-cream transition-all duration-300 hover:border-cream/30 hover:bg-cream hover:text-burgundy"
                  aria-label="Next reflection"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="flex max-w-md flex-wrap justify-center gap-2">
                {testimonialImages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to reflection ${i + 1}`}
                    aria-current={activeIndex === i ? "true" : undefined}
                    onClick={() => scrollToTestimonialIndex(i)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      activeIndex === i ? "w-10 bg-burgundy" : "w-1.5 bg-cream/15 hover:bg-cream/35"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 6 - PRACTICAL DETAILS */}
      <Section className="bg-white text-ink py-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-burgundy/5 -skew-x-12 translate-x-1/2"></div>
        <div className="container-narrow relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-16">
              <div>
                <p className="text-burgundy text-[10px] tracking-[0.5em] uppercase mb-8 font-semibold">The Logistics</p>
                <h2 className="text-5xl md:text-6xl lg:text-7xl mb-12 font-semibold text-burgundy leading-[0.9]">
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
                      <div className="w-1.5 h-1.5 mt-1.5 bg-burgundy/40 rounded-full shrink-0 border border-burgundy/50"></div>
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
                    <p className="text-cream/90 text-[9px] tracking-[0.4em] uppercase font-semibold mb-6">Dates & Flow</p>
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
                    <p className="text-cream/90 text-[9px] tracking-[0.4em] uppercase font-semibold mb-6">The Investment</p>
                    <div className="space-y-4 text-cream/90 font-light text-sm leading-relaxed">
                      <p className="text-5xl font-serif italic text-cream">444 AED</p>
                      <p>Payment plan available: 222 AED × 2</p>
                    </div>
                  </div>
                  
                  {/* CTA inside the card at the bottom */}
                  <div className="pt-8 text-center">
                    <Link to="/phoenix-rising/checkout" className="inline-block w-full md:w-auto">
                      <button className="bg-cream text-burgundy px-12 py-5 rounded-full text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white hover:text-burgundy transition-all duration-700 w-full md:w-auto shadow-2xl">
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
          <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[40vw] font-serif italic text-cream/10">Origin</div>
        </div>
        
        <div className="container-narrow relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
               <div className="aspect-[4/5] md:aspect-square overflow-hidden rounded-sm relative z-10">
                 <img src="/_316.jpg" className="w-full h-full object-cover" alt="Origin of Phoenix Rising" loading="lazy" decoding="async" />
               </div>
               <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-burgundy/10 rounded-full blur-3xl"></div>
            </div>

            <div className="pl-4 md:pl-12">
              <p className="text-cream/80 text-[10px] tracking-[0.5em] uppercase mb-8 font-semibold">The Story</p>
              <h2 className="text-5xl md:text-6xl font-semibold text-cream leading-tight mb-16">THE ORIGIN <br /><span className="font-serif italic text-cream">of Phoenix</span></h2>
              
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
                <div className="w-12 h-12 rounded-full bg-burgundy/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-cream" />
                </div>
                <p className="text-cream/90 text-sm font-normal italic">Bringing together 15 practitioners and 14 sessions, the fourth edition creates a space to connect and support one another on our paths of awakening.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-burgundy text-cream pt-40 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,242,237,0.12),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_110%,rgba(0,0,0,0.18),transparent_55%)]" />
        </div>

        <div className="container-narrow relative z-10 px-8">
          <div className="max-w-3xl mx-auto text-center">
            <img
              src="/White notext.png"
              alt="Phoenix Rising"
              className="h-16 md:h-20 mx-auto object-contain opacity-95"
              loading="lazy"
              decoding="async"
            />
            <p className="mt-6 text-[12px] tracking-[0.35em] uppercase font-semibold text-cream/80">
              Phoenix Rising
            </p>

            <h2 className="mt-12 text-4xl md:text-6xl font-semibold tracking-tight">
              21 Days of <span className="font-serif italic font-normal">Embodied Living</span>
            </h2>
            <p className="mt-4 text-base md:text-lg font-light text-cream/80">
              A live journey into living what you already know.
            </p>
            <p className="mt-6 text-[11px] tracking-[0.45em] uppercase font-semibold text-cream/85">
              April 11 to May 2nd
            </p>

            <div className="mt-14">
              <Link to="/phoenix-rising/checkout" className="contents">
                <button className="px-12 py-5 rounded-full border border-cream/25 bg-cream/10 text-[10px] tracking-[0.35em] uppercase font-bold hover:bg-cream hover:text-burgundy transition-all duration-700 hover:shadow-[0_0_40px_rgba(245,242,237,0.22)]">
                  Secure Your Spot
                </button>
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-5 text-[10px] tracking-[0.4em] uppercase font-bold text-cream/60">
              <a
                href="https://www.instagram.com/maria.amiouni"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cream transition-colors duration-500"
              >
                Instagram
              </a>
              <a
                href="mailto:mariaamiouni@gmail.com"
                className="hover:text-cream transition-colors duration-500"
              >
                Contact
              </a>
              <Link to="/privacy" className="hover:text-cream transition-colors duration-500">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-cream transition-colors duration-500">
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-cream/10 text-center text-[9px] tracking-[0.4em] uppercase font-bold text-cream/35">
            © 2026 Phoenix Rising. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
