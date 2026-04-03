import React from "react";
import { Mail } from "lucide-react";
import { useGhlFormEmbed } from "../hooks/useGhlFormEmbed";
import {
  GHL_MAILING_LIST_FORM_HEIGHT_PX,
  GHL_MAILING_LIST_FORM_ID,
  GHL_SANCTUARY_LIST_FORM_URL,
} from "../constants/ghl";
import { FadeIn } from "./Common";

/**
 * Email capture via GHL embed (fields live inside the iframe).
 * Form id / height: ../constants/ghl.ts (`GHL_MAILING_LIST_FORM_ID`, `GHL_MAILING_LIST_FORM_HEIGHT_PX`).
 */
const INLINE_IFRAME_ID = `inline-${GHL_MAILING_LIST_FORM_ID}`;

export const MailingListSection: React.FC = () => {
  useGhlFormEmbed();

  return (
    <section className="relative py-32 md:py-44 px-6 sm:px-8 overflow-hidden border-y border-forest/[0.14] bg-gradient-to-b from-paper via-cream to-[#EDE8E0]">
      {/* Depth & warmth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-25%,rgba(197,160,89,0.11),transparent_52%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_100%_60%,rgba(163,196,188,0.14),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_0%_85%,rgba(2,69,59,0.06),transparent_48%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-forest/15 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <FadeIn>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-0 lg:items-stretch">
            {/* Left: narrative */}
            <div className="lg:col-span-5 flex flex-col justify-center pr-0 lg:pr-12 xl:pr-16 lg:border-r lg:border-forest/[0.08]">
              <div className="h-px w-16 md:w-20 bg-gradient-to-r from-transparent via-gold/70 to-transparent mb-10" aria-hidden />

              <div className="inline-flex items-center gap-3 text-[9px] tracking-[0.55em] uppercase font-semibold text-forest/55 mb-8">
                <span className="h-px w-6 bg-gradient-to-r from-transparent to-gold/50" aria-hidden />
                <Mail className="w-3.5 h-3.5 text-gold/90" strokeWidth={1.25} aria-hidden />
                <span className="text-forest/70">Letters from the threshold</span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-7xl font-medium text-ink tracking-tight leading-[0.95] text-left">
                Join the{" "}
                <span className="font-serif italic font-light text-forest tracking-tight [text-shadow:0_1px_40px_rgba(2,69,59,0.12)]">
                  Sanctuary
                </span>
              </h2>

              <p className="mt-8 text-lg md:text-xl font-light text-ink/55 leading-[1.85] tracking-wide max-w-md">
                Receive transmissions, updates, and invitations to upcoming experiences—delivered with intention,
                never noise.
              </p>

              <p className="mt-10 text-[10px] tracking-[0.28em] uppercase font-medium text-forest/35 max-w-sm leading-relaxed">
                Unsubscribe anytime · your inbox stays yours
              </p>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-7 flex flex-col justify-center pl-0 lg:pl-12 xl:pl-16">
              <div className="relative w-full max-w-xl mx-auto lg:ml-auto lg:mr-0">
                <div className="relative rounded-sm p-[1px] bg-gradient-to-br from-gold/40 via-white/85 to-sage/35 shadow-[0_8px_40px_-12px_rgba(2,69,59,0.12),0_2px_16px_-4px_rgba(197,160,89,0.08)]">
                  <div className="rounded-sm bg-gradient-to-b from-white to-[#FAFAF8] p-1.5 md:p-2 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.95)]">
                    <div className="relative overflow-hidden rounded-[4px] border border-forest/[0.08] bg-white/95 backdrop-blur-[2px] shadow-[inset_0_2px_16px_rgba(2,69,59,0.04)] p-4 md:p-6">
                      <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.35em] text-forest/45">
                        Your details
                      </p>
                      <div
                        className="relative z-10 w-full overflow-hidden rounded-[2px]"
                        style={{ minHeight: GHL_MAILING_LIST_FORM_HEIGHT_PX }}
                      >
                        <iframe
                          src={GHL_SANCTUARY_LIST_FORM_URL}
                          title="Mailing List"
                          id={INLINE_IFRAME_ID}
                          data-layout="{'id':'INLINE'}"
                          data-trigger-type="alwaysShow"
                          data-trigger-value=""
                          data-activation-type="alwaysActivated"
                          data-activation-value=""
                          data-deactivation-type="neverDeactivate"
                          data-deactivation-value=""
                          data-form-name="Mailing List"
                          data-height={String(GHL_MAILING_LIST_FORM_HEIGHT_PX)}
                          data-layout-iframe-id={INLINE_IFRAME_ID}
                          data-form-id={GHL_MAILING_LIST_FORM_ID}
                          style={{
                            width: "100%",
                            height: GHL_MAILING_LIST_FORM_HEIGHT_PX,
                            minHeight: GHL_MAILING_LIST_FORM_HEIGHT_PX,
                            border: "none",
                            borderRadius: 2,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
