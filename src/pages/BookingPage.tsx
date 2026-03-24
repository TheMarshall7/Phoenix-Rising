import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "../components/Common";

export const BookingPage: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="bg-paper overflow-hidden">
      {/* HERO - DOMINANT GREEN */}
      <section className="bg-forest pt-48 pb-48 px-8 text-cream relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sage/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-cream/3 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Left — Text */}
            <FadeIn className="space-y-12">
              <div className="space-y-6">
                <p className="text-sage tracking-[0.4em] uppercase font-bold text-[10px]">1-on-1 Mentorship</p>
                <h1 className="text-7xl md:text-[8rem] font-medium text-cream uppercase leading-[0.85]">
                  BOOK A <br />
                  <span className="font-serif italic text-sage lowercase font-light">session.</span>
                </h1>
                <div className="w-24 h-px bg-sage/30 my-8"></div>
              </div>

              <p className="text-2xl font-serif italic text-sage leading-relaxed max-w-md">
                "A space held in truth, where your evolution is witnessed and your becoming is honored."
              </p>

              <div className="space-y-6 text-lg font-light text-cream/70 leading-relaxed">
                <p>Choose a time that resonates. I look forward to meeting you in this sacred space.</p>
              </div>

              {/* Decorative dividers */}
              <div className="pt-8 space-y-6 border-t border-cream/10">
                {[
                  "Customized 3 & 6 month containers",
                  "Bi-weekly 90-minute immersion sessions",
                  "WhatsApp support for integration"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 text-cream/60">
                    <div className="w-6 h-px bg-sage/40"></div>
                    <span className="text-[11px] tracking-[0.3em] uppercase font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Right — Decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 border border-cream/10 rounded-full"></div>
                <div className="absolute inset-8 border border-cream/5 rounded-full animate-pulse"></div>
                <div className="absolute inset-16 border border-sage/10 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <p className="text-[10px] tracking-[0.5em] uppercase font-bold text-sage">Available Now</p>
                    <p className="text-6xl font-serif italic text-cream/90">Book</p>
                    <p className="text-[10px] tracking-[0.5em] uppercase font-bold text-cream/30">Your Session</p>
                  </div>
                </div>
                {/* Floating badges */}
                <div className="absolute top-8 right-0 bg-forest border border-sage/30 px-6 py-3 rounded-full shadow-2xl">
                  <span className="text-[10px] tracking-widest text-sage uppercase font-bold">3 Month</span>
                </div>
                <div className="absolute bottom-16 left-0 bg-forest border border-cream/15 px-6 py-3 rounded-full shadow-2xl">
                  <span className="text-[10px] tracking-widest text-cream/60 uppercase font-bold">6 Month</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CALENDAR SECTION - WHITE WITH PREMIUM CONTAINER */}
      <section className="bg-cream py-32 px-8 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-forest/3 skew-x-12 translate-x-1/4 pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <FadeIn className="text-center mb-20">
            <p className="text-forest tracking-[0.4em] uppercase font-bold text-[10px] mb-6">Select a Time</p>
            <h2 className="text-5xl md:text-6xl font-serif italic text-ink uppercase">
              Choose your <span className="text-forest lowercase font-light">moment.</span>
            </h2>
          </FadeIn>

          {/* Premium calendar wrapper */}
          <div className="relative">
            {/* Decorative corner accents */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-forest/20"></div>
            <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-forest/20"></div>
            <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-forest/20"></div>
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-forest/20"></div>

            <div className="bg-white shadow-[0_32px_80px_rgba(2,69,59,0.08)] border border-forest/5 p-8 md:p-12">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/Vtc7MSs85zh2MjJsX2g3"
                id="Vtc7MSs85zh2MjJsX2g3_1774315097817"
                title="Book a Session with Maria Amiouni"
                style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "680px" }}
                scrolling="no"
              />
            </div>
          </div>

          {/* Footer note */}
          <FadeIn className="text-center mt-16">
            <p className="text-ink/40 font-light italic text-sm">
              Can't find a suitable time? Reach out directly at{" "}
              <a href="mailto:hello@mariaamiouni.com" className="text-forest hover:underline">
                hello@mariaamiouni.com
              </a>
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};
