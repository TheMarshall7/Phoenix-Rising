/**
 * Text and names match the Phoenix Rising PR III testimonial collages:
 * `Website March 2026/Phoenix Rising/Testimonials/PR 3 /` — 7.png, 8.png, 9.png, 10.png
 * (same set as `public/Testimonials/PR-3/` where those assets are copied for the site).
 * Entries with `name` are sorted first in the carousel (all of these include a name).
 */

export type PhoenixTextTestimonial = {
  quote: string;
  /** When set, shown on the card and sorted before entries without a name. */
  name?: string;
};

export const PHOENIX_RISING_TEXT_TESTIMONIALS: PhoenixTextTestimonial[] = [
  {
    name: "LINA",
    quote:
      "Thank you Mariam for your talk. Your way of presenting your talk is done with wisdom & serenity. Gratitude is one of my very important values Wishing you a very good continuation.",
  },
  {
    name: "SAREYA",
    quote:
      "This session helped me with releasing a past trauma, it was so emotional for me. Thank you Hanan.",
  },
  {
    name: "ZEIN",
    quote:
      "This really resonated with me on so many levels. Thank you Hanan - you have a very powerful and grounded energy. I enjoyed this so much and it validated a lot for me.",
  },
  {
    name: "JESSICA",
    quote:
      "Beautiful opening ceremony thank you Maria 🙏 May we all unite in love and may you be well and safe",
  },
  {
    name: "CARINE",
    quote:
      "An amazing opening session Maria, thank you very much for this great community, I have missed the live sessions but I am indeed listening to the recordings and connecting deeply. So much love to you",
  },
  {
    name: "NADINE",
    quote:
      "Keeping connected to Source and regulating daily my Nervous System keeps me calm within in all the chaos around me in Lebanon. This is beautiful : Rising Phoenix. Thank you Maria. Love & Light",
  },
  {
    name: "LEA",
    quote:
      "Thank you Maria for your honesty and authenticity as usual. Thank you for reminding me that even in the darkest times (where I honestly lost faith in humanity)I should not give up and I should challenge myself, now more than ever, to stay connected to the divine, because this is the only way to make change in this world, and it's also my responsibility. Much much love.",
  },
  {
    name: "NICOLE",
    quote:
      "Every moment of this session was insightful. Sara is a brilliant coach who truly knows how to connect with her audience, tap into their potential, and leave a lasting impact. I only wish the session was longer - it flew by in an instant!",
  },
  {
    name: "MAYSSA",
    quote:
      "After having some time to slowly integrate, I can feel the leaps and changes that have been taking place, and I'm so grateful. The collective spirit was magical and feeling so grateful that we built such a strong sense of community and closeness. Thank you always for sharing your wisdom.",
  },
  {
    name: "BASHEER",
    quote:
      "I am getting tired writing you messages saying how awesome it was and how amazing you are!!! Wow, an incredible gift, this was a blessing! Thank you from the bottom of my heart!",
  },
  {
    name: "MICHAEL",
    quote:
      "I didn't have the chance to attend the sessions live but I watched 3 in the replay last night & did the prayer this morning while on my way to work. I absolutely loved the prayer. I had goosebumps through it all. I loved the session on intimacy. These are such high quality sessions. Thank you for holding & offering that space. God knows I needed this prayer. It's what the world needs.",
  },
];
