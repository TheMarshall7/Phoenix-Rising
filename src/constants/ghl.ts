/**
 * GoHighLevel / LeadConnector inline form URLs (iframe src).
 * Mailing list: GHL → Forms → Embed → iframe.
 */
export const GHL_MAILING_LIST_FORM_ID = "zESL3wsL8RFXi1Ilc6F6";

export const GHL_SANCTUARY_LIST_FORM_URL =
  `https://api.leadconnectorhq.com/widget/form/${GHL_MAILING_LIST_FORM_ID}`;

/** Must match GHL embed “height” / data-height so the widget reserves space. */
export const GHL_MAILING_LIST_FORM_HEIGHT_PX = 276;

/** Contact page inline form (GHL embed). */
export const GHL_CONTACT_FORM_ID = "q66f0ex2kZojRa1EDO8b";

export const GHL_CONTACT_FORM_IFRAME_ID = `inline-${GHL_CONTACT_FORM_ID}`;

export const GHL_CONTACT_FORM_URL =
  `https://api.leadconnectorhq.com/widget/form/${GHL_CONTACT_FORM_ID}`;

/** Must match GHL embed data-height. */
export const GHL_CONTACT_FORM_HEIGHT_PX = 498;

/** Egypt pilgrimage waitlist (GHL embed). */
export const GHL_EGYPT_WAITLIST_FORM_ID = "0jbtF5O8MHiyVqP16OEu";

export const GHL_EGYPT_WAITLIST_IFRAME_ID = `inline-${GHL_EGYPT_WAITLIST_FORM_ID}`;

export const GHL_EGYPT_WAITLIST_FORM_URL =
  `https://api.leadconnectorhq.com/widget/form/${GHL_EGYPT_WAITLIST_FORM_ID}`;

/** Must match GHL embed data-height for Egypt List. */
export const GHL_EGYPT_WAITLIST_FORM_HEIGHT_PX = 492;

/** France pilgrimage waitlist (GHL embed). */
export const GHL_FRANCE_WAITLIST_FORM_ID = "3oEmkrNS4ONPLTLPxV77";

export const GHL_FRANCE_WAITLIST_IFRAME_ID = `inline-${GHL_FRANCE_WAITLIST_FORM_ID}`;

export const GHL_FRANCE_WAITLIST_FORM_URL =
  `https://api.leadconnectorhq.com/widget/form/${GHL_FRANCE_WAITLIST_FORM_ID}`;

/** Must match GHL embed data-height for France List. */
export const GHL_FRANCE_WAITLIST_FORM_HEIGHT_PX = 492;

export type GhlInlineFormConfig = {
  formId: string;
  formUrl: string;
  iframeId: string;
  heightPx: number;
  formName: string;
  title: string;
};

/** Dedicated GHL forms per pilgrimage waitlist; others use the sanctuary mailing list. */
export function getPilgrimageWaitlistForm(pilgrimageName: string): GhlInlineFormConfig | null {
  if (pilgrimageName === "Egypt") {
    return {
      formId: GHL_EGYPT_WAITLIST_FORM_ID,
      formUrl: GHL_EGYPT_WAITLIST_FORM_URL,
      iframeId: GHL_EGYPT_WAITLIST_IFRAME_ID,
      heightPx: GHL_EGYPT_WAITLIST_FORM_HEIGHT_PX,
      formName: "Egypt List",
      title: "Egypt List",
    };
  }
  if (pilgrimageName === "France") {
    return {
      formId: GHL_FRANCE_WAITLIST_FORM_ID,
      formUrl: GHL_FRANCE_WAITLIST_FORM_URL,
      iframeId: GHL_FRANCE_WAITLIST_IFRAME_ID,
      heightPx: GHL_FRANCE_WAITLIST_FORM_HEIGHT_PX,
      formName: "France List",
      title: "France List",
    };
  }
  return null;
}

/** Instagram feed: paste SnapWidget / Elfsight / similar iframe src when ready. */
export const INSTAGRAM_FEED_EMBED_URL = "";
