import React from "react";
import { Compass, Eye, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/Common";
import { MailingListSection } from "../components/MailingListSection";

export const EgyptPilgrimagePage: React.FC = () => {
  return (
    <main className="bg-paper overflow-hidden">
      {/* HERO SECTION - Forest background, gold/sand tones */}
      <section className="relative min-h-[90vh] flex items-center bg-forest overflow-hidden pt-36 pb-20 px-8 text-cream">
        <div className="absolute inset-0 z-0 flex flex-col md:flex-row-reverse">
          <div className="w-full md:w-1/2 relative h-full min-h-[40vh] md:min-h-0">
            <img
              src="/_31.jpg"
              alt="Ancient Egypt Temple"
              className="w-full h-full object-cover grayscale-[12%] opacity-75 md:opacity-90"
            />
            <div className="absolute inset-0 bg-forest/25"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/35 to-transparent hidden md:block"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/35 to-transparent md:hidden"></div>
          </div>
          <div className="w-full md:w-1/2 bg-forest h-full hidden md:block"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl w-full grid md:grid-cols-12 gap-16 items-center">
          {/* Left Text content */}
          <div className="md:col-span-7 space-y-10 text-center md:text-left">
            <span className="text-sage tracking-[0.45em] uppercase font-semibold text-[10px] mb-4 block">
              Sacred Travel · Immersive
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] text-cream font-semibold tracking-tight uppercase">
              PILGRIMAGE <br />
              <span className="font-serif italic text-sage lowercase font-light tracking-normal block mt-2">Egypt</span>
            </h1>
            
            <div className="w-20 h-px bg-sage/30 my-8 mx-auto md:mx-0"></div>

            <div className="space-y-6 max-w-xl mx-auto md:mx-0">
              <p className="text-2xl md:text-3xl font-serif italic text-cream/95 leading-snug">
                "Pilgrimage is where the body finally gets to believe what the mind already knows."
              </p>
              <p className="text-base font-light text-cream/70 leading-relaxed font-sans">
                We travel to the places where the Earth still remembers. Egypt is joining soon. Sitting with the temples, walking the desert lines, and letting the ancient architecture do what no retreat room can.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start pt-6">
              <a href="#waitlist" className="contents">
                <Button variant="sage">Join the Waitlist</Button>
              </a>
              <Link to="/contact" className="contents">
                <Button
                  variant="outline"
                  className="!border-2 !border-white !text-white bg-transparent hover:!bg-white hover:!text-forest hover:!border-white"
                >
                  Enquire Directly
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PORTALS & ANCIENT LAND DETAIL */}
      <section className="bg-white py-40 px-8 text-ink relative">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-16 text-center">
            <span className="text-forest tracking-[0.5em] uppercase font-bold text-[10px] block">
              The Architecture of Remembrance
            </span>
            
            <div className="max-w-2xl mx-auto border-l-2 border-forest/20 pl-8 md:pl-12 text-left my-12">
              <p className="text-3xl md:text-4xl font-serif italic text-forest/95 leading-snug">
                "We travel not to find something new, but to walk the lands that already remember our names."
              </p>
            </div>

            <div className="w-16 h-px bg-forest/20 mx-auto"></div>

            <div className="grid md:grid-cols-2 gap-12 text-left text-lg font-light leading-relaxed text-ink/80 font-sans">
              <p>
                The temples along the Nile were built as physical mirrors of cosmic order. Standing in these stone chambers, your physical structure responds to the geometry, the frequency, and the long-held memory of the Earth.
              </p>
              <div className="space-y-6">
                <p className="font-serif italic text-forest text-xl leading-relaxed">
                  Egypt joining soon.
                </p>
                <p>
                  This pilgrimage will combine somatic inquiry, lineage clearing, and direct contact with the ancient templates. Space will be strictly limited to an intimate group.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="bg-[#012f27] py-32 px-8 text-cream">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Immersive Sacred Travel", desc: "A journey completely integrated with rituals, somatic clearing, and devotional space-holding.", icon: Compass },
              { title: "Ancient Temples", desc: "Walking the lines of Isis, Horus, and the deep Nile mysteries.", icon: Sparkles },
              { title: "Small Group", desc: "Strictly limited capacity to keep the container deeply personal and horizontal.", icon: Eye }
            ].map((card, i) => {
              const IconComponent = card.icon;
              return (
                <div key={i} className="p-10 border border-cream/10 bg-forest/30 flex flex-col justify-between min-h-[260px] rounded-sm hover:border-sage/35 transition-colors duration-500">
                  <div className="space-y-6">
                    <IconComponent className="w-6 h-6 text-sage" />
                    <h3 className="text-2xl font-serif italic text-cream uppercase">{card.title}</h3>
                    <p className="text-sm font-light text-cream/70 leading-relaxed font-sans">{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <MailingListSection pilgrimageName="Egypt" />
    </main>
  );
};
