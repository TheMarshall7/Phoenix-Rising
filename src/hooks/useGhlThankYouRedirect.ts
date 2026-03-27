import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const THANK_YOU_PATH = "/phoenix-rising/thank-you";

function isGhlFormIframeOrigin(origin: string): boolean {
  try {
    const h = new URL(origin).hostname;
    return h === "api.leadconnectorhq.com" || h.endsWith(".leadconnectorhq.com");
  } catch {
    return false;
  }
}

function pathnameMatchesThankYou(pathname: string): boolean {
  const p = pathname.replace(/\/$/, "") || "/";
  const t = THANK_YOU_PATH.replace(/\/$/, "");
  return p === t;
}

/**
 * LeadConnector's form embed listens for postMessage from the iframe. One action is
 * `modify-parent-url`, which calls history.replaceState on the parent. That updates the
 * address bar but does not notify React Router, so users can end up on the checkout
 * screen while the URL shows /thank-you. We mirror that URL change with a real navigate.
 */
export function useGhlThankYouRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    if (pathnameMatchesThankYou(window.location.pathname)) {
      navigate(`${THANK_YOU_PATH}${window.location.search}${window.location.hash}`, {
        replace: true,
      });
    }
  }, [navigate]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!isGhlFormIframeOrigin(event.origin)) return;
      const data = event.data;
      if (!Array.isArray(data) || data[0] !== "modify-parent-url") return;
      const raw = data[1];
      if (typeof raw !== "string") return;
      try {
        const u = new URL(raw, window.location.origin);
        if (u.origin !== window.location.origin) return;
        if (u.pathname !== THANK_YOU_PATH) return;
        navigate(`${u.pathname}${u.search}${u.hash}`, { replace: true });
      } catch {
        /* invalid URL */
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [navigate]);
}
