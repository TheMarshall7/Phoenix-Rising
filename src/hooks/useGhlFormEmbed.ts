import { useEffect } from "react";

const GHL_FORM_EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";
const GHL_FORM_EMBED_SCRIPT_ID = "ghl-form-embed-msgsndr";

/** Loads LeadConnector / GHL form embed script once per page (idempotent). */
export function useGhlFormEmbed() {
  useEffect(() => {
    if (document.getElementById(GHL_FORM_EMBED_SCRIPT_ID)) return;
    const script = document.createElement("script");
    script.id = GHL_FORM_EMBED_SCRIPT_ID;
    script.src = GHL_FORM_EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);
}
