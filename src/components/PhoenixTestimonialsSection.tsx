import { useMemo, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "./Common";
import type { PhoenixTextTestimonial } from "../data/phoenixTestimonials";

/** Named entries first; original order preserved within each group. */
function sortTestimonialsNamedFirst(items: PhoenixTextTestimonial[]): PhoenixTextTestimonial[] {
  return [...items]
    .map((item, idx) => ({ item, idx }))
    .sort((a, b) => {
      const aHas = Boolean(a.item.name?.trim());
      const bHas = Boolean(b.item.name?.trim());
      if (aHas !== bHas) return aHas ? -1 : 1;
      return a.idx - b.idx;
    })
    .map(({ item }) => item);
}

export type PhoenixTestimonialsSectionProps = {
  testimonials: PhoenixTextTestimonial[];
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  reflectionSuffix: string;
};

export function PhoenixTestimonialsSection({
  testimonials,
  eyebrow,
  title,
  subtitle,
  reflectionSuffix,
}: PhoenixTestimonialsSectionProps) {
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const ordered = useMemo(() => sortTestimonialsNamedFirst(testimonials), [testimonials]);

  const scrollToIndex = (i: number) => {
    const container = testimonialRef.current;
    if (!container?.children[i]) return;
    const card = container.children[i] as HTMLElement;
    card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  const handleScroll = () => {
    const container = testimonialRef.current;
    if (!container) return;
    const viewMid = container.scrollLeft + container.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    for (let i = 0; i < container.children.length; i++) {
      const card = container.children[i] as HTMLElement;
      const cardMid = card.offsetLeft + card.offsetWidth / 2;
      const d = Math.abs(cardMid - viewMid);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    }
    setActiveIndex(best);
  };

  const scrollCarousel = (direction: "left" | "right") => {
    const next = activeIndex + (direction === "right" ? 1 : -1);
    const clamped = Math.max(0, Math.min(ordered.length - 1, next));
    scrollToIndex(clamped);
  };

  if (ordered.length === 0) return null;

  return (
    <Section className="relative overflow-hidden bg-ink py-48 text-cream">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="absolute -right-8 top-1/4 select-none font-serif text-[18vw] italic leading-none text-cream md:text-[14vw]">
          Voices
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cream/15 to-transparent"
        aria-hidden
      />
      <div className="container-narrow relative z-10 max-w-6xl">
        <div className="mb-16 text-center md:mb-20">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.45em] text-burgundy">{eyebrow}</p>
          <h2 className="mb-6 text-5xl font-medium text-cream md:text-7xl lg:text-8xl">{title}</h2>
          <p className="mx-auto max-w-lg text-sm font-light leading-relaxed text-cream/45 md:text-base">{subtitle}</p>
        </div>

        <div className="relative">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-10 bg-gradient-to-r from-ink to-transparent md:w-16"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-10 bg-gradient-to-l from-ink to-transparent md:w-16"
            aria-hidden
          />

          <div
            ref={testimonialRef}
            onScroll={handleScroll}
            className="hide-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-4 px-4 pb-6 pt-2 md:gap-8 md:scroll-px-6 md:px-6"
          >
            {ordered.map((t, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.06 }}
                className="w-[min(82vw,380px)] shrink-0 snap-center md:w-[min(42vw,420px)] lg:w-[400px]"
              >
                <div className="rounded-2xl border border-cream/[0.12] bg-[#232326] p-6 shadow-[0_28px_80px_-24px_rgba(0,0,0,0.65)] ring-1 ring-cream/[0.06] md:p-8">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <img
                      src="/White notext.png"
                      alt=""
                      className="h-7 w-auto max-w-[120px] object-contain object-left opacity-90 md:h-8"
                      loading="lazy"
                    />
                  </div>
                  <p className="mb-2 font-serif text-5xl leading-none text-cream/15" aria-hidden>
                    &ldquo;
                  </p>
                  <blockquote className="text-[15px] font-light italic leading-relaxed text-cream/85 md:text-base">
                    {t.quote}
                  </blockquote>
                  {t.name?.trim() ? (
                    <>
                      <div className="my-6 h-px w-full bg-cream/15" />
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cream/25 bg-cream/[0.04] text-sm font-semibold text-cream/70"
                          aria-hidden
                        >
                          {t.name.trim()[0]!.toUpperCase()}
                        </div>
                        <p className="text-[11px] font-semibold leading-snug text-cream">{t.name.trim()}</p>
                      </div>
                    </>
                  ) : null}
                </div>
                <p className="mt-4 text-center text-[9px] font-medium uppercase tracking-[0.35em] text-cream/25">
                  Reflection {String(i + 1).padStart(2, "0")} · {reflectionSuffix}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-12">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollCarousel("left")}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/15 bg-cream/[0.03] text-cream transition-all duration-300 hover:border-cream/30 hover:bg-cream hover:text-burgundy"
                aria-label="Previous reflection"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="min-w-[5.5rem] text-center font-mono text-xs font-medium tabular-nums tracking-widest text-white">
                {String(activeIndex + 1).padStart(2, "0")} / {String(ordered.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => scrollCarousel("right")}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/15 bg-cream/[0.03] text-cream transition-all duration-300 hover:border-cream/30 hover:bg-cream hover:text-burgundy"
                aria-label="Next reflection"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex max-w-md flex-wrap justify-center gap-2">
              {ordered.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to reflection ${i + 1}`}
                  aria-current={activeIndex === i ? "true" : undefined}
                  onClick={() => scrollToIndex(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    activeIndex === i ? "w-10 bg-teal-400" : "w-1.5 bg-cream/15 hover:bg-cream/35"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
