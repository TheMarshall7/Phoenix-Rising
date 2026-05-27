/**
 * GoHighLevel / LeadConnector inline form URLs (iframe src).
 * Mailing list: GHL → Forms → Embed → iframe.
 */
export const GHL_MAILING_LIST_FORM_ID = "zESL3wsL8RFXi1Ilc6F6";

export const GHL_SANCTUARY_LIST_FORM_URL =
  `https://api.leadconnectorhq.com/widget/form/${GHL_MAILING_LIST_FORM_ID}`;

/** Must match GHL embed “height” / data-height so the widget reserves space. */
export const GHL_MAILING_LIST_FORM_HEIGHT_PX = 276;

/**
 * Contact page inline form — GHL → Forms → your form → Embed → copy the form id from the iframe URL.
 * Example: https://api.leadconnectorhq.com/widget/form/XXXXXXXX → use XXXXXXXX below.
 */
export const GHL_CONTACT_FORM_ID = "REPLACE_WITH_CONTACT_FORM_ID";

export const GHL_CONTACT_FORM_URL =
  `https://api.leadconnectorhq.com/widget/form/${GHL_CONTACT_FORM_ID}`;

/** Match the height in your GHL embed snippet (increase if fields are clipped). */
export const GHL_CONTACT_FORM_HEIGHT_PX = 520;

/** Instagram feed: paste SnapWidget / Elfsight / similar iframe src when ready. */
export const INSTAGRAM_FEED_EMBED_URL = "";
