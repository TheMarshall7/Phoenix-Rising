import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button, FadeIn } from "../components/Common";

export const PilgrimagePage: React.FC = () => (
  <main className="bg-paper pt-48 pb-60 px-8">
    <div className="container mx-auto">
      <FadeIn className="text-center mb-32 space-y-8">
        <p className="text-burgundy tracking-[0.4em] uppercase font-bold text-[10px]">Immersive Sacred Travel</p>
        <h1 className="text-7xl md:text-9xl font-medium text-ink">THE <br /><span className="font-serif italic text-burgundy">pilgrimages</span></h1>
        <div className="w-24 h-px bg-burgundy/20 mx-auto my-12"></div>
      </FadeIn>

      <div className="grid lg:grid-cols-12 gap-24 items-start">
        <div className="lg:col-span-5 sticky top-32">
          <img src="/_310.jpg" className="w-full aspect-[4/5] object-cover rounded-sm grayscale-[20%] mb-12" alt="Pilgrimage" />
          <p className="text-2xl font-serif italic text-burgundy leading-relaxed">
            "Walking the rhythms of the earth, we uncover the ancient Mother Line that beats within our own hearts."
          </p>
        </div>
        
        <div className="lg:col-span-7 space-y-32">
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

      <FadeIn className="mt-48">
        <div className="text-center mb-16">
          <p className="text-burgundy tracking-[0.4em] uppercase font-bold text-[10px] mb-6">Visual Transmission</p>
          <h2 className="text-5xl md:text-6xl font-serif italic text-ink">Circle of the Rose</h2>
        </div>
        <div className="w-full max-w-5xl mx-auto border border-burgundy/10 p-4 bg-cream shadow-2xl">
          <video 
            src="/Circle of the Rose - May 2026.mp4" 
            controls 
            className="w-full h-auto aspect-video object-cover"
            title="Circle of the Rose Pilgrimage Video"
          ></video>
        </div>
      </FadeIn>
    </div>
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {["IMG_4390", "IMG_4410", "IMG_4558", "IMG_4904"].map((img) => (
             <motion.div 
               key={img}
               whileHover={{ y: -10 }}
               className="relative overflow-hidden group bg-white p-4 shadow-sm border border-ink/5 aspect-[9/16]"
             >
               <img src={`/${img}.jpg`} alt="Client Testimonial" className="w-full h-full object-cover rounded-sm grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 mx-auto" style={{objectPosition: "top"}} />
               <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent opacity-80 z-10 pointer-events-none"></div>
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


