/**
 * Phoenix Rising IV — portal schedule & order.
 * Source: PR IV - New Calendar Dates - PR IV NEW DATES.csv (Apr 11 – May 2).
 * Weekdays Mon–Thu: 9:00 PM Dubai · Fri OFF · Sat: 11:00 AM & 12:30 PM · Sun: 11:00 AM & 7:30 PM (where listed).
 * Omits unnamed “1 session at 11am available” cells so facilitator portals total 19; 18 unique practitioners (Maria ×3 ceremonies).
 */

export type PortalSession = {
  /** 1–19 */
  portal: number;
  name: string;
  title: string;
  desc: string;
  date: string;
  photo?: string;
  photoObjectPosition?: string;
  /** Co-led session: second headshot */
  photoSecondary?: string;
  photoSecondaryObjectPosition?: string;
};

export const PHOENIX_PORTAL_SESSIONS: PortalSession[] = [
  {
    portal: 1,
    name: "Maria Amiouni",
    title: "Opening Ceremony",
    desc: "Welcome into the Phoenix Rising container — intention, presence, and the arc of the journey ahead.",
    date: "Sat Apr 11 · 11:00 AM Dubai",
    photo: "/_114.jpg",
    photoObjectPosition: "object-[50%_25%]",
  },
  {
    portal: 2,
    name: "Alyah Al Jasser",
    title: "Reclaiming Work/Life Balance",
    desc: "Using the wisdom of the menstrual cycle to transform the way women work and live, reducing burnout and cultivating a more sustainable approach.",
    date: "Sun Apr 12 · 12:30 PM Dubai",
    photo: "/practitioners/alyah-al-jasser.jpg",
  },
  {
    portal: 3,
    name: "Rawan Roshni",
    title: "Voice Liberation & Re-Rooting",
    desc: "Working with the voice as an instrument of transformation, re-rooting into ancestry, authenticity, and collective liberation.",
    date: "Sun Apr 12 · 7:30 PM Dubai",
    photo: "/practitioners/rawan-roshni.jpg",
  },
  {
    portal: 4,
    name: "HayaYasmeen",
    title: "Dharma Marga: Discover Your Life Path",
    desc: "Using Life Path numbers as a practical tool for clarity and direction, including a questionnaire and fearless embodiment exercise.",
    date: "Tue Apr 14 · 9:00 PM Dubai",
    photo: "/practitioners/haya-yasmeen.jpg",
  },
  {
    portal: 5,
    name: "Hadar Cohen",
    title: "Embodied Wisdom & Presence",
    desc: "A guided exploration of presence and embodiment — meeting yourself with clarity as we move through the Phoenix arc.",
    date: "Wed Apr 15 · 9:00 PM Dubai",
    photo: "/practitioners/hadar-cohen.png",
  },
  {
    portal: 6,
    name: "Imad Naassi",
    title: "Somatic Breathwork",
    desc: "A journey to release exhaustion, suppressed emotions, and reclaim wholeness through breath and somatic guidance.",
    date: "Thu Apr 16 · 9:00 PM Dubai",
    photo: "/practitioners/imad-naassi-lightbox.jpg",
    photoObjectPosition: "object-[50%_22%]",
  },
  {
    portal: 7,
    name: "Sara Abiqwa",
    title: "Living As Your Higher Self",
    desc: "An invitation to remember the deeper awareness within you, the part that sees clearly and chooses consciously. Step into personal agency, responsibility, and embodied leadership.",
    date: "Sat Apr 18 · 12:30 PM Dubai",
    photo: "/practitioners/sara-abiqwa.jpg",
  },
  {
    portal: 8,
    name: "Maria Amiouni",
    title: "New Moon Ceremony",
    desc: "A ceremonial evening to align with the new moon — release, intention, and renewal within the collective field.",
    date: "Sun Apr 19 · 7:30 PM Dubai",
    photo: "/_114.jpg",
    photoObjectPosition: "object-[50%_25%]",
  },
  {
    portal: 9,
    name: "Soraya Aouad (Sunchef)",
    title: "From Intimidation to Empowerment",
    desc: "Falling in love with cooking as a grounded practice of self-care, self-leadership, and embodied discipline — not perfection.",
    date: "Tue Apr 21 · 9:00 PM Dubai",
    photo: "/practitioners/soraya-aouad.jpg",
  },
  {
    portal: 10,
    name: "Amira ElBeialy",
    title: "Magnetize & Manifest",
    desc: "Clarify your true intention, release what blocks it, and recalibrate your nervous system to feel safe receiving what you desire.",
    date: "Wed Apr 22 · 9:00 PM Dubai",
    photo: "/practitioners/amira-elbeialy.jpg",
  },
  {
    portal: 11,
    name: "Caline",
    title: "Heart-Centered Practice",
    desc: "A session of depth, presence, and integration — meeting yourself with compassion and clarity in the Phoenix container.",
    date: "Thu Apr 23 · 9:00 PM Dubai",
    photo: "/practitioners/caline-malek.png",
  },
  {
    portal: 12,
    name: "Yāna Nancy Sebaali",
    title: "From Healing to Living: Cyclical Intelligence",
    desc: "Exploring cyclical intelligence as a way of living — growth through seasons of expansion and contraction, clarity and tenderness, sovereignty and rest.",
    date: "Sat Apr 25 · 11:00 AM Dubai",
    photo: "/practitioners/yana-sebaali.jpg",
  },
  {
    portal: 13,
    name: "Rasha AlShaar",
    title: "Play as Practice",
    desc: "A somatic conscious movement experience to explore play, pleasure, and aliveness as essential elements of regulation and resilience.",
    date: "Sat Apr 25 · 12:30 PM Dubai",
    photo: "/practitioners/rasha-alshaar.jpg",
  },
  {
    portal: 14,
    name: "Mira Tabbara",
    title: "Level Up Your Business",
    desc: "Mindset and business tools to help solopreneurs structure offers, attract aligned clients, and build a sustainable, profitable business.",
    date: "Sun Apr 26 · 11:00 AM Dubai",
    photo: "/practitioners/mira-tabbara.jpg",
  },
  {
    portal: 15,
    name: "Sarah Berjaoui",
    title: "Understanding Relationships & Polarity",
    desc: "Exploring emotional patterns, masculine presence, and feminine polarity through Human Design, attachment theory, and Family Constellations.",
    date: "Sun Apr 26 · 7:30 PM Dubai",
  },
  {
    portal: 16,
    name: "Aude Barras",
    title: "The Rose Lineage: Embodied Remembrance",
    desc: "Feminine embodiment and remembrance through an ancient, living lineage — intimacy with the sacred, beauty, and the long-forgotten lines of the Rose.",
    date: "Tue Apr 28 · 9:00 PM Dubai",
    photo: "/Aude%20Barras.jpg",
    photoObjectPosition: "object-[50%_22%]",
  },
  {
    portal: 17,
    name: "Julia Stadler & Maya Abou Chedid",
    title: "The Living Bridge",
    desc: "Where psychotherapy meets shamanic practice and expanded states — Spirit and Psyche, nervous system capacity, integrating the plausible while holding the mystical.",
    date: "Wed Apr 29 · 9:00 PM Dubai",
    photo: "/practitioners/julia-stadler.jpg",
    photoSecondary: "/practitioners/maya-abou-chedid.jpg",
  },
  {
    portal: 18,
    name: "Mariam Alshatti",
    title: "Authentic Alignment",
    desc: "Teachings, writing, and meditation to witness what is within and walk in integrity with a straight spine.",
    date: "Thu Apr 30 · 9:00 PM Dubai",
    photo: "/practitioners/mariam-alshatti.jpg",
  },
  {
    portal: 19,
    name: "Maria Amiouni",
    title: "Closing Ceremony (Full Moon in Scorpio)",
    desc: "Integration, gratitude, and closing the Phoenix Rising IV container under the full moon in Scorpio — anchoring what has shifted and what continues.",
    date: "Sat May 2 · 11:00 AM Dubai",
    photo: "/_114.jpg",
    photoObjectPosition: "object-[50%_25%]",
  },
];
