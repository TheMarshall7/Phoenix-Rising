import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button, FadeIn } from "../components/Common";

export const PilgrimagePage: React.FC = () => (
  <main className="bg-paper overflow-hidden">
    {/* HERO SECTION - DOMINANT GREEN */}
    <section className="bg-forest pt-48 pb-32 px-8 text-cream">
      <div className="container mx-auto">
        <FadeIn className="text-center mb-32 space-y-8">
          <p className="text-sage tracking-[0.4em] uppercase font-bold text-[10px]">Immersive Sacred Travel</p>
          <h1 className="text-7xl md:text-[8rem] lg:text-[10rem] font-medium text-cream leading-[0.8]">
            THE <br /><span className="font-serif italic text-sage lowercase font-light">pilgrimages</span>
          </h1>
          <div className="w-24 h-px bg-sage/20 mx-auto my-12"></div>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5 sticky top-32">
            <div className="relative group">
              <img src="/_310.jpg" className="w-full aspect-[4/5] object-cover rounded-sm grayscale-[20%] mb-12 shadow-2xl transition-all duration-1000 group-hover:grayscale-0" alt="Pilgrimage" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sage/5 rounded-full blur-3xl group-hover:bg-sage/10 transition-colors"></div>
            </div>
            <p className="text-2xl font-serif italic text-sage leading-relaxed">
              "Walking the rhythms of the earth, we uncover the ancient Mother Line that beats within our own hearts."
            </p>
          </div>
          
          <div className="lg:col-span-7 space-y-24">
            <div className="space-y-8">
               <h2 className="text-5xl font-serif italic text-cream">The Longing for <br /><span className="text-sage font-light">Direct Experience.</span></h2>
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
                <h3 className="text-4xl md:text-5xl font-serif italic text-sage mb-8 group-hover:translate-x-4 transition-transform duration-700 uppercase leading-[0.9]">Walking the Mother Line</h3>
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
              src="/Circle of the Rose - May 2026.mp4"
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
                <img src="/_310.jpg" className="w-48 h-48 rounded-full object-cover grayscale opacity-80" alt="Aude Barras" />
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
                   <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-forest/40">Spiritual Mentor & Mystery Lover</span>
                </div>
             </div>
             <div className="text-lg font-light text-ink/70 leading-relaxed space-y-6">
                <p>After years of seeking—truth, answers, unconditional Love—I finally felt at home in my body & in this world. Rooted in ancestral wisdom and psychotherapy, I blend somatic practices and specific Human Design mechanics to honor your unique spirit.</p>
                <p>I guide you to break cycles, master your energy, and heal deeply—helping you lead with clarity, confidence, and self-trust.</p>
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
          <p className="text-sage tracking-[0.4em] uppercase font-bold text-[10px] mb-8">Investment & Sanctuary</p>
          <h2 className="text-6xl md:text-8xl font-serif italic text-cream uppercase leading-[0.85]">Room <span className="text-sage lowercase font-light">Types.</span></h2>
          <div className="w-24 h-px bg-sage/20 mx-auto mt-12"></div>
        </FadeIn>

        {/* Premium pricing cards */}
        <div className="space-y-4 mb-24">
          {[
            { name: "Deluxe", sub: "Single Room + Private Bath", earlyBird: "$3,500", earlyMonth: "$1,167 / mo", full: "$4,200", fullMonth: "$1,400 / mo", featured: false },
            { name: "Single Occupancy", sub: "Single Room / Shared Bath", earlyBird: "$3,200", earlyMonth: "$1,067 / mo", full: "$4,000", fullMonth: "$1,333 / mo", featured: false },
            { name: "Double Occupancy", sub: "Shared Room + Bathroom", earlyBird: "$2,900", earlyMonth: "$966 / mo", full: "$3,300", fullMonth: "$1,100 / mo", featured: true },
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
              {/* Room name */}
              <div className="md:col-span-4 p-10 md:p-12 border-b md:border-b-0 md:border-r border-cream/10">
                <p className="text-[9px] tracking-[0.4em] uppercase font-bold text-cream/30 mb-3">0{i+1}</p>
                <h3 className="text-3xl md:text-4xl font-serif italic text-cream mb-2">{room.name}</h3>
                <p className="text-[10px] tracking-[0.25em] uppercase font-bold text-cream/30">{room.sub}</p>
              </div>

              {/* Early Bird */}
              <div className="md:col-span-4 p-10 md:p-12 border-b md:border-b-0 md:border-r border-cream/10 bg-sage/5">
                <p className="text-[9px] tracking-[0.4em] uppercase font-bold text-sage mb-4">Early Bird</p>
                <p className="text-4xl md:text-5xl font-serif italic text-cream">{room.earlyBird}</p>
                <p className="text-[10px] tracking-widest font-bold text-cream/30 mt-2">{room.earlyMonth}</p>
              </div>

              {/* Full Price */}
              <div className="md:col-span-4 p-10 md:p-12">
                <p className="text-[9px] tracking-[0.4em] uppercase font-bold text-cream/30 mb-4">Full Price</p>
                <p className="text-4xl md:text-5xl font-serif italic text-cream/60">{room.full}</p>
                <p className="text-[10px] tracking-widest font-bold text-cream/20 mt-2">{room.fullMonth}</p>
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
                  <span className="text-[10px] uppercase tracking-widest font-bold text-sage/70">{item.label}</span>
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
                { date: "Jan 18, 2025", label: "Early-Bird Opens" },
                { date: "Jan 31, 2026", label: "Early-Bird Closes" },
                { date: "Mar 31, 2026", label: "Regular Enrolment Closes" },
                { date: "May 7, 2026", label: "Pilgrimage Begins" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-6 border-b border-cream/10 last:border-0">
                  <span className="text-xl font-serif italic text-cream">{item.date}</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-sage/70">{item.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* SANCTUARY GALLERY - WHITE */}
    <section className="bg-paper py-48 px-8 overflow-hidden text-ink">
       <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-24">
             <div className="lg:col-span-8 space-y-8">
                <p className="text-forest tracking-[0.4em] uppercase font-bold text-[10px]">The Sacred Villa</p>
                <h2 className="text-6xl md:text-8xl font-serif italic text-ink leading-[0.8] uppercase">The <span className="text-forest lowercase font-light tracking-normal italic">sanctuary.</span></h2>
             </div>
             <div className="lg:col-span-4 pb-4">
                <p className="text-lg font-light text-ink/60 italic leading-relaxed">
                   A private 17th-century estate nestled in the heart of the Provence countryside, where time slows and the soul remembers.
                </p>
             </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="space-y-8">
                <div className="aspect-[4/5] overflow-hidden group border border-ink/5">
                   <img src="/images/pilgrimage/pool.png" alt="Sanctuary Pool" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
                <div className="aspect-square overflow-hidden group border border-ink/5">
                   <img src="/images/pilgrimage/sauna.png" alt="Sanctuary Sauna" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
             </div>
             <div className="space-y-8 lg:pt-24">
                <div className="aspect-video overflow-hidden group border border-ink/5">
                   <img src="/images/pilgrimage/dining_outdoor.png" alt="Outdoor Dining" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
                <div className="aspect-[4/5] overflow-hidden group border border-ink/5">
                   <img src="/images/pilgrimage/villa_exterior.png" alt="Villa Exterior" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
             </div>
             <div className="space-y-8 md:col-span-2 lg:col-span-1">
                <div className="aspect-square overflow-hidden group border border-ink/5">
                   <img src="/images/pilgrimage/bedroom.png" alt="Sanctuary Bedroom" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
                <div className="aspect-[3/4] overflow-hidden group border border-ink/5">
                   <img src="/images/pilgrimage/dining_indoor.png" alt="Indoor Dining" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
             </div>
          </div>
       </div>
    </section>

    {/* WHAT TO PACK SECTION - INK (matches footer) */}
    <section className="bg-ink py-48 px-8 text-cream">
       <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-24">
             <div className="lg:col-span-1 space-y-12">
                <p className="text-sage tracking-[0.4em] uppercase font-bold text-[10px]">Preparation</p>
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

          <div className="grid md:grid-cols-2 gap-16">
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
          <p className="text-sage tracking-[0.4em] uppercase font-bold text-[10px]">1-on-1 Sanctuary</p>
          <h1 className="text-7xl md:text-9xl font-medium text-cream uppercase">PRIVATE <br /><span className="font-serif italic text-sage lowercase tracking-normal font-light">mentorship</span></h1>
          <div className="w-24 h-px bg-sage/20 mx-auto my-12"></div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="aspect-square relative flex items-center justify-center">
             <img src="/_31.jpg" className="w-full h-full object-cover rounded-full grayscale-[10%]" alt="Coaching" />
             <div className="absolute inset-0 border-[2px] border-sage/20 rounded-full scale-110"></div>
          </div>
          
          <FadeIn className="space-y-12">
            <p className="text-3xl font-serif italic text-sage leading-snug">
              A bespoke journey into the heart of your sovereign truth, blending psychotherapy with spirit-led guidance.
            </p>
            <div className="space-y-8 text-lg font-light text-cream/70 leading-relaxed">
              <p>Private mentorship is an invitation into a dedicated container where we witness the layers of your path together. Through somatic inquiry, psychotherapeutic tools, and energetic clearing, we build the foundations for your evolution.</p>
              <ul className="space-y-6 pt-8">
                {["Customized 3 and 6 month containers", "Bi-weekly 90-minute immersion sessions", "WhatsApp support for ongoing integration", "Bespoke somatic practices and ritual guides"].map((item, i) => (
                  <li key={i} className="flex items-center gap-6 text-cream/80 border-b border-cream/5 pb-6">
                    <Star className="w-4 h-4 text-sage" />
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

    {/* WITNESSED SHIFTS SECTION - WHITE */}
    <section className="bg-cream py-48 pb-60 px-8">
      <div className="container mx-auto">
        <FadeIn>
          <div className="text-center mb-24">
            <p className="text-forest tracking-[0.3em] uppercase font-bold text-[10px] mb-8">Client Reflections</p>
            <h2 className="text-5xl md:text-6xl font-serif italic text-ink mb-12 uppercase">Witnessed <span className="text-forest lowercase">Shifts.</span></h2>
            <p className="text-ink/60 font-light max-w-xl mx-auto tracking-wide italic leading-relaxed">
              Glimpses into the inner movement and profound breakthroughs experienced within the 1-on-1 Sanctuary.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                text: "I feel like I didn't really know it but I always kind of had 1 foot in and foot out of spirituality and never really opened myself enough to let it in... I had such a different experience this time doing the reiki, I genuinely feel like I've expanded, my heart feels fuller and I believe in myself a whole lot more.",
                author: "Client Reflection",
                tag: "Energy Work"
              },
              {
                text: "Thank you for all the human design reading and your classes. I love myself more everyday and I believe more everyday! You’re wonderful and I’m blessed to know you and have the opportunity to say this all again to your divine being.",
                author: "Client Reflection",
                tag: "Human Design"
              },
              {
                text: "Thanks for giving me the space to explore and to make realizations. Huge impact since our first session.",
                author: "Client Reflection",
                tag: "1-on-1 Sanctuary"
              },
              {
                text: "It was a pleasure meeting with you and listening to you validated a lot of things that I thought were normal in me as a person. Connecting the dots helps me adjust even more and seeing things clearly now. The future is bright.",
                author: "Client Reflection",
                tag: "Somatic Inquiry"
              }
            ].map((testimonial, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="relative overflow-hidden group bg-paper p-12 md:p-16 border border-forest/5 rounded-sm hover:shadow-2xl hover:shadow-forest/5 transition-all duration-700 h-full flex flex-col justify-between"
               >
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Star className="w-12 h-12 text-forest" />
                 </div>
                 
                 <div className="space-y-8 relative z-10">
                   <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-sage opacity-80">{testimonial.tag}</span>
                   <p className="text-xl md:text-2xl font-serif italic text-ink/80 leading-relaxed font-light">
                     "{testimonial.text}"
                   </p>
                 </div>

                 <div className="pt-12 border-t border-ink/5 mt-auto">
                    <div className="flex items-center gap-4">
                       <div className="w-8 h-px bg-forest/30"></div>
                       <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-forest">{testimonial.author}</span>
                    </div>
                 </div>
               </motion.div>
            ))}
          </div>
        </FadeIn>
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
          <p className="text-sage tracking-[0.4em] uppercase font-bold text-[10px]">Community & Connection</p>
          <h1 className="text-7xl md:text-9xl font-medium text-cream uppercase">SACRED <br /><span className="font-serif italic text-sage lowercase tracking-normal font-light">spaces</span></h1>
          <div className="w-24 h-px bg-sage/20 mx-auto my-12"></div>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-4 shrink-0">
             <div className="relative p-12 bg-white/5 border border-sage/10 rounded-sm">
               <h3 className="text-2xl font-serif italic text-sage mb-8 uppercase">Gathering locally and globally.</h3>
               <p className="text-cream/60 font-light leading-relaxed mb-8 italic">In-person and virtual containers devoted to somatic practice, horizontal sharing, and collective liberation.</p>
               <div className="space-y-4 pt-8 border-t border-cream/10">
                  <p className="text-[10px] tracking-widest uppercase font-bold text-sage">Next Circle</p>
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
                 <h4 className="text-2xl font-serif italic text-cream mb-6 group-hover:text-sage transition-colors uppercase">{feature.title}</h4>
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
