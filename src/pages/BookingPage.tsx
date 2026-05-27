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
                  "Bi-weekly 60-minute immersion sessions",
                  "WhatsApp support for integration"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 text-cream/60">
                    <div className="w-6 h-px bg-sage/40"></div>
                    <span className="text-[11px] tracking-[0.3em] uppercase font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Right — Embedded Calendar Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full z-20"
            >
              <div className="relative overflow-hidden rounded-lg border border-cream/15 shadow-2xl bg-forest/30 backdrop-blur-sm p-1.5 ring-1 ring-cream/10">
                {/* Gold hairline accent above the widget */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-sage/40 to-transparent"
                  aria-hidden
                />
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/Vtc7MSs85zh2MjJsX2g3"
                  id="Vtc7MSs85zh2MjJsX2g3_1774315097817"
                  title="Book a Session with Maria Amiouni"
                  className="block w-full bg-transparent"
                  style={{ border: "none", overflow: "hidden", minHeight: "680px" }}
                  scrolling="no"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE - PAPER/CREAM BG */}
      <section className="bg-paper py-24 px-8 text-center border-t border-ink/5">
        <div className="container mx-auto max-w-xl">
          <p className="text-ink/50 font-light italic text-sm">
            Can't find a suitable time? Reach out directly at{" "}
            <a href="mailto:mariaamiouni@gmail.com" className="text-forest hover:underline font-semibold font-serif not-italic">
              mariaamiouni@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};
