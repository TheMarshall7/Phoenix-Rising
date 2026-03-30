/**
 * Phoenix Rising IV — portal schedule & order.
 * Source: PR IV calendar (Apr 11 – May 2).
 * Weekdays Mon–Thu: 9:00 PM Dubai · Fri OFF · Sat: 11:00 AM & 12:30 PM · Sun: 11:00 AM & 7:30 PM (where listed).
 */

export type PortalSession = {
  /** 1–18 */
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
    title: "The Initiation: Entering the Field with Maria Amiouni",
    desc: "We open the 21 days as a living field — not a performance. The Initiation: intention, presence, and the arc ahead — practicing integration, staying with what is real, and entering together.",
    date: "Sat Apr 11 · 11:00 AM Dubai",
    photo: "/_114.jpg",
    photoObjectPosition: "object-[50%_25%]",
  },
  {
    portal: 2,
    name: "Alyah Al Jasser",
    title: "Reclaiming a Better Work/Life Balance Using the Wisdom of the Menstrual Cycle with Alyah",
    desc: "Better work/life balance — using the wisdom of the menstrual cycle to transform the way women work and live, reducing burnout and cultivating a more sustainable approach.",
    date: "Sun Apr 12 · 12:30 PM Dubai",
    photo: "/practitioners/alyah-al-jasser.jpg",
  },
  {
    portal: 3,
    name: "Rawan Roshni",
    title: "Voice Liberation & Re-Rooting with Rawan Roshni",
    desc: "Voice Liberation — working with the voice as an instrument of transformation, re-rooting into ancestry, authenticity, and collective liberation.",
    date: "Sun Apr 12 · 7:30 PM Dubai",
    photo: "/practitioners/rawan-roshni.jpg",
  },
  {
    portal: 4,
    name: "Haya Yasmeen",
    title: "Dharma Marga: Discover Your Life Path with Haya Yasmeen",
    desc: "Discover your life path — using Life Path numbers as a practical tool for clarity and direction, including a questionnaire and fearless embodiment exercise.",
    date: "Tue Apr 14 · 9:00 PM Dubai",
    photo: "/practitioners/haya-yasmeen.jpg",
  },
  {
    portal: 5,
    name: "Hadar Cohen",
    title: "Listening Within: Learning to Trust Yourself with Hadar Cohen",
    desc: "Learning to trust yourself — turning attention inward, discerning signal from noise, and building trust in what you feel and sense before you override it.",
    date: "Wed Apr 15 · 9:00 PM Dubai",
    photo: "/practitioners/hadar-cohen.jpg",
  },
  {
    portal: 6,
    name: "Imad Naassi",
    title: "Somatic Breathwork with Imad",
    desc: "Somatic breathwork — a journey to release exhaustion, suppressed emotions, and reclaim wholeness through breath and somatic guidance.",
    date: "Thu Apr 16 · 9:00 PM Dubai",
    photo: "/practitioners/imad-naassi-lightbox.jpg",
    photoObjectPosition: "object-[50%_22%]",
  },
  {
    portal: 7,
    name: "Sara Abiqwa",
    title: "Living & Leading From Your Higher Self with Sara Abiqwa",
    desc: "Living as your higher self — remembering the deeper awareness within you, stepping into agency, responsibility, and embodied leadership.",
    date: "Sat Apr 18 · 12:30 PM Dubai",
    photo: "/practitioners/sara-abiqwa.jpg",
  },
  {
    portal: 8,
    name: "Maria Amiouni",
    title: "The Fire Within: A Re-Commitment to your Mission with Maria",
    desc: "Aries new moon — we turn toward what still burns: your mission, clarified and chosen again. Release what dimmed it; let the field witness your re-commitment to what you are here to live.",
    date: "Aries New Moon · Sun Apr 19 · 7:30 PM Dubai",
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
    title: "Magnetize & Manifest with Amira",
    desc: "Magnetise & manifest — desire as integration: naming what you want without abandoning your body, softening old stories, and building the capacity to receive without overriding your truth.",
    date: "Wed Apr 22 · 9:00 PM Dubai",
    photo: "/practitioners/amira-elbeialy.jpg",
  },
  {
    portal: 11,
    name: "Caline Malek",
    title:
      "In Good Company With Yourself: Human Design and Crystal Energy for Everyday Living with Caline Malek",
    desc: "This is a practical session for people who are done with the theory and want to actually embody the practice. We'll use Human Design to understand your energy and rhythms, bring in crystal energy as a grounding anchor, and spend time in honest community conversation. You'll leave with a clearer sense of who you are and how to stop overriding yourself in daily life. Simple, slow, and real.",
    date: "Thu Apr 23 · 9:00 PM Dubai",
    photo: "/practitioners/caline-malek.jpg",
  },
  {
    portal: 12,
    name: "Yāna Nancy Sebaali",
    title: "The Way of Love: Cyclical Intelligence & the Inner Chambers of the Heart with Yana",
    desc: "In a world asking us to choose between love and survival, this session offers a third path. Drawing on the Sufi Architecture of the heart, the Christian Mystical Traditions (Teresa of Avila, John of the Cross, Catherine of Siena, Mary Magdalene) and the Bhakti teachings of Sally Kempton, this session explores how we remain in Love frequency not above the fire, but inside it. Through a trauma-informed and somatic lens, we will move through the inner chambers - Sadr, Qalb, Fu'ad, Lubb - as living seasons. Learning to build capacity where the mystics built it: in the middle of collapse, all the way to the ground that cannot be destroyed. The session concludes with a guided contemplative practice.",
    date: "Sat Apr 25 · 11:00 AM Dubai",
    photo: "/practitioners/yana-sebaali.jpg",
  },
  {
    portal: 13,
    name: "Mira Tabbara",
    title: "Level Up Your Business: Grow Your Impact and Your Income with Mira",
    desc: "Level up your business — mindset and tools to structure offers, attract aligned clients, and grow impact and income sustainably.",
    date: "Sun Apr 26 · 11:00 AM Dubai",
    photo: "/practitioners/mira-tabbara.jpg",
  },
  {
    portal: 14,
    name: "Sarah Berjaoui",
    title: "Understanding Relationships & Polarity with Sarah Berjaoui",
    desc: "Understanding relationships and polarity — emotional patterns, masculine presence, and feminine polarity through Human Design, attachment theory, and Family Constellations.",
    date: "Sun Apr 26 · 7:30 PM Dubai",
    photo: "/practitioners/sarah-berjaoui.png",
    photoObjectPosition: "object-[85%_center]",
  },
  {
    portal: 15,
    name: "Aude Barras",
    title: "Embodied Remembrance — The Way of the Rose with Aude",
    desc: "We are living in a time of great divide, where polarization asks us to choose sides, harden our opinions, and numb our bodies to survive. The Mystics and Ancient Traditions offer a different way: The Way of the Rose. In this session, we will explore what it means to inhabit the body and remember our innate human capacity for deep, sacred delight. Through a blend of talk, transmission, and somatic practice, we will practice Embodied Remembrance—recalling that we are not separate from the Beloved, or from each other. Together, we will dive into the mysticism of the Beloved and explore how truly feeling the pleasure of being alive can disrupt the trance of fear. The Rose is not merely a flower, but a map of the human heart, reminding us that true strength is found not in force, but in the courage to unfurl and soften into the essence of being.",
    date: "Tue Apr 28 · 9:00 PM Dubai",
    photo: "/Aude%20Barras.jpg",
    photoObjectPosition: "object-[50%_22%]",
  },
  {
    portal: 16,
    name: "Julia Stadler & Maya Abou Chedid",
    title: "Psychospiritual Health in Times of War with Maya & Julia",
    desc: "Rooted in embodied experience, archetypal integration, and professional responsibility, this workshop bridges spiritual, mental, and emotional life when inner conflict and outer war bring profound upheaval — through therapeutic insight and shamanic wisdom. We explore emotional, psychological, and spiritual reactions; trauma, disintegration, and disillusionment in real time; urgency, compressed timelines, and how silence or delayed accountability affects those on a healing path; and how crisis can catalyze transformation. We close with a shamanic journey to invoke protection, connection, and renewal of faith.",
    date: "Wed Apr 29 · 9:00 PM Dubai",
    photo: "/practitioners/julia-stadler.jpg",
    photoSecondary: "/practitioners/maya-abou-chedid.jpg",
  },
  {
    portal: 17,
    name: "Mariam Al Shatti",
    title: "Authentic Alignment with Mariam Al Shatti",
    desc: "Teachings, writing, and meditation to witness what is within and walk in integrity with a straight spine.",
    date: "Date TBA · Dubai",
    photo: "/practitioners/mariam-alshatti.jpg",
  },
  {
    portal: 18,
    name: "Maria Amiouni",
    title: "The Return — Breaking the Pattern with Maria",
    desc: "The Return: breaking the pattern — we close by honoring what moved, naming what you will not repeat, and stepping forward as someone who can live what shifted. Gratitude, integration, and a clean edge for what continues.",
    date: "Sat May 2 · Time TBA · Dubai",
    photo: "/_114.jpg",
    photoObjectPosition: "object-[50%_25%]",
  },
];
