import { CheckCircle2, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useGhlFormEmbed } from "../../hooks/useGhlFormEmbed";

export default function CheckoutPage() {
  useGhlFormEmbed();

  return (
    <div className="min-h-screen bg-cream text-ink selection:bg-burgundy/15 selection:text-ink font-sans flex flex-col">
      {/* HEADER */}
      <nav className="p-8 flex justify-between items-center bg-paper border-b border-ink/5">
        <Link to="/" className="flex items-center gap-2 group text-[10px] tracking-[0.3em] uppercase font-bold text-ink/80 hover:text-ink transition-colors">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        <img src="/logo-orange.png" alt="Phoenix Rising" className="h-12 object-contain" />
        <div className="w-24"></div> {/* Spacer */}
      </nav>

      <main className="container mx-auto px-8 py-20 flex-grow">
        <div className="grid lg:grid-cols-12 gap-16 xl:gap-24 items-start">
          
          {/* LEFT COLUMN: GHL CHECKOUT FORM */}
          <div className="lg:col-span-7 space-y-16">
            <header>
              <p className="text-burgundy/80 text-[10px] tracking-[0.5em] uppercase mb-4 font-bold">Secure Your Spot</p>
              <h1 className="text-5xl md:text-7xl font-semibold mb-6 text-burgundy">THE <span className="font-serif italic text-burgundy">enrollment</span></h1>
              <p className="text-ink/80 font-normal text-lg">You are moments away from joining a 21-day container devoted to your integration and embodiment.</p>
            </header>

            <div className="w-full min-h-[1236px] rounded-[3px] overflow-hidden bg-white border border-ink/10 shadow-sm">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/yo8WVUvk1Z8w66hXIdOS"
                style={{ width: "100%", height: "100%", minHeight: 1236, border: "none", borderRadius: 3 }}
                id="inline-yo8WVUvk1Z8w66hXIdOS"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Phoenix Rising Enrollment"
                data-height="1236"
                data-layout-iframe-id="inline-yo8WVUvk1Z8w66hXIdOS"
                data-form-id="yo8WVUvk1Z8w66hXIdOS"
                title="Phoenix Rising Enrollment"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: SUMMARY */}
          <aside className="lg:col-span-5 space-y-12 lg:sticky lg:top-16">
            <div className="p-10 md:p-12 border border-burgundy bg-burgundy text-cream relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-white/15 transition-all duration-1000"></div>
              
              <h2 className="text-[10px] tracking-[0.4em] uppercase font-bold text-cream/90 mb-12">Program Summary</h2>
              
              <div className="space-y-10 relative z-10">
                <div className="flex justify-between items-start border-b border-cream/10 pb-8">
                  <div>
                    <h3 className="text-3xl font-serif italic text-cream mb-2">21 Days of <br/> Embodied Living</h3>
                    <p className="text-[10px] text-cream/50 uppercase tracking-[0.2em] font-bold mt-4">Phoenix Rising IV Edition</p>
                  </div>
                  <span className="text-2xl font-semibold text-cream">444 AED</span>
                </div>

                <ul className="space-y-6 pt-2">
                  {[
                    "Daily Live Interactive Sessions",
                    "Lifetime Access to Replays",
                    "Integration Workbook & Resources",
                    "Private Community Container"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-sm font-normal text-cream/80">
                      <CheckCircle2 className="w-4 h-4 text-cream shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-10 border-t border-cream/10 flex justify-between items-end">
                  <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-cream/50">Total Due Today</span>
                  <span className="text-4xl font-medium text-cream">444 AED</span>
                </div>
              </div>
            </div>

            <div className="p-10 border border-ink/5 bg-paper text-center">
              <p className="text-[9px] tracking-[0.3em] uppercase font-bold text-burgundy mb-4 italic">Next Step</p>
              <p className="text-sm text-ink/80 font-medium">Upon enrollment, you will receive an immediate confirmation email with your onboarding details.</p>
            </div>
          </aside>

        </div>
      </main>

      <footer className="py-12 border-t border-ink/5 text-center opacity-70 text-[9px] tracking-widest uppercase font-bold text-ink">
        © 2026 PHOENIX RISING · SECURE ENROLLMENT PORTAL
      </footer>
    </div>
  );
}
