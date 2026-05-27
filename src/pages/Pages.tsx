import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button, FadeIn } from "../components/Common";
import { INSTAGRAM_FEED_EMBED_URL } from "../constants/ghl";


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
              <p>This is the deepest container I hold. We work together over time through your Human Design, Gene Keys, somatic practice and Energy Healing to unravel the patterns that have kept you circling, and rebuild from the truth of who you actually are.</p>
              <ul className="space-y-6 pt-8">
                {["Customized 3 and 6 month containers", "Bi-weekly 60-minute immersion sessions", "WhatsApp support for ongoing integration", "Bespoke somatic practices and ritual guides"].map((item, i) => (
                  <li key={i} className="flex items-center gap-6 text-cream/80 border-b border-cream/5 pb-6">
                    <Star className="w-4 h-4 text-cream/80" />
                    <span className="text-sm uppercase tracking-widest font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-12">
              <Link to="/booking" className="contents">
                <Button variant="sage" className="px-16">Book a Meeting</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <section className="bg-white py-48 px-8 text-ink">
      <div className="container mx-auto">
        <div className="text-center mb-20 md:mb-28">
          <p className="text-ink/50 tracking-[0.45em] uppercase font-semibold text-[10px] mb-8">Client reflections</p>
          <h2 className="text-5xl md:text-7xl font-semibold text-ink uppercase mb-6">
            Witnessed{" "}
            <span className="font-serif italic text-forest lowercase font-light text-4xl md:text-5xl tracking-normal">
              shifts.
            </span>
          </h2>
          <p className="text-lg md:text-xl font-light text-ink/70 max-w-2xl mx-auto leading-relaxed">
            Glimpses into the inner movement and profound breakthroughs experienced within the 1-on-1 Sanctuary.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 max-w-5xl mx-auto">
          {[
            {
              category: "Energy work",
              quote:
                "I feel like I didn't really know it but I always kind of had 1 foot in and foot out of spirituality and never really opened myself enough to let it in… I had such a different experience this time doing the reiki, I genuinely feel like I've expanded, my heart feels fuller and I believe in myself a whole lot more.",
            },
            {
              category: "Human design",
              quote:
                "Thank you for all the human design reading and your classes. I love myself more everyday and I believe more everyday! You're wonderful and I'm blessed to know you and have the opportunity to say this all again to your divine being.",
            },
            {
              category: "1-on-1 Sanctuary",
              quote:
                "Thanks for giving me the space to explore and to make realizations. Huge impact since our first session.",
            },
            {
              category: "Somatic inquiry",
              quote:
                "It was a pleasure meeting with you and listening to you validated a lot of things that I thought were normal in me as a person. Connecting the dots helps me adjust even more and seeing things clearly now. The future is bright.",
            },
          ].map((t, i) => (
            <FadeIn
              key={i}
              className="bg-paper text-ink p-10 md:p-12 border border-ink/10 flex flex-col justify-between min-h-[280px] shadow-sm"
            >
              <div className="flex items-start justify-between gap-4 mb-8">
                <span className="text-[10px] tracking-[0.35em] uppercase font-bold text-forest/80">{t.category}</span>
                <Star className="w-6 h-6 shrink-0 text-forest/40 fill-transparent" strokeWidth={1.1} />
              </div>
              <p className="text-base md:text-lg font-light leading-relaxed text-ink/85 flex-1">{t.quote}</p>
              <div className="pt-10 mt-auto border-t border-ink/10">
                <p className="text-[10px] tracking-[0.35em] uppercase font-bold text-ink/45">Anonymous</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* CORE OFFERINGS - DOMINANT GREEN */}
    <section className="bg-forest py-48 text-cream">
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
              cta: "Apply to work together →",
              path: "/booking" 
            },
            { 
              eyebrow: "Sacred travel · Immersive",
              name: "Pilgrimage Egypt coming soon", 
              desc: "We travel to the places where the Earth still remembers. Walking in the footsteps of Mary Magdalene in the South of France, walking the Mother Line, sitting with the land, letting the ancient sites do what no retreat room can. Pilgrimage is where the body finally gets to believe what the mind already knows.", 
              details: "Immersive sacred travel · South of France · Egypt joining soon · Small group",
              cta: "Learn more →",
              path: "/pilgrimage/france" 
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
                  {offering.cta} <div className="w-12 h-px bg-sage/20 group-hover:bg-forest/20 transition-colors"></div>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

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

