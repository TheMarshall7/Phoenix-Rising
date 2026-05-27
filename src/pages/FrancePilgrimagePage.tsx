import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { FadeIn } from "../components/Common";

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

  const items: SanctuaryMedia[] = [
    { kind: "image", src: "/images/pilgrimage/pool.png", alt: "Sanctuary Pool" },
    { kind: "image", src: "/images/pilgrimage/sauna.png", alt: "Sanctuary Sauna" },
    { kind: "image", src: "/images/pilgrimage/dining_outdoor.png", alt: "Outdoor Dining" },
    { kind: "image", src: "/images/pilgrimage/villa_exterior.png", alt: "Villa Exterior" },
    { kind: "image", src: "/images/pilgrimage/bedroom.png", alt: "Sanctuary Bedroom" },
    { kind: "image", src: "/images/pilgrimage/dining_indoor.png", alt: "Indoor Dining" },
  ];

  return (
    <section className="bg-cream py-48 px-8 text-ink relative">
      <div className="container mx-auto">
        <div className="text-center mb-32">
          <p className="text-forest tracking-[0.4em] uppercase font-bold text-[10px] mb-8">Sacred Space</p>
          <h2 className="text-6xl md:text-7xl font-serif italic text-ink uppercase">The Sanctuary.</h2>
          <div className="w-24 h-px bg-forest/20 mx-auto mt-12"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {items.map((x, i) => (
              <motion.a
                key={i}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActive(x);
                }}
                className={`group relative overflow-hidden block ${
                  i === 0 ? "aspect-[4/5]" : i === 1 ? "aspect-square" : i === 2 ? "aspect-video" : i === 3 ? "aspect-[4/5]" : i === 4 ? "aspect-square" : "aspect-[3/4]"
                }`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.8 }}
              >
                <img
                  src={x.src}
                  alt={x.alt}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  loading="lazy"
                  decoding="async"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const FrancePilgrimagePage: React.FC = () => {
  return (
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
                      <div className="flex gap-4">
                        <span className="text-[9px] border border-cream/10 px-4 py-1.5 uppercase font-bold text-cream/40 tracking-widest">May 2027</span>
                        <span className="text-[9px] border border-cream/10 px-4 py-1.5 uppercase font-bold text-cream/40 tracking-widest">Open</span>
                      </div>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-serif italic text-cream mb-8 group-hover:translate-x-4 transition-transform duration-700 uppercase leading-[0.9]">Walking the Mother Line</h3>
                  <p className="text-lg md:text-xl font-light text-cream/60 leading-relaxed max-w-2xl mb-12">A deep dive into the physiological and energetic foundations of the divine feminine. Join a circle of hearts traversing ancient lands to honor the goddess within and without.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CIRCLE OF THE ROSE - OWN SECTION - WHITE */}
      <section className="bg-paper py-32 px-8 text-ink border-b border-ink/5">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <div className="flex justify-center gap-4 mt-6 mb-10">
              <span className="text-[9px] border border-ink/10 px-4 py-1.5 uppercase font-bold text-ink/30 tracking-widest">Late 2027</span>
              <span className="text-[9px] border border-ink/10 px-4 py-1.5 uppercase font-bold text-ink/30 tracking-widest">Waitlist</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-serif italic text-ink uppercase leading-[0.85] mb-8">
              Circle of <span className="text-forest lowercase font-light">the Rose</span>
            </h2>
            <p className="text-xl font-light text-ink/60 leading-relaxed max-w-2xl mx-auto italic mb-16">
              An initiation into the mysteries of the rose lineage. Reclaiming sovereignty, subtle body healing, and collective ceremony in sacred locations.
            </p>
          </div>

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

            <div className="text-center">
              <p className="text-xl font-serif italic text-ink/60 leading-relaxed border-l-2 border-forest/30 pl-8 text-left max-w-2xl mx-auto">
                May this pilgrimage of the essence of Mary Magdalene invite you back into intimacy with your own devotional heart.
              </p>
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
              { name: "Deluxe", sub: "Single Room + Private Bath", full: "TBA", fullMonth: "TBA", featured: false },
              { name: "Single Occupancy", sub: "Single Room / Shared Bath", full: "TBA", fullMonth: "TBA", featured: false },
              { name: "Double Occupancy", sub: "Shared Room + Bathroom", full: "TBA", fullMonth: "TBA", featured: true },
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
                  <p className="text-[10px] tracking-widest font-semibold text-cream/30">{room.sub}</p>
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
              <h3 className="text-3xl font-serif italic text-sage">Payment Schedule</h3>
              <div className="space-y-0">
                {[
                  { date: "TBA", label: "1st Payment (Sacred Deposit)" },
                  { date: "TBA", label: "2nd Payment" },
                  { date: "TBA", label: "Last Payment Due" }
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
                  { date: "TBA", label: "Enrolment Closes" },
                  { date: "TBA", label: "Pilgrimage Begins" }
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
};
