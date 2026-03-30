import { Fragment, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Sparkles, ChevronLeft, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Section, Button } from "../../components/Common";
import { PhoenixTestimonialsSection } from "../../components/PhoenixTestimonialsSection";
import { PHOENIX_RISING_TEXT_TESTIMONIALS } from "../../data/phoenixTestimonials";
import { PHOENIX_PORTAL_SESSIONS } from "../../data/phoenixPortalSessions";
import { PHOENIX_PRACTITIONERS } from "../../data/phoenixPractitioners";

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
  type PractitionerLightbox = {
    src: string;
    name: string;
    title: string;
    bio: string;
    intention: string;
  };
  const [lightbox, setLightbox] = useState<PractitionerLightbox | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox]);

  function openPractitionerProfile(p: (typeof PHOENIX_PRACTITIONERS)[number]) {
    if (!p.photo) return;
    setLightbox({
      src: p.enlargedPhoto ?? p.photo,
      name: p.name,
      title: p.title,
      bio: p.bio,
      intention: p.intention,
    });
  }

  return (
    <div className="min-h-screen selection:bg-burgundy/15 bg-cream">
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-md sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Profile: ${lightbox.name}`}
          >
            <motion.button
              type="button"
              className="absolute right-4 top-4 z-[110] flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 bg-ink/60 text-cream backdrop-blur-sm transition-colors hover:border-cream/30 hover:bg-cream/10 sm:right-6 sm:top-6"
              onClick={() => setLightbox(null)}
              aria-label="Close"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <X className="h-5 w-5" />
            </motion.button>

            <motion.div
              className="relative mt-10 w-full max-w-4xl max-h-[min(90vh,880px)] overflow-y-auto rounded-sm border border-cream/12 bg-gradient-to-br from-[#141210] via-ink to-[#0d0c0b] shadow-[0_0_0_1px_rgba(255,250,240,0.06),0_25px_80px_-12px_rgba(0,0,0,0.75)] md:mt-0 md:max-h-[min(88vh,900px)] md:max-w-5xl"
              initial={{ opacity: 0, scale: 0.98, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 16 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_0%_0%,rgba(123,17,3,0.12),transparent_55%)]" aria-hidden />
              <div className="relative flex flex-col md:min-h-[360px] md:flex-row">
                <div className="relative md:w-[38%] md:max-w-md md:shrink-0">
                  <div className="aspect-[4/5] w-full overflow-hidden md:absolute md:inset-0 md:aspect-auto md:h-full">
                    <img
                      src={lightbox.src}
                      alt={lightbox.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#141210]/90" aria-hidden />
                </div>

                <div className="relative flex flex-1 flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 md:pl-10 md:pr-12 md:py-12 lg:pl-14 lg:pr-16">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-burgundy/90">Practitioner</p>
                  <h2 className="mt-3 font-serif text-3xl italic leading-tight text-cream sm:text-4xl">{lightbox.name}</h2>
                  <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.28em] text-cream/45">{lightbox.title}</p>

                  <div className="mt-8 space-y-4 text-sm font-light leading-relaxed text-cream/78 md:text-[15px] md:leading-[1.65]">
                    {lightbox.bio.split(/\n\n+/).map((block, i) => (
                      <p key={i}>{block.trim()}</p>
                    ))}
                  </div>

                  <div className="relative mt-10 border-t border-cream/10 pt-10">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-burgundy/85">Intention</p>
                    <p className="mt-4 font-serif text-lg italic leading-relaxed text-cream/92 md:text-xl md:leading-snug">
                      {lightbox.intention}
                    </p>
                  </div>
                </div>
              </div>
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
          <div className="relative h-full min-h-[45vh] w-full overflow-hidden bg-burgundy md:min-h-0 md:w-1/2">
            <motion.img
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              src="/practitioners/Group%20Photo.png"
              alt="Phoenix Rising practitioners"
              className="absolute inset-0 h-full w-full object-cover object-[50%_center] opacity-60"
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-burgundy/40" aria-hidden />
            <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent via-burgundy/25 to-burgundy md:block" aria-hidden />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy via-burgundy/45 to-transparent md:hidden" aria-hidden />
          </div>
          <div className="relative z-0 hidden h-full w-full bg-burgundy md:block md:w-1/2"></div>
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
              <div className="space-y-2">
                <p className="text-lg font-light leading-relaxed text-cream/80">You don’t need more information.</p>
                <p className="text-lg font-light leading-relaxed text-cream/80">You don’t need another breakthrough.</p>
                <p className="text-lg font-light leading-relaxed text-cream/80">You don’t need to become someone new.</p>
              </div>
              <p className="text-2xl font-serif italic text-cream pt-2">
                You need the capacity to live what you already understand.
              </p>
            </div>
            
            <div className="mt-auto lg:mt-0">
              <Link to="/phoenix-rising/checkout" className="contents">
                <Button variant="cream">Join the Journey</Button>
              </Link>
            </div>
          </motion.div>        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-30">
          <ChevronDown className="w-6 h-6 text-cream" />
        </div>
      </section>

      {/* SECTION 1 — Core shift (copy aligned with 21 Days of Embodied Living) */}
      <Section
        id="core-shift"
        className="relative overflow-hidden bg-paper px-8 !pt-20 !pb-28 md:!pt-28 md:!pb-36"
      >
        <div className="pointer-events-none absolute top-0 right-0 h-full w-1/3 -skew-x-12 translate-x-1/2 bg-burgundy/[0.06]" aria-hidden />
        <div className="container-narrow relative z-10">
          <div className="mb-14 text-center md:mb-20">
            <h2 className="mb-8 text-6xl font-semibold leading-tight text-burgundy md:mb-10 md:text-8xl">
              THE CORE <br />
              <span className="font-serif italic text-burgundy">shift</span>
            </h2>
            <div className="mx-auto h-px w-24 bg-burgundy/20" />
          </div>

          <div className="mx-auto max-w-prose space-y-10 text-base font-normal leading-relaxed text-ink/80 md:text-lg">
            <p className="text-xl font-normal leading-snug text-ink md:text-2xl md:leading-snug">
              We are back with a very special edition of{" "}
              <strong className="font-semibold text-burgundy">Phoenix Rising IV</strong>.
            </p>
            <p>
              And this time… it meets us in a{" "}
              <strong className="font-semibold text-burgundy">very different moment</strong>.
            </p>

            <div className="space-y-3 border-l-2 border-burgundy/30 py-1 pl-6 md:pl-7">
              <p>Many of us are witnessing, experiencing and holding,</p>
              <p>
                <strong className="font-semibold text-burgundy">Grief, uncertainty, and intensity</strong> in ways we
                haven’t before.
              </p>
            </div>

            <p className="font-serif text-lg font-normal italic text-burgundy md:text-xl">And yet, here we are.</p>

            <div className="space-y-3.5">
              <p>In the past, we gathered for two intense days.</p>
              <p>
                This time, we are stretching again into{" "}
                <strong className="font-semibold text-burgundy">21 days</strong>
              </p>
              <div className="space-y-2.5 border-l-2 border-burgundy/25 py-1 pl-5 md:pl-6">
                <p>
                  Creating space not just for inspiration, but for{" "}
                  <strong className="font-semibold text-burgundy">integration</strong>.
                </p>
                <p>
                  Not just for awakening, but for <strong className="font-semibold text-burgundy">stability</strong>.
                </p>
                <p>
                  Not just for expansion, but for <strong className="font-semibold text-burgundy">capacity</strong>.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <p>If you’re new here, hi, welcome.</p>
              <p>Phoenix Rising began as a space to gather.</p>
              <p>To connect spiritual and wellness communities across the region.</p>
              <p>
                To create a space where wisdom is shared{" "}
                <strong className="font-semibold text-burgundy">horizontally</strong>, not{" "}
                <strong className="font-semibold text-burgundy">hierarchically</strong>.
              </p>
              <p>
                To remember the intelligence of our <strong className="font-semibold text-burgundy">lands</strong>, our{" "}
                <strong className="font-semibold text-burgundy">lineages</strong>, our{" "}
                <strong className="font-semibold text-burgundy">bodies</strong>.
              </p>
            </div>

            <div className="space-y-4 rounded-sm bg-white/80 px-6 py-8 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)] md:px-8 md:py-10">
              <p>
                And this edition carries an even{" "}
                <strong className="font-semibold text-burgundy">deeper intention</strong>.
              </p>
              <p>
                To remain connected to what is <strong className="font-semibold text-burgundy">sacred</strong>, even in{" "}
                <strong className="font-semibold text-burgundy">dark times</strong>.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <p>
                <strong className="font-semibold text-burgundy">This is not another healing container.</strong>
              </p>
              <p>It is a return to living what you already know,</p>
              <div className="space-y-2 border-l-2 border-burgundy/25 py-1 pl-5 text-ink/80 md:pl-6">
                <p>
                  Even when life feels <strong className="font-semibold text-burgundy">uncertain</strong>.
                </p>
                <p>
                  Even when the world around you feels <strong className="font-semibold text-burgundy">unstable</strong>.
                </p>
                <p>
                  Even when it would be easier to <strong className="font-semibold text-burgundy">disconnect</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 2 — Same copy as former right column; original wording only */}
      <Section
        id="embodied-living"
        className="border-t border-ink/10 bg-cream px-8 !pt-24 !pb-28 text-ink md:!pt-32 md:!pb-36"
      >
        <div className="container-narrow relative z-10">
          <div className="mx-auto max-w-3xl space-y-8 md:space-y-10">
            <div className="space-y-5 text-base font-normal leading-relaxed text-ink/80 md:text-lg">
              <p>
                <strong className="font-semibold text-burgundy">21 Days of Embodied Living</strong> is a{" "}
                <strong className="font-semibold text-burgundy">daily live container</strong> devoted to{" "}
                <strong className="font-semibold text-burgundy">integration</strong>.
              </p>
              <p>
                Over <strong className="font-semibold text-burgundy">three weeks</strong>, we enter the practice of being
                with ourselves, <strong className="font-semibold text-burgundy">fully</strong>.
              </p>
              <div className="space-y-2 border-l-2 border-burgundy/25 py-1 pl-5 md:pl-6">
                <p>
                  With our <strong className="font-semibold text-burgundy">bodies</strong>.
                </p>
                <p>
                  With our <strong className="font-semibold text-burgundy">hearts</strong>.
                </p>
                <p>
                  With what is actually <strong className="font-semibold text-burgundy">alive and present</strong>.
                </p>
              </div>
            </div>
            <div className="space-y-4 text-base font-normal leading-relaxed text-ink/80 md:space-y-5 md:text-lg">
              <p>
                We learn to stay with what feels{" "}
                <strong className="font-semibold text-burgundy">overwhelming</strong>.
              </p>
              <p>
                To listen to our <strong className="font-semibold text-burgundy">intuition</strong>.
              </p>
              <p>
                To move with life <strong className="font-semibold text-burgundy">instead of against it</strong>.
              </p>
              <p>
                To understand the <strong className="font-semibold text-burgundy">rhythms</strong> shaping our experience.
              </p>
              <p>
                To meet ourselves in <strong className="font-semibold text-burgundy">truth</strong>, in{" "}
                <strong className="font-semibold text-burgundy">expression</strong>, in{" "}
                <strong className="font-semibold text-burgundy">relationship</strong>.
              </p>
            </div>
            <p className="text-xl font-serif font-normal italic text-burgundy md:text-2xl">
              And to live, not just know, what we are here for.
            </p>
            <p className="text-[11px] font-normal uppercase tracking-[0.2em] text-ink/50">
              Devoted to integration. Practice over consumption.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-6 md:mt-20 md:gap-8">
            <div className="group border border-ink/8 bg-white p-10 transition-colors duration-700 hover:border-burgundy/25">
              <p className="mb-4 font-serif text-5xl italic text-burgundy transition-colors group-hover:text-burgundy/80">21</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40">Days of Devotion</p>
            </div>
            <div className="group border border-ink/8 bg-white p-10 transition-colors duration-700 hover:border-burgundy/25">
              <p className="mb-4 font-serif text-5xl italic text-burgundy transition-colors group-hover:text-burgundy/80">17</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40">Practitioners</p>
            </div>
            <div className="group border border-ink/8 bg-white p-10 transition-colors duration-700 hover:border-burgundy/25">
              <p className="mb-4 font-serif text-5xl italic text-burgundy transition-colors group-hover:text-burgundy/80">18</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40">Portals</p>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-5xl justify-center md:mt-16">
            <Link to="/phoenix-rising/checkout" className="contents">
              <Button variant="cream">Join the Journey</Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* SECTION 2 - THE CORE POSITIONING */}
      <Section className="relative bg-burgundy text-cream py-48 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/practitioners/Group%20Photo.png"
            alt="Phoenix Rising practitioners"
            className="h-full w-full object-cover object-center opacity-30 mix-blend-luminosity"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-burgundy via-transparent to-burgundy"></div>
        </div>
        <div className="container-narrow relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl mb-12 font-semibold leading-tight text-cream">
              In a time of nervous system overload, of collapsing structures, of constant external noise… this space is about one thing:
            </h2>
            <p className="text-5xl md:text-7xl font-serif italic mb-12 text-cream">Embodiment.</p>
            <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-cream/80">
              <p>Not learning more. Not fixing more. Not escaping what is here.</p>
              <p className="text-cream font-medium">
                But strengthening your inner compass and building the capacity to stay with yourself in the midst of it all.
              </p>
              <p>
                Over <strong className="font-sans font-semibold text-cream">21 days</strong>, through one live session a day, we{" "}
                <strong className="font-sans font-semibold text-cream">practice</strong>. We{" "}
                <strong className="font-sans font-semibold text-cream">slow down</strong> enough to{" "}
                <strong className="font-sans font-semibold text-cream">integrate</strong>. We build{" "}
                <strong className="font-sans font-semibold text-cream">capacity</strong> instead of chasing{" "}
                <strong className="font-sans font-semibold text-cream">intensity</strong>. We create{" "}
                <strong className="font-sans font-semibold text-cream">internal stability</strong> even when the external world is{" "}
                <strong className="font-sans font-semibold text-cream">unstable</strong>. We bring{" "}
                <strong className="font-sans font-semibold text-cream">structure</strong> to what has felt{" "}
                <strong className="font-sans font-semibold text-cream">overwhelming</strong>. We give{" "}
                <strong className="font-sans font-semibold text-cream">roots</strong> to what has only existed as{" "}
                <strong className="font-sans font-semibold text-cream">vision</strong>.
              </p>
              <div
                className="pt-8 space-y-3 md:space-y-4 text-2xl font-serif italic font-normal leading-relaxed text-cream [&>p]:m-0"
              >
                <p>This is about living your work.</p>
                <p>Living your values.</p>
                <p>Living your knowing.</p>
                <p>Not when things are perfect.</p>
                <p>But now.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* SECTION 3 - MIDDLE EASTERN GROUNDING */}
      <Section className="bg-cream text-ink border-b border-ink/10">
        <div className="container-narrow">
          <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative md:col-span-7"
            >
              <div className="relative z-10">
                <img
                  src="/practitioners/Group%20Photo.png"
                  alt="Phoenix Rising practitioners"
                  className="h-auto w-full max-h-[min(900px,90vh)] object-contain md:max-h-[min(960px,92vh)]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-5"
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

          <div className="mt-16 flex justify-center md:mt-20">
            <Link to="/phoenix-rising/checkout" className="contents">
              <Button variant="cream">Join the Journey</Button>
            </Link>
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
            <div className="mx-auto max-w-2xl space-y-10 text-base font-light leading-relaxed text-cream md:text-lg">
              <div className="space-y-1 md:space-y-1.5">
                <p>Each day offers a doorway.</p>
                <p>A practice.</p>
                <p>A perspective.</p>
                <p>A way to return to yourself.</p>
              </div>
              <div className="space-y-1 md:space-y-1.5">
                <p>Some sessions will ground you.</p>
                <p>Some will open you.</p>
                <p>Some will challenge you.</p>
                <p>Some will remind you.</p>
              </div>
              <div className="space-y-4 pt-1">
                <p>But all of them are here to support you in one thing:</p>
                <p>Living what you already know, in real life.</p>
              </div>
            </div>
          </div>

          <div className="mb-16 flex justify-center md:mb-20">
            <Link to="/phoenix-rising/checkout" className="contents">
              <Button variant="cream">Join the Journey</Button>
            </Link>
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
                      <p className="whitespace-pre-line text-ink/70 font-light leading-relaxed text-sm md:text-base mb-6">
                        {session.desc}
                      </p>
                      <span className="inline-block border border-ink/15 bg-ink/[0.03] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-ink/45">
                        {session.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <Link to="/phoenix-rising/checkout" className="contents">
              <Button variant="cream">Join the Journey</Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* THE PRACTITIONERS SECTION */}
      <Section id="practitioners" className="bg-ink text-cream py-48">
        <div className="container-narrow">
          <div className="text-center mb-32">
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
                aria-label={practitioner.photo ? `Open profile: ${practitioner.name}` : undefined}
                onClick={() => openPractitionerProfile(practitioner)}
                onKeyDown={(e) => {
                  if (!practitioner.photo) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openPractitionerProfile(practitioner);
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
                      aria-label={practitioner.photo ? `Open profile: ${practitioner.name}` : undefined}
                      onClick={() => openPractitionerProfile(practitioner)}
                      onKeyDown={(e) => {
                        if (!practitioner.photo) return;
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          openPractitionerProfile(practitioner);
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

          <div className="mt-16 flex justify-center">
            <Link to="/phoenix-rising/checkout" className="contents">
              <Button variant="cream">Join the Journey</Button>
            </Link>
          </div>
        </div>
      </Section>

      <PhoenixTestimonialsSection
        testimonials={PHOENIX_RISING_TEXT_TESTIMONIALS}
        eyebrow="From the community"
        title={
          <>
            Client <span className="font-serif italic text-cream">reflections</span>
          </>
        }
        subtitle="Real words from people who have moved through the Phoenix Rising container. Swipe to read more."
        reflectionSuffix="Phoenix Rising"
      />

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
                      <p className="text-sm text-cream/70">
                        Early bird: <span className="font-medium text-cream">333 AED</span>
                      </p>
                      <p>Payment plan available: 222 AED × 2</p>
                      <p className="pt-2 text-[11px] text-cream/65 leading-relaxed border-t border-cream/10 mt-4">
                        All sales are final. Purchases are non-refundable.
                      </p>
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
                 <img
                  src="/_401.jpg"
                   className="h-full w-full object-cover object-center"
                   alt="Maria Amiouni"
                   loading="lazy"
                   decoding="async"
                 />
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
                <p className="text-cream/90 text-sm font-normal italic">Bringing together 17 practitioners across 18 portals, the fourth edition creates a space to connect and support one another on our paths of awakening.</p>
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
