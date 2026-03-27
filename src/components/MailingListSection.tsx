import React from "react";
import { Sparkles } from "lucide-react";
import { useGhlFormEmbed } from "../hooks/useGhlFormEmbed";
import { GHL_SANCTUARY_LIST_FORM_URL } from "../constants/ghl";
import { FadeIn } from "./Common";

/**
 * Email capture via GHL embed (first name + email fields live inside the iframe).
 * Set GHL_SANCTUARY_LIST_FORM_URL in ../constants/ghl.ts to your real form URL.
 */
export const MailingListSection: React.FC = () => {
  useGhlFormEmbed();

  return (
    <section className="relative py-28 md:py-40 px-8 overflow-hidden border-y border-forest/10 bg-cream">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(163,196,188,0.22),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_50%,rgba(2,69,59,0.06),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_0%_80%,rgba(2,69,59,0.05),transparent_45%)]" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-sage/40 to-transparent" />

      <div className="container mx-auto max-w-2xl relative z-10">
        <FadeIn className="text-center">
          <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.45em] uppercase font-semibold text-forest/80 mb-10">
            <Sparkles className="w-3.5 h-3.5 text-sage" aria-hidden />
            The list
            <Sparkles className="w-3.5 h-3.5 text-sage" aria-hidden />
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-ink tracking-tight mb-6 leading-[1.05]">
            Join the{" "}
            <span className="font-serif italic text-forest font-normal">Sanctuary</span>
          </h2>
          <p className="text-lg md:text-xl font-light text-ink/65 max-w-lg mx-auto mb-14 leading-relaxed">
            Receive transmissions, updates, and invitations to upcoming experiences—delivered with intention, never noise.
          </p>

          <div className="relative mx-auto max-w-xl">
            <div className="absolute -inset-px rounded-[2px] bg-gradient-to-br from-sage/30 via-transparent to-forest/20 opacity-80" />
            <div className="relative rounded-[2px] bg-white/90 backdrop-blur-sm shadow-[0_32px_100px_-24px_rgba(2,69,59,0.18),0_0_0_1px_rgba(2,69,59,0.06)] p-3 md:p-5">
              <div className="absolute inset-0 rounded-[2px] ring-1 ring-inset ring-white/60 pointer-events-none" />
              <iframe
                src={GHL_SANCTUARY_LIST_FORM_URL}
                title="Mailing List"
                id="inline-zESL3wsL8RFXi1Ilc6F6"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Mailing List"
                data-height="425"
                data-layout-iframe-id="inline-zESL3wsL8RFXi1Ilc6F6"
                data-form-id="zESL3wsL8RFXi1Ilc6F6"
                className="relative z-10 w-full min-h-[425px] border-0 rounded-[3px] bg-transparent"
                loading="lazy"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
