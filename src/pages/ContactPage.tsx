import React from "react";
import { motion } from "framer-motion";
import { FadeIn } from "../components/Common";
import { useGhlFormEmbed } from "../hooks/useGhlFormEmbed";
import {
  GHL_CONTACT_FORM_HEIGHT_PX,
  GHL_CONTACT_FORM_ID,
  GHL_CONTACT_FORM_IFRAME_ID,
  GHL_CONTACT_FORM_URL,
} from "../constants/ghl";

const CONTACT_EMAIL = "mariaamiouni@gmail.com";

export const ContactPage: React.FC = () => {
  useGhlFormEmbed();

  return (
    <main className="bg-paper overflow-hidden">
      <section className="bg-forest pt-48 pb-32 md:pb-48 px-8 text-cream relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sage/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-cream/3 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-start">
            <FadeIn className="space-y-10 text-center lg:text-left">
              <div className="space-y-6">
                <p className="text-sage tracking-[0.4em] uppercase font-bold text-[10px]">Contact</p>
                <h1 className="text-6xl sm:text-7xl md:text-[8rem] font-medium text-cream uppercase leading-[0.85]">
                  MESSAGE <br />
                  <span className="font-serif italic text-sage lowercase font-light">me.</span>
                </h1>
                <div className="w-24 h-px bg-sage/30 my-8 mx-auto lg:mx-0" />
              </div>

              <p className="text-2xl font-serif italic text-sage leading-relaxed max-w-md mx-auto lg:mx-0">
                "A space held in truth, where your becoming is honored."
              </p>

              <p className="text-lg font-light text-cream/70 leading-relaxed max-w-md mx-auto lg:mx-0">
                Share what is on your heart. I will respond as soon as I can.
              </p>

              <div className="pt-6 space-y-5 border-t border-cream/10 max-w-md mx-auto lg:mx-0">
                {["Thoughtful replies", "Clear next steps", "Support for your questions"].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 text-cream/60 justify-center lg:justify-start">
                    <div className="w-6 h-px bg-sage/40 shrink-0" />
                    <span className="text-[11px] tracking-[0.3em] uppercase font-bold">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-cream/50 font-light text-sm italic max-w-md mx-auto lg:mx-0">
                Prefer email?{" "}
                <a className="text-sage hover:underline not-italic font-medium" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
              </p>
            </FadeIn>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full z-20 mt-10 md:mt-14 lg:mt-24"
            >
              <div className="relative overflow-hidden rounded-lg border border-cream/15 shadow-2xl bg-cream/95 p-1.5 ring-1 ring-cream/20">
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-sage/40 to-transparent"
                  aria-hidden
                />
                <div className="rounded-[4px] border border-forest/10 bg-white overflow-hidden">
                  <p className="px-5 pt-5 pb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-forest/45">
                    Send a message
                  </p>
                  <div
                    className="relative w-full overflow-hidden px-2 pb-2"
                    style={{ minHeight: GHL_CONTACT_FORM_HEIGHT_PX }}
                  >
                    <iframe
                      src={GHL_CONTACT_FORM_URL}
                      title="Contact Form"
                      id={GHL_CONTACT_FORM_IFRAME_ID}
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="Contact Form"
                      data-height={String(GHL_CONTACT_FORM_HEIGHT_PX)}
                      data-layout-iframe-id={GHL_CONTACT_FORM_IFRAME_ID}
                      data-form-id={GHL_CONTACT_FORM_ID}
                      className="block w-full bg-transparent"
                      style={{
                        width: "100%",
                        height: GHL_CONTACT_FORM_HEIGHT_PX,
                        minHeight: GHL_CONTACT_FORM_HEIGHT_PX,
                        border: "none",
                        borderRadius: 3,
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};
