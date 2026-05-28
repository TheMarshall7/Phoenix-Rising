import React from "react";
import { motion } from "framer-motion";
import { Calendar, Moon, Check, Compass, Heart, Crown, Key, Eye, Sparkles, Sprout, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Section, Button, FadeIn } from "../components/Common";

export const AncestralChildPage: React.FC = () => {
  // Layered colors representing clay, camel, terracotta, and sand
  const portalSessions = [
    {
      num: 1,
      title: "The Child You Were",
      type: "Live Activation",
      moon: "New Moon in Gemini",
      date: "June 14",
      desc: "What did you take on that wasn't yours? What did you silence, shrink, perform? Opening the throat and connecting to what has never been said out loud.",
      icon: <Eye className="w-5 h-5 text-[#B07A5F]" />,
      accentColor: "border-[#B07A5F]/20 hover:border-[#B07A5F]/50",
      nodeBg: "bg-[#B07A5F]/10 text-[#B07A5F]",
    },
    {
      num: 2,
      title: "Your Father's Inner Child",
      type: "Live Activation",
      moon: "Full Moon in Capricorn",
      date: "June 28",
      desc: "Who was he before he became your father? What was he not allowed to feel, play, express? How did his wounding land in your body? Working with the father lineage and both grandfathers on the paternal side.",
      icon: <Compass className="w-5 h-5 text-[#9C8470]" />,
      accentColor: "border-[#9C8470]/20 hover:border-[#9C8470]/50",
      nodeBg: "bg-[#9C8470]/10 text-[#9C8470]",
    },
    {
      num: 3,
      title: "What the Body Kept",
      type: "Recorded Somatic",
      moon: "Between the father and mother work",
      date: "July 5",
      desc: "What patterns live below the story?",
      icon: <Heart className="w-5 h-5 text-[#A96F53]" />,
      accentColor: "border-[#A96F53]/20 hover:border-[#A96F53]/50",
      nodeBg: "bg-[#A96F53]/10 text-[#A96F53]",
    },
    {
      num: 4,
      title: "Your Mother's Inner Child",
      type: "Live Activation",
      moon: "New Moon in Cancer",
      date: "July 15",
      desc: "Who was she before she became your mother? What was she not permitted to say, want, become? The grandmother lineages. How their silences shaped your voice.",
      icon: <Sprout className="w-5 h-5 text-[#C5A880]" />,
      accentColor: "border-[#C5A880]/20 hover:border-[#C5A880]/50",
      nodeBg: "bg-[#C5A880]/10 text-[#C5A880]",
    },
    {
      num: 5,
      title: "Their Marriage, Your Blueprint",
      type: "Live Activation",
      moon: "Full Moon in Aquarius",
      date: "July 29",
      desc: "This is the one most courses skip. Beyond who our parents are as individuals, who are our parents together and how is their dynamic alive in your relationships, your work, your self-worth? What did you decide love looks\u00A0like?",
      icon: <Key className="w-5 h-5 text-[#B07A5F]" />,
      accentColor: "border-[#B07A5F]/20 hover:border-[#B07A5F]/50",
      nodeBg: "bg-[#B07A5F]/10 text-[#B07A5F]",
    },
    {
      num: 6,
      title: "The Gifts in the Bloodline",
      type: "Recorded Integration",
      moon: "Integration Phase",
      date: "August 5",
      desc: "Not everything inherited is a wound. Devotion, resilience, intuition, sacrifice, creativity. What skipped a generation and landed in you? Reclaiming what is yours to carry forward.",
      icon: <Sparkles className="w-5 h-5 text-[#9C8470]" />,
      accentColor: "border-[#9C8470]/20 hover:border-[#9C8470]/50",
      nodeBg: "bg-[#9C8470]/10 text-[#9C8470]",
    },
    {
      num: 7,
      title: "Restoring Right Relationship",
      type: "Live Activation",
      moon: "New Moon in Leo / Solar Eclipse",
      date: "August 12",
      desc: "The earthly parents returned to their rightful place. Not idealized, not villainized but deeply seen. Understanding them as people, not just as your parents. What it means to truly honor them from a place of wholeness rather than wound.",
      icon: <Crown className="w-5 h-5 text-[#A96F53]" />,
      accentColor: "border-[#A96F53]/20 hover:border-[#A96F53]/50",
      nodeBg: "bg-[#A96F53]/10 text-[#A96F53]",
    },
    {
      num: 8,
      title: "The Holy Lineage",
      type: "Live Activation",
      moon: "Full Moon in Pisces / Lunar Eclipse",
      date: "August 26",
      desc: "Having done the earthly work, now the cosmic opens. The divine mother and father. Not as a spiritual bypass but as a natural arrival because you've already done the harder thing. Connecting to the sacred parents, the holy lineage you came from before this family, this lifetime. Putting the crown on the inner child as reclamation.",
      icon: <Moon className="w-5 h-5 text-[#C5A880]" />,
      accentColor: "border-[#C5A880]/20 hover:border-[#C5A880]/50",
      nodeBg: "bg-[#C5A880]/10 text-[#C5A880]",
    },
    {
      num: 9,
      title: "Becoming the New Ancestor",
      type: "Recorded Integration & Completion",
      moon: "Integration & Closing Ritual",
      date: "September 6",
      desc: "Who are you now, having walked through all of this? What are you choosing to pass forward? A closing ritual. Recoding new DNA.",
      icon: <Crown className="w-5 h-5 text-[#B07A5F]" />,
      accentColor: "border-[#B07A5F]/20 hover:border-[#B07A5F]/50",
      nodeBg: "bg-[#B07A5F]/10 text-[#B07A5F]",
    },
  ];

  return (
    <main className="bg-paper overflow-hidden">
      {/* HERO SECTION - Premium Split Overlay with Warm Truffle Brown and Camel Gold */}
      <section className="relative min-h-[100vh] flex items-center bg-[#2C1E1A] overflow-hidden pt-36 pb-20">
        <div className="absolute inset-0 z-0 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 relative h-full min-h-[50vh] md:min-h-0">
            <motion.div
              initial={{ scale: 1.15, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.7 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="w-full h-full"
            >
              <img
                src="/_310.jpg"
                alt="Ancestral Child Journey"
                className="w-full h-full object-cover grayscale-[20%]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-[#2C1E1A]/40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2C1E1A]/40 to-[#2C1E1A] hidden md:block"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E1A] via-[#2C1E1A]/40 to-transparent md:hidden"></div>
          </div>
          <div className="w-full md:w-1/2 bg-[#2C1E1A] h-full hidden md:block"></div>
        </div>

        <div className="relative z-10 container mx-auto px-8 w-full flex flex-col items-center md:items-end justify-center">
          <div className="text-center md:text-left max-w-2xl md:pl-12">
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.4em" }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="text-[#C5A880] tracking-[0.4em] uppercase font-semibold text-[11px] mb-6 block"
            >
              June 14 — September 6th, 2026
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl mb-8 leading-[0.85] text-cream font-semibold tracking-tight uppercase"
            >
              THE <br />
              <span className="font-serif italic text-[#B07A5F] lowercase font-light tracking-normal block my-2">ancestral</span>
              CHILD
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="text-xl md:text-2xl font-serif italic text-cream/90 leading-snug mb-10 max-w-lg"
            >
              Healing the child within and the lineage behind you
            </motion.p>

            <div className="w-24 h-px bg-[#E8DDD4]/40 my-8 mx-auto md:mx-0"></div>

            <p className="text-xs tracking-[0.25em] uppercase font-bold text-cream/70 mb-12">
              A nine-portal journey with Maria Amiouni
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <a href="#portals" className="contents">
                <Button
                  variant="primary"
                  className="!bg-[#E8DDD4] !text-[#2C1E1A] hover:!bg-[#D9CDC2] hover:!text-[#2C1E1A] !shadow-lg hover:!shadow-xl hover:scale-[1.02] transition-all px-12 border border-[#2C1E1A]/10"
                >
                  Explore the Portals
                </Button>
              </a>
              <a href="#investment" className="contents">
                <Button variant="outline" className="border-cream/30 text-cream hover:bg-cream hover:text-[#2C1E1A] transition-all">
                  View Tiers
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
          <span className="text-[9px] tracking-[0.3em] uppercase text-cream/70 font-semibold">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-cream rounded-full"
          />
        </div>
      </section>

      {/* OPENING LINE NARRATIVE - Layered Alabaster & Clay Accent */}
      <Section className="bg-paper py-40 relative">
        <div className="absolute top-10 left-10 text-[#2C1E1A]/5 font-serif text-[18vw] select-none pointer-events-none leading-none">
          Child
        </div>

        <div className="container mx-auto px-8 max-w-4xl relative z-10">
          <FadeIn className="space-y-16">
            <div className="flex flex-col items-center">
              <p className="text-[#B07A5F] tracking-[0.5em] uppercase font-semibold text-[10px] mb-4">
                Opening Line
              </p>
              <div className="w-8 h-px bg-[#B07A5F]/35"></div>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif text-center text-ink leading-tight max-w-3xl mx-auto">
              A return to the <span className="font-serif italic text-[#B07A5F] font-light">foundations</span> of your temple.
            </h2>

            <div className="space-y-10 text-lg md:text-xl font-normal leading-relaxed text-ink/90 max-w-2xl mx-auto font-sans">
              <p className="text-2xl md:text-3xl font-serif italic text-[#2C1E1A] leading-relaxed text-center font-normal px-4 my-8">
                "Two years ago, I ran a course called the Divine Child. It was about remembering your wholeness. Your holiness."
              </p>
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-[#B07A5F] first-letter:float-left first-letter:mr-3 first-letter:font-bold">
                And right at the end of it, <strong className="font-semibold text-[#2C1E1A]">I knew the next one was coming.</strong>
              </p>
              <p>
                One where we go further back. Not just to the child you were. But to <strong className="font-semibold text-[#2C1E1A]">the children your parents once were. And theirs before them.</strong>
              </p>
              <p className="italic text-[#9C8470] font-serif text-xl">
                It just needed to be lived first before I could share it with you.
              </p>
              <p>
                Our parents are the <strong className="font-semibold text-[#2C1E1A]">foundational pillars of our temple.</strong> If those pillars are cracked in our minds — condemned, dismissed, pitied, idealised — the temple cannot stand as it was meant to.
              </p>
              <p>
                We build and build and wonder why it doesn't hold. Why we keep collapsing. Why <strong className="font-semibold text-[#2C1E1A]">visibility feels dangerous.</strong> Why love doesn't quite land.
              </p>
              <p className="font-semibold text-[#2C1E1A] text-xl border-l-4 border-[#B07A5F] pl-6 py-3 my-8 bg-[#FAF6F0] rounded-r-sm shadow-sm">
                It is not because something is wrong with you. It is because <strong>the foundation was never properly laid.</strong>
              </p>
              <p>
                This work is about <strong className="font-semibold text-[#2C1E1A]">laying it.</strong> Restoring your parents, earthly and cosmic, to their rightful place as cornerstones.
              </p>

              {/* Terracotta-Clay styled interactive callout box */}
              <div className="mt-16 p-10 md:p-14 bg-[#FAF6F0] border border-[#B07A5F]/20 rounded-sm relative max-w-xl mx-auto backdrop-blur-[4px] shadow-lg overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A880]/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
                <div className="space-y-6 italic font-serif text-lg md:text-xl text-[#A96F53] text-center relative z-10">
                  <p className="transition-all duration-300 hover:translate-x-1 hover:text-[#2C1E1A]">So that you may stand tall in your own temple.</p>
                  <p className="transition-all duration-300 hover:translate-x-1 hover:text-[#2C1E1A]">So that your gifts have somewhere solid to grow from.</p>
                  <p className="transition-all duration-300 hover:translate-x-1 hover:text-[#2C1E1A]">So that your mission has ground beneath it.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* WHY NOW STORY - Layered Espresso, Copper, and Gold */}
      <section className="bg-[#2C1E1A] py-40 px-8 text-cream relative overflow-hidden">
        {/* Abstract background light */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#B07A5F]/10 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C5A880]/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            {/* Multi-border picture frame with camel and clay colors */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-4 border border-[#C5A880]/15 rounded-sm pointer-events-none group-hover:scale-102 transition-transform duration-700"></div>
              <div className="absolute -inset-2 border border-[#B07A5F]/15 rounded-sm pointer-events-none"></div>
              <img
                src="/_114.jpg"
                className="w-full aspect-[4/5] object-cover rounded-sm grayscale-[15%] shadow-2xl transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-101 relative z-10"
                alt="Maria Amiouni"
              />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#C5A880]/5 rounded-full blur-3xl group-hover:bg-[#C5A880]/10 transition-colors"></div>
            </div>

            {/* Content text */}
            <FadeIn className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-[#C5A880] tracking-[0.4em] uppercase font-bold text-[10px]">
                  Why Now
                </span>
                <h2 className="text-4xl md:text-5xl font-serif leading-[1.1] text-cream uppercase">
                  Carrying what is <span className="text-[#B07A5F] font-light italic lowercase">not ours</span> to carry.
                </h2>
              </div>

              <div className="space-y-6 text-lg font-normal leading-relaxed text-cream/90">
                <p>
                  For the last few years, <strong className="font-semibold text-cream">a lot has moved in me</strong>, around my parents and grandparents.
                </p>
                <p>
                  I never met my own grandfathers. And yet I was able to <strong className="font-semibold text-cream">restore my paternal grandfather to his rightful place</strong>, as patriarch of our family. As a man. As a soul.
                </p>
                <p>
                  I've had <strong className="font-semibold text-cream">dark nights of the soul</strong> finding my place in this world without clinging to my parents' idea of who I should be by now.
                </p>

                {/* Camel-terracotta quote block */}
                <blockquote className="font-serif italic text-[#C5A880] text-2xl leading-relaxed py-8 border-y border-[#B07A5F]/20 my-8 pl-6 relative">
                  <span className="absolute left-0 top-2 text-7xl text-[#C5A880]/15 font-serif leading-none select-none">“</span>
                  Releasing the good girl. The good daughter. The one who proved herself in silence, in the dark, without asking for help because she needed to show she could make something beautiful on her own.
                </blockquote>

                <p className="font-semibold text-cream">
                  I carried a lot that wasn't mine to carry.
                </p>
                <p className="font-serif italic text-[#C5A880] text-xl mt-4 font-semibold">
                  Maybe you have too.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* THE CORE TEACHING - Soft Nude Background */}
      <Section className="bg-cream py-40 text-ink relative">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          <FadeIn className="space-y-16">
            <div className="flex flex-col items-center">
              <span className="text-[#2C1E1A] tracking-[0.5em] uppercase font-semibold text-[10px] mb-4">
                The Core Teaching
              </span>
              <Sparkles className="w-5 h-5 text-[#B07A5F]" />
            </div>

            <h2 className="text-4xl md:text-6xl font-serif text-ink uppercase leading-tight max-w-3xl mx-auto">
              We cannot fully step into our mission <br />
              <span className="font-serif italic text-[#A96F53] font-light lowercase block mt-4">while our parents are cast out of heaven in our minds.</span>
            </h2>

            <div className="w-16 h-px bg-[#B07A5F]/30 mx-auto"></div>

            <div className="space-y-10 text-lg md:text-xl font-normal leading-relaxed text-ink/90 max-w-2xl mx-auto text-left font-sans">
              <p className="font-serif text-[#2C1E1A] text-2xl text-center leading-relaxed font-normal italic my-6">
                Here is what I know to be true:
              </p>

              <div className="space-y-4 border-l-2 border-[#B07A5F] pl-8 italic text-ink/70 bg-[#FAF6F0]/60 py-4 pr-4 rounded-r-sm shadow-sm">
                <p className="hover:text-[#B07A5F] transition-colors">Whether they were absent or overbearing.</p>
                <p className="hover:text-[#9C8470] transition-colors">Whether they got it wrong, stayed silent, or never saw you clearly.</p>
                <p className="hover:text-[#A96F53] transition-colors">Whether they are here or have passed.</p>
                <p className="hover:text-[#C5A880] transition-colors">Whether your relationship with them is warm or still confusing</p>
              </div>

              <p className="font-serif italic text-[#B07A5F] text-2xl text-center leading-relaxed py-6 select-none">
                "It doesn't matter."
              </p>

              <p className="text-center font-serif text-xl text-ink font-semibold">
                If we have not restored them inwardly to their <strong>rightful and sacred place</strong>, we will keep circling the same patterns:
              </p>

              {/* Elevated interactive pattern squares in alternating clay colors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
                {[
                  { text: "In our relationships.", color: "text-[#B07A5F]", bg: "bg-[#B07A5F]/5", dot: "bg-[#B07A5F]", border: "hover:border-[#B07A5F]" },
                  { text: "In our work.", color: "text-[#9C8470]", bg: "bg-[#9C8470]/5", dot: "bg-[#9C8470]", border: "hover:border-[#9C8470]" },
                  { text: "In how visible we allow ourselves to become.", color: "text-[#A96F53]", bg: "bg-[#A96F53]/5", dot: "bg-[#A96F53]", border: "hover:border-[#A96F53]" },
                  { text: "In how worthy we feel of our own gifts.", color: "text-[#C5A880]", bg: "bg-[#C5A880]/5", dot: "bg-[#C5A880]", border: "hover:border-[#C5A880]" }
                ].map((item, i) => (
                  <div key={i} className={`p-6 border border-ink/5 bg-white/50 backdrop-blur-sm rounded-sm ${item.border} hover:bg-white hover:shadow-md transition-all duration-500 flex items-center gap-4 group`}>
                    <div className={`w-6 h-6 rounded-full ${item.bg} flex items-center justify-center shrink-0`}>
                      <div className={`w-2 h-2 rounded-full ${item.dot}`} />
                    </div>
                    <span className={`font-serif italic text-lg ${item.color} transition-colors`}>{item.text}</span>
                  </div>
                ))}
              </div>

              <p className="pt-4 border-t border-[#B07A5F]/20 font-semibold text-[#2C1E1A]">
                To reestablish our parents and ancestors back to their rightful place is to <strong>place ourselves in the right place too.</strong>
              </p>
              <p>
                We will not be bypassing what has actually happened but work through the energetic undercurrents so we may relate to them inwardly from a place of <strong className="font-semibold text-[#2C1E1A]">true unconditional love.</strong>
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* THE PORTALS - Timeline with Layered Card Designs */}
      <section id="portals" className="py-48 px-8 border-t border-[#2C1E1A] relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #3D2318 0%, #2C1E1A 60%, #1E1410 100%)' }}>
        {/* Subtle decorative circles */}
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#B07A5F]/20 rounded-full blur-[100px] pointer-events-none z-0" aria-hidden />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-[130px] pointer-events-none z-0" aria-hidden />
        {/* Right-side glows near mid / lower portals (e.g. 6 & 9) */}
        <div className="absolute top-[44%] -right-12 md:right-0 w-[340px] h-[340px] bg-[#FAF6F0]/14 rounded-full blur-[115px] pointer-events-none z-0" aria-hidden />
        <div className="absolute top-[68%] -right-8 md:right-8 w-[380px] h-[380px] bg-[#C5A880]/12 rounded-full blur-[125px] pointer-events-none z-0" aria-hidden />
        {/* Left-side glow near final portal (9) */}
        <div className="absolute top-[70%] -left-10 md:left-4 w-[360px] h-[360px] bg-[#B07A5F]/16 rounded-full blur-[120px] pointer-events-none z-0" aria-hidden />

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-36">
            <span className="text-[#C5A880] tracking-[0.5em] uppercase font-semibold text-[10px] mb-6 block">
              What This Is
            </span>
            <h2 className="text-5xl md:text-7xl font-serif leading-[0.9] text-cream uppercase">
              THE NINE <span className="font-serif italic text-[#C5A880] font-light lowercase">portals.</span>
            </h2>
            <div className="w-16 h-px bg-[#C5A880]/30 mx-auto mt-8 mb-6"></div>
            <p className="text-cream/85 max-w-2xl mx-auto font-normal text-lg leading-relaxed">
              The Ancestral Child is a <strong className="font-semibold text-cream">nine-session journey</strong> into healing the child within, the lineage behind you, and the future that begins with you. We will move through:
            </p>
          </div>

          {/* Timeline Spine */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-10 bottom-10 w-[2px] bg-[#C5A880]/20 hidden lg:block" />

            <div className="space-y-16 relative z-10">
              {portalSessions.map((portal, idx) => {
                const isEven = idx % 2 === 1;
                return (
                  <motion.div
                    key={portal.num}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className={`grid lg:grid-cols-12 gap-8 items-center ${isEven ? "lg:flex-row-reverse" : ""
                      }`}
                  >
                    {/* Alternate background cards for variety of warm nudes */}
                    <div
                      className={`lg:col-span-5 ${isEven ? "lg:order-7 lg:text-left" : "lg:text-right"
                        }`}
                    >
                      <div className={`p-8 md:p-10 bg-[#FAF6F0] border ${portal.accentColor} rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group`}>
                        <div className={`flex items-center gap-4 mb-6 ${isEven ? "justify-start" : "justify-start lg:justify-end"}`}>
                          <span className="text-[10px] tracking-widest font-bold uppercase text-ink/40">
                            {portal.num >= 7 || portal.num === 3 || portal.num === 6 || portal.num === 9 ? `Session 0${portal.num}` : `Portal 0${portal.num}`}
                          </span>
                          <span className="text-[9px] border border-ink/10 px-3 py-1 uppercase font-bold text-ink/60 tracking-widest bg-white/80 rounded-full">
                            {portal.type}
                          </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-serif italic text-[#2C1E1A] mb-4 leading-normal md:leading-relaxed transition-colors">
                          {portal.title}
                        </h3>

                        <p className="text-base font-normal text-ink/85 leading-relaxed">
                          {portal.desc}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Node Badge with dynamic colored nodeBg */}
                    <div className="lg:col-span-2 flex justify-center z-20">
                      <div className={`w-16 h-16 rounded-full border border-ink/10 ${portal.nodeBg} flex flex-col items-center justify-center shadow-lg font-serif italic font-bold hover:scale-110 transition-transform duration-300`}>
                        {portal.icon}
                        <span className="text-xs font-serif mt-0.5">0{portal.num}</span>
                      </div>
                    </div>

                    {/* Timing details */}
                    <div
                      className={`lg:col-span-5 ${isEven ? "lg:order-1 lg:text-right" : "lg:text-left"
                        } space-y-2 pt-2 lg:pt-0`}
                    >
                      <p className="text-[10px] tracking-widest font-bold uppercase text-cream/70 flex items-center gap-2 justify-start lg:justify-start">
                        <Calendar className="w-3.5 h-3.5 text-[#C5A880]/60" /> {portal.date}
                      </p>
                      <p className="text-base font-serif italic text-[#C5A880]/80 font-medium">
                        {portal.moon}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* RHYTHM & STRUCTURE - Light Alabaster */}
      <section className="bg-[#FAF6F0] py-40 px-8 text-ink relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C5A880]/[0.05]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B07A5F]/5 rounded-full blur-[150px]"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <FadeIn className="text-center mb-24">
            <span className="text-[#B07A5F] tracking-[0.4em] uppercase font-semibold text-[10px] mb-8 block">
              The Structure
            </span>
            <h2 className="text-5xl md:text-7xl font-serif italic text-[#2C1E1A] uppercase leading-[0.85]">
              THE CONTAINER <span className="text-[#B07A5F] lowercase font-light">structure.</span>
            </h2>
            <div className="w-24 h-px bg-[#B07A5F]/20 mx-auto mt-12 mb-8"></div>
            <p className="text-lg font-normal text-ink/85 max-w-2xl mx-auto italic leading-relaxed">
              <strong className="font-semibold text-[#2C1E1A]">9 sessions</strong> across <strong className="font-semibold text-[#2C1E1A]">11 weeks</strong>, held within the rhythm of the moon.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 border border-[#B07A5F]/15 bg-white hover:bg-white hover:border-[#B07A5F]/40 hover:shadow-md transition-all duration-500 rounded-sm space-y-6 group">
              <Moon className="w-8 h-8 text-[#B07A5F] opacity-80 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif italic text-[#2C1E1A]">6 Live Calls</h3>
              <p className="text-sm font-normal text-ink/80 leading-relaxed">
                <strong className="font-semibold text-[#2C1E1A]">6 live group calls</strong> on Zoom, held on new and full moons to activate teachings, open the throat, and explore lineage healings together in the live container.
              </p>
            </div>
            <div className="p-10 border border-[#B07A5F]/15 bg-white hover:bg-white hover:border-[#B07A5F]/40 hover:shadow-md transition-all duration-500 rounded-sm space-y-6 group">
              <Compass className="w-8 h-8 text-[#9C8470] opacity-80 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif italic text-[#2C1E1A]">3 Recorded Integrations</h3>
              <p className="text-sm font-normal text-ink/80 leading-relaxed">
                <strong className="font-semibold text-[#2C1E1A]">3 recorded integration sessions</strong> so you can go deeper and assimilate learnings somatically before the next live call.
              </p>
            </div>
            <div className="p-10 border border-[#B07A5F]/15 bg-white hover:bg-white hover:border-[#B07A5F]/40 hover:shadow-md transition-all duration-500 rounded-sm space-y-6 group">
              <Heart className="w-8 h-8 text-[#C5A880] opacity-80 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif italic text-[#2C1E1A]">WhatsApp Container</h3>
              <p className="text-sm font-normal text-ink/80 leading-relaxed">
                A <strong className="font-semibold text-[#2C1E1A]">private WhatsApp group</strong>, open to everyone in the container with Maria for ongoing support, accountability, and sharing experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTMENT & TIERS - Layered Nude Cards */}
      <section id="investment" className="bg-[#3D2318] py-40 text-cream border-b border-[#2C1E1A] relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C5A880]/[0.03]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B07A5F]/10 rounded-full blur-[150px]"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <FadeIn className="text-center mb-24">
            <span className="text-[#C5A880] tracking-[0.4em] uppercase font-bold text-[10px] mb-8 block">
              The Tiers
            </span>
            <h2 className="text-5xl md:text-7xl font-serif italic text-cream uppercase leading-[0.85]">
              Choose your <span className="text-[#C5A880] lowercase font-light">resonance.</span>
            </h2>
            <div className="w-24 h-px bg-[#C5A880]/30 mx-auto mt-12"></div>
            <p className="text-cream/75 font-normal italic text-base mt-8">
              Early bird rates apply to the first 10 participants to join.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-24">
            {/* The Seed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border border-[#B07A5F]/10 hover:border-[#B07A5F]/30 bg-white p-12 flex flex-col justify-between rounded-sm shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <span className="text-[#B07A5F] tracking-widest font-bold text-[10px] uppercase">🌱 Tier 01</span>
                  <span className="text-[9px] border border-[#B07A5F]/15 px-3 py-1 uppercase font-bold text-[#B07A5F]/60 tracking-widest rounded-full">The Seed</span>
                </div>
                <div>
                  <h3 className="text-4xl font-serif italic text-ink mb-4">The Seed</h3>
                  <p className="text-sm font-light text-ink/70 leading-relaxed">
                    All 9 sessions including the live calls, recorded integrations, and private container support.
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-ink/5">
                  <p className="text-xs font-semibold text-[#B07A5F] uppercase tracking-widest">Investment</p>
                  <div>
                    <p className="text-5xl font-serif italic text-[#2C1E1A] flex flex-wrap items-baseline gap-x-2">
                      <span className="whitespace-nowrap">550 AED</span>
                      <span className="text-sm font-sans font-light text-ink/50 whitespace-nowrap">/month</span>
                    </p>
                    <p className="text-xs text-ink/40 font-medium mt-1">4 months · 2,200 AED total</p>
                  </div>
                  <div className="bg-[#B07A5F]/5 border border-[#B07A5F]/10 p-4 rounded-sm">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#B07A5F]">Early Bird Rate</p>
                    <p className="text-sm font-semibold text-[#B07A5F] mt-1">550 AED/month · 3 months · 1,650 AED — first 10 to join</p>
                  </div>
                </div>

                <ul className="space-y-4 pt-8 border-t border-ink/5">
                  {["All 9 sessions", "6 the live calls", "3 recorded integrations", "WhatsApp group"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink/80">
                      <Check className="w-4 h-4 text-[#B07A5F] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-12">
                <Link to="/booking" className="contents">
                  <Button
                    variant="primary"
                    className="w-full group !bg-[#E8DDD4] !text-[#2C1E1A] hover:!bg-[#D9CDC2] hover:!text-[#2C1E1A] !shadow-lg hover:!shadow-xl border !border-[#2C1E1A]/10 transition-all"
                  >
                    Enquire to Join
                    <ArrowRight className="w-3.5 h-3.5 ml-2 text-[#2C1E1A] group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* The Root - Featured Terracotta Clay design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="border-[2px] border-[#B07A5F] bg-white p-12 flex flex-col justify-between rounded-sm shadow-xl relative scale-102 hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-[#B07A5F] text-white text-[9px] font-bold tracking-[0.2em] uppercase py-2 px-6 rounded-full shadow-lg">
                Most Popular
              </div>

              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <span className="text-[#B07A5F] tracking-widest font-bold text-[10px] uppercase">🌿 Tier 02</span>
                  <span className="text-[9px] border border-[#B07A5F]/20 px-3 py-1 uppercase font-bold text-[#B07A5F] tracking-widest rounded-full">The Root</span>
                </div>
                <div>
                  <h3 className="text-4xl font-serif italic text-ink mb-4">The Root</h3>
                  <p className="text-sm font-light text-ink/70 leading-relaxed">
                    Everything in The Seed, plus the inner library access and weekly gene key downloads.
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-ink/5">
                  <p className="text-xs font-semibold text-[#B07A5F] uppercase tracking-widest">Investment</p>
                  <div>
                    <p className="text-5xl font-serif italic text-[#2C1E1A] flex flex-wrap items-baseline gap-x-2">
                      <span className="whitespace-nowrap">650 AED</span>
                      <span className="text-sm font-sans font-light text-ink/50 whitespace-nowrap">/month</span>
                    </p>
                    <p className="text-xs text-ink/40 font-medium mt-1">4 months · 2,600 AED total</p>
                  </div>
                  <div className="bg-[#B07A5F]/5 border border-[#B07A5F]/10 p-4 rounded-sm">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#B07A5F]">Early Bird Rate</p>
                    <p className="text-sm font-semibold text-[#B07A5F] mt-1">650 AED/month · 3 months · 1,950 AED — first 10 to join</p>
                  </div>
                </div>

                <ul className="space-y-4 pt-8 border-t border-ink/5">
                  {["Everything in The Seed", "+ Access to the inner library: a growing collection of videos, lectures and teachings", "Weekly gene key Downloads"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink/80">
                      <Check className="w-4 h-4 text-[#B07A5F] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-12">
                <Link to="/booking" className="contents">
                  <Button
                    variant="primary"
                    className="w-full group !bg-[#E8DDD4] !text-[#2C1E1A] hover:!bg-[#D9CDC2] hover:!text-[#2C1E1A] !shadow-lg hover:!shadow-xl border !border-[#2C1E1A]/10 transition-all"
                  >
                    Enquire to Join
                    <ArrowRight className="w-3.5 h-3.5 ml-2 text-[#2C1E1A] group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* The Tree - Camel gold styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border border-[#C5A880]/20 hover:border-[#C5A880]/50 bg-white p-12 flex flex-col justify-between rounded-sm shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <span className="text-[#C5A880] tracking-widest font-bold text-[10px] uppercase">🌳 Tier 03</span>
                  <span className="text-[9px] border border-[#C5A880]/25 px-3 py-1 uppercase font-bold text-[#C5A880]/80 tracking-widest rounded-full">The Tree</span>
                </div>
                <div>
                  <h3 className="text-4xl font-serif italic text-ink mb-4">The Tree</h3>
                  <p className="text-sm font-light text-ink/70 leading-relaxed">
                    The complete journey with three 1:1 coaching sessions with Maria—where we can explore Human Design for parents&apos;, children&apos;s, and family charts, if wanted or needed.
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-ink/5">
                  <p className="text-xs font-semibold text-[#C5A880] uppercase tracking-widest">Investment</p>
                  <div>
                    <p className="text-5xl font-serif italic text-[#2C1E1A] flex flex-wrap items-baseline gap-x-2">
                      <span className="whitespace-nowrap">1,100 AED</span>
                      <span className="text-sm font-sans font-light text-ink/50 whitespace-nowrap">/month</span>
                    </p>
                    <p className="text-xs text-ink/40 font-medium mt-1">4 months · 4,400 AED total</p>
                  </div>
                  <div className="bg-[#C5A880]/5 border border-[#C5A880]/10 p-4 rounded-sm">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#C5A880]">Early Bird Rate</p>
                    <p className="text-sm font-semibold text-[#C5A880] mt-1">1,100 AED/month · 3 months · 3,300 AED — first 10 to join</p>
                  </div>
                </div>

                <ul className="space-y-4 pt-8 border-t border-ink/5">
                  {[
                    "Everything in The Root",
                    "Three 1:1 coaching sessions across the container",
                    "Optional Human Design for parents', children's, and family charts",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink/80">
                      <Check className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-12">
                <Link to="/booking" className="contents">
                  <Button
                    variant="primary"
                    className="w-full group !bg-[#E8DDD4] !text-[#2C1E1A] hover:!bg-[#D9CDC2] hover:!text-[#2C1E1A] !shadow-lg hover:!shadow-xl border !border-[#2C1E1A]/10 transition-all"
                  >
                    Enquire to Join
                    <ArrowRight className="w-3.5 h-3.5 ml-2 text-[#2C1E1A] group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THIS IS FOR YOU IF - Luxury Grid Deck with layered clay cards */}
      <section className="bg-ink py-40 px-8 text-cream relative">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 space-y-8 sticky top-24">
              <div className="space-y-3">
                <span className="text-[#C5A880] tracking-[0.4em] uppercase font-semibold text-[10px]">
                  Resonance Check
                </span>
                <h2 className="text-4xl md:text-5xl font-serif italic text-cream uppercase leading-tight">
                  THIS IS <br />
                  <span className="text-[#B07A5F] lowercase tracking-normal font-light">for you if</span>
                </h2>
              </div>
              <div className="w-16 h-px bg-[#B07A5F]/30"></div>
              <p className="text-cream/80 font-normal text-sm italic">
                Read these prompts somatically. Let your body recognise the truth in them.
              </p>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6 pt-2">
              {[
                { text: "You feel like you are carrying something older than yourself.", circle: "border-[#B07A5F]/30 bg-[#B07A5F]/10 text-[#B07A5F]" },
                { text: "You have done inner child work before and you know there is another layer, further back.", circle: "border-[#9C8470]/30 bg-[#9C8470]/10 text-[#9C8470]" },
                { text: "You have tried to understand your parents intellectually but something in the body still holds.", circle: "border-[#A96F53]/30 bg-[#A96F53]/10 text-[#A96F53]" },
                { text: "You want to step more fully into your mission but keep meeting the same invisible ceiling.", circle: "border-[#C5A880]/30 bg-[#C5A880]/10 text-[#C5A880]" },
                { text: "You are ready to stop being the good girl or the good son and start being yourself.", circle: "border-[#B07A5F]/30 bg-[#B07A5F]/10 text-[#B07A5F]" },
                { text: "You remember, somewhere underneath everything, that you have always been truly abundant.", circle: "border-[#9C8470]/30 bg-[#9C8470]/10 text-[#9C8470]" }
              ].map((item, i) => (
                <div key={i} className="p-8 border border-cream/10 bg-white/[0.02] rounded-sm hover:border-[#B07A5F]/30 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between gap-6 group">
                  <p className="text-lg font-normal text-cream/85 leading-relaxed group-hover:text-cream transition-colors duration-300">
                    {item.text}
                  </p>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${item.circle} transition-colors duration-300`}>
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* A NOTE FROM MARIA — note left, larger photo right */}
      <section className="bg-paper py-48 px-6 sm:px-8 text-ink relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start lg:items-stretch">
            <div className="bg-[#FAF6F0] border border-[#B07A5F]/20 p-10 md:p-16 rounded-sm shadow-xl relative overflow-hidden flex flex-col lg:col-span-5">
              {/* Terracotta Wax seal decoration */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-[#B07A5F]/5 flex items-center justify-center border border-[#B07A5F]/15 select-none">
                <Heart className="w-5 h-5 text-[#B07A5F]" />
              </div>

              <div className="text-left mb-12">
                <span className="text-[#B07A5F] tracking-[0.4em] uppercase font-bold text-[10px] mb-4 block">
                  A Note From Maria
                </span>
                <div className="w-8 h-px bg-[#B07A5F]/20"></div>
              </div>

              <div className="space-y-8 text-lg font-normal leading-relaxed text-[#2C1E1A] font-sans text-left max-w-xl">
                <p>
                  I built this course because <strong className="font-semibold">I lived it.</strong> I've walked through each of these portals, and I waited for these to ripen within me before sharing it with you.
                </p>
                <p>
                  I know what it is to <strong className="font-semibold">carry burdens that aren't yours.</strong>
                </p>
                <p>
                  To work in silence.
                </p>
                <p>
                  To search for your place in this world while still <strong className="font-semibold">unconsciously waiting for your parents' permission</strong> to take it.
                </p>

                <div className="text-xl md:text-2xl font-serif italic text-[#A96F53] leading-relaxed pt-6 pb-4 border-y border-[#B07A5F]/10 my-8 text-left font-normal">
                  "The Divine Child was about remembering who you are. <br />
                  The Ancestral Child is about understanding where you come from so you can finally, fully, arrive."
                </div>

                <p className="pt-4 font-serif text-[#B07A5F]">
                  I'll see you at the new moon in Gemini.
                </p>
                <div className="pt-6 font-serif text-3xl text-[#9C8470] font-light tracking-wide">
                  Maria
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center lg:min-h-full w-full py-8 lg:py-0 lg:col-span-7"
            >
              <div className="mx-auto w-full max-w-[26rem] sm:max-w-[30rem] aspect-square lg:mx-0 lg:max-w-none lg:w-full oval-mask overflow-hidden border border-[#B07A5F]/20 bg-[#FAF6F0] group shadow-[0_0_80px_rgba(176,122,95,0.12)] transition-all duration-1000">
                <img
                  src="/about_maria_new.jpg"
                  alt="Maria Amiouni"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s] grayscale-[25%] hover:grayscale-0"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};
