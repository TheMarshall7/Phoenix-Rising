/**
 * Text testimonials sourced from public/Testimonials/PR-3/ (screenshot collages).
 * Wording cleaned from OCR. Optional `name` is the participant as shown on the card; when omitted, no attribution line is shown.
 * Testimonials with `name` are listed first in the carousel (see sort in PhoenixTestimonialsSection).
 */

export type PhoenixTextTestimonial = {
  quote: string;
  /** When set, shown on the card and sorted before entries without a name. */
  name?: string;
};

export const PHOENIX_RISING_TEXT_TESTIMONIALS: PhoenixTextTestimonial[] = [
  {
    quote:
      "Thank you Mariam for your talk. Your way of presenting your talk is done with wisdom and serenity. Gratitude is one of my very important values. Wishing you a very good continuation.",
  },
  {
    quote:
      "This session helped me with releasing a past trauma; it was so emotional for me. Thank you Hanan.",
  },
  {
    quote:
      "This really resonated with me on so many levels. Thank you Hanan—you have a very powerful and grounded energy. I enjoyed this so much and it validated a lot for me.",
  },
  {
    quote:
      "Beautiful opening ceremony—thank you Maria. May we all unite in love, and may you be well and safe.",
  },
  {
    quote:
      "An amazing opening session, Maria—thank you very much for this great community. I have missed the live sessions, but I am listening to the recordings and connecting deeply. So much love to you.",
  },
  {
    quote:
      "Keeping connected to Source and regulating my nervous system daily keeps me calm within all the chaos around me in Lebanon. This is beautiful—Rising Phoenix. Thank you Maria. Love and light.",
  },
  {
    quote:
      "Thank you Maria for your honesty and authenticity as usual. Thank you for reminding me that even in the darkest times—where I honestly lost faith in humanity—I should not give up and should challenge myself, now more than ever, to stay connected to the divine, because this is the only way to make change in this world, and it is also my responsibility. Much love.",
  },
  {
    quote:
      "Every moment of this session was insightful. Sara is a brilliant coach who truly knows how to connect with her audience, tap into their potential, and leave a lasting impact. I only wish the session was longer—it flew by in an instant!",
  },
  {
    quote:
      "After having some time to slowly integrate, I can feel the leaps and changes that have been taking place, and I am so grateful. The collective spirit was magical, and I am so grateful that we built such a strong sense of community and closeness. Thank you always for sharing your wisdom.",
  },
  {
    quote:
      "I am getting tired writing messages saying how awesome it was and how amazing you are! Wow—an incredible gift; this was a blessing. Thank you from the bottom of my heart.",
  },
  {
    quote:
      "I did not have the chance to attend the sessions live, but I watched three on replay last night and did the prayer this morning on my way to work. I absolutely loved the prayer—I had goosebumps through it all. I loved the session on intimacy. These are such high-quality sessions. Thank you for holding and offering that space. God knows I needed this prayer. It is what the world needs.",
  },
];
