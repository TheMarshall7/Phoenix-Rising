import React, { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn, Button } from "../components/Common";

const CONTACT_EMAIL = "mariaamiouni@gmail.com";

export const ContactPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const canSubmit = name.trim().length > 1 && email.trim().includes("@") && message.trim().length > 5;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const subject = `Contact request · ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
      "",
      "---",
      "Sent from the Maria Amiouni website contact page",
    ].join("\n");

    // No backend is wired here: open the user's email client with a prefilled message.
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      body
    )}`;
  };

  return (
    <main className="bg-paper overflow-hidden">
      {/* HERO - DOMINANT GREEN */}
      <section className="bg-forest pt-48 pb-48 px-8 text-cream relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sage/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-cream/3 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Left — Text */}
            <FadeIn className="space-y-12">
              <div className="space-y-6">
                <p className="text-sage tracking-[0.4em] uppercase font-bold text-[10px]">Contact</p>
                <h1 className="text-7xl md:text-[8rem] font-medium text-cream uppercase leading-[0.85]">
                  MESSAGE <br />
                  <span className="font-serif italic text-sage lowercase font-light">us.</span>
                </h1>
                <div className="w-24 h-px bg-sage/30 my-8" />
              </div>

              <p className="text-2xl font-serif italic text-sage leading-relaxed max-w-md">
                "A space held in truth, where your becoming is honored."
              </p>

              <div className="space-y-6 text-lg font-light text-cream/70 leading-relaxed">
                <p>Send a message and I will get back to you as soon as I can.</p>
              </div>

              <div className="pt-8 space-y-6 border-t border-cream/10">
                {[
                  "Thoughtful replies",
                  "Clear next steps",
                  "Support for your questions",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 text-cream/60">
                    <div className="w-6 h-px bg-sage/40" />
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
                <div className="absolute inset-0 border border-cream/10 rounded-full" />
                <div className="absolute inset-8 border border-cream/5 rounded-full animate-pulse" />
                <div className="absolute inset-16 border border-sage/10 rounded-full" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <p className="text-[10px] tracking-[0.5em] uppercase font-bold text-sage">Reach out</p>
                    <p className="text-6xl font-serif italic text-cream/90">Now</p>
                    <p className="text-[10px] tracking-[0.5em] uppercase font-bold text-cream/30">With honesty</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FORM SECTION - WHITE/PAPER WITH PREMIUM CONTAINER */}
      <section className="bg-cream py-32 px-8 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-forest/3 skew-x-12 translate-x-1/4 pointer-events-none" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <FadeIn className="text-center mb-20">
            <p className="text-forest tracking-[0.4em] uppercase font-bold text-[10px] mb-6">Send a message</p>
            <h2 className="text-5xl md:text-6xl font-serif italic text-ink uppercase">
              Choose your <span className="text-forest lowercase font-light">moment.</span>
            </h2>
          </FadeIn>

          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-4 rounded-2xl bg-gradient-to-b from-sage/[0.07] via-transparent to-forest/[0.04] blur-xl md:-inset-8"
              aria-hidden
            />

            <div className="relative overflow-hidden rounded-lg border border-forest/10 shadow-[0_28px_72px_rgba(2,69,59,0.11)]">
              <div className="p-8 md:p-12 bg-paper">
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-1 space-y-2">
                    <label className="text-[10px] tracking-[0.4em] uppercase font-bold text-sage" htmlFor="contact-name">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-cream/5 border border-forest/10 rounded-sm px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-sage/20"
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </div>

                  <div className="md:col-span-1 space-y-2">
                    <label className="text-[10px] tracking-[0.4em] uppercase font-bold text-sage" htmlFor="contact-email">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-cream/5 border border-forest/10 rounded-sm px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-sage/20"
                      placeholder="you@example.com"
                      autoComplete="email"
                      inputMode="email"
                    />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] tracking-[0.4em] uppercase font-bold text-sage" htmlFor="contact-message">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full min-h-[160px] bg-cream/5 border border-forest/10 rounded-sm px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-sage/20"
                      placeholder="What would you like to share?"
                    />
                  </div>

                  <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between pt-2">
                    <p className="text-ink/50 font-light text-sm italic">
                      Prefer email?{" "}
                      <a className="text-forest hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
                        {CONTACT_EMAIL}
                      </a>
                    </p>

                    <Button
                      variant="sage"
                      type="submit"
                      disabled={!canSubmit}
                      className="sm:justify-self-end disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      Send message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

