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
    desc: `We begin by arriving together and intentionally creating space for integration and embodiment, grounding ourselves in how to truly be inside this journey. We will explore:
• How to work with your body, your energy, your emotions
• How to stay with yourself when things feel uncomfortable
• How to move through intensity without shutting down or overwhelming yourself

Here, we establish a strong foundation so that over the next three weeks, you can meet yourself fully within the process, while gently beginning to explore the role of Astrology, Gene Keys, and your unique design, allowing you to understand what is unfolding for you in real time.`,
    date: "Sat Apr 11 · 11:00 AM Dubai",
    photo: "/_114.jpg",
    photoObjectPosition: "object-[50%_25%]",
  },
  {
    portal: 2,
    name: "Alyah Al Jasser",
    title: "Reclaiming a Better Work/Life Balance Using the Wisdom of the Menstrual Cycle with Alyah",
    desc: `This session is a powerful exploration of how cycle awareness can transform the way women work and live. In a fast-paced, capitalistic world that rewards constant output, this session invites women to reclaim their natural rhythm as a source of wisdom and self-trust rather than limitation. Participants gain practical tools to align their energy, boundaries, and daily demands with the menstrual cycle — reducing burnout and cultivating a more sustainable, nourishing approach to wellbeing.`,
    date: "Sun Apr 12 · 12:30 PM Dubai",
    photo: "/practitioners/alyah-al-jasser.jpg",
  },
  {
    portal: 3,
    name: "Rawan Roshni",
    title: "Voice Liberation & Re-Rooting with Rawan Roshni",
    desc: `We will work with our voice as an instrument of transformation – in sounding, speaking and singing – re-rooting into ancestry, authenticity, and empowerment. Working on liberating the voice itself, as well as liberation of the self through the voice, and the weaving of our voices into a tapestry of collective liberation! This session help to connect this inner work with also the remembering of the cultural connection to the ways of counsel of Arab tribes – Adab Al Majlis Al-Arabi.`,
    date: "Sun Apr 12 · 7:30 PM Dubai",
    photo: "/practitioners/rawan-roshni.jpg",
  },
  {
    portal: 4,
    name: "Haya Yasmeen",
    title: "Dharma Marga: Discover Your Life Path with Haya Yasmeen",
    desc: `Explore the concept of Dharma Marga and uncover your Life Path number as a practical tool for clarity, self-awareness, and direction.
Through a guided questionnaire and a fearless embodiment exercise, you’ll be supported in making empowered decisions and aligning more deeply with your life path.`,
    date: "Tue Apr 14 · 9:00 PM Dubai",
    photo: "/practitioners/haya-yasmeen.jpg",
  },
  {
    portal: 5,
    name: "Aude Barras",
    title: "Embodied Remembrance — The Way of the Rose with Aude",
    desc: `We are living in a time of great divide, where polarization asks us to choose sides, harden our opinions, and numb our bodies to survive. The Mystics and Ancient Traditions offer a different way: The Way of the Rose. In this session, we will explore what it means to inhabit the body and remember our innate human capacity for deep, sacred delight.

Through a blend of talk, transmission, and somatic practice, we will practice Embodied Remembrance—recalling that we are not separate from the Beloved, or from each other. Together, we will dive into the mysticism of the Beloved and explore how truly feeling the pleasure of being alive can disrupt the trance of fear. The Rose is not merely a flower, but a map of the human heart, reminding us that true strength is found not in force, but in the courage to unfurl and soften into the essence of being.`,
    date: "Wed Apr 15 · 9:00 PM Dubai",
    photo: "/Aude%20Barras.jpg",
    photoObjectPosition: "object-[50%_22%]",
  },
  {
    portal: 6,
    name: "Imad Naassi",
    title: "Somatic Breathwork with Imad",
    desc: `A journey to release exhaustion, suppressed emotions, and reclaim wholeness through breath and somatic guidance. In this session, you’ll be gently guided to reconnect with your body’s natural rhythms, allowing held tension and unprocessed feelings to surface and move safely. Through intentional breathing and embodied awareness, you’ll begin restoring a sense of inner balance, resilience, and deeper connection to yourself.`,
    date: "Thu Apr 16 · 9:00 PM Dubai",
    photo: "/practitioners/imad-naassi-lightbox.jpg",
    photoObjectPosition: "object-[50%_22%]",
  },
  {
    portal: 7,
    name: "Sara Abiqwa",
    title: "Living & Leading From Your Higher Self with Sara Abiqwa",
    desc: `If your peace depends on what’s happening around you… you’re not free.
Because then your life is deciding for you… how you feel, how you show up, who you become. This session is a return. To the part of you that is not and cannot be controlled by the outside world.
A return to your Higher Self… the part of you that can choose, and that can experience life from a place of conscious awareness instead of reaction. Why give away your agency when it has always been yours?`,
    date: "Sat Apr 18 · 12:30 PM Dubai",
    photo: "/practitioners/sara-abiqwa.jpg",
  },
  {
    portal: 8,
    name: "Maria Amiouni",
    title: "The Fire Within: A Re-Commitment to your Mission with Maria",
    desc: `In a time where there is war, both within and without, this session invites you to turn inward and reconnect with your truth, mission, and the spark that is ready to move through you. Working with the Aries New Moon and Gene Key 3, we explore what it means to begin within the unknown: to trust the chaos as part of creation, rather than something to fix.

This is a space to reflect on:
• What you are here to stand for
• How your inner world shapes your outer reality
• How to move from autopilot into conscious, embodied action
• Allowing the fire to refine you, clear what is no longer true, and take one honest step forward.`,
    date: "Aries New Moon · Sun Apr 19 · 7:30 PM Dubai",
    photo: "/_114.jpg",
    photoObjectPosition: "object-[50%_25%]",
  },
  {
    portal: 9,
    name: "Soraya Aouad (Sunchef)",
    title: "From Intimidation to Empowerment",
    desc: `This session is an invitation to reclaim your power in the kitchen. Cooking doesn’t have to feel overwhelming. We’ll explore how it can become a grounded practice of self-care, self-leadership, and embodied discipline — not perfection. I’ll share practical tools to make it sustainable and enjoyable, along with the mindset shifts that helped me move from overwhelm to ownership. Together, we’ll create space for reflection, practical guidance, and open conversation as you explore your relationship with nourishment.`,
    date: "Tue Apr 21 · 9:00 PM Dubai",
    photo: "/practitioners/soraya-aouad.jpg",
  },
  {
    portal: 10,
    name: "Amira ElBeialy",
    title: "Magnetize & Manifest with Amira",
    desc: `A guided session designed to help you clarify your true intention and uncover what may be unconsciously blocking its fulfillment. Together, we’ll identify and release limiting beliefs and internal resistance, and recalibrate your nervous system to feel safe receiving what you desire. This is about moving from hoping and waiting… to aligning, embodying, and becoming available for what you’re calling in.`,
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
    desc: `In a world asking us to choose between love and survival, this session offers a third path. Drawing on the Sufi Architecture of the heart, the Christian Mystical Traditions (Teresa of Avila, John of the Cross, Catherine of Siena, Mary Magdalene) and the Bhakti teachings of Sally Kempton, this session explores how we remain in Love frequency not above the fire, but inside it.

Through a trauma-informed and somatic lens, we will move through the inner chambers - Sadr, Qalb, Fu’ad, Lubb - as living seasons. Learning to build capacity where the mystics built it: in the middle of collapse, all the way to the ground that cannot be destroyed. The session concludes with a guided contemplative practice.`,
    date: "Sat Apr 25 · 11:00 AM Dubai",
    photo: "/practitioners/yana-sebaali.jpg",
  },
  {
    portal: 13,
    name: "Mira Tabbara",
    title: "Level Up Your Business: Grow Your Impact and Your Income with Mira",
    desc: `In this workshop, Mira will guide participants to gain clarity on their business vision and learn simple, practical strategies and systems to create more consistent income. Designed for solopreneurs and freelancers at any stage, the session blends mindset and business tools to help you structure your offers, attract aligned clients, and build a sustainable, profitable business so you can continue serving with greater impact and ease.`,
    date: "Sun Apr 26 · 11:00 AM Dubai",
    photo: "/practitioners/mira-tabbara.jpg",
  },
  {
    portal: 14,
    name: "Sarah Berjaoui",
    title: "Understanding Relationships & Polarity with Sarah Berjaoui",
    desc: `A transformational workshop for men and women to explore emotional patterns, relationships, and masculine identity through Human Design, Attachment Theory, and Family Constellations. In this space, you’ll discover how your Human Design shapes your energy, decisions, and behaviors—and how to work with it rather than against it, while understanding your attachment style (avoidant, anxious, or disorganized) and how it connects to your design. You’ll also explore what it means to cultivate grounded masculine presence and feminine polarity, learning to hold space with clarity, safety, and consistency, while uncovering ancestral and family patterns that may be shaping your relationships and repeating cycles.`,
    date: "Sun Apr 26 · 7:30 PM Dubai",
    photo: "/practitioners/sarah-berjaoui.png",
    photoObjectPosition: "object-[85%_center]",
  },
  {
    portal: 15,
    name: "Hadar Cohen",
    title: "Listening Within: Learning to Trust Yourself with Hadar Cohen",
    desc: `In this session, we explore what it truly means to trust yourself as a lived experience, not just an idea—uncovering the mental patterns that keep you stuck in overthinking, doubt, and second-guessing, and the emotional systems beneath them. Rather than choosing between mind or emotion, you’ll learn how to connect the two so you can hear your inner voice with more clarity, groundedness, and trust, creating space to slow down, tune in, and begin rebuilding your relationship with yourself from the inside out.`,
    date: "Tue Apr 28 · 9:00 PM Dubai",
    photo: "/practitioners/hadar-cohen.jpg",
  },
  {
    portal: 16,
    name: "Julia Stadler & Maya Abou Chedid",
    title: "Psychospiritual Health in Times of War with Maya & Julia",
    desc: `This session is rooted in embodied experience, archetypal integration and professional responsibility. In times of war, individuals experience profound mental, emotional, and spiritual upheavals. This workshop is designed to bridge the spiritual with the mental and emotional, offering participants tools and practices to navigate both the inner and outer turbulence. Through a combination of therapeutic insight and shamanic wisdom, we will explore:

• Emotional, psychological, and spiritual reactions to internal conflicts and external wars
• Recognizing patterns of trauma, disintegration and disillusionment in real time
• Processing urgency, compressed timelines, and the pressure to act quickly.
• How “silence” (including delayed or absent accountability) affect individuals who are on their healing journey.
• How crises can catalyze personal transformation.
• Shamanic journey to invoke protection, connection and renewal of faith`,
    date: "Wed Apr 29 · 9:00 PM Dubai",
    photo: "/practitioners/julia-stadler.jpg",
    photoSecondary: "/practitioners/maya-abou-chedid.jpg",
  },
  {
    portal: 17,
    name: "Mariam Al Shatti",
    title: "Authentic Alignment with Mariam Al Shatti",
    desc: `Discover the inner wisdom with this session of remembrance.
A class weaving teachings, writing and meditation. We walk in with a humble heart to simply witness what is within. In recognizing what to alchemize and what is to be brought to light, we can walk this life in integrity with a straight spine.`,
    date: "Date TBA · Dubai",
    photo: "/practitioners/mariam-alshatti.jpg",
  },
  {
    portal: 18,
    name: "Maria Amiouni",
    title: "The Return — Breaking the Pattern with Maria",
    desc: `We close with a deep return—after 21 days of turning inward, being with yourself, and witnessing subtle shifts in how you think, respond, and show up. This final session is about integration: recognizing what you are no longer available for, and what you are now ready to invite in. Under the Scorpio Full Moon, we reflect on the patterns and loops that have surfaced, what you are ready to release, and what it truly means to stop returning to the same behaviors. It is an invitation to meet yourself as you are, without immediately trying to fix or change, allowing awareness to settle into the body until repetition is no longer needed. From this place, we close by returning inward—to stillness, presence, and a more honest, grounded relationship with yourself.`,
    date: "Sat May 2 · Time TBA · Dubai",
    photo: "/_114.jpg",
    photoObjectPosition: "object-[50%_25%]",
  },
];
