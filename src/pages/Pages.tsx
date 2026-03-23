import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button, FadeIn } from "../components/Common";

export const PilgrimagePage: React.FC = () => (
  <main className="bg-paper overflow-hidden">
    {/* HERO SECTION */}
    <section className="pt-48 pb-32 px-8">
      <div className="container mx-auto">
        <FadeIn className="text-center mb-32 space-y-8">
          <p className="text-burgundy tracking-[0.4em] uppercase font-bold text-[10px]">Immersive Sacred Travel</p>
          <h1 className="text-7xl md:text-[8rem] lg:text-[10rem] font-medium text-ink leading-[0.8]">
            THE <br /><span className="font-serif italic text-burgundy lowercase">pilgrimages</span>
          </h1>
          <div className="w-24 h-px bg-burgundy/20 mx-auto my-12"></div>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5 sticky top-32">
            <div className="relative group">
              <img src="/_310.jpg" className="w-full aspect-[4/5] object-cover rounded-sm grayscale-[20%] mb-12 shadow-2xl transition-all duration-1000 group-hover:grayscale-0" alt="Pilgrimage" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-burgundy/5 rounded-full blur-3xl group-hover:bg-burgundy/10 transition-colors"></div>
            </div>
            <p className="text-2xl font-serif italic text-burgundy leading-relaxed">
              "Walking the rhythms of the earth, we uncover the ancient Mother Line that beats within our own hearts."
            </p>
          </div>
          
          <div className="lg:col-span-7 space-y-24">
            <div className="space-y-8">
               <h2 className="text-5xl font-serif italic text-ink">The Longing for <br /><span className="text-burgundy">Direct Experience.</span></h2>
               <div className="space-y-6 text-xl font-light text-ink/70 leading-relaxed italic">
                  <p>"Reading about Her in books was not enough. I longed to experience the lands She walked on, to feel Her presence, not just through the words of others, but through my own direct experience. Who was She? Why was I so drawn to Her?"</p>
                  <p>My personal journey toward reconnecting with the Divine Mother began after I underwent surgery on my womb. It was then that I found myself asking new, unexpected questions: Who is the Divine Mother? What is making women in our society so ill? How can She rise again?</p>
               </div>
            </div>

            <div className="pt-16 space-y-32">
              {[
                { title: "Walking the Mother Line", duration: "May 2026", level: "Open", desc: "A deep dive into the physiological and energetic foundations of the divine feminine. Join a circle of hearts traversing ancient lands to honor the goddess within and without." },
                { title: "Circle of the Rose", duration: "Late 2026", level: "Waitlist", desc: "An initiation into the mysteries of the rose lineage. Reclaiming sovereignty, subtle body healing, and collective ceremony in sacred locations." }
              ].map((course, i) => (
                <motion.div 
                   key={course.title} 
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1.2, delay: i * 0.2 }}
                   className="group border-b border-ink/10 pb-20 last:border-0"
                >
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-[10px] tracking-widest uppercase font-bold text-ink/30">0{i+1}</span>
                    <div className="flex gap-4">
                      <span className="text-[9px] border border-ink/10 px-4 py-1.5 uppercase font-bold text-ink/40 tracking-widest">{course.duration}</span>
                      <span className="text-[9px] border border-ink/10 px-4 py-1.5 uppercase font-bold text-ink/40 tracking-widest">{course.level}</span>
                    </div>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-serif italic text-burgundy mb-8 group-hover:translate-x-4 transition-transform duration-700">{course.title}</h3>
                  <p className="text-lg md:text-xl font-light text-ink/60 leading-relaxed max-w-2xl mb-12">{course.desc}</p>
                  {course.title === "Walking the Mother Line" ? (
                    <a href="/Walking_the_Mother_Line.pdf" target="_blank" rel="noreferrer">
                      <Button variant="primary" className="group-hover:bg-burgundy group-hover:text-cream group-hover:border-burgundy">
                        Read the Guide Details <ArrowRight className="ml-4 w-4 h-4" />
                      </Button>
                    </a>
                  ) : (
                    <Button variant="outline" className="group-hover:bg-burgundy group-hover:text-cream group-hover:border-burgundy">
                      View Itinerary <ArrowRight className="ml-4 w-4 h-4" />
                    </Button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* QUOTE SECTION (RED BREAKUP) */}
    <section className="bg-burgundy py-48 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-cream rounded-full blur-[160px] -translate-y-1/2"></div>
      </div>
      <div className="container mx-auto px-8 relative z-10 text-center">
        <FadeIn className="space-y-12 max-w-4xl mx-auto">
          <Star className="w-10 h-10 text-sage/40 mx-auto" />
          <h2 className="text-4xl md:text-6xl font-serif italic text-cream leading-tight">
            "A call to return to the sacred, to witness the unedited self, and to walk the lands that remember our names."
          </h2>
          <div className="flex justify-center items-center gap-6 text-[10px] tracking-[0.4em] uppercase font-bold text-sage">
            <div className="w-12 h-px bg-sage/30"></div>
            The Lineage Path
            <div className="w-12 h-px bg-sage/30"></div>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* GUIDES SECTION */}
    <section className="bg-cream py-48 px-8">
      <div className="container mx-auto">
        <div className="text-center mb-32">
           <p className="text-burgundy tracking-[0.4em] uppercase font-bold text-[10px] mb-8">The Wisdom Carriers</p>
           <h2 className="text-6xl md:text-7xl font-serif italic text-ink">Your <span className="text-burgundy">Guides.</span></h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-32">
          {/* AUDE BARRAS */}
          <FadeIn className="space-y-12 bg-white/50 p-16 border border-ink/5">
             <div className="flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
                <img src="/_310.jpg" className="w-48 h-48 rounded-full object-cover grayscale" alt="Aude Barras" />
                <div className="space-y-4">
                   <h3 className="text-4xl font-serif italic text-burgundy">Aude Barras</h3>
                   <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-ink/40">Pilgrimage Guide</span>
                </div>
             </div>
             <div className="text-lg font-light text-ink/70 leading-relaxed space-y-6">
                <p>Through many paths, traditions, & lifetimes of exploring feminine embodiment, Aude found her way in an ancient, living, tantric lineage of Goddess worship. born Christian, the Divine Mother had called her outside of her own cultural context before returning back to her original faith in the mysticism of Magdalene.</p>
                <p>Ever since Aude has guided intimate pilgrimages of remembrance, where each who walk offer recognition, as petals of beauty, reawakening the long forgotten lines of the Rose.</p>
             </div>
          </FadeIn>

          {/* MARIA AMIOUNI */}
          <FadeIn className="space-y-12 bg-white/50 p-16 border border-ink/5">
             <div className="flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
                <img src="/_114.jpg" className="w-48 h-48 rounded-full object-cover grayscale" alt="Maria Amiouni" />
                <div className="space-y-4">
                   <h3 className="text-4xl font-serif italic text-burgundy">Maria Amiouni</h3>
                   <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-ink/40">Spiritual Mentor & Mystery Lover</span>
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

    {/* PRICING & ROOMS SECTION */}
    <section className="bg-paper py-48 px-8 border-y border-ink/5">
       <div className="container mx-auto overflow-hidden">
          <div className="text-center mb-32">
             <p className="text-burgundy tracking-[0.4em] uppercase font-bold text-[10px] mb-8">Investment & Sanctuary</p>
             <h2 className="text-6xl md:text-7xl font-serif italic text-ink uppercase">Room <span className="text-burgundy">Types.</span></h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="border-b border-ink/10 text-[10px] uppercase tracking-[0.3em] font-bold text-ink/40">
                     <th className="py-12 px-6">Room Type</th>
                     <th className="py-12 px-6">Early Bird (USD)</th>
                     <th className="py-12 px-6">Full Price (USD)</th>
                  </tr>
               </thead>
               <tbody className="text-lg font-serif italic text-ink">
                  <tr className="border-b border-ink/5 hover:bg-burgundy/5 transition-colors">
                     <td className="py-16 px-6">
                        <span className="block text-2xl mb-2">Deluxe</span>
                        <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold opacity-40">Single Room + Private Bath</span>
                     </td>
                     <td className="py-16 px-6">
                        <span className="block">$3,500</span>
                        <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold opacity-40">$1,167 / month</span>
                     </td>
                     <td className="py-16 px-6">
                        <span className="block">$4,200</span>
                        <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold opacity-40">$1,400 / month</span>
                     </td>
                  </tr>
                  <tr className="border-b border-ink/5 hover:bg-burgundy/5 transition-colors">
                     <td className="py-16 px-6">
                        <span className="block text-2xl mb-2">Single Occupancy</span>
                        <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold opacity-40">Single Room / Shared Bath</span>
                     </td>
                     <td className="py-16 px-6">
                        <span className="block">$3,200</span>
                        <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold opacity-40">$1,067 / month</span>
                     </td>
                     <td className="py-16 px-6">
                        <span className="block">$4,000</span>
                        <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold opacity-40">$1,333 / month</span>
                     </td>
                  </tr>
                  <tr className="border-b border-ink/5 hover:bg-burgundy/5 transition-colors">
                     <td className="py-16 px-6">
                        <span className="block text-2xl mb-2">Double Occupancy</span>
                        <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold opacity-40">Shared Room + Bathroom</span>
                     </td>
                     <td className="py-16 px-6">
                        <span className="block">$2,900</span>
                        <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold opacity-40">$966 / month</span>
                     </td>
                     <td className="py-16 px-6">
                        <span className="block">$3,300</span>
                        <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold opacity-40">$1,100 / month</span>
                     </td>
                  </tr>
               </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-24 mt-48">
             <FadeIn className="space-y-12">
                <h3 className="text-4xl font-serif italic text-burgundy">3 Month Payment Schedule</h3>
                <div className="space-y-8">
                   {[
                     { date: "Nov 15 - Jan 31", label: "1st Payment (Sacred Deposit)" },
                     { date: "Following Month", label: "2nd Payment" },
                     { date: "May 15, 2026", label: "Last Payment Due" }
                   ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-ink/10 pb-6">
                         <span className="text-xl font-serif italic text-ink">{item.date}</span>
                         <span className="text-[11px] uppercase tracking-widest font-bold text-ink/40">{item.label}</span>
                      </div>
                   ))}
                </div>
                <p className="text-sm font-light text-ink/50 italic leading-relaxed">
                   * The first payment serves as a sacred deposit, confirming your place. This deposit is non-refundable.
                </p>
             </FadeIn>

             <FadeIn className="space-y-12">
                <h3 className="text-4xl font-serif italic text-burgundy">Important Dates</h3>
                <div className="space-y-8">
                   {[
                     { date: "Jan 18, 2025", label: "Early-Bird Opens" },
                     { date: "Jan 31, 2026", label: "Early-Bird Closes" },
                     { date: "Mar 31, 2026", label: "Regular Enrolment Closes" },
                     { date: "May 7, 2026", label: "Pilgrimage Begins" }
                   ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-ink/10 pb-6">
                         <span className="text-xl font-serif italic text-ink">{item.date}</span>
                         <span className="text-[11px] uppercase tracking-widest font-bold text-ink/40">{item.label}</span>
                      </div>
                   ))}
                </div>
             </FadeIn>
          </div>
       </div>
    </section>

    {/* SANCTUARY GALLERY */}
    <section className="bg-paper py-48 px-8 overflow-hidden">
       <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-24">
             <div className="lg:col-span-8 space-y-8">
                <p className="text-burgundy tracking-[0.4em] uppercase font-bold text-[10px]">The Sacred Villa</p>
                <h2 className="text-6xl md:text-8xl font-serif italic text-ink leading-[0.8]">The <span className="text-burgundy">Sanctuary.</span></h2>
             </div>
             <div className="lg:col-span-4 pb-4">
                <p className="text-lg font-light text-ink/60 italic leading-relaxed">
                   A private 17th-century estate nestled in the heart of the Provence countryside, where time slows and the soul remembers.
                </p>
             </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="space-y-8">
                <div className="aspect-[4/5] overflow-hidden group">
                   <img src="/images/pilgrimage/pool.png" alt="Sanctuary Pool" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
                <div className="aspect-square overflow-hidden group">
                   <img src="/images/pilgrimage/sauna.png" alt="Sanctuary Sauna" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
             </div>
             <div className="space-y-8 lg:pt-24">
                <div className="aspect-video overflow-hidden group">
                   <img src="/images/pilgrimage/dining_outdoor.png" alt="Outdoor Dining" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
                <div className="aspect-[4/5] overflow-hidden group">
                   <img src="/images/pilgrimage/villa_exterior.png" alt="Villa Exterior" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
             </div>
             <div className="space-y-8 md:col-span-2 lg:col-span-1">
                <div className="aspect-square overflow-hidden group">
                   <img src="/images/pilgrimage/bedroom.png" alt="Sanctuary Bedroom" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
                <div className="aspect-[3/4] overflow-hidden group">
                   <img src="/images/pilgrimage/dining_indoor.png" alt="Indoor Dining" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
             </div>
          </div>
       </div>
    </section>

    {/* WHAT TO PACK SECTION */}
    <section className="bg-ink py-48 px-8 text-cream">
       <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-24">
             <div className="lg:col-span-1 space-y-12">
                <p className="text-sage tracking-[0.4em] uppercase font-bold text-[10px]">Preparation</p>
                <h2 className="text-6xl md:text-7xl font-serif italic uppercase text-cream leading-tight">What to <br /><span className="text-sage lowercase tracking-normal">pack.</span></h2>
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
                         <div className="w-8 h-px bg-sage/30 group-hover:w-16 transition-all"></div>
                         <h4 className="text-xl font-serif italic text-sage">{cat.category}</h4>
                      </div>
                      <p className="text-cream/60 font-light leading-relaxed">{cat.items}</p>
                   </div>
                ))}
             </div>
          </div>
       </div>
    </section>

    {/* PILGRIMAGE TESTIMONIALS */}
    <section className="bg-paper py-48 px-8">
       <div className="container mx-auto">
          <div className="text-center mb-32">
             <p className="text-burgundy tracking-[0.4em] uppercase font-bold text-[10px] mb-8">Reflections from the path</p>
             <h2 className="text-6xl md:text-7xl font-serif italic text-ink">Pilgrim <span className="text-burgundy">Stories.</span></h2>
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
                <FadeIn key={i} className="bg-white p-16 border border-ink/5 flex flex-col justify-between">
                   <div className="space-y-8">
                      <Star className="w-8 h-8 text-burgundy opacity-20" />
                      <p className="text-2xl font-serif italic text-ink/80 leading-relaxed italic">"{test.quote}"</p>
                   </div>
                   <div className="pt-16 border-t border-ink/5 mt-16">
                      <h4 className="text-lg font-serif italic text-burgundy">{test.name}</h4>
                      <p className="text-[9px] uppercase tracking-widest font-bold text-ink/40 mt-2">{test.role}</p>
                   </div>
                </FadeIn>
             ))}
          </div>
       </div>
    </section>

    {/* VIDEO SECTION (DARK) - KEEPING FROM PREVIOUS EDIT BUT REFINING */}
    <section className="bg-ink py-48 px-8 border-t border-cream/5">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <FadeIn className="space-y-12">
            <div className="space-y-6">
              <p className="text-sage tracking-[0.4em] uppercase font-bold text-[10px]">Visual Transmission</p>
              <h2 className="text-6xl md:text-7xl font-serif italic text-cream uppercase">Circle of the <br />Rose</h2>
            </div>
            <p className="text-xl font-light text-cream/60 leading-relaxed italic border-l border-sage/30 pl-8">
              May this pilgrimage of & the essence of Mary Magdalene invite you back into intimacy with your own devotional heart.
            </p>
            <div className="pt-8">
              <Button variant="sage">Secure your Deposit</Button>
            </div>
          </FadeIn>

          <FadeIn className="relative">
            <div className="w-full aspect-video border border-cream/10 p-4 bg-ink/50 shadow-2xl backdrop-blur-sm group overflow-hidden">
              <video 
                src="/Circle of the Rose - May 2026.mp4" 
                controls 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                title="Circle of the Rose Pilgrimage Video"
              ></video>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  </main>
);

export const MentorshipPage: React.FC = () => (
  <main className="bg-cream pt-48 pb-60 px-8">
     <div className="container mx-auto">
      <FadeIn className="text-center mb-32 space-y-8">
        <p className="text-burgundy tracking-[0.4em] uppercase font-bold text-[10px]">1-on-1 Sanctuary</p>
        <h1 className="text-7xl md:text-9xl font-medium text-ink">PRIVATE <br /><span className="font-serif italic text-burgundy">mentorship</span></h1>
        <div className="w-24 h-px bg-burgundy/20 mx-auto my-12"></div>
      </FadeIn>

      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="aspect-square relative flex items-center justify-center">
           <img src="/_31.jpg" className="w-full h-full object-cover rounded-full grayscale-[10%]" alt="Coaching" />
           <div className="absolute inset-0 border-[2px] border-burgundy/20 rounded-full scale-110"></div>
        </div>
        
        <FadeIn className="space-y-12">
          <p className="text-3xl font-serif italic text-burgundy leading-snug">
            A bespoke journey into the heart of your sovereign truth, blending psychotherapy with spirit-led guidance.
          </p>
          <div className="space-y-8 text-lg font-light text-ink/70 leading-relaxed">
            <p>Private mentorship is an invitation into a dedicated container where we witness the layers of your path together. Through somatic inquiry, psychotherapeutic tools, and energetic clearing, we build the foundations for your evolution.</p>
            <ul className="space-y-6 pt-8">
              {["Customized 3 and 6 month containers", "Bi-weekly 90-minute immersion sessions", "WhatsApp support for ongoing integration", "Bespoke somatic practices and ritual guides"].map((item, i) => (
                <li key={i} className="flex items-center gap-6 text-ink/80 border-b border-ink/5 pb-6">
                  <Star className="w-4 h-4 text-sage" />
                  <span className="text-sm uppercase tracking-widest font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-12">
            <Button variant="primary" className="px-16">Apply for Mentorship</Button>
          </div>
        </FadeIn>
      </div>

      <FadeIn className="mt-48">
        <div className="text-center mb-24">
          <p className="text-burgundy tracking-[0.3em] uppercase font-bold text-[10px] mb-8">Client Reflections</p>
          <h2 className="text-5xl md:text-6xl font-serif italic text-ink mb-12">Witnessed Shifts.</h2>
          <p className="text-ink/60 font-light max-w-xl mx-auto tracking-wide">
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
               className="relative overflow-hidden group bg-paper p-12 md:p-16 border border-burgundy/5 rounded-sm hover:shadow-2xl hover:shadow-burgundy/5 transition-all duration-700 h-full flex flex-col justify-between"
             >
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Star className="w-12 h-12 text-burgundy" />
               </div>
               
               <div className="space-y-8 relative z-10">
                 <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-sage opacity-80">{testimonial.tag}</span>
                 <p className="text-xl md:text-2xl font-serif italic text-ink/80 leading-relaxed font-light">
                   "{testimonial.text}"
                 </p>
               </div>

               <div className="pt-12 border-t border-ink/5 mt-auto">
                 <div className="flex items-center gap-4">
                    <div className="w-8 h-px bg-burgundy/30"></div>
                    <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-burgundy">{testimonial.author}</span>
                 </div>
               </div>
             </motion.div>
          ))}
        </div>
      </FadeIn>
    </div>
  </main>
);

export const SacredSpacesPage: React.FC = () => (
  <main className="bg-ink text-cream pt-48 pb-60 px-8 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-burgundy/10 -skew-x-12 translate-x-1/2"></div>
    <div className="container mx-auto relative z-10">
      <FadeIn className="text-center mb-32 space-y-8">
        <p className="text-sage tracking-[0.4em] uppercase font-bold text-[10px]">Community & Connection</p>
        <h1 className="text-7xl md:text-9xl font-medium text-cream uppercase">SACRED <br /><span className="font-serif italic text-sage lowercase tracking-normal font-light">spaces</span></h1>
        <div className="w-24 h-px bg-sage/20 mx-auto my-12"></div>
      </FadeIn>

      <div className="grid lg:grid-cols-12 gap-24 items-start">
        <div className="lg:col-span-4 shrink-0">
           <div className="relative p-12 bg-burgundy/20 border border-sage/10 rounded-sm">
             <h3 className="text-2xl font-serif italic text-sage mb-8">Gathering locally and globally.</h3>
             <p className="text-cream/60 font-light leading-relaxed mb-8 italic">In-person and virtual containers devoted to somatic practice, horizontal sharing, and collective liberation.</p>
             <div className="space-y-4 pt-8">
                <p className="text-[10px] tracking-widest uppercase font-bold text-sage">Next Circle</p>
                <p className="text-xl font-serif italic">Sunday, April 12th · 11:00 AM</p>
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
             <div key={i} className="p-16 bg-ink group hover:bg-ink/50 transition-colors duration-700">
               <h4 className="text-2xl font-serif italic text-sage/80 mb-6 group-hover:text-sage transition-colors">{feature.title}</h4>
               <p className="text-cream/50 font-light text-sm leading-relaxed">{feature.desc}</p>
             </div>
           ))}
        </div>
      </div>

      <div className="mt-48 text-center">
         <Button variant="sage">View Calendar of Spaces</Button>
      </div>
    </div>
  </main>
);


