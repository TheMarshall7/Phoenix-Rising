/**
 * Session availability from "Calendar for Phoenix Rising IV.xlsx" (Sheet4, facilitator availability).
 * Source: Phoenix Rising / Calendar for Phoenix Rising IV.xlsx
 */
export type PortalSession = {
  name: string;
  title: string;
  desc: string;
  /** Host availability window(s) from the calendar spreadsheet */
  date: string;
};

export const PHOENIX_PORTAL_SESSIONS: PortalSession[] = [
  {
    name: "Alyah Al Jasser",
    title: "Reclaiming Work/Life Balance",
    desc: "Using the wisdom of the menstrual cycle to transform the way women work and live, reducing burnout and cultivating a more sustainable approach.",
    date: "Apr 12 · 12:30 PM Dubai",
  },
  {
    name: "Rawan Roshni",
    title: "Voice Liberation & Re-Rooting",
    desc: "Working with the voice as an instrument of transformation, re-rooting into ancestry, authenticity, and collective liberation.",
    date: "Apr 12 · 7:30 PM Dubai",
  },
  {
    name: "HayaYasmeen",
    title: "Dharma Marga: Discover Your Life Path",
    desc: "Using Life Path numbers as a practical tool for clarity and direction, including a questionnaire and fearless embodiment exercise.",
    date: "Apr 14 · 9:00 PM Dubai",
  },
  {
    name: "Imad Naassi",
    title: "Somatic Breathwork",
    desc: "A journey to release exhaustion, suppressed emotions, and reclaim wholeness through breath and somatic guidance.",
    date: "Apr 16 · 9:00 PM Dubai",
  },
  {
    name: "Sara Abiqwa",
    title: "Living As Your Higher Self",
    desc: "An invitation to remember the deeper awareness within you, the part that sees clearly and chooses consciously. Step into personal agency, responsibility, and embodied leadership.",
    date: "Apr 18 · 12:30 PM Dubai",
  },
  {
    name: "Soraya Aouad (Sunchef)",
    title: "From Intimidation to Empowerment",
    desc: "Falling in love with cooking as a grounded practice of self-care, self-leadership, and embodied discipline — not perfection.",
    date: "Apr 21 · 9:00 PM Dubai",
  },
  {
    name: "Amira ElBeialy",
    title: "Magnetize & Manifest",
    desc: "A guided session designed to help you clarify your true intention and uncover what may be unconsciously blocking its fulfillment. Together, we’ll identify and release limiting beliefs and internal resistance, and recalibrate your nervous system to feel safe receiving what you desire.",
    date: "Apr 22 · 9:00 PM Dubai",
  },
  {
    name: "Yāna Nancy Sebaali",
    title: "From Healing to Living: Cyclical Intelligence",
    desc: "Exploring cyclical intelligence as a way of living — an embodied understanding that growth unfolds through seasons of expansion and contraction, clarity and tenderness, sovereignty and rest.",
    date: "Apr 25 · 11:00 AM Dubai",
  },
  {
    name: "Rasha AlShaar",
    title: "Play as Practice",
    desc: "A somatic conscious movement experience to explore play, pleasure, and aliveness as essential elements of regulation and resilience.",
    date: "Apr 25 · 12:30 PM Dubai",
  },
  {
    name: "Mira Tabbara",
    title: "Level Up Your Business",
    desc: "Mindset and business tools to help solopreneurs structure offers, attract aligned clients, and build a sustainable, profitable business.",
    date: "Apr 26 · 11:00 AM Dubai",
  },
  {
    name: "Sarah Berjaoui",
    title: "Understanding Relationships & Polarity",
    desc: "Exploring emotional patterns, masculine presence, and feminine polarity through Human Design, attachment theory, and Family Constellations.",
    date: "Apr 26 · 7:30 PM Dubai",
  },
  {
    name: "Julia Stadler & Maya Abou Chedid",
    title: "The Living Bridge",
    desc: "Where Psychotherapy Meets Shamanic Practice & Expanded States. Exploring the meeting point of Spirit and Psyche, nervous system capacity, and integrating the plausible while holding the mystical.",
    date: "Apr 29 · 9:00 PM Dubai",
  },
  {
    name: "Mariam Alshatti",
    title: "Authentic Alignment",
    desc: "A class weaving teachings, writing, and meditation to witness what is within and walk in integrity with a straight spine.",
    date: "Apr 30 · 9:00 PM Dubai",
  },
  {
    name: "Bahaa Abou Dargham",
    title: "2027 and Beyond: The End of the Planning Era",
    desc: "According to Human Design, a new cycle begins in 2027 — the Sleeping Phoenix. This transition marks a fundamental shift in how we survive, relate, and make decisions. This session offers a grounded yet expansive perspective on this invitation into a new way of being.",
    date: "TBD (see calendar)",
  },
  {
    name: "Raghdan",
    title: "Future Self Embodiment",
    desc: "Cultivating energetic clarity as you step into new chapters, aligning your inner frequency with the life you desire so you can begin living it now.",
    date: "TBD (see calendar)",
  },
  {
    name: "Attia",
    title: "Astrocartography for Conscious Travel",
    desc: "How to use Astrocartography and Human Design to make more intentional travel and relocation decisions that truly support your energy.",
    date: "TBD (see calendar)",
  },
];
