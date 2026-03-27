import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { Section } from "./Common";

export type TestimonialSlide = { src: string; alt: string };

export type TestimonialsGallerySectionProps = {
  images: TestimonialSlide[];
  eyebrow: string;
  /** Content inside the main h2 (e.g. “Client” + italic “reflections”) */
  title: ReactNode;
  subtitle: string;
  /** Shown as “Reflection 01 · {reflectionSuffix}” */
  reflectionSuffix: string;
  /** Alt text for the lightbox image */
  lightboxAlt: string;
};

export function TestimonialsGallerySection({
  images,
  eyebrow,
  title,
  subtitle,
  reflectionSuffix,
  lightboxAlt,
}: TestimonialsGallerySectionProps) {
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!lightboxSrc) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [lightboxSrc]);

  useEffect(() => {
    if (!lightboxSrc) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxSrc(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxSrc]);

  const scrollToTestimonialIndex = (i: number) => {
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
    const clamped = Math.max(0, Math.min(images.length - 1, next));
    scrollToTestimonialIndex(clamped);
  };

  if (images.length === 0) return null;

  return (
    <>
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxSrc(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Testimonial"
          >
            <motion.button
              type="button"
              className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
              onClick={() => setLightboxSrc(null)}
              aria-label="Close"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <X className="h-5 w-5" />
            </motion.button>

            <motion.div
              className="w-full max-w-2xl"
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 12 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxSrc}
                alt={lightboxAlt}
                className="mx-auto h-auto max-h-[min(85vh,920px)] w-full rounded-md border border-cream/15 bg-cream object-contain object-top shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <p className="mx-auto max-w-lg text-sm font-light leading-relaxed text-cream/45 md:text-base">
              {subtitle}
            </p>
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
              {images.map((t, i) => (
                <motion.div
                  key={t.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 4) * 0.06 }}
                  className="group/card w-[min(82vw,380px)] shrink-0 snap-center md:w-[min(42vw,420px)] lg:w-[400px]"
                >
                  <div className="rounded-2xl border border-cream/[0.09] bg-gradient-to-b from-cream/[0.06] via-cream/[0.02] to-transparent p-[2px] shadow-[0_28px_80px_-24px_rgba(0,0,0,0.65)] ring-1 ring-cream/[0.04] transition-all duration-500 group-hover/card:border-burgundy/25 group-hover/card:ring-burgundy/15 group-hover/card:shadow-[0_36px_90px_-20px_rgba(123,17,3,0.25)]">
                    <div className="overflow-hidden rounded-[14px] bg-ink/80">
                      <button
                        type="button"
                        onClick={() => setLightboxSrc(t.src)}
                        className="relative block w-full cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                        aria-label={`Open testimonial ${i + 1} of ${images.length} in full screen`}
                      >
                        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-ink/50 via-transparent to-ink/10 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
                        <div className="absolute bottom-4 right-4 z-[2] flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 bg-ink/70 text-cream opacity-0 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover/card:opacity-100 group-hover/card:border-cream/35">
                          <ZoomIn className="h-4 w-4" aria-hidden />
                        </div>
                        <img
                          src={t.src}
                          alt={t.alt}
                          loading="lazy"
                          decoding="async"
                          className="aspect-[3/4] w-full object-cover object-top transition-[filter,transform] duration-700 group-hover/card:scale-[1.02] group-hover/card:brightness-[1.03] md:aspect-[4/5] md:max-h-[min(520px,70vh)]"
                        />
                      </button>
                    </div>
                  </div>
                  <p className="mt-4 text-center text-[9px] font-medium uppercase tracking-[0.35em] text-cream/25">
                    Reflection {String(i + 1).padStart(2, "0")} · {reflectionSuffix}
                  </p>
                </motion.div>
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
                <span className="min-w-[5.5rem] text-center font-mono text-[11px] tabular-nums tracking-widest text-cream/50">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
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
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to reflection ${i + 1}`}
                    aria-current={activeIndex === i ? "true" : undefined}
                    onClick={() => scrollToTestimonialIndex(i)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      activeIndex === i ? "w-10 bg-burgundy" : "w-1.5 bg-cream/15 hover:bg-cream/35"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
