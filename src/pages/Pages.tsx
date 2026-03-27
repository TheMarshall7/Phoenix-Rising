import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button, FadeIn } from "../components/Common";
import { TestimonialsGallerySection } from "../components/TestimonialsGallerySection";
import { INSTAGRAM_FEED_EMBED_URL } from "../constants/ghl";

const MENTORSHIP_TESTIMONIAL_IMAGES = [
  { src: "/Testimonials/Mentorship/IMG_4390.jpg", alt: "Mentorship testimonial" },
  { src: "/Testimonials/Mentorship/IMG_4410.jpg", alt: "Mentorship testimonial" },
  { src: "/Testimonials/Mentorship/IMG_4558.jpg", alt: "Mentorship testimonial" },
  { src: "/Testimonials/Mentorship/IMG_4904.jpg", alt: "Mentorship testimonial" },
] as const;

type SanctuaryMedia =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; alt: string };

const SanctuaryGallery: React.FC = () => {
  const [active, setActive] = useState<SanctuaryMedia | null>(null);

  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  const videoSrc =
    "https://assets.cdn.filesafe.space/qPFyxcfcKb9ufSnJGOBl/media/69c3fb95e249817419eae703.mp4";

  type TileCol = { wrapper: string; media: SanctuaryMedia };

  const tiles = useMemo((): { left: TileCol[]; middle: TileCol[]; right: TileCol[] } => ({
      left: [
        { wrapper: "aspect-[4/5]", media: { kind: "image", src: "/images/pilgrimage/pool.png", alt: "Sanctuary Pool" } },
        { wrapper: "aspect-square", media: { kind: "image", src: "/images/pilgrimage/sauna.png", alt: "Sanctuary Sauna" } },
        { wrapper: "aspect-[4/5]", media: { kind: "image", src: "/sanctuary/IMG_1864.jpg", alt: "Sanctuary Photo" } },
        { wrapper: "aspect-square", media: { kind: "image", src: "/sanctuary/IMG_1922.jpg", alt: "Sanctuary Photo" } },
        { wrapper: "aspect-[4/5]", media: { kind: "image", src: "/sanctuary/IMG_1926.jpg", alt: "Sanctuary Photo" } },
        { wrapper: "aspect-square", media: { kind: "image", src: "/sanctuary/IMG_1937.jpg", alt: "Sanctuary Photo" } },
      ],
      middle: [
        { wrapper: "aspect-video", media: { kind: "image", src: "/images/pilgrimage/dining_outdoor.png", alt: "Outdoor Dining" } },
        { wrapper: "aspect-[4/5]", media: { kind: "image", src: "/images/pilgrimage/villa_exterior.png", alt: "Villa Exterior" } },
        { wrapper: "aspect-video", media: { kind: "image", src: "/sanctuary/IMG_1948.jpg", alt: "Sanctuary Photo" } },
        { wrapper: "aspect-[4/5]", media: { kind: "image", src: "/sanctuary/IMG_1998.jpg", alt: "Sanctuary Photo" } },
        { wrapper: "aspect-[4/5]", media: { kind: "image", src: "/sanctuary/IMG_2001.jpg", alt: "Sanctuary Photo" } },
        { wrapper: "aspect-video", media: { kind: "video", src: videoSrc, alt: "Sanctuary Building" } },
      ],
      right: [
        { wrapper: "aspect-square", media: { kind: "image", src: "/images/pilgrimage/bedroom.png", alt: "Sanctuary Bedroom" } },
        { wrapper: "aspect-[3/4]", media: { kind: "image", src: "/images/pilgrimage/dining_indoor.png", alt: "Indoor Dining" } },
        { wrapper: "aspect-square", media: { kind: "image", src: "/sanctuary/IMG_2024.jpg", alt: "Sanctuary Photo" } },
        { wrapper: "aspect-[3/4]", media: { kind: "image", src: "/sanctuary/IMG_2040.jpg", alt: "Sanctuary Photo" } },
        { wrapper: "aspect-square", media: { kind: "image", src: "/sanctuary/IMG_2052.jpg", alt: "Sanctuary Photo" } },
      ],
    }),
    [videoSrc]
  );

  const TileButton: React.FC<{
    wrapperClass: string;
    media: SanctuaryMedia;
  }> = ({ wrapperClass, media }) => {
    return (
      <button
        type="button"
        onClick={() => setActive(media)}
        className={`${wrapperClass} w-full overflow-hidden group border border-ink/5 text-left focus:outline-none focus:ring-2 focus:ring-forest/20 rounded-sm`}
        aria-label={`Open ${media.alt}`}
      >
        {media.kind === "image" ? (
          <img
            src={media.src}
            alt={media.alt}
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <video
            src={media.src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
          />
        )}
      </button>
    );
  };

  return (
    <>
      {/* SANCTUARY GALLERY - WHITE */}
      <section className="bg-paper py-48 px-8 overflow-hidden text-ink">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-24">
            <div className="lg:col-span-8 space-y-8">
              <p className="text-forest tracking-[0.4em] uppercase font-bold text-[10px]">
                The Sacred Villa
              </p>
              <h2 className="text-6xl md:text-8xl font-serif italic text-ink leading-[0.8] uppercase">
                The{" "}
                <span className="text-forest lowercase font-light tracking-normal italic">
                  sanctuary.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-4 pb-4">
              <p className="text-lg font-light text-ink/60 italic leading-relaxed">
                A private 17th-century estate nestled in the heart of the Provence countryside,
                where time slows and the soul remembers.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-8">
              {tiles.left.map((t, idx) => (
                <TileButton key={idx} wrapperClass={t.wrapper} media={t.media} />
              ))}
            </div>

            <div className="space-y-8 lg:pt-24">
              {tiles.middle.map((t, idx) => (
                <TileButton key={idx} wrapperClass={t.wrapper} media={t.media} />
              ))}
            </div>

            <div className="space-y-8 md:col-span-2 lg:col-span-1">
              {tiles.right.map((t, idx) => (
                <TileButton key={idx} wrapperClass={t.wrapper} media={t.media} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-[60] bg-ink/85 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Media viewer"
          onMouseDown={() => setActive(null)}
        >
          <div
            className="relative max-w-[96vw] max-h-[92vh] w-auto"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-paper text-ink border border-ink/10 shadow-lg flex items-center justify-center"
              aria-label="Close"
            >
              <span className="text-2xl leading-none">&times;</span>
            </button>

            {active.kind === "image" ? (
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[92vh] w-auto mx-auto object-contain"
              />
            ) : (
              <video
                src={active.src}
                controls
                autoPlay
                loop
                playsInline
                className="max-h-[92vh] w-auto mx-auto object-contain"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export const PilgrimagePage: React.FC = () => (
  <main className="bg-paper overflow-hidden">
    {/* HERO SECTION - DOMINANT GREEN */}
    <section className="bg-forest pt-48 pb-32 px-8 text-cream">
      <div className="container mx-auto">
        <FadeIn className="text-center mb-32 space-y-8">
          <p className="text-cream/70 tracking-[0.4em] uppercase font-semibold text-[10px]">Immersive Sacred Travel</p>
          <h1 className="text-7xl md:text-[8rem] lg:text-[10rem] font-semibold text-cream leading-[0.8]">
            THE <br /><span className="font-serif italic text-cream lowercase font-light">pilgrimages</span>
          </h1>
          <div className="w-24 h-px bg-cream/25 mx-auto my-12"></div>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5 sticky top-32">
            <div className="relative group">
              <img src="/_310.jpg" className="w-full aspect-[4/5] object-cover rounded-sm grayscale-[20%] mb-12 shadow-2xl transition-all duration-1000 group-hover:grayscale-0" alt="Pilgrimage" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cream/5 rounded-full blur-3xl group-hover:bg-cream/10 transition-colors"></div>
            </div>
            <p className="text-2xl font-serif italic text-cream/90 leading-relaxed">
              "Walking the rhythms of the earth, we uncover the ancient Mother Line that beats within our own hearts."
            </p>
          </div>
          
          <div className="lg:col-span-7 space-y-24">
            <div className="space-y-8">
               <h2 className="text-5xl font-serif italic text-cream">The Longing for <br /><span className="text-cream/90 font-light">Direct Experience.</span></h2>
               <div className="space-y-6 text-xl font-light text-cream/70 leading-relaxed italic">
                  <p>"Reading about Her in books was not enough. I longed to experience the lands She walked on, to feel Her presence, not just through the words of others, but through my own direct experience. Who was She? Why was I so drawn to Her?"</p>
                  <p>My personal journey toward reconnecting with the Divine Mother began after I underwent surgery on my womb. It was then that I found myself asking new, unexpected questions: Who is the Divine Mother? What is making women in our society so ill? How can She rise again?</p>
               </div>
            </div>

            <div className="pt-16">
              <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.2 }}
                 className="group border-b border-cream/10 pb-20"
              >
                <div className="flex justify-between items-start mb-12">
                   <span className="text-[10px] tracking-widest uppercase font-bold text-cream/30">01</span>
                   <div className="flex gap-4">
                     <span className="text-[9px] border border-cream/10 px-4 py-1.5 uppercase font-bold text-cream/40 tracking-widest">May 2026</span>
                     <span className="text-[9px] border border-cream/10 px-4 py-1.5 uppercase font-bold text-cream/40 tracking-widest">Open</span>
                   </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-serif italic text-cream mb-8 group-hover:translate-x-4 transition-transform duration-700 uppercase leading-[0.9]">Walking the Mother Line</h3>
                <p className="text-lg md:text-xl font-light text-cream/60 leading-relaxed max-w-2xl mb-12">A deep dive into the physiological and energetic foundations of the divine feminine. Join a circle of hearts traversing ancient lands to honor the goddess within and without.</p>
                <a href="/Walking_the_Mother_Line.pdf" target="_blank" rel="noreferrer" className="contents">
                  <Button variant="sage" className="group-hover:scale-105">
                    Read the Guide Details <ArrowRight className="ml-4 w-4 h-4" />
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CIRCLE OF THE ROSE - OWN SECTION - WHITE */}
    <section className="bg-paper py-32 px-8 text-ink border-b border-ink/5">
      <div className="container mx-auto">
        <FadeIn className="text-center mb-20">
          <span className="text-[10px] tracking-widest uppercase font-bold text-ink/30">02</span>
          <div className="flex justify-center gap-4 mt-6 mb-10">
            <span className="text-[9px] border border-ink/10 px-4 py-1.5 uppercase font-bold text-ink/30 tracking-widest">Late 2026</span>
            <span className="text-[9px] border border-ink/10 px-4 py-1.5 uppercase font-bold text-ink/30 tracking-widest">Waitlist</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-serif italic text-ink uppercase leading-[0.85] mb-8">
            Circle of <span className="text-forest lowercase font-light">the Rose</span>
          </h2>
          <p className="text-xl font-light text-ink/60 leading-relaxed max-w-2xl mx-auto italic mb-16">
            An initiation into the mysteries of the rose lineage. Reclaiming sovereignty, subtle body healing, and collective ceremony in sacred locations.
          </p>
        </FadeIn>

        {/* Full-width video */}
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="w-full aspect-video border border-ink/10 bg-ink/5 overflow-hidden shadow-2xl">
            <video
              src="https://assets.cdn.filesafe.space/qPFyxcfcKb9ufSnJGOBl/media/69c33ec8fe4d0d7489dbe47d.mp4"
              controls
              className="w-full h-full object-cover"
              title="Circle of the Rose Pilgrimage Video"
            />
          </div>

          <div className="text-center space-y-8">
            <p className="text-xl font-serif italic text-ink/60 leading-relaxed border-l-2 border-forest/30 pl-8 text-left max-w-2xl mx-auto">
              May this pilgrimage of the essence of Mary Magdalene invite you back into intimacy with your own devotional heart.
            </p>
            <Link to="/booking" className="contents">
              <Button variant="primary">Secure your Deposit</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>


    {/* QUOTE SECTION - INK (matches footer) */}
    <section className="bg-ink py-48 relative overflow-hidden">
      <div className="container mx-auto px-8 relative z-10 text-center">
        <FadeIn className="space-y-12 max-w-4xl mx-auto">
          <Star className="w-10 h-10 text-sage/40 mx-auto" />
          <h2 className="text-4xl md:text-6xl font-serif italic text-cream leading-tight uppercase">
            "A call to return to the sacred, to witness the <span className="text-sage">unedited self</span>, and to walk the lands that remember our names."
          </h2>
          <div className="flex justify-center items-center gap-6 text-[10px] tracking-[0.4em] uppercase font-bold text-cream/30">
            <div className="w-12 h-px bg-cream/20"></div>
            The Lineage Path
            <div className="w-12 h-px bg-cream/20"></div>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* GUIDES SECTION - WHITE */}
    <section className="bg-cream py-48 px-8 text-ink border-b border-ink/5">
      <div className="container mx-auto">
        <div className="text-center mb-32">
           <p className="text-forest tracking-[0.4em] uppercase font-bold text-[10px] mb-8">The Wisdom Carriers</p>
           <h2 className="text-6xl md:text-7xl font-serif italic text-ink uppercase">Your <span className="text-forest lowercase font-light">guides.</span></h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-32">
          {/* AUDE BARRAS */}
          <FadeIn className="space-y-12 bg-forest/5 p-16 border border-forest/5">
             <div className="flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
                <img src="/Aude%20Barras.jpg" className="w-48 h-48 rounded-full object-cover grayscale opacity-80" alt="Aude Barras" />
                <div className="space-y-4">
                   <h3 className="text-4xl font-serif italic text-forest uppercase">Aude Barras</h3>
                   <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-forest/40">Pilgrimage Guide</span>
                </div>
             </div>
             <div className="text-lg font-light text-ink/70 leading-relaxed space-y-6">
                <p>Through many paths, traditions, & lifetimes of exploring feminine embodiment, Aude found her way in an ancient, living, tantric lineage of Goddess worship. Born Christian, the Divine Mother had called her outside of her own cultural context before returning back to her original faith in the mysticism of Magdalene.</p>
                <p>Ever since, Aude has guided intimate pilgrimages of remembrance, where each who walk offer recognition, as petals of beauty, reawakening the long forgotten lines of the Rose.</p>
             </div>
          </FadeIn>

          {/* MARIA AMIOUNI */}
          <FadeIn className="space-y-12 bg-forest/5 p-16 border border-forest/5">
             <div className="flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
                <img src="/_114.jpg" className="w-48 h-48 rounded-full object-cover grayscale opacity-80" alt="Maria Amiouni" />
                <div className="space-y-4">
                   <h3 className="text-4xl font-serif italic text-forest uppercase">Maria Amiouni</h3>
                   <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-forest/40">Spiritual Mentor</span>
                </div>
             </div>
             <div className="text-lg font-light text-ink/70 leading-relaxed space-y-6">
                <p>Maria Amiouni is a spiritual mentor, writer, and teacher devoted to helping others remember their innate wisdom and return to the rhythm of the Earth and the soul.</p>
                <p>Through her work—blending Human Design, Gene Keys, Astrology, and Rituals—she creates spaces for transformation, reflection, and renewal.</p>
                <p>As the founder of The Phoenix Rising Summit and Sacred Spaces, Maria weaves together ancient teachings with modern awareness to guide others through the cycles of life, death, and rebirth.</p>
                <p>Her approach is rooted in devotion, beauty, and truth, helping you reconnect with your body, align with your purpose, and live from your authentic frequency.</p>
             </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* PRICING & ROOMS SECTION - GREEN */}
    <section className="bg-forest py-48 px-8 text-cream relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sage/[0.02]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage/5 rounded-full blur-[160px]"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <FadeIn className="text-center mb-24">
          <p className="text-sage tracking-[0.4em] uppercase font-semibold text-[10px] mb-8">Investment & Sanctuary</p>
          <h2 className="text-6xl md:text-8xl font-serif italic text-cream uppercase leading-[0.85]">Room <span className="text-sage lowercase font-light">Types.</span></h2>
          <div className="w-24 h-px bg-cream/20 mx-auto mt-12"></div>
        </FadeIn>

        {/* Premium pricing cards */}
        <div className="space-y-4 mb-24">
          {[
            { name: "Deluxe", sub: "Single Room + Private Bath", full: "$4,200", fullMonth: "$1,400 / mo", featured: false },
            { name: "Single Occupancy", sub: "Single Room / Shared Bath", full: "$4,000", fullMonth: "$1,333 / mo", featured: false },
            { name: "Double Occupancy", sub: "Shared Room + Bathroom", full: "$3,300", fullMonth: "$1,100 / mo", featured: true },
          ].map((room, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`group grid md:grid-cols-12 items-center gap-0 border transition-all duration-700 ${
                room.featured
                  ? "border-sage/30 bg-white/5"
                  : "border-cream/10 hover:border-cream/20 hover:bg-white/[0.03]"
              }`}
            >
              <div className="md:col-span-5 p-10 md:p-12 border-b md:border-b-0 md:border-r border-cream/10">
                <p className="text-[9px] tracking-[0.4em] uppercase font-semibold text-cream/30 mb-3">0{i+1}</p>
                <h3 className="text-3xl md:text-4xl font-serif italic text-cream mb-2">{room.name}</h3>
                <p className="text-[10px] tracking-[0.25em] uppercase font-semibold text-cream/30">{room.sub}</p>
              </div>

              <div className="md:col-span-7 p-10 md:p-12">
                <p className="text-[9px] tracking-[0.4em] uppercase font-semibold text-cream/40 mb-4">Current investment</p>
                <p className="text-4xl md:text-5xl font-serif italic text-cream">{room.full}</p>
                <p className="text-[10px] tracking-widest font-semibold text-cream/35 mt-2">{room.fullMonth}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Payment Schedule + Important Dates */}
        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn className="border border-cream/10 p-12 space-y-10 bg-white/[0.03]">
            <h3 className="text-3xl font-serif italic text-sage">3 Month Payment Schedule</h3>
            <div className="space-y-0">
              {[
                { date: "Nov 15 – Jan 31", label: "1st Payment (Sacred Deposit)" },
                { date: "Following Month", label: "2nd Payment" },
                { date: "May 15, 2026", label: "Last Payment Due" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-6 border-b border-cream/10 last:border-0">
                  <span className="text-xl font-serif italic text-cream">{item.date}</span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-sage/70">{item.label}</span>
                </div>
              ))}
            </div>
            <p className="text-xs font-light text-cream/40 italic leading-relaxed border-t border-cream/10 pt-8">
              * The first payment serves as a sacred deposit, confirming your place. This deposit is non-refundable.
            </p>
          </FadeIn>

          <FadeIn className="border border-cream/10 p-12 space-y-10 bg-white/[0.03]">
            <h3 className="text-3xl font-serif italic text-sage">Important Dates</h3>
            <div className="space-y-0">
              {[
                { date: "Mar 31, 2026", label: "Enrolment Closes" },
                { date: "May 7, 2026", label: "Pilgrimage Begins" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-6 border-b border-cream/10 last:border-0">
                  <span className="text-xl font-serif italic text-cream">{item.date}</span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-sage/70">{item.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* SANCTUARY GALLERY - WHITE */}
    <SanctuaryGallery />

    {/* WHAT TO PACK SECTION - INK (matches footer) */}
    <section className="bg-ink py-48 px-8 text-cream">
       <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-24">
             <div className="lg:col-span-1 space-y-12">
                <p className="text-sage tracking-[0.4em] uppercase font-semibold text-[10px]">Preparation</p>
                <h2 className="text-6xl md:text-7xl font-serif italic uppercase text-cream leading-tight">What to <br /><span className="text-sage lowercase tracking-normal font-light">pack.</span></h2>
             </div>
             
             <div className="lg:col-span-2 grid md:grid-cols-2 gap-16">
                {[
                  { category: "Daily Rituals", items: "Journal, pen, offerings, oracle deck, crystals, incense, essential oil, rosary, books to read." },
                  { category: "Body & Care", items: "Water bottle, comfortable hiking boots/sneakers, a backpack/daypack, anti-histamines." },
                  { category: "Attire", items: "Scarves, shawls, light sweaters, socks, hat, sunglasses, rain gear, swimming suit." },
                  { category: "Cave Immersions", items: "Layered clothing (temperatures can drop inside), long pants, or dresses/skirts." }
                ].map((cat, i) => (
                   <div key={i} className="space-y-6 group">
                      <div className="flex items-center gap-6">
                         <div className="w-8 h-px bg-sage/40 group-hover:w-16 transition-all"></div>
                         <h4 className="text-xl font-serif italic text-sage uppercase">{cat.category}</h4>
                      </div>
                      <p className="text-cream/60 font-light leading-relaxed">{cat.items}</p>
                   </div>
                ))}
             </div>
          </div>
       </div>
    </section>

    {/* PILGRIMAGE TESTIMONIALS - WHITE */}
    <section className="bg-cream py-48 px-8 text-ink">
       <div className="container mx-auto">
          <div className="text-center mb-32">
             <p className="text-forest tracking-[0.4em] uppercase font-bold text-[10px] mb-8">Reflections from the path</p>
             <h2 className="text-6xl md:text-7xl font-serif italic text-ink uppercase">Pilgrim <span className="text-forest lowercase font-light">stories.</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
             {[
               { 
                 name: "Alexandra Roxo", 
                 role: "Bestselling Author of F*ck Like a Goddess", 
                 quote: "There was much space for contemplation, ritual, prayer, and silence with the ancient mysteries. She made the journey a place to get to know Mary Magdalene in our hearts and bodies." 
               },
               { 
                 name: "Luna Battalia", 
                 role: "Sacred Space Holder", 
                 quote: "Pilgrimaging with such a grounded, devotional guide as Aude was an incredible once-in-a-lifetime experience. The transformation that is available within a journey like this is truly exponential." 
               },
               { 
                 name: "Basheer Zanayed", 
                 role: "Pilgrim", 
                 quote: "Walking the enchanted forest of Sainte Baume was a cleansing experience, precious to my heart. Majestically magical, immaculately gorgeous, enchanting and breathtaking!" 
               }
             ].map((test, i) => (
                <FadeIn key={i} className="bg-paper p-16 border border-ink/10 flex flex-col justify-between h-full shadow-sm">
                   <div className="space-y-8">
                      <Star className="w-8 h-8 text-forest opacity-40" />
                      <p className="text-2xl font-serif italic text-ink leading-relaxed italic">"{test.quote}"</p>
                   </div>
                   <div className="pt-16 border-t border-ink/5 mt-16">
                      <h4 className="text-lg font-serif italic text-forest uppercase">{test.name}</h4>
                      <p className="text-[9px] uppercase tracking-widest font-bold text-ink/40 mt-2">{test.role}</p>
                   </div>
                </FadeIn>
             ))}
          </div>
       </div>
     </section>

  </main>
);

export const MentorshipPage: React.FC = () => (
  <main className="bg-paper overflow-hidden">
    {/* HERO SECTION - DOMINANT GREEN */}
    <section className="bg-forest pt-48 pb-32 px-8 text-cream">
       <div className="container mx-auto">
        <FadeIn className="text-center mb-32 space-y-8">
          <p className="text-cream/70 tracking-[0.4em] uppercase font-semibold text-[10px]">1-on-1 Sanctuary</p>
          <h1 className="text-7xl md:text-9xl font-semibold text-cream uppercase">PRIVATE <br /><span className="font-serif italic text-cream lowercase tracking-normal font-light">mentorship</span></h1>
          <div className="w-24 h-px bg-cream/25 mx-auto my-12"></div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="aspect-square relative flex items-center justify-center">
             <img src="/_31.jpg" className="w-full h-full object-cover rounded-full grayscale-[10%]" alt="Coaching" />
             <div className="absolute inset-0 border-[2px] border-cream/25 rounded-full scale-110"></div>
          </div>
          
          <FadeIn className="space-y-12">
            <p className="text-3xl font-serif italic text-cream/95 leading-snug">
              A bespoke journey into the heart of your sovereign truth, blending psychotherapy with spirit-led guidance.
            </p>
            <div className="space-y-8 text-lg font-light text-cream/70 leading-relaxed">
              <p>Private mentorship is an invitation into a dedicated container where we witness the layers of your path together. Through somatic inquiry, psychotherapeutic tools, and energetic clearing, we build the foundations for your evolution.</p>
              <ul className="space-y-6 pt-8">
                {["Customized 3 and 6 month containers", "Bi-weekly 90-minute immersion sessions", "WhatsApp support for ongoing integration", "Bespoke somatic practices and ritual guides"].map((item, i) => (
                  <li key={i} className="flex items-center gap-6 text-cream/80 border-b border-cream/5 pb-6">
                    <Star className="w-4 h-4 text-cream/80" />
                    <span className="text-sm uppercase tracking-widest font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-12">
              <Link to="/booking" className="contents">
                <Button variant="sage" className="px-16">Apply for Mentorship</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <TestimonialsGallerySection
      images={[...MENTORSHIP_TESTIMONIAL_IMAGES]}
      eyebrow="From the community"
      title={
        <>
          Client <span className="font-serif italic text-cream">reflections</span>
        </>
      }
      subtitle="Screenshots from the 1-on-1 Sanctuary — tap any card to view full size."
      reflectionSuffix="Mentorship"
      lightboxAlt="Mentorship testimonial"
    />

    {/* LET'S BE FRIENDS GALLERY */}
    <section className="bg-[#012e27] text-cream py-48 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sage/10 rounded-full blur-[160px]"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-8xl font-semibold text-cream uppercase leading-[0.85] mb-6">
            LET'S BE <span className="font-serif italic text-cream lowercase font-light">Friends</span>
          </h2>
          <a
            href="https://www.instagram.com/maria.amiouni"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] tracking-[0.5em] uppercase font-semibold text-cream/40 hover:text-cream transition-colors duration-500 inline-block"
          >
            @maria.amiouni — open on Instagram
          </a>
        </div>

        {/* Paste a SnapWidget / Elfsight iframe URL in INSTAGRAM_FEED_EMBED_URL (src/constants/ghl.ts) for a live grid */}
        <div className="max-w-4xl mx-auto rounded-sm overflow-hidden border border-cream/10 bg-ink/40 min-h-[320px]">
          {INSTAGRAM_FEED_EMBED_URL ? (
            <iframe
              src={INSTAGRAM_FEED_EMBED_URL}
              title="Instagram feed"
              className="w-full min-h-[480px] border-0 bg-transparent"
              loading="lazy"
            />
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 p-4">
              {["/_304.jpg", "/_31.jpg", "/_310.jpg", "/_401.jpg", "/_418.jpg", "/_423.jpg"].map((src, i) => (
                <motion.a
                  key={src}
                  href="https://www.instagram.com/maria.amiouni"
                  target="_blank"
                  rel="noreferrer"
                  className="aspect-square overflow-hidden group block"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.8 }}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  </main>
);

export const SacredSpacesPage: React.FC = () => (
  <main className="bg-paper overflow-hidden">
    {/* HERO SECTION - DOMINANT GREEN */}
    <section className="bg-forest pt-48 pb-32 px-8 text-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cream/5 -skew-x-12 translate-x-1/2"></div>
      <div className="container mx-auto relative z-10">
        <FadeIn className="text-center mb-32 space-y-8">
          <p className="text-cream/70 tracking-[0.4em] uppercase font-semibold text-[10px]">Community & Connection</p>
          <h1 className="text-7xl md:text-9xl font-semibold text-cream uppercase">SACRED <br /><span className="font-serif italic text-cream lowercase tracking-normal font-light">spaces</span></h1>
          <div className="w-24 h-px bg-cream/25 mx-auto my-12"></div>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-4 shrink-0">
             <div className="relative p-12 bg-white/5 border border-cream/15 rounded-sm">
               <h3 className="text-2xl font-serif italic text-cream mb-8 uppercase">Gathering locally and globally.</h3>
               <p className="text-cream/60 font-light leading-relaxed mb-8 italic">In-person and virtual containers devoted to somatic practice, horizontal sharing, and collective liberation.</p>
               <div className="space-y-4 pt-8 border-t border-cream/10">
                  <p className="text-[10px] tracking-widest uppercase font-semibold text-cream/80">Next Circle</p>
                  <p className="text-xl font-serif italic text-cream">Sunday, April 12th · 11:00 AM</p>
               </div>
             </div>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-px bg-cream/10 border border-cream/10">
             {[
               { title: "Women's Circles", desc: "Moving away from hierarchies into circles of lived truth and horizontal support. Gatherings held regularly in Dubai." },
               { title: "Somatic Inquiry", desc: "Gathering as bodies, reregulating as a collective, and being witnessed in our humanity." },
               { title: "Ceremony", desc: "Honoring the moon cycles, seasonal shifts, and the living intelligence of the spaces we inhabit." },
               { title: "Retreat Day-Immersions", desc: "Strengthening the community of seekers right here in the region through full-day somatic immersions." }
             ].map((feature, i) => (
               <div key={i} className="p-16 bg-forest group hover:bg-white/5 transition-colors duration-700">
                 <h4 className="text-2xl font-serif italic text-cream mb-6 group-hover:text-cream transition-colors uppercase">{feature.title}</h4>
                 <p className="text-cream/80 font-light text-sm leading-relaxed">{feature.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>

    {/* CALENDAR SECTION - WHITE */}
    <section className="bg-cream py-48 px-8 text-ink">
      <div className="container mx-auto text-center">
         <FadeIn className="space-y-12">
            <h2 className="text-5xl md:text-7xl font-serif italic text-ink uppercase">Join the <span className="text-forest">Circle.</span></h2>
            <p className="text-lg font-light text-ink/60 max-w-2xl mx-auto italic leading-relaxed">
               View our upcoming gatherings, retreats, and virtual sanctuary spaces.
            </p>
            <div className="pt-12">
               <Link to="/booking" className="contents">
                 <Button variant="primary">View Calendar of Spaces</Button>
               </Link>
            </div>
         </FadeIn>
      </div>
    </section>
  </main>
);
