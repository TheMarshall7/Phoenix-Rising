import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

type LegalPageLayoutProps = {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalPageLayout({ eyebrow, title, updated, children }: LegalPageLayoutProps) {
  return (
    <main className="relative min-h-screen bg-forest text-cream selection:bg-sage/30 selection:text-ink overflow-hidden">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-sage/[0.07] blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-cream/[0.04] blur-[90px]" />
        <div className="absolute top-1/2 left-1/2 h-[min(80vw,720px)] w-[min(80vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/[0.06]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/25 via-transparent to-forest" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-8 pb-28 pt-28 md:pb-36 md:pt-36 lg:max-w-3xl">
        <Link
          to="/"
          className="group mb-14 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.35em] text-cream/50 transition-colors hover:text-cream"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back to Home
        </Link>

        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.45em] text-sage">{eyebrow}</p>
        <div className="mb-6 h-px w-16 bg-gradient-to-r from-gold/60 to-transparent" />
        <h1 className="mb-4 text-4xl font-medium leading-[0.95] tracking-tight text-cream md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mb-14 font-serif text-lg italic text-cream/45">{updated}</p>

        <div className="border border-cream/10 bg-cream/[0.04] p-10 shadow-[0_32px_80px_rgba(0,0,0,0.2)] backdrop-blur-sm md:p-14">
          <div className="space-y-8 text-[15px] font-light leading-relaxed text-cream/80 md:text-base">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
