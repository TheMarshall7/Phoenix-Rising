/**
 * Phoenix Rising IV — practitioner grid + profile copy (lightbox).
 */

export type PhoenixPractitioner = {
  name: string;
  title: string;
  photo?: string;
  enlargedPhoto?: string;
  photoObjectPosition?: string;
  /** Short paragraph(s) for modal */
  bio: string;
  /** Single intention line (shown without repeating the word if already present) */
  intention: string;
};

export const PHOENIX_PRACTITIONERS: PhoenixPractitioner[] = [
  {
    name: "Maria Amiouni",
    title: "Spiritual Mentor & Host",
    photo: "/_114.jpg",
    bio: "Maria Amiouni is a spiritual mentor, writer, and teacher devoted to helping others remember their innate wisdom and return to the rhythm of the Earth and the soul. Through Human Design, Gene Keys, Astrology, and Rituals, she creates spaces for transformation, reflection, and renewal.\n\nAs the founder of The Phoenix Rising Summit and Sacred Spaces, she weaves ancient teachings with modern awareness to guide others through the cycles of life, death, and rebirth—rooted in devotion, beauty, and truth.",
    intention: "To hold a field where embodiment, integration, and remembrance become living practice.",
  },
  {
    name: "Alyah Al Jasser",
    title: "Cycle Awareness",
    photo: "/practitioners/alyah-al-jasser.jpg",
    bio: "A women’s coach and cycle mentor, Alyah supports women in building self-trust and living aligned, meaningful lives through embodiment and conscious awareness.",
    intention: "To offer from the heart and be in community.",
  },
  {
    name: "Rawan Roshni",
    title: "Voice Liberation",
    photo: "/practitioners/rawan-roshni.jpg",
    bio: "An artivist, facilitator, and voice liberation guide, Rawan weaves music, ritual, and movement to support collective healing, expression, and remembrance.",
    intention: "To connect with community and expand her impact.",
  },
  {
    name: "Haya Yasmeen",
    title: "Dharma Marga",
    photo: "/practitioners/haya-yasmeen.jpg",
    bio: "A Palestinian yoga teacher and rebirthing practitioner, Haya supports nervous system healing, resilience, and embodied safety through somatics and breath.",
    intention:
      "To support people in moving from survival into safety — reconnecting to their bodies, building resilience, and feeling at home within themselves.",
  },
  {
    name: "Hadar Cohen",
    title: "Listening Within",
    photo: "/practitioners/hadar-cohen.jpg",
    bio: "A scholar, mystic, and artist, Hadar weaves spirituality, justice, and community building through teachings rooted in Jewish mysticism and collective healing.",
    intention: "To unite and remember our shared love.",
  },
  {
    name: "Imad Naassi",
    title: "Breathwork Facilitator",
    photo: "/practitioners/imad-naassi-lightbox.jpg",
    photoObjectPosition: "object-[50%_22%]",
    bio: "A physiotherapist and somatic practitioner, Imad brings over a decade of experience in trauma release and body-based healing, guiding people back to wholeness through the body.",
    intention: "To share the work that transformed his life.",
  },
  {
    name: "Sara Abiqwa",
    title: "Higher Self Guide",
    photo: "/practitioners/sara-abiqwa.jpg",
    bio: "An embodied leadership and self-empowerment coach, Sara supports women in reconnecting to their inner power and leading with clarity, truth, and self-trust.",
    intention: "To help others remember their agency and highest expression.",
  },
  {
    name: "Soraya Aouad",
    title: "Sunchef",
    photo: "/practitioners/soraya-aouad.jpg",
    bio: "A holistic chef and health coach, Soraya helps people reconnect with nourishment as a grounding, daily act of self-love through simple and sustainable practices.",
    intention:
      "To bring people back into a loving, nourishing relationship with food — where everyday rituals become a pathway to grounding, presence, and wholeness.",
  },
  {
    name: "Amira ElBeialy",
    title: "Magnetize & Manifest",
    photo: "/practitioners/amira-elbeialy.jpg",
    bio: "A relationship and life purpose coach and ThetaHealing practitioner, Amira supports heart-led individuals in healing relational patterns and stepping into self-trust, love, and aligned abundance.",
    intention: "To share her magic, medicine, and gifts.",
  },
  {
    name: "Caline Malek",
    title: "Heart-Centered Practice",
    photo: "/practitioners/caline-malek.jpg",
    bio: "A journalist, Human Design reader, and mindfulness coach, Caline helps people navigate uncertainty and make clear, aligned decisions through self-understanding.",
    intention: "To support confidence and inner clarity.",
  },
  {
    name: "Yāna Nancy Sebaali",
    title: "Cyclical Intelligence",
    photo: "/practitioners/yana-sebaali.jpg",
    bio: "A trauma-informed healer, coach, and space holder, Yāna guides individuals through self-inquiry and remembrance, bridging feminine and masculine energies through embodied living.",
    intention: "To shift healing from a project into a lived, cyclical practice rooted in love and inner authority.",
  },
  {
    name: "Mira Tabbara",
    title: "Business Mentor",
    photo: "/practitioners/mira-tabbara.jpg",
    bio: "A life and business coach, Mira helps purpose-driven entrepreneurs build sustainable, aligned businesses that reflect their value and create real impact.",
    intention: "To support healers and coaches in growing with clarity and sustainability.",
  },
  {
    name: "Sarah Berjaoui",
    title: "Relationship Expert",
    photo: "/practitioners/sarah-berjaoui.png",
    photoObjectPosition: "object-[85%_center]",
    bio: "A transformational guide blending Human Design, Gene Keys, Family Constellations, Tantra, and relational work, Sarah supports deep emotional clarity, embodiment, and personal sovereignty.",
    intention:
      "To guide people back to their truth — releasing what they were never meant to carry and stepping into a life led by clarity, embodiment, and inner authority.",
  },
  {
    name: "Aude Barras",
    title: "Embodied Remembrance",
    photo: "/Aude%20Barras.jpg",
    photoObjectPosition: "object-[50%_22%]",
    bio: "Rooted in a living lineage of feminine embodiment and devotion to the Rose, Aude guides pilgrimages and sacred spaces of remembrance, inviting others to walk the path of love and reconnect with the Divine Mother.",
    intention: "To simply be Love.",
  },
  {
    name: "Julia Stadler",
    title: "Psychotherapist",
    photo: "/practitioners/julia-stadler.jpg",
    bio: "An Oxford-trained psychotherapist bridging depth psychology and spirituality, Julia creates grounded, safe spaces for exploring transformation through embodied awareness and integration.",
    intention: "To deepen community and support real-time embodied exploration.",
  },
  {
    name: "Maya Abou Chedid",
    title: "Shamanic Practitioner",
    photo: "/practitioners/maya-abou-chedid.jpg",
    bio: "Blending science with ancestral healing, Maya weaves together yoga, plant medicine, and indigenous wisdom to support deep personal and collective transformation.",
    intention: "To stay aligned with what is unfolding and bring meaning through healing.",
  },
  {
    name: "Mariam Alshatti",
    title: "Authentic Alignment",
    photo: "/practitioners/mariam-alshatti.jpg",
    bio: "A meditation teacher and ceremonial space holder, Mariam is devoted to conscious living, authenticity, and guiding others back to their inner radiance.",
    intention: "To support others in rising into their natural light.",
  },
];
